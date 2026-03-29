import { SurgicalPlace } from '../../../type-definition';

export const atelier_saisonnier: SurgicalPlace = {
    id: "poi-atelier-saisonnier",
    name: "L’Atelier Saisonnier",
    slug: "atelier-saisonnier",
    category: "restaurant",
    subcategory: ["brunch", "bistrot", "fait maison", "vins natures", "restaurant"],
    location: {
        address: "15 Rue de Charonne",
        arrondissement: 11,
        lat: 48.8528991,
        lng: 2.37346,
        nearest_metro: "Bastille",
        metro_lines: [1, 5, 8],
        google_id: "ChIJW5W9Sjxu5kcRR-Q3r0oNoiU"
    },
    moods: {
        chill: 80,
        festif: 40,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lun-mar: 12:00–14:30; mer-ven: 12:00–14:30, 18:30–00:00; sam: 10:00–16:00, 18:30–01:00; dim: 10:00–16:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://lateliersaisonnier.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 7.50,
        wine_glass: 6.50,
        coffee_price: 2.50,
        dish_price: 16.00, // MANUAL: Plats du midi et planches du soir (Moyenne 15-18€)
        last_updated: "2026-03-09",
        menu_items: [
            {
                category_type: "other",
                display_label: "Le Buffet Brunch Tout-Inclus (Week-end & Semaine)",
                items: [
                    { name: "Formule Brunch (10h-12h)", price_cents: 2800, description: "Buffet salé/sucré à volonté + boissons chaudes/froides." },
                    { name: "Formule Brunch (12h-14h/14h-16h)", price_cents: 3100 },
                    { name: "Brunch Enfant (-10 ans)", price_cents: 1500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Buffet Salé (Extraits)",
                items: [
                    { name: "Guacamole maison & Tortilla chips", price_cents: 0 },
                    { name: "Saumon fumé de qualité supérieure", price_cents: 0 },
                    { name: "Mousse de Betterave au chèvre frais", price_cents: 0 },
                    { name: "Salade de Lentilles corail & grenades", price_cents: 0 },
                    { name: "Plateau de Charcuteries fines", price_cents: 0 },
                    { name: "Sélection de Fromages de nos régions", price_cents: 0 },
                    { name: "Oeufs Brouillés crémeux au beurre", price_cents: 0 },
                    { name: "Bacon grillé croustillant", price_cents: 0 },
                    { name: "Quiche Végétarienne du jour", price_cents: 0 },
                    { name: "Tarte fine au Poulet et Poireaux", price_cents: 0 },
                    { name: "Pommes de terre grenailles rôties au thym", price_cents: 0 },
                    { name: "Salade de Pâtes à l'italienne (antipasti)", price_cents: 0 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Buffet Sucré (Extraits)",
                items: [
                    { name: "Pancakes moelleux à foison", price_cents: 0 },
                    { name: "Sirop d'érable véritable", price_cents: 0 },
                    { name: "Pâte à tartiner maison (sans huile de palme)", price_cents: 0 },
                    { name: "Tiramisu onctueux (recette familiale)", price_cents: 0 },
                    { name: "Cheesecake New-Yorkais", price_cents: 0 },
                    { name: "Gâteau Marbré d'enfance", price_cents: 0 },
                    { name: "Salade de fruits frais de saison", price_cents: 0 },
                    { name: "Fromage blanc & Granola bio croustillant", price_cents: 0 },
                    { name: "Confitures artisanales variées", price_cents: 0 },
                    { name: "Viennoiseries pur beurre", price_cents: 0 }
                ]
            },
            {
                category_type: "other",
                display_label: "À la Carte (Service Midi & Soir)",
                items: [
                    { name: "Fusilli de Provence aux herbes", price_cents: 1550 },
                    { name: "Signature Croque-Monsieur à la truffe", price_cents: 1650 },
                    { name: "Planche Mixte (Charcuterie & Fromage)", price_cents: 2200 },
                    { name: "Raviolis à la truffe blanche & crème", price_cents: 1800 },
                    { name: "Salade Signature (Avocat, Feta, Graines)", price_cents: 1450 },
                    { name: "Double Cheese Naan Burger (Signature)", price_cents: 1700 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Boissons Sèches & Fraîches",
                items: [
                    { name: "Limonade maison au citron vert", price_cents: 600 },
                    { name: "Jus d'Orange pressé minute", price_cents: 550 },
                    { name: "Café de spécialité (Espresso)", price_cents: 250 },
                    { name: "Chocolat chaud onctueux", price_cents: 500 },
                    { name: "Thé Bio (Sélection Kusmi)", price_cents: 500 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cave & Bières Craft",
                items: [
                    { name: "Bière Artisanale (Demi)", price_cents: 750 },
                    { name: "Vin Blanc : Chardonnay (Verre)", price_cents: 700 },
                    { name: "Vin Rouge : Merlot de Loire (Verre)", price_cents: 650 },
                    { name: "Prosecco Millesimato (Verre)", price_cents: 900 },
                    { name: "Bouteille Champagne Moutard Blanc de Blanc", price_cents: 7500 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVxNI5TG32SnRdKE17QhLREEo7_QumFnC6_-dEWfuVCyPywt-ZKt4j-rtnB4NBAvQytLW_qu6LIajvMWWvV2DOPc9WCM3fT_jKLMieLI-fd3YLwhUNIBszEy9xJZ6tCH0RHO4c472zlTnxp1b-jAPMHv-mnAO6nKWRRZywRS7rJC7_SeJIqZdqF-g-WOynmzWhskpv5bra1S6GhLKUf0mwAMPPeG0-FaSuZefbdd0TmUzCT_H-0GBMqYo4WC0f3JHFFMKcX3YsgIkfy5L7N797KAE-rYHMLsQPMCyPpvc65PYCNniAC-y8weE3U_Bpo3Q9I9stT-Senv_F4u3zpdjSEYc61f4bnqgZGBHvLw3X5_dxqplFmIQCk1shIkj3fgnKmkE6147vBQsD79op73J1IcI8v58yPdnhbGiNQJRkM3tVEiK1e6SSuLgbhro1g&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.6,
    description: "L'Atelier Saisonnier est l'institution du brunch à Bastille. Réputé pour son buffet 100% fait maison, gargantuesque et convivial, le restaurant déploie une énergie chaleureuse du matin au soir. Que ce soit pour un brunch à volonté entre amis ou une planche de charcuterie fine le soir accompagnée de vins natures, l'expérience est toujours généreuse et sans chichis.",
    insider_tip: "• Réservez impérativement pour le brunch du dimanche, les créneaux s'arrachent.\n• Le buffet est régulièrement réapprovisionné, inutile de se précipiter, profitez de l'ambiance chill.\n• Leurs raviolis à la truffe blanche sont un banger souvent ignoré à cause du buffet sucré.\n• Wifi gratuit et atmosphère 'work-friendly' en semaine (hors brunch).",
    expert_catchline: "L'eldorado du brunch fait maison : buffet gargantuesque et ambiance ultra-chill au cœur du 11ème.",
    specials: {
        cuisine: ["Buffet Brunch à volonté", "Raviolis à la truffe", "Cheesecake Signature", "Guacamole maison"],
        drinks: ["Limonade maison", "Bières artisanales", "Sélection de Vins Natures"],
        must_eat: "Les pancakes à la pâte à tartiner maison et le guacamole (à volonté dans le brunch) sont les stars incontestées.",
        must_drink: "Leur jus d'orange pressé ultra-frais pour accompagner le festin matinal."
    }
};
