import urllib.request
import objc
import os
from Foundation import NSURL

# Load Vision and AppKit
objc.loadBundle("Vision", globals(), bundle_path="/System/Library/Frameworks/Vision.framework")
objc.loadBundle("AppKit", globals(), bundle_path="/System/Library/Frameworks/AppKit.framework")

VNImageRequestHandler = objc.lookUpClass("VNImageRequestHandler")
VNRecognizeTextRequest = objc.lookUpClass("VNRecognizeTextRequest")

url = "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.08.20.png"
dest = "temp_screenshot.png"

print("Downloading Wako screenshot...")
urllib.request.urlretrieve(url, dest)

try:
    image_path = os.path.abspath(dest)
    nsurl = NSURL.fileURLWithPath_(image_path)
    handler = VNImageRequestHandler.alloc().initWithURL_options_(nsurl, None)
    request = VNRecognizeTextRequest.alloc().init()
    request.setRecognitionLevel_(0) # accurate
    
    success = handler.performRequests_error_([request], None)
    if success:
        results = request.results()
        print("\nAll OCR lines with coordinates:")
        for obs in results:
            candidates = obs.topCandidates_(1)
            if candidates:
                text = candidates[0].string()
                box = obs.boundingBox()
                print(f"y={box.origin.y:.4f} x={box.origin.x:.4f} -> {text}")
    else:
        print("OCR failed!")
finally:
    if os.path.exists(dest):
        os.remove(dest)
