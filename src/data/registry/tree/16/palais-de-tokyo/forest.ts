import { SurgicalPlace } from "../../../type-definition";

export const forest: SurgicalPlace = {
  id: "poi-forest-16",
  slug: "forest",
  name: "Forest",
  category: "restaurant",
  subcategory: ["créative", "afro-japonaise", "festif"],
  location: {
    address: "11 Av. du Président Wilson, 75116 Paris",
    arrondissement: 16,
    lat: 48.8643563,
    lng: 2.2968759,
    nearest_metro: "Iéna",
    metro_lines: ["9"],
    google_id: "ChIJ79VeXGRv5kcRA7kQ-xGju00"
  },
  moods: {
    chill: 40,
    festif: 85,
    culturel: 95
  },
  practical: {
    opening_hours_raw: "Lun-Dim: 12h-15h, 19h-02h",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: true,
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
          { name: "Pain & Beurre au Shiso", price: "8€", description: "Fait maison, croûte épaisse", highlight: true },
          { name: "Hummus de Betterave & Hibiscus", price: "12€", description: "Couleur éclatante, saveur terreuse" },
          { name: "Céviche de Daurade", price: "18€", description: "Poivre de Selim et agrumes" },
          { name: "Aubergine Laquée au Miso", price: "16€", description: "Fondante et fumée, la signature", highlight: true },
          { name: "Carpaccio de Navet", price: "14€", description: "Condiment citron et noisettes" },
          { name: "Falafel de Haricots Cornilles", price: "13€", description: "Inspiration d'Afrique de l'Ouest" },
          { name: "Croquettes de Plantain", price: "11€", description: "Cœur fromage pimenté" },
          { name: "Sashimi de Thon au Néré", price: "19€", description: "Piment fumé et graines fermentées" },
          { name: "Tempura de Fleurs de Courgette", price: "15€", description: "Farcies au labneh maison" }
        ]
      },
      {
        category: "Racines & Cœurs",
        items: [
          { name: "Poulet Frit Mosugo", price: "24€", description: "Épices secrètes de Mory Sacko", highlight: true },
          { name: "Lieu Jaune de Ligne", price: "28€", description: "Sauce gombo et citronnelle" },
          { name: "Risotto de Fonio", price: "22€", description: "Champignons sauvages et huile d'argan" },
          { name: "Boeuf Braisé au Café", price: "32€", description: "Jus corsé, carottes fondantes" },
          { name: "Tataki de Bœuf au Piment", price: "26€", description: "Piment Néré et oignons grillés" },
          { name: "Dorade Grillée Suya", price: "27€", description: "Épices torréfiées nigérianes" },
          { name: "Agneau Confite au Miso", price: "34€", description: "Épaule fondante pour deux" },
          { name: "Burger Forest Wagyu", price: "29€", description: "Pain sarrasin, cheddar fumé" },
          { name: "Gnocchis de Patate Douce", price: "23€", description: "Sauge et beurre noisette" },
          { name: "Octopus à la Flamme", price: "31€", description: "Crème de maïs et piment doux" }
        ]
      },
      {
        category: "Final en Forêt",
        items: [
          { name: "Mousse Chocolat & Maldon", price: "12€", description: "Texture aérienne, fleur de sel" },
          { name: "Ananas Rôti aux Épices", price: "11€", description: "Sirop de poivre long", highlight: true },
          { name: "Sorbet Herbes Fraîches", price: "9€", description: "Basilic, menthe et coriandre" },
          { name: "Plateau de Fromages Affinés", price: "14€", description: "Sélection de la maison" },
          { name: "Pavlova Fruits Exotiques", price: "13€", description: "Passion, mangue et coco" },
          { name: "Cookies Miso-Chocolat", price: "8€", description: "Sortis du four" }
        ]
      },
      {
        category: "Infusions & Éclats",
        items: [
          { name: "Jungle Flow (Mocktail)", price: "14€", description: "Gingembre, curcuma, eau pétillante" },
          { name: "Forest Moon (Cocktail)", price: "17€", description: "Vodka, basilic, concombre" },
          { name: "Vin Nature (au verre)", price: "12€", description: "Sélection vivante" },
          { name: "Infusion Maison", price: "8€", description: "Plantes fraîches du jardin" },
          { name: "Expresso Bio", price: "5€" },
          { name: "Thé Vert Japonais", price: "8€", description: "Sencha de prestige" }
        ]
      }
    ]
  },
  description: "Forest est l'expérience sauvage de Mory Sacko nichée au Palais de Tokyo. Entre béton brut et lierre grimpant, le chef de Top Chef décline une partition instinctive où l'Afrique, le Japon et la France fusionnent. Un lieu vibrant, éco-responsable, où la fermentation et les épices rares créent un voyage immobile face à la Dame de Fer.",
  expert_catchline: "La jungle gastronomique de Mory Sacko face à la Tour Eiffel.",
  insider_tip: "Demandez une place en terrasse le soir pour profiter de la Tour Eiffel scintillante. L'aubergine au miso est un passage obligé, même pour les carnivores convaincus.",
  specials: {
    cuisine: ["Créative", "Afro-Japonaise"],
    drinks: ["Mocktails Artisanaux", "Vins Nature"],
    must_eat: "Cuisine Créative. Aubergine Laquée au Miso & Poulet Frit Mosugo.",
    must_drink: "Jungle Flow Mocktail"
  },
  images: {
    hero: "AU_ZVEEmE9rv-aCPgCAyTmxR2H0CPcL14107FignwjhUqNvm3zOHsJzqy94JS6jxT3k-ER05NBastB1YB-GPsxuAdXhDfn8JZ7dcEasFnrLcmgH4twEkL4NarpNvh9MIpklMl27HiZrYqnmYghG46Tas9ZPAmeedQ5TaL6Cagvw7x8vIayAfzEwsRf5HFcNtLX2pf88mFHdlQEBNxG7FSFvduaGY-aOK-Obn8TBBjqlJx50Qs5wSjtnfzcBJYXle-fF9aRdNTZJghqW69Y5INgiMSLZ45ZhmLlzQlQPIUAsZjP6TMA",
    gallery: [
      "AU_ZVEEIk1obynKlokzJlr8RnyPuSgcJjPBLEMbkkAcKUQruaIYIeWTabAWSWRmboQdms0wZ2UPl4n4NfAglspJghjsVbaoWkAsHZKHQfM1f8khHmVQ5QoI8EfYhmCvzzn7oUkCsj5CaXsVA3kgNpYyVcNpcqKpvqhr3HrjvsLim-RImBcvFtw9ponAdOvMBZRpttQvYlU9CwnN01SdLFRV2jC3Lp9sLbHZK_eugyX-WeFcxI9-SqbbRT-sdOv5RoudjIEWPJkjaBXRJnBO-Brbt3HRW4NiFl8fl1Q8k5bk3uP8MMQ",
      "AU_ZVEHlk403JpOAvIAN0SlMhe4AwcaYVTQQBAKVW2yMHLVGo5bu-f-S8IDpPM8PKO2aIzKeBWh2P8bJ7uybOMlSwp_VceJub0zJt3z-z0usz3fMsYAgcIHoa6tfUhwjTzaOZbdAZgpHhZD02HbU1Z62j6G0CIakxnltDUMwHxetUTDXStGJ0tvfHDjCIWblNxt3ktQ_yy6oIFJiqtVyKJxdni5SLm-9irVyk0-Wq7wxyMjx58dRRrBHQrQnEKuIx4iev89cdN6gG2p-Ia4GL02jWm_CGbjqO9pCaXYBpSpiOD39XQ"
    ]
  },
  verified: true,
  google_rating: 4.1,
  instagram_handle: "forest.paris",
  real_talk: {
    text: "Mory Sacko a créé une bulle hors du temps. C'est brut, c'est vert, et l'assiette bouscule les codes sans jamais être prétentieuse.",
    must_eat: "Cuisine Créative. Aubergine au Miso.",
    le_secret: "Le mapping vidéo sur les murs bruts qui change selon les saisons.",
    le_son: "Afro-beat chill et sons organiques.",
    le_must: "Le cocktail en terrasse face aux scintillements de la Tour Eiffel."
  }
};

export default forest;
