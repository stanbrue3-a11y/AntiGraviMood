import { SurgicalPlace } from "../../../type-definition";

export const creperie_de_pont_aven: SurgicalPlace = {
    id: "poi-creperie-de-pont-aven",
    name: "Crêperie de Pont-Aven",
    slug: "creperie-de-pont-aven",
    category: "restaurant",
    subcategory: ["crêperie", "breton", "traditionnel", "galettes biologiques", "restaurant"],
    location: {
        address: "54 Rue du Montparnasse, 75014 Paris",
        arrondissement: 14,
        lat: 48.8421557,
        lng: 2.325469,
        nearest_metro: "Edgar Quinet",
        metro_lines: [6],
        google_id: "ChIJqT2_Ecxx5kcRew-rJ9ZyNLI"
    },
    moods: {
        chill: 90,
        festif: 10,
        culturel: 5
    },
    practical: {
        opening_hours_raw: "Lundi: 11:30–23:00 | Mardi: 11:30–23:00 | Mercredi: 11:30–23:00 | Jeudi: 11:30–23:00 | Vendredi: 11:30–23:00 | Samedi: 11:30–23:00 | Dimanche: 11:30–23:00",
        reservation_policy: "sans_resa",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://creperiedepontaven.fr/",
            label: "MENU"
        }
    },
    pricing: {
        avg_budget: 18,
        is_free: false,
        pint_price: 0,
        wine_glass: 0,
        coffee_price: 2.20,
        dish_price: 13.80, // FORMULE SATIÉTÉ MIDI (Galette + Crêpe + Bolée)
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Galettes de Sarrasin BIO (Simples & Végé)",
                items: [
                    { name: "Beurre 1/2 sel BIO", price: "6.50€" },
                    { name: "Oeuf BIO", price: "7.00€" },
                    { name: "Jambon & Fromage", price: "8.00€" },
                    { name: "Galette Gast (Fromage, champignons, oignons)", price: "9.50€" },
                    { name: "Galette Vegi (Légumes de saison, fromage)", price: "10.00€" }
                ]
            },
            {
                category: "Galettes Spéciales (Signatures)",
                items: [
                    { name: "Pont-Aven (Saumon, épinards, crème, citron)", price: "11.50€" },
                    { name: "Gwazenn (Noix de St-Jacques, champignons, crème)", price: "12.50€" },
                    { name: "Korkidu (Camembert, pommes poêlées, Andouille de Guémené)", price: "11.00€" },
                    { name: "Roué (Foie gras, miel, confit d'oignon, noix)", price: "13.50€" },
                    { name: "Galette Kloug (Poulet curry, champignons, crème)", price: "9.70€" },
                    { name: "Galette Bergère (Chèvre, miel, noix, salade)", price: "10.50€" },
                    { name: "Galette Scandinave (Saumon fumé, crème ciboulette)", price: "12.00€" }
                ]
            },
            {
                category: "Formules Satiété (Le Dogme)",
                items: [
                    { name: "Formule Midi (Galette + Crêpe + Bolée de Cidre)", price: "13.80€", description: "L'unité de satiété standard MOELLE 2026." },
                    { name: "Formule Express", price: "11.00€" }
                ]
            },
            {
                category: "Crêpes Froment BIO (Sucrées)",
                items: [
                    { name: "Caramel au beurre salé maison", price: "5.50€" },
                    { name: "Crêpe Charly (Spéculoos, glace vanille, chantilly)", price: "7.50€" },
                    { name: "Beurre & Sucre Cassonade", price: "3.50€" },
                    { name: "Crème de Citron maison", price: "5.00€" },
                    { name: "Crème d'Orange maison", price: "5.00€" },
                    { name: "Chocolat maison", price: "5.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWK1RBrxLA0XMdO34L3pUyjImx9ztGkOsaJgDxODxmpX739zRsOvJLPSsXJ6exZHuGtws-J-c27A7RaKD1ttk_9W4yAxs02tjd-4Q0kQIJs0Uwfe9BoNQY4N3Ik3dp3D0rKZteT_rdZvtgkMmDw3knES3437KM1JuZaveUZxFUbZxVpjG7Oei4-0KiXplJtnvDC2Ljov9itKFJ4ya0zPqPb93N-1Ru07YyW82HsgyJw42ObSW_rQIITadE8kFzHdB-nVN0FOPFQ3WhI90bEicxy8ttKydCyKfIEgCR1umL29g&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVhEczPKlpWdoj6QnGwb0oyY8KvPI8LfCvxIcxnKi2rD2dDbXeCdJmPZHS0McyPot8hcHC1XScDBrKb9GR8noSJTibt3kaONND51hmLw4XK36N9exUW11-mkFUka0BG-r6NdNQGllPzZ7IPAKpU3MEtPHM21omPIYv5At-S7O-W_QL2RBRSZkJLX2vH8cVyebFfYChbUznDC8t0KvDXAlAGZbSfcL58_Eh9tMbxMMPH6_7sMZWRUxRweH4Kpku3apQBNw3Ht0aZSq2cpaEx7cttxyvq2JFsaCryQ4JInNemCw&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWEBqJmXXxSszF9at-9sqC-cP_9e3ruFVOqJWm6QKsJgFv2TEjmUHwQVYPMNytUevBs8KG_DSZbjWf1OOfDIIIjMzl52uTJnc3liBiuKbeAzBjUkrxFm91_2tjAcRQQdTSFTl6HSUIKE0PLpJx3dRBuzkCFnDyQhzRh1RB5MD4IY3n3C9F8NhryS1-BGuLiDKqsq8V8lF_fULrAw9rfGw7xBlnf5A6cR1F26kYcd1Tje_llKn7RWtKwC6psx_CeQDLaCmNEqium1D8Kt1HP55avE374ZrmoPKLwlH72ToafWTqOZ-Y3eyxMEF5HX_bK4ak_VYtcVh0t79dtZToq-zjOKwCwt32hCy_ykRjCp1t3uPG23q3Tl3nPHJ0tTfLxNwH6X-wt9T013UKw4Rm_jkJIHr0ZDIQbcP-y0Edsd_g5WwcNmQNcgVGS53wClQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.4,
    description: "Installée dans la célèbre 'rue des crêperies' de Montparnasse, la Crêperie de Pont-Aven se distingue par son utilisation de farines de sarrasin et de froment biologiques. L'accueil y est chaleureux et les recettes sont executées dans la plus pure tradition bretonne. C'est l'un des meilleurs rapports qualité-prix du quartier pour un repas complet et sans fioritures.",
    insider_tip: "Ne vous laissez pas tromper par la longue file d'attente, le service est d'une rapidité redoutable. La Galette Korkidu avec son Andouille de Guémené est une merveille de caractère breton.",
    expert_catchline: "La tradition bretonne bio au cœur de Montparnasse : efficace, généreux et authentique.",
    specials: {
        cuisine: ["Traditionnelle bretonne", "Farines bio", "Andouille de Guémené"],
        drinks: ["Large choix de cidres bretons et normands", "Bolées à l'ancienne"],
        must_eat: "La Galette Pont-Aven et la Crêpe au Caramel Beurre Salé maison.",
        must_drink: "Une bolée de cidre brut artisanal de la maison."
    }
};
