import urllib.request
import os
from pypdf import PdfReader

url = "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/yaki/afeafeafaeg.pdf"
dest = "temp_menu.pdf"

print("Downloading PDF...")
urllib.request.urlretrieve(url, dest)

try:
    reader = PdfReader(dest)
    meta = reader.metadata
    print("Metadata:")
    for key, value in meta.items():
        print(f"  {key}: {value}")
finally:
    if os.path.exists(dest):
        os.remove(dest)
