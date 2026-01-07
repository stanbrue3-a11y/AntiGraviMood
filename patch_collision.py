import os

path = 'app/(tabs)/map.tsx'
with open(path, 'r') as f:
    content = f.read()

target = """iconAllowOverlap: false,
                            iconIgnorePlacement: false,"""

replacement = """iconAllowOverlap: true, // Allow overlap so they don't vanish
                            iconIgnorePlacement: true, // Always show clusters"""

if target in content:
    new_content = content.replace(target, replacement)
    with open(path, 'w') as f:
        f.write(new_content)
    print("SUCCESS: OVERLAP ENABLED")
else:
    print("ERROR: TARGET NOT FOUND")
    # Debug: print surrounding lines
    idx = content.find("iconImage: getClusterImage")
    if idx != -1:
        print("Context found:")
        print(content[idx:idx+200])
