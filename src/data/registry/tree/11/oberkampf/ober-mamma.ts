import { SurgicalPlace } from '../../../type-definition';

export const ober_mamma: SurgicalPlace = {
    id: "poi-ober-mamma",
    name: "Ober Mamma",
    slug: "ober-mamma",
    category: "restaurant",
    subcategory: ['italien'],
    location: {
        address: "107 Bd Richard-Lenoir",
        arrondissement: 11,
        lat: 48.8644739,
        lng: 2.3701387,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJ9wPDGP1t5kcRuU-2tWgnWOQ"
    },
    moods: {
        chill: 30,
        festif: 70,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 18:15–22:30\nmardi: 12:00–14:30, 18:15–22:30\nmercredi: 12:00–14:30, 18:15–22:30\njeudi: 12:00–14:30, 18:15–22:30\nvendredi: 12:00–14:30, 18:15–22:30\nsamedi: 12:00–15:30, 18:15–22:30\ndimanche: 12:00–15:30, 18:15–22:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://www.bigmammagroup.com/fr/restaurants-italiens/ober-mamma",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 7.00,
        wine_glass: 6.50,
        coffee_price: 2.50,
        dish_price: 18, // MANUAL: Focus Primi/pâtes fraîches (13.50-20€, médiane ~17€). Pizzas d'appel (6.90-15€) pas représentatives.
        force_manual_dish_price: true,
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "other",
                display_label: "Antipasti & Fritti",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Stracciatella fondante", price_cents: 800 },
                    { name: "Poireau rôti, stracciatella, yaourt moutarde, noisettes", price_cents: 850 },
                    { name: "Insalata di cetrioli e melone", price_cents: 850 },
                    { name: "Petite Assiette Antipasti", price_cents: 890 },
                    { name: "Crocchette di melanzana, pecorino et menthe", price_cents: 950 },
                    { name: "Parmigiana di melanzane", price_cents: 950 },
                    { name: "Focaccia barese e prosciutto San Daniele", price_cents: 950 },
                    { name: "Arancini al tartufo (Truffe fraîche, mozza)", price_cents: 1050 },
                    { name: "Tiradito di branzino e stracciatella (Carpaccio bar)", price_cents: 1200 },
                    { name: "Grande Assiette Antipasti a partager", price_cents: 1250 }
                ]
            },
            {
                category_type: "main",
                display_label: "Pizzas Napolitaines (Cuit au feu de bois)",
                items: [
                    { name: "Margherita Vraie", price_cents: 690, description: "Le classique absolu à prix choc." },
                    { name: "4 Formaggi", price_cents: 890 },
                    { name: "Diavola (Épicée)", price_cents: 850 },
                    { name: "Speck al Tartuffo (Jambon Speck, fondue de truffes)", price_cents: 850 },
                    { name: "Pizza Rocca (Ø 32cm)", price_cents: 1000 },
                    { name: "Pizza Big Mamma (Mozzarella di bufala, jambon parme)", price_cents: 1200 },
                    { name: "Dancing Queen (Blanche, Fior di latte, Jambon, Champignons)", price_cents: 1500 }
                ]
            },
            {
                category_type: "other",
                display_label: "Primi (Pâtes Fraîches & Risotto)",
                items: [
                    { name: "Spaghettone allo scarpariello", price_cents: 1350 },
                    { name: "Spaghettone all’arrabbiata", price_cents: 1350 },
                    { name: "The great carbonara", price_cents: 1600, description: "La carbonara romaine dans les règles de l’art." },
                    { name: "Risotto ai funghi, onctueux parmesan", price_cents: 1700 },
                    { name: "Burratelli alla stracciatella", price_cents: 1850 },
                    { name: "Spaghettone alle vongole (Palourdes fraîches)", price_cents: 1900 },
                    { name: "Spaghetti alla puttanesca con branzino", price_cents: 1900 },
                    { name: "Mafaldine à la truffe fraîche", price_cents: 2000, description: "La pasta à la crème de truffe signature du groupe." }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Dolci (Desserts & Glaces Artisanales)",
                items: [
                    { name: "Gelato al cioccolato ou pistacchio", price_cents: 750 },
                    { name: "Il Tigramisu", price_cents: 800, description: "Servi généreusement à la louche et à la cuillère à table." },
                    { name: "Panna cotta ai frutti esotici, vanille Madagascar", price_cents: 850 },
                    { name: "Mousse al cioccolato, praliné, fleur de sel", price_cents: 900 },
                    { name: "Nocciolamisu (Tiramisu noisette)", price_cents: 900 },
                    { name: "Banoffee pie revisitée", price_cents: 900 },
                    { name: "Profiterole géante al pistacchio, chocolat chaud", price_cents: 1200 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cocktails du Bar & Boissons",
                items: [
                    { name: "San Pellegrino", price_cents: 400 },
                    { name: "Chinotto Lurisia", price_cents: 500 },
                    { name: "Summer Spritz", price_cents: 1000 },
                    { name: "Big Boy (Safran ou Balsamico)", price_cents: 1300 }
                ]
            }
        ]
    },
          images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/ober-mamma/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/ober-mamma/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/ober-mamma/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/ober-mamma/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/ober-mamma/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/ober-mamma/gallery_4.jpg"
    ]
  },
    instagram_handle: "bigmammagroup",
    verified: true,
    google_rating: 4.7,
    description: "La trattoria géante et incandescente du groupe Big Mamma (la deuxième à succès après l’East Mamma). Ici, ça crie en italien, ça découpe du jambon San Daniele sur l’énorme comptoir à l’entrée, et les pizzas napolitaines cuisent au four à bois sous la verrière avec un grand arbre encastré.",
    insider_tip: "• Pensez à lever les yeux : le majestueux bar en bois et toute l’architecture valent la photo. \n• L’attente peut être rude si vous n’avez pas réservé : venez dès l’ouverture de 18h15 pour être sûr de rentrer.\n• La Marguerita d’appel (6,90€) reste l'un des braquages gastronomiques de Paris niveau rapport qualité/prix.",
    expert_catchline: "Tout le bruit, les saveurs et la démesure de l’Italie par le géant Big Mamma.",
    specials: {
        cuisine: ["Italien"],
        drinks: ["Spritz géants explosifs"],
        must_eat: "Cuisine italienne. Difficile de ne pas céder pour l’opulente Pizza à la Truffe ou, au moment du dessert, l’incontournable Tiramisu posé au centre de la table.",
        must_drink: "Un Spritz aux fruits ou un des \"Big Boys\" mixés par leurs barmans survoltés."
    },

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine italienne. Difficile de ne pas céder pour l’opulente Pizza à la Truffe ou, au moment du dessert, l",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};
