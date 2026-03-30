import { SurgicalPlace } from "../../../type-definition";

export const habesha: SurgicalPlace = {
  id: "poi-habesha",
  slug: "habesha",
  name: "Habesha",
  category: "restaurant",
  subcategory: ["restaurant", "éthiopien", "authentique", "partage"],
  location: {
    address: "19, rue Copreaux, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8417736,
    lng: 2.3069471,
    nearest_metro: "Volontaires",
    metro_lines: [6, 12],
    google_id: "ChIJT3-ogTlw5kcRFX7OhEWMn9c"
  },
  moods: {
    chill: 90,
    festif: 10,
    culturel: 100
  },
  practical: {
    opening_hours_raw: "Monday: 7:30 – 11:00 PM | Tuesday: 12:00 – 2:30 PM, 7:30 – 11:00 PM | Wednesday: 12:00 – 2:30 PM, 7:30 – 11:00 PM | Thursday: 12:00 – 2:30 PM, 7:30 – 11:00 PM | Friday: 12:00 – 2:30 PM, 7:30 – 11:00 PM | Saturday: 12:00 – 2:30 PM, 7:30 – 11:00 PM | Sunday: 12:00 – 2:30 PM, 7:30 – 11:00 PM",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://habesha-restaurant.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 22,
    is_free: false,
    last_updated: "2026-03-30",
    verified_at: "2026-03-30",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Azifa (Lentilles vertes moutardées)", price_cents: 450 },
          { name: "Salade Habesha (Oignons & Piment Vert)", price_cents: 550 },
          { name: "Sambusas au Bœuf (x2)", price_cents: 650 },
          { name: "Sambusas Végétariens (x2)", price_cents: 550 },
          { name: "Entrée d’Avocat Citronnée", price_cents: 600 },
          { name: "Hummus à l'Éthiopienne", price_cents: 550 },
          { name: "Salade de Tomates au Gingembre", price_cents: 500 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Doro Wot (Poulet aux 12 épices)", price_cents: 1650, description: "Cuisse de poulet marinée, œuf dur et fromage frais aïb", is_highlight: true },
          { name: "Beyayinetu Végétarien", price_cents: 1650, description: "Assortiment complet de lentilles, choux, carottes et épinards" },
          { name: "Kitfo (Tartare Éthiopien)", price_cents: 1850, description: "Steak haché minute au beurre clarifié niter kibbeh", is_highlight: true },
          { name: "Qäy Wot (Ragoût de Bœuf pimenté)", price_cents: 1750 },
          { name: "Tibs Bœuf Grillé", price_cents: 1850, description: "Sauté de bœuf au romarin et piments" },
          { name: "Tibs Agneau (Lel Tibs)", price_cents: 1950 },
          { name: "Mintchet Abish (Bœuf haché épicé)", price_cents: 1750 },
          { name: "Yebeg Alitcha (Agneau au curcuma)", price_cents: 1800 },
          { name: "Shiro Wot (Onctueux de Pois chiches)", price_cents: 1550 },
          { name: "Gomen Besiga (Bœuf et épinards)", price_cents: 1750 }
        ]
      },
      {
        category_type: "tasting_menu",
        display_label: "Formules",
        items: [
          { name: "Formule Découverte Habesha", price_cents: 1850, description: "Le grand assortiment viandes et légumes sur Injera", is_highlight: true },
          { name: "Plateau Royal (Duo)", price_cents: 4200, description: "Un banquet complet pour deux personnes" }
        ]
      },
      {
        category_type: "other",
        display_label: "Accompagnements",
        items: [
          { name: "Supplément Injera (Galette Teff)", price_cents: 150 },
          { name: "Fromage Frais Aïb Maison", price_cents: 350 },
          { name: "Sauce Berbere (Très pimentée)", price_cents: 100 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Tedj (Hydromel Maison - Verre)", price_cents: 450 },
          { name: "Tedj (Hydromel - Carafon)", price_cents: 800 },
          { name: "Bière Éthiopienne St George", price_cents: 600 },
          { name: "Café Éthiopien (Cérémonie Moka)", price_cents: 450, is_highlight: true },
          { name: "Araqi (Digestif Éthiopien)", price_cents: 550 },
          { name: "Vin d’Éthiopie (Le Verre)", price_cents: 650 },
          { name: "Jus de Fruit Maison", price_cents: 500 },
          { name: "Eau Minérale (75cl)", price_cents: 550 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Baklava aux Noix & Miel", price_cents: 550 },
          { name: "Sorbet Exotique Habesha", price_cents: 550 },
          { name: "Salade de Fruits Frais au Gingembre", price_cents: 600 }
        ]
      }
    ]
  },
  description: `Habesha est une immersion immédiate dans l’hospitalité éthiopienne. Ce petit restaurant chaleureux mise sur l’authenticité des saveurs et le plaisir du partage. Ici, on mange à la main sur une grande injera, cette galette de teff qui sert de plateau et de couvert à la fois. Entre les ragoûts épicés au berbere et les options végétariennes d’une richesse incroyable, chaque repas est un moment de convivialité pure, couronné par la traditionnelle cérémonie du café dont l’arôme embaume toute la salle.`,
  insider_tip: `• **Timing Stratégique** : Le service est patient et authentique, prévoyez du temps pour profiter de la cérémonie du café en fin de repas.
  • **Combo Moelle** : Optez pour la Formule Découverte pour goûter à tous les contrastes, du piquant du Doro Wot à la douceur du fromage aïb.
  • **Expérience Culturelle** : Ne soyez pas surpris, le partage est roi ici ; on mange souvent dans le même grand plat central, comme à Addis-Abeba.`,
  specials: {
    cuisine: ["Éthiopienne Traditionnelle", "Cuisine du Monde"],
    drinks: ["Tedj (Hydromel)", "Café Éthiopien"],
    must_eat: "Cuisine Éthiopienne. Doro Wot & Injera Signature Beyayinetu.",
    expert_catchline: "L’Éthiopie authentique au cœur du 15ème, entre cérémonie du café et partage solidaire.",
  },
  images: {
    hero: "AU_ZVEEJr3pV1I1BwosZ9Y81GUICrW43KODXXVgSU80fqJuBC2LbCkpXy7__-VBDUqUrGhEg9hwmJcwHFDRQ7MsxzUsDPc0Wa9rUcyh6sYUL6_4nswHiBXu3_XNNC4GSCWuIACPFefPgDUVKzFffohlxlzksDB7Fk1ktnm2k7KvOEH4R8bmk6aEhbf3cdXh58sNXCT332RLEOLcdvqlePKVvrghVQ1G96CWlBkBsp1Ix9j40WHqN4jziveLPpS3CthIBI8xDepTJjOeGqzjjfEcMiDu0EhODCEGZth2xdShwMoswfAQcsVFZsR5Q7P97V6X1Jf-jdw_zaQEzOCs-WnCBaiDst8Av46zW-0T5-WbGj3PNQXWEd0BPaaQ1u_qHQyYHQ1vWR9DPQmDPn-9mjza1rOCuMq0adEagcoR9265u7h96KA",
    gallery: ["AU_ZVEGLoZLBIS1fEJX23qyuksr8T9GWt4vfA0BtdoNLrhPP9BPSeZA9oEQrkXOCAh9tHckX8xCjMyalzQyu7qoZyxnMYjCD1o8uedcGX_ewXhp9AS9pPM1Q8EvudBHdPGGtAbXmlOI2G0KAsdsXG9kEINWlWxoWwx5mJ1TB0wewH5FmB30eATkaIVHTNNSf7tX0ynG9Ktr_omm6twdTszADvxPIanI1GE_CVeewaLkPFUtpFO7B1wM06vxl50-FZ7Ry_PiDoZFwqUZ-oQ3EVE2q-eqtiGLatgS2oZ7wogKF5yHj7gholb7ybjChVJQBGFGLYeZXnU_j20UbkLyqJ8UxhJa4l132LAaUaL8M2xM9yO5U8m4zEOX3N-IJLfiOpGGVgJSEDlzNqBF82jCZBeWv1Z8wh7PwQ7bpOkqgZjKBL8zBHA","AU_ZVEGPtVp82HzeaqE1CFU5-FZF7ZaXnHkCmWINEx90Ny2on_y93BFOa9OVVTIs8F3GeGG9840p2NUpa6dvjyzmWXIy6W_2UarloQesj7txsXRDXVqKFSYSv2qsR05J5RCIMYU5AtnXlq7-Nz75UhUUXyjGY5sE72DdEk2tYNFZ1V40xiLS_zP5oVBfXD7Jeg2hpzZjwQQM-EJR9jlgEz5j3wywM2jOF6F05sV7asC4Ri5hhKxf__hCBQWOBNj8ddsW63gvMN2ZDTgb06Tm84qHuOIznE1thWBvyq6rApICbxFbTxbC5ijjLiZKPHk4_F0X4rdNxGVnm4A0ttjY1aDd1AfIG_TLAeSpaXos_1KmSck_vGtIl1ODHFs8OX-sxUjCaBkARnBjtp9ed8A6nbx61h93LWhliEYTNHJu4i-FnJuS1w"]
  },
  verified: true,
  google_rating: 4.8
};

export default habesha;
