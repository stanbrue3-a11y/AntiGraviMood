import objc
import os
import sys
import subprocess
from Foundation import NSURL

# Load Vision and AppKit frameworks
objc.loadBundle("Vision", globals(), bundle_path="/System/Library/Frameworks/Vision.framework")
objc.loadBundle("AppKit", globals(), bundle_path="/System/Library/Frameworks/AppKit.framework")

VNImageRequestHandler = objc.lookUpClass("VNImageRequestHandler")
VNRecognizeTextRequest = objc.lookUpClass("VNRecognizeTextRequest")

base_dir = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/tmp_menu_downloads"
slugs = [
    'emporio-armani-caffe',
    'freddy-s',
    'helene-darroze',
    'l-avant-comptoir-de-la-terre-et-de-la-mer',
    'l-avant-comptoir-du-marche'
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
        print(f"Directory not found for: {slug}")
        continue
    
    files = sorted([f for f in os.listdir(directory) if f.startswith("menu_") and (f.endswith(".png") or f.endswith(".jpg") or f.endswith(".jpeg") or f.endswith(".pdf"))])
    print(f"\n📖 OCR processing for {slug} ({len(files)} files)...")
    
    output_text = []
    for filename in files:
        file_path = os.path.join(directory, filename)
        print(f"  Scanning {filename}...")
        text = ocr_image(file_path)
        output_text.append(f"--- File: {filename} ---")
        output_text.append(text)
        
    ocr_out_dir = os.path.join(base_dir, "..", "ocr_results")
    if not os.path.exists(ocr_out_dir):
        os.makedirs(ocr_out_dir)
        
    raw_txt_path = os.path.join(ocr_out_dir, f"{slug}.txt")
    with open(raw_txt_path, "w", encoding="utf-8") as out:
        out.write("\n\n".join(output_text))
    print(f"✅ Saved raw OCR to: {raw_txt_path}")
    
    # Run the cleaner
    subprocess.run(["python3", "/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/ocr_cleaner.py", slug])

print("\nAll OCR tasks completed!")
