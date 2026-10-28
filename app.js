const I18N = {
ru: {appTitle:'Кроссворд по словарю',book:'Учебник',tabTeacher:'Генератор',tabPlay:'Кроссворд',tabDict:'Словарь',tabBoard:'Лидеры',genHint:'Отметьте модули и разделы, из слов которых собрать кроссворд.',module:'Модуль',wordCount:'Слов в кроссворде (5–25)',available:'Подходящих слов',generate:'Создать кроссворд',linkLabel:'Ссылка для учеников',copy:'Копировать',copied:'Скопировано',openGame:'Открыть',qrHint:'Откройте ссылку или наведите камеру телефона на QR-код.',selAll:'Выбрать всё',selNone:'Снять всё',clueMode:'Подсказки',cmTr:'Перевод',cmPos:'Перевод и часть речи',cmFirst:'Перевод и первая буква',playHint:'Введите имя и нажмите «Начать». Таймер запустится сразу.',yourName:'Ваше имя',start:'Начать',enterName:'Введите имя',check:'Проверить',reveal:'Показать ответы',hint:'Открыть букву (+15 с)',across:'По горизонтали',down:'По вертикали',solved:'Решено за',savedNote:'Результат записан.',revealedNote:'Ответы показаны, результат не записан.',wrongCount:'Ошибок',emptyCount:'Пустых клеток',noPuzzle:'Кроссворд не выбран. Создайте его в генераторе или откройте ссылку учителя.',tooFew:'Мало подходящих слов: нужно минимум 5 слов из латинских букв.',searchPh:'Слово или перевод',all:'Все',dictEmpty:'Ничего не найдено',words:'слов',boardNote:'Результаты хранятся в браузере этого устройства.',colName:'Имя',colTime:'Время',colPuzzle:'Кроссворд',colDate:'Дата',boardEmpty:'Результатов пока нет',clearBoard:'Очистить таблицу',confirmClear:'Удалить все результаты на этом устройстве?'},
en: {appTitle:'Vocabulary Crossword',book:'Textbook',tabTeacher:'Generator',tabPlay:'Crossword',tabDict:'Dictionary',tabBoard:'Leaderboard',genHint:'Tick the modules and sections to build the crossword from.',module:'Module',wordCount:'Words in crossword (5–25)',available:'Suitable words',generate:'Create crossword',linkLabel:'Link for students',copy:'Copy',copied:'Copied',openGame:'Open',qrHint:'Open the link or point a phone camera at the QR code.',selAll:'Select all',selNone:'Clear all',clueMode:'Clues',cmTr:'Translation',cmPos:'Translation + part of speech',cmFirst:'Translation + first letter',playHint:'Enter your name and press Start. The timer begins at once.',yourName:'Your name',start:'Start',enterName:'Enter your name',check:'Check',reveal:'Show answers',hint:'Reveal letter (+15 s)',across:'Across',down:'Down',solved:'Solved in',savedNote:'Result saved.',revealedNote:'Answers shown, result not saved.',wrongCount:'Errors',emptyCount:'Empty cells',noPuzzle:'No crossword selected. Create one in the generator or open the teacher’s link.',tooFew:'Not enough words: at least 5 Latin-letter words are needed.',searchPh:'Word or translation',all:'All',dictEmpty:'Nothing found',words:'words',boardNote:'Results are stored in this device’s browser.',colName:'Name',colTime:'Time',colPuzzle:'Crossword',colDate:'Date',boardEmpty:'No results yet',clearBoard:'Clear leaderboard',confirmClear:'Delete all results on this device?'}
};
let theme = localStorage.getItem('theme') || 'light';
let lang = localStorage.getItem('lang') || 'ru';
const T = k => (I18N[lang][k] ?? I18N.ru[k] ?? k);
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const key = (x, y) => x + ',' + y;
const parseKey = k => k.split(',').map(Number);
const isLatin = w => /^[A-Za-z]{3,}$/.test(w);
const clue = t => String(t).replace(/\(.*?\)/g, '').split(/[,;]/)[0].trim();
const moduleOf = s => { const m = String(s).match(/^(\d+)/); return m ? m[1] : String(s).replace(/\s*\d+$/, '').trim(); };
const sortNat = (a, b) => String(a).localeCompare(String(b), undefined, { numeric: true });
const fmt = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');

let WORDS = [];
const BYID = new Map();
let pz = null;
let active = { k: null, dir: 'a' };
let cellMap = new Map();
let started = false, finished = false, revealed = false;
let player = '';
let elapsed = 0, startTime = 0, timerId = null;

function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function layout(words, seed) {
  if (!words.length) return null;
  const r = rng(seed);
  const cells = new Map(), kind = new Map(), placed = [];

  const place = (src, x, y, d) => {
    const w = src.word.toUpperCase(), dx = d === 'a' ? 1 : 0, dy = d === 'd' ? 1 : 0;
    const keys = [];
    for (let i = 0; i < w.length; i++) {
      const k = key(x + dx * i, y + dy * i);
      keys.push(k);
      if (cells.has(k)) kind.set(k, 'x');
      else { cells.set(k, w[i]); kind.set(k, d); }
    }
    placed.push({ src, w, x, y, d, keys });
  };

  const fits = (w, x, y, d) => {
    const dx = d === 'a' ? 1 : 0, dy = d === 'd' ? 1 : 0;
    if (cells.has(key(x - dx, y - dy)) || cells.has(key(x + dx * w.length, y + dy * w.length))) return false;
    let cross = 0;
    for (let i = 0; i < w.length; i++) {
      const cx = x + dx * i, cy = y + dy * i, k = key(cx, cy);
      if (cells.has(k)) {
        if (cells.get(k) !== w[i] || kind.get(k) !== (d === 'a' ? 'd' : 'a')) return false;
        cross++;
      } else if (cells.has(key(cx + dy, cy + dx)) || cells.has(key(cx - dy, cy - dx))) {
        return false;
      }
    }
    return cross > 0;
  };

  const list = [...words].sort((a, b) => b.word.length - a.word.length);
  place(list[0], 0, 0, 'a');

  for (const src of list.slice(1)) {
    const w = src.word.toUpperCase();
    const cands = [];
    for (const [k, ch] of cells) {
      const [cx, cy] = parseKey(k);
      for (let i = 0; i < w.length; i++) {
        if (w[i] !== ch) continue;
        for (const d of ['a', 'd']) {
          const x = cx - (d === 'a' ? i : 0), y = cy - (d === 'd' ? i : 0);
          if (fits(w, x, y, d)) cands.push([x, y, d]);
        }
      }
    }
    if (cands.length) {
      const [x, y, d] = cands[Math.floor(r() * cands.length)];
      place(src, x, y, d);
    }
  }

  if (placed.length < 4) return null;

  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const k of cells.keys()) {
    const [x, y] = parseKey(k);
    minX = Math.min(minX, x); maxX = Math.max(maxX, x);
    minY = Math.min(minY, y); maxY = Math.max(maxY, y);
  }

  const sorted = [...placed].sort((a, b) => a.y - b.y || a.x - b.x || (a.d === 'a' ? -1 : 1));
  const numAt = new Map();
  for (const p of sorted) {
    const k = key(p.x, p.y);
    if (!numAt.has(k)) numAt.set(k, numAt.size + 1);
    p.num = numAt.get(k);
  }

  const at = new Map();
  for (const p of placed) for (const k of p.keys) {
    if (!at.has(k)) at.set(k, []);
    at.get(k).push(p);
  }

  return { cells, placed, at, numAt, minX, minY, W: maxX - minX + 1, H: maxY - minY + 1 };
}

function buildFromPayload(p) {
  const words = p.i.map(id => BYID.get(id)).filter(Boolean);
  return layout(words, p.s);
}


const BOOKS = [];
let BOOK = null, dictMod = '';
const SPK = '<svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/></svg>';
const setSeg = (s, i) => s.style.setProperty('--i', i);
const modLabel = m => /^\d+$/.test(m) ? `${T('module')} ${m}` : m;

function setMode() {
  const m = theme === 'system' ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
  document.documentElement.dataset.mode = m;
  setSeg($('themeSeg'), ['light', 'dark', 'system'].indexOf(theme));
}

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = T(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-ph]').forEach(el => el.placeholder = T(el.dataset.i18nPh));
  setSeg($('langSeg'), lang === 'ru' ? 0 : 1);
  if (WORDS.length) { buildTree(); buildDict(); renderBoard(); if (pz) renderClues(); }
}

function showTab(n) {
  document.querySelectorAll('.panel').forEach(p => p.hidden = p.id !== n);
  document.querySelectorAll('.tab').forEach(b => b.classList.toggle('on', b.dataset.tab === n));
  if (n === 'board') renderBoard();
  scrollTo(0, 0);
}

const selSecs = () => [...document.querySelectorAll('input[data-sec]:checked')].map(c => c.dataset.sec);

function candidates(secs) {
  const seen = new Set();
  return WORDS.filter(w => {
    const k = w.word.toLowerCase();
    if (!secs.includes(w.section) || !isLatin(w.word) || seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function buildTree() {
  const on = new Set(selSecs()), mods = new Map();
  WORDS.forEach(w => {
    if (!mods.has(w.module)) mods.set(w.module, new Map());
    const s = mods.get(w.module);
    s.set(w.section, (s.get(w.section) || 0) + 1);
  });
  $('tree').innerHTML = [...mods.keys()].sort(sortNat).map(m =>
    `<div class="mod"><label class="mh"><input type="checkbox" data-mod="${esc(m)}"><span>${esc(modLabel(m))}</span></label>` +
    [...mods.get(m)].sort((a, b) => sortNat(a[0], b[0])).map(([s, n]) =>
      `<label class="sec"><input type="checkbox" data-sec="${esc(s)}"${on.has(s) ? ' checked' : ''}><span>${esc(s)}</span><em>${n}</em></label>`).join('') + '</div>').join('');
  updateAvailable();
}

function updateAvailable() {
  document.querySelectorAll('.mod').forEach(g => {
    const c = [...g.querySelectorAll('input[data-sec]')];
    g.querySelector('input[data-mod]').checked = c.length > 0 && c.every(x => x.checked);
  });
  $('available').textContent = `${T('available')}: ${candidates(selSecs()).length}`;
}

$('tree').addEventListener('change', e => {
  if (e.target.dataset.mod !== undefined)
    e.target.closest('.mod').querySelectorAll('input[data-sec]').forEach(c => c.checked = e.target.checked);
  updateAvailable();
});
const setAll = v => { document.querySelectorAll('input[data-sec]').forEach(c => c.checked = v); updateAvailable(); };
$('selAll').onclick = () => setAll(true);
$('selNone').onclick = () => setAll(false);

$('genBtn').onclick = () => {
  const pool = candidates(selSecs());
  const want = Math.min(25, Math.max(5, parseInt($('wordCount').value, 10) || 12));
  if (pool.length < 5) return alert(T('tooFew'));
  const seed = Math.floor(Math.random() * 2147483646) + 1, r = rng(seed);
  const chosen = pool.map(w => [r(), w]).sort((a, b) => a[0] - b[0]).slice(0, want).map(x => x[1]);
  const payload = { b: BOOK.id, i: chosen.map(w => w.id), s: seed, c: $('clueMode').value };
  if (!buildFromPayload(payload)) return alert(T('tooFew'));
  const code = btoa(JSON.stringify(payload));
  const link = location.href.split('#')[0] + '#game=' + code;
  $('linkBox').value = link;
  $('result').hidden = false;
  $('qr').innerHTML = '';
  try { new QRCode($('qr'), { text: link, width: 168, height: 168 }); } catch (e) { }
  $('openBtn').onclick = () => { location.hash = 'game=' + code; };
};

$('copyBtn').onclick = () => {
  navigator.clipboard?.writeText($('linkBox').value);
  $('copyBtn').textContent = T('copied');
  setTimeout(() => $('copyBtn').textContent = T('copy'), 1500);
};

async function route() {
  if (!location.hash.startsWith('#game=')) return;
  let p = null;
  try { p = JSON.parse(atob(location.hash.slice(6))); } catch (e) { }
  if (p && p.b && BOOK && p.b !== BOOK.id) await loadBook(p.b);
  loadPuzzle(p);
  showTab('play');
}

async function loadBook(id) {
  BOOK = BOOKS.find(b => b.id === id) || BOOKS[0];
  $('bookSel').value = BOOK.id;
  localStorage.setItem('book', BOOK.id);
  WORDS = await (await fetch(BOOK.file)).json();
  BYID.clear();
  WORDS.forEach(w => { w.module = moduleOf(w.section); w.clue = clue(w.translation); BYID.set(w.id, w); });
  dictMod = '';
  loadPuzzle(null);
  applyLang();
}
function loadPuzzle(p) {
  stopTimer();
  const built = p ? buildFromPayload(p) : null;
  pz = built ? { ...built, payload: p } : null;
  started = finished = revealed = false;
  elapsed = 0;
  player = '';
  $('timer').textContent = '00:00';
  $('status').textContent = '';
  $('status').classList.remove('win');
  $('nameErr').textContent = '';
  $('noPuzzle').hidden = !!pz;
  $('startBox').hidden = !pz;
  $('gameArea').hidden = true;
  if (pz) {
    $('playerName').value = '';
    renderGrid();
    renderClues();
  }
}

function renderGrid() {
  const g = $('grid');
  g.innerHTML = '';
  cellMap = new Map();
  g.style.gridTemplateColumns = `repeat(${pz.W}, var(--cell))`;
  for (let y = pz.minY; y < pz.minY + pz.H; y++) {
    for (let x = pz.minX; x < pz.minX + pz.W; x++) {
      const k = key(x, y), div = document.createElement('div');
      if (!pz.cells.has(k)) { div.className = 'blk'; g.appendChild(div); continue; }
      div.className = 'cell';
      if (pz.numAt.has(k)) {
        const s = document.createElement('span');
        s.className = 'num';
        s.textContent = pz.numAt.get(k);
        div.appendChild(s);
      }
      const inp = document.createElement('input');
      inp.autocomplete = 'off';
      inp.addEventListener('focus', () => { pick(k, false); inp.select(); });
      inp.addEventListener('click', () => pick(k, true));
      inp.addEventListener('input', () => onInput(k, inp));
      inp.addEventListener('keydown', e => onKey(e, k, inp));
      div.appendChild(inp);
      g.appendChild(div);
      cellMap.set(k, div);
    }
  }
}

function clueText(p) {
  const c = pz.payload.c || 'tr';
  let t = p.src.clue || p.src.translation;
  if (c === 'pos' && p.src.pos) t += ` [${p.src.pos}]`;
  if (c === 'first') t += ` — ${p.w[0]}…`;
  return `${t} (${p.w.length})`;
}

function renderClues() {
  const fill = (ol, dir) => {
    ol.innerHTML = '';
    pz.placed.filter(p => p.d === dir).sort((a, b) => a.num - b.num).forEach(p => {
      const li = document.createElement('li');
      li.value = p.num;
      li.textContent = clueText(p);
      li.onclick = () => move(p.keys[0], p.d);
      p.li = li;
      ol.appendChild(li);
    });
  };
  fill($('acrossList'), 'a');
  fill($('downList'), 'd');
}

function neighbor(k, dir, delta) {
  const [x, y] = parseKey(k);
  const nk = dir === 'a' ? key(x + delta, y) : key(x, y + delta);
  return pz.cells.has(nk) ? nk : null;
}

function pick(k, toggle) {
  const list = pz.at.get(k);
  if (!list) return;
  const has = d => list.some(p => p.d === d);
  let dir = active.dir;
  if (toggle && has('a') && has('d')) dir = dir === 'a' ? 'd' : 'a';
  if (!has(dir)) dir = has('a') ? 'a' : 'd';
  active = { k, dir };
  highlight();
}

function move(k, dir) {
  active.dir = dir;
  pick(k, false);
  cellMap.get(k)?.querySelector('input')?.focus();
}

function highlight() {
  cellMap.forEach(el => el.classList.remove('hl', 'act'));
  const cur = (pz.at.get(active.k) || []).find(p => p.d === active.dir);
  if (cur) cur.keys.forEach(k => cellMap.get(k)?.classList.add('hl'));
  cellMap.get(active.k)?.classList.add('act');
  pz.placed.forEach(p => p.li?.classList.toggle('cur', p === cur));
}

function onInput(k, inp) {
  const v = inp.value.replace(/[^a-zA-Z]/g, '').slice(-1).toUpperCase();
  inp.value = v;
  cellMap.get(k).classList.remove('ok', 'bad');
  if (v) {
    const nk = neighbor(k, active.dir, 1);
    if (nk) move(nk, active.dir);
  }
  const { wrong, empty } = checkAll(false);
  if (!wrong && !empty) finish();
}

function onKey(e, k, inp) {
  if (finished) { e.preventDefault(); return; }
  const arrows = { ArrowRight: ['a', 1], ArrowLeft: ['a', -1], ArrowDown: ['d', 1], ArrowUp: ['d', -1] };
  if (arrows[e.key]) {
    e.preventDefault();
    const [d, s] = arrows[e.key];
    const nk = neighbor(k, d, s);
    if (nk) move(nk, d);
  } else if (e.key === 'Backspace' && !inp.value) {
    e.preventDefault();
    const pk = neighbor(k, active.dir, -1);
    if (pk) {
      const el = cellMap.get(pk);
      el.querySelector('input').value = '';
      el.classList.remove('ok', 'bad');
      move(pk, active.dir);
    }
  }
}

function checkAll(paint = true) {
  let wrong = 0, empty = 0;
  pz.cells.forEach((ch, k) => {
    const el = cellMap.get(k), v = el.querySelector('input').value;
    if (paint) el.classList.remove('ok', 'bad');
    if (!v) empty++;
    else if (v === ch) { if (paint) el.classList.add('ok'); }
    else { if (paint) el.classList.add('bad'); wrong++; }
  });
  return { wrong, empty };
}

function lockGrid() {
  document.querySelectorAll('#grid input').forEach(i => i.disabled = true);
}

function startTimer() {
  if (timerId) return;
  startTime = Date.now() - elapsed * 1000;
  timerId = setInterval(() => {
    elapsed = Math.floor((Date.now() - startTime) / 1000);
    $('timer').textContent = fmt(elapsed);
  }, 250);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function finish() {
  if (finished) return;
  finished = true;
  stopTimer();
  lockGrid();
  saveResult();
  $('status').classList.add('win');
  $('status').textContent = `${T('solved')} ${fmt(elapsed)}. ${T('savedNote')}`;
}

function saveResult() {
  const list = JSON.parse(localStorage.getItem('tkl_results') || '[]');
  list.push({
    name: player,
    sec: elapsed,
    puzzle: `${BOOK.title}, ${pz.placed.length} ${T('words')}`,
    date: new Date().toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-GB')
  });
  localStorage.setItem('tkl_results', JSON.stringify(list));
  renderBoard();
}

$('startBtn').onclick = () => {
  const name = $('playerName').value.trim();
  if (!name) { $('nameErr').textContent = T('enterName'); return; }
  $('nameErr').textContent = '';
  player = name;
  started = true;
  $('who').textContent = name;
  $('startBox').hidden = true;
  $('gameArea').hidden = false;
  startTimer();
  const first = pz.placed.find(p => p.num === 1);
  if (first) move(first.keys[0], first.d);
};

$('checkBtn').onclick = () => {
  if (!pz || finished) return;
  const { wrong, empty } = checkAll();
  if (!wrong && !empty) return finish();
  $('status').textContent = `${T('wrongCount')}: ${wrong}, ${T('emptyCount')}: ${empty}`;
};

$('hintBtn').onclick = () => {
  if (!pz || finished || !active.k) return;
  const el = cellMap.get(active.k);
  el.querySelector('input').value = pz.cells.get(active.k);
  el.classList.remove('ok', 'bad');
  startTime -= 15000;
  elapsed += 15;
  $('timer').textContent = fmt(elapsed);
  const { wrong, empty } = checkAll(false);
  if (!wrong && !empty) finish();
};

$('revealBtn').onclick = () => {
  if (!pz || finished) return;
  revealed = true;
  finished = true;
  stopTimer();
  pz.cells.forEach((ch, k) => {
    const el = cellMap.get(k);
    el.querySelector('input').value = ch;
    el.classList.remove('bad');
    el.classList.add('ok');
  });
  lockGrid();
  $('status').textContent = T('revealedNote');
};


function buildDict() {
  const mods = [...new Set(WORDS.map(w => w.module))].sort(sortNat);
  $('chips').innerHTML = [['', T('all')], ...mods.map(m => [m, modLabel(m)])]
    .map(([v, l]) => `<button class="chip${v === dictMod ? ' on' : ''}" data-m="${esc(v)}">${esc(l)}</button>`).join('');
  renderDict();
}

const card = w => `<article class="wc"><div class="wh"><strong>${esc(w.word)}</strong><button class="spk" data-w="${esc(w.word)}" aria-label="Listen">${SPK}</button></div><div class="tr">${esc(w.transcription)}</div><div class="tx">${esc(w.translation)}</div><span class="pos" data-p="${esc(w.pos.split(' ')[0])}">${esc(w.pos)}</span></article>`;

function renderDict() {
  const q = $('search').value.trim().toLowerCase();
  const rows = WORDS.filter(w => (!dictMod || w.module === dictMod) &&
    (!q || w.word.toLowerCase().includes(q) || w.translation.toLowerCase().includes(q)));
  $('dictCount').textContent = `${BOOK.title} · ${rows.length} ${T('words')}`;
  const g = new Map();
  rows.forEach(w => {
    if (!g.has(w.module)) g.set(w.module, new Map());
    const s = g.get(w.module);
    if (!s.has(w.section)) s.set(w.section, []);
    s.get(w.section).push(w);
  });
  $('dictBody').innerHTML = rows.length ? [...g.keys()].sort(sortNat).map(m => {
    const secs = [...g.get(m)].sort((a, b) => sortNat(a[0], b[0]));
    const n = secs.reduce((t, s) => t + s[1].length, 0);
    return `<section class="dm"><h3>${esc(modLabel(m))}<span>${n} ${T('words')}</span></h3>` +
      secs.map(([s, l]) => `<div class="ds"><h4><b>${esc(s)}</b><span>${l.length}</span></h4><div class="cards">${l.map(card).join('')}</div></div>`).join('') + '</section>';
  }).join('') : `<p class="mut">${T('dictEmpty')}</p>`;
}

let au = null;
function tts(w, btn) {
  const u = new SpeechSynthesisUtterance(w);
  u.lang = 'en-GB';
  const v = speechSynthesis.getVoices().find(x => x.lang.replace('_', '-') === 'en-GB');
  if (v) u.voice = v;
  u.onend = u.onerror = () => btn.classList.remove('on');
  speechSynthesis.speak(u);
}

function speak(w, btn) {
  speechSynthesis?.cancel();
  if (au) au.pause();
  document.querySelectorAll('.spk.on').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const f = encodeURIComponent(w.trim().replace(/ /g, '_'));
  const srcs = ['En-uk-', 'En-us-'].map(p => `https://commons.wikimedia.org/wiki/Special:FilePath/${p}${f}.ogg`);
  let i = 0;
  au = new Audio(srcs[0]);
  au.onended = () => btn.classList.remove('on');
  au.onerror = () => {
    if (++i < srcs.length) { au.src = srcs[i]; au.play().catch(() => { }); }
    else tts(w, btn);
  };
  au.play().catch(() => { });
}

$('dictBody').addEventListener('click', e => {
  const b = e.target.closest('.spk');
  if (b) speak(b.dataset.w, b);
});
$('chips').addEventListener('click', e => {
  const b = e.target.closest('.chip');
  if (b) { dictMod = b.dataset.m; buildDict(); }
});
$('search').addEventListener('input', renderDict);

function renderBoard() {
  const list = JSON.parse(localStorage.getItem('tkl_results') || '[]').sort((a, b) => a.sec - b.sec);
  $('boardBody').innerHTML = list.length
    ? list.map((r, i) => `<tr><td>${['🥇', '🥈', '🥉'][i] || i + 1}</td><td>${esc(r.name)}</td><td>${fmt(r.sec)}</td><td>${esc(r.puzzle)}</td><td>${esc(r.date)}</td></tr>`).join('')
    : `<tr><td colspan="5">${esc(T('boardEmpty'))}</td></tr>`;
}

$('clearBtn').onclick = () => {
  if (confirm(T('confirmClear'))) {
    localStorage.removeItem('tkl_results');
    renderBoard();
  }
};


document.querySelectorAll('.tab').forEach(b => b.onclick = () => showTab(b.dataset.tab));
document.querySelectorAll('[data-th]').forEach(b => b.onclick = () => { theme = b.dataset.th; localStorage.setItem('theme', theme); setMode(); });
document.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { lang = b.dataset.lang; localStorage.setItem('lang', lang); applyLang(); });
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setMode);
$('bookSel').onchange = async e => { history.replaceState(null, '', location.pathname); await loadBook(e.target.value); };
window.addEventListener('hashchange', route);

async function init() {
  setMode();
  try { BOOKS.push(...await (await fetch('data/books.json')).json()); }
  catch (e) { alert('Не удалось загрузить data/books.json'); return; }
  $('bookSel').innerHTML = BOOKS.map(b => `<option value="${esc(b.id)}">${esc(b.title)}</option>`).join('');
  try { await loadBook(localStorage.getItem('book')); }
  catch (e) { console.error(e); alert('Не удалось загрузить словарь ' + BOOKS[0].file + '\n\n' + e.message); return; }
  showTab('teacher');
  route();
}

init();
