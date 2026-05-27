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

base_dir = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/tmp_menu_downloads"

# The 17 targets (excluding hanoi-quan-montparnasse which has no menus)
slugs = [
    'opla-banh-mi-more',
    'papy-aux-fourneaux-paris',
    'partage-brasserie',
    'partages',
    'restaurant-la-cantine-du-troquet-daguerre',
    'senatore',
    'slow',
    'soucote',
    'sushi-gozen',
    'ten-chi',
    'terra-mia',
    'tripletta-gaite-paris-14',
    'umami-burger-montparnasse',
    'yatai-ramen-montparnasse',
    'restaurant-montee',
    'yakitori-montparnasse',
    'toritcho'
]

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

def process_pdf(pdf_path):
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
        return "\n\n".join(extracted_text)
        
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
        
        data = rep.representationUsingType_properties_(3, None) # PNG
        temp_img_path = os.path.join(os.path.dirname(pdf_path), f"temp_page_{i}.png")
        data.writeToFile_atomically_(temp_img_path, True)
        
        text = ocr_image(temp_img_path)
        ocr_results.append(f"--- Page {i} (PDF OCR) ---\n{text}")
        
        try:
            os.remove(temp_img_path)
        except:
            pass
            
    return "\n\n".join(ocr_results)

for slug in slugs:
    directory = os.path.join(base_dir, slug)
    if not os.path.exists(directory):
        print(f"\nDirectory not found for: {slug}")
        continue
    
    files = sorted([f for f in os.listdir(directory) if f.startswith("menu_") and (f.endswith(".png") or f.endswith(".jpg") or f.endswith(".jpeg") or f.endswith(".pdf"))])
    print(f"\n==================================================================")
    print(f"📖 PROCESSING MENU FOR PLACE: {slug} ({len(files)} files)")
    print(f"==================================================================")
    
    output_text = []
    for filename in files:
        file_path = os.path.join(directory, filename)
        ext = os.path.splitext(filename)[1].lower()
        
        if ext == ".pdf":
            print(f"📄 File: {filename} (PDF)...")
            text = process_pdf(file_path)
            output_text.append(text)
        elif ext in [".png", ".jpg", ".jpeg"]:
            print(f"🖼️ File: {filename}...")
            text = ocr_image(file_path)
            output_text.append(text)
            
    # Write OCR result to a text file for inspection
    ocr_out_dir = os.path.join(base_dir, "..", "ocr_results")
    if not os.path.exists(ocr_out_dir):
        os.makedirs(ocr_out_dir)
    with open(os.path.join(ocr_out_dir, f"{slug}.txt"), "w", encoding="utf-8") as out:
        out.write("\n\n".join(output_text))

print("\nDone OCR for all 17 places!")
