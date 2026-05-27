import urllib.request
import objc
import os
import re
from Foundation import NSURL

# Load Vision and AppKit
objc.loadBundle("Vision", globals(), bundle_path="/System/Library/Frameworks/Vision.framework")
objc.loadBundle("AppKit", globals(), bundle_path="/System/Library/Frameworks/AppKit.framework")

VNImageRequestHandler = objc.lookUpClass("VNImageRequestHandler")
VNRecognizeTextRequest = objc.lookUpClass("VNRecognizeTextRequest")

urls = [
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.08.20.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.08.28.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.08.30.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.08.34.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.08.37.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.08.40.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.08.48.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.08.54.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.09.01.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.09.06.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.09.13.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.09.17.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.09.35.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.09.45.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.09.50.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.09.54.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.10.06.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.10.11.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.10.15.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.10.24.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.10.28.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.10.32.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.10.37.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.10.40.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.10.42.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.10.51.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.10.55.png",
    "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/wako/Capture_d_e_cran_2026-05-24_a__16.10.59.png"
]

date_pattern = re.compile(r"(il y a|mois|an\b|année|semaine|jour)", re.IGNORECASE)

for i, url in enumerate(urls):
    dest = f"temp_{i}.png"
    urllib.request.urlretrieve(url, dest)
    try:
        image_path = os.path.abspath(dest)
        nsurl = NSURL.fileURLWithPath_(image_path)
        handler = VNImageRequestHandler.alloc().initWithURL_options_(nsurl, None)
        request = VNRecognizeTextRequest.alloc().init()
        request.setRecognitionLevel_(0)
        success = handler.performRequests_error_([request], None)
        if success:
            for obs in request.results():
                text = obs.topCandidates_(1)[0].string()
                if date_pattern.search(text):
                    print(f"Image {i} ({os.path.basename(url)}) -> Match: {text}")
    finally:
        if os.path.exists(dest):
            os.remove(dest)
