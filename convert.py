import json
import os
import sys
import openpyxl

# Использование: py convert.py "файл.xlsx" [data/words.json]
# Каждая таблица (лист) — отдельный модуль.
# Разделы идут в порядке таблицы, слова внутри раздела сортируются по алфавиту.

if len(sys.argv) < 2:
    print('Использование: py convert.py "файл.xlsx" [data/words.json]')
    sys.exit(1)

src = sys.argv[1]
out_path = sys.argv[2] if len(sys.argv) > 2 else os.path.join("data", "words.json")

wb = openpyxl.load_workbook(src, data_only=True)
out = []
for ws in wb.worksheets:
    title = str(ws.title).strip()
    module = f"Module {title}" if title.isdigit() else title
    groups = {}          # раздел -> список слов; порядок ключей = порядок в таблице
    section = None
    for row in ws.iter_rows(min_row=2, values_only=True):
        row = list(row) + [None] * 5
        sec, word, tr, translation, pos = row[0], row[1], row[2], row[3], row[4]
        if sec and str(sec).strip():
            section = str(sec).strip()
        if not word or section is None:
            continue
        groups.setdefault(section, []).append({
            "module": module,
            "section": section,
            "word": str(word).strip(),
            "transcription": str(tr or "").strip(),
            "translation": str(translation or "").strip(),
            "pos": str(pos or "").strip(),
        })
    for section, items in groups.items():
        items.sort(key=lambda w: w["word"].lower())
        out.extend(items)

out = [{"id": i, **w} for i, w in enumerate(out, start=1)]

os.makedirs(os.path.dirname(out_path) or ".", exist_ok=True)
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=0)

modules = len({w["module"] for w in out})
sections = len({(w["module"], w["section"]) for w in out})
print(f"Готово: {len(out)} слов, {modules} модулей, {sections} разделов, файл {out_path}")
