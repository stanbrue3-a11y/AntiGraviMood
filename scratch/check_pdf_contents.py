import sys
try:
    import pypdf
    print("pypdf is installed")
except ImportError:
    print("pypdf is NOT installed")

try:
    import pdfplumber
    print("pdfplumber is installed")
except ImportError:
    print("pdfplumber is NOT installed")

# Let's inspect PDF using standard pypdf if possible
from Foundation import NSURL
import objc
objc.loadBundle("PDFKit", globals(), bundle_path="/System/Library/Frameworks/PDFKit.framework")
PDFDocument = objc.lookUpClass("PDFDocument")

pdf_path = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/tmp_menu_downloads/maison-binder/menu_0.pdf"
url = NSURL.fileURLWithPath_(pdf_path)
doc = PDFDocument.alloc().initWithURL_(url)
if not doc:
    print("Failed to load PDF using PDFKit")
    sys.exit(1)

print(f"Page count: {doc.pageCount()}")
for i in range(doc.pageCount()):
    page = doc.pageAtIndex_(i)
    print(f"Page {i}: label={page.label()}, bounds={page.boundsForBox_(0)}")
    text = page.string()
    print(f"Page {i} text length: {len(text) if text else 0}")
    if text:
        print(f"Page {i} text preview: {repr(text[:200])}")
