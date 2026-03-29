import { SurgicalPlace } from '../../../type-definition';

export const pierre_sang_gambey: SurgicalPlace = {
    id: "poi-pierre-sang-gambey",
    name: "Pierre Sang on Gambey",
    slug: "pierre-sang-gambey",
    category: "restaurant",
    subcategory: ["gastronomique", "fusion", "franco-coréen", "restaurant"],
    location: {
        address: "6 Rue Gambey",
        arrondissement: 11,
        lat: 48.8649889,
        lng: 2.3722097,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJJdqGt_xt5kcRwt-MJujFxjE"
    },
    moods: {
        chill: 60,
        festif: 10,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "lundi: 19:00–23:00\nmardi: 19:00–23:00\nmercredi: 19:00–23:00\njeudi: 19:00–23:00\nvendredi: 12:00–14:30, 19:00–23:00\nsamedi: 12:00–14:30, 19:00–23:00\ndimanche: 12:00–14:30, 19:00–23:00",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://pierresang.com/gambey/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 70,
        is_free: false,
        pint_price: 0,
        wine_glass: 10.00,
        coffee_price: 0,
        dish_price: 60, // MANUAL: Menu unique Découverte à ~60-63.50€ ou Freestyle à ~51.50€
        menu_type: 'fixed',
        last_updated: "2026-03-07",
        menu_items: [
            {
                category_type: "tasting_menu",
                display_label: "Les Menus (Créations sans carte)",
                items: [
                    { name: "Menu Freestyle (Dejeuner/Soir - 4 services)", price_cents: 5150, description: "L'expression libre du chef selon les arrivages (Entrée/Plat/Fromage/Dessert)." },
                    { name: "Menu Découverte (Soir - 6 services)", price_cents: 6350, description: "Expérience complète de la cuisine fusion de Pierre Sang Boyer." }
                ]
            },
            {
                category_type: "tasting_menu",
                display_label: "Signatures (Surprise Menu - Extraits)",
                items: [
                    { name: "Amuse-bouche : Champignons & crumble parmesan", price_cents: 0 },
                    { name: "Saumon fumé, navets pickles & sauce Kimchi", price_cents: 0 },
                    { name: "Poulpe frit, purée de vitelotte & miso", price_cents: 0 },
                    { name: "Saint-Pierre, choux asiat' & condiment citron-réglisse", price_cents: 0 },
                    { name: "Magret de canard, betterave & jus Gochujang", price_cents: 0 },
                    { name: "Comté affiné, sorbet Poivre de Timut", price_cents: 0 },
                    { name: "Dessert : Mangue, passion & sorbet coriandre", price_cents: 0 },
                    { name: "Thé vert coréen sélectionné", price_cents: 0 },
                    { name: "Mignardises de fin de repas", price_cents: 0 },
                    { name: "Beurre au Kimchi maison & pain de campagne", price_cents: 0 },
                    { name: "Eau micro-filtrée", price_cents: 0 },
                    { name: "Consommé de seiche & Kimchi blanc", price_cents: 0 },
                    { name: "Ganache Sésame Noir & Miso", price_cents: 0 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUlM3htbPfpVebbAeVemBxOO5w2YRw7MNVBmk7ztY70lpgkU1fRR2kbOQ4VzNoOWAmjRXH5lWnngcvjXYlNsDQ7rOrk01w9d5Nc_MgRDbbfQAbh4UM7OiPsOBCLfGsvbMkq4ZLETUZV1e6qWiYQB3uEsRxxKUrfEH7fN7fjTqeKpHfnF1dk5yuy7Vy08zaZRuza6THPuQ5GXhcopjuVblWoi3c6y1S9Vrgxia3tmwRr7cRpcRabgVnmIp6pLXFf3KztT5yIh3RhVngppsUxleh59X0b1ZGo0p6-JHw46ubt7A&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUo_S-aUKQqmvaMtscxIWcnKRcwI06z8pQ9YrOvUZan1aMVeSrAMg8ktxpD9f8382xE2N1GxOCU-JU176JaKqgvDNGXN_eE_WzvUhHFmJuDPuIEDPT3onE8uMcuFeXlpgbxGpCeUTx3VznaDZOr5FLVnd5ImqsKEKOR5JhxPE-3fHkXTjSOz49BMGkwVM8y4Y2jgFq6QJZ_t0F9rsS1Xz0bMYH8I7Qj60mZ3bdWYe8Skryrxjq9obTNlaIZ2f-_bakGHSW7tagZ2X1Z8HhBCWc1__fRUXbbCTnSMslLV1djKA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU9N4cM0CL_WN-QtAWlmLmsnEsFZVsj5mlj_plPAMnSdHbgGBWiywwYKky8g6d6lWYyFJuJchFfCU0r_L9pxUU9NcHEKpbMV5biPkTZHibJ9DhxSBPs_KnB1PfcIvDu3TQsunxcLGagXLfqGEafpr8HDSteHtbEnYpnfqhmLk7NZM1ZnVXHaRvJHXixjJ-tOxcGeuPZwtkiHykOg9QMyzbRsAjXzNeBfTic0l9R8HoBG9g2PtRMiXd21s6a3pCUFFMe8BT1es4esw42iDo1yPssPaFVgEfgPLGpBIBMsNEixCqiAbZIrPlNJ16yx72gGdbQpKqxdxF3Hkz9RwsChvUXQgVT6hrKyRg_PQ_rPQOY51f9urArJeNlMvqDWApfa4IlH6EW7BR3sotD7trxNl5kVW46ykSM9xwggxluRk3PGTQ9htYiUXE13FpEIX2c&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "pierre_sang",
    verified: true,
    google_rating: 4.7,
    description: "Installé rue Gambey à côté de son restaurant phare, cette antenne de Pierre Sang se concentre sur l'intimité, avec des menus dégustation créatifs toujours portés la signature franco-coréenne de l'ancien Top Chef. Tout se déguste à l'aveugle, pour éduquer le palais dans une atmosphère extrêmement léchée.",
    insider_tip: "• Mangez, puis devinez ! C'est le principe de Pierre Sang : on vous présente un plat, vous le dégustez, puis l'équipe vient valider votre pronostic sur les ingrédients.\n• La salle est petite et intimiste comparée au grand frère d'Oberkampf, prenez bien vos réservations à l'avance.\n• Idéal pour les repas en duo ; l'expérience de dégustation à l'aveugle devient un jeu.",
    expert_catchline: "Dégustation à l'aveugle ludique et pointue, croisant le terroir français avec les racines coréennes.",
    specials: {
        cuisine: ["Menu Découverte à l'aveugle", "Cuisine franco-coréenne décomplexée"],
        drinks: ["Large sélection de vins d'auteur (+ de 130 ref)"],
        must_eat: "L'accord est obligatoire, plongez les yeux fermés dans le Menu Découverte en 6 services.",
        must_drink: "Laissez le sommelier de la maison faire l'accord Mets & Vins surprise pour 40€ la série de verres."
    }
};
