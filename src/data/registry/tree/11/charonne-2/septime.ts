import { SurgicalPlace } from '../../../type-definition';

export const septime: SurgicalPlace = {
    id: "poi-septime",
    name: "Septime",
    slug: "septime",
    category: "restaurant",
    subcategory: ["gastronomique", "étoilé", "français", "restaurant"],
    location: {
        address: "80 Rue de Charonne",
        arrondissement: 11,
        lat: 48.8535723,
        lng: 2.3809333,
        nearest_metro: "Charonne",
        metro_lines: [9],
        google_id: "ChIJE6kCUghy5kcRmWSg3RUHIwM"
    },
    moods: {
        chill: 75,
        festif: 5,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: 12:15–14:00, 19:30–23:00\nmardi: 12:15–14:00, 19:30–23:00\nmercredi: 12:15–14:00, 19:30–23:00\njeudi: 12:15–14:00, 19:30–23:00\nvendredi: 12:15–14:00, 19:30–23:00\nsamedi: Fermé\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.septime-charonne.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 150,
        is_free: false,
        pint_price: 0,
        wine_glass: 12.00,
        coffee_price: 4.00,
        dish_price: 85.00, // VERIFIED 2025: Lunch Tasting Menu (Entry Satiety)
        menu_type: "fixed",
        force_manual_dish_price: true,
        last_updated: "2024-03-08",
    menu_items: [
      {
        category: "Menus Dégustation (Carte Blanche)",
        items: [
          { name: "Menu Dîner (7 étapes)", price: "135.00€", description: "Progression créative et saisonnière.", highlight: true },
          { name: "Menu Déjeuner (5 étapes)", price: "85.00€", description: "Uniquement au déjeuner.", highlight: true },
          { name: "Accord Mets & Vins - Dîner (5 verres)", price: "75.00€" },
          { name: "Accord Mets & Vins - Déjeuner (3 verres)", price: "60.00€" }
        ]
      },
      {
        category: "Séquences du Moment (Exemples Plats)",
        items: [
          { name: "Asperges blanches, ail des ours & jaune d'œuf", price: "0.00€", highlight: true },
          { name: "Lieu jaune de ligne, beurre blanc foin", price: "0.00€", highlight: true },
          { name: "Canette rôtie au BBQ, betteraves", price: "0.00€" },
          { name: "Pigeon de chez M. Trouillet, oseille", price: "0.00€" },
          { name: "Trou Normand revisité (Pomme/Céleri)", price: "0.00€" },
          { name: "Mousse au chocolat fumé & sel de Maldon", price: "0.00€" },
          { name: "Tartelette fraises des bois, sureau", price: "0.00€" },
          { name: "Sélection de fromages affinés (Supplément)", price: "15.00€" }
        ]
      },
      {
        category: "La Cave Nature (Boissons)",
        items: [
          { name: "Verre de Vin Nature du jour", price: "12.00€", highlight: true },
          { name: "Pet'Nat 'Bulles de Vie' (Verre)", price: "14.00€" },
          { name: "Champagne Jacques Lassalle (Verre)", price: "22.00€" },
          { name: "Cidre de Glace (Verre)", price: "11.00€" },
          { name: "Bouteille Septime 'Cuvée Maison'", price: "45.00€" },
          { name: "Grand Cru Bourgogne (Bouteille)", price: "120.00€" }
        ]
      },
      {
        category: "Caféterie & Infusions (Boissons)",
        items: [
          { name: "Café de Spécialité (Torréfié maison)", price: "4.00€", highlight: true },
          { name: "Infusion de plantes du jardin", price: "4.00€" },
          { name: "Thé Vert Genmaicha", price: "6.00€" },
          { name: "Double Espresso", price: "6.00€" },
          { name: "Décaféiné à l'eau", price: "4.50€" }
        ]
      },
      {
        category: "Eaux & Softs (Boissons)",
        items: [
          { name: "Eau micro-filtrée Septime (75cl)", price: "4.50€" },
          { name: "Jus de fruits frais (Sourcing direct)", price: "8.00€" },
          { name: "Kombucha Maison 'Verveine'", price: "9.00€", highlight: true },
          { name: "Limonade Artisanale", price: "7.00€" },
          { name: "Badoit (75cl)", price: "6.50€" }
        ]
      }
    ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVoWY8rpDqKEPd9pWh_xUNdz65Vr4S0YiBJ5uUjPWYVdifTL60C-OQTd2cqb3uamBZe2exLgcEcp4licpiUC_hdvCFn3kdvBbgzGVNeIeDf2laLIie_D14VeGS4a5Q3nvP6jihwKRMJZq-dNLuE2xC39eRVWuYgyYws5ho8LRRcGV4CVNnTVPDqndtoEc5F26JoEHXkYoxLhTHCGDUo-GnTkperwoYILaFx8p7wWM9VfyK9SER6BxQZHwUo5JPDUt_kBzUCeVN6Au6-xQ-HJP06iwXf4GR_ky398LBMDAQan_1EobJCC1cCJSvk-ZnCyojiZqiQcc-TooRy9U6HbXwCq4JExj0IUpff3ZwuSbpSe8NzZVMR_oUpx8N36WaiER9BIL735YEjesMSG4amqIfqq2P2vd1yaXvi1Vtmg4g&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW5XX0ORqY3k8IsUKLSSHNN8RdJ0H4WapSDE9GmynCxNxndW1i78t-ZYY87S-ffhbDhRbF1BRFg0-i17C1exQr2AC6ScxC1usEUbGGd2G1VZzpzG9riOLfLEFHv2EOPvO2qvyrjZkBajs95Q4qC0bBTOVJFKkIGwUAIKaBzYOWJnixoh1u6cLl55UfPbaX2diZ-zgyxQsh1TV5VHvED5HK5VgsadPHaGc_8hxCL3BSyyf5Rq_uv35a699B--NYAXzc6r__SeyxZHP4Os_WCrnzDJIXj_dsjnRGjdy-MEvQAFGG7tl82c0lpld-9VqKOPKZI63ICXrEqtML6xqyhAPz0sXI3EmvTyu877l2CFg-w1qP9lzXmVXLmAJkxD9G-AqpVHqr4UldPkCnBA1Hlw_SYMmpocvEt-jtlaG8Uf0rvkZU&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVAGJHFVJyZ3WLxMQRzdwEjE52ryBekqd5ZJTHjRlrPZ7z9_y1qqsX53empneRIN2IvBUKCXhG3CSIsckxhRF4jI1OwvmRRkx7oPOhGk8yJJeXrFfdboxhGB3abOzPtIDngkOsmUVb-tODLYcDR2iXg2GFuVEy47mIXSZy-Uh7Sp0zjcUBsPB3Vh3mx8Pq2cwJa6dUctHdAEp2v7iIW76q4SgRfoJAG8mktvzMsVgA02QhBWuvGT_-6pQTBs-jhEWeWgBNUL3FsQLfsAwHAadtr-kJp7ek-nipMpK40pHOdF67Xcd2_lbvWeNOj4DEUV1bq_XItidlg9OQxLMqAGdQppmFIAJmKz7uiWc0zryCO8z88FNW-39oacCb--caKR9iqIR5Zq4DLJC3THKEKVTKy01K9YR5agIwXyDL2h7fjHjKPfWPlzle7Sbw5X9eE&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "septimeparis",
    michelin_stars: 1,

    verified: true,
    google_rating: 4.4,
    description: "La pierre angulaire de la gastronomie moderne parisienne. Couronné d'une étoile Michelin et constamment classé parmi les meilleurs restaurants du monde (World's 50 Best), le chef Bertrand Grébaut y sert une cuisine d'une justesse fulgurante, épurée à l'extrême (souvent trois ingrédients par assiette), axée sur le végétal et le sourcing d'exception.",
    insider_tip: "• Obtenir une table est l'un des plus grands défis de Paris. Les réservations ouvrent exactement 3 semaines à l'avance à 10h00 pétantes : soyez prêt à rafraîchir la page.\n• L'accord mets & vins (axé nature / biodynamie) est indispensable pour comprendre l'œuvre complète (supplément de 75€ le soir).\n• Le restaurant est fermé les week-ends.",
    expert_catchline: "Une légende vivante de la bistronomie étoilée. Le boss final de la rue de Charonne.",
    specials: {
        cuisine: ["Menu Dégustation 7 temps (Carte Blanche)", "Travail d'orfèvre sur le végétal et les sauces"],
        drinks: ["L'une des plus belles caves de vins natures au monde"],
        must_eat: "Il n'y a pas de carte mais une suite d'assiettes improvisées chaque matin selon l'arrivage de micro-producteurs d'Île-de-France.",
        must_drink: "L'accord Mets & Vins est magistralement pensé pour ne jamais écraser la finesse de la cuisine de Bertrand Grébaut."
    }
};
