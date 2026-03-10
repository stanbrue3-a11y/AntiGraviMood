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
                category: "The Brunch Selection (All Day)",
                items: [
                    { name: "Shakshuka Traditionnelle", price: "14.50€", description: "Œufs pochés, sauce tomate épicée, feta, herbes." },
                    { name: "Green Eggs & Feta", price: "13.50€", description: "Œufs brouillés au pesto de herbes, feta, levain." },
                    { name: "Avocado Toast au Zaatar", price: "13.00€", description: "Pain au levain, avocat, huile d'olive, sésame." },
                    { name: "Breakfast Bun (Iconique)", price: "12.50€", description: "Bacon, œuf, avocat, salsa piquante, brioche." },
                    { name: "Congee Bowl", price: "11.00€", description: "Riz mijoté, gingembre, œuf mariné, oignons frits." },
                    { name: "Green Bowl (V)", price: "12.00€", description: "Légumes de saison, quinoa, sauce tahini." },
                    { name: "Granola Maison & Yaourt Grec", price: "12.00€", description: "Fruits de saison et miel de fleurs." },
                    { name: "Savory Granola", price: "11.50€", description: "Version salée avec herbes et labneh." },
                    { name: "Bircher Muesli", price: "10.00€" },
                    { name: "Focaccia au Lamb Pulled", price: "14.00€" },
                    { name: "Tartine Avocat & Gravlax", price: "15.50€" }
                ]
            },
            {
                category: "Sweets & Pastries",
                items: [
                    { name: "Pancakes Fleur d'Oranger", price: "12.00€", description: "Maple cream et ricotta au citron." },
                    { name: "Cinnamon Roll (Maison)", price: "5.50€" },
                    { name: "Carrot Cake & Glaçage", price: "6.50€" },
                    { name: "Apple Crumble Tiède", price: "7.50€" },
                    { name: "Tarte Pécan & Caramel", price: "8.00€" },
                    { name: "Cookies Chocolat & Fleur de Sel", price: "4.00€" },
                    { name: "Biscuit Artisanal", price: "3.50€" }
                ]
            },
            {
                category: "Specialty Coffee & Tea (Hot)",
                items: [
                    { name: "Espresso (Terroir)", price: "2.50€" },
                    { name: "Cappuccino Onctueux", price: "5.00€" },
                    { name: "Flat White", price: "5.00€" },
                    { name: "Matcha Latte (Premium)", price: "6.00€" },
                    { name: "Chai Latte Maison", price: "5.50€" },
                    { name: "Latte de Saison", price: "5.50€" },
                    { name: "Thé Earl Grey", price: "5.00€" },
                    { name: "Thé Genmaïcha (Vert)", price: "5.00€" },
                    { name: "Thé au Jasmin", price: "5.00€" },
                    { name: "Dirty Chai (Espresso shot)", price: "6.50€" }
                ]
            },
            {
                category: "Cold Drinks & Juices",
                items: [
                    { name: "Fresh Carrot & Ginger Juice", price: "5.50€" },
                    { name: "Fresh Orange Juice", price: "5.00€" },
                    { name: "Iced Latte", price: "5.50€" },
                    { name: "Cold Brew (Seasonal)", price: "6.00€" },
                    { name: "Citronnade Maison", price: "5.00€" }
                ]
            },
            {
                category: "Alcohol & Brunch Cocktails",
                items: [
                    { name: "Bloody Méricourt", price: "11.00€" },
                    { name: "Mimosa (Premium Bubbles)", price: "9.50€" },
                    { name: "Bière Artisanale (Pression)", price: "7.00€" },
                    { name: "Verre de Vin Blanc", price: "7.50€" },
                    { name: "Verre de Vin Naturel Rouge", price: "8.00€" }
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
