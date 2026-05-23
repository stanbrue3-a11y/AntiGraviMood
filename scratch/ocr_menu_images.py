import objc
import os
import sys
from Foundation import NSURL

# Load Vision and AppKit
objc.loadBundle("Vision", globals(), bundle_path="/System/Library/Frameworks/Vision.framework")
objc.loadBundle("AppKit", globals(), bundle_path="/System/Library/Frameworks/AppKit.framework")

VNImageRequestHandler = objc.lookUpClass("VNImageRequestHandler")
VNRecognizeTextRequest = objc.lookUpClass("VNRecognizeTextRequest")

directory = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/tmp_menu_downloads/l-assiette-paris-14"
files = sorted([f for f in os.listdir(directory) if f.startswith("menu_") and f.endswith(".png")])

print(f"Starting OCR on {len(files)} files in {directory}...")

for filename in files:
    image_path = os.path.join(directory, filename)
    url = NSURL.fileURLWithPath_(image_path)
    handler = VNImageRequestHandler.alloc().initWithURL_options_(url, None)
    request = VNRecognizeTextRequest.alloc().init()
    request.setRecognitionLevel_(0) # 0 is VNRequestTextRecognitionLevelAccurate
    
    success = handler.performRequests_error_([request], None)
    
    page_text = []
    if success:
        results = request.results()
        for obs in results:
            candidates = obs.topCandidates_(1)
            if candidates:
                page_text.append(candidates[0].string())
                
    text = "\n".join(page_text)
    print(f"\n--- {filename} ---")
    print(text)

print("\nDone OCR!")
