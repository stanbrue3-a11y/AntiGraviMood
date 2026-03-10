import { SurgicalPlace } from "../../../type-definition";

export const empreinte: SurgicalPlace = {
    id: "poi-empreinte-75014",
    name: "L'Empreinte",
    slug: "l-empreinte-paris-14",
    category: "restaurant",
    subcategory: ["bistronomie", "moderne", "marche", "gastronomique", "cosy"],
    location: {
        address: "5 Rue Mouton-Duvernet, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8322645,
        lng: 2.3308821,
        nearest_metro: "Mouton-Duvernet",
        metro_lines: ["4"],
        google_id: "ChIJEcUSM7dx5kcRo3kHqPKmfao"
    },
    moods: {
        chill: 80,
        festif: 30,
        culturel: 40
    },
    practical: {
        opening_hours_raw: "Tuesday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Wednesday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Thursday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Friday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Saturday: 12:00 – 2:00 PM, 7:30 – 10:00 PM | Sunday: Closed | Monday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "book",
            url: "https://www.restaurant-empreinte.paris/",
            label: "RÉSERVER UNE TABLE"
        }
    },
    pricing: {
        avg_budget: 48,
        is_free: false,
        dish_price: 24,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "L'Empreinte (Plats)",
                items: [
                    { name: "Ris de Veau Croustillant Sauce Foie Gras", price: "39.00€", description: "Écrasé de PDT et pleurotes de saison." },
                    { name: "Tartare de Boeuf au couteau du Chef", price: "24.00€" },
                    { name: "Magret de Canard Miel & Romarin", price: "24.00€" },
                    { name: "Filet de Bar, Sauce Hollandaise", price: "24.00€" },
                    { name: "Noix de St-Jacques Poêlées, Passion", price: "29.00€" },
                    { name: "Filet de Boeuf Poêlé, Jus de Viande", price: "29.00€" },
                    { name: "Assiette Végétarienne du Marché", price: "24.00€" }
                ]
            },
            {
                category: "Entrées de Saison",
                items: [
                    { name: "Brick de Saint-Marcellin au Miel", price: "12.00€" },
                    { name: "Foie Gras de Canard Maison", price: "19.00€" },
                    { name: "Nage de Couteaux à la Crème Persillée", price: "15.00€" },
                    { name: "Terrine de Râbles de Lapin au Foie Gras", price: "15.00€" },
                    { name: "Salade d'Écrevisses au Curry & Avocat", price: "15.00€" },
                    { name: "Tartare de Veau à la Pistache", price: "17.00€" },
                    { name: "Saumon Gravlax, Mousse Citron Vert", price: "15.00€" },
                    { name: "Feuilleté d'Escargots de Bourgogne", price: "17.00€" }
                ]
            },
            {
                category: "Douceurs Finales",
                items: [
                    { name: "Tarte Tatin revisitée par le Chef", price: "10.00€" },
                    { name: "Pavlova aux Fruits Frais", price: "10.00€" },
                    { name: "Tarte au Citron de l'Empreinte", price: "10.00€" },
                    { name: "Crème Brûlée à la Fève de Tonka", price: "10.00€" },
                    { name: "Fondant au Chocolat, vanille", price: "10.00€" },
                    { name: "Camembert aux Noix et Calvados", price: "11.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUsMv5bDsNAe6UfqkVLNkPOyPby2O5EkhfTuIDGqstlEor7nckNSQPVy8fIegmeyPsEsVnMwfJhD6xajJ0NV2VQXLaP2C2VB9w4A5dnh9b0xlGKuLhkbDBUzMyp7cNOenAr9VzSzpHSpEiZvvhzekJBn5Sgz2G8Z2IyPW8E94awdmbwNfY1-0ppPJjZQarWYsIxCqBOdFYXRdS_sw9Ghtd6-qagpgnd1HinIzhG_J1UXDTHoB4k-CYX263JlSBiGrXxbjImSN2YK5coVM5p2SAew6I6rDb5gcWorLbw3uhV6bL_nZ0zlBgZIb2J3cZV8ppebGDvf785ljrV-PtmEbtvOEeflXr6JUfnL_nC4_a84zpXFQvDWnTrKWo5VzZvA8bWgsiM8990qtwPmc_OhLy0nXLPxCdubtYg8EqKwxxTXwlqu1RCes38GISb4nWO&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVbSCi2OSqvKyiSSxLPxTiySnKSuzsQbDVc_2BYg8lHhjhgGT7nD-RMcCYa2l_IM8f0jF8pTwfEGu2f9Bhnq5ciD-PENxsbEBxNH7Vfi4472SzRf-pEeyWEklOfOyZhbyQYTmxaV--JH8868blnvmVlQrU1NMzsbdSi4u2uwRcitdfZ-R5wDwSYxEUtFYx-em7ikPFhBliimEJzc3VpfJ-fPeO27EcCK_6ZYLWhhXnYp_GbLyY2lUcqrvZFMBz1kMvfbezfx3edpU4otGxCKFfeM292_yix9giUEMl84x7Go7KvOik4r8l26ly7oX6ENlBY7fpIsZBktVvX5xj04g1QJdKFfT1uIDFf82BXC5gr-lbdJh6Lsct-xe36miyQxGAr5RCm6FZ1i_PCbYexAGTZlOvj4zxuK2rQdyiWJvXEvg&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.6,
    description: "L'Empreinte est une pépite bistronomique discrète nichée rue Mouton-Duvernet. Le chef Noël Druais y déploie une cuisine de marché inventive et d'une grande justesse technique, privilégiant les circuits courts et les produits d'exception. Le cadre, aux tons chauds et à l'éclairage soigné, offre une atmosphère intimiste idéale pour une dégustation attentive. Chaque assiette est une composition équilibrée où les saveurs franches des produits de saison sont sublimées par des jus et des émulsions de caractère. C'est l'adresse parfaite pour ceux qui cherchent la discrétion et l'excellence culinaire sans le formalisme des grandes tables.",
    insider_tip: "Le ris de veau croustillant est la signature absolue du lieu, d'une tendreté et d'un goût incomparables. Pensez également à explorer leur carte des vins, riche en références de vignerons indépendants très bien sourcées.",
    expert_catchline: "L'excellence bistronomique au service du produit de saison.",
    specials: {
        cuisine: ["Bistronomie", "Cuisine du Marché"],
        drinks: ["Vins de Vignerons", "Cocktails Maison"],
        must_eat: "Le Ris de Veau Croustillant sauce Foie Gras.",
        must_drink: "Un vin rouge de la Loire pour accompagner la viande."
    },
    source: "expert_human"
};
