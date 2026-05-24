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
slugs = [
    "le-tonnerre",
    "le-verre-siffleur-paris",
    "le-zeyer-paris",
    "les-grillades-de-buenos-aires"
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
        
        print(f"\n🖼️ File: {filename}")
        text = ocr_image(file_path)
        output_text.append(text)
        print(text[:1000] + "\n... [truncated in terminal stdout] ...")

    # Save to file
    out_log_path = os.path.join(base_dir, f"{slug}_ocr.log")
    with open(out_log_path, "w", encoding="utf-8") as f:
        f.write("\n\n".join(output_text))
    print(f"Saved complete OCR log to: {out_log_path}")

print("\nDone OCR for 4 places!")
