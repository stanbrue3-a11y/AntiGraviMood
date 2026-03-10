import { SurgicalPlace } from "../../../type-definition";

export const bistrotACote: SurgicalPlace = {
    id: "poi-bistrot-a-cote",
    name: "Au Bistrot d'à Côté",
    slug: "au-bistrot-a-cote",
    category: "restaurant",
    subcategory: ["bistrot", "terroir", "charme", "traditionnel"],
    location: {
        address: "18 Rue Lalande",
        arrondissement: 14,
        lat: 48.835141,
        lng: 2.330429,
        nearest_metro: "Denfert-Rochereau",
        metro_lines: [4, 6, "B"],
        google_id: "ChIJndbsU7Zx5kcRT-RfPHpe1Zo"
    },
    moods: {
        chill: 60,
        festif: 10,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "Lundi-Vendredi: 12:00–14:30, 19:30–22:30 | Samedi-Dimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.facebook.com/AuBistrotdaCoteParis/",
            label: "FACEBOOK"
        }
    },
    pricing: {
        avg_budget: 38,
        is_free: false,
        pint_price: 0,
        wine_glass: 8.50,
        coffee_price: 2.50,
        dish_price: 22.00, // MÉDIAN des plats à l'ardoise
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "L'Ardoise du Jour",
                items: [
                    { name: "Cuisse de canard confite, pommes sautées", price: "21.00€" },
                    { name: "Filet de bœuf au poivre, frites maison", price: "26.00€" },
                    { name: "Dos de cabillaud à la plancha", price: "23.00€" },
                    { name: "Blanquette de veau à l'ancienne", price: "22.50€" },
                    { name: "Tartare de bœuf préparé, frites", price: "19.50€" },
                    { name: "Parmentier de Canard aux petits oignons", price: "21.50€" },
                    { name: "Andouillette AAAAA, sauce moutarde", price: "19.50€" }
                ]
            },
            {
                category: "Entrées de Saison",
                items: [
                    { name: "Terrine de campagne artisanale", price: "9.50€" },
                    { name: "Oeuf cocotte au foie gras", price: "11.00€" },
                    { name: "Salade de gésiers confits", price: "10.50€" },
                    { name: "Velouté de potiron aux éclats de noisettes", price: "9.50€" },
                    { name: "Cassolette d'escargots au beurre aillé", price: "12.00€" }
                ]
            },
            {
                category: "Desserts Maison",
                items: [
                    { name: "Tarte Tatin et sa crème fraîche", price: "9.00€" },
                    { name: "Mousse au chocolat noir", price: "8.00€" },
                    { name: "Île flottante à la vanille bourbon", price: "8.50€" },
                    { name: "Baba au Rhum Ambré", price: "10.00€" },
                    { name: "Crème Brûlée à la Cassonade", price: "8.50€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUrTpE5x_GpK0HXLHFUvR8Y--7QZqcjX2d-EAi-y_QtOizOn8eyNgWH9ks1F1aHr5g6jzWABT13Rakx5_Z9ba626jtZaVpivKMuoTxMg36El5U2vJoblkgHiD3KBQWV9XM9pJ28Uj0aTMOLMkPw5tkxwh-DB1OnVamFvXMLb4QyL7mdwxCS3imie2qA34xG_IkvL45xaJjEn-EU5MZnYyK8QAP5QVGjRYG6upN0XahvuoLLxh_--L6p-FLGmQsjWA4zCV6xolzgC6Mex7nKxRpO3b7EpkVKNR2iK616DFyrPRjCdrhQQAh6LGnbwAHSlGoYCeVEcr7jMa6onXDR9tgbXzry4xJ9ulyQ3HGBicml3hyxrEi0Zds6oh7xL2NyiC2UBKI6BP9su3hqR6wQI7ZqgtkMrONm7lI42lG20vLatg&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXL0-5sbpYusfBsXLHeiWhLJ60QTM9tJomin9wIWiKaWMofjB_QzY4GABYn92QSZNAsf-fpQ8tMaKnldJ4rZbuetw4ljaS3otnWCTbJAFVGjDfBhC3-KbuKfnoRa5U-W7U6lK5WhVLh0AuxkymXvuocjOAgFG1gFIHQpzUA1SpRgl8qDGTcIHGSpQN0aCZIlDg-lj7BRsjVcI32YnhNBF8zCLkxDxVxZJLrOf7qtYGTxd2GabRHcZ4EaYHRFY4fssIAh1fSpQSrJsWuykovbwMFTSwJCIaWNvXbZwmjVtexq00vXEhstClvV8PE24JEiTFO1IEMaaSOnnbheQLlxMpcxUHXhioZ0wiRzvqu9Yr9Y1xFYdWuzS9-JtWhJ3OV6MW4gNeuKY88wh4541ZxBz_f-Yq52hda1AGWtyORDHeOkqixkhPetZ6k4UCESQ&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.6,
    description: "Niché dans la calme rue Lalande, Au Bistrot d'à Côté est le type même du bistrot de charme dont Paris a le secret. Avec sa devanture rouge et son intérieur boisé, c'est une adresse qui cultive l'intimité et la sincérité. Le chef y propose une cuisine de terroir sans artifice, où le goût du produit brut est respecté, le tout servi avec une bienveillance qui fait du bien.",
    insider_tip: "C'est l'endroit parfait pour un dîner romantique ou confidentiel loin de l'agitation de Denfert-Rochereau. La terrine maison est un modèle du genre, généreuse et goûteuse.",
    expert_catchline: "L'intimité du vrai bistrot parisien près de Denfert.",
    specials: {
        cuisine: ["Bistrot Traditionnel", "Cuisine Familiale"],
        drinks: ["Sélection de Vignerons", "Vins de Pays"],
        must_eat: "La cuisse de canard confite et la tarte Tatin.",
        must_drink: "Un verre de vin rouge gouleyant sélectionné par l'équipe."
    }
};
