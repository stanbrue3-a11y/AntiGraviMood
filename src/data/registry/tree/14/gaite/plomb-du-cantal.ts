import { SurgicalPlace } from "../../../type-definition";

export const plombDuCantal: SurgicalPlace = {
    id: "poi-plomb-du-cantal-gaite",
    name: "Le Plomb du Cantal",
    slug: "le-plomb-du-cantal-gaite",
    category: "restaurant",
    subcategory: ["auvergnat", "traditionnel", "genereux", "terrasse", "institution", "parisien"],
    location: {
        address: "3 Rue de la Gaîté, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8406423,
        lng: 2.324535,
        nearest_metro: "Gaîté",
        metro_lines: ["13"],
        google_id: "ChIJQ4R4kctx5kcR-FcGt54DySs"
    },
    moods: {
        chill: 50,
        festif: 60,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Monday: 7:00 AM – 12:00 AM | Tuesday: 7:00 AM – 12:00 AM | Wednesday: 7:00 AM – 12:00 AM | Thursday: 7:00 AM – 12:00 AM | Friday: 7:00 AM – 12:00 AM | Saturday: 7:00 AM – 12:00 AM | Sunday: 7:00 AM – 12:00 AM",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "https://leplombducantal-gaite.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        dish_price: 19,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Spécialités de l'Aubrac",
                items: [
                    { name: "Aligot Traditionnel Monté en direct", price_cents: 1850, description: "La spécialité maison, servie avec saucisse fraîche." },
                    { name: "Truffade Dorée à la Tome", price_cents: 1950 },
                    { name: "Saucisse fraîche d'Auvergne & Aligot", price_cents: 2000 },
                    { name: "Chou Farci à l'Aveyronnaise", price_cents: 1900 },
                    { name: "Tripoux d'Auvergne (les 3)", price_cents: 2100 },
                    { name: "Pavé de Boeuf de l'Aubrac (250g)", price_cents: 2450 },
                    { name: "Entrecôte Nature (330g)", price_cents: 2600 },
                    { name: "Côte de Boeuf (500g) pour amateurs", price_cents: 3400 },
                    { name: "Magret de Canard Entier (380g)", price_cents: 2800 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées & Fromages",
                items: [
                    { name: "Planche de Charcuterie d'Auvergne", price_cents: 1700 },
                    { name: "Salade de Canard Fumé", price_cents: 1450 },
                    { name: "Jambon Cru de Montagne", price_cents: 1200 },
                    { name: "Assiette de 5 Fromages AOP", price_cents: 1350 },
                    { name: "Cabécou AOP (les 2)", price_cents: 850 },
                    { name: "Terrine de Campagne Maison", price_cents: 900 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts Traditionnels",
                items: [
                    { name: "Tarte aux Myrtilles Sauvages", price_cents: 850 },
                    { name: "Coupe de Glace (3 boules)", price_cents: 900 },
                    { name: "Mousse au Chocolat", price_cents: 750 },
                    { name: "Crème Brûlée Vanille", price_cents: 800 },
                    { name: "Baba au Rhum", price_cents: 950 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUo0Agi-3Hv8m9zUIHKSwoB6lOepgeOu7nIYKmEVYp3f0sgXg5k2gU818_MOFIHXhTINrDdyPIzIbTGwsikoOCOHkaJADUlpYWxJBgTCOSDaAPDngBXH1CFjo7_RUxohQY09qEmWrZw77ok3f3E7XFxABZnVQQZ9MmJ30UFFYwm3Kr4OsoM_OlkyhElfWJuwSCr9p_59WkC4JRpP1O7lNZYI8GMYiKCd-lLagt0QN0tl5fS47ZEHMy_VKQ3hUZy69oh4da5DDCVi1mF3S49xPvot_qE8C8YZfcoKHKXawj3dw&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU61m0GdTkT8edA6zO0FjzvVHrypl894umfbGw3_UWURZfg55ROgSHz0KmzjKEZwkCf-Q3RhhpoYVteoUEuySAXTQQC7y-hHCho_0Y4nEwxMRFwPzBA8Z4U1KsMvbCVe7KT1X-D4OFMIdjvPF1cHZm4eR4URXd7iQeia22biI8FKczsM7ky0OZQALuDTVjDTvVgkSMqoWWvu_ntewMFdb2Pe-3JkXCwBHBQpGJVbMZTAKkC4LSwtS4YozxjVNFToHtw1CCR2P4NXOWZw4dJih5XwHs8T4fLi1zGkIdgoG4_u4020urDaFJgrTkVmfgsMlfVTzuu-Z0sxVB2KfWI0hcxIe0npyfJRZOMyZGfbQCrZdhlGL4F5GuyH4BwC5n6gNYmeVMo1YJfvU8RieX4z5UQo78DQBHuWYjFzAvcaHiycAvfmtVpXWfX6q4MQ6Bf&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.3,
    description: "Le Plomb du Cantal est l'ambassade la plus authentique (et la plus généreuse) de l'Auvergne à Paris. Situé dans la bouillonnante rue de la Gaîté, ce restaurant est célèbre pour son aligot et sa truffade, étirés avec virtuosité sous les yeux des clients. Le décor est rustique, les assiettes débordent et l'ambiance est celle d'une fête de village à Laguiole. C'est l'endroit idéal pour les très grosses faims et les amateurs de gastronomie de terroir sans concession, servis dans une atmosphère bon enfant qui ne désemplit jamais.",
    insider_tip: "Visez le service continu si vous voulez éviter la file d'attente monumentale aux heures de pointe. Les portions frolent le gargantuesque, donc ménagez vos efforts sur l'entrée si vous voulez voir la fin de votre plateau d'aligot.",
    expert_catchline: "Le temple de l'aligot et de la truffade au coeur de la Gaîté.",
    specials: {
        cuisine: ["Auvergnate", "Terroir"],
        drinks: ["Vins du Cantal", "Bière Artisanale"],
        must_eat: "L'Aligot Saucisse, évidemment.",
        must_drink: "Un verre de vin rouge de l'Aveyron."
    },
    source: "expert_human"
};
