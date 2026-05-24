import objc
import sys
from Foundation import NSURL

# Load PDFKit
objc.loadBundle("PDFKit", globals(), bundle_path="/System/Library/Frameworks/PDFKit.framework")
PDFDocument = objc.lookUpClass("PDFDocument")

if len(sys.argv) > 1:
    pdf_path = sys.argv[1]
else:
    pdf_path = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/tmp_menu_downloads/kyo/menu_0.pdf"

url = NSURL.fileURLWithPath_(pdf_path)
doc = PDFDocument.alloc().initWithURL_(url)

if not doc:
    print(f"Failed to load PDF at: {pdf_path}")
    sys.exit(1)

page_count = doc.pageCount()
print(f"PDF Page Count: {page_count}")

all_text = []
for i in range(page_count):
    page = doc.pageAtIndex_(i)
    page_text = page.string()
    if page_text:
        page_text = page_text.strip()
        print(f"--- Page {i} ---")
        print(page_text)
        all_text.append(f"Page {i}:\n{page_text}")
    else:
        print(f"--- Page {i} (No text) ---")

with open("/Users/stanbrue/Downloads/pdf_text.txt", "w", encoding="utf-8") as f:
    f.write("\n\n".join(all_text))

print("Saved all extracted text to /Users/stanbrue/Downloads/pdf_text.txt")
