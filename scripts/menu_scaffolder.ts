import fs from 'fs';
import path from 'path';

// Heuristics to detect if a line is likely a description rather than an item name
function isLikelyDescription(line: string): boolean {
  const cleaned = line.trim();
  if (!cleaned) return false;
  
  // Starts with a lowercase letter
  if (/^[a-zâäàéèùêëîïôöç]/.test(cleaned)) return true;
  
  // Starts with a bullet point or special symbol
  if (/^[•⋅\-*]/.test(cleaned)) return true;

  // Ends with a comma or semicolon
  if (/[;,]$/.test(cleaned)) return true;
  
  // Contains multiple commas (usually ingredients list)
  if ((cleaned.match(/,/g) || []).length >= 2) return true;
  
  // Starts with a number indicating ingredients/pieces in a sub-list
  if (/^\d+\s*(?:pièces|pieces|pcs|gyozas?|sushis?|maki|california|saumon|roll)/i.test(cleaned)) return true;
  
  // Keyword-based detection for description patterns
  const keywords = [
    'servi avec', 'accompagné', 'farcis aux', 'farcis à', 'sauce au', 'garnies de', 'cuits à la vapeur', 'sauce soja'
  ];
  if (keywords.some(k => cleaned.toLowerCase().includes(k))) return true;
  
  return false;
}

// Detect section category based on header text
function detectCategoryFromHeader(header: string): string | null {
  const h = header.toLowerCase().trim();
  if (h.includes('entrée') || h.includes('starter') || h.includes('tapas') || h.includes('antipasti') || h.includes('apéro') || h.includes('apérif')) {
    return 'starter';
  }
  if (h.includes('dessert') || h.includes('sweet') || h.includes('douceur') || h.includes('dolci')) {
    return 'dessert';
  }
  if (h.includes('biere') || h.includes('beer') || h.includes('vin') || h.includes('whisky') || h.includes('sake') || h.includes('champagne') || h.includes('cocktail') || h.includes('alcool') || h.includes('cave')) {
    return 'alcohol_drink';
  }
  if (h.includes('soft') || h.includes('chaude') || h.includes('fraiche') || h.includes('café') || h.includes('thé') || h.includes('jus') || h.includes('boisson')) {
    if (h.includes('alcool')) return 'alcohol_drink';
    return 'soft_drink';
  }
  if (h.includes('formule') || h.includes('menu déjeuner') || h.includes('menu dejeuner') || h.includes('menu midi') || h.includes('bento midi')) {
    return 'formula';
  }
  if (h.includes('accompagnement') || h.includes('side')) {
    return 'side';
  }
  if (h.includes('partager') || h.includes('sharing') || h.includes('mezze') || h.includes('planche')) {
    return 'sharing';
  }
  if (h.includes('plat') || h.includes('main') || h.includes('momo') || h.includes('soupe') || h.includes('spécialité') || h.includes('specialite') || h.includes('nouille') || h.includes('riz')) {
    return 'main';
  }
  return null;
}

// Classify an item based on its name, description and default section category
function classifyItem(name: string, description: string, defaultCat: string | null): string {
  const text = `${name} ${description}`.toLowerCase();
  
  // 1. Drink & Dessert Overrides (blanc, rouge, rosé are matched safely with wine/vin context)
  if (/\b(?:bière|beer|asahi|kirin|singha|tsingtao|heineken|1664|corona|sake|saké|champagne|cocktail|spritz|whisky|gin|vodka|rhum)\b/i.test(text) || /\bvin\b/i.test(text) || /vin\s+(?:blanc|rouge|rosé)/i.test(text)) {
    return 'alcohol_drink';
  }
  if (/\b(?:coca|coke|fanta|sprite|orangina|schweppes|perrier|evian|vittel|san pellegrino|badoit|volvic|jus\s+de|litchi|mangue|ananas|pomme|orange|limonade|ice tea|iced tea|thé|infusion|café|coffee|expresso|cappuccino|macchiato)\b/i.test(text)) {
    return 'soft_drink';
  }
  if (/\b(?:mochi|glace|sorbet|dessert|cheesecake|fondant|perle\s+de\s+coco|lychee|litchi\s+au\s+sirop|tarte|crème|creme|tiramisu|panacotta|panna cotta)\b/i.test(text)) {
    return 'dessert';
  }
  
  // 2. Fallback to Section Header Category
  if (defaultCat) {
    return defaultCat;
  }
  
  // 3. Heuristic Overrides based on name
  if (/\b(?:entrées?|salades?|soupes?|gyozas?|raviolis?|nems?|tempuras?|edamame|yakitori|brochettes?|tataki|carpaccio|wakame|miso)\b/i.test(text)) {
    return 'starter';
  }
  if (/\b(?:frites?|riz\s+nature|riz\s+vinaigré|sauce)\b/i.test(text)) {
    return 'side';
  }
  if (/\b(?:formules?|menus?)\b/i.test(text)) {
    return 'formula';
  }
  
  return 'main';
}

function parsePriceLine(line: string): { priceCents: number; extra?: string } | null {
  // Matches "6,00 EUR", "6,00€", "6.00 EUR", "6.00.€", "3.50€", "3.50.€", "6€", "6 €"
  // Also extracts volume/extra information if attached, e.g. "6,00 EUR33 cl"
  const pricePattern = /^(\d+(?:[.,]\d{2})?)\s*(?:\.|\s)*\s*(?:€|eur|euros?)\s*(.*)$/i;
  let match = line.trim().match(pricePattern);
  if (match) {
    const val = parseFloat(match[1].replace(',', '.'));
    const priceCents = Math.round(val * 100);
    const extra = match[2].trim();
    return { priceCents, extra: extra || undefined };
  }
  
  // Support simple price like "6€", "6 €"
  const simplePricePattern = /^(\d+)\s*(?:\.|\s)*\s*(?:€|eur|euros?)\s*(.*)$/i;
  match = line.trim().match(simplePricePattern);
  if (match) {
    const val = parseFloat(match[1]);
    const priceCents = Math.round(val * 100);
    const extra = match[2].trim();
    return { priceCents, extra: extra || undefined };
  }

  // Support naked price like "16,50" or "16.50"
  const nakedPricePattern = /^(\d+[.,]\d{2})\s*(.*)$/;
  match = line.trim().match(nakedPricePattern);
  if (match) {
    const val = parseFloat(match[1].replace(',', '.'));
    const priceCents = Math.round(val * 100);
    const extra = match[2].trim();
    return { priceCents, extra: extra || undefined };
  }

  return null;
}

function isHeaderLine(line: string): boolean {
  const cleaned = line.trim();
  if (!cleaned) return false;
  if (/^---\s*Page\s*\d+\s*---$/i.test(cleaned)) return false; // ignore page headers
  
  // All-caps heading
  if (cleaned.length > 3 && cleaned === cleaned.toUpperCase() && !/\d/.test(cleaned)) {
    return true;
  }
  
  const headerKeywords = [
    'entrées', 'starters', 'plats', 'momo', 'soupes', 'spécialités', 'desserts', 'boissons', 'vins', 'formules', 'menus'
  ];
  if (headerKeywords.includes(cleaned.toLowerCase())) {
    return true;
  }
  
  return false;
}

interface ParsedItem {
  name: string;
  price_cents: number;
  description: string;
  category: string;
}

function main() {
  const args = process.argv.slice(2);
  const slug = args[0];
  const filePath = args[1];

  if (!slug || !filePath) {
    console.error('❌ Usage: npx tsx scripts/menu_scaffolder.ts <slug> <file_path>');
    process.exit(1);
  }

  const absPath = path.resolve(filePath);
  if (!fs.existsSync(absPath)) {
    console.error(`❌ File not found: ${absPath}`);
    process.exit(1);
  }

  console.log(`📖 Reading menu text from ${absPath}...`);
  const rawText = fs.readFileSync(absPath, 'utf-8');
  const lines = rawText
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l.length > 0 && !/^---\s*Page\s*\d+\s*---$/i.test(l));

  // Step 1: Split into sections
  interface Section {
    name: string;
    lines: string[];
  }
  const sections: Section[] = [];
  let currentSection: Section = { name: 'General', lines: [] };

  for (const line of lines) {
    if (isHeaderLine(line)) {
      if (currentSection.lines.length > 0) {
        sections.push(currentSection);
      }
      currentSection = { name: line, lines: [] };
    } else {
      currentSection.lines.push(line);
    }
  }
  if (currentSection.lines.length > 0) {
    sections.push(currentSection);
  }

  console.log(`📂 Found ${sections.length} sections in menu.`);

  // Step 2: Parse items within each section
  const parsedItems: ParsedItem[] = [];

  for (const section of sections) {
    const defaultCat = detectCategoryFromHeader(section.name);
    const secLines = section.lines;
    
    // Find price lines
    const priceIndices: number[] = [];
    const prices: { priceCents: number; extra?: string }[] = [];
    for (let i = 0; i < secLines.length; i++) {
      const p = parsePriceLine(secLines[i]);
      if (p !== null) {
        priceIndices.push(i);
        prices.push(p);
      }
    }

    for (let k = 0; k < priceIndices.length; k++) {
      const pIdx = priceIndices[k];
      const { priceCents, extra } = prices[k];
      
      const prevPIdx = k > 0 ? priceIndices[k - 1] : -1;
      const nextPIdx = k < priceIndices.length - 1 ? priceIndices[k + 1] : -1;

      // preceding block of non-price lines
      const preceding = secLines.slice(prevPIdx + 1, pIdx);
      // following block of non-price lines (before next item starts)
      const nextItemNameIdx = nextPIdx !== -1 ? nextPIdx - 1 : secLines.length;
      const following = secLines.slice(pIdx + 1, nextItemNameIdx);

      let name = '';
      let descParts: string[] = [];

      if (preceding.length === 0) {
        name = 'Unknown Item';
      } else {
        // Trace backwards to separate name and preceding description lines
        let nameIdx = preceding.length - 1;
        while (nameIdx >= 0 && isLikelyDescription(preceding[nameIdx])) {
          descParts.unshift(preceding[nameIdx]);
          nameIdx--;
        }
        
        if (nameIdx >= 0) {
          name = preceding[nameIdx];
        } else {
          name = preceding[0];
          descParts.shift();
        }
      }

      // Cleanup name
      name = name.replace(/^[•⋅\-*+\s]+/, '').trim();
      
      // Cleanup description
      let description = descParts
        .map(d => d.replace(/^[•⋅\-*+\s]+/, '').trim())
        .filter(d => d.length > 0)
        .join(', ');

      // Add any following lines to description
      const followingDesc = following
        .map(f => f.replace(/^[•⋅\-*+\s]+/, '').trim())
        .filter(f => f.length > 0)
        .join(', ');

      if (followingDesc) {
        description = description ? `${description}, ${followingDesc}` : followingDesc;
      }

      if (extra) {
        description = description ? `${description} (${extra})` : extra;
      }

      // Classify the item
      const category = classifyItem(name, description, defaultCat);

      parsedItems.push({
        name,
        price_cents: priceCents,
        description,
        category
      });
    }
  }

  // Step 3: Format payload
  const categoryLabels: Record<string, string> = {
    starter: 'Entrées',
    main: 'Plats',
    sharing: 'À Partager',
    side: 'Accompagnements',
    dessert: 'Desserts',
    soft_drink: 'Boissons Softs',
    alcohol_drink: 'Boissons Alcoolisées',
    formula: 'Formules'
  };

  const menuItemsGrouped: any[] = [];
  const activeCategories = new Set(parsedItems.map(i => i.category));

  // Preserving logical sorting order of categories
  const categoryOrder = ['formula', 'sharing', 'starter', 'main', 'side', 'dessert', 'soft_drink', 'alcohol_drink'];
  for (const cat of categoryOrder) {
    if (activeCategories.has(cat)) {
      const itemsInCat = parsedItems
        .filter(i => i.category === cat)
        .map(i => ({
          name: i.name,
          price_cents: i.price_cents,
          description: i.description || undefined
        }));
      
      menuItemsGrouped.push({
        category_type: cat,
        display_label: categoryLabels[cat] || cat,
        items: itemsInCat
      });
    }
  }

  // Calculate median dish price
  const mainPrices = parsedItems
    .filter(i => i.category === 'main')
    .map(i => i.price_cents)
    .sort((a, b) => a - b);
  let medianDishPrice = 0;
  if (mainPrices.length > 0) {
    const mid = Math.floor(mainPrices.length / 2);
    medianDishPrice = mainPrices.length % 2 !== 0 
      ? mainPrices[mid] 
      : Math.round((mainPrices[mid - 1] + mainPrices[mid]) / 2);
  }

  const payload = {
    on_mange_quoi_ici: parsedItems.slice(0, 3).map(i => i.name).join(', '),
    Url_Photos_Menu: [], // Pre-filled placeholder
    menu_items: menuItemsGrouped,
    dish_price: medianDishPrice ? medianDishPrice / 100 : undefined
  };

  const outputDir = path.resolve(__dirname, '../scratch');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const outputPath = path.join(outputDir, `${slug}_suggested_payload.json`);
  fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2), 'utf-8');

  console.log(`\n🎉 Success! Suggested payload written to: [${slug}_suggested_payload.json](file://${outputPath})`);
  console.log(`📊 Statistics:`);
  console.log(`  - Total parsed items: ${parsedItems.length}`);
  for (const [cat, label] of Object.entries(categoryLabels)) {
    const count = parsedItems.filter(i => i.category === cat).length;
    if (count > 0) {
      console.log(`  - ${label} (${cat}): ${count} items`);
    }
  }
}

main();
