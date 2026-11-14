/* 진행 상태 로직과 브라우저 저장. 기존 lib/progress.ts의 규칙을 그대로 옮기고 심화 트랙·설정을 더했습니다.
   서버·로그인 없이 localStorage에 저장하며, JSON 내보내기/가져오기로 백업합니다. */
(function (root) {
  var CG = root.CG = root.CG || {};
  var KEY = 'cubase-guide:v1';
  var TOTAL = 42;

  function initial() {
    return { records: {}, logs: [], keys: {}, revision: 0, tracks: {}, settings: { os: 'win', loopback: '' } };
  }
  function blank() {
    return { steps: [], criteria: [], note: '', stuck: '', minutes: '', mode: 60, file: '', plugin: {}, evalChecks: [], evalMinutes: '', evalSource: '', independent: false };
  }
  function pad(n) { return String(n).padStart(2, '0'); }
  function frontier(s) {
    for (var id = 1; id <= TOTAL; id++) { if (!s.records[id] || s.records[id].status !== 'complete') return id; }
    return TOTAL + 1;
  }
  function clean(v, n) { return typeof v === 'string' ? v.slice(0, n || 10000) : ''; }
  function bools(v, n) { return Array.isArray(v) ? v.slice(0, n).map(function (x) { return x === true; }) : []; }
  function uid() { return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10); }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function validMinutes(v, max) { var n = Number(v); return Number.isFinite(n) && n > 0 && n <= max; }

  function sanitizeDraft(v) {
    v = v || {};
    var plugin = {};
    Object.keys(v.plugin || {}).slice(0, 12).forEach(function (k) { plugin[k] = clean(v.plugin[k], 1000); });
    return {
      steps: bools(v.steps, 20), criteria: bools(v.criteria, 12), note: clean(v.note), stuck: clean(v.stuck, 2000),
      minutes: clean(String(v.minutes == null ? '' : v.minutes), 6), mode: v.mode === 30 ? 30 : 60, file: clean(v.file, 500), plugin: plugin,
      evalChecks: bools(v.evalChecks, 6), evalMinutes: clean(String(v.evalMinutes == null ? '' : v.evalMinutes), 6),
      evalSource: clean(v.evalSource, 300).trim(), independent: v.independent === true
    };
  }

  /* 상태를 바꾸는 유일한 함수. 규칙을 어기면 Error를 던지고 원본은 건드리지 않습니다. */
  function mutate(s, b, criteriaCount, now) {
    now = now || new Date().toISOString();
    var next = clone(s), action = b.action;
    next.tracks = next.tracks || {}; next.settings = next.settings || { os: 'win', loopback: '' };

    if (action === 'keys') {
      var k = clean(b.command, 100); if (!k) throw Error('명령을 확인해 주세요.');
      next.keys[k] = { binding: clean(b.binding, 100), recall: b.recall === true }; next.revision++; return next;
    }
    if (action === 'trackCheck') {
      var cid = clean(b.id, 60); if (!/^[a-z]\d+:\d+$/.test(cid)) throw Error('체크 항목이 올바르지 않습니다.');
      if (b.value === true) next.tracks[cid] = true; else delete next.tracks[cid];
      next.revision++; return next;
    }
    if (action === 'trackReset') {
      var prefix = clean(b.prefix, 4); if (!/^[a-z]$/.test(prefix)) throw Error('트랙이 올바르지 않습니다.');
      Object.keys(next.tracks).forEach(function (id) { if (id.charAt(0) === prefix) delete next.tracks[id]; });
      next.revision++; return next;
    }
    if (action === 'setting') {
      if (b.key === 'os' && (b.value === 'win' || b.value === 'mac')) next.settings.os = b.value;
      else if (b.key === 'loopback' && (b.value === 'yes' || b.value === 'no' || b.value === '')) next.settings.loopback = b.value;
      else throw Error('설정 값이 올바르지 않습니다.');
      next.revision++; return next;
    }

    var id = Number(b.lesson);
    if (!Number.isInteger(id) || id < 1 || id > TOTAL) throw Error('회차가 올바르지 않습니다.');
    var prev = s.records[id];
    if (id > frontier(s) && !(prev && prev.status === 'complete')) throw Error('앞 회차의 완료 확인이 먼저 필요합니다.');
    if (['save', 'partial', 'complete', 'reopen'].indexOf(String(action)) < 0) throw Error('저장 동작이 올바르지 않습니다.');
    var d = sanitizeDraft(b.draft || (prev && prev.draft) || {});
    if (action === 'partial' && !validMinutes(d.minutes, 1440)) throw Error('실제 소요 시간을 1~1440분으로 기록해 주세요.');
    if (action === 'complete') {
      if (b.confirmation !== pad(id) + '회차 완료') throw Error('직접 완료 확인이 필요합니다.');
      if (d.criteria.length !== criteriaCount || !d.criteria.every(Boolean)) throw Error('완료 기준을 모두 확인해 주세요.');
      if (!validMinutes(d.minutes, 1440)) throw Error('실제 소요 시간을 1~1440분으로 기록해 주세요.');
      if (id >= 41) {
        if (d.evalChecks.length !== 6 || !d.evalChecks.every(Boolean) || !d.independent || !d.evalSource || !validMinutes(d.evalMinutes, 30))
          throw Error('자료 없이 30분 이내에 여섯 과제를 재현하고 평가 기록을 남겨 주세요.');
        if (Number(d.minutes) < Number(d.evalMinutes)) throw Error('전체 실습 시간은 평가 시간 이상이어야 합니다.');
        var p41 = s.records[41] && s.records[41].proof;
        if (id === 42 && (!p41 || d.evalSource === p41.evalSource)) throw Error('41회차와 다른 소스로 재현해 주세요.');
      }
    }
    if (action === 'reopen' && b.confirmation !== pad(id) + '회차 다시 연습') throw Error('완료 취소 확인이 필요합니다.');
    var wasComplete = !!(prev && prev.status === 'complete');
    var complete = action === 'complete' || (wasComplete && action !== 'reopen');
    var entry = { status: complete ? 'complete' : 'partial', draft: d, updatedAt: now };
    if (complete) { entry.completedAt = (prev && prev.completedAt) || now; entry.proof = (prev && prev.proof) || clone(d); }
    next.records[id] = entry;
    if (action !== 'save') {
      next.logs.push({ id: uid(), lesson: id, kind: action === 'reopen' ? 'reopen' : wasComplete ? 'review' : action,
        minutes: action === 'reopen' ? 0 : Number(d.minutes) || 0, note: d.note, stuck: d.stuck, at: now });
    }
    if (action === 'partial') next.records[id].draft.minutes = '';
    next.logs = next.logs.slice(-1200); next.revision++; return next;
  }

  /* 가져온 JSON(이 사이트 또는 이전 Practice Room의 내보내기)을 안전한 상태로 정리합니다. */
  function normalize(raw) {
    var s = initial(); if (!raw || typeof raw !== 'object') return s;
    Object.keys(raw.records || {}).forEach(function (k) {
      var id = Number(k), r = raw.records[k]; if (!Number.isInteger(id) || id < 1 || id > TOTAL || !r) return;
      var e = { status: r.status === 'complete' ? 'complete' : 'partial', draft: sanitizeDraft(r.draft), updatedAt: clean(r.updatedAt, 40) };
      if (e.status === 'complete') { e.completedAt = clean(r.completedAt, 40) || e.updatedAt; e.proof = sanitizeDraft(r.proof || r.draft); }
      s.records[id] = e;
    });
    /* 순서 규칙 유지: 앞 회차가 완료되지 않았는데 완료로 표시된 뒤 회차는 일부 완료로 내립니다. */
    var f = frontier(s);
    Object.keys(s.records).forEach(function (k) { if (Number(k) > f && s.records[k].status === 'complete') { s.records[k].status = 'partial'; delete s.records[k].completedAt; delete s.records[k].proof; } });
    (Array.isArray(raw.logs) ? raw.logs : []).slice(-1200).forEach(function (l) {
      var id = Number(l && l.lesson); if (!Number.isInteger(id) || id < 1 || id > TOTAL) return;
      s.logs.push({ id: clean(l.id, 60) || uid(), lesson: id, kind: ['partial', 'complete', 'review', 'reopen'].indexOf(l.kind) >= 0 ? l.kind : 'partial',
        minutes: Math.max(0, Math.min(1440, Number(l.minutes) || 0)), note: clean(l.note), stuck: clean(l.stuck, 2000), at: clean(l.at, 40) });
    });
    Object.keys(raw.keys || {}).slice(0, 200).forEach(function (k) {
      var v = raw.keys[k] || {}; s.keys[clean(k, 100)] = { binding: clean(v.binding, 100), recall: v.recall === true };
    });
    Object.keys(raw.tracks || {}).forEach(function (k) { if (/^[a-z]\d+:\d+$/.test(k) && raw.tracks[k] === true) s.tracks[k] = true; });
    var st = raw.settings || {};
    s.settings.os = st.os === 'mac' ? 'mac' : 'win';
    s.settings.loopback = st.loopback === 'yes' || st.loopback === 'no' ? st.loopback : '';
    s.revision = Number.isInteger(raw.revision) && raw.revision >= 0 ? raw.revision : 0;
    return s;
  }

  function load() {
    try { var t = root.localStorage.getItem(KEY); return t ? normalize(JSON.parse(t)) : initial(); }
    catch (e) { return initial(); }
  }
  function persist(s) {
    try { root.localStorage.setItem(KEY, JSON.stringify(s)); return true; } catch (e) { return false; }
  }

  CG.store = { KEY: KEY, TOTAL: TOTAL, initial: initial, blank: blank, pad: pad, frontier: frontier, sanitizeDraft: sanitizeDraft, mutate: mutate, normalize: normalize, load: load, persist: persist };
})(typeof globalThis !== 'undefined' ? globalThis : this);
