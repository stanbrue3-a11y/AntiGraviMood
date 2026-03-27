import { SurgicalPlace } from "../../../type-definition";

export const forest: SurgicalPlace = {
  id: "poi-forest",
  slug: "forest",
  name: "Forest",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "11 Av. du Président Wilson, 75116 Paris, France",
    arrondissement: 16,
    lat: 48.8643563, // Corrected lat/lng if needed from search
    lng: 2.2968759,
    nearest_metro: "Iéna",
    metro_lines: ["9"],
    google_id: "ChIJ79VeXGRv5kcRA7kQ-xGju00"
  },
  moods: {
    chill: 80,
    festif: 50,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 15:00, 19:00 – 23:00 | mardi: 12:00 – 15:00, 19:00 – 23:00 | mercredi: 12:00 – 15:00, 19:00 – 23:00 | jeudi: 12:00 – 15:00, 19:00 – 23:00 | vendredi: 12:00 – 15:00, 19:00 – 23:00 | samedi: 12:00 – 15:00, 19:00 – 23:00 | dimanche: 12:00 – 15:00, 19:00 – 23:00",
    reservation_policy: "resa_conseillee",
    wifi: true,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://forest-restaurant.com/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 70,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Premières Pousses",
        items: [
          { name: "Pain à partager & Beurre au Shiso", price: "8€", description: "Fait maison, croûte épaisse", highlight: true },
          { name: "Hummus de Betterave & Hibiscus", price: "12€" },
          { name: "Céviche de Daurade au Poivre de Selim", price: "18€" },
          { name: "Aubergine Laquée au Miso", price: "16€", description: "Fondante et fumée", highlight: true },
          { name: "Carpaccio de Navet & Condiment Citron", price: "14€" }
        ]
      },
      {
        category: "Racines & Cœurs",
        items: [
          { name: "Poulet Frit Mosugo", price: "24€", description: "Épices secrètes du chef", highlight: true },
          { name: "Lieu Jaune de Ligne & Sauce Gombo", price: "28€" },
          { name: "Risotto de Fonio aux Champignons", price: "22€", description: "Alternative africaine au riz traditionnel" },
          { name: "Plat de Côte de Boeuf Braisé", price: "32€", description: "Jus corsé au café" },
          { name: "Tataki de Bœuf au Piment Néré", price: "26€" }
        ]
      },
      {
        category: "Final en Forêt",
        items: [
          { name: "Mousse Chocolat & Sel de Maldon", price: "12€" },
          { name: "Ananas Rôti aux Épices Douces", price: "11€", highlight: true },
          { name: "Sorbet Maison Herbes Fraîches", price: "9€" },
          { name: "Sélection de Fromages Affinés", price: "14€" }
        ]
      },
      {
        category: "Infusions & Éclats",
        items: [
          { name: "Mocktail 'Jungle Flow'", price: "14€", description: "Gingembre, curcuma, eau pétillante" },
          { name: "Cocktail 'Forest Moon'", price: "17€", description: "Vodka, basilic, concombre" },
          { name: "Vin Nature (au verre)", price: "12€" },
          { name: "Infusion Maison aux Plantes", price: "8€" },
          { name: "Expresso Bio", price: "5€" }
        ]
      }
    ]
  },
  description: `Forest est l'oasis urbaine imaginée par le chef Mory Sacko au Palais de Tokyo. Dans un décor mêlant béton brut et végétation luxuriante, le restaurant propose une cuisine instinctive, voyageuse et éco-responsable. Les influences africaines et japonaises se mêlent à travers des techniques de fermentation et des épices rares, créant une expérience sensorielle unique face à la Tour Eiffel.`,
  expert_catchline: `La jungle créative de Mory Sacko nichée dans le béton du Palais de Tokyo.`,
  insider_tip: `• **Le Concept** : Les plats sont pensés pour être partagés. N'hésitez pas à panacher entre les entrées végétales et les plats signatures.
  • **Le Soir** : La terrasse est chauffée et offre un point de vue imprenable sur les scintillements de la Tour Eiffel.
  • **Mocktails** : Forest excelle dans les boissons sans alcool artisanales, à tester absolument pour découvrir des saveurs inédites.`,
  specials: {
    cuisine: ["Créative", "Afro-Japonaise"],
    drinks: ["Mocktails Artisanaux", "Vins Nature"],
    must_eat: "Cuisine Créative. L'Aubergine Laquée au Miso, une merveille de fondant.",
  },
  images: {
    hero: "AU_ZVEG6pP9xM8pXk0my6r3dqsxnEeC_YYnCkSH-FXD-a0p2RpkVMxY5yaaPikn2trHdhImEtvA_foQyaZ0rqkZ8nDQKRF5BtCykY5gcPBtFBmw_8XRycQF6NfLNpLCbaN6lk83ZhJQ9SbO1lECp8H9IUCAtYpggdLOoB4IEhfzhJJNQiVSoSApcoEjKTT5_xcbHAMUF7gw0aJVQdLbekyi8-4j5R0S5jWuGzpt6OvJlU2_P9afkUPqVgF-p2JNtSByDKQ6lxEG6K5-9SM_IaNw501U2YPOAdlgBAN1r1V_7I",
    gallery: ["AU_ZVEGXUyAm5Ty3rv7bc1B3crPuv3bGREaE2cCSfH3Nh_TKom5FdWT-O7_9is8fSaKZ8xQ8KAHJ4SjZrZjSLxEbrQTW-azlxb0ILXQNCsKSEbPDcPPcx4dFHSCN3fF45ZhAAWa5cdjTDNaO3b1fxDUW3Smf74jFgyalOBSuBTpEEAVkRMQ2VApyTB7o4LW_UyBSzrFK9OO-_SyRiCapKHxxduXApYM1oW_zMD4X3aJotYRUGL9eaaw3P4YsbkebRuBFU6Z2r-OBobpe9CifJ9Klx0xsFl3Nw27WATCDpvRq8Os","AU_ZVEFMXVOENnRfb9d5_kpXZ4SxvNO_gi53ArMfmbGdI50L3jbqO7ztsu1PnN-_Iker6BjOhTZSIY0-8Hmn9Ye6htvBrWtj6T7myciR01gscL7FrkAkXqkAYeDbMGj6y0WbhmCw5X108Wgz4kj2X2u8xzS_5TA7i_UKA2IfwiLkmppZm-gAfho_mwk3is2lAHGgWvv9mZsO3-JAPQJ5ixUocvZ9slovfsr4FBv6oeSQGl0VoubRpyhyuFfZ_F307Otgt5pGIYrwfWtysonB7mJfnvS2xVQ-tRfvfXNDAOLdRjI"]
  },
  verified: true,
  google_rating: 4.1,
  real_talk: {
    text: "Forest, c'est l'anti-brasserie traditionnelle. Mory Sacko y injecte toute sa coolitude et son talent pour les associations de saveurs qui détonnent. Le cadre est brut, presque post-apocalyptique mais adouci par les plantes. Une expérience à part entière, très connectée à l'époque.",
    must_eat: "Aubergine au Miso",
    le_secret: "La projection de mapping vidéo sur les murs bruts à l'intérieur qui change selon les saisons.",
    le_son: "Afro-beat discret et sons organiques.",
    le_must: "Un dîner tardif après une nocturne au Palais de Tokyo."
  }
};

export default forest;
