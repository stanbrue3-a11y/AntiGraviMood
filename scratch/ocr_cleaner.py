#!/usr/bin/env python3
import sys
import os
import re

def clean_text(text):
    lines = text.splitlines()
    cleaned_lines = []
    seen_text_lines = set()
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            continue
            
        # 1. Normalize extra whitespaces
        normalized = re.sub(r'\s+', ' ', stripped)
        
        # 2. Filter out lines with no letters or digits (e.g., purely punctuation "...", "---", "|", etc.)
        if not re.search(r'[a-zA-Z0-9]', normalized):
            continue
            
        # 3. Filter out single-character lines that are alphabetical (garbage OCR letters like "i", "e", "x", "v")
        # Keep single-character lines if they are numbers (like "1" or "2" for pages/menu numbers)
        if len(normalized) == 1 and normalized.isalpha():
            continue
            
        # 4. Deduplicate non-price lines to avoid duplicate items scanned multiple times
        # If the line contains at least one letter, we deduplicate it globally.
        # If it is purely numeric/price (e.g. "12.00", "12 €"), we do NOT deduplicate it since multiple dishes share the same price.
        has_letters = re.search(r'[a-zA-Z]', normalized)
        if has_letters:
            lower_val = normalized.lower()
            if lower_val in seen_text_lines:
                continue
            seen_text_lines.add(lower_val)
            
        cleaned_lines.append(normalized)
        
    return "\n".join(cleaned_lines)

def main():
    if len(sys.argv) < 2:
        print("❌ Usage: python3 ocr_cleaner.py <slug_or_filename>")
        sys.exit(1)
        
    target = sys.argv[1]
    
    # Resolve file path
    base_dir = "/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch/ocr_results"
    if not target.endswith(".txt"):
        file_path = os.path.join(base_dir, f"{target}.txt")
    else:
        file_path = target
        if not os.path.isabs(file_path):
            file_path = os.path.abspath(file_path)
            
    if not os.path.exists(file_path):
        # Fallback to direct path check
        if os.path.exists(target):
            file_path = os.path.abspath(target)
        else:
            print(f"❌ File not found: {file_path}")
            sys.exit(1)
            
    print(f"📖 Reading raw OCR from: {file_path}")
    with open(file_path, "r", encoding="utf-8") as f:
        raw_content = f.read()
        
    original_char_count = len(raw_content)
    original_line_count = len(raw_content.splitlines())
    
    cleaned_content = clean_text(raw_content)
    
    cleaned_char_count = len(cleaned_content)
    cleaned_line_count = len(cleaned_content.splitlines())
    
    # Save output
    dir_name = os.path.dirname(file_path)
    base_name = os.path.basename(file_path)
    clean_name = base_name.replace(".txt", "_clean.txt")
    if clean_name == base_name:
        clean_name = base_name + ".clean"
        
    clean_path = os.path.join(dir_name, clean_name)
    with open(clean_path, "w", encoding="utf-8") as f:
        f.write(cleaned_content)
        
    char_reduction = (1 - (cleaned_char_count / max(1, original_char_count))) * 100
    line_reduction = (1 - (cleaned_line_count / max(1, original_line_count))) * 100
    
    print(f"✅ Cleaned OCR saved to: {clean_path}")
    print(f"📊 Stats:")
    print(f"   - Lines: {original_line_count} ➔ {cleaned_line_count} ({line_reduction:.1f}% reduction)")
    print(f"   - Chars: {original_char_count} ➔ {cleaned_char_count} ({char_reduction:.1f}% reduction)")
    print(f"   - Saved ~{(original_char_count - cleaned_char_count) / 4:.0f} Gemini tokens on input!")

if __name__ == "__main__":
    main()
