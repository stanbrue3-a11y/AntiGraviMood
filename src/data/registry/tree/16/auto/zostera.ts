import { SurgicalPlace } from "../../../type-definition";

export const zostera: SurgicalPlace = {
  id: "poi-zostera-16",
  slug: "zostera",
  name: "Zostera",
  category: "restaurant",
  subcategory: ["gastronomique", "marine", "écologique", "victor-hugo"],
  location: {
    address: "40 Rue Pergolèse, 75116 Paris",
    arrondissement: 16,
    lat: 48.87436,
    lng: 2.2825778,
    nearest_metro: "Argentine / Victor Hugo",
    metro_lines: [1, 2],
    google_id: "ChIJmc1-M0xv5kcRc7IR1byBo7U"
  },
  moods: {
    chill: 90,
    festif: 0,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "Lun-Ven: 12h-14h, 19h-22h30 | Sam-Dim: Fermé",
    reservation_policy: "resa_obligatoire",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.zostera.fr/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    avg_budget: 110,
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Les Menus Côtiers",
        items: [
          { name: "Menu Nature (8 Temps)", price_cents: 12500, description: "L'immersion totale dans l'écosystème marin de Julien Dumas", is_highlight: true },
          { name: "Menu Immersion (6 Temps)", price_cents: 9500, description: "Une partition iodée centrée sur la pêche de ligne" },
          { name: "Menu Déjeuner 'Marée Haute'", price_cents: 5000, description: "4 services, servi uniquement au déjeuner" }
        ]
      },
      {
        category_type: "tasting_menu",
        display_label: "Le Littoral Sauvage (Dégustation)",
        items: [
          { name: "Algues Zostères & Coquillages", price_cents: 0, description: "Bouillon iodé, éponges marines et coquillages du moment" },
          { name: "Huître de l'Île aux Oiseaux", price_cents: 0, description: "Tiédie au feu de bois, eau de concombre et aneth", is_highlight: true },
          { name: "Lieu Jaune de Ligne de Saint-Guénolé", price_cents: 0, description: "Nacre fondante, émulsion de foin et beurre de dulse" },
          { name: "Ormeau Sauvage snacké", price_cents: 0, description: "Jus de viande réduit, salicorne et bourgeons de pin", is_highlight: true },
          { name: "Saint-Jacques de Plongée", price_cents: 0, description: "Crues et marinées, galanga et citron caviar" },
          { name: "Maquereau de Nuit", price_cents: 0, description: "Brûlé à la flamme, condiment raifort et algues kombu" },
          { name: "Langoustine Royales", price_cents: 0, description: "Pêchées à la nasse, bouillon de têtes grillées" },
          { name: "Araignée de Mer", price_cents: 0, description: "En effiloché, herbes folles du littoral et gel d'eau de mer" },
          { name: "Bar de Pêche Artisanale", price_cents: 0, description: "Cuit sur peau, carottes de sable et gingembre sauvage" },
          { name: "Pigeon de Terre et de Mer", price_cents: 0, description: "Le coffre rôti, jus de pigeon infusé aux algues rouges" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Épilogue Sucré (Desserts)",
        items: [
          { name: "Chariot de Fromages de Bretagne", price_cents: 2200, description: "Sélection affinée de petits producteurs bretons" },
          { name: "La Pomme d'Antan de Plougastel", price_cents: 0, description: "Confite au miel de mer et sorbet au cidre fermier", is_highlight: true },
          { name: "Chocolat de la Manufacture", price_cents: 0, description: "Fleur de sel de Guérande, mousse d'embruns iodés" },
          { name: "Rhubarbe Sauvage & Sureau", price_cents: 0, description: "Infusion de fleurs sauvages et meringue légère" },
          { name: "Poire Confite & Algues Dulces", price_cents: 0, description: "Accord terre-mer surprenant" },
          { name: "Mignardises de l'Estran", price_cents: 0, description: "Petits fours au caramel beurre salé et algues" }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave de l'Estran",
        items: [
          { name: "Accord Mets & Vins 'Estran'", price_cents: 7500, description: "Sélection pointue de blancs salins et minéraux" },
          { name: "Accord Sans Alcool 'Rivage'", price_cents: 5500, description: "Infusions d'herbes et jus de légumes pressés minute" },
          { name: "Coupe de Champagne 'Extra Bruts'", price_cents: 2800, description: "Bulle fine et tendue" },
          { name: "Bouteille de Chablis 1er Cru", price_cents: 9000 },
          { name: "Muscadet Sèvre-et-Maine", price_cents: 1200, description: "Le compagnon idéal de l'huître" },
          { name: "Eau Minérale 'Abatilles'", price_cents: 900 },
          { name: "Café de Spécialité 'L'Arbre à Café'", price_cents: 1000 },
          { name: "Infusion d'Herbes Sauvages", price_cents: 1200, description: "Cueillette matinale du chef" }
        ]
      }
    ]
  },
  description: "Zostera est le manifeste culinaire du chef Julien Dumas (étoilé ex-Saint James), niché rue Pergolèse. Ce passionné d'écologie marine propose une cuisine radicale, poétique et profondément sincère, centrée sur les trésors de l'océan et les herbes oubliées du littoral. Chaque plat est une immersion dans un écosystème fragile, sublimé par une technique de haute volée. Dans un cadre épuré et zen, Zostera offre une escale marine vibrante, loin du tumulte de la place de l'Étoile toute proche.",
  expert_catchline: "L'océan sauvage et poétique s'invite à la table étoilée de Julien Dumas.",
  insider_tip: "Demandez au sommelier l'accord sans alcool 'Rivage', les infusions d'herbes sauvages du chef sont révolutionnaires. L'ormeau est un passage obligé si vous êtes en quête de sensations iodées inédites.",
  specials: {
    cuisine: ["Gastronomique Marine", "Océanique"],
    drinks: ["Vins Blancs Minéraux", "Infusions Marines"],
    must_eat: "Cuisine Marine. L'Ormeau Sauvage & Pomme d'Antan confite au Miel de mer.",
    must_drink: "Infusion Sauvage du Chef"
  },
  images: {
    hero: "AU_ZVEEKPsvub9MYLhyaSr4te8-boS0MVr08U4Lyk9nDFc-7gTCqpweudeaziYvh-NZG1_kqmnuk5-4HvKvyt_V6pR5F1RDNFIvwHNMZ78Zx7yDQzPi_5MEE7hvfi__ue9JCSxZMKmO3-n9P0alO5k7bgF8JQrXKGkTZT4_h3B05I3tAqa8yDDwXKQ8_4ESxej_dNhFaLVlykRcqy2saXGMLdpL52e0V03cF53xfHqwYR7izAI0R8Pinx15kXBz4UMi8ueylkGOmBcx8Yn9BA_NgZpLE-ecfJoZ6HtWL0gp6LJvqgcY4r_av2LqzbPS4R9CSiHxG2M9rC-gqum-IyY3UufNxbr3lv7JmfFzenbu8qrfok2O7HmSmzm-8NdPdeYT5zRIeyKQmgGTqpnC-YlETloIWMzgj-ePBkG7afXW3SpN0LzwkkpdkRyRE5qNDnQ",
    gallery: [
      "AU_ZVEFavdi9QTQpTPYEVW7kw5YeN9BHmOkeDT-lSLFLmX7dTnVhD7ov91SgRhS9o1Yk1cK7-I7OlNXZ7v4LKF_q5mwjaMHRs5fvYB4l1_BQnHCK7FcgCGZXfSsxxD7ZU49WeTHXlmMb9zaUOfshi27AX1JIjXff-mpyaWLY81JS2FqRtO1gMdbz4fcWF7xaMJxTBkHFkp6LCaS9djg4KqFy0QUWnFM2rr-_8BJan2mDDl2W1zV3bd-qR6aFsK7n30xKeelXDMCpCFukuA6vK6N0-eXpmCRuPpn_lWAeyAQ0v1AYzA",
      "AU_ZVEENQMulau6anM3GLaPdYlq-ZURgxaoZexbs1g8FjzElqhjGVS9_TnMBa6yowKn70i5V3iuKBMnBlq0trs7c7FAkctDF6UkUkCdUmbjngfISFfWriDIMQM-nRp704L_6nMSpQ8xLxV6BsPBWB7y4YnTU3_NaqbVwv0YC8elDNpAP5JQAvvAXXLYbv5kQWrDU_F9aktqHgdXDr0cSmVV13IMG6-b2gczjg1M7bp1_sdXcYmp0UnPK66fUzseW7p-BzINXaPiySMLWACN72LpH4jx_nkG2l3u75TR-II1Udrmsr8nkDFSA23eMFpFdDFNJLrtVJcZ8WSlxXYiRV2DFDM04b5dG_BXU9zLegcgFVk5QiClpKpvCJ2sYpIGfPvnUOu2G91fpkgeq2xsIYx0PREIwFDDOrtB6wW3nVJIOgrLZTluQF0mAQcpo9bGvBqAA"
    ]
  },
  verified: true,
  google_rating: 4.8,
  michelin_stars: 1,
  instagram_handle: "zostera_paris",
  real_talk: {
    text: "Une expérience sensorielle d'une pureté absolue. Julien Dumas ne triche pas, l'iode est partout, brut et magnifique. C'est du grand art culinaire au service de la planète.",
    must_eat: "Cuisine Marine. L'Ormeau Sauvage.",
    le_secret: "La proximité avec la place de l'Étoile en fait une halte confidentielle parfaite après un rendez-vous d'affaires intense.",
    le_son: "Un silence élégant et apaisé, idéal pour la dégustation.",
    le_must: "Le menu Nature en 8 temps, une véritable odyssée sous-marine."
  }
};

export default zostera;
