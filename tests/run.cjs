/* 의존성 없는 검사: `node tests/run.cjs`
   데이터 무결성(42회차·컨텍스트·심화 트랙)과 진행 규칙(순서 잠금·완료 확인·평가·가져오기)을 확인합니다. */
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
['data/lessons.js', 'data/context.js', 'data/reference.js', 'data/tracks.js', 'assets/icons.js', 'assets/store.js'].forEach(f => require(path.join(root, f)));
const CG = globalThis.CG, B = CG.base, St = CG.store;
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('ok  ' + name); };

test('기초 42회차가 순서대로 있고 필수 항목을 갖는다', () => {
  assert.equal(B.lessons.length, 42);
  B.lessons.forEach((l, i) => {
    assert.equal(l.id, i + 1);
    for (const k of ['title', 'goal', 'why', 'concept', 'prep', 'recovery', 'reproduce', 'result']) assert.ok(l[k], `${l.id}.${k}`);
    assert.ok(l.steps.length >= 3 && l.criteria.length >= 3 && l.confusion.length >= 1);
    l.refs.forEach(r => assert.ok(B.refs[r], `ref ${r}`));
    if (l.video) assert.ok(B.videos[l.video], `video ${l.video}`);
  });
  assert.equal(B.weeks.length, 6); assert.equal(B.evaluation.length, 6);
  assert.equal(B.shortcuts.length, 22);
});

test('컨텍스트 보강이 실제 회차와 문서에 연결된다', () => {
  assert.equal(Object.keys(CG.sources).length, 9);
  const used = new Set();
  Object.entries(CG.context).forEach(([id, list]) => {
    assert.ok(B.lessons[id - 1], `lesson ${id}`);
    list.forEach(c => { assert.ok(CG.sources[c.src], c.src); used.add(c.src); assert.ok(c.points.length); });
  });
  assert.equal(used.size, 9, '모든 컨텍스트 문서가 한 회차 이상에 쓰인다');
  assert.equal(CG.glossary.reduce((a, g) => a + g.items.length, 0), 26);
  CG.glossary.forEach(g => g.items.forEach(x => { if (x.lesson) assert.ok(B.lessons[x.lesson - 1]); }));
  assert.equal(CG.mixTips.length, 5);
});

test('심화 트랙 3종의 구조와 아이콘·회차 참조가 올바르다', () => {
  assert.deepEqual(CG.tracks.map(t => t.id), ['orchestra', 'stream', 'record']);
  assert.deepEqual(CG.tracks.map(t => t.steps.length), [4, 3, 3]);
  const ids = new Set();
  CG.tracks.forEach(t => {
    assert.ok(CG.iconNames.includes(t.icon)); assert.ok(t.faq.length >= 3);
    t.prereq.forEach(id => assert.ok(B.lessons[id - 1]));
    t.steps.forEach(s => {
      assert.match(s.id, /^[a-z]\d+$/); assert.ok(!ids.has(s.id)); ids.add(s.id);
      assert.equal(s.id[0], t.steps[0].id[0]);
      assert.ok(s.blocks.length && s.values.length && s.keys.length && s.checks.length >= 4);
      (s.related || []).forEach(id => assert.ok(B.lessons[id - 1]));
    });
    (t.flow || []).concat(t.routes ? t.routes.yes.flow.concat(t.routes.no.flow) : []).forEach(r => r.nodes.forEach(nd => assert.ok(['src', 'hw', 'daw', 'fx', 'bus', 'out'].includes(nd.kind))));
  });
  assert.ok(CG.tracks[1].routes.yes.steps.length && CG.tracks[1].routes.no.steps.length);
});

const full = (len) => Array(len).fill(true);
const done = (s, id, extra = {}) => St.mutate(s, { action: 'complete', lesson: id, confirmation: St.pad(id) + '회차 완료', draft: { criteria: full(3), minutes: '40', ...extra } }, 3);

test('앞 회차를 완료해야 다음 회차가 열린다', () => {
  let s = St.initial();
  assert.equal(St.frontier(s), 1);
  assert.throws(() => St.mutate(s, { action: 'save', lesson: 2, draft: {} }), /앞 회차/);
  s = done(s, 1);
  assert.equal(St.frontier(s), 2);
  assert.equal(s.logs.at(-1).kind, 'complete');
  s = St.mutate(s, { action: 'save', lesson: 2, draft: { note: '메모' } });
  assert.equal(s.records[2].status, 'partial'); assert.equal(St.frontier(s), 2);
});

test('완료에는 확인 문구·기준 전체·실제 시간이 필요하다', () => {
  const s = St.initial();
  assert.throws(() => St.mutate(s, { action: 'complete', lesson: 1, draft: { criteria: full(3), minutes: '30' } }, 3), /완료 확인/);
  assert.throws(() => St.mutate(s, { action: 'complete', lesson: 1, confirmation: '01회차 완료', draft: { criteria: [true, true, false], minutes: '30' } }, 3), /완료 기준/);
  assert.throws(() => St.mutate(s, { action: 'complete', lesson: 1, confirmation: '01회차 완료', draft: { criteria: full(3), minutes: '' } }, 3), /소요 시간/);
  assert.equal(s.revision, 0, '실패한 변경은 원본을 건드리지 않는다');
});

test('일부 완료·복습·완료 취소가 기록되고 잠금이 다시 걸린다', () => {
  let s = St.initial();
  assert.throws(() => St.mutate(s, { action: 'partial', lesson: 1, draft: {} }), /소요 시간/);
  s = St.mutate(s, { action: 'partial', lesson: 1, draft: { minutes: '15', note: 'a' } });
  assert.equal(s.records[1].draft.minutes, ''); assert.equal(s.logs[0].minutes, 15);
  s = done(done(s, 1), 2);
  s = St.mutate(s, { action: 'partial', lesson: 1, draft: { minutes: '10', criteria: full(3) } });
  assert.equal(s.logs.at(-1).kind, 'review'); assert.equal(s.records[1].status, 'complete');
  assert.throws(() => St.mutate(s, { action: 'reopen', lesson: 1 }), /취소 확인/);
  s = St.mutate(s, { action: 'reopen', lesson: 1, confirmation: '01회차 다시 연습' });
  assert.equal(St.frontier(s), 1); assert.equal(s.records[2].status, 'complete');
  assert.throws(() => St.mutate(s, { action: 'save', lesson: 3, draft: {} }), /앞 회차/);
});

test('41·42회차 평가는 독립 재현과 서로 다른 소스를 요구한다', () => {
  let s = St.initial();
  for (let i = 1; i <= 40; i++) s = done(s, i);
  assert.throws(() => done(s, 41), /여섯 과제/);
  const ev = { evalChecks: full(6), independent: true, evalMinutes: '25', evalSource: 'A.wav' };
  assert.throws(() => done(s, 41, { ...ev, evalMinutes: '31' }), /여섯 과제/);
  assert.throws(() => done(s, 41, { ...ev, minutes: '20' }), /평가 시간 이상/);
  s = done(s, 41, ev);
  assert.throws(() => done(s, 42, ev), /다른 소스/);
  s = done(s, 42, { ...ev, evalSource: 'B.mid' });
  assert.equal(St.frontier(s), 43);
});

test('단축키 기록·심화 체크·설정이 저장된다', () => {
  let s = St.mutate(St.initial(), { action: 'keys', command: 'Save', binding: 'Ctrl+S', recall: true });
  assert.deepEqual(s.keys.Save, { binding: 'Ctrl+S', recall: true });
  s = St.mutate(s, { action: 'trackCheck', id: 's1:0', value: true });
  s = St.mutate(s, { action: 'trackCheck', id: 'o2:3', value: true });
  assert.throws(() => St.mutate(s, { action: 'trackCheck', id: '<x>', value: true }));
  s = St.mutate(s, { action: 'trackReset', prefix: 's' });
  assert.deepEqual(Object.keys(s.tracks), ['o2:3']);
  s = St.mutate(s, { action: 'setting', key: 'os', value: 'mac' });
  s = St.mutate(s, { action: 'setting', key: 'loopback', value: 'no' });
  assert.deepEqual(s.settings, { os: 'mac', loopback: 'no' });
  assert.throws(() => St.mutate(s, { action: 'setting', key: 'os', value: 'linux' }));
});

test('가져오기는 내용을 정리하고 순서 규칙을 지킨다', () => {
  let s = done(done(St.initial(), 1), 2);
  const round = St.normalize(JSON.parse(JSON.stringify(s)));
  assert.equal(St.frontier(round), 3); assert.equal(round.logs.length, 2);
  /* 이전 Practice Room 내보내기 형식(tracks·settings 없음) */
  const old = St.normalize({ app: 'Cubase Practice Room', records: { 1: s.records[1] }, logs: s.logs, keys: {}, revision: 4 });
  assert.equal(St.frontier(old), 2); assert.deepEqual(old.settings, { os: 'win', loopback: '' });
  /* 건너뛴 완료는 일부 완료로 내려간다 */
  const bad = St.normalize({ records: { 5: { status: 'complete', draft: { note: '<b>x</b>' } }, 99: { status: 'complete' } }, logs: [{ lesson: 77 }], tracks: { 'x1:0': true, bad: true } });
  assert.equal(bad.records[5].status, 'partial'); assert.equal(bad.records[99], undefined);
  assert.equal(bad.logs.length, 0); assert.deepEqual(Object.keys(bad.tracks), ['x1:0']);
  assert.deepEqual(St.normalize(null), St.initial());
});

console.log(`\n${n}개 검사 통과`);
