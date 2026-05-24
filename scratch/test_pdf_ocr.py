import objc
import os
from Foundation import NSURL, NSMakeRect

# Load frameworks
objc.loadBundle("Vision", globals(), bundle_path="/System/Library/Frameworks/Vision.framework")
objc.loadBundle("AppKit", globals(), bundle_path="/System/Library/Frameworks/AppKit.framework")
objc.loadBundle("PDFKit", globals(), bundle_path="/System/Library/Frameworks/PDFKit.framework")

VNImageRequestHandler = objc.lookUpClass("VNImageRequestHandler")
VNRecognizeTextRequest = objc.lookUpClass("VNRecognizeTextRequest")
PDFDocument = objc.lookUpClass("PDFDocument")
NSBitmapImageRep = objc.lookUpClass("NSBitmapImageRep")
NSGraphicsContext = objc.lookUpClass("NSGraphicsContext")
NSColor = objc.lookUpClass("NSColor")
NSBezierPath = objc.lookUpClass("NSBezierPath")
# Let's import NSBezierPath from AppKit
from AppKit import NSBezierPath

pdf_path = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/tmp_menu_downloads/maison-binder/menu_0.pdf"
url = NSURL.fileURLWithPath_(pdf_path)
doc = PDFDocument.alloc().initWithURL_(url)
if not doc:
    print("Failed to load PDF")
    sys.exit(1)

page_count = doc.pageCount()
print(f"PDF Page count: {page_count}")

for i in range(page_count):
    page = doc.pageAtIndex_(i)
    rect = page.boundsForBox_(0)
    width = int(rect.size.width * 2)
    height = int(rect.size.height * 2)
    
    rep = NSBitmapImageRep.alloc().initWithBitmapDataPlanes_pixelsWide_pixelsHigh_bitsPerSample_samplesPerPixel_hasAlpha_isPlanar_colorSpaceName_bytesPerRow_bitsPerPixel_(
        None, width, height, 8, 4, True, False, "NSCalibratedRGBColorSpace", 0, 32
    )
    
    context = NSGraphicsContext.graphicsContextWithBitmapImageRep_(rep)
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.setCurrentContext_(context)
    
    # Fill background with white
    NSColor.whiteColor().set()
    NSBezierPath.fillRect_(NSMakeRect(0, 0, width, height))
    
    # Draw page
    # Since we are drawing in a 2x scale, we should apply a scale transform or draw in rect
    # Let's scale the graphics context
    page.drawWithBox_(0)
    
    NSGraphicsContext.restoreGraphicsState()
    
    data = rep.representationUsingType_properties_(3, None) # PNG
    temp_img_path = f"/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/temp_debug_page_{i}.png"
    data.writeToFile_atomically_(temp_img_path, True)
    
    # Run OCR on temp image
    img_url = NSURL.fileURLWithPath_(temp_img_path)
    handler = VNImageRequestHandler.alloc().initWithURL_options_(img_url, None)
    request = VNRecognizeTextRequest.alloc().init()
    request.setRecognitionLevel_(0)
    success = handler.performRequests_error_([request], None)
    if success:
        results = request.results()
        text_lines = [obs.topCandidates_(1)[0].string() for obs in results if obs.topCandidates_(1)]
        print(f"\n--- Page {i} OCR (Success) ---")
        print("\n".join(text_lines[:10])) # Print first 10 lines
        print(f"Total lines found: {len(text_lines)}")
    else:
        print(f"OCR failed for page {i}")
        
    os.remove(temp_img_path)
