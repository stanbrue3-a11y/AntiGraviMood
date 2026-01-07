import os

file_path = 'ios/Pods/Headers/Public/React-Core/React/RCTBridgeModule.h'

if not os.path.exists(file_path):
    # Try finding it in another location if the path is slightly different
    # But usually Headers/Public/React-Core/React is correct for Pods.
    # Let's check "ios/Pods/React-Core/React/RCTBridgeModule.h" as well?
    # But the error log specifically said: ios/Pods/Headers/Public/React-Core/React/RCTBridgeModule.h
    print(f"File not found: {file_path}")
    exit(1)

with open(file_path, 'r') as f:
    content = f.read()

target_line = "@property (nonatomic, strong, readonly) dispatch_queue_t methodQueue RCT_DEPRECATED;"
replacement_line = "@property (nonatomic, assign, readonly) dispatch_queue_t methodQueue RCT_DEPRECATED;"

if target_line in content:
    new_content = content.replace(target_line, replacement_line)
    with open(file_path, 'w') as f:
        f.write(new_content)
    print("Successfully patched RCTBridgeModule.h")
else:
    print("Target line not found in RCTBridgeModule.h")
    # Verify if it's already patched
    if replacement_line in content:
        print("Already patched.")
    else:
        print("Could not match line exactly.")
