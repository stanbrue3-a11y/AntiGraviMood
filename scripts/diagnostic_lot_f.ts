import { superfine } from '../src/data/registry/tree/11/roquette/superfine';
import { atelier_saisonnier } from '../src/data/registry/tree/11/charonne/atelier-saisonnier';
import { gourou } from '../src/data/registry/tree/11/voltaire/gourou';
import { auberge_pyrenees_cevennes } from '../src/data/registry/tree/11/folie-mericourt/auberge-pyrenees-cevennes';

const venues = [superfine, atelier_saisonnier, gourou, auberge_pyrenees_cevennes];

const results = venues.map(v => {
    let itemCount = 0;
    v.pricing.menu_items?.forEach(cat => {
        itemCount += cat.items.length;
    });

    return {
        name: v.name,
        itemCount,
        dish_price: v.pricing.dish_price,
        category: v.category
    };
});

console.log(JSON.stringify(results, null, 2));
