import objc
import os
import sys
from Foundation import NSURL, NSSize
from PIL import Image

# Load PDFKit and AppKit
objc.loadBundle("PDFKit", globals(), bundle_path="/System/Library/Frameworks/PDFKit.framework")
objc.loadBundle("AppKit", globals(), bundle_path="/System/Library/Frameworks/AppKit.framework")

PDFDocument = objc.lookUpClass("PDFDocument")
NSBitmapImageRep = objc.lookUpClass("NSBitmapImageRep")
NSJPEGFileType = 3 # JPEG constant

pdf_path = "/Users/stanbrue/Downloads/feafaefezfzafg.pdf"
out_pdf_path = "/Users/stanbrue/Downloads/feafaefezfzafg_compressed.pdf"

url = NSURL.fileURLWithPath_(pdf_path)
doc = PDFDocument.alloc().initWithURL_(url)

if not doc:
    print("❌ Failed to load PDF!")
    sys.exit(1)

page_count = doc.pageCount()
print(f"📖 Loaded PDF with {page_count} pages.")

temp_jpegs = []

for i in range(page_count):
    page = doc.pageAtIndex_(i)
    box = page.boundsForBox_(0)
    width = box.size.width
    height = box.size.height

    # Render at 1.5x scale (balance between readability and file size)
    scale = 1.5
    thumb_size = NSSize(width * scale, height * scale)
    image = page.thumbnailOfSize_forBox_(thumb_size, 0)
    
    tiff_data = image.TIFFRepresentation()
    bitmap = NSBitmapImageRep.imageRepWithData_(tiff_data)
    
    # 70% quality JPEG is highly readable and extremely compact
    properties = { "NSImageCompressionFactor": 0.7 }
    jpeg_data = bitmap.representationUsingType_properties_(NSJPEGFileType, properties)
    
    temp_path = f"/Users/stanbrue/Downloads/temp_page_{i}.jpg"
    jpeg_data.writeToFile_atomically_(temp_path, True)
    temp_jpegs.append(temp_path)
    if (i + 1) % 10 == 0 or i == page_count - 1:
        print(f"   Processed page {i + 1}/{page_count}")

print("🎨 Reassembling JPEGs into compressed PDF using Pillow...")
pil_images = [Image.open(p).convert("RGB") for p in temp_jpegs]
pil_images[0].save(out_pdf_path, save_all=True, append_images=pil_images[1:])

print("🧹 Cleaning up temporary JPEG files...")
for p in temp_jpegs:
    try:
        os.remove(p)
    except:
        pass

# Check final size
orig_size = os.path.getsize(pdf_path) / (1024 * 1024)
new_size = os.path.getsize(out_pdf_path) / (1024 * 1024)

print(f"🎉 SUCCESS! Compressed PDF saved to: {out_pdf_path}")
print(f"📊 Original Size: {orig_size:.2f}MB | Compressed Size: {new_size:.2f}MB (Saved {(1 - new_size/orig_size)*100:.1f}%)")

# Overwrite original file
try:
    os.replace(out_pdf_path, pdf_path)
    print(f"🔄 Overwrote original file: {pdf_path}")
except Exception as e:
    print(f"⚠️ Warning: Could not overwrite original file: {e}")
