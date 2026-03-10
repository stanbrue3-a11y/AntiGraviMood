import { arrondissement_11Places } from '../src/data/registry/tree/11/index';

console.log("Starting Audit of 11th Arrondissement...");
console.log("------------------------------------------");

const mainDishCategories = ["Plats", "Plats de Résistance", "Main Courses", "Plats Traditionnels", "Curries", "Bowls", "Burgers", "Pizzas", "Pasta", "Poissons", "Viandes", "Primi", "Secondi", "Donburi", "Noodles", "Bo Buns", "Ramen", "Udon"];

const auditResults = arrondissement_11Places.map(place => {
    const allItems: number[] = [];
    const mainItems: number[] = [];
    
    place.pricing.menu_items?.forEach(cat => {
        const isMainCat = mainDishCategories.some(mc => cat.category.toLowerCase().includes(mc.toLowerCase()));
        cat.items.forEach(item => {
            const price = parseFloat(item.price.replace('€', '').replace(',', '.'));
            if (!isNaN(price)) {
                allItems.push(price);
                if (isMainCat) mainItems.push(price);
            }
        });
    });

    const medianOfAll = allItems.sort((a, b) => a - b)[Math.floor(allItems.length / 2)];
    const medianOfMains = mainItems.length > 0 ? mainItems.sort((a, b) => a - b)[Math.floor(mainItems.length / 2)] : medianOfAll;
    
    const dishPrice = place.pricing.dish_price || 0;
    const suspiciousPrice = dishPrice < 15 && place.category === "restaurant";
    const priceMismatch = Math.abs(dishPrice - (medianOfMains || 0)) > 8; 

    return {
        id: place.id,
        name: place.name,
        google_id: place.location.google_id,
        dish_price: dishPrice,
        main_median: medianOfMains,
        suspiciousPrice,
        priceMismatch,
        category: place.category
    };
});

const report = auditResults.filter(r => r.suspiciousPrice || r.priceMismatch);

console.log(JSON.stringify(report, null, 2));
console.log(`Total Flagged: ${report.length} / ${arrondissement_11Places.length}`);
