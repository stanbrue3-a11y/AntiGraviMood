import { SurgicalPlace } from '../../../type-definition';

export const mokonuts: SurgicalPlace = {
    id: "poi-mokonuts",
    name: "Mokonuts",
    slug: "mokonuts",
    category: "restaurant",
    subcategory: ["cafe", "bakery", "restaurant"],
    location: {
        address: "5 Rue Saint-Bernard",
        arrondissement: 11,
        lat: 48.8507906,
        lng: 2.3813834,
        nearest_metro: "Faidherbe-Chaligny",
        metro_lines: [8],
        google_id: "ChIJlSThMQly5kcR1fXHGctIH88"
    },
    moods: {
        chill: 90,
        festif: 0,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30\nmardi: 12:00–14:30\nmercredi: 12:00–14:30\njeudi: 12:00–14:30\nvendredi: 12:00–14:30\nsamedi: Fermé\ndimanche: Fermé",
        reservation_policy: "resa_obligatoire",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.mokonuts.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 6.50,
        wine_glass: 13.00,
        coffee_price: 3.50,
        dish_price: 27.50, // MÉDIAN des Plats (24€ - 32€)
        last_updated: "2026-03-07",
    menu_items: [
      {
        category_type: "dessert",
        display_label: "Pâtisseries & Cookies Cultes (Desserts)",
        items: [
          { name: "Cookie Sésame noir & Chocolat", price_cents: 400, description: "Le best-seller iconique de Moko.", is_highlight: true },
          { name: "Cookie Avoine, miso & sésame noir", price_cents: 400 },
          { name: "Cookie Chocolat blanc & olive noire", price_cents: 400 },
          { name: "Cookie Chocolat au lait & Noisettes", price_cents: 400 },
          { name: "Cookie Tahini & Chocolat noir", price_cents: 400 },
          { name: "Cookie Peanut Butter & Sea Salt", price_cents: 400 },
          { name: "Cookie Rye (Seigle) & Coquelicot", price_cents: 400 },
          { name: "Tarte Fraise & Basilic", price_cents: 1100, is_highlight: true },
          { name: "Tarte au Citron Meyer & Meringue", price_cents: 1000 },
          { name: "Ricotta & Blood Orange Cake", price_cents: 900 },
          { name: "Fig Tart with Black Sesame", price_cents: 1000 },
          { name: "Apple Plum Chiffon Cake", price_cents: 850 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats de Saison (Midi) (Plats)",
        items: [
          { name: "Labneh maison, za'atar & pain pita", price_cents: 1000, is_highlight: true },
          { name: "Thon blanc saisis & aubergine fumée", price_cents: 1600, is_highlight: true },
          { name: "Œuf mollet, chanterelles & haricots", price_cents: 1500 },
          { name: "Orecchiette au homard breton & bisque", price_cents: 3200 },
          { name: "Filet mignon de porc & asperges", price_cents: 2800 },
          { name: "Quasi de veau rôti, borlotti & sauge", price_cents: 3000 },
          { name: "Lieu jaune de ligne, fenouil & olives", price_cents: 2700 },
          { name: "Caille grillée & légumes racines", price_cents: 2600 },
          { name: "Risotto d'épeautre aux herbes", price_cents: 2400 },
          { name: "Mackerel Crudo, green sauce & radish", price_cents: 1400 },
          { name: "Seared Hake, pil-pil sauce & endive", price_cents: 2100 },
          { name: "Fried Egg, asparagus & bitter lettuces", price_cents: 1200 },
          { name: "Coques (Clams), garlic-herb butter", price_cents: 1200 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons Artisanales & Café (Boissons)",
        items: [
          { name: "Limonade maison à la fleur d'oranger", price_cents: 550, is_highlight: true },
          { name: "Verre de Vin Nature (Sélection)", price_cents: 1300, is_highlight: true },
          { name: "Kéfir de fruits maison", price_cents: 600 },
          { name: "Thé Sobacha (Sarrasin grillé)", price_cents: 500 },
          { name: "Café Filtre (Specialty Coffee)", price_cents: 450 },
          { name: "Café Espresso Lomi", price_cents: 250 },
          { name: "Chocolat Chaud (Valrhona)", price_cents: 600 }
        ]
      }
    ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfV2eTpHdmt7bFdoqB1CvS3fwtpT2b4-yPEmdxAGf5T0LAiAnS6x5-vbTzsNQok8jpumVGJP3HuHIHDA7lR-t7BSj3Y039W-xpsVzJXwLISkvssMZeVqWEbftngMZQ-zUEE6SKxNqvuwq0cpu7Cq0xQJmsVILgDWOebFaxEMhb9WQJanTKuKCAzO4yvv4EyIETm-slhW_7j6T7c_jWyjy8C6xncvJGliqZJz_yHBeOKA32Ul54WMAE2jjiuBMJfUaa-BxT5UkNoujMiFat_ZWXRcorAwmYk2JAr_41kQ5SSN4_wF9k8H_yJECDnVFY4HfcrdVDOaxwXl3CVo9cAOkjJxRb-nkHUFhcqfv9Frsji1rJGSdaawJgHaJ2-67v0W7WpH82N_sSlIAK0bcR1Ww70MjFy4vs4hV78ybYblz5M&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVS7TJs63djItq5oq0_WKRBZXsqTta9qOes7jWGK7PWrjjvSipxHtGM4b2licv2agaDp4UgW-8S73fP1OWuPMaIJ7WLEfDTlH4nCJ4O-Mq7-vvXv0ZAWxWa6_bIKcrwY2hKXui_ZbPxgqaTfn4GWtCejjy6UMehqpeUCVQLoeHH4Ce2hd2DD4Wo3Lk2bLJ_1iqzy-OnH7-8UKSu0L7lT6Kq_hh4XJiZgEWswY9eDwqn1XKNN1QfS2_IWZ145LuczZKfdENCVUoDelNcWbcObZ1dcTbYsX9VcuQ1EdwtVQsI_WlOenXMxRNxXKuQ6xEB2G4PCROj7sFmZQCn45x85N4lzIfPJnLzEOX7tJhkBaOWONZp_wD5YeA3Y0XmCbBAOHe2gDB5bBdKfR-OaAasbyzN3wEw7vrK-SS8BgGyauGUYn9483v25RRB2O5IUTww&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUfK2ommll7lAu5q6HRNdbM2rr_Bip8JUiZKC4DuMaGcrdcfw69PFDGR6ePBsGo4JzuP_59H0e9FJiMYuajJgxtYccsoF39qwbA_1sV2hysCbA5aW6Vjft3_KPfGM-WWgFkiXLD105wWUuePIo8xiuhb_WxmW1vY29CTarbh6SrOJUiKmkONCndoPEx6sNW-2aRDLNLtd3BsgbMYyH5Uxs79_pjB3BaU81kB8OcSV_tPL9AN5R2tL5jM4EPDlEiZUph7IykYNU6twRjuD2B7TsnrdDKN-bWjW_c4DQuyKePTVICk4VxUJqUw5hIvU9BI9ftC3OGAdToj5fGrqUSNoG1thKUExlXtj5X4jREfBCYGcJKoyZaYbpnp86D3CNHRXlC3JrmNAD_OMzNHogWuWHmsbwfUj7q9pyz69EwQXhF5xo&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "mokonutsbakery",
    verified: true,
    google_rating: 4.7,
    description: "Une échoppe hybride mythique tenue par le couple surdoué Moko (pour la pâtisserie japonaise-américaine) et Omar (pour la finesse levantine). Ouvert uniquement la semaine le midi : on y arrache des cookies divins ou on y déjeune des mets ultra-saisonnier.",
    insider_tip: "• Attention : ouverture UNIQUEMENT la semaine et juste le midi. C'est l'un des déjeuners les plus convoités du 11e, réservez des semaines en avance !\n• Les légendaires Cookies de Moko sont cuits tout au long de la journée, réclamez-en un tiède à la sortie du four.\n• Le labneh au Za'atar est l'un des meilleurs que vous trouverez à l'ouest du Bosphore.",
    expert_catchline: "Cuisine levantine de haute précision et, sans doute, les meilleurs cookies de Tout-Paris.",
    specials: {
        cuisine: ["Cookies Sésame Miso", "Labneh maison"],
        drinks: ["Limonade Fleur d'oranger"],
        must_eat: "L'obligation absolue d'engloutir en dessert le Cookie Miso / Sésame noir, reconnu internationalement comme l'extase absolue.",
        must_drink: "Une très pointue citronnade maison fouettée à la fleur d'oranger."
    }
};
