import os

def replace_in_file(file_path, old_str, new_str):
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
        if old_str in content:
            new_content = content.replace(old_str, new_str)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Patched: {file_path}")
            return 1
        return 0
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return 0

root_dir = 'ios/Pods'
count = 0
for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith('.xcconfig') or file.endswith('.pbxproj'):
            full_path = os.path.join(root, file)
            count += replace_in_file(full_path, "DT_TOOLCHAIN_DIR", "TOOLCHAIN_DIR")

print(f"Total files patched: {count}")
