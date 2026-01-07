import os

file_path = 'ios/Pods/Pods.xcodeproj/project.pbxproj'

if not os.path.exists(file_path):
    print(f"File not found: {file_path}")
    exit(1)

with open(file_path, 'r') as f:
    content = f.read()

# exact replacement of the variable usage in search paths
old_str = "DT_TOOLCHAIN_DIR"
new_str = "TOOLCHAIN_DIR"

if old_str in content:
    new_content = content.replace(old_str, new_str)
    with open(file_path, 'w') as f:
        f.write(new_content)
    print(f"Successfully replaced {old_str} with {new_str} in {file_path}")
    print(f"Occurrences replaced: {content.count(old_str)}")
else:
    print(f"No occurrences of {old_str} found in {file_path}")
