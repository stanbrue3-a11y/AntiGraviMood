import { SurgicalPlace } from "../../../type-definition";

export const anona: SurgicalPlace = {
  id: "poi-anona",
  slug: "anona",
  name: "ANONA",
  category: "restaurant",
  subcategory: ["Gastronomique", "Michelin-starred", "Durable", "Moderne"],
  location: {
    address: "80 Bd des Batignolles, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.8819617,
    lng: 2.3186601,
    nearest_metro: "Rome / Villiers",
    metro_lines: [2, 3],
    google_id: "ChIJhXXqWUZv5kcRIeS11clgDck"
  },
  moods: {
    chill: 50,
    festif: 60,
    culturel: 75
  },
  practical: {
    opening_hours_raw: "lundi: 19:30 – 21:45 | mardi: 12:00 – 14:15, 19:30 – 21:45 | mercredi: 12:00 – 14:15, 19:30 – 21:45 | jeudi: 12:00 – 14:15, 19:30 – 21:45 | vendredi: 12:00 – 14:15, 19:30 – 21:45 | samedi: 12:00 – 14:15, 19:30 – 21:45 | dimanche: Fermé",
    reservation_policy: "resa_obligatoire",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.anona.fr/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "gold",
    is_free: false,
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Les Formules & Menus",
        items: [
          { name: "Menu Initiation (Matinée/Midi)", price_cents: 6500 },
          { name: "Menu Signature (Soirée)", price_cents: 12000 },
          { name: "Menu Dégustation Anona", price_cents: 15500 },
          { name: "Accord Boissons Sans Alcool", price_cents: 4500 },
          { name: "Accord Vins Bio & Engagés", price_cents: 6000 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Les Entrées",
        items: [
          { name: "Le Maïs : bœuf Wagyu, maïs habañero, tortilla croustillante", price_cents: 1900 },
          { name: "Le Canard Mulard : à la moutarde, en raviole, figues", price_cents: 2200 },
          { name: "Les Couteaux : vinaigrette à l'huile de graines de courge", price_cents: 1700 },
          { name: "La Carotte des Sables (Vegan) : cuite au jus de carotte", price_cents: 2400 },
          { name: "Asperges Blanches, sabayon agrumes et oxalis", price_cents: 2100 },
          { name: "Betterave rôtie au feu de bois, brebis de l'Aveyron", price_cents: 1800 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Le Cabillaud : pané, chou rouge et kale, pomme de terre", price_cents: 3800 },
          { name: "Le Pigeon : rôti sur l'os et cuisse confite à la noisette", price_cents: 3800 },
          { name: "Le Cochon Montalet : noix d'entrecôte rôtie, haricots coco", price_cents: 4900 },
          { name: "Poisson de Petit Bateau, émulsion d'arêtes grillées", price_cents: 3600 },
          { name: "Céleri-Rave en croûte de sel, truffe noire d'hiver", price_cents: 3500 },
          { name: "Risotto de petit épeautre, champignons des bois", price_cents: 3200 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Les Desserts",
        items: [
          { name: "Dessert du Chariot selon l'humeur du Chef", price_cents: 1400 },
          { name: "Le Soufflé Anona : création de saison", price_cents: 1600 },
          { name: "Mignardises de la Maison Spiwack", price_cents: 1000 },
          { name: "Poire Confite, sorbet verveine du jardin", price_cents: 1400 }
        ]
      }
    ]
  },
  description: `Anona est la table engagée du chef Thibaut Spiwack (Top Chef), récompensée d'une étoile Michelin et d'une étoile verte. Situé face au square des Batignolles, ce restaurant sublime la gastronomie durable avec une éthique radicale : approvisionnement local féroce, réduction totale des déchets et technique de haut vol. Un lieu où l'excellence ne sacrifie jamais la conscience écologique.`,
  insider_tip: `• **Engagement** : La démarche éco-responsable est poussée à l'extrême, n'hésitez pas à poser des questions sur l'origine des produits.
  • **Combo Moelle** : Les créations autour du maïs sont devenues iconiques pour leur équilibre entre rondeur et piment.
  • **Le Midi** : Le menu déjeûner offre l'expérience étoilée avec un rapport qualité-prix imbattable dans le quartier.`,
  expert_catchline: "Quand la haute gastronomie rencontre la conscience écologique radicale.",
  specials: {
    cuisine: ["Gastronomique"],
    drinks: ["Vins Bio", "Mixologie Durable"],
    must_eat: "Cuisine gastronomique. Le cabillaud pané ou les créations au maïs.",
  },
  images: {
    hero: "AU_ZVEF95-uDzquDAT8ssj0ve7RktAW1nLcqWfQ2jlkztBi27-4BbfFMOA8vaaADOhImQq5H_d6BfWJB8urDn_xZN-g2r5YiHq95PqtwwV_a0JlcuaiNwIxiG-UyIf3EwElYn5G8XOv7t9-CVY1IEw5bG8PkDAc6CqUqLEXtsDCM24p87bXqQnvq_da52xcNCf3xpt_akyGwHEhJupyjGy9vWoAiBEzAAL8LPyj4_WN6DKOUlmL1ZoUHEIBVl3ZA323asvtkPIs8sjK-W7SYM0ekD68WZF9wjOvsxqZ9t9Lbh7c",
    gallery: ["AU_ZVEE9HcssRaAUIpLmB9TPD4608-iHAWN9hD7gb7Ta3xDj8n26hekGTDtxCDmG8h4J_7UNqR8Vmux4KQyX9lcVu2_wqROqOaLNkpbd_jQP_zlSUmKKA0mnfMYnTzGkt9UIRVcml5pqmiw0WMlGl6tLhB-9gYxhlF1Vw74uHSwoXyaxZuLMsRYO82CNjMn-JOy_iD2mHOLAyz-6V7AZIwO8bw1szmlECSa8t_Hhgp7GnLXoGW-ogBkNiVmrHG74vY6Fa_gYfIsvPTrwFZvj4WSGzWCc-gSrIjs8P40c4sde93g","AU_ZVEFXXhLFLwRUZaGJmekJYcvYXFVXnnvCbdejV_Svnn14H2YY_MpCxlhwQVDGwPbqBRrQh57wFFe8SXK43JB-IJMBwQ3pvQyDHoHnphw6A5fnuhFWa-SVNq-Aul2AefSSHGdCLlLT0WwbZiKaa1ZTLCrvW9j35rZyITGS4zI0eGjUf0DbUIzdGCX_m8Q1nKaCsTxZ9j48VULp937O7a2gvd3_SABJ0klp2MFo2lLinMqTcZbGQdIjH79iF18tBcZN70nCjzSNn2-ZEUXIv6eHISeywUa2KMHT-zgOxjAMrWM"]
  },
  verified: true,
  google_rating: 4.7,
  michelin_stars: 1
};

export default anona;
