import { SurgicalPlace } from "../../../type-definition";

export const le_troquet: SurgicalPlace = {
  id: "poi-le-troquet",
  slug: "le-troquet",
  name: "Le Troquet",
  category: "restaurant",
  subcategory: ["bistrot", "sud-ouest", "viande"],
  location: {
    address: "21 Rue François Bonvin, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8449807,
    lng: 2.3058898,
    nearest_metro: "Sèvres - Lecourbe",
    metro_lines: ["6"],
    google_id: "ChIJd_QQDTtw5kcRReydJyl1KsA"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 20
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 14:00, 19:30 – 22:15 | mercredi: 12:00 – 14:00, 19:30 – 22:15 | jeudi: 12:00 – 14:00, 19:30 – 22:15 | vendredi: 12:00 – 14:00, 19:30 – 22:15 | samedi: 12:00 – 14:00, 19:30 – 22:15 | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.restaurantletroquet.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    is_free: false,
    last_updated: "2026-03-30",
    verified_at: "2026-03-30",
    menu_items: [
      {
        category_type: "tasting_menu",
        display_label: "Les Formules du Troquet",
        items: [
          { name: "Menu Bistrot (Entrée + Plat + Dessert)", price_cents: 4800, description: "La totale pour les bons vivants, selon l'ardoise du jour.", is_highlight: true },
          { name: "Menu Déjeuner", price_cents: 3200, description: "Entrée + Plat ou Plat + Dessert (Midi uniquement en semaine)" }
        ]
      },
      {
        category_type: "starter",
        display_label: "Pour se mettre en appétit",
        items: [
          { name: "Pâté en Croûte Maison", price_cents: 1400, description: "Cochon, volaille, pistaches, pickles de légumes", is_highlight: true },
          { name: "Soupe de Poissons de Roche", price_cents: 1200, description: "Rouille maison, croûtons aillés et gruyère râpé" },
          { name: "Asperges Vertes des Landes", price_cents: 1600, description: "Œuf mollet, vinaigrette aux agrumes" },
          { name: "Carpaccio de Tête de Veau", price_cents: 1300, description: "Sauce gribiche, herbes fraîches" },
          { name: "Couteaux à la Plancha", price_cents: 1500, description: "Persillade, beurre noisette" },
          { name: "Poireaux Vinaigrette Revisités", price_cents: 1100, description: "Vinaigrette à l'ancienne, noisettes torréfiées" }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats Canaille & Tradition",
        items: [
          { name: "Côte de Bœuf pour deux", price_cents: 8500, description: "Maturée 30 jours, frites maison au couteau, béarnaise (Prix pour 2 personnes)" },
          { name: "Ris de Veau Dorés au Sautoir", price_cents: 3800, description: "Macaronis gratinés, jus corsé à la truffe", is_highlight: true },
          { name: "Poitrine de Volailles Jaune", price_cents: 2600, description: "Légumes de saison rôtis, suprême au vin jaune" },
          { name: "Dos de Cabillaud Rôti", price_cents: 2800, description: "Risotto crémeux, émulsion de coquillages" },
          { name: "Saucisse Purée (Plat Canaille)", price_cents: 2200, description: "Purée fondante au beurre, jus de rôti déglacé" },
          { name: "Canette de Challans", price_cents: 2900, description: "Chou rouge braisé, jus acidulé" },
          { name: "Pigeon Rôti sur le Coffre", price_cents: 3400, description: "Cuisse confite, petits pois à la française" }
        ]
      },
      {
        category_type: "sharing",
        display_label: "Fromages Affinés",
        items: [
          { name: "Assiette de Fromages d’Ossau-Iraty", price_cents: 1200, description: "Confiture de cerises noires d'Itxassou" },
          { name: "Camembert Rôti au Four", price_cents: 1600, description: "Thym, miel, mouillettes" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs & Desserts",
        items: [
          { name: "Véritable Gâteau Basque", price_cents: 1100, description: "Crème pâtissière ou cerise noire, glace vanille", is_highlight: true },
          { name: "Riz au Lait de notre Enfance", price_cents: 900, description: "Caramel au beurre salé, nougatine" },
          { name: "Mousse au Chocolat Tiède", price_cents: 1000, description: "Glace vanille turbinée minute" },
          { name: "Profiteroles XXL", price_cents: 1200, description: "Chou craquelin, glace vanille, sauce chocolat chaud" },
          { name: "Tarte Fine aux Pommes", price_cents: 1100, description: "Cuite à la commande (Attente 15 minutes)" }
        ]
      },
      {
        category_type: "drink",
        display_label: "Coups à Boire (Cartes des Vins)",
        items: [
          { name: "Verre de l'Amitié (Vin de Soif)", price_cents: 600 },
          { name: "Verre de Madiran", price_cents: 800 },
          { name: "Bouteille de Minervois", price_cents: 3500 },
          { name: "Bouteille de Saint-Joseph", price_cents: 4800 },
          { name: "Bière Pression Demi", price_cents: 450 },
          { name: "Bière Pression Pinte", price_cents: 850 },
          { name: "Café Allongé", price_cents: 350 },
          { name: "Cognac ou Armagnac (Digestif)", price_cents: 1200 }
        ]
      }
    ]
  },
  description: `Une authentique pépite du 15ème arrondissement où l'âme bistrotier croise le Sud-Ouest avec panache. Avec ses nappes à carreaux vichy rouge et son zinc patiné, le Troquet de Marc Lèze respecte un dogme absolu : la glorification du gras, du bonbon de viande et du jus corsé. La côte de bœuf pour deux y est majestueuse, et le ris de veau fait pleurer les puristes. Le bruit des fourchettes résonne, les verres trinquent, c'est l'anti-fast-food par excellence.`,
  expert_catchline: `Le bistrot franchouillard culte du 15ème : générosité, viande et amour.`,
  insider_tip: `• **Dîner Canaille** : Ne manquez surtout pas le menu complet à 48€, dont le rapport qualité-prix-satiété est quasi imbattable à Paris.
  • **Le Must-Have** : S'il y a du Pâté en Croûte, commandez-le sans réfléchir. Suivez de près avec le Gâteau Basque.
  • **Casting** : Parfait pour y emmener des amis viandards ou un "bon vivant" qui ne jure que par la tradition.`,
  specials: {
    cuisine: ["Bistrot Français", "Sud-Ouest"],
    must_eat: `Cuisine Sud-Ouest authentique. Ris de veau dorés & Gâteau basque.`
  },
  images: {
    hero: "AU_ZVEEQa4VQw0mxfvJrHtQSH3zi8AbJtl_9pp81IaNdDsJzHHkfe3XRkDaFpEKK-Qai-sJzPBqbSN0HEKXo3zuQj1Q5UXYM_zVhdqhuRMHih78T-H2Wg7-BdLQlNOBcBYIhLQvSS24CppdODnYb-4Y9dszQrId6ymtJSyyfUTYd7n3a8L8v-03u3Z5eUA2euywk4g7PPo6dElTBQtnChAQpXX_70UmdqnGSfouaJpcgHlcVYaJtv3-p8AeBGWXmiOuZe2G1hwE_9KlcMqQlx7QaOagq6uqiv8L5Z36lU8YgKtfJCp2U-HQaKAmffDwTbofgbx2yWgQNMVn-ktka-Fytszf4iyvJPicDMVyv33If0hVDDVYx3EJyOvA_j_vkSoB3CFRiheja5OwHX3ZSgeh2QUzqwqYHe1_k5Q61qKFmACB7vMQAn9flC7Ho_w9OBcHb",
    gallery: ["AU_ZVEEegjL_KHbTp6WjfFz6LsH9vq4xxlViyB9WvPx3IzzY1qk_gGe_OjiLtrvFqSGRMZfvGwQkWsV5n0V7wA_sG9HYBhvj-4qCLsagXuIdOh8mRshH5ERWNZfI5OLc-bG0ulK6122SKqzbHM4jnIJo5wMjH57ER1JhR6GVR5qIWiHCTYfNVmr-RRF_A3nBS7CLM8m1jPZpOEiiedQwudpKnnQMXFCT9O8-3Li29oaeBzX2bqS6S2FZUi6v0bUZk_F5IqH8bUwokIWyh6_ydCXiS79w_MtkPdMWYRdJ1E1duVPpl7o49VuV2lMqOy8oHqpnp2jg0jyfp18qFdEjS6vn9JWwXX7d6gW1UyPBF0HST24jxR2u-FQ0OiAf40CDk-35RCUaan4H_WH5S5ubczCYFLD4onFQUkf8w_Fj1_l77LERpbU5","AU_ZVEEfzXmKWfXbIuj4phG6iafgqO1oneVD6_zQmBMY1WxuuoSwtnCVk47PsiAKXVT_1zxBatTrZ0xo4efkNE51srKP9Lm5LhOL19PZxdWhRuJM6fR3kfIF1-n1dYXcMo5ouff2F4Ro4OsyxPtqrWlg8PhFyGIj4a54SzbVp5e8PmF0Y_CQe7Ze_9bNJzkXxkeN8U54T2mdPFz7py2xdLXVoEXFnnPVWo1kqkGZG4dYkykMkb1SCrZe9aEltKK5PvUVUFeRTopBrYJBo8itvRsiRNJN1uHh1jLsbYrw5iJjhmY2f9coWVK8s0P7hUTXBaVVyEzS0Wu3AQkBv86zy0QQ_jQNav4KlNDHmI6Yz4u93vV-nq-EakA8hKsXViS996g0zXGBU0bsVo3URpOEgBwtkXHDlc3WKM5-I2Zv_a0wqFmjZ98"]
  },
  verified: true,
  google_rating: 4.4
};

export default le_troquet;
