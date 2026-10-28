import json
import os
import sys
import openpyxl

if len(sys.argv) < 2:
    print('Использование: python convert.py "файл.xlsx" [data/имя.json]')
    sys.exit(1)

wb = openpyxl.load_workbook(sys.argv[1], data_only=True)
out = []
for ws in wb.worksheets:
    for row in ws.iter_rows(min_row=2, values_only=True):
        row = list(row) + [None] * 5
        section, word, tr, translation, pos = row[0], row[1], row[2], row[3], row[4]
        if not section or not word:
            continue
        out.append({
            "id": len(out) + 1,
            "section": str(section).strip(),
            "word": str(word).strip(),
            "transcription": str(tr or "").strip(),
            "translation": str(translation or "").strip(),
            "pos": str(pos or "").strip(),
        })

out_path = sys.argv[2] if len(sys.argv) > 2 else "data/words.json"
os.makedirs(os.path.dirname(out_path) or ".", exist_ok=True)
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(out, f, ensure_ascii=False, indent=0)
print(f"Готово: {len(out)} записей в {out_path}")
