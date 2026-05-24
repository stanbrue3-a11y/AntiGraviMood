import objc
import os
from Foundation import NSURL

# Load frameworks
objc.loadBundle("PDFKit", globals(), bundle_path="/System/Library/Frameworks/PDFKit.framework")
PDFDocument = objc.lookUpClass("PDFDocument")

pdf_path = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/tmp_menu_downloads/maison-binder/menu_0.pdf"
out_file = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/ocr_results/maison-binder.txt"

url = NSURL.fileURLWithPath_(pdf_path)
doc = PDFDocument.alloc().initWithURL_(url)
if not doc:
    print("Failed to load PDF")
    sys.exit(1)

page_count = doc.pageCount()
extracted_text = []

for i in range(page_count):
    page = doc.pageAtIndex_(i)
    p_text = page.string()
    if p_text:
        extracted_text.append(f"=== Page {i} ===\n{p_text.strip()}")

with open(out_file, "w", encoding="utf-8") as f:
    f.write("\n\n".join(extracted_text))

print(f"🎉 Successfully extracted and saved {len(extracted_text)} pages to {out_file}")
