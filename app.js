const I18N = {
ru: {
  appTitle:'Кроссворд по словарю', book:'Учебник', listen:'Озвучить',
  aboutKicker:'О проекте', aboutTitle:'Зачем это нужно',
  aboutText:'Сайт помогает запоминать слова из учебника Spotlight 9: словарь с озвучкой и кроссворды, которые учитель собирает за минуту. Ученики решают кроссворды со своих телефонов и видят место в таблице лидеров.',
  authorRole:'Автор проекта', authorName:'Георгий Земляков, ученик 9Б класса',
  teacherRole:'Совместно с учителем английского языка', teacherName:'Долбешкина Елена Германовна',
  check:'Проверить (+10 с)', reveal:'Показать ответы · без зачёта',
  revealConfirm:'Показать ответы? Кроссворд закроется, результат не засчитается и не попадёт в таблицу лидеров.',
  tabHome:'Главная', tabTeacher:'Генератор', tabPlay:'Кроссворд', tabDict:'Словарь', tabBoard:'Лидеры',
  heroTitle:'Учим слова из учебника через словарь и кроссворды',
  heroText:'Словарь учебника с озвучкой и кроссворды, которые учитель собирает за минуту из любых модулей и разделов.',
  heroBtn:'Открыть словарь', heroBtn2:'Создать кроссворд',
  statWords:'слов', statModules:'модулей', statSections:'разделов',
  cardDict:'Словарь', cardDictText:'Слова по модулям и разделам, озвучка',
  cardGen:'Генератор', cardGenText:'Соберите кроссворд из выбранных разделов',
  cardPlay:'Решать', cardPlayText:'Откройте кроссворд по ссылке или QR-коду учителя',
  cardBoard:'Лидеры', cardBoardText:'Таблица лидеров кроссворда, которым вы занимаетесь',
  footer:'Технологический лицей · Сыктывкар',
  genHint:'Отметьте модули и разделы, из слов которых собрать кроссворд.',
  module:'Модуль', wordCount:'Слов в кроссворде (5–25)', available:'Подходит для кроссворда', outOf:'из',
  availDetail:'Не подходят: {s} (фразы, слова с дефисом или короче 3 букв). Повторы: {d}, в кроссворд попадает одно из одинаковых слов.',
  ukLabel:'UK', usLabel:'US', ukTitle:'Британское произношение', usTitle:'Американское произношение',
  generate:'Создать кроссворд', linkLabel:'Ссылка для учеников', copy:'Копировать', copied:'Скопировано',
  share:'Поделиться', qrCopy:'Скопировать QR', qrCopied:'QR скопирован', qrSaved:'QR сохранён',
  openGame:'Открыть кроссворд', qrFull:'QR на весь экран', closeQr:'Закрыть',
  qrHint:'Ученики открывают ссылку или сканируют QR-код телефоном.',
  selAll:'Выбрать всё', selNone:'Снять всё',
  clueMode:'Подсказки', cmTr:'Перевод', cmPos:'Перевод и часть речи', cmFirst:'Перевод и первая буква',
  playHint:'Введите имя и нажмите «Начать». Таймер запустится сразу.', yourName:'Ваше имя', start:'Начать',
  enterName:'Введите имя', hint:'Открыть букву (+15 с)',
  across:'По горизонтали', down:'По вертикали', solved:'Решено за', myPlace:'Ваше место',
  revealedNote:'Ответы показаны, результат не засчитан.', wrongCount:'Ошибок', emptyCount:'Пустых клеток',
  noPuzzle:'Кроссворд не выбран. Создайте его в генераторе или откройте ссылку учителя.',
  tooFew:'Мало подходящих слов: нужно минимум 5 слов из латинских букв.',
  searchPh:'Слово или перевод', all:'Все', dictEmpty:'Ничего не найдено', words:'слов',
  colName:'Имя', colTime:'Время', lbTitle:'Лидеры этого кроссворда',
  lbOpenFirst:'Откройте или создайте кроссворд, чтобы увидеть лидеров.',
  lbOff:'Общие лидеры не подключены. См. README.txt.',
  lbEmpty:'Пока никто не решил этот кроссворд.',
  lbErr:'Не удалось загрузить лидеров. Проверьте интернет.',
  lbSendErr:'Не удалось отправить результат в лидеры.',
  lbNote:'Результаты общие для класса и хранятся 15 минут после последнего прохождения.',
  menu:'Меню', confirmSelect:''
},
en: {
  appTitle:'Vocabulary Crossword', book:'Textbook', listen:'Listen',
  aboutKicker:'About the project', aboutTitle:'Why it exists',
  aboutText:'The site helps learn words from the Spotlight 9 textbook: a dictionary with audio and crosswords a teacher builds in a minute. Students solve them on their phones and see their place on the leaderboard.',
  authorRole:'Project author', authorName:'Georgiy Zemlyakov, grade 9B',
  teacherRole:'Together with the English teacher', teacherName:'Dolbeshkina Elena Germanovna',
  check:'Check (+10 s)', reveal:'Show answers · not counted',
  revealConfirm:'Show answers? The crossword will close, the result will not be counted and will not go to the leaderboard.',
  tabHome:'Home', tabTeacher:'Generator', tabPlay:'Crossword', tabDict:'Dictionary', tabBoard:'Leaderboard',
  heroTitle:'Learn textbook words through the dictionary and crosswords',
  heroText:'The textbook dictionary with audio, and crosswords a teacher builds in a minute from any modules and sections.',
  heroBtn:'Open dictionary', heroBtn2:'Create crossword',
  statWords:'words', statModules:'modules', statSections:'sections',
  cardDict:'Dictionary', cardDictText:'Words by module and section, with audio',
  cardGen:'Generator', cardGenText:'Build a crossword from selected sections',
  cardPlay:'Solve', cardPlayText:'Open a crossword from the teacher’s link or QR code',
  cardBoard:'Leaderboard', cardBoardText:'Leaderboard of the crossword you are solving',
  footer:'Technological Lyceum · Syktyvkar',
  genHint:'Tick the modules and sections to build the crossword from.',
  module:'Module', wordCount:'Words in crossword (5–25)', available:'Fits the crossword', outOf:'of',
  availDetail:'Not suitable: {s} (phrases, hyphenated or shorter than 3 letters). Duplicates: {d}, only one of identical words goes into the crossword.',
  ukLabel:'UK', usLabel:'US', ukTitle:'British pronunciation', usTitle:'American pronunciation',
  generate:'Create crossword', linkLabel:'Link for students', copy:'Copy', copied:'Copied',
  share:'Share', qrCopy:'Copy QR', qrCopied:'QR copied', qrSaved:'QR saved',
  openGame:'Open crossword', qrFull:'QR full screen', closeQr:'Close',
  qrHint:'Students open the link or scan the QR code with a phone.',
  selAll:'Select all', selNone:'Clear all',
  clueMode:'Clues', cmTr:'Translation', cmPos:'Translation + part of speech', cmFirst:'Translation + first letter',
  playHint:'Enter your name and press Start. The timer begins at once.', yourName:'Your name', start:'Start',
  enterName:'Enter your name', hint:'Reveal letter (+15 s)',
  across:'Across', down:'Down', solved:'Solved in', myPlace:'Your place',
  revealedNote:'Answers shown, result not counted.', wrongCount:'Errors', emptyCount:'Empty cells',
  noPuzzle:'No crossword selected. Create one in the generator or open the teacher’s link.',
  tooFew:'Not enough words: at least 5 Latin-letter words are needed.',
  searchPh:'Word or translation', all:'All', dictEmpty:'Nothing found', words:'words',
  colName:'Name', colTime:'Time', lbTitle:'Leaderboard of this crossword',
  lbOpenFirst:'Open or create a crossword to see the leaderboard.',
  lbOff:'Shared leaderboard is not connected. See README.txt.',
  lbEmpty:'Nobody has solved this crossword yet.',
  lbErr:'Could not load the leaderboard. Check your connection.',
  lbSendErr:'Could not send the result to the leaderboard.',
  lbNote:'Results are shared within the class and kept for 15 minutes after the last solve.',
  menu:'Menu', confirmSelect:''
}
};

let lang = localStorage.getItem('lang') || 'ru';
let theme = localStorage.getItem('theme') || 'light';
const T = k => (I18N[lang][k] ?? I18N.ru[k] ?? k);
const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const key = (x, y) => x + ',' + y;
const parseKey = k => k.split(',').map(Number);
const isLatin = w => /^[A-Za-z]{3,}$/.test(w);
const clue = t => String(t).replace(/\(.*?\)/g, '').split(/[,;]/)[0].trim();
const moduleOf = s => { const m = String(s).match(/^(\d+)/); return m ? m[1] : String(s).replace(/\s*\d+$/, '').trim(); };
const sortNat = (a, b) => String(a).localeCompare(String(b), undefined, { numeric: true });
const secKey = w => w.module + '||' + w.section;
const fmt = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
const isMobile = () => matchMedia('(max-width: 860px)').matches;
const modLabel = m => /^\d+$/.test(m) ? `${T('module')} ${m}` : m;
const medal = i => ['🥇', '🥈', '🥉'][i] || String(i + 1);

const BOOKS = [];
let BOOK = null, WORDS = [];
const BYID = new Map();
let dictMod = '';
let pz = null, active = { k: null, dir: 'a' }, cellMap = new Map();
let finished = false, player = '', elapsed = 0, startTime = 0, timerId = null;
let curCode = null, pzId = null, myT = null;
let cur = 'home', au = null;

const ICON_SPK = '<svg class="i-spk" viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/></svg>';
const ICON_LOAD = '<svg class="i-load" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 4v5h-5"/></svg>';

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

// Короткий детерминированный идентификатор кроссворда: одинаков на всех устройствах
function puzzleHash(s) {
  let h1 = 0x811c9dc5, h2 = 5381;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 0x01000193);
    h2 = ((h2 << 5) + h2 + c) | 0;
  }
  return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0');
}

function setCurrent(code) {
  curCode = code;
  pzId = puzzleHash(code);
  myT = null;
}

function setSeg(s, i) { s.style.setProperty('--i', i); }

function setMode() {
  const m = theme === 'system' ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme;
  document.documentElement.dataset.mode = m;
  setSeg($('themeSeg'), ['light', 'dark', 'system'].indexOf(theme));
}

const TAB_KEY = { home: 'tabHome', dict: 'tabDict', teacher: 'tabTeacher', play: 'tabPlay', board: 'tabBoard' };
function showCrumb() { $('crumb').textContent = T(TAB_KEY[cur]); }

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = T(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-ph]').forEach(el => el.placeholder = T(el.dataset.i18nPh));
  setSeg($('langSeg'), lang === 'ru' ? 0 : 1);
  $('logo').textContent = lang === 'ru' ? 'ТхЛ' : 'ThL';
  showCrumb();
  if (WORDS.length) {
    buildTree();
    buildDict();
    renderHome();
    if (pz) renderClues();
    renderLB(lbCache);
  }
}

function renderHome() {
  $('statWords').textContent = WORDS.length;
  $('statModules').textContent = new Set(WORDS.map(w => w.module)).size;
  $('statSections').textContent = new Set(WORDS.map(secKey)).size;
  $('heroBook').textContent = BOOK.title;
  $('footBook').textContent = BOOK.title;
}

function showTab(n) {
  cur = n;
  document.querySelectorAll('.panel').forEach(p => p.hidden = p.id !== n);
  document.querySelectorAll('.tab').forEach(b => b.classList.toggle('on', b.dataset.tab === n));
  showCrumb();
  if (n === 'teacher') buildTree();
  if (n === 'play') fitGrid();
  if (n === 'play' || n === 'board') refreshLB();
  $('app').classList.remove('open');
  scrollTo({ top: 0 });
}

const selSecs = () => [...document.querySelectorAll('input[data-sec]:checked')].map(c => c.dataset.sec);

function candidates(secs) {
  const seen = new Set();
  return WORDS.filter(w => {
    const k = w.word.toLowerCase();
    if (!secs.includes(secKey(w)) || !isLatin(w.word) || seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function buildTree() {
  const on = new Set(selSecs()), mods = new Map();
  WORDS.forEach(w => {
    if (!mods.has(w.module)) mods.set(w.module, new Map());
    const secs = mods.get(w.module), k = secKey(w);
    if (!secs.has(k)) secs.set(k, { name: w.section, n: 0 });
    secs.get(k).n++;
  });
  $('tree').innerHTML = [...mods].map(([m, secs]) => {
    const total = [...secs.values()].reduce((t, v) => t + v.n, 0);
    return `<div class="mod"><label class="mh"><input type="checkbox" data-mod="${esc(m)}"><span>${esc(modLabel(m))}</span><em>${total}</em></label>` +
    [...secs].map(([k, v]) =>
      `<label class="sec"><input type="checkbox" data-sec="${esc(k)}"${on.has(k) ? ' checked' : ''}><span>${esc(v.name)}</span><em>${v.n}</em></label>`
    ).join('') + '</div>';
  }).join('');
  updateAvailable();
}

function poolStats(secs) {
  const sel = WORDS.filter(w => secs.includes(secKey(w)));
  const seen = new Set();
  let ok = 0, skip = 0, dup = 0;
  sel.forEach(w => {
    if (!isLatin(w.word)) { skip++; return; }
    const k = w.word.toLowerCase();
    if (seen.has(k)) { dup++; return; }
    seen.add(k);
    ok++;
  });
  return { total: sel.length, ok, skip, dup };
}

function updateAvailable() {
  document.querySelectorAll('.mod').forEach(g => {
    const c = [...g.querySelectorAll('input[data-sec]')];
    g.querySelector('input[data-mod]').checked = c.length > 0 && c.every(x => x.checked);
  });
  const st = poolStats(selSecs());
  const detail = T('availDetail').replace('{s}', st.skip).replace('{d}', st.dup);
  $('available').innerHTML = `<b>${T('available')}: ${st.ok}</b> ${T('outOf')} ${st.total}<span class="mut">${esc(detail)}</span>`;
}

$('tree').addEventListener('change', e => {
  if (e.target.dataset.mod !== undefined)
    e.target.closest('.mod').querySelectorAll('input[data-sec]').forEach(c => c.checked = e.target.checked);
  updateAvailable();
});
const setAll = v => { document.querySelectorAll('input[data-sec]').forEach(c => c.checked = v); updateAvailable(); };
$('selAll').onclick = () => setAll(true);
$('selNone').onclick = () => setAll(false);

function makeQR(el, text, size) {
  el.innerHTML = '';
  try { new QRCode(el, { text, width: size, height: size }); } catch (e) { }
}

function flash(btn, msg) {
  const old = btn.dataset.label || btn.textContent;
  btn.dataset.label = old;
  btn.textContent = msg;
  clearTimeout(btn._t);
  btn._t = setTimeout(() => { btn.textContent = old; }, 1600);
}

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
  setCurrent(code);
  $('linkBox').value = link;
  $('result').hidden = false;
  makeQR($('qr'), link, 168);
  $('openBtn').onclick = () => { location.hash = 'game=' + code; };
  refreshLB();
};

$('copyBtn').onclick = () => {
  navigator.clipboard?.writeText($('linkBox').value);
  flash($('copyBtn'), T('copied'));
};

$('shareBtn').onclick = async () => {
  const url = $('linkBox').value;
  if (navigator.share) {
    try { await navigator.share({ title: BOOK.title, text: T('appTitle'), url }); return; }
    catch (e) { if (e.name === 'AbortError') return; }
  }
  navigator.clipboard?.writeText(url);
  flash($('shareBtn'), T('copied'));
};

$('qrCopy').onclick = () => {
  const src = document.querySelector('#qr canvas');
  const btn = $('qrCopy');
  if (!src) return;
  src.toBlob(async blob => {
    if (!blob) return;
    try {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      flash(btn, T('qrCopied'));
    } catch (e) {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'tkl-qr.png';
      a.click();
      flash(btn, T('qrSaved'));
    }
  }, 'image/png');
};

function openQR(link) {
  const size = Math.max(200, Math.min(640, Math.min(innerWidth, innerHeight) - 160));
  makeQR($('qrBig'), link, size);
  $('qrLink').textContent = link;
  $('qrOverlay').hidden = false;
}
const closeQR = () => { $('qrOverlay').hidden = true; };
$('qrFull').onclick = () => openQR($('linkBox').value);
$('qrClose').onclick = closeQR;
$('qrOverlay').addEventListener('click', e => { if (e.target.id === 'qrOverlay') closeQR(); });

function toggleSide() {
  if (isMobile()) $('app').classList.toggle('open');
  else {
    const c = $('app').classList.toggle('collapsed');
    localStorage.setItem('collapsed', c ? '1' : '0');
  }
}
$('menuBtn').onclick = toggleSide;
$('sideClose').onclick = toggleSide;
$('scrim').onclick = () => $('app').classList.remove('open');
addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeQR(); $('app').classList.remove('open'); }
});

async function route() {
  if (!location.hash.startsWith('#game=')) return;
  const code = location.hash.slice(6);
  let p = null;
  try { p = JSON.parse(atob(code)); } catch (e) { }
  if (p && p.b && BOOK && p.b !== BOOK.id) await loadBook(p.b);
  setCurrent(code);
  loadPuzzle(p);
  showTab('play');
}

async function loadBook(id) {
  BOOK = BOOKS.find(b => b.id === id) || BOOKS[0];
  $('bookSel').value = BOOK.id;
  localStorage.setItem('book', BOOK.id);
  WORDS = await (await fetch(BOOK.file)).json();
  BYID.clear();
  WORDS.forEach(w => { w.module = w.module || moduleOf(w.section); w.clue = clue(w.translation); BYID.set(w.id, w); });
  dictMod = '';
  loadPuzzle(null);
  applyLang();
}

function loadPuzzle(p) {
  stopTimer();
  const built = p ? buildFromPayload(p) : null;
  pz = built ? { ...built, payload: p } : null;
  finished = false; elapsed = 0; player = '';
  $('timer').textContent = '00:00';
  $('status').textContent = '';
  $('status').classList.remove('win');
  $('nameErr').textContent = '';
  $('who').textContent = '';
  $('noPuzzle').hidden = !!pz;
  $('startBox').hidden = !pz;
  $('gameArea').hidden = true;
  if (pz) { $('playerName').value = ''; renderGrid(); renderClues(); }
}

function fitGrid() {
  if (!pz) return;
  const host = $('game');
  if (!host || !host.clientWidth) return;
  const wide = !isMobile() && host.clientWidth > 760;
  const avail = (wide ? host.clientWidth - 320 : host.clientWidth) - 40;
  const size = Math.max(22, Math.min(46, Math.floor((avail - 2 * (pz.W - 1)) / pz.W)));
  $('grid').style.setProperty('--cell', size + 'px');
}
addEventListener('resize', fitGrid);

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
      inp.lang = 'en';
      inp.spellcheck = false;
      inp.autocapitalize = 'characters';
      inp.setAttribute('autocorrect', 'off');
      inp.setAttribute('enterkeyhint', 'next');
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
  pz.placed.forEach(p => p.li?.classList.remove('cur'));
  (pz.at.get(active.k) || []).forEach(p => {
    p.keys.forEach(k => cellMap.get(k)?.classList.add('hl'));
    p.li?.classList.add('cur');
  });
  cellMap.get(active.k)?.classList.add('act');
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
  checkAll(true);
  lockGrid();
  const s = $('status');
  s.classList.add('win');
  s.textContent = `${T('solved')} ${fmt(elapsed)}.`;
  if (LEADER_URL) {
    submitResult()
      .then(j => { if (j && j.rank) s.textContent += ` ${T('myPlace')}: ${j.rank}.`; })
      .catch(() => { s.textContent += ' ' + T('lbSendErr'); });
  }
}

function beginGame() {
  const name = $('playerName').value.trim();
  if (!name) { $('nameErr').textContent = T('enterName'); return; }
  $('nameErr').textContent = '';
  player = name;
  $('who').textContent = name;
  $('startBox').hidden = true;
  $('gameArea').hidden = false;
  fitGrid();
  startTimer();
  refreshLB();
  const first = pz.placed.find(p => p.num === 1);
  if (first) move(first.keys[0], first.d);
}
$('startBtn').onclick = beginGame;
$('playerName').addEventListener('keydown', e => { if (e.key === 'Enter') beginGame(); });

function addPenalty(sec) {
  if (!timerId) return;
  startTime -= sec * 1000;
  elapsed += sec;
  $('timer').textContent = fmt(elapsed);
}

$('checkBtn').onclick = () => {
  if (!pz || finished) return;
  addPenalty(10);
  const { wrong, empty } = checkAll(true);
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
  if (!confirm(T('revealConfirm'))) return;
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

// ---------- Общие лидеры ----------

let lbCache = null, lbError = false;

async function lbCall(params = {}) {
  const q = new URLSearchParams({ id: pzId, ...params });
  const r = await fetch(LEADER_URL + '?' + q.toString(), { cache: 'no-store' });
  const j = await r.json();
  if (j.error) throw new Error(j.error);
  return j;
}

async function submitResult() {
  const j = await lbCall({ action: 'submit', name: player, sec: String(elapsed) });
  myT = j.me;
  lbCache = j.list;
  renderLB(lbCache);
  return j;
}

async function refreshLB() {
  if (!curCode) { lbCache = null; renderLB(null); return; }
  if (!LEADER_URL) { renderLB(null); return; }
  try {
    const j = await lbCall();
    lbError = false;
    lbCache = j.list;
  } catch (e) {
    lbError = true;
  }
  renderLB(lbCache);
}

function renderLB(list) {
  let msg = '';
  if (!curCode) msg = T('lbOpenFirst');
  else if (!LEADER_URL) msg = T('lbOff');
  else if (lbError) msg = T('lbErr');
  else if (!list || !list.length) msg = T('lbEmpty');

  const rows = list || [];
  const play = rows.slice(0, 10).map((r, i) =>
    `<li class="${r.t === myT ? 'me' : ''}"><span>${i + 1}</span><span>${esc(r.name)}</span><span class="pt">${fmt(r.sec)}</span></li>`).join('');
  $('lbPlayList').innerHTML = play;
  $('lbPlayMsg').textContent = msg;
  $('lbPlayMsg').hidden = !msg;

  $('boardBody').innerHTML = rows.map((r, i) =>
    `<tr class="${r.t === myT ? 'me' : ''}"><td>${medal(i)}</td><td>${esc(r.name)}</td><td>${fmt(r.sec)}</td></tr>`).join('');
  $('boardMsg').textContent = msg || T('lbNote');
  $('boardMsg').hidden = false;
  $('boardInfo').textContent = pz ? `${BOOK.title} · ${pz.placed.length} ${T('words')}` : (BOOK ? BOOK.title : '');
}

setInterval(() => { if (cur === 'play' || cur === 'board') refreshLB(); }, 10000);

// ---------- Словарь ----------

function buildDict() {
  const mods = [...new Set(WORDS.map(w => w.module))];
  $('chips').innerHTML = [['', T('all')], ...mods.map(m => [m, modLabel(m)])]
    .map(([v, l]) => `<button class="chip${v === dictMod ? ' on' : ''}" data-m="${esc(v)}">${esc(l)}</button>`).join('');
  renderDict();
}

const card = w => `<article class="wc"><div class="wh"><strong>${esc(w.word)}</strong></div><div class="tr">${esc(w.transcription)}</div><div class="tx">${esc(w.translation)}</div><div class="wf"><span class="pos" data-p="${esc(w.pos.split(' ')[0])}">${esc(w.pos)}</span><span class="voices"><button class="spk" data-w="${esc(w.word)}" data-acc="uk" title="${esc(T('ukTitle'))}">${ICON_SPK}${ICON_LOAD}<b>${esc(T('ukLabel'))}</b></button><button class="spk" data-w="${esc(w.word)}" data-acc="us" title="${esc(T('usTitle'))}">${ICON_SPK}${ICON_LOAD}<b>${esc(T('usLabel'))}</b></button></span></div></article>`;

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
  $('dictBody').innerHTML = rows.length ? [...g.keys()].map((m, mi) => {
    const secs = [...g.get(m)];
    const n = secs.reduce((t, s) => t + s[1].length, 0);
    const toc = `<nav class="toc">${secs.map(([s, l], si) =>
      `<button class="tocbtn" data-jump="sec-${mi}-${si}"><b>${esc(s)}</b><em>${l.length}</em></button>`).join('')}</nav>`;
    return `<section class="dm"><h3>${esc(modLabel(m))}<span>${n} ${T('words')}</span></h3>${toc}` +
      secs.map(([s, l], si) => `<div class="ds" id="sec-${mi}-${si}"><h4><b>${esc(s)}</b><span>${l.length}</span></h4><div class="cards">${l.map(card).join('')}</div></div>`).join('') +
      '</section>';
  }).join('') : `<p class="mut">${esc(T('dictEmpty'))}</p>`;
}

function stopSpeech() {
  if (au) { au.pause(); au = null; }
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  document.querySelectorAll('.spk.on,.spk.loading').forEach(b => b.classList.remove('on', 'loading'));
}

const ACC = {
  uk: { path: 'En-uk-', lang: 'en-GB' },
  us: { path: 'En-us-', lang: 'en-US' }
};

function getVoicesSoon(timeout = 1500) {
  return new Promise(resolve => {
    const list = speechSynthesis.getVoices();
    if (list.length) return resolve(list);
    const t = setTimeout(() => resolve(speechSynthesis.getVoices()), timeout);
    speechSynthesis.addEventListener('voiceschanged', () => {
      clearTimeout(t);
      resolve(speechSynthesis.getVoices());
    }, { once: true });
  });
}

async function ttsFallback(w, acc, btn) {
  if (!('speechSynthesis' in window)) { btn.classList.remove('loading'); return; }
  const voices = await getVoicesSoon();
  const u = new SpeechSynthesisUtterance(w);
  u.lang = ACC[acc].lang;
  const v = voices.find(x => x.lang.replace('_', '-') === ACC[acc].lang);
  if (v) u.voice = v;
  u.onstart = () => { btn.classList.remove('loading'); btn.classList.add('on'); };
  u.onend = u.onerror = () => btn.classList.remove('loading', 'on');
  speechSynthesis.speak(u);
}

function speak(w, acc, btn) {
  stopSpeech();
  const f = encodeURIComponent(w.trim().replace(/ /g, '_'));
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${ACC[acc].path}${f}.ogg`;
  btn.classList.add('loading');
  let done = false, timer = null;
  const a = new Audio();
  au = a;
  const fail = () => {
    if (done) return;
    done = true;
    clearTimeout(timer);
    if (au === a) au = null;
    a.pause();
    ttsFallback(w, acc, btn);
  };
  timer = setTimeout(fail, 6000);
  a.addEventListener('canplay', () => {
    if (done) return;
    done = true;
    clearTimeout(timer);
    btn.classList.remove('loading');
    btn.classList.add('on');
    a.play().catch(() => btn.classList.remove('on'));
  }, { once: true });
  a.onended = () => btn.classList.remove('on');
  a.onerror = fail;
  a.preload = 'auto';
  a.src = url;
  a.load();
}

$('dictBody').addEventListener('click', e => {
  const jump = e.target.closest('.tocbtn');
  if (jump) {
    document.getElementById(jump.dataset.jump)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  const b = e.target.closest('.spk');
  if (b) speak(b.dataset.w, b.dataset.acc, b);
});
$('chips').addEventListener('click', e => {
  const b = e.target.closest('.chip');
  if (b) { dictMod = b.dataset.m; buildDict(); }
});
$('search').addEventListener('input', renderDict);

document.querySelectorAll('.tab').forEach(b => b.onclick = () => showTab(b.dataset.tab));
document.querySelectorAll('[data-go]').forEach(b => b.onclick = () => showTab(b.dataset.go));
document.querySelectorAll('[data-th]').forEach(b => b.onclick = () => {
  theme = b.dataset.th;
  localStorage.setItem('theme', theme);
  setMode();
});
document.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => {
  lang = b.dataset.lang;
  localStorage.setItem('lang', lang);
  applyLang();
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setMode);
$('bookSel').onchange = async e => {
  history.replaceState(null, '', location.pathname);
  curCode = null;
  await loadBook(e.target.value);
  if (cur === 'play') showTab('home');
};
window.addEventListener('hashchange', route);

async function init() {
  setMode();
  if ('speechSynthesis' in window) {
    speechSynthesis.getVoices();
    speechSynthesis.addEventListener('voiceschanged', () => speechSynthesis.getVoices());
  }
  if (localStorage.getItem('collapsed') === '1') $('app').classList.add('collapsed');
  try { BOOKS.push(...await (await fetch('data/books.json')).json()); }
  catch (e) { console.error(e); alert('Не удалось загрузить data/books.json\n\n' + e.message); return; }
  $('bookSel').innerHTML = BOOKS.map(b => `<option value="${esc(b.id)}">${esc(b.title)}</option>`).join('');
  try { await loadBook(localStorage.getItem('book')); }
  catch (e) {
    console.error(e);
    alert('Не удалось загрузить словарь ' + BOOKS[0].file + '\n\n' + e.message);
    return;
  }
  if (location.hash.startsWith('#game=')) await route();
  else showTab('home');
}

init();
