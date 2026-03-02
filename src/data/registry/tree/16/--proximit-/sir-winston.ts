import { SurgicalPlace } from '../../../../type-definition';

export const sir_winston: SurgicalPlace = {
    id: "poi-306",
    name: "Sir Winston Churchill",
    slug: "sir-winston",
    category: "bar",
    subcategory: ["pub", "restaurant", "cocktail-bar", "indian-restaurant", "speakeasy", "brasserie", "brunch"],
    verified: true,
    google_rating: 4.0,
    instagram_handle: "sirwinstonparis",
    location: {
        address: "5 Rue de Presbourg",
        arrondissement: 16,
        lat: 48.872199,
        lng: 2.294830,
        nearest_metro: "Charles de Gaulle - Étoile",
        metro_lines: [1, 2, 6, "A"],
    },
    practical: {
        reservation_policy: "resa_conseillee",
        accessibility: true,
        wifi: true,
        opening_hours_raw: "Lundi au Dimanche: 08h00-02h00",
        main_action: {
            type: "site",
            url: "https://www.sirwinston.fr/"
        },
        cuisine_type: "Gastronomie Anglo-Indienne",
        terrace: true
    },
    pricing: {
        is_free: false,
        index_price: 24,
        primary_price_type: "dish",
        pint_price: 10,
        cocktail_price: 15,
        wine_glass: 9,
        dish_price: 24,
        coffee_price: 3.5,
        menu_items: [
            {
                category: "À Partager & Entrées",
                items: [
                    { name: "Scotch Eggs", price: "9.50€", description: "Saucisse, œuf mollet, sauge, moutarde et curry." },
                    { name: "Naan au Fromage & Piment doux", price: "7€" },
                    { name: "Garlic & Coriander Naan", price: "5.50€" },
                    { name: "Poulpe Tandoori Naan", price: "14€", description: "Poulpe grillé, herbes fraîches et épices." },
                    { name: "WFC (Winston Fried Chicken)", price: "7€", description: "Poulet frit, sauce raïta menthe." },
                    { name: "Beetroot Hummus", price: "7.50€", description: "Feta, chips de betterave." },
                    { name: "Samosas Mozza & Feta", price: "8.50€", description: "Épices zaatar, chutney menthe." },
                    { name: "Potatoes from Sir Winston", price: "5.50€", description: "Crème de cheddar." }
                ]
            },
            {
                category: "Les Plats de Manoj Sharma",
                items: [
                    { name: "Old Delhi Butter Chicken", price: "24€", description: "Poulet fondant, sauce tomate onctueuse, riz basmati." },
                    { name: "Chicken Tikka Masala", price: "23.50€", description: "Épinards, riz basmati au safran." },
                    { name: "Lamb Curry", price: "25.50€", description: "Riz basmati au safran." },
                    { name: "Fish & Chips Épicé", price: "19€", description: "Cabillaud, purée de pois à la menthe." },
                    { name: "Sir Winston Burger", price: "20.50€", description: "Cheddar, chutney oignon, frites massala (24.50€ en double)." },
                    { name: "Tuna Tataki", price: "22€", description: "Sésame, citron, menthe, riz basmati." },
                    { name: "Roasted Whole Lobster", price: "29€", description: "Curry doux, chou-fleur rôti, riz safrané." },
                    { name: "Croque Sir", price: "19.50€", description: "Pain Poujauran, Comté AOP, jambon blanc, frites massala." }
                ]
            },
            {
                category: "Brunch (Dimanche 12h-16h)",
                items: [
                    { name: "Formule Brunch Anglo-Indien", price: "35€", description: "Boisson chaude, jus frais, viennoiseries, plat London/Bollywood/Veggie et dessert." }
                ]
            },
            {
                category: "Desserts & Douceurs",
                items: [
                    { name: "Banoffee Pie", price: "7.50€" },
                    { name: "Guanaja Chocolate Mousse", price: "8.50€", description: "70% cacao, caramel beurre salé." },
                    { name: "Exotic Pavlova", price: "9.50€", description: "Mangue, passion, coco." },
                    { name: "Apple Baklava", price: "12.50€" },
                    { name: "Sweet Naan au Chocolat", price: "9€" }
                ]
            },
            {
                category: "Whisky & Mixologie (Doris Bar)",
                items: [
                    { name: "Doubt Martini", price: "15€" },
                    { name: "Aperol/Campari Spritz", price: "13€" },
                    { name: "Pimm's O'Clock", price: "14.50€" },
                    { name: "Selection Whiskies (Nikka, Amrut...)", price: "12.50€", description: "Dose 4cl." },
                    { name: "Cotswolds Single Malt", price: "13€" }
                ]
            }
        ],
        smart_tip: "Au sous-sol, cherchez la porte dérobée du Doris Bar : un speakeasy aux allures de club privé anglais, idéal pour un whisky Nikka loin de la cohue de l'Étoile."
    },
    moods: { chill: 50, festif: 70, culturel: 30 },
    description: "Plus vieux pub anglais de Paris, le Sir Winston Churchill s'est réinventé en un lieu hybride fascinant. Sous la patte de Laura Gonzalez et du chef Manoj Sharma, il fusionne l'élégance d'un club de gentlemen avec l'énergie vibrante de Mumbai. On y vient pour un café à 8h, un curry d'exception à 20h, ou pour disparaître dans le speakeasy secret du sous-sol jusqu'à 2h.",
    expert_catchline: "L'escale ultime entre Londres et New Delhi : Pub culte, restaurant fusion et speakeasy secret à l'Étoile.",
    insider_tip: "- Le Brunch à 35€ est une masterclass du quartier.\n- Ne passez pas à côté des Naans cuits au Tandoor (mention spéciale pour le fromage/piment).\n- Le soir, le Doris Bar (sous-sol) est indispensable pour les amateurs de mixologie confidentielle.",
    specials: {
        cuisine: ["Anglo-Indienne", "Tandoor", "Fusion"],
        drinks: ["Whiskies rares", "Cocktails signatures", "Chaï Latte"],
        must_eat: "L'Old Delhi Butter Chicken (24€) : une texture veloutée inoubliable.",
        expert_catchline: "Currys de haut vol, naans maison et speakeasy confidentiel."
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVfc0HCVo4meOHycmPLWFl32PfJeQV8w5H2TRGGnjoh0YTUQgqNecV6WkNFU0MQp8Kse5vNs2iDSUhaUx2h0kWIaKZReWJsVeiRGh8-Ut9h7BJ8rErpMR87OZSX0kHFTM5_I1YE9oApLXFMpb_UYn0KEGODTnmkT7bB8ch-KGZlht_79H76y5cgLgjatpI-oXBAj0t6xj5ooWX0hwaCMvWfklVD4SvVWjHMhOifvvRHf6-IefCgz9kV0m2DiqeT9uyiwgJiv9_uNoI4-mNDF39ErwIhAV--ymyu5PdTt51fZg",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXBHhZ7taCx7Dy9u-5xMp_xH67XgtBJn1yHD4MNAwmngY8Vytvbh1vf6kibXXwzD8XfhzrRS9slHKS1EjaVVsmevSXiXIaBsDs9B5WeJTu9qW1KyPhPqebZBv6yirOFRv7kWaUtfzyQsE6isbgBLH_laJc-dA_Xa3vb9aV8wL-HO2QJhXfBq9XLScYgwJrVVti6a8BAtnV_2pdpoFFJbeQU306WFo8fpadZB18HlIJ-6r2w5oofKwfrJaEI0nI6VeEVHmA5REtlsktAdH0x-tTCjFhYg0kQHAqq-qtMK6cwQi4Qvwo-mrDh5-NLMUcLf98gNrbPQMa8CtXeX1SwBdLHv_gLirkFm2L6HMr-5cK2aTg-H_gj8j-7VFFw60DwsKHv2HB1XySIplmRxtj6rpgwuiM2-KmeX23_-ChXpjAKL_2tvSq1gjFEk6UZYVNN",
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUT-n-UHfH6E6E-AvHaIS4iPDrA6--wtJvy-HjuCLL67FCz1G5yf-CKRdiedV0yR259XdFaDrkmijZbSOpS985G9P3tun5W2iJWGYENVLmr6k5yx9CammMmk37udnRSwJiUxCX6OYTpVGAUAC5dKyGE58G50BVOKycS1LpHJr0v9Cyr3gQM686aCVl_Zd7LwoR6XkgrDNLWdjHKtZRh9lfImh2KT0poVRyABGMwCGf7ad50AcXC2AD2fHhXsKvBeTfdCNoNjGlwYl-S06PLyHxZW1Z-jxcDR_oqYxW5RiL-Og",
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXKtBrURndH0m47y-HkWe7xXm0pKSqKodEM4xrcmN7PPVCHv-TdA3QET8cPFLty3JDGx_vOCsUWmBPDzehZETrMtGrBUwsp2OoxVso4heqg-7TztROOgtzRW9iKiZL5tci09nnqAj-XvyRt2wdxMyZiaO6c8h_rkCVzl-Yr7WaGJPvMo6fc_ecNtlUWjFRBQLUoXyIGd4qQK8NaZlfcCO3ydlQV-2Q1-w-JzwTjhuiNHZbGHROp6iQzcnQfYqB7GKrx7v56VLZwasPzEdiYyUkj4I1ET5-wbAApEILVRXV04J49Uh_lXgl2TG_r3SbJ4SG29WJshQ1B3TV7FBi9ahpN87I52hDQ4jam5Co0eEJJKnRdf4CIQYC0j236CqBFnpBBWk4cMwqIYeS5fhMbrYO20roLQ1BwtHi_qFnO2muF4aUc2TmVyRyYi6QLXBk1"
        ]
    },
    source: "expert_human"
};
