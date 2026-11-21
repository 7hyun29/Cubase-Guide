/* Cubase Guide — 화면 로직. 빌드 과정 없이 브라우저에서 바로 실행됩니다. */
(function () {
  'use strict';
  var CG = window.CG, B = CG.base, St = CG.store, I = CG.icon, pad = St.pad;
  var S = St.load();
  var ui = { view: 'lesson', id: Math.min(St.frontier(S), 42), track: '', step: 0, lib: 'glossary', keys: 'learned', q: '', dialog: null, confirmed: false, open: {}, mobile: false, pending: null };
  var draft = null, draftId = 0, lastMode = 60, saveTimer = null, toastTimer = null, keyTimer = null;
  var $side, $top, $main, $layer, $toast;

  /* ── 텍스트 도우미 ── */
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function mac() { return S.settings.os === 'mac'; }
  function osText(html) { return mac() ? html.replace(/\bCtrl\b/g, 'Cmd').replace(/\bAlt\b/g, 'Option') : html; }
  function plain(s) { return osText(esc(s)); }
  function keyTokens(key) {
    return String(key).split('+').map(function (t) { return t.trim(); }).filter(Boolean).map(function (t) {
      return mac() ? (t === 'Ctrl' ? 'Cmd' : t === 'Alt' ? 'Option' : t) : t;
    });
  }
  function kbd(key) {
    if (/배정|없음/.test(key)) return '<span class="kbd-none">' + esc(key) + '</span>';
    return '<span class="keys">' + keyTokens(key).map(function (t) { return '<kbd>' + esc(t) + '</kbd>'; }).join('<i>+</i>') + '</span>';
  }
  /* `경로`, [[단축키]], **강조** 표기를 HTML로 바꿉니다. */
  function rich(s) {
    var h = esc(s);
    h = h.replace(/`([^`]+)`/g, function (m, a) { return '<code class="path">' + a + '</code>'; });
    h = h.replace(/\[\[([^\]]+)\]\]/g, function (m, a) { return kbd(a); });
    h = h.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
    return osText(h);
  }
  function fmt(s) { var d = new Date(s); return isNaN(d) ? '' : d.toLocaleString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }); }
  function isDone(id) { return !!(S.records[id] && S.records[id].status === 'complete'); }
  function doneCount() { var n = 0; for (var i = 1; i <= 42; i++) if (isDone(i)) n++; return n; }
  function trackOf(id) { return CG.tracks.filter(function (t) { return t.id === id; })[0]; }
  function trackStats(t) {
    var total = 0, done = 0;
    t.steps.forEach(function (st) { st.checks.forEach(function (c, i) { total++; if (S.tracks[st.id + ':' + i]) done++; }); });
    return { total: total, done: done, pct: total ? Math.round(done / total * 100) : 0 };
  }
  function stepStats(st) { var d = 0; st.checks.forEach(function (c, i) { if (S.tracks[st.id + ':' + i]) d++; }); return { done: d, total: st.checks.length }; }
  function tick(checked, label, attrs, cls) {
    return '<label class="tick ' + (checked ? 'checked ' : '') + (cls || '') + '"><input type="checkbox" ' + (checked ? 'checked ' : '') + attrs + '><span class="box">' + I('check', 13) + '</span><span class="tick-label">' + label + '</span></label>';
  }
  function bar(pct, color) { return '<div class="bar"><i style="width:' + pct + '%' + (color ? ';background:' + color : '') + '"></i></div>'; }
  function det(key, summary, body, cls) {
    return '<details class="' + (cls || 'acc') + '" data-k="' + esc(key) + '"' + (ui.open[key] ? ' open' : '') + '><summary>' + summary + I('chevron-down', 16) + '</summary><div class="acc-body">' + body + '</div></details>';
  }

  /* ── 상태 변경 ── */
  function toast(msg, kind) {
    $toast.className = 'toast show ' + (kind || '');
    $toast.textContent = msg;
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { $toast.className = 'toast'; }, kind === 'error' ? 5200 : 2600);
  }
  function commit(body, criteriaCount) {
    try { S = St.mutate(S, body, criteriaCount || 0); }
    catch (e) { toast(e.message || '저장하지 못했습니다.', 'error'); return false; }
    if (!St.persist(S)) toast('브라우저 저장소에 기록하지 못했습니다. 기록 내보내기로 백업해 주세요.', 'error');
    return true;
  }
  function loadDraft(id) {
    var r = S.records[id];
    draft = r ? JSON.parse(JSON.stringify(r.draft)) : Object.assign(St.blank(), { mode: lastMode });
    draftId = id;
  }
  function saveDraft() {
    clearTimeout(saveTimer); saveTimer = null;
    lastMode = draft.mode;
    return commit({ action: 'save', lesson: draftId, draft: draft });
  }
  function flushDraft() { if (saveTimer) saveDraft(); }
  function queueDraft() {
    clearTimeout(saveTimer); saveTimer = setTimeout(function () { saveDraft(); mark('저장됨'); }, 500);
    mark('입력 중…');
  }
  function mark(t) { var el = document.getElementById('save-state'); if (el) el.textContent = t; }

  /* ── 라우팅 ── */
  function go(hash) { if (location.hash === hash) route(); else location.hash = hash; }
  function route() {
    flushDraft();
    var p = location.hash.replace(/^#\/?/, '').split('/');
    var cur = Math.min(St.frontier(S), 42);
    ui.mobile = false; ui.dialog = null; ui.pending = null;
    if (p[0] === 'lesson') {
      var id = parseInt(p[1], 10); if (!(id >= 1 && id <= 42)) id = cur;
      if (id > St.frontier(S) && !isDone(id)) { ui.dialog = 'locked'; id = cur; history.replaceState(null, '', '#/lesson/' + id); }
      ui.view = 'lesson'; ui.id = id; loadDraft(id);
    } else if (p[0] === 'track' && trackOf(p[1])) {
      ui.view = 'track'; ui.track = p[1];
      var n = parseInt(p[2], 10); ui.step = n >= 1 && n <= trackOf(p[1]).steps.length ? n - 1 : 0;
    } else if (['course', 'tracks', 'keys', 'library', 'history'].indexOf(p[0]) >= 0) {
      ui.view = p[0];
    } else { ui.view = 'lesson'; ui.id = cur; loadDraft(cur); }
    render(); window.scrollTo(0, 0);
  }

  /* ── 사이드바 · 상단 ── */
  var NAV = [
    { v: 'lesson', label: '오늘의 실습', icon: 'play' }, { v: 'course', label: '기초 커리큘럼', icon: 'layers' },
    { v: 'tracks', label: '심화 트랙', icon: 'sliders' }, { v: 'keys', label: '단축키 노트', icon: 'keyboard' },
    { v: 'library', label: '용어 · 자료', icon: 'book' }, { v: 'history', label: '학습 기록', icon: 'history' }
  ];
  var TITLES = { lesson: '오늘의 실습', course: '기초 커리큘럼', tracks: '심화 트랙', track: '심화 트랙', keys: '단축키 노트', library: '용어 · 자료', history: '학습 기록' };
  function navHash(v) { return v === 'lesson' ? '#/lesson/' + Math.min(St.frontier(S), 42) : '#/' + v; }

  function sidebar() {
    var cur = St.frontier(S), week = Math.floor((ui.id - 1) / 7), active = ui.view === 'track' ? 'tracks' : ui.view;
    var h = '<a class="brand" href="' + navHash('lesson') + '"><span class="brand-mark">' + I('music', 20) + '</span><span>cubase guide<small>PRACTICE ROOM</small></span></a>';
    h += '<nav class="main-nav" aria-label="주 메뉴">' + NAV.map(function (n) {
      return '<a href="' + navHash(n.v) + '" class="' + (active === n.v ? 'active' : '') + '">' + I(n.icon, 17) + n.label + '</a>';
    }).join('') + '</nav>';
    h += '<div class="side-label">공통 기초 <span>42 LESSONS</span></div><div class="week-nav">';
    B.weeks.forEach(function (w, i) {
      var ls = B.lessons.slice(i * 7, i * 7 + 7), d = ls.filter(function (l) { return isDone(l.id); }).length, on = ui.view === 'lesson' && i === week;
      var first = i * 7 + 1, last = i * 7 + 7, target = cur >= first && cur <= last ? cur : cur > last ? first : 0;
      h += '<a class="week ' + (on ? 'on' : '') + '" href="' + (target ? '#/lesson/' + target : '#/course') + '"><span class="week-no">' + pad(i + 1) + '</span><span class="week-name">' + esc(w) + '<small>' + d + ' / 7 완료</small></span>' + (d === 7 ? I('check-circle', 15) : I('chevron-right', 14)) + '</a>';
      if (on) h += '<div class="lesson-nav">' + ls.map(function (l) {
        var st = isDone(l.id) ? I('check', 13) : l.id > cur ? I('lock', 12) : '<i class="dot"></i>';
        return '<a href="#/lesson/' + l.id + '" class="' + (l.id === ui.id ? 'on' : '') + '"><span>' + pad(l.id) + '</span><b>' + esc(l.title) + '</b>' + st + '</a>';
      }).join('') + '</div>';
    });
    h += '</div><div class="side-label">심화 트랙 <span>3 TRACKS</span></div><div class="track-nav">';
    CG.tracks.forEach(function (t) {
      var s = trackStats(t);
      h += '<a href="#/track/' + t.id + '" class="' + (ui.view === 'track' && ui.track === t.id ? 'on' : '') + '" style="--tc:' + t.color + '"><i class="tdot"></i><span>' + esc(t.title) + '</span><em>' + s.pct + '%</em></a>';
    });
    h += '</div><div class="side-bottom"><div class="avatar">전</div><div>전장와드의 연습실<small>' + (mac() ? 'macOS 표기' : 'Windows 표기') + ' · Cubase Pro 15</small></div></div>';
    return h;
  }

  function topbar() {
    var lb = S.settings.loopback;
    return '<div class="crumb"><button class="icon-btn mobile-menu" data-act="menu" aria-label="메뉴 열기">' + I('menu', 20) + '</button><span>Cubase Guide</span>' + I('chevron-right', 13) + '<b>' + TITLES[ui.view] + '</b></div>' +
      '<div class="top-tools">' +
      '<label class="iface" title="방송 세팅 트랙에서 선택한 장비에 맞는 라우팅이 강조됩니다">' + I('plug', 15) + '<span class="iface-label">내 오디오 인터페이스</span><select data-act="loop" aria-label="내 오디오 인터페이스 선택">' +
      '<option value=""' + (lb === '' ? ' selected' : '') + '>선택 안 함</option><option value="yes"' + (lb === 'yes' ? ' selected' : '') + '>루프백 지원 모델</option><option value="no"' + (lb === 'no' ? ' selected' : '') + '>루프백 미지원 모델</option></select></label>' +
      '<div class="seg os" role="group" aria-label="단축키 표기 운영체제"><button data-act="os" data-v="win" class="' + (!mac() ? 'on' : '') + '" aria-pressed="' + !mac() + '">Windows <small>Ctrl</small></button><button data-act="os" data-v="mac" class="' + (mac() ? 'on' : '') + '" aria-pressed="' + mac() + '">macOS <small>Cmd</small></button></div>' +
      '</div>';
  }

  /* ── 기초 42회차: 오늘의 실습 ── */
  var LABELS = ['복습·환경 확인', '설명·영상', '기능 실습', '자료 없이 재현', '저장·기록'];
  var PLUGIN_FIELDS = ['제품명', '버전', 'Cubase 목록 분류', '형식 (VST2·VST3)', '플러그인 본체 경로', '샘플 저장 폴더 / 해당 없음', '목록 표시', '소리', '재열기'];

  function dawArt() {
    var lanes = ['KEYS', 'STRINGS', 'AUDIO'].map(function (l, i) {
      var bits = '';
      for (var n = 0; n < (i === 2 ? 28 : 9); n++) bits += i === 2 ? '<i style="height:' + (12 + (n * 19 % 35)) + 'px"></i>' : '<i style="top:' + (12 + (n * 13 % 35)) + 'px;left:' + (6 + n * 10) + '%"></i>';
      return '<div class="daw-lane"><b>' + l + '</b><div class="daw-clip clip-' + i + '">' + bits + '</div></div>';
    }).join('');
    return '<div class="daw-art" aria-hidden="true"><div class="daw-top"><span></span><span></span><span></span><b>' + pad(ui.id) + ' · PROJECT</b><i>120.000</i></div><div class="daw-lanes">' + lanes + '<div class="playhead"></div></div></div>';
  }

  function completionReady(L) {
    return L.criteria.every(function (c, i) { return draft.criteria[i]; }) && Number(draft.minutes) > 0;
  }

  function vLesson() {
    var id = ui.id, L = B.lessons[id - 1], cur = St.frontier(S), done = isDone(id), week = Math.floor((id - 1) / 7), video = L.video ? B.videos[L.video] : null, count = doneCount();
    var newKeys = B.shortcuts.filter(function (k) { return k.first === id; });
    var showKeys = newKeys.length ? newKeys : B.shortcuts.filter(function (k) { return k.first < id; }).slice(0, 3);
    var ctx = CG.context[id] || [], mode = draft.mode, h = '';

    h += '<section class="hero"><div class="hero-copy"><div class="tags"><span>공통 기초 · ' + (week + 1) + '주 묶음</span><span class="tag-hot">' + (done ? '완료 · 다시 연습' : id === cur ? '현재 학습' : '복습') + '</span></div><p class="hero-no">LESSON ' + pad(id) + '</p><h2>' + esc(L.title) + '</h2><p>' + plain(id === 1 ? '새 프로젝트에서 소리를 확인하고, 저장한 작업을 다시 열어 봅니다.' : L.goal) + '</p><div class="hero-meta"><span>' + I('clock', 15) + '기본 60분 · 짧은 날 30분</span><span>' + I('headphones', 15) + '직접 따라 하는 실습</span></div></div>' + dawArt() + '</section>';

    h += '<div class="grid"><div class="col">';
    /* 오늘 익힐 것 */
    h += '<section class="panel"><div class="ptitle"><span class="sq">' + I('book', 18) + '</span><h3>오늘, 익힐 것</h3></div><p class="lead">' + plain(L.goal) + '</p><p class="muted">' + plain(L.why) + '</p><div class="note-box"><b>쉽게 이해하기</b><p>' + plain(L.concept) + '</p></div><div class="note-box plain"><b>준비물</b><p>' + plain(L.prep) + '</p></div>' +
      (id === 1 ? '<a class="file-link" href="assets/audio/01_Keys_Practice.wav" download><span class="sq">' + I('music', 18) + '</span><span><b>01_Keys_Practice.wav</b><small>8초 건반 연습 음원 · 120 BPM · 4마디</small></span>' + I('download', 17) + '</a>' : '') + '</section>';
    /* 따라 할 작업 */
    h += '<section class="panel"><div class="ptitle"><span class="sq">' + I('sliders', 18) + '</span><h3>따라 할 작업</h3><span class="count">' + draft.steps.filter(Boolean).length + ' / ' + L.steps.length + '</span></div><p class="hint">이미 마친 단계는 확인만 하고, 남은 단계부터 이어가세요.</p><ol class="steps">' +
      L.steps.map(function (s, i) {
        var on = !!draft.steps[i];
        return '<li class="' + (on ? 'done' : '') + '"><span class="step-no">' + (on ? I('check', 15) : pad(i + 1)) + '</span><div><p>' + plain(s) + '</p>' + tick(on, '직접 실행했어요', 'data-act="tick" data-f="steps" data-i="' + i + '" data-n="' + L.steps.length + '"') + '</div></li>';
      }).join('') + '</ol></section>';
    /* 컨텍스트 보강 */
    if (ctx.length) {
      h += '<section class="panel ctx"><div class="ptitle"><span class="sq ctx-sq">' + I('file', 18) + '</span><h3>Steinberg 튜토리얼 보강</h3><span class="count">컨텍스트 ' + ctx.length + '건</span></div><p class="hint">프로젝트에 올린 공식 입문 튜토리얼에서 이 회차와 맞닿는 요점입니다. 위 실습과 함께 확인하세요.</p>' +
        ctx.map(function (c) {
          var src = CG.sources[c.src];
          return '<div class="ctx-block"><div class="ctx-src"><b>' + esc(src.ko) + '</b><span>' + esc(src.title) + '</span></div><ul>' + c.points.map(function (p) { return '<li>' + rich(p) + '</li>'; }).join('') + '</ul></div>';
        }).join('') + '</section>';
    }
    /* 단축키 */
    h += '<section class="panel"><div class="ptitle"><span class="sq">' + I('keyboard', 18) + '</span><h3>' + (newKeys.length ? '오늘의 새 단축키' : '배운 단축키 재현') + '</h3><span class="count">' + (newKeys.length ? '기본키 ' + newKeys.length + '개' : '새 기본키 없음') + '</span></div><p class="hint">' + rich('`Edit > Key Commands`에서 현재 배정을 확인하세요.') + '</p>' +
      showKeys.map(function (k) { return '<div class="key-row"><div><b>' + esc(k.name) + '</b><small>' + plain(k.scope) + '</small></div>' + kbd(k.key) + '</div>'; }).join('') +
      '<p class="mini">숫자 키패드 표시(Num)가 있는 키는 일반 숫자열과 다릅니다. 텍스트 입력·대화상자를 마치고 대상 창에 포커스를 두세요.' + (mac() ? ' macOS 표기는 Ctrl→Cmd, Alt→Option으로 바꿔 보여 줍니다. 실제 배정은 Key Commands에서 확인하세요.' : '') + '</p></section>';
    /* 영상 · 공식 자료 */
    h += '<section class="panel"><div class="ptitle"><span class="sq">' + I('play', 18) + '</span><h3>보고, 바로 적용하기</h3><span class="count">시청 배정 5분</span></div>';
    if (video) h += '<div class="video"><div class="video-cover">' + I('play', 24) + '<span>CUBASE / PRACTICE</span></div><div><a href="https://www.youtube.com/watch?v=' + esc(video.id) + '" target="_blank" rel="noreferrer">' + esc(video.title) + I('arrow-up-right', 14) + '</a><p class="video-ch">' + esc(video.channel) + '</p><p>집중할 내용: ' + esc(video.focus) + '</p><small>' + esc(video.note) + ' 전체 시청 대신 관련 부분을 5분만 활용하세요.</small></div></div>';
    else h += '<div class="empty-video"><p>이 주제에 맞는 직접 시연 영상을 검증하지 못했습니다.</p><span>설명·영상 배정 시간에는 아래 공식 자료를 읽고 직접 실습을 이어갑니다.' + (id >= 41 ? ' 평가를 시작하면 자료를 가리세요.' : '') + '</span></div>';
    h += '<div class="links"><b>공식 Cubase Pro 15 자료</b>' + L.refs.map(function (r) { return B.refs[r] ? '<a href="' + esc(B.refs[r].url) + '" target="_blank" rel="noreferrer">' + esc(B.refs[r].title) + I('arrow-up-right', 13) + '</a>' : ''; }).join('') +
      (id === 3 ? '<a href="https://splice.com/tools/sounds-plugin" target="_blank" rel="noreferrer">Splice Sounds Plugin' + I('arrow-up-right', 13) + '</a><a href="https://support.splice.com/en/articles/8652662-where-is-my-splice-folder" target="_blank" rel="noreferrer">Splice 샘플 폴더' + I('arrow-up-right', 13) + '</a>' : '') + '</div></section>';
    /* 헷갈리기 쉬운 부분 */
    h += '<section class="panel"><div class="ptitle"><span class="sq warm">' + I('sparkles', 18) + '</span><h3>헷갈리기 쉬운 부분</h3></div>' + L.confusion.map(function (s, i) { return '<p class="confusion"><span>' + pad(i + 1) + '</span>' + plain(s) + '</p>'; }).join('') + det('rec-' + id, '막혔을 때 확인하기', '<p>' + plain(L.recovery) + '</p>') + '</section>';
    /* 재현 */
    h += '<section class="panel recall"><div class="ptitle"><span class="sq">' + I('layers', 18) + '</span><h3>자료 없이 한 번 더</h3></div><p>' + plain(L.reproduce) + '</p><p class="mini">같은 기능을 다른 소스에 적용합니다. 자료를 본 동작과 독립적으로 실행한 동작을 구분해 작업 메모에 짧게 남기세요.</p></section>';
    /* 평가 */
    if (id >= 41) {
      h += '<section class="panel eval"><div class="ptitle">' + I('shield', 20) + '<h3>기초 평가 · ' + (id === 41 ? '첫 번째' : '두 번째') + ' 재현</h3></div><p>새 프로젝트부터 재열기까지, 자료 없이 30분 이내. 두 회차의 결과는 각각 보관됩니다.</p>' +
        B.evaluation.map(function (e, i) { return tick(!!draft.evalChecks[i], esc(e), 'data-act="tick" data-f="evalChecks" data-i="' + i + '" data-n="6"'); }).join('') +
        '<div class="form-row"><label>평가에만 쓴 시간(분)<input type="number" min="1" max="30" data-field="evalMinutes" value="' + esc(draft.evalMinutes) + '"></label><label>이번에 사용한 소스 이름<input data-field="evalSource" value="' + esc(draft.evalSource) + '" placeholder="WAV·MIDI 구절을 구분할 이름"></label></div>' +
        tick(draft.independent, '영상과 설명을 보지 않고 직접 재현했어요.', 'data-act="indep"') + '</section>';
    }
    /* 작업 메모 */
    h += '<section class="panel notes"><div class="ptitle"><span class="sq">' + I('book', 18) + '</span><h3>작업 메모</h3><span class="count" id="save-state">자동 저장</span></div>' +
      '<label>오늘 직접 해 본 것<textarea rows="5" data-field="note" placeholder="실제로 선택한 설정, 들린 차이, 자료 없이 쓴 단축키를 자유롭게 적어 보세요.">' + esc(draft.note) + '</textarea></label>' +
      '<label>막힌 점 · 다음에 확인할 것<textarea rows="2" data-field="stuck" placeholder="없으면 ‘없음’. 일부 완료라면 남은 단계만 적어 주세요.">' + esc(draft.stuck) + '</textarea></label>' +
      '<div class="form-row"><label>결과 파일·폴더 (필요할 때)<input data-field="file" value="' + esc(draft.file) + '" placeholder="' + esc(L.result) + '"></label><label class="narrow">이번 실습 실제 시간<input type="number" min="1" max="1440" data-field="minutes" value="' + esc(draft.minutes) + '" placeholder="분"></label></div>';
    if (L.plugin) h += det('plug-' + id, '현재 PC의 플러그인 확인 기록', '<p>이번 회차에 실제로 확인한 값만 적습니다. 확인하지 않은 값은 비워 두거나 ‘미확인’으로 남기세요.</p><div class="plugin-grid">' + PLUGIN_FIELDS.map(function (k) { return '<label>' + esc(k) + '<input data-pfield="' + esc(k) + '" value="' + esc(draft.plugin[k] || '') + '" placeholder="미확인"></label>'; }).join('') + '</div>', 'acc plugin');
    h += '<div class="btn-row"><button class="btn ghost" data-act="partial">' + I('clock', 15) + '이번 실습 일부 완료로 기록</button></div><p class="micro">메모와 체크는 입력하는 대로 이 브라우저에 저장되며 진도를 바꾸지 않습니다. 일부 완료 기록에는 이번에 실제로 쓴 시간만 입력하세요.</p></section>';
    h += '</div>';

    /* 오른쪽 열 */
    h += '<aside class="col side-col"><section class="panel"><div class="ptitle">' + I('clock', 18) + '<h3>오늘의 페이스</h3></div><div class="seg wide"><button data-act="mode" data-v="60" class="' + (mode === 60 ? 'on' : '') + '">60분 <small>기본</small></button><button data-act="mode" data-v="30" class="' + (mode === 30 ? 'on' : '') + '">30분 <small>짧은 날</small></button></div><div class="time-bars">' + B.plans[mode].map(function (n, i) { return '<i class="tb-' + i + '" style="flex:' + n + '"></i>'; }).join('') + '</div><div class="plan">' + LABELS.map(function (l, i) { return '<div><span><i class="tb-' + i + '"></i>' + l + '</span><b>' + B.plans[mode][i] + '<small>분</small></b></div>'; }).join('') + '</div>' + (id >= 41 ? '<p class="micro">평가 회차는 실습·재현 시간을 묶어 평가에 최대 30분을 배정해도 됩니다.</p>' : '') + '<p class="plan-foot">시간은 계획일 뿐, 완료의 기준은 직접 해 본 결과입니다.</p></section>';
    h += '<section class="panel"><div class="ptitle">' + I('check-circle', 18) + '<h3>완료 기준</h3></div>' + L.criteria.map(function (c, i) { return tick(!!draft.criteria[i], plain(c), 'data-act="tick" data-f="criteria" data-i="' + i + '" data-n="' + L.criteria.length + '"'); }).join('') + '<div class="deliver"><span>남길 결과물</span><p>' + plain(L.result) + '</p></div>';
    if (done) h += '<div class="done-badge">' + I('check-circle', 17) + '직접 완료한 회차</div>' + (id < 42 ? '<a class="btn primary wide" href="#/lesson/' + (id + 1) + '">다음 회차 열기' + I('arrow-right', 16) + '</a>' : '<a class="btn primary wide" href="#/tracks">심화 트랙으로' + I('arrow-right', 16) + '</a>') + '<button class="btn text wide" data-act="ask" data-v="reopen">완료 취소 · 다시 연습</button>';
    else h += '<button class="btn primary wide" id="complete-btn" data-act="ask" data-v="complete"' + (completionReady(L) ? '' : ' disabled') + '>이번 회차 완료' + I('check', 16) + '</button><p class="micro center">기준을 확인하고 실제 시간을 입력한 뒤 직접 완료를 선언해 주세요.</p>';
    h += '<div class="lock-note">' + I('lock', 14) + '<span>완료 확인 전에는 다음 회차가 열리지 않아요.</span></div></section>';
    h += '<div class="basis"><b>진행 근거</b><p>' + (count === 0 ? '아직 완료를 기록한 회차가 없습니다. 01회차부터 직접 확인하며 시작하세요.' : '이 브라우저에서 직접 확인한 완료 ' + count + '회차를 반영했습니다.') + '</p><p>기록은 사용자 보고이며 Cubase 파일을 자동 검사한 결과가 아닙니다. 다른 기기에서 이어가려면 학습 기록에서 JSON으로 내보내고 가져오세요.</p></div></aside></div>';
    return h;
  }

  /* ── 기초 커리큘럼 ── */
  function vCourse() {
    var cur = St.frontier(S), count = doneCount();
    var h = '<section class="banner"><div><span class="eyebrow">FOUNDATION FIRST</span><h2>42개의 실습, 하나의 작업 습관.</h2><p>새 학습 5회 + 통합 실습 1회 + 복습·재현 1회.<br>주차는 학습 묶음이며 달력에 따라 자동으로 넘어가지 않습니다.</p></div><div class="circle"><strong>' + count + '</strong><span>회차 완료</span></div></section>';
    B.weeks.forEach(function (w, i) {
      var ls = B.lessons.slice(i * 7, i * 7 + 7);
      h += '<section class="panel module"><div class="module-head"><span>' + pad(i + 1) + '</span><div><small>' + (i + 1) + '주 묶음 · ' + pad(i * 7 + 1) + '–' + pad(i * 7 + 7) + '회차</small><h3>' + esc(w) + '</h3></div><b>' + ls.filter(function (l) { return isDone(l.id); }).length + '/7</b></div>' +
        ls.map(function (l) {
          var d = isDone(l.id), c = l.id === cur, hasCtx = !!CG.context[l.id];
          return '<a class="course-row ' + (c ? 'current' : '') + (!d && !c ? ' locked' : '') + '" href="#/lesson/' + l.id + '"><span>' + pad(l.id) + '</span><div><b>' + esc(l.title) + (hasCtx ? '<i class="ctx-chip">튜토리얼 보강</i>' : '') + '</b><small>' + plain(l.goal) + '</small></div><em>' + (d ? '완료' : c ? '이어서 실습' : '잠김') + '</em>' + (d ? I('check-circle', 17) : c ? I('arrow-right', 17) : I('lock', 15)) + '</a>';
        }).join('') + '</section>';
    });
    var plan = [['1주차', '새 PC 환경과 프로젝트 시작', '01부터 완료 확인 뒤 순서대로'], ['2주차', '악기·MIDI', '15–21 목표 · 앞 회차 완료가 우선'], ['3주차', '오디오 녹음·편집', '22–28 목표'], ['4주차', '믹서·효과·오토메이션', '29–35 목표'], ['5주차', '파일·내보내기·기초 평가', '36–42 목표'], ['6주차', '다른 소스 반복 적용', '미완료 보완·작업 시간 기록'], ['7주차', '약점 보완·기본 템플릿', '서로 다른 두 회차의 평가 통과']];
    h += '<section class="panel"><h3>주차별 운영 계획</h3><p class="muted">기준 커리큘럼의 목표 주차입니다. 현재 진도에 맞춰 미완료 항목을 먼저 보완합니다.</p><div class="table-wrap"><table><thead><tr><th>주차</th><th>중점</th><th>회차·확인</th></tr></thead><tbody>' + plan.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + esc(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div><div class="next-path">' + I('shield', 20) + '<p><b>기초 평가 2회 통과 후</b><br>오케스트레이션 → 방송 · 송출 → 녹음 세팅 심화 트랙으로 확장합니다. 심화 트랙은 참고용으로 언제든 열어 볼 수 있습니다.</p><a class="btn ghost" href="#/tracks">심화 트랙 보기' + I('arrow-right', 15) + '</a></div><a class="src-link" href="curriculum/reference.md" target="_blank" rel="noreferrer">기준 커리큘럼 원문' + I('arrow-up-right', 14) + '</a></section>';
    return h;
  }

  /* ── 심화 트랙 ── */
  function flow(rows) {
    return rows.map(function (r) {
      return '<div class="flow"><div class="flow-title">' + esc(r.title) + '</div><div class="flow-row">' + r.nodes.map(function (n, i) {
        return (i ? '<span class="flow-arrow">' + I('arrow-right', 16) + '</span>' : '') + '<div class="node k-' + n.kind + '"><b>' + esc(n.t) + '</b>' + (n.s ? '<small>' + esc(n.s) + '</small>' : '') + '</div>';
      }).join('') + '</div></div>';
    }).join('');
  }
  function routeCards(t) {
    var sel = S.settings.loopback;
    var h = '<div class="route-pick"><span>' + I('plug', 15) + '내 오디오 인터페이스</span><div class="seg"><button data-act="loopset" data-v="yes" class="' + (sel === 'yes' ? 'on' : '') + '">루프백 지원 모델</button><button data-act="loopset" data-v="no" class="' + (sel === 'no' ? 'on' : '') + '">루프백 미지원 모델</button></div>' + (sel ? '' : '<em>장비를 고르면 맞는 라우팅이 강조됩니다.</em>') + '</div><div class="routes">';
    ['yes', 'no'].forEach(function (k) {
      var r = t.routes[k], on = sel === k, dim = sel && !on;
      h += '<article class="route ' + (on ? 'on' : '') + (dim ? ' dim' : '') + '"><header><b>' + esc(r.label) + '</b>' + (on ? '<span class="badge">내 장비</span>' : '') + '</header><p>' + esc(r.summary) + '</p>';
      if (!dim) h += '<p class="mini">' + esc(r.examples) + '</p><ol class="rsteps">' + r.steps.map(function (s) { return '<li>' + rich(s) + '</li>'; }).join('') + '</ol>' + flow(r.flow);
      else h += '<button class="btn text" data-act="loopset" data-v="' + k + '">이 구성으로 보기</button>';
      h += '</article>';
    });
    return h + '</div>';
  }

  function vTracks() {
    var h = '<section class="banner"><div><span class="eyebrow">ADVANCED TRACKS</span><h2>기초 위에 올리는 세 가지 실전 세팅.</h2><p>메뉴 경로와 수치를 그대로 따라 하고, 실습 체크포인트로 직접 확인합니다.<br>기초 42회차와 별도로 진행되며 언제든 열어 볼 수 있습니다.</p></div></section><div class="track-cards">';
    CG.tracks.forEach(function (t) {
      var s = trackStats(t);
      h += '<a class="tcard" href="#/track/' + t.id + '" style="--tc:' + t.color + '"><div class="tcard-top"><span class="sq tc">' + I(t.icon, 20) + '</span><small>TRACK ' + t.no + '</small></div><h3>' + esc(t.title) + '</h3><p class="en">' + esc(t.en) + '</p><p>' + esc(t.intro) + '</p><ul>' + t.steps.map(function (st, i) { var ss = stepStats(st); return '<li><span>Step ' + (i + 1) + '</span>' + esc(st.title) + '<em>' + ss.done + '/' + ss.total + '</em></li>'; }).join('') + '</ul><div class="tprog">' + bar(s.pct, t.color) + '<b>' + s.pct + '%</b></div></a>';
    });
    return h + '</div>';
  }

  function vTrack() {
    var t = trackOf(ui.track), s = trackStats(t), st = t.steps[ui.step], ss = stepStats(st), h = '';
    h += '<section class="thead" style="--tc:' + t.color + '"><a class="back" href="#/tracks">' + I('arrow-left', 15) + '심화 트랙</a><div class="thead-main"><span class="sq tc big">' + I(t.icon, 24) + '</span><div><small>TRACK ' + t.no + ' · ' + esc(t.en) + '</small><h2>' + esc(t.title) + '</h2><p>' + esc(t.intro) + '</p></div></div><div class="tprog">' + bar(s.pct, t.color) + '<b>' + s.pct + '%</b><span>체크포인트 ' + s.done + ' / ' + s.total + '</span></div><div class="prereq"><span>먼저 익혀 두면 좋은 기초 회차</span>' + t.prereq.map(function (id) { return '<a href="#/lesson/' + id + '" class="' + (isDone(id) ? 'ok' : '') + '">' + pad(id) + ' ' + esc(B.lessons[id - 1].title) + '</a>'; }).join('') + '</div></section>';

    h += '<nav class="stepper" style="--tc:' + t.color + '" aria-label="단계">' + t.steps.map(function (x, i) { var xs = stepStats(x); return '<a href="#/track/' + t.id + '/' + (i + 1) + '" class="' + (i === ui.step ? 'on' : '') + (xs.done === xs.total ? ' done' : '') + '"><span>Step ' + (i + 1) + '</span><b>' + esc(x.title) + '</b><em>' + xs.done + '/' + xs.total + '</em></a>'; }).join('') + '</nav>';

    h += '<div class="grid" style="--tc:' + t.color + '"><div class="col">';
    h += '<section class="panel"><div class="ptitle"><span class="sq tc">' + (ui.step + 1) + '</span><h3>' + esc(st.title) + '</h3><span class="count">' + I('clock', 13) + ' ' + esc(st.time) + '</span></div><p class="lead">' + rich(st.goal) + '</p>' +
      st.blocks.map(function (b) { return '<div class="block"><h4>' + esc(b.h) + '</h4><ol>' + b.items.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('') + '</ol></div>'; }).join('') + '</section>';
    if (st.routing) h += '<section class="panel"><div class="ptitle"><span class="sq tc">' + I('plug', 18) + '</span><h3>내 장비에 맞는 라우팅</h3></div>' + routeCards(t) + '</section>';
    h += '<div class="step-nav">' + (ui.step > 0 ? '<a class="btn ghost" href="#/track/' + t.id + '/' + ui.step + '">' + I('arrow-left', 15) + 'Step ' + ui.step + '</a>' : '<span></span>') + (ui.step < t.steps.length - 1 ? '<a class="btn primary" href="#/track/' + t.id + '/' + (ui.step + 2) + '">Step ' + (ui.step + 2) + I('arrow-right', 15) + '</a>' : '<a class="btn ghost" href="#/tracks">트랙 목록' + I('arrow-right', 15) + '</a>') + '</div>';
    h += '</div><aside class="col side-col">';
    h += '<section class="panel check-panel"><div class="ptitle">' + I('check-circle', 18) + '<h3>실습 체크포인트</h3><span class="count">' + ss.done + ' / ' + ss.total + '</span></div>' + bar(ss.total ? Math.round(ss.done / ss.total * 100) : 0, t.color) + st.checks.map(function (c, i) { var id = st.id + ':' + i; return tick(!!S.tracks[id], rich(c), 'data-act="tcheck" data-id="' + id + '"'); }).join('') + '</section>';
    h += '<section class="panel"><div class="ptitle">' + I('sliders', 18) + '<h3>핵심 수치</h3></div><dl class="values">' + st.values.map(function (v) { return '<div><dt>' + esc(v[0]) + '</dt><dd>' + esc(v[1]) + '</dd></div>'; }).join('') + '</dl></section>';
    h += '<section class="panel"><div class="ptitle">' + I('keyboard', 18) + '<h3>이 단계의 단축키</h3></div>' + st.keys.map(function (k) { return '<div class="key-row"><div><b>' + esc(k.name) + '</b>' + (k.note ? '<small>' + esc(k.note) + '</small>' : '') + '</div>' + kbd(k.key) + '</div>'; }).join('') + (st.related && st.related.length ? '<div class="related"><span>관련 기초 회차</span>' + st.related.map(function (id) { return '<a href="#/lesson/' + id + '">' + pad(id) + ' ' + esc(B.lessons[id - 1].title) + '</a>'; }).join('') + '</div>' : '') + '</section>';
    h += '</aside></div>';

    /* 신호 흐름 */
    var rows = t.routes ? (S.settings.loopback ? t.routes[S.settings.loopback].flow : t.routes.yes.flow.concat(t.routes.no.flow.slice(0, 1))) : t.flow;
    h += '<section class="panel" style="--tc:' + t.color + '"><div class="ptitle"><span class="sq tc">' + I('radio', 18) + '</span><h3>신호 흐름</h3>' + (t.routes ? '<span class="count">' + (S.settings.loopback ? esc(t.routes[S.settings.loopback].short) + ' 기준' : '장비 미선택 · 두 방식 표시') + '</span>' : '') + '</div>' + flow(rows) + '<div class="legend"><span class="k-src">소스</span><span class="k-hw">하드웨어</span><span class="k-daw">Cubase</span><span class="k-fx">이펙트</span><span class="k-bus">버스 · 라우팅</span><span class="k-out">도착지</span></div></section>';
    /* FAQ */
    h += '<section class="panel faq" style="--tc:' + t.color + '"><div class="ptitle"><span class="sq warm">' + I('help', 18) + '</span><h3>자주 발생하는 문제 해결 (FAQ)</h3><span class="count">' + t.faq.length + '건</span></div>' + t.faq.map(function (f, i) { return det('faq-' + t.id + '-' + i, '<span class="q">Q</span>' + esc(f.q), '<ol>' + f.a.map(function (a) { return '<li>' + rich(a) + '</li>'; }).join('') + '</ol>'); }).join('') + '</section>';
    h += '<div class="reset-row"><button class="btn text" data-act="treset" data-v="' + st.id.charAt(0) + '">' + I('rotate', 14) + '이 트랙의 체크 초기화</button></div>';
    return h;
  }

  /* ── 단축키 노트 ── */
  function keyList() {
    var cur = Math.min(St.frontier(S), 42), base = B.shortcuts.map(function (k) { return { name: k.name, key: k.key, scope: k.scope, tag: pad(k.first) + '회차', first: k.first, numpad: k.numpad }; });
    var extra = CG.extraShortcuts.map(function (k) { return { name: k.name, key: k.key, scope: k.scope, tag: k.tag, first: 99 }; });
    if (ui.keys === 'learned') return base.filter(function (k) { return k.first <= cur; });
    if (ui.keys === 'extra') return extra;
    return base.concat(extra);
  }
  function vKeys() {
    var list = keyList(), recalled = Object.keys(S.keys).filter(function (k) { return S.keys[k].recall; }).length;
    var h = '<section class="panel"><div class="ptitle">' + I('keyboard', 20) + '<h3>단축키 노트</h3><span class="count">' + list.length + '개 · 자료 없이 실행 ' + recalled + '개</span></div><p class="muted">' + rich('`Edit > Key Commands`에서 명령 이름을 찾고 현재 배정을 입력하세요. Press Key Search는 누른 키로 찾을 때 사용합니다. 사용자 지정키를 기본키로 바꿔 적지 않습니다.') + '</p>' +
      '<div class="seg tabs"><button data-act="keytab" data-v="learned" class="' + (ui.keys === 'learned' ? 'on' : '') + '">학습 범위</button><button data-act="keytab" data-v="all" class="' + (ui.keys === 'all' ? 'on' : '') + '">전체</button><button data-act="keytab" data-v="extra" class="' + (ui.keys === 'extra' ? 'on' : '') + '">심화 · 공통</button></div>' +
      (mac() ? '<p class="mini os-note">macOS 표기 중입니다. Ctrl→Cmd, Alt→Option으로 바꿔 보여 주며 F키는 Fn 설정에 따라 다를 수 있습니다. Insert 키처럼 Mac 키보드에 없는 키는 Key Commands에서 직접 배정하세요.</p>' : '') + '<div class="keys-table">';
    list.forEach(function (k) {
      var v = S.keys[k.name] || { binding: '', recall: false };
      h += '<article><div class="key-top"><span class="chip">' + esc(k.tag) + '</span><h4>' + esc(k.name) + '</h4>' + kbd(k.key) + '</div><p>' + plain(k.scope) + '</p><div class="key-form"><label>현재 PC 배정<input data-keybind="' + esc(k.name) + '" value="' + esc(v.binding) + '" placeholder="미확인"></label>' + tick(v.recall, '자료 없이 실행했어요', 'data-act="krecall" data-name="' + esc(k.name) + '"') + '</div></article>';
    });
    return h + '</div></section>';
  }

  /* ── 용어 · 자료 ── */
  function glossResults() {
    var q = ui.q.trim().toLowerCase(), h = '', hits = 0;
    CG.glossary.forEach(function (g) {
      var items = g.items.filter(function (x) { return !q || (x.term + ' ' + x.ko + ' ' + x.def).toLowerCase().indexOf(q) >= 0; });
      if (!items.length) return; hits += items.length;
      h += '<h4 class="ggroup">' + esc(g.group) + '</h4><div class="gloss">' + items.map(function (x) {
        return '<article><div><b>' + esc(x.term) + '</b><span>' + esc(x.ko) + '</span></div><p>' + esc(x.def) + '</p>' + (x.lesson ? '<a href="#/lesson/' + x.lesson + '">' + pad(x.lesson) + '회차 ' + esc(B.lessons[x.lesson - 1].title) + I('arrow-right', 13) + '</a>' : '') + '</article>';
      }).join('') + '</div>';
    });
    return hits ? h : '<p class="muted">찾는 용어가 없습니다. 영어 이름이나 한글 뜻으로 다시 검색해 보세요.</p>';
  }
  function vLibrary() {
    var tabs = [['glossary', '용어집'], ['mix', '믹스 5가지'], ['content', '설치 · 콘텐츠'], ['sources', '컨텍스트 문서']];
    var h = '<div class="seg tabs">' + tabs.map(function (t) { return '<button data-act="libtab" data-v="' + t[0] + '" class="' + (ui.lib === t[0] ? 'on' : '') + '">' + t[1] + '</button>'; }).join('') + '</div>';
    if (ui.lib === 'glossary') {
      h += '<section class="panel"><div class="ptitle">' + I('book', 20) + '<h3>초보자 필수 용어</h3><span class="count">' + CG.glossary.reduce(function (a, g) { return a + g.items.length; }, 0) + '개</span></div><p class="muted">첫 몇 주 동안 계속 마주치는 단어들입니다. 한 번에 외우지 말고 실습 중 막힐 때 찾아보세요.</p><label class="search">' + I('search', 16) + '<input id="gloss-q" type="search" placeholder="용어 검색 (예: send, 레이턴시)" value="' + esc(ui.q) + '" aria-label="용어 검색"></label><div id="gloss-results">' + glossResults() + '</div></section>';
    } else if (ui.lib === 'mix') {
      h += '<section class="panel"><div class="ptitle">' + I('sliders', 20) + '<h3>더 나은 믹스를 위한 5가지</h3></div><p class="muted">복잡한 플러그인 없이 믹스를 바로 개선하는 기본 동작입니다. 기초 5주 묶음(29–35회차)과 함께 봅니다.</p></section><div class="mix-list">' +
        CG.mixTips.map(function (m, i) { return '<section class="panel mix"><div class="mix-no">' + (i + 1) + '</div><div><h3>' + esc(m.title) + '</h3><small>' + esc(m.en) + '</small><p>' + esc(m.body) + '</p><ol>' + m.steps.map(function (s) { return '<li>' + rich(s) + '</li>'; }).join('') + '</ol><a href="#/lesson/' + m.lesson + '">' + pad(m.lesson) + '회차 ' + esc(B.lessons[m.lesson - 1].title) + '에서 실습' + I('arrow-right', 13) + '</a></div></section>'; }).join('') + '</div>';
    } else if (ui.lib === 'content') {
      var c = CG.contentGuide;
      h += '<section class="panel"><div class="ptitle">' + I('download', 20) + '<h3>다운로드 · 콘텐츠 가이드</h3></div><p>' + esc(c.intro) + '</p><dl class="values wide">' + c.categories.map(function (x) { return '<div><dt>' + esc(x.name) + '</dt><dd>' + esc(x.note) + '</dd></div>'; }).join('') + '</dl></section>' +
        '<section class="panel"><h3>악기 · 라이브러리 · 도구</h3><div class="table-wrap"><table><thead><tr><th>이름</th><th>내용</th><th>필요한 본체</th></tr></thead><tbody>' + c.instruments.map(function (x) { return '<tr><td><b>' + esc(x.name) + '</b></td><td>' + esc(x.what) + '</td><td>' + (x.needs ? esc(x.needs) : '—') + '</td></tr>'; }).join('') + '</tbody></table></div></section>' +
        '<section class="panel"><h3>샘플 팩</h3><p class="muted">' + esc(c.samplesIntro) + '</p><dl class="values wide">' + c.samples.map(function (x) { return '<div><dt>' + esc(x.genre) + '</dt><dd>' + esc(x.packs) + '</dd></div>'; }).join('') + '</dl></section>';
    } else {
      h += '<section class="panel"><div class="ptitle">' + I('file', 20) + '<h3>컨텍스트 문서와 연결된 회차</h3></div><p class="muted">Claude 프로젝트에 올린 Steinberg 입문 튜토리얼 9종입니다. 각 문서의 요점이 아래 회차의 「Steinberg 튜토리얼 보강」과 용어·자료 탭에 반영되어 있습니다.</p><div class="src-list">' +
        Object.keys(CG.sources).map(function (k) {
          var src = CG.sources[k], ids = Object.keys(CG.context).filter(function (id) { return CG.context[id].some(function (c) { return c.src === k; }); });
          var extra = k === 'terms' ? '<a href="#/library" data-act="libtab" data-v="glossary">용어집</a>' : k === 'mix' ? '<a href="#/library" data-act="libtab" data-v="mix">믹스 5가지</a>' : k === 'dl' ? '<a href="#/library" data-act="libtab" data-v="content">설치 · 콘텐츠</a>' : '';
          return '<article><div><b>' + esc(src.ko) + '</b><small>' + esc(src.title) + '</small></div><div class="src-links">' + ids.map(function (id) { return '<a href="#/lesson/' + id + '">' + pad(id) + ' ' + esc(B.lessons[id - 1].title) + '</a>'; }).join('') + extra + '</div></article>';
        }).join('') + '</div></section>';
    }
    return h;
  }

  /* ── 학습 기록 ── */
  function vHistory() {
    var count = doneCount(), minutes = S.logs.reduce(function (n, l) { return n + l.minutes; }, 0), tt = 0, td = 0;
    CG.tracks.forEach(function (t) { var s = trackStats(t); tt += s.total; td += s.done; });
    var names = { complete: '전체 완료', partial: '일부 완료', review: '복습 기록', reopen: '완료 취소' };
    var h = '<div class="stats"><div class="panel"><span>직접 완료한 회차</span><strong>' + count + '<small> / 42</small></strong></div><div class="panel"><span>기록된 실제 실습</span><strong>' + minutes + '<small>분</small></strong></div><div class="panel"><span>저장한 실습 기록</span><strong>' + S.logs.length + '<small>개</small></strong></div><div class="panel"><span>심화 체크포인트</span><strong>' + td + '<small> / ' + tt + '</small></strong></div></div>';
    h += '<section class="panel"><div class="ptitle">' + I('history', 19) + '<h3>학습 타임라인</h3></div>';
    if (!S.logs.length) h += '<div class="empty">' + I('book', 34) + '<h3>첫 번째 작업 기록을 기다리고 있어요.</h3><p>오늘의 실습에서 메모를 남기고, 일부 또는 전체 완료를 직접 기록해 주세요.</p><a class="btn primary" href="' + navHash('lesson') + '">현재 회차 열기' + I('arrow-right', 15) + '</a></div>';
    else h += '<div class="timeline">' + S.logs.slice().reverse().map(function (l) { return '<article><span class="log-dot ' + l.kind + '"></span><div><div class="log-title"><b>' + pad(l.lesson) + ' · ' + esc(B.lessons[l.lesson - 1].title) + '</b><span>' + names[l.kind] + ' · ' + l.minutes + '분</span></div><time>' + fmt(l.at) + '</time>' + (l.note ? '<p>' + esc(l.note) + '</p>' : '') + (l.stuck ? '<p class="stuck">막힌 점: ' + esc(l.stuck) + '</p>' : '') + '<a class="btn text" href="#/lesson/' + l.lesson + '">회차 열기 →</a></div></article>'; }).join('') + '</div>';
    h += '</section><section class="panel"><div class="ptitle">' + I('shield', 19) + '<h3>백업과 기기 이동</h3></div><p class="muted">기록은 로그인 없이 이 브라우저에만 저장됩니다. 브라우저 데이터를 지우면 함께 사라지므로 주기적으로 내보내 두세요. 다른 PC에서는 내보낸 JSON을 가져오면 이어서 진행할 수 있습니다. 이전 Practice Room에서 내보낸 JSON도 가져올 수 있습니다.</p><div class="btn-row"><button class="btn ghost" data-act="export">' + I('download', 15) + '기록 내보내기 (JSON)</button><button class="btn ghost" data-act="import">' + I('upload', 15) + '기록 가져오기</button><button class="btn text danger" data-act="ask" data-v="reset">' + I('rotate', 14) + '모든 기록 초기화</button></div><input type="file" id="import-file" accept="application/json,.json" hidden></section>';
    return h;
  }

  /* ── 페이지 머리말 ── */
  function heading() {
    var H = {
      lesson: ['작은 실습이, 나의 음악이 되도록.', '편한 시간에 이어가세요. 오늘의 한 가지를 직접 만들어 보는 시간입니다.'],
      course: ['한 회차씩, 단단하게.', '날짜보다 실제 완료가 먼저입니다. 완료를 확인한 회차부터 차례로 이어갑니다.'],
      tracks: ['실전 세팅을, 손에 익도록.', '오케스트레이션 · 방송 송출 · 녹음. 메뉴 경로와 수치를 그대로 따라 합니다.'],
      keys: ['손에 익히는 단축키.', '기본 배정과 현재 PC의 배정을 구분하고, 자료 없이 실행했는지 기록하세요.'],
      library: ['막힐 때 펼쳐 보는 자료.', '용어, 믹스 기본기, 설치 콘텐츠를 한곳에 모았습니다.'],
      history: ['쌓아 온 작업의 기록.', '메모와 실제 소요 시간, 직접 확인한 결과를 함께 모았습니다.']
    };
    if (ui.view === 'track') return '';
    var x = H[ui.view], count = doneCount(), pct = Math.round(count / 42 * 100);
    return '<div class="heading"><div><div class="eyebrow">CUBASE PRO 15 · ' + (mac() ? 'macOS 표기' : 'WINDOWS') + '</div><h1>' + x[0] + '</h1><p>' + x[1] + '</p></div><div class="goal"><span>기본 숙달 목표</span><strong>2026. 12. 31</strong></div></div>' +
      '<div class="strip"><div><span>공통 기초</span><strong>' + count + '<small> / 42 회차</small></strong></div>' + bar(pct) + '<span class="pct">' + pct + '%</span><i class="divider"></i>' + I('shield', 17) + '<span>직접 확인한 완료만 반영</span></div>';
  }

  /* ── 대화상자 ── */
  function dialog() {
    var d = ui.dialog; if (!d) return '';
    var id = ui.id, cur = Math.min(St.frontier(S), 42), h = '<div class="backdrop" data-act="close"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="dlg-title"><button class="icon-btn modal-x" data-act="close" aria-label="닫기">' + I('x', 18) + '</button>';
    if (d === 'locked') h += '<div class="modal-ic">' + I('lock', 26) + '</div><h2 id="dlg-title">한 회차씩 이어가요.</h2><p>' + pad(cur) + '회차를 직접 완료했다고 확인한 뒤 다음 회차가 열립니다. 날짜나 체크 개수만으로 넘어가지 않아요.</p><button class="btn primary wide" data-act="close">현재 회차 계속하기</button>';
    else if (d === 'complete' || d === 'reopen') h += '<div class="modal-ic">' + I('check-circle', 27) + '</div><h2 id="dlg-title">' + pad(id) + '회차 ' + (d === 'complete' ? '완료를 기록할까요?' : '다시 연습할까요?') + '</h2><p>' + (d === 'complete' ? '완료 기준을 직접 확인한 사용자 보고로 기록됩니다. 다음 회차는 자동으로 시작하지 않습니다.' : '기존 실습 이력은 보관하며 이 회차를 다시 연습 상태로 바꿉니다. 이후의 새 회차는 이 회차를 다시 완료할 때까지 잠깁니다.') + '</p>' + tick(ui.confirmed, d === 'complete' ? '이 회차의 과제를 직접 완료했어요.' : '완료를 취소하고 다시 연습하겠어요.', 'data-act="confirm"') + '<button class="btn primary wide" data-act="do-' + d + '"' + (ui.confirmed ? '' : ' disabled') + '>' + (d === 'complete' ? '완료 확인 · 기록 저장' : '완료 취소 확인') + '</button>';
    else if (d === 'reset') h += '<div class="modal-ic warn">' + I('alert', 26) + '</div><h2 id="dlg-title">모든 기록을 초기화할까요?</h2><p>회차 완료, 메모, 단축키 기록, 심화 체크포인트가 이 브라우저에서 모두 지워집니다. 되돌릴 수 없으니 먼저 내보내기로 백업하세요.</p>' + tick(ui.confirmed, '백업을 확인했고 모두 지우겠어요.', 'data-act="confirm"') + '<button class="btn primary wide danger-bg" data-act="do-reset"' + (ui.confirmed ? '' : ' disabled') + '>초기화</button>';
    else if (d === 'import') { var p = ui.pending, n = 0; for (var i = 1; i <= 42; i++) if (p.records[i] && p.records[i].status === 'complete') n++; h += '<div class="modal-ic">' + I('upload', 26) + '</div><h2 id="dlg-title">이 기록으로 바꿀까요?</h2><p>가져온 파일: 완료 ' + n + '회차 · 실습 기록 ' + p.logs.length + '개 · 심화 체크 ' + Object.keys(p.tracks).length + '개. 현재 브라우저의 기록(완료 ' + doneCount() + '회차)은 가져온 내용으로 대체됩니다.</p>' + tick(ui.confirmed, '현재 기록을 대체하겠어요.', 'data-act="confirm"') + '<button class="btn primary wide" data-act="do-import"' + (ui.confirmed ? '' : ' disabled') + '>가져오기</button>'; }
    return h + '</div></div>';
  }

  /* ── 렌더 ── */
  function render() {
    var y = window.scrollY;
    document.body.classList.toggle('menu-open', ui.mobile);
    $side.innerHTML = sidebar(); $top.innerHTML = topbar();
    var V = { lesson: vLesson, course: vCourse, tracks: vTracks, track: vTrack, keys: vKeys, library: vLibrary, history: vHistory };
    $main.innerHTML = heading() + '<div class="view view-' + ui.view + '">' + V[ui.view]() + '</div><footer class="foot"><span>cubase guide · 작은 실습을 꾸준한 작업으로</span><span>Cubase Pro 15 · 비공식 학습 노트 · Cubase는 Steinberg Media Technologies GmbH의 상표입니다</span></footer>';
    $layer.innerHTML = dialog();
    window.scrollTo(0, y);
  }

  /* ── 이벤트 ── */
  var ACT = {
    menu: function () { ui.mobile = !ui.mobile; render(); },
    os: function (el) { commit({ action: 'setting', key: 'os', value: el.dataset.v }); render(); },
    loopset: function (el) { commit({ action: 'setting', key: 'loopback', value: S.settings.loopback === el.dataset.v ? '' : el.dataset.v }); render(); },
    mode: function (el) { draft.mode = el.dataset.v === '30' ? 30 : 60; saveDraft(); render(); },
    partial: function () {
      flushDraft();
      if (!(Number(draft.minutes) > 0)) { toast('이번 실습에 실제로 쓴 시간을 분 단위로 입력해 주세요.', 'error'); var m = document.querySelector('[data-field="minutes"]'); if (m) m.focus(); return; }
      if (commit({ action: 'partial', lesson: ui.id, draft: draft })) { loadDraft(ui.id); toast('일부 완료로 기록했어요.'); render(); }
    },
    ask: function (el) { flushDraft(); ui.dialog = el.dataset.v; ui.confirmed = false; render(); },
    close: function () { ui.dialog = null; ui.pending = null; render(); },
    'do-complete': function () {
      var L = B.lessons[ui.id - 1];
      if (commit({ action: 'complete', lesson: ui.id, draft: draft, confirmation: pad(ui.id) + '회차 완료' }, L.criteria.length)) { ui.dialog = null; loadDraft(ui.id); toast('완료를 기록했어요. 다음 회차는 준비되었을 때 직접 열어 주세요.'); }
      render();
    },
    'do-reopen': function () {
      if (commit({ action: 'reopen', lesson: ui.id, draft: draft, confirmation: pad(ui.id) + '회차 다시 연습' })) { ui.dialog = null; loadDraft(ui.id); toast('다시 연습 상태로 바꿨어요.'); }
      render();
    },
    'do-reset': function () { clearTimeout(saveTimer); saveTimer = null; S = St.initial(); St.persist(S); ui.dialog = null; ui.id = 1; loadDraft(1); toast('모든 기록을 초기화했어요.'); go('#/lesson/1'); },
    'do-import': function () { clearTimeout(saveTimer); saveTimer = null; S = ui.pending; St.persist(S); ui.pending = null; ui.dialog = null; toast('기록을 가져왔어요.'); go('#/history'); },
    treset: function (el) { if (commit({ action: 'trackReset', prefix: el.dataset.v })) { toast('이 트랙의 체크를 초기화했어요.'); render(); } },
    keytab: function (el) { ui.keys = el.dataset.v; render(); },
    libtab: function (el, e) { if (e) e.preventDefault(); ui.lib = el.dataset.v; render(); window.scrollTo(0, 0); },
    export: function () {
      flushDraft();
      var data = Object.assign({ app: 'Cubase Guide', exportedAt: new Date().toISOString() }, S);
      var url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })), a = document.createElement('a');
      a.href = url; a.download = 'Cubase_Guide_Record.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      toast('기록을 내보냈어요.');
    },
    import: function () { var f = document.getElementById('import-file'); if (f) f.click(); }
  };
  var CHG = {
    tick: function (el) {
      var f = el.dataset.f, n = Number(el.dataset.n), i = Number(el.dataset.i), a = [];
      for (var k = 0; k < n; k++) a.push(!!draft[f][k]);
      a[i] = !a[i]; draft[f] = a; saveDraft(); render();
    },
    indep: function () { draft.independent = !draft.independent; saveDraft(); render(); },
    confirm: function () { ui.confirmed = !ui.confirmed; render(); },
    tcheck: function (el) { commit({ action: 'trackCheck', id: el.dataset.id, value: el.checked }); render(); },
    krecall: function (el) { var name = el.dataset.name, v = S.keys[name] || { binding: '' }; commit({ action: 'keys', command: name, binding: v.binding, recall: el.checked }); render(); },
    loop: function (el) { commit({ action: 'setting', key: 'loopback', value: el.value }); render(); }
  };

  function onClick(e) {
    var el = e.target.closest('[data-act]'); if (!el || el.tagName === 'INPUT' || el.tagName === 'SELECT') return;
    if (el.classList.contains('backdrop') && e.target !== el) return;
    var fn = ACT[el.dataset.act]; if (fn) fn(el, e);
  }
  function onChange(e) {
    var el = e.target;
    if (el.id === 'import-file') return readImport(el);
    var fn = el.dataset && CHG[el.dataset.act]; if (fn) fn(el, e);
  }
  function onInput(e) {
    var el = e.target, d = el.dataset || {};
    if (d.field && draft) {
      draft[d.field] = el.value; queueDraft();
      if (d.field === 'minutes') { var b = document.getElementById('complete-btn'); if (b) b.disabled = !completionReady(B.lessons[ui.id - 1]); }
    } else if (d.pfield && draft) { draft.plugin[d.pfield] = el.value; queueDraft(); }
    else if (d.keybind) {
      clearTimeout(keyTimer); var name = d.keybind, val = el.value;
      keyTimer = setTimeout(function () { var v = S.keys[name] || { recall: false }; commit({ action: 'keys', command: name, binding: val, recall: v.recall }); }, 400);
    } else if (el.id === 'gloss-q') { ui.q = el.value; var r = document.getElementById('gloss-results'); if (r) r.innerHTML = glossResults(); }
  }
  function readImport(input) {
    var file = input.files && input.files[0]; if (!file) return;
    var fr = new FileReader();
    fr.onload = function () {
      try { var raw = JSON.parse(String(fr.result)); if (!raw || typeof raw !== 'object' || !raw.records) throw Error(); ui.pending = St.normalize(raw); ui.dialog = 'import'; ui.confirmed = false; render(); }
      catch (err) { toast('가져올 수 없는 파일입니다. 이 사이트에서 내보낸 JSON인지 확인해 주세요.', 'error'); }
    };
    fr.readAsText(file); input.value = '';
  }

  function init() {
    $side = document.getElementById('sidebar'); $top = document.getElementById('topbar'); $main = document.getElementById('main'); $layer = document.getElementById('layer'); $toast = document.getElementById('toast');
    document.addEventListener('click', onClick);
    document.addEventListener('change', onChange);
    document.addEventListener('input', onInput);
    document.addEventListener('toggle', function (e) { var k = e.target.dataset && e.target.dataset.k; if (k) ui.open[k] = e.target.open; }, true);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && (ui.dialog || ui.mobile)) { ui.dialog = null; ui.pending = null; ui.mobile = false; render(); } });
    document.getElementById('shade').addEventListener('click', function () { ui.mobile = false; render(); });
    window.addEventListener('hashchange', route);
    window.addEventListener('beforeunload', flushDraft);
    route();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
