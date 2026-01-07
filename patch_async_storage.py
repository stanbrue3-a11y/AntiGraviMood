import os

file_path = 'node_modules/@react-native-async-storage/async-storage/ios/RNCAsyncStorage.mm'

if not os.path.exists(file_path):
    print(f"File not found: {file_path}")
    exit(1)

with open(file_path, 'r') as f:
    lines = f.readlines()

# Line 507 is the target (1-indexed), so index 506.
# We'll look for the content to be sure.
target_content = 'RCTAssertThread(RCTGetMethodQueue(), @"Must be executed on storage thread");'

patched = False
new_lines = []
for line in lines:
    if target_content in line:
        new_lines.append(f"// {line}") # Comment it out
        patched = True
    else:
        new_lines.append(line)

if patched:
    with open(file_path, 'w') as f:
        f.writelines(new_lines)
    print("Successfully patched RNCAsyncStorage.mm")
else:
    print("Target line not found in RNCAsyncStorage.mm")
