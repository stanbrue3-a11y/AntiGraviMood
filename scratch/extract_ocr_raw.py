import objc
import os
import sys
from Foundation import NSURL

# Load Vision and AppKit
objc.loadBundle("Vision", globals(), bundle_path="/System/Library/Frameworks/Vision.framework")
objc.loadBundle("AppKit", globals(), bundle_path="/System/Library/Frameworks/AppKit.framework")

VNImageRequestHandler = objc.lookUpClass("VNImageRequestHandler")
VNRecognizeTextRequest = objc.lookUpClass("VNRecognizeTextRequest")

if len(sys.argv) < 2:
    print("Usage: python3 extract_ocr_raw.py <image_path>")
    sys.exit(1)

image_path = os.path.abspath(sys.argv[1])
url = NSURL.fileURLWithPath_(image_path)
handler = VNImageRequestHandler.alloc().initWithURL_options_(url, None)
request = VNRecognizeTextRequest.alloc().init()
request.setRecognitionLevel_(0) # accurate

success = handler.performRequests_error_([request], None)

if success:
    results = request.results()
    for obs in results:
        candidates = obs.topCandidates_(1)
        if candidates:
            text = candidates[0].string()
            box = obs.boundingBox()
            print(f"y={box.origin.y:.4f} x={box.origin.x:.4f} w={box.size.width:.4f} h={box.size.height:.4f} -> {text}")
else:
    print("OCR failed!")
