import { SurgicalPlace } from '../../../type-definition';

export const atelier_saisonnier: SurgicalPlace = {
    id: "poi-atelier-saisonnier",
    name: "L'Atelier Saisonnier",
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
                category: "Le Buffet Brunch Tout-Inclus (Week-end & Semaine)",
                items: [
                    { name: "Formule Brunch (10h-12h)", price: "28.00€", description: "Buffet salé/sucré à volonté + boissons chaudes/froides." },
                    { name: "Formule Brunch (12h-14h/14h-16h)", price: "31.00€" },
                    { name: "Brunch Enfant (-10 ans)", price: "15.00€" }
                ]
            },
            {
                category: "Buffet Salé (Extraits)",
                items: [
                    { name: "Guacamole maison & Tortilla chips", price: "Inclus" },
                    { name: "Saumon fumé de qualité supérieure", price: "Inclus" },
                    { name: "Mousse de Betterave au chèvre frais", price: "Inclus" },
                    { name: "Salade de Lentilles corail & grenades", price: "Inclus" },
                    { name: "Plateau de Charcuteries fines", price: "Inclus" },
                    { name: "Sélection de Fromages de nos régions", price: "Inclus" },
                    { name: "Oeufs Brouillés crémeux au beurre", price: "Inclus" },
                    { name: "Bacon grillé croustillant", price: "Inclus" },
                    { name: "Quiche Végétarienne du jour", price: "Inclus" },
                    { name: "Tarte fine au Poulet et Poireaux", price: "Inclus" },
                    { name: "Pommes de terre grenailles rôties au thym", price: "Inclus" },
                    { name: "Salade de Pâtes à l'italienne (antipasti)", price: "Inclus" }
                ]
            },
            {
                category: "Buffet Sucré (Extraits)",
                items: [
                    { name: "Pancakes moelleux à foison", price: "Inclus" },
                    { name: "Sirop d'érable véritable", price: "Inclus" },
                    { name: "Pâte à tartiner maison (sans huile de palme)", price: "Inclus" },
                    { name: "Tiramisu onctueux (recette familiale)", price: "Inclus" },
                    { name: "Cheesecake New-Yorkais", price: "Inclus" },
                    { name: "Gâteau Marbré d'enfance", price: "Inclus" },
                    { name: "Salade de fruits frais de saison", price: "Inclus" },
                    { name: "Fromage blanc & Granola bio croustillant", price: "Inclus" },
                    { name: "Confitures artisanales variées", price: "Inclus" },
                    { name: "Viennoiseries pur beurre", price: "Inclus" }
                ]
            },
            {
                category: "À la Carte (Service Midi & Soir)",
                items: [
                    { name: "Fusilli de Provence aux herbes", price: "15.50€" },
                    { name: "Signature Croque-Monsieur à la truffe", price: "16.50€" },
                    { name: "Planche Mixte (Charcuterie & Fromage)", price: "22.00€" },
                    { name: "Raviolis à la truffe blanche & crème", price: "18.00€" },
                    { name: "Salade Signature (Avocat, Feta, Graines)", price: "14.50€" },
                    { name: "Double Cheese Naan Burger (Signature)", price: "17.00€" }
                ]
            },
            {
                category: "Boissons Sèches & Fraîches",
                items: [
                    { name: "Limonade maison au citron vert", price: "6.00€" },
                    { name: "Jus d'Orange pressé minute", price: "5.50€" },
                    { name: "Café de spécialité (Espresso)", price: "2.50€" },
                    { name: "Chocolat chaud onctueux", price: "5.00€" },
                    { name: "Thé Bio (Sélection Kusmi)", price: "5.00€" }
                ]
            },
            {
                category: "Cave & Bières Craft",
                items: [
                    { name: "Bière Artisanale (Demi)", price: "7.50€" },
                    { name: "Vin Blanc : Chardonnay (Verre)", price: "7.00€" },
                    { name: "Vin Rouge : Merlot de Loire (Verre)", price: "6.50€" },
                    { name: "Prosecco Millesimato (Verre)", price: "9.00€" },
                    { name: "Bouteille Champagne Moutard Blanc de Blanc", price: "75.00€" }
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
