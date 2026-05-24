import objc
import sys
import os
from Foundation import NSURL, NSZeroPoint

objc.loadBundle("PDFKit", globals(), bundle_path="/System/Library/Frameworks/PDFKit.framework")
objc.loadBundle("AppKit", globals(), bundle_path="/System/Library/Frameworks/AppKit.framework")

PDFDocument = objc.lookUpClass("PDFDocument")
NSBitmapImageRep = objc.lookUpClass("NSBitmapImageRep")
NSColor = objc.lookUpClass("NSColor")
NSGraphicsContext = objc.lookUpClass("NSGraphicsContext")

if len(sys.argv) < 3:
    print("Usage: python3 render_pdf.py <input_pdf> <output_dir>")
    sys.exit(1)

pdf_path = os.path.abspath(sys.argv[1])
output_dir = os.path.abspath(sys.argv[2])
os.makedirs(output_dir, exist_ok=True)

url = NSURL.fileURLWithPath_(pdf_path)
doc = PDFDocument.alloc().initWithURL_(url)
if not doc:
    print(f"Failed to load PDF: {pdf_path}")
    sys.exit(1)

page_count = doc.pageCount()
print(f"Rendering {page_count} pages...")

for i in range(page_count):
    page = doc.pageAtIndex_(i)
    rect = page.boundsForBox_(0) # 0 is crop box
    width = int(rect.size.width * 2) # 2x scale for better OCR
    height = int(rect.size.height * 2)
    
    rep = NSBitmapImageRep.alloc().initWithBitmapDataPlanes_pixelsWide_pixelsHigh_bitsPerSample_samplesPerPixel_hasAlpha_isPlanar_colorSpaceName_bytesPerRow_bitsPerPixel_(
        None, width, height, 8, 4, True, False, "NSCalibratedRGBColorSpace", 0, 32
    )
    
    context = NSGraphicsContext.graphicsContextWithBitmapImageRep_(rep)
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.setCurrentContext_(context)
    
    # White background
    NSColor.whiteColor().set()
    context.graphicsPort() # Draw background using CoreGraphics or Cocoa
    # Actually Cocoa draw is simpler: draw page
    # Since we scaled PixelsWide/High by 2, we should scale context draw
    # But wait, let's just draw:
    # First we scale coordinates:
    # Let's scale:
    # page.drawWithBox_(0) will draw it in the bounds
    # But wait, we can also draw using CGContextScaleCTM
    # In PyObjC, we can just do page.drawWithBox_(0) if we set correct context
    # Let's write the representation
    # To draw it scaled, we can use:
    # page.drawWithBox_ (0)
    # Quartz handles scaling if we transform
    # Let's just try page.drawWithBox_(0) and see how it looks.
    # Actually, to make it simple:
    page.drawWithBox_(0)
    
    NSGraphicsContext.restoreGraphicsState()
    
    # 4 is JPEG, 3 is PNG
    data = rep.representationUsingType_properties_(3, None)
    out_path = os.path.join(output_dir, f"page_{i}.png")
    data.writeToFile_atomically_(out_path, True)
    print(f"Rendered Page {i} -> {out_path}")

print("Done rendering PDF!")
