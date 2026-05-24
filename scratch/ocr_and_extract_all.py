import objc
import os
import sys
from Foundation import NSURL

# Load necessary frameworks
objc.loadBundle("Vision", globals(), bundle_path="/System/Library/Frameworks/Vision.framework")
objc.loadBundle("AppKit", globals(), bundle_path="/System/Library/Frameworks/AppKit.framework")
objc.loadBundle("PDFKit", globals(), bundle_path="/System/Library/Frameworks/PDFKit.framework")

VNImageRequestHandler = objc.lookUpClass("VNImageRequestHandler")
VNRecognizeTextRequest = objc.lookUpClass("VNRecognizeTextRequest")
PDFDocument = objc.lookUpClass("PDFDocument")
NSBitmapImageRep = objc.lookUpClass("NSBitmapImageRep")
NSGraphicsContext = objc.lookUpClass("NSGraphicsContext")
NSColor = objc.lookUpClass("NSColor")

places = [
    "la-chope-daguerre",
    "la-cantine-du-troquet-pernety-paris-14",
    "la-contre-allee",
    "l-opportun-paris-14",
    "la-basilicata",
    "la-cagouille"
]
base_dir = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/tmp_menu_downloads"

def ocr_image(image_path):
    url = NSURL.fileURLWithPath_(image_path)
    handler = VNImageRequestHandler.alloc().initWithURL_options_(url, None)
    request = VNRecognizeTextRequest.alloc().init()
    request.setRecognitionLevel_(0) # accurate
    success = handler.performRequests_error_([request], None)
    page_text = []
    if success:
        results = request.results()
        for obs in results:
            candidates = obs.topCandidates_(1)
            if candidates:
                page_text.append(candidates[0].string())
    return "\n".join(page_text)

def process_pdf(pdf_path, place):
    # Try text extraction first
    url = NSURL.fileURLWithPath_(pdf_path)
    doc = PDFDocument.alloc().initWithURL_(url)
    if not doc:
        return f"Failed to load PDF: {pdf_path}"
    
    page_count = doc.pageCount()
    extracted_text = []
    for i in range(page_count):
        page = doc.pageAtIndex_(i)
        p_text = page.string()
        if p_text and len(p_text.strip()) > 50:
            extracted_text.append(f"--- Page {i} (PDF Text) ---\n{p_text.strip()}")
            
    if len(extracted_text) == page_count:
        # All pages have text, return it
        return "\n\n".join(extracted_text)
        
    # Otherwise, render pages and do OCR
    print(f"  [PDF Scanned] Rendering and OCR-ing {page_count} pages...")
    ocr_results = []
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
        
        NSColor.whiteColor().set()
        page.drawWithBox_(0)
        
        NSGraphicsContext.restoreGraphicsState()
        
        # Save as temp png in place's folder
        data = rep.representationUsingType_properties_(3, None) # PNG
        temp_img_path = os.path.join(os.path.dirname(pdf_path), f"temp_page_{i}.png")
        data.writeToFile_atomically_(temp_img_path, True)
        
        # OCR
        text = ocr_image(temp_img_path)
        ocr_results.append(f"--- Page {i} (PDF OCR) ---\n{text}")
        
        # Cleanup
        try:
            os.remove(temp_img_path)
        except:
            pass
            
    return "\n\n".join(ocr_results)

for place in places:
    directory = os.path.join(base_dir, place)
    if not os.path.exists(directory):
        print(f"\n❌ Directory not found for {place}")
        continue

    print(f"\n==================================================================")
    print(f"📖 PROCESSING MENU FOR PLACE: {place}")
    print(f"==================================================================")

    # Find files
    all_files = sorted(os.listdir(directory))
    
    # Process files
    for filename in all_files:
        file_path = os.path.join(directory, filename)
        ext = os.path.splitext(filename)[1].lower()
        
        if ext == ".pdf":
            print(f"\n📄 File: {filename} (PDF)")
            text = process_pdf(file_path, place)
            print(text)
        elif ext in [".png", ".jpg", ".jpeg"] and filename.startswith("menu_"):
            print(f"\n🖼️ File: {filename}")
            text = ocr_image(file_path)
            print(text)

print("\n🎉 Done processing all places!")
