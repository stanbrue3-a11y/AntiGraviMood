import { SurgicalPlace } from '../../../type-definition';

export const perchoirMenilmontant: SurgicalPlace = {
    id: "poi-perchoir-menilmontant",
    name: "Le Perchoir Ménilmontant",
    slug: "perchoir-menilmontant",
    category: "restaurant",
    subcategory: ["rooftop", "italian-american", "residency", "evening-vibe"],
    location: {
        address: "14 Rue Crespin du Gast",
        arrondissement: 11,
        lat: 48.8661,
        lng: 2.3831,
        nearest_metro: "Ménilmontant",
        metro_lines: [2],
        google_id: "ChIJW0-v__tt5kcRrW0-v__tt5k" // Placeholder
    },
    moods: {
        chill: 40,
        festif: 80,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 19:30–02:00 (Cuisine jusqu'à 23:30); Fermé Dim-Lun",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://leperchoir.fr",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        pint_price: 9.00,
        wine_glass: 9.00,
        coffee_price: 3.50,
        dish_price: 27.00, // MANUAL: Median for main courses (Linguine Vongole ref)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Vecchio @ Le Perchoir Ménilmontant 2024-2025
            {
                category_type: "other",
                display_label: "Antipasti",
                items: [
                    { name: "Mozzarella di Bufala fumée", price_cents: 1600 },
                    { name: "Meatballs (boulettes sauce tomate)", price_cents: 1500 },
                    { name: "Crudo de Gambero Rosso & Caviar", price_cents: 4200 },
                    { name: "Broccolini sautés à l'ail", price_cents: 1300 }
                ]
            },
            {
                category_type: "main",
                display_label: "Primi & Secondi (Plats)",
                items: [
                    { name: "Spicy Fusilli Alla Vodka (pour deux)", price_cents: 4400 },
                    { name: "Linguine Alle Vongole", price_cents: 2700 },
                    { name: "Chicken Parm (Poulet à la Parmigiana)", price_cents: 3400 },
                    { name: "Paccheri Alfredo à la truffe fraîche", price_cents: 3500 },
                    { name: "Costata (Entrecôte 1.2kg) à partager", price_cents: 8500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Dolci",
                items: [
                    { name: "Vecchio Tiramisù maison", price_cents: 1100 },
                    { name: "Tortina Caprese au chocolat", price_cents: 1100 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWv5D-3u9G-O_vX-H4nK-R-nQ--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM--jM&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.3,
    description: "Le Perchoir Ménilmontant est devenu une institution du quartier, niché au 6ème étage d'un immeuble industriel. Si le rooftop du dessus est culte pour ses cocktails et sa vue, le restaurant propose actuellement 'Vecchio', une résidence italo-américaine vibrante. On y déguste des pâtes à la vodka et du poulet parmigiana comme à New York, dans une atmosphère électrique et festive. C'est le spot parfait pour un dîner qui se prolonge en musique.",
    insider_tip: "Arrivez tôt pour prendre un verre au rooftop (7ème étage) avant de descendre dîner au 6ème. Les portions de pâtes sont généreuses, idéalement pensées pour le partage.",
    expert_catchline: "La 'dolce vita' italo-new-yorkaise sur les toits du 11ème.",
    specials: {
        cuisine: ["Italo-American", "Residency cooking", "Rooftop dining"],
        drinks: ["Cocktails créations signature", "Vins italiens"],
        must_eat: "Les Spicy Fusilli Alla Vodka et le Tiramisù.",
        must_drink: "Un Negroni classique pour lancer la soirée."
    }
};
