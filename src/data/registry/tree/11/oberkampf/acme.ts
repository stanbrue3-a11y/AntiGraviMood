import { SurgicalPlace } from '../../../type-definition';

export const acme: SurgicalPlace = {
    id: "poi-acme",
    name: "Acmé",
    slug: "acme",
    category: "restaurant",
    subcategory: ["gastronomique", "créatif", "parisien", "restaurant"],
    location: {
        address: "16 Rue de l'Asile Popincourt",
        arrondissement: 11,
        lat: 48.8596657,
        lng: 2.3734066,
        nearest_metro: "Saint-Ambroise",
        metro_lines: [9],
        google_id: "ChIJzztiaENt5kcRcdB70FUQ87E"
    },
    moods: {
        chill: 40,
        festif: 10,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Monday: Closed\nTuesday: 7:30–11:00 PM\nWednesday: 12:00–2:30 PM, 7:30–11:00 PM\nThursday: 12:00–2:30 PM, 7:30–11:00 PM\nFriday: 12:00–2:30 PM, 7:30–11:00 PM\nSaturday: 12:00–2:30 PM, 7:30–11:00 PM\nSunday: 12:00–2:30 PM",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://acmeparis11.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 58,
        is_free: false,
        pint_price: 0,
        wine_glass: 11.00,
        coffee_price: 4.50,
        dish_price: 33, // MANUAL: Menu Déjeuner (étalon pour le quartier), le soir étant à 51€/60€
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle)
            {
                category_type: "tasting_menu",
                display_label: "L'Univers Margot Delacroix (Menus Dégustation)",
                items: [
                    { name: "Menu Déjeuner (E+P+D)", price_cents: 3300, description: "Entrée, plat et dessert (ou fromage) au choix de la cheffe." },
                    { name: "Menu 'L'Ode au Végétal' 5 Temps", price_cents: 5100, description: "4 étapes salées et un dessert signature (Midi & Soir)." },
                    { name: "Menu 'L'Ode au Végétal' 6 Temps", price_cents: 6000, description: "4 étapes salées, fromage ou pré-dessert, et dessert signature." },
                    { name: "Accord Mets & Vins (4 verres)", price_cents: 4000 },
                    { name: "Accord Mets & Boissons Sans Alcool", price_cents: 3000, description: "Infusions froides, kéfirs et jus travaillés." }
                ]
            },
            {
                category_type: "other",
                display_label: "Exemples de Créations Florales & Graphiques (2025)",
                items: [
                    { name: "Poireaux crayons au barbecue, dashi & katsuobushi", price_cents: 1400, description: "Une explosion d'umami équilibrée par le brûlé." },
                    { name: "Stracciatella, betteraves multicolores, aneth & ponzu", price_cents: 1300 },
                    { name: "Radis & Courgettes au pesto de noisettes & sorbet herbes", price_cents: 1200 },
                    { name: "Tatin de céleri-rave, jus végétal corsé", price_cents: 1800, description: "Un plat signature déroutant, terreux et délicat." },
                    { name: "Lieu jaune de ligne, embeurrée de chou & agrumes", price_cents: 2600 },
                    { name: "Volaille fermière rôtie aux bourgeons de sapin", price_cents: 2400 },
                    { name: "Gnocchis à la sauge et beurre noisette", price_cents: 1600 },
                    { name: "Carotte confite, miso de pain rassis", price_cents: 1400 },
                    { name: "Sériole marinée, condiment citron vert et tagète", price_cents: 1600 },
                    { name: "Navet Kabu glacé, émulsion foin", price_cents: 1200 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs & Affinages",
                items: [
                    { name: "Cheesecake à la rose & chèvre frais (Signature)", price_cents: 1100, description: "Mélisse, brisures de meringue et fleurs comestibles." },
                    { name: "Pomme confite, cardamome & caramel d'algues", price_cents: 1000 },
                    { name: "Panna cotta crémeuse, agrumes & fleurs", price_cents: 1000 },
                    { name: "Sélection de fromages affinés d'Ile-de-France", price_cents: 1200 },
                    { name: "Mignardises florales (Guimauve mélisse, pâte de fruit coing)", price_cents: 0 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs Maison & Vins Libres",
                items: [
                    { name: "Kéfir de fruits du moment", price_cents: 600 },
                    { name: "Infusion froide verveine-menthe", price_cents: 550 },
                    { name: "Verre de vin nature (sélection)", price_cents: 1100 },
                    { name: "Café de spécialité (Terres de Café)", price_cents: 450 },
                    { name: "Thé grand cru", price_cents: 600 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVxEpn2WLWaP4ks-ZXKl9khrs-9kvqchR05L1mE4kUkG3FLSLNoDT-yKYxawZupwHQKPVMeKO5HatUf2T9s7YAamKLzygfhOYgh9MCPVa8Pztvzy-jsLj5d4E7RkwMPb47rwEDmCw_KNN8uPzZxE1PkuE_u_i-M0Jj14x7aRi4mEXvO_9uO_BHxaAWSi-MSbdMbV1OH8fFjxuQN2nsvh5amXexPbxAvXdMfRDbCzsZDcrehD21OWvjPn-yPDNbRLUpX2qxFoSMr8eEa0iDDCNeWKzaPcS67NnCtpUu-W_DZ5XgO4OSPh4oMvAt8p-rQFsZw81n9iJ8cu_VhTNHTZH3XnaAxhq5UpGRqaFfeDGxnap_DexFEc-FVC4ty2vehA3udqZyT0IEjTDZ30ZhomBSQUJXmueikd6eA4GpZsvFYkbalmIGOvSVWbwZq9f4dso9uhuizhHltmLY-cRdXIE9ZKn5FM2K4KfTf07VU0kuQMnWpZ-kZefdtOWFAr2HShzj6BpYnmgVWs4Q1cQRjl33S5gI2su0Fz0A6X42wJJ-BiAh6-RaeHip1UVVr8hSCfASce8_HwC29HA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWXqz6Pc4Q5hBERpbPXCWFDBU_ORB-2aR9-aKy2uESN1PeVMeDuUHrZwSb6t6y__QJE1OypoV-lAcUrp9nJSYS_JEdfFGwU6XDnGDcbsI6rXpXFfryD6qBN2vHtkd6U1mbI2v7YyRLvL7HodocV6ZLt1C8TPoEbzEDgqqT-CHPZSYx-_rJ05JKMzyvb6oBcB_msQj4I8JCj9NcaMpqrp1MSllFgaQeYHXMJVgOsakF4pvcm9_sNDVLXKolVJ06pDXPpUeiK3P8RzZzz_S4dPzUV4Vsa7F8VNvV6qoBpiPS5BlVOK0ql1KFdYYFVQSN_I60zXtRHbrS76b1nMOaPFgS3klWfrS627v2w5BhciZ8W68C5TtxfCR_fW-yafJdcnk8CgGgNzkYePGxXrK2fTWy9iV9Yb6Gro4m4HOVEeFyk_mI48gIchZoC-wmzwQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVMk1q8MtKiZYiVOFMSrNYlgW0aGjSQk4iRxayTnCltrxMKoJ2u1GqSSyujZFbFzMeXU-ijIW_GhfotuosjkAxkMKXa2G2hCc1Auuwc7uP1yExCwqs6nobmNOvz6C_PZpm7BGV_HVcxYPfEJ34gqW51gHtr3iVGzsZklbJaohq3q7qQoUQTFHn6537WdZF_zWPGr9yYmpS58JGoTOzlMNaUHjcngxwbFMk5dYiDW0lDHCHU9BBLEm33uBkopdohoIMk7FBxHXucpbaDre9qfF3QsvhjINF3iF1QeMeBSM3FOKCiIO4gP6ZLgN1vF5PlbNcOL9ledGbXDqvZReQJDaMKsXGUdIGb3m8jGbR0MtldTFVLyByqyDlsQM1uavIITGuANYDp5XgYl9RKTHhFVgTytKq9SSh7D-QsFOkoGVmHtA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    verified: true,
    google_rating: 4.9,
    description: "Acmé est le projet personnel de la cheffe Margot Delacroix, une adresse intimiste et lumineuse où la cuisine française est repensée avec une grande délicatesse florale et graphique. Ici, pas de carte fixe mais des menus 'carte blanche' qui subliment le végétal et les produits de terroir avec des techniques de haute gastronomie (fermentation, brûlis, infusions), le tout dans une ambiance chaleureuse et décontractée.",
    insider_tip: "• C'est l'un des meilleurs rapports qualité-prix gastronomiques du quartier (menu 5 temps à 51€).\n• Demandez l'accord sans alcool : la cheffe travaille des extractions de plantes fascinantes.\n• La tarte Tatin de céleri est une expérience gustative déroutante et géniale.\n• Les tables sont peu nombreuses, la réservation est impérative plusieurs jours à l'avance.",
    expert_catchline: "Haute gastronomie florale, créative et abordable menée par la talentueuse cheffe Margot Delacroix.",
    specials: {
        cuisine: ["Menu Carte Blanche 5/6 temps", "Tatin de céleri", "Cuisine florale et graphique", "Produits de saison sourcés"],
        drinks: ["Vins de vignerons", "Cocktails signatures", "Infusions froides maison"],
        must_eat: "L'assiette de poireaux crayons au dashi et katsuobushi : une démonstration de maîtrise du goût umami appliqué au végétal.",
        must_drink: "Le Kéfir de fruits maison, toujours surprenant et parfaitement équilibré pour accompagner les étapes salées."
    }
};
