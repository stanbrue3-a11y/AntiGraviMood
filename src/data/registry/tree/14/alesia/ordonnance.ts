import { SurgicalPlace } from "../../../type-definition";

export const ordonnance: SurgicalPlace = {
    id: "poi-ordonnance-75014",
    name: "L'Ordonnance",
    slug: "l-ordonnance-paris-14",
    category: "restaurant",
    subcategory: ["bistronomie", "contemporain", "raffiné", "marché", "intimiste"],
    location: {
        address: "51 Rue des Plantes, 75014 Paris, France",
        arrondissement: 14,
        lat: 48.8299519,
        lng: 2.3311141,
        nearest_metro: "Alésia",
        metro_lines: ["4"],
        google_id: "ChIJZRqAdbpx5kcRnEoHtO5qUnI"
    },
    moods: {
        chill: 80,
        festif: 30,
        culturel: 50
    },
    practical: {
        opening_hours_raw: "Monday-Friday: 12:00 – 2:30 PM, 7:30 – 10:30 PM | Saturday: 7:30 – 10:30 PM | Sunday: Closed",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "site",
            url: "https://www.facebook.com/lordonnanceparis/", // Pas de site web officiel direct parfois pour ces petits bistros
            label: "FACEBOOK OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        dish_price: 25, // MÉDIAN des plats de résistance
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "Les Plats de Résistance",
                items: [
                    { name: "Dos de Cabillaud de Ligne, Risotto au Safran", price: "26.00€" },
                    { name: "Pseudo-Bourguignon de Joue de Boeuf Confite", price: "24.00€" },
                    { name: "Poitrine de Veau Croustillante, Purée Maison", price: "27.00€" },
                    { name: "Suprême de Volaille Jaune aux Champignons", price: "23.00€" },
                    { name: "Daurade Royale à la Plancha, Légumes du Moment", price: "25.00€" },
                    { name: "Tagliatelles Fraîches à la Crème de Truffe", price: "22.00€" },
                    { name: "Suggestion de l'Ardoise (Selon Marché)", price: "24.50€" }
                ]
            },
            {
                category: "Entrées Créatives",
                items: [
                    { name: "Oeuf Parfait à 64°, Velouté de Saison", price: "12.00€" },
                    { name: "Ceviche de Maquereau au Citron Vert", price: "14.00€" },
                    { name: "Tartare de Betterave et Chèvre Frais", price: "11.00€" },
                    { name: "Escalope de Foie Gras Poêlée", price: "18.00€" },
                    { name: "Terrine de Campagne de l'Ordonnance", price: "10.00€" }
                ]
            },
            {
                category: "Le Coin des Douceurs",
                items: [
                    { name: "Moelleux au Chocolat, Sorbet Framboise", price: "9.50€" },
                    { name: "Tarte Tatin Maison, Crème Fraîche", price: "10.00€" },
                    { name: "Crème Brûlée à la Pistache de Sicile", price: "9.00€" },
                    { name: "Sabayon aux Fruits Frais", price: "11.00€" },
                    { name: "Assiette de Trois Fromages Affinés", price: "12.00€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV95MltxSz5RBrmmSp2dtuFUQs2KKUyODK2YZwxWTwkcyMEl2nrHXWqocPN1VYxObhdNsmdmfREGkbyfj8K13S1QilVI1LR0tyVt5rj0LP0g-zK2tQoGwcStXpX2huFReGeyRNJO3rLcp7yHt8d7-6jnRI_6haUVDsar3-ZqgYJEM2LzCTDr2nDZ7SI_9Wbhw6et289Mwxw_jUBh3bEVfWQmSJ0J33PGB-z14A3gmgYhQxX4kjLbZHs4GwP6qtflTw3cKWhjdhqIcW_3nRRqEoNDZiSB1plRgh5kUQnUxfw9A&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW4Vx9MO3q7hAZbGLF9YkI5MkO67UPYkMBB232bWPwQ1Wh3z0nyL07Ze8OLCkz6UNzL-xkZjaReJo5PjhwFPmK1SCFJcdnOWZDlnjUtqFpQDIrJxCWA3_X1bYfALWx0vBVe5ujEJrwLsuikv8tDDOfRNl10yf8IQqRgyJGLmPiCR2JtzqE1QUID_85Utj9OqQg6ZvFEFtWtiF0bCZARNPfcfgSjUGrQTyUs9HcSFypWvFjeBBuN77Mc4k7zkU-zLDND6_g2U1Fk4V4ML1QnuBRPKWZOG7oSVEj2yPUx5nZDDQ&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.4,
    description: "L'Ordonnance est un joyau bistronomique niché discrètement rue des Plantes. Ici, la cuisine est une affaire de précision et de respect absolue du produit. Le chef propose une carte courte qui change au gré des saisons et des arrivages du marché, garantissant une fraîcheur irréprochable. Le cadre est élégant sans être guindé, avec une atmosphère calme et intimiste qui se prête merveilleusement aux conversations. C'est l'adresse de quartier par excellence pour les amateurs de gastronomie française moderne et raffinée.",
    insider_tip: "Le menu déjeuner est un secret de quartier d'un rapport qualité-prix bluffant. Ne passez pas à côté de l'oeuf parfait, une signature de la maison exécutée avec une maîtrise parfaite.",
    expert_catchline: "La bistronomie d'une précision chirurgicale au cœur du 14ème.",
    specials: {
        cuisine: ["Bistronomique Moderne", "Cuisine du Marché"],
        drinks: ["Sélection de Vins de Propriété", "Digestifs Artisanaux"],
        must_eat: "L'Oeuf Parfait et la Joue de Boeuf confite.",
        must_drink: "Un vin blanc sec de Loire pour accompagner le poisson."
    },
    source: "expert_human"
};
