import { SurgicalPlace } from "../../../type-definition";

export const saut_du_crapaud: SurgicalPlace = {
    id: "poi-saut-du-crapaud",
    name: "Le Saut du Crapaud",
    slug: "le-saut-du-crapaud",
    category: "restaurant",
    subcategory: ["bistrot", "mexicain", "fusion", "quartier"],
    location: {
        address: "16 Rue des Plantes, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8315957,
        lng: 2.324287,
        nearest_metro: "Mouton-Duvernet / Alésia",
        metro_lines: [4],
        google_id: "ChIJE0DvDbRx5kcRowVGzhyZJ28"
    },
    moods: {
        chill: 60,
        festif: 40,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Monday: Closed | Tuesday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Wednesday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Thursday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Friday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Saturday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Sunday: 11:30 AM – 2:30 PM (Brunch)",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://lesautducrapaud.fr/",
            label: "DÉCOUVRIR"
        }
    },
    pricing: {
        avg_budget: 30,
        is_free: false,
        pint_price: 7.50,
        wine_glass: 4.50,
        coffee_price: 2.50,
        dish_price: 20.00,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Antojitos & Entrées",
                items: [
                    { name: "Ceviche de poisson blanc (Le vrai)", price: "8.00€" },
                    { name: "Guacamole maison & totopos", price: "6.00€" },
                    { name: "La Ceviche de la Tia", price: "10.00€" },
                    { name: "Œuf parfait à l'origan", price: "10.00€" },
                    { name: "Boudin noir Christian Para", price: "10.00€" },
                    { name: "Tartare de tomates d'antan", price: "8.00€" }
                ]
            },
            {
                category: "Plats du Crapaud",
                items: [
                    { name: "Burger du Crapaud, frites maison", price: "20.00€" },
                    { name: "Pavé de thon rouge mi-cuit", price: "21.00€" },
                    { name: "Bœuf mi-cuit façon sashimi", price: "20.00€" },
                    { name: "Magret de canard façon wok", price: "20.00€" },
                    { name: "Poisson du marché, salsa verde", price: "19.50€" },
                    { name: "Plat du Midi (Unique)", price: "15.50€" },
                    { name: "Formule Midi (E+P+D)", price: "24.50€" }
                ]
            },
            {
                category: "Postres (Desserts)",
                items: [
                    { name: "Ananas rôti aux épices douces", price: "9.50€" },
                    { name: "Mousse au chocolat 72% de cacao", price: "9.50€" },
                    { name: "Crumble aux fruits de saison", price: "9.00€" },
                    { name: "Café Gourmand", price: "9.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV8_ih4RdnJvTJxujs41mbMjhpfjXEuxSiYHp5yX8ArtKCkCpczzoBLwtWfEq1ytDDIqZc-Edx07dAZCa39xgid7aK_FSGNPKmTAF-Y7PSb22XLnal0-VAQx0CFlc_sLnh3YUlHHvTaHREb0NZkd-MxXPLd62NXVD1qdyC3BBsgxPaQfyF4RAytqroMBbbYalQACklZdSvW7WpMYRfwlKLEgCFgduDSr_tP88BUSxU01ymHKO18fnryOoQQGDyGOapGeLaWHw_SMv3jaYY_xf0DJh9PA9P0iawLEXMlKB52Bg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWcyrNYZwDrxoPbmzYvgT5CW25_EJoRsS9odhRnuZtx1IWskpdxtRFQtkcAZUwaKPTB0hHonSg0LgESTEhjscdM_Dmt9SUf7UmlRLjbmhlJkjqWU_zN-t7GtJNP783vAReNr-eJWplQrPsIigldLiTrjqtPGxAwR5eYbtrDe7fKzFIdiQQAFSeb7v_CmXnpwS8xdU_GBxLjdAYrmGH9wK2shdsDuSzHT2_6pSuseqERXrGwCepHagzwuu27GAsmNFfl8Gkduv4kJsEcXi4A7BG08Avhal9viUNPhNXgARVXhQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.6,
    description: "Le Saut du Crapaud est la pépite fusion de la rue des Plantes. Sous la houlette du chef mexicain Marco Paz, ce bistrot de quartier dépoussière les codes en injectant des touches ensoleillées du Mexique dans le terroir français. L'ambiance y est vibrante, colorée, à l'image des assiettes qui swinguent entre un boudin noir d'orfèvre et un ceviche d'une fraîcheur absolue. C'est l'adresse idéale pour ceux qui s'ennuient des bistrots trop classiques et cherchent une étincelle de créativité sans chichis.",
    insider_tip: "Ne faites pas l'impasse sur le Brunch du dimanche, c'est l'un des plus originaux du quartier. Leurs cocktails à base de Tequila et Mezcal (si vous demandez gentiment) sont également de petites merveilles pour débuter la soirée.",
    expert_catchline: "Le bistrot fusion qui fait pétiller la rue des Plantes.",
    specials: {
        cuisine: ["Bistrot Fusion", "Franco-Mexicain"],
        drinks: ["Vins de Propriétaires", "Mezcals"],
        must_eat: "Le ceviche de la Tia et le burger du Crapaud.",
        must_drink: "Un vin blanc frais et sec pour accompagner le ceviche."
    }
};
