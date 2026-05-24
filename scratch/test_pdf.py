import objc
import sys
from Foundation import NSURL, NSSize
# Load PDFKit and AppKit
objc.loadBundle("PDFKit", globals(), bundle_path="/System/Library/Frameworks/PDFKit.framework")
objc.loadBundle("AppKit", globals(), bundle_path="/System/Library/Frameworks/AppKit.framework")

PDFDocument = objc.lookUpClass("PDFDocument")
NSBitmapImageRep = objc.lookUpClass("NSBitmapImageRep")
NSJPEGFileType = 3 # JPEG file type constant in AppKit

pdf_path = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/tmp_menu_downloads/indian-house/menu_0.pdf"
url = NSURL.fileURLWithPath_(pdf_path)
doc = PDFDocument.alloc().initWithURL_(url)

if not doc:
    print("Failed to load PDF!")
    sys.exit(1)

page_count = doc.pageCount()
print(f"Loaded PDF with {page_count} pages.")

for i in range(page_count):
    page = doc.pageAtIndex_(i)
    box = page.boundsForBox_(0)
    width = box.size.width
    height = box.size.height
    print(f"Page {i}: size {width}x{height}")

    # Render a thumbnail at 2x scale
    thumb_size = NSSize(width * 2, height * 2)
    image = page.thumbnailOfSize_forBox_(thumb_size, 0)
    
    tiff_data = image.TIFFRepresentation()
    bitmap = NSBitmapImageRep.imageRepWithData_(tiff_data)
    
    # Compress as JPEG (80% quality)
    # In PyObjC, the dictionary keys for properties can be strings or Cocoa constants
    # kCFBooleanTrue/kCFBooleanFalse or NSImageCompressionFactor
    # Let's use NSImageCompressionFactor key (from AppKit)
    properties = { "NSImageCompressionFactor": 0.8 }
    jpeg_data = bitmap.representationUsingType_properties_(NSJPEGFileType, properties)
    
    out_path = f"/Users/stanbrue/Downloads/indian_house_page_{i}.jpg"
    jpeg_data.writeToFile_atomically_(out_path, True)
    print(f"Saved page {i} to {out_path}")
