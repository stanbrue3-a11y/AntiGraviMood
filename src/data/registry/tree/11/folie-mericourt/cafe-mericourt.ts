import { SurgicalPlace } from "../../../type-definition";

export const cafeMericourt: SurgicalPlace = {
    id: "poi-cafe-mericourt",
    name: "Café Méricourt",
    slug: "cafe-mericourt",
    category: "restaurant",
    subcategory: ["Coffee Shop", "Brunch", "Australien", "Méditerranéen"],
    location: {
        address: "22 Rue de la Folie Méricourt, 75011 Paris",
        arrondissement: 11,
        lat: 48.8624,
        lng: 2.3725,
        nearest_metro: "Saint-Ambroise",
        metro_lines: [9],
        google_id: "ChIJOX-_x3ZshkcR_9Xl3Qk_V_O"
    },
    moods: {
        chill: 100,
        festif: 0,
        culturel: 10
    },
    pricing: {
        avg_budget: 22,
        dish_price: 16.00, // MANUAL: Satiety Unit (Main dish ~14€ + coffee/buffer)
        last_updated: "2026-03-08",
        menu_items: [
            {
                category_type: "other",
                display_label: "The Brunch Selection (All Day)",
                items: [
                    { name: "Shakshuka Traditionnelle", price_cents: 1450, description: "Œufs pochés, sauce tomate épicée, feta, herbes." },
                    { name: "Green Eggs & Feta", price_cents: 1350, description: "Œufs brouillés au pesto de herbes, feta, levain." },
                    { name: "Avocado Toast au Zaatar", price_cents: 1300, description: "Pain au levain, avocat, huile d'olive, sésame." },
                    { name: "Breakfast Bun (Iconique)", price_cents: 1250, description: "Bacon, œuf, avocat, salsa piquante, brioche." },
                    { name: "Congee Bowl", price_cents: 1100, description: "Riz mijoté, gingembre, œuf mariné, oignons frits." },
                    { name: "Green Bowl (V)", price_cents: 1200, description: "Légumes de saison, quinoa, sauce tahini." },
                    { name: "Granola Maison & Yaourt Grec", price_cents: 1200, description: "Fruits de saison et miel de fleurs." },
                    { name: "Savory Granola", price_cents: 1150, description: "Version salée avec herbes et labneh." },
                    { name: "Bircher Muesli", price_cents: 1000 },
                    { name: "Focaccia au Lamb Pulled", price_cents: 1400 },
                    { name: "Tartine Avocat & Gravlax", price_cents: 1550 }
                ]
            },
            {
                category_type: "other",
                display_label: "Sweets & Pastries",
                items: [
                    { name: "Pancakes Fleur d'Oranger", price_cents: 1200, description: "Maple cream et ricotta au citron." },
                    { name: "Cinnamon Roll (Maison)", price_cents: 550 },
                    { name: "Carrot Cake & Glaçage", price_cents: 650 },
                    { name: "Apple Crumble Tiède", price_cents: 750 },
                    { name: "Tarte Pécan & Caramel", price_cents: 800 },
                    { name: "Cookies Chocolat & Fleur de Sel", price_cents: 400 },
                    { name: "Biscuit Artisanal", price_cents: 350 }
                ]
            },
            {
                category_type: "other",
                display_label: "Specialty Coffee & Tea (Hot)",
                items: [
                    { name: "Espresso (Terroir)", price_cents: 250 },
                    { name: "Cappuccino Onctueux", price_cents: 500 },
                    { name: "Flat White", price_cents: 500 },
                    { name: "Matcha Latte (Premium)", price_cents: 600 },
                    { name: "Chai Latte Maison", price_cents: 550 },
                    { name: "Latte de Saison", price_cents: 550 },
                    { name: "Thé Earl Grey", price_cents: 500 },
                    { name: "Thé Genmaïcha (Vert)", price_cents: 500 },
                    { name: "Thé au Jasmin", price_cents: 500 },
                    { name: "Dirty Chai (Espresso shot)", price_cents: 650 }
                ]
            },
            {
                category_type: "other",
                display_label: "Cold Drinks & Juices",
                items: [
                    { name: "Fresh Carrot & Ginger Juice", price_cents: 550 },
                    { name: "Fresh Orange Juice", price_cents: 500 },
                    { name: "Iced Latte", price_cents: 550 },
                    { name: "Cold Brew (Seasonal)", price_cents: 600 },
                    { name: "Citronnade Maison", price_cents: 500 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Alcohol & Brunch Cocktails",
                items: [
                    { name: "Bloody Méricourt", price_cents: 1100 },
                    { name: "Mimosa (Premium Bubbles)", price_cents: 950 },
                    { name: "Bière Artisanale (Pression)", price_cents: 700 },
                    { name: "Verre de Vin Blanc", price_cents: 750 },
                    { name: "Verre de Vin Naturel Rouge", price_cents: 800 }
                ]
            }
        ]
    },
    practical: {
        reservation_policy: "sans_resa",
        accessibility: true,
        wifi: false,
        terrace: true,
        vegan_friendly: true,
        opening_hours_raw: "Lun-Ven: 08:30–16:00\nSam-Dim: 09:30–17:00",
        main_action: {
            type: "site",
            url: "https://www.cafemericourt.com/",
            label: "VOIR MENU"
        }
    },
    description: "Le Café Méricourt est le petit frère du célèbre Café Oberkampf. Dans un espace plus vaste et lumineux, il déploie une carte de brunch aux accents méditerranéens et australiens. Les shakshukas y sont légendaires, tout comme le café de spécialité torréfié localement. C'est le spot idéal pour un petit-déjeuner tardif ou un déjeuner relax dans une atmosphère épurée et conviviale.",
    expert_catchline: "Le temple du brunch et de la shakshuka dans une ambiance coffee shop australienne.",
    insider_tip: "• La shakshuka est le plat le plus demandé du lieu, et pour cause : elle est excellente.\n• Pas de réservations le weekend, attendez-vous à un peu de file d'attente sur le trottoir.\n• Leur jus vert Kale/Pomme est le refresh parfait pour lancer la journée.\n• Les pancakes à la fleur d'oranger sont d'une légèreté incroyable.",
    specials: {
        cuisine: ["Shakshuka", "Brunch", "Pancakes"],
        drinks: ["Filter Coffee", "Flat White", "Green Juice"],
        must_eat: "La Shakshuka et le Breakfast Bun."
    },
    images: {
        hero: "https://lh3.googleusercontent.com/p/AF1QipN_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020",
        gallery: [
            "https://lh3.googleusercontent.com/p/AF1QipN_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ_XQ=s1360-w1360-h1020"
        ]
    },
    verified: true,
    google_rating: 4.5
};
