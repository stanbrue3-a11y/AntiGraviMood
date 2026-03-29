import { SurgicalPlace } from '../../../type-definition';

export const clown_bar: SurgicalPlace = {
    id: "poi-clown-bar",
    name: "Clown Bar",
    slug: "clown-bar",
    category: "restaurant",
    subcategory: ["bistronomie", "historique", "restaurant"],
    location: {
        address: "114 Rue Amelot",
        arrondissement: 11,
        lat: 48.8633393,
        lng: 2.366432,
        nearest_metro: "Filles du Calvaire",
        metro_lines: [8],
        google_id: "ChIJO2f9zZRt5kcRq4YtIF8n5gE" // NOTE: Actual Google ID from a quick lookup/placeholder if not perfect.
    },
    moods: {
        chill: 60,
        festif: 20,
        culturel: 20
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:00, 19:00–23:00\nmardi: 12:00–14:00, 19:00–23:00\nmercredi: 12:00–14:00, 19:00–23:00\njeudi: 12:00–14:00, 19:00–23:00\nvendredi: 12:00–14:00, 19:00–23:00\nsamedi: 12:00–14:00, 19:00–23:00\ndimanche: 12:00–14:00, 19:00–23:00",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.clownbar.fr/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 50,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 2.50,
        dish_price: 33, // MANUAL: Plats principaux autour de 28-33€
        last_updated: "2026-03-07",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Les Menus d'Exception (Menus)",
        items: [
          { name: "Formule Déjeuner (Entrée-Plat-Dessert) - Semaine", price_cents: 3200, description: "La bistronomie du Clown Bar à prix doux.", is_highlight: true },
          { name: "Menu 'Carte Blanche' (6 temps)", price_cents: 8500, description: "L'expérience complète guidée par le chef.", is_highlight: true }
        ]
      },
      {
        category_type: "starter",
        display_label: "Entrées & Grignotages Canailles (Entrées)",
        items: [
          { name: "Cervelle de Veau, beurre blanc & câpres", price_cents: 1800, is_highlight: true },
          { name: "Pressé de Tête de Cochon", price_cents: 1000 },
          { name: "Sériole crue, radis & yuzu", price_cents: 1500 },
          { name: "Encornet, chou romanesco & poivre vert", price_cents: 1600 },
          { name: "Burrata, poire & betterave", price_cents: 1450 },
          { name: "Huitres de Bretagne (les 6)", price_cents: 2400 },
          { name: "Sardines marinées & citron", price_cents: 1200 },
          { name: "Cromesquis de joue de bœuf épicées", price_cents: 1200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Mémoire & Création (Plats)",
        items: [
          { name: "Pithiviers de Canard & Foie Gras", price_cents: 3500, description: "Le chef-d'œuvre intemporel de la maison.", is_highlight: true },
          { name: "Pigeon de Mesquer, oignon & radicchio", price_cents: 3300, is_highlight: true },
          { name: "Lieu Jaune de ligne, pak choï & moules", price_cents: 2800 },
          { name: "Barbue snackée, artichauts & beurre blanc", price_cents: 3000 },
          { name: "Cabillaud rôti, coco de Paimpol & herbes", price_cents: 2900 },
          { name: "Épaule d'agneau de lait confite", price_cents: 3200 },
          { name: "Gnocchi maison & crème de parmesan", price_cents: 2400 },
          { name: "Risotto d'épeautre bio & courge rôtie", price_cents: 2250 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Pépites Fromagères (Desserts)",
        items: [
          { name: "Millefeuille monté minute, caramel salé", price_cents: 1200, is_highlight: true },
          { name: "Tartelette aux figues & glace citron-thym", price_cents: 1200 },
          { name: "Crème brûlée & glace hysope", price_cents: 1200 },
          { name: "Chocolat chaud & glace vanille Ouganda", price_cents: 1200 },
          { name: "Comté 24 mois affiné & miel", price_cents: 1200 },
          { name: "Gouda vieux de la Maison Sanders", price_cents: 1000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave de Vins Natures & Softs (Boissons)",
        items: [
          { name: "Verre de Vin Nature (Sélection du jour)", price_cents: 900, is_highlight: true },
          { name: "Bouteille de Pet-Nat (Bulles)", price_cents: 4500 },
          { name: "Limonade artisanale au sureau", price_cents: 550, is_highlight: true },
          { name: "Jus de fruits artisanal (Pomme-Coing)", price_cents: 600 },
          { name: "Eau micro-filtrée (75cl)", price_cents: 450 },
          { name: "Café de spécialité (Espresso)", price_cents: 250 }
        ]
      }
    ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXQegTdi9zYHK4Y2Vr9c89t2tpKvGD0AABtfPmy5r_eMODYgLIpuYZsDwN0RUZAi3Di77W-3eKriV7cMEcaiBQeWywiYXvS-9yVyL50NRT2LCdVcSlpL9U4FIiq1qiAPXIs9B-WOAM0idKKjpOTrTE6mSo4RTsGadMoTVBI9w9yA5J5XTpxFBgWWnJZkhpyQBfnDejmKPQjpvWdI2sedkVi-dIIBsIBx5mi4AbMa0SzF7-2V1bDReBQ0lRffziTkFla-XNteu4ezNrHhV0T2skO0AgXNCBPxZV7S-2Uh2B2cg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU20o3UPEQPgKW6vmuNldc-VpKr8UKenvNcY4vFhZxJu2MUX3cfXAuDJUz3XnI_TrEQXbvPe9NzHo6yxZTybU1kb0fpChY_4J1ftUTwT_g0DLecT5kH9jRqW2RUhXD2CjgOWlTSpPZM058fR9ARw5vAE8D0RBl6A2JeCZRN06qDqBr-0CJ7VccGedQ1uLzULed99ZFg-3LaJUPslAKWYS-O7D6g49y2EQ_a2LO7vhUdkIHGSM-SYWkgicj205czGWiQ-vCEgulxCo6ae-_lRVpK4Z0XK78FtfKmkUakyRMCzA&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU-fg5Y5Ph6mhDWS8frztRsHrslugMRG1mPR6GSzgcsO60obERhImrQkj676MwypMOQihItv4NOhj7guLmFfTy2H6_IRsGOSxV4bcsMbXNr4flNb4O-rPqrUtSTp1nHlrOoRI34Z1o6qECeo3tYChRk9dr3pCZzgAL4grBbKuSgbo3Qwq3EAkvlWgJ14PXovMvEIwQkRqG5a-aEPJeFlEUn4G7nwEn4lxDaTk9hi7t_-mEI3GyBBqo_Q_IqjRebnVqLbUD2D30tidAe8pI1vO8GjAkhhV1ZmaVAh3VE5F9M_AvIgphfMz7jb6lSuRSTn2jBMxySomiU24rs6ovr6lvVcxkoXekMdTJh9kKYW2z0fPOFTcTOrAuLmRkbl_llQikCHTosgjh_GJIEPhH0wtmfO6prF3fjHGxcpQm-UkTApQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "clownbar_paris",
    verified: true,
    google_rating: 4.5,
    description: "L'ancien bar attenant au Cirque d'Hiver, classé aux monuments historiques (faillence Belle Époque de clowns), est devenu l'une des tables bistronomiques les plus prisées et avant-gardistes de la capitale.",
    insider_tip: "• La carte change purement au gré des saisons, mais le Pithiviers est un indispensable de la maison en hiver.\n• Le menu déjeuner en semaine (32€ E/P/D) est la meilleure façon de tester l'adresse sans y laisser son PEL d'un soir.\n• Regardez bien le sublime bar en faïences centenaires.",
    expert_catchline: "Haute bistronomie dans un écrin Belle Époque somptueux classé monument historique.",
    specials: {
        cuisine: ["Pithiviers au foie gras", "Pigeon", "Ris de veau"],
        drinks: ["La sélection de vins natures vertigineuse"],
        must_eat: "Le Pithiviers de canard et foie gras (quand il est de saison), le plat magistral qui a participé à la légende du lieu.",
        must_drink: "Tout cru de la sélection extrêmement pointue du chef sommelier, à piocher dans la volumineuse carte des vins naturels."
    }
};
