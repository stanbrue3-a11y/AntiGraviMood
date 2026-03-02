import { SurgicalPlace } from '../../../../type-definition';

export const fouquets: SurgicalPlace = {
    id: "poi-305",
    name: "Fouquet's Paris",
    slug: "fouquets-champs-elysees",
    category: "restaurant",
    subcategory: ["brasserie", "palace", "institution", "restaurant", "cocktail-bar"],
    verified: true,
    google_rating: 4.1,
    instagram_handle: "fouquets",
    location: {
        address: "99 Avenue des Champs-Élysées",
        arrondissement: 8,
        lat: 48.871397,
        lng: 2.301258,
        nearest_metro: "George V",
        metro_lines: [1],
    },
    practical: {
        reservation_policy: "resa_conseillee",
        accessibility: true,
        wifi: true,
        opening_hours_raw: "Lundi au Dimanche: 07h30-01h00",
        main_action: {
            type: "book",
            url: "https://www.hotelsbarriere.com/fr/paris/le-fouquets.html"
        },
        cuisine_type: "Haute Brasserie"
    },
    pricing: {
        is_free: false,
        index_price: 90,
        primary_price_type: "dish",
        wine_glass: 20,
        cocktail_price: 28,
        coffee_price: 10,
        dish_price: 52,
        menu_items: [
            {
                category: "Pour Commencer",
                items: [
                    { name: "Pâté en croûte de volaille et foie gras", price: "28€", description: "Pickles de légumes" },
                    { name: "Soupe à l'oignon des Champs-Élysées", price: "23€", description: "Gratinée au vieux Comté" },
                    { name: "Escargots de Bourgogne", price: "26€", description: "Beurre d'ail et persil, taille 'très gros'" },
                    { name: "Terrine de foie gras de canard", price: "36€", description: "Chutney de saison, pain toasté" }
                ]
            },
            {
                category: "Caviar & Mer",
                items: [
                    { name: "Caviar Osciètre (30g)", price: "140€", description: "Blinis tièdes, crème crue" },
                    { name: "Saumon fumé d'Écosse", price: "38€", description: "Sauce raifort, blinis" }
                ]
            },
            {
                category: "Plats Signatures",
                items: [
                    { name: "Merlan de ligne Colbert", price: "52€", description: "Beurre maître d'hôtel, purée aux herbes" },
                    { name: "Tartare de Bœuf façon Fouquet's", price: "56€", description: "Aller-retour, pommes Coin de rue" },
                    { name: "Sole Meunière (600g)", price: "85€", description: "Dorée au beurre demi-sel, pommes à l'anglaise" },
                    { name: "Filet de Bœuf au poivre", price: "65€", description: "Sauce au poivre noir flambée au cognac" },
                    { name: "Suprême de volaille rôti", price: "48€", description: "Jus de rôti, déclinaison de champignons" }
                ]
            },
            {
                category: "Desserts & Douceurs",
                items: [
                    { name: "Millefeuille Tradition", price: "22€", description: "Crème légère à la vanille de Bourbon" },
                    { name: "Crêpes Suzette flambées", price: "25€", description: "Flambées au guéridon devant vous (Grand Marnier)" },
                    { name: "Profiteroles", price: "24€", description: "Glace vanille, sauce chocolat chaud" },
                    { name: "Assiette de fromages affinés", price: "26€", description: "Sélection de la fromagerie Quatrehomme" }
                ]
            }
        ],
        smart_tip: "Menu Déjeuner à 45€ pour s'offrir l'expérience Palace sans risquer l'incident diplomatique bancaire."
    },
    moods: { chill: 40, festif: 20, culturel: 90 },
    description: "La mythique brasserie parisienne aux légendaires auvents rouges qui règne sur l'avenue des Champs-Élysées depuis 1899. Le Fouquet's est le bunker des célébrités mondiales, du gotha politique et du cinéma français. Une parenthèse de grand luxe où la carte est pilotée d'une main de maître par le chef triplement étoilé Pierre Gagnaire.",
    expert_catchline: "Le tapis rouge perpétuel : brasserie majestueuse et bastion des Césars du Cinéma français.",
    insider_tip: "- Le snobisme veut qu'on réserve en demandant la plaque dorée au nom d'un acteur précis (Gabin, Ventura, Delon).\n- Les prix de la carte explosent rapidement le plafond (un dîner monte vite à 100€/tête), la carte bleue doit être solide.\n- Les Crêpes Suzette flambées au guéridon devant votre table offrent un micro-spectacle jubilatoire.",
    specials: {
        cuisine: ["Gastronomie Française", "Pierregagnaire", "Signature"],
        drinks: ["Champagnes Millésimés", "Cocktails Palace"],
        must_eat: "Le tartare Fouquet's poêlé aller-retour (56€).",
        expert_catchline: "Haute brasserie et folklore du cinéma sur la plus belle avenue du monde."
    },
    images: { hero: "https://upload.wikimedia.org/wikipedia/commons/2/22/Fouquet%27s_Paris_-_Champs-Elys%C3%A9es.jpg", gallery: [] },
    source: "research_ai"
};
