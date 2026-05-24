import objc
import os
import sys
from Foundation import NSURL

# Load Vision and AppKit
objc.loadBundle("Vision", globals(), bundle_path="/System/Library/Frameworks/Vision.framework")
objc.loadBundle("AppKit", globals(), bundle_path="/System/Library/Frameworks/AppKit.framework")

VNImageRequestHandler = objc.lookUpClass("VNImageRequestHandler")
VNRecognizeTextRequest = objc.lookUpClass("VNRecognizeTextRequest")

out_file_path = "/Users/stanbrue/Downloads/ocr_output.txt"
output_lines = []

page_count = 86
print(f"Starting OCR on {page_count} pages...")

for i in range(page_count):
    image_path = f"/Users/stanbrue/Downloads/feafaefezfzafg_page_{i}.jpg"
    if not os.path.exists(image_path):
        continue
        
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
                
    text = "\n".join(page_text)
    print(f"--- Page {i} ---")
    print(text)
    output_lines.append(f"=== PAGE {i} ===\n{text}")

with open(out_file_path, "w", encoding="utf-8") as f:
    f.write("\n\n".join(output_lines))

print(f"🎉 OCR completed! Saved text to: {out_file_path}")
