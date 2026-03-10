import { arrondissement_14Places } from '../src/data/registry/tree/14/index';

console.log("Starting Audit of 14th Arrondissement...");
console.log("------------------------------------------");

const mainDishKeywords = [
    "Plat", "Main", "Résistance", "Course", "Traditionnel", "Curry", "Bowl", "Burger", "Pizza", "Pizze", "Pasta", 
    "Poisson", "Viande", "Primi", "Secondi", "Donburi", "Noodle", "Bo Bun", "Ramen", "Udon", "Galette", 
    "Crêpe Salée", "Incontournable", "Ardoise", "Légende", "Classique", "Océan", "Empreinte", 
    "Crapaud", "Arrivage", "Écailler", "Cocotte", "Maison", "Wok", "Mezzé", "Taco", "Burrito", "Quesadilla", 
    "Couscous", "Tajine", "Mijoté", "Grillade", "Brochette", "Spécialité", "Suggestion", "Box", "Planche",
    "Pâtisserie", "Gâteau", "Viennoiserie", "Satiété", "Saison", "Carte", "Cuisine", "Moment", "Bistronomie",
    "Fusion", "Lyonnaiseries", "Signature", "Poulet"
];

const excludeKeywords = [
    "Entrée", "Dessert", "Boisson", "Vin", "Cocktail", "Auspice", "Prélude", "Douceur", "Mignardise", 
    "Amuse-bouche", "Starter", "Appetizer", "Sucrée", "Sucré", "Café", "Thé", "Digestif", "Fromage",
    "Side", "Accompagnement", "Suppléments", "Supplement"
];

const auditResults = arrondissement_14Places.map((place: any) => {
    const allItems: any[] = [];
    const mainItems: number[] = [];
    
    place.pricing.menu_items?.forEach((cat: any) => {
        const isExcluded = excludeKeywords.some(ex => cat.category.toLowerCase().includes(ex.toLowerCase()));
        const isMainCat = !isExcluded && mainDishKeywords.some(kw => cat.category.toLowerCase().includes(kw.toLowerCase()));
        
        cat.items.forEach((item: any) => {
            const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
            if (!isNaN(price)) {
                allItems.push({ name: item.name, price });
                if (isMainCat) mainItems.push(price);
            }
        });
    });

    const isFixedMenu = place.pricing.menu_type === 'fixed';
    
    // Hard Fail Flags
    const errors = [];
    
    if (!isFixedMenu && allItems.length < 15) {
        errors.push(`DEPTH_FAILURE: Only ${allItems.length} items (Minimum 15)`);
    }
    
    if (!place.images.hero || !place.images.gallery || place.images.gallery.length < 1) {
        errors.push(`MEDIA_FAILURE: Missing hero or gallery images`);
    } else {
        const hasPlaceholders = place.images.hero.includes("v8v8v8") || place.images.gallery.some((g: string) => g.includes("v8v8v8"));
        if (hasPlaceholders) errors.push(`MEDIA_FAILURE: Found placeholder 'v8v8v8' references`);
    }

    if (!place.practical.opening_hours_raw || place.practical.opening_hours_raw.length < 60) {
        errors.push(`HOURS_FAILURE: Vague opening hours (Length: ${place.practical.opening_hours_raw?.length || 0})`);
    }

    if (!place.expert_catchline || !place.insider_tip) {
        errors.push(`EDITORIAL_FAILURE: Missing catchline or insider tip`);
    }

    const mainItemsSorted = mainItems.sort((a, b) => a - b);
    const medianOfMains = mainItemsSorted.length > 0 ? mainItemsSorted[Math.floor(mainItemsSorted.length / 2)] : 0;
    
    const dishPrice = place.pricing.dish_price || 0;
    
    if (mainItems.length === 0 && !isFixedMenu) {
        errors.push(`CATEGORY_FAILURE: No Main Course category identified (Median: 0€)`);
    } else if (medianOfMains > 0) {
        const priceMismatch = Math.abs(dishPrice - medianOfMains) > 6; 
        if (priceMismatch) {
            errors.push(`PRICING_MISMATCH: dish_price=${dishPrice} € vs calculated_median=${medianOfMains} €`);
        }
    }

    // Logic for "cheap" restaurants: dish_price shouldn't be too low for a full meal
    if (dishPrice < 10 && place.category === 'restaurant' && !place.subcategory.includes('boulangerie') && !place.subcategory.includes('snack')) {
        errors.push(`PRICING_JAUGE_ERROR: dish_price=${dishPrice}€ is suspiciously low for a restaurant (possible side dish bias)`);
    }

    return {
        id: place.id,
        name: place.name,
        errors,
        passed: errors.length === 0
    };
});

const report = auditResults.filter((r: any) => !r.passed);

if (report.length > 0) {
    console.log("❌ INDUSTRIAL AUDIT FAILED");
    console.log(JSON.stringify(report, null, 2));
    console.log("------------------------------------------");
    console.log(`Summary: ${report.length} / ${arrondissement_14Places.length} venues failed the MOELLE 2026 standard.`);
} else {
    console.log("✅ ALL VENUES PASS MOELLE 2026 STANDARD");
}
