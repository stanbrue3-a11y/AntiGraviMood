import { SurgicalPlace } from "../../../type-definition";

export const petitSommelier: SurgicalPlace = {
    id: "poi-petit-sommelier-75014",
    name: "Le Petit Sommelier",
    slug: "le-petit-sommelier-paris-14",
    category: "restaurant",
    subcategory: ["bistrot-vin", "gastronomique", "cave-a-vins", "terrasse", "traditionnel", "sommellerie"],
    location: {
        address: "49 Avenue du Maine, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8398125,
        lng: 2.3218524,
        nearest_metro: "Montparnasse-Bienvenüe",
        metro_lines: ["4", "6", "12", "13"],
        google_id: "ChIJK-0NQMtx5kcRT2guyXzQChc"
    },
    moods: {
        chill: 70,
        festif: 40,
        culturel: 95
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 PM – 2:30 PM, 7:00 – 10:30 PM | Tuesday: 12:00 PM – 2:30 PM, 7:00 – 10:30 PM | Wednesday: 12:00 PM – 2:30 PM, 7:00 – 10:30 PM | Thursday: 12:00 PM – 2:30 PM, 7:00 – 10:30 PM | Friday: 12:00 PM – 2:30 PM, 7:00 – 10:30 PM | Saturday: 12:00 PM – 2:30 PM, 7:00 – 10:30 PM | Sunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "book",
            url: "http://www.lepetitsommelier.paris/",
            label: "RÉSERVER UNE TABLE"
        }
    },
    pricing: {
        avg_budget: 50,
        is_free: false,
        dish_price: 24,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "starter",
                display_label: "Entrées du Sommelier",
                items: [
                    { name: "Pâté en Croûte Maison (Cochon, Veau, Boudin Noir)", price_cents: 1690 },
                    { name: "Foie Gras de Canard Marbré", price_cents: 2290 },
                    { name: "6 Huîtres N°3 Joël Dupuch (Arcachon)", price_cents: 1990 },
                    { name: "Planche du Petit Sommelier (Charcuteries fines)", price_cents: 1490 },
                    { name: "Saumon Label Rouge Gravlax à l'aneth", price_cents: 1190 },
                    { name: "Os à Moelle Gratinée", price_cents: 1350 },
                    { name: "Cuisses de Grenouilles en Fricassée", price_cents: 1490 }
                ]
            },
            {
                category_type: "main",
                display_label: "Les Plats de Tradition",
                items: [
                    { name: "Le Boeuf Bourguignon Grande Tradition (12h de cuisson)", price_cents: 2490 },
                    { name: "Ris de Veau aux Trompettes de la Mort", price_cents: 5500 },
                    { name: "Poulpe Grillé à la Plancha, Riz Noir", price_cents: 2690 },
                    { name: "Vol-au-Vent de Pintade Fermière au Vin Jaune", price_cents: 2290 },
                    { name: "Tartare de Boeuf au couteau, frites fraîches", price_cents: 2190 },
                    { name: "Entrecôte Aberdeen Angus (Argentine)", price_cents: 3990 },
                    { name: "Côte de Boeuf Normande (pour 2, ~1.2kg)", price_cents: 11000 },
                    { name: "Pêche du jour confite à l'huile d'olive", price_cents: 2290 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Final en Douceur",
                items: [
                    { name: "Millefeuille Érable et Fleur d'Oranger", price_cents: 1390 },
                    { name: "Baba au Rhum Traditionnel", price_cents: 1290 },
                    { name: "Crème Brûlée Sauge & Passion", price_cents: 1290 },
                    { name: "Mousse Chocolat Liégeois au miel", price_cents: 1290 },
                    { name: "Assiette de Fromages Affinés", price_cents: 1890 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW_EpsGADNKVRtM0GdKqKU1B0-Ysol-__yN53eHmKlgBmQqxcHNm5Egq4G7iW-6zuB6zp-RwPcSO5arI1dxq4owscSFrrUOfWNPXSkAP5rh4Rl5DXqo3pdweeWQvM3B86toxwUmRcle9eFhbHIaq2mual9s-GRHO-5_6l35OCO2JxnMkAI-CVQslzSJIZvS0O2BdOiTLiQE4DJtZNSfC26YkgG8aMH30D2jpxDgYAyWGUY2cHykiolbS83T2gn8WG6BRxRncEONwVngZuVe6QdLw5dNQIY2Sa4RRRiWuivC2A&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXYKKDBSHyfAqtylCfxH6EoS5fh4DZHMEMc8uPLHR6A-FkXVWAnT692u2w192gJHGHEvC0b4IQCmIpb67NpIDN1ZNKPXCvkrLbmxoeFSnrlfWSsCj4Xv-VmbxBt5DyWaPKyyEtikJZgi2vShSsy28ZIu2TQ534XO6VihvyEWrluZSayQbSuU-6aasoLvuhb1jFXcL9bZkNfO3uFe5IdDM7gmubDNHguGL7Gn72xI5rktgYmgDgi3A_fm2IAvwv8SFdp5-QfVgSBMnHJTPmx92mencBHe-x57DGAFtqQPB8NhpFemg6-oJz9t8pZmonfn5Km1NYPX6FU6qKAKQT0CEkXtkUrw6baHSQ6zQhCIi-TkxlHjAdGhWNjNwK6M1t3MgSpHsXowEYdglr6Z37SB9gCe5dOnY0fLFTriHg7tuTBgz0w53QQreyIX8JHCcjy&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.5,
    description: "Le Petit Sommelier est bien plus qu'une brasserie, c'est l'un des meilleurs repaires bachiques de la capitale. Sous la houlette de Pierre Vila Palleja, sommelier de haut vol, cette institution de l'avenue du Maine concilie avec brio une cuisine bourgeoise impeccablement exécutée et une carte des vins vertigineuse (plus de 1300 références). Le décor, entre bistro traditionnel et cabinet de dégustation élégant, convie à la flânerie gourmande. Que ce soit pour un Boeuf Bourguignon de légende ou une dégustation de pépites de vignerons, l'accueil y est toujours empreint d'une passion contagieuse.",
    insider_tip: "Faites aveuglément confiance au sommelier pour les accords mets-vins, la carte recèle des trésors introuvables ailleurs. Le Vol-au-Vent au vin jaune est son chef-d'oeuvre absolu.",
    expert_catchline: "Haute sommellerie et gastronomie bourgeoise face à la Tour Montparnasse.",
    specials: {
        cuisine: ["Traditionnelle Française", "Gibiers en Saison"],
        drinks: ["Carte des Vins Exceptionnelle", "Spiritueux Fins"],
        must_eat: "Le Pâté en Croûte maison et le Boeuf Bourguignon.",
        must_drink: "Une pépite dénichée par Pierre dans la cave monumentale."
    }
};
