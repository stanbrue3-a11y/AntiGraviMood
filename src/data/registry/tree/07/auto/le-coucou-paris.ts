import { SurgicalPlace } from "../../../type-definition";

export const le_coucou_paris: SurgicalPlace = {
  id: "poi-le-coucou-paris",
  slug: "le-coucou-paris",
  name: "Le Coucou Paris",
  category: "restaurant",
  subcategory: ['français', 'bistronomie'],
  location: {
    address: "35 Av. Duquesne, 75007 Paris, France",
    arrondissement: 7,
    lat: 48.85177729999999,
    lng: 2.3104963,
    nearest_metro: "Saint-François-Xavier",
    metro_lines: ["13"],
    google_id: "ChIJezKqhiZx5kcRTAWG1wjk7iU"
  },
  moods: {
    chill: 70,
    festif: 20,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: 07:30 – 23:30 | mardi: 07:30 – 23:30 | mercredi: 07:30 – 23:30 | jeudi: 07:30 – 23:30 | vendredi: 07:30 – 23:30 | samedi: 09:00 – 23:00 | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    viande_exception: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://lecoucou.paris/",
      label: "RÉSERVER"
    }
  },
  pricing: {
    certification: "silver",
    is_free: false,
    last_updated: "2026-04-01",
    verified_at: "2026-04-01",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Velouté de Butternut à la ciboulette", price_cents: 950, description: "Servi avec des croûtons dorés" },
          { name: "Poireaux vinaigrette tradition", price_cents: 950 },
          { name: "Œufs mayonnaise à l’ancienne", price_cents: 900, is_highlight: true },
          { name: "Soupe à l’oignon gratinée", price_cents: 1100, description: "Le grand classique au gruyère" },
          { name: "Terrine de campagne maison", price_cents: 1200, is_highlight: true }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Magret de canard au miel et romarin", price_cents: 2400, description: "Sauté de champignons et gratin dauphinois", is_highlight: true },
          { name: "Paleron de bœuf braisé", price_cents: 2200, description: "Mousseline de carottes au beurre noisette" },
          { name: "Pavé de cabillaud sauvage", price_cents: 2600, description: "Poêlée de légumes de saison" },
          { name: "Steak d’aloyau", price_cents: 2800, description: "Frites maison et sauce béarnaise authentique", is_highlight: true },
          { name: "Tartare de bœuf au couteau", price_cents: 2200, description: "Frites maison et salade verte" },
          { name: "Rumpsteak fondant", price_cents: 2600, description: "Accompagné de son gratin dauphinois" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Tarte au citron déstructurée", price_cents: 1000, description: "Sablé breton et meringue légère", is_highlight: true },
          { name: "Profiteroles au chocolat chaud", price_cents: 1100, description: "Glace vanille de Madagascar" },
          { name: "Crème brûlée à la vanille", price_cents: 950 },
          { name: "Mousse au chocolat noir", price_cents: 850 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Boissons",
        items: [
          { name: "Café Espresso", price_cents: 250 },
          { name: "Verre de Vin Rouge (Bordeaux)", price_cents: 800 },
          { name: "Pinte de Bière Blonde", price_cents: 900 },
          { name: "Eau Minérale Evian 50cl", price_cents: 500 },
          { name: "Cocktail Spritz Maison", price_cents: 1400 },
          { name: "Coca-Cola 33cl", price_cents: 550 }
        ]
      }
    ]
  },
  description: `Niché au cœur du 7ème arrondissement, Le Coucou Paris incarne l’esprit de la bistronomie moderne avec une élégance discrète. Le chef Antoine y célèbre les classiques du terroir français, retravaillés avec une précision technique qui fait honneur aux produits frais et locaux. L’accueil y est d’une chaleur humaine rare, ce qui en fait une adresse prisée des habitués du quartier des Invalides pour un déjeuner serein ou un dîner convivial.`,
  expert_catchline: `L’âme du bistrot parisien. Une cuisine de terroir précise et un accueil en or.`,
  insider_tip: `• **Daily Specials** : N’hésitez pas à demander les suggestions du jour au chef Antoine, souvent centrées sur les arrivages de saison non listés.
• **Combo Win** : Mariez votre paleron de bœuf avec un verre de leur sélection de Bordeaux pour une expérience Moelle authentique.
• **Anticipation** : La terrasse est très courue dès les premiers rayons de soleil ; arrivez tôt ou réservez votre table pour en profiter.`,
  specials: {
    cuisine: ["Française", "Bistronomie"],
    drinks: ["Belle sélection de vins de vignerons", "Cocktails maison"],
    must_eat: "Cuisine Française. Le magret de canard au miel & romarin suivi de la tarte au citron déstructurée."
  },
  images: {
    hero: "AU_ZVEHLByhNcm4ukpOqrEqQqfxpyMjz55VeDVexCQul9Zgca9jIhb_C5gPDigsa3Mnc6zk5boaFzMPHwmWbzNo-PtI5aHt3drCZa8JWU4drcngioGlOCHxWl39XOZlr7UpB8eZSGTDD_qeyDMuBWO0u7Jv_luVF94Ie-stk71n7Ebfe22d3-gWx6bcG2PbXhCQXjj5vDZX9kkzXOQJ2dVvL8m7gr_5-XspbahIl1sjg60PINsCy2Pcxlo6k9gL4rJdZusmZgf1EjUArDjDxrrLkn2PW1RnrraZPkFkSDwIL9rD1R8Jp7A7Rq3y5sQFif3fKVyFwd2WA9pOWGI3Ux1743mHDOPhAFU54mnXMHw9y4ysAqw9phRvV1OWA5QLyqCXlrOz0Xvm871KQAJezTrPQ89LPUvE6NDxfuAURrzIBA8fR4wSHQVIiNWlal-Bt3ljC",
    gallery: [
      "AU_ZVEGovqLZ7aC6c_qameYdadC-d8XBDYmnGexYLGtg9CfwFhA5EkwdQjTpZtorZQO3svy1BBT8ZA_PNb0iZk15fBnUhdscJ_8JzN5ag0aLL08oQ_7_g9QSG5uvMJ8aqi4VFTrlhYVQAeMLTvXFcELa59qavxEn78ZiFuSpWo_2lBacPeQXEYxHKD8Cn4o9EgerpDtJZ7aWCw_KbOobFiYRZPTIyYreAmbrrV9CMhUvvY2LsiceXpDcd8Ubp8X1V54wKU8IcVnHv9aJN4MD2AcetwueCHQUjW57JzywXdbw_Tg_3QnoAGMtF3RYmwpaXnJSjxZ7jNOA84Dj5yoau7ypg4U4LFMze9zVoJ-kC-56tDjEfuXYpoVPg-PmO8_SmayE53nuxN5qofiW0mqqdqWKM3opzORe5rnXFRXmZYvnrwV4t0RYXnYQLz9KfA-Y4KkH",
      "AU_ZVEEArmQVfG31QHx4IATMo8UdWdz2KFfl6UCnKpIoqGXzedSdDAiHnGpBjOlUbGJpxR0AQU3C8CPRxWnAC24Ev9OzhlJxj5uzhUs0KBsm1DmVcE2gIZW0NSAr9SAPMH7AU4emVieM-95oAbktymLhmPFi3oTO1bDtiB5VmlKenK6tb6T5yXUsrbabGqCcP_8DaidAusFMoNjo4rrHg4T4l2XWbqKOvxNLilS3e-rp_XEYwzghfXJZhn4ccwrBVXQgkwyTfQQR-LeCysYV7AfhOq2Pcs_cXV95OpBzRM75a4rGYQ",
      "AU_ZVEHhrpQ9yU8Qk-JaOotP_chII9316uvuu_0qRPO3r1XIKHVKWHrkGZ208Tf1DaxXxc41NYFXWzOB3XhP-6SRSntonRNpgdZtlkLM3eHUHx4m27Pc3V4_9gflsvF1pYi1wOE4esZ5TNB_RVgzhadWEmkq-2r1onPHmJbePAa2p-j0BR5OeupvghHv3qpXCfpio847bEOV3-pEEsWJL3f5ojnW_rAVKojzgRBxp7t6kmad90Djx-_fxHWptpnbQ_9Py0MjxUqtoRT8IJpmOV0Nw3otVqO8rRQ-LBL-OIuZXnuKkdX5dcPCvklYFD9oYr2IS7vDCegX3_g-oukPHbzDGlU_k74Zjb7LwwPA5qf7D4SGYlAUWRJvNGwN6MRfZ4kPp9IkOM0BICJRCV6xz2HrlczGSKoA8Cw1n1Ik7hnnIzdm4A",
      "AU_ZVEECgpHrFf_sEsN0GySZzbE4IhzDz7Lla9Ve_v5JJx2SvZTOfoBRsHke6PYnqQ8f5Y2R_B2Sw8tU1ppkKqpWGYvNhHUueGk6lY5CuPgfv-UySmaSihyqpp1Zzw9syLHRgut81SW55AP6MF3_nehEC6511eKEcKeY02sR5MUXCyrS8xgUX1iiRJ-7NW8Kt4Qz08lWJtRi_RJhDbE6yQZBlrwlB0ZC4jfE8dvzTvKBo6LVb4Il4SPS6PzJVEWZOiJbhIOeAeHB9g36jC4jL5m1h_6IRxbMOr5evJBkAu12jX-95A"
    ]
  },
  verified: true,
  google_rating: 4.8
};

export default le_coucou_paris;
