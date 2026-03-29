import { SurgicalPlace } from "../../../type-definition";

export const bistrotCampagnes: SurgicalPlace = {
    id: "poi-bistrot-campagnes-75014",
    name: "Le Bistrot des Campagnes",
    slug: "le-bistrot-des-campagnes-paris-14",
    category: "restaurant",
    subcategory: ["traditionnel", "terroir", "terrasse", "rustique", "chaleureux"],
    location: {
        address: "6 Rue Léopold Robert, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8409963,
        lng: 2.3307099,
        nearest_metro: "Raspail",
        metro_lines: ["4", "6"],
        google_id: "ChIJodz_tshx5kcRUayAaJCnP2A"
    },
    moods: {
        chill: 85,
        festif: 40,
        culturel: 30
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 – 2:30 PM, 6:30 – 11:30 PM | Tuesday: 12:00 – 2:30 PM, 6:30 – 11:30 PM | Wednesday: 12:00 – 2:30 PM, 6:30 – 11:30 PM | Thursday: 12:00 – 2:30 PM, 6:30 – 11:30 PM | Friday: 12:00 – 2:30 PM, 6:30 – 11:30 PM | Saturday: 6:30 – 11:30 PM | Sunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://lebistrotdescampagnes.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 38,
        is_free: false,
        dish_price: 22, // MÉDIAN des plats à la carte
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "main",
                display_label: "Les Plats de nos Terroirs",
                items: [
                    { name: "Andouillette de Troyes AAAAA, Frites Maison", price_cents: 2100 },
                    { name: "Confit de Canard du Sud-Ouest, Pommes Sarladaises", price_cents: 2250 },
                    { name: "Petit Salé aux Lentilles du Puy", price_cents: 1950 },
                    { name: "Blanquette de Veau à l'Ancienne", price_cents: 2300 },
                    { name: "Pot-au-Feu Traditionnel au Paleron de Boeuf", price_cents: 2050 },
                    { name: "Souris d'Agneau de Sept Heures au Romarin", price_cents: 2400 },
                    { name: "Saucisse de Toulouse Grillée, Purée", price_cents: 1850 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées Rustiques",
                items: [
                    { name: "Terrine Maison au Poivre Vert", price_cents: 950 },
                    { name: "Oeufs Cocotte au Roquefort", price_cents: 1100 },
                    { name: "Soupe à l'Oignon Gratinée au Cantal", price_cents: 1000 },
                    { name: "Salade de Lardons et de Croutons", price_cents: 1200 },
                    { name: "Os à Moelle à la Fleur de Sel", price_cents: 1300 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs de Nos Campagnes",
                items: [
                    { name: "Mousse au Chocolat à la louche", price_cents: 850 },
                    { name: "Crème Renversée au Caramel", price_cents: 750 },
                    { name: "Ile Flottante aux Pralines Roses", price_cents: 800 },
                    { name: "Tatin Tiède et son Pot de Crème", price_cents: 950 },
                    { name: "Plateau de Fromages de Région", price_cents: 1150 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXBlkMs7WpnipAgBFtRK4ccj-zjpm-vLUGx6n7Hlv6UMLNzaLiHmheYT_f8XFGCG5BEZFWgKeJnJCssO3d-zRfjrn7tyf6jwR3nr-m8P0kAjMth7EuW3uv0DQ12TmPstU-ECVlIDy27uPxX19p6jUqU5VLssRzvp9dSfPSsyl2sLPNDX1rlGQxnvAyXVKFTrzcYDPbuqVO1ASFWnxtidmzPDvH2k9bWybeUvu7-UjKxJgvuM0RJghlRhcZBVv-RxXD02dAUWkb1cFJT861zRhOrS3mCucTnLbCZ0n0hE4jGDg&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUfbh9dZA9jtr8hTl_BImlCHIjl7vAZ18DQPCou6neozS25lN91rMQKY1dWP9Boek5SOoHTecUnCDIFs2Lpe8EzuegobPwldYsh00u3liBwXUnk_yKRPL3BkRJodS41S3k5eUNPNTJAGpxVOxWHioRWQ92D-5zJrB6-k5QhUvKP1qDZxryqQ_MWemwoFbZgPZGcJ3zZ_aAXj2OBaUOkKywNV8B46qzp15TmRbxY7aexhOJCTVQRufGY62n044nTccKkhShl6lhz10vwuZz6coshe1kzr535q2pM8HeWMCDsRA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.5,
    description: "Le Bistrot des Campagnes est une véritable invitation au voyage dans la France rurale au coeur du Paris moderne. Avec ses boiseries sombres, ses nappes à carreaux et ses affiches vintage, le décor plante le décor d'une gastronomie généreuse et sans complexe. On y vient pour retrouver les saveurs perdues de l'enfance : des mijotés longuement préparés, des produits de terroir sourcés avec soin et une ambiance conviviale inimitable. La petite terrasse est un havre de paix idéal pour savourer un bon verre de vin de pays.",
    insider_tip: "Ne faites pas l'impasse sur l'andouillette si vous êtes amateur, elle est certifiée AAAAA et parfaitement grillée. Le plateau de fromages est une sélection tournante de petits producteurs de nos régions.",
    expert_catchline: "Tout le charme et la saveur des campagnes françaises dans votre assiette.",
    specials: {
        cuisine: ["Terroir Français", "Cuisine Grand-Mère"],
        drinks: ["Pichets de Vin de Pays", "Liqueurs Digestives"],
        must_eat: "L'Andouillette AAAAA et le Confit de Canard.",
        must_drink: "Un rouge charpenté du Sud-Ouest."
    },
    source: "expert_human"
};
