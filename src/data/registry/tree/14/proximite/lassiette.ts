import { SurgicalPlace } from "../../../type-definition";

export const lassiette: SurgicalPlace = {
    id: "poi-lassiette-75014",
    name: "L'Assiette",
    slug: "l-assiette-paris-14",
    category: "restaurant",
    subcategory: ["institution", "bistronomie", "terroir", "traditionnel", "gastronomique"],
    location: {
        address: "181 Rue du Château, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.833419,
        lng: 2.324069,
        nearest_metro: "Mouton-Duvernet",
        metro_lines: ["4"],
        google_id: "ChIJkc5OT7Rx5kcRJx30EIJaxvM"
    },
    moods: {
        chill: 70,
        festif: 40,
        culturel: 80
    },
    practical: {
        opening_hours_raw: "Monday: Closed | Tuesday: Closed | Wednesday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Thursday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Friday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Saturday: 12:00 – 2:30 PM, 7:00 – 10:30 PM | Sunday: 12:00 – 2:30 PM, 7:00 – 10:30 PM",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://restaurant-lassiette.paris/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        dish_price: 36, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Les Incontournables de David Rathgeber",
                items: [
                    { name: "Cassoulet Artisanal de L'Assiette", price: "38.00€", description: "Confit de canard, saucisse de Toulouse, couenne et haricots lingots." },
                    { name: "Ris de Veau Doré au Sutoir", price: "52.00€" },
                    { name: "Andouillette AAAAA de chez Duval", price: "32.00€" },
                    { name: "Parmentier de Queue de Boeuf", price: "34.00€" },
                    { name: "Poitrine de Cochon Fondante", price: "29.00€" },
                    { name: "Dos de Cabillaud Cuisson Basse Température", price: "36.00€" },
                    { name: "Épaule d'Agneau de Lait (pour 2)", price: "95.00€" }
                ]
            },
            {
                category: "Entrées de Saison",
                items: [
                    { name: "Bouillon de Poule à la Truffe", price: "18.00€" },
                    { name: "Calamars à la Plancha, Chorizo", price: "22.00€" },
                    { name: "Foie Gras Chantilly de David", price: "24.00€" },
                    { name: "Asperges Vertes de Provence (en saison)", price: "21.00€" },
                    { name: "Escargots de Bourgogne en Coquille (les 6)", price: "18.00€" },
                    { name: "Pâté en Croûte Maison", price: "26.00€" }
                ]
            },
            {
                category: "Desserts & Gourmandises",
                items: [
                    { name: "Crème Caramel à la Vanille de Tahiti", price: "12.00€" },
                    { name: "Tarte Tatin Géante", price: "14.50€" },
                    { name: "Paris-Brest Signature", price: "15.00€" },
                    { name: "Mousse au Chocolat Noir intense", price: "13.00€" },
                    { name: "Assiette de Fromages de chez Sanders", price: "18.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXYyAF0mKs9ZhHzDWcR8ZhpEropJ0ulmkkDnTjNN3YSjzexyAtOT0i9Zz5-3wCeGpjCXMd1Ofh92Qg5DWWUC0Jv5ANb3CwBNc_JD_i-rrGjLNucCtd7-woo0OrEd3OeEpiyzq9ricCiBeBUBfOzKmsxXvmUQFqYUEGlXceuiOYPuxeGd4e2tWKgZJ4X5Or_j7GN7X7AIiUAQK7HZ-UUPtXkkOqbTKhfRSdyOHyYLyab6JpOdkEj3WXC9JVNyF6hmphSQGJ7zP51sr5a5rJq46eBRArqfGTTs4l_xd57JCdRBnSafxe3YfSdk7L7W_-bGSD5Rn4c_DLBJw36jki_GlhBJ0XWjrlrQSDMEEF1tLABT74W84FP7dPh3RQNkrM31cJELR_xnmKVhEnInaNga-UMW37Tonr4NzrsKr3A3Hj8AQ&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXEV1WsozSw7QpZ3MQN_kDcmupiIw3W5MiYFSxmefatTTCMvY9KJtCl0iJ5msQ8s4icQ3bK6s1004fTtlSsNC7Idwt34-YfdhGJLjW9IxeXZt_w0ttu8JApPYvj_QfWcLCNzVikX-hW6RFqTs3Ql8ffeJgB-Gd0hMDRxFvhu34PreJZvj-YtS-NNKj0QtT7Cjq23qh6GjJPcJQ_im6CH_7XZKnO8zZAM8KwzNweZtuM69F63rACnHhLv_cg6xKGNPeUyhfetWHFBjhekXW6VnIkXJmnXcO-hP0JNkyY9qSt6Q&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.6,
    description: "L'Assiette est une institution mythique de la rue du Château, où David Rathgeber (ancien d'Alain Ducasse) perpétue l'excellence d'une cuisine de terroir haute couture. Le décor est celui d'une ancienne charcuterie fine, avec ses plafonds peints et ses miroirs piqués, offrant une atmosphère d'un chic absolu et d'un confort bourgeois. On y vient pour le meilleur Cassoulet de Paris, mais aussi pour des plats canailles élevés au rang d'oeuvres d'art. C'est le rendez-vous des gourmets qui cherchent la vérité du produit et la générosité d'un chef passionné.",
    insider_tip: "Le cassoulet est la signature qu'il faut avoir goûtée au moins une fois dans sa vie, mais gardez une place pour le Paris-Brest, l'un des plus fins de la capitale. La carte des vins, axée sur les vignerons indépendants, est une merveille.",
    expert_catchline: "L'excellence du terroir canaille signée David Rathgeber.",
    specials: {
        cuisine: ["Bistronomie de Terroir", "Cuisine Bourgeoise"],
        drinks: ["Grands Vins de Vignerons", "Sélection d'Eau-de-Vie"],
        must_eat: "Le Cassoulet Maison et le Ris de Veau.",
        must_drink: "Un vin rouge du Sud-Ouest sélectionné par le sommelier."
    },
    source: "expert_human"
};
