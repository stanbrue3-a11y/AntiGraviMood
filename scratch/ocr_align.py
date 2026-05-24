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
    print("Usage: python3 ocr_align.py <image_path>")
    sys.exit(1)

image_path = os.path.abspath(sys.argv[1])
url = NSURL.fileURLWithPath_(image_path)
handler = VNImageRequestHandler.alloc().initWithURL_options_(url, None)
request = VNRecognizeTextRequest.alloc().init()
request.setRecognitionLevel_(0) # accurate

success = handler.performRequests_error_([request], None)

if success:
    results = request.results()
    lines = []
    for obs in results:
        candidates = obs.topCandidates_(1)
        if candidates:
            text = candidates[0].string()
            # Bounding box is relative to bottom-left (0,0) to top-right (1,1)
            box = obs.boundingBox()
            x = box.origin.x
            y = box.origin.y
            w = box.size.width
            h = box.size.height
            lines.append((text, x, y, w, h))
            
    # Group lines by vertical position (roughly same y)
    # Since we want to sort from top to bottom, sort y descending
    lines.sort(key=lambda item: -item[2])
    
    # Simple line grouper (within 1.5% of page height)
    grouped = []
    current_line = []
    last_y = -1
    
    for text, x, y, w, h in lines:
        if last_y == -1:
            current_line.append((text, x, y, w, h))
            last_y = y
        elif abs(y - last_y) < 0.015:
            current_line.append((text, x, y, w, h))
        else:
            # Sort current line by x coordinate (left to right)
            current_line.sort(key=lambda item: item[1])
            grouped.append(current_line)
            current_line = [(text, x, y, w, h)]
            last_y = y
            
    if current_line:
        current_line.sort(key=lambda item: item[1])
        grouped.append(current_line)
        
    for line in grouped:
        line_str = " | ".join([f"{item[0]} (x={item[1]:.2f})" for item in line])
        print(line_str)
else:
    print("OCR failed!")
