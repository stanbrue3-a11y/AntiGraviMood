import { SurgicalPlace } from "../../../type-definition";

export const afaria: SurgicalPlace = {
  id: "poi-afaria",
  slug: "afaria",
  name: "Afaria",
  category: "restaurant",
  subcategory: ["bistrot", "sud-ouest", "traditionnel", "terroir"],
  location: {
    address: "15 Rue Desnouettes, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8360054,
    lng: 2.2916562,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJ7eEnvWxw5kcRkqWjeFXm_Hk"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: 12:00 – 14:00, 19:00 – 22:00 | mercredi: 12:00 – 14:00, 19:00 – 22:00 | jeudi: 12:00 – 14:00, 19:00 – 22:00 | vendredi: 12:00 – 14:00, 19:00 – 22:00 | samedi: 12:00 – 14:00, 19:00 – 22:00 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.restaurant-afaria.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 0,
    is_free: false,
    last_updated: "2026-03-29",
    verified_at: "2026-03-29",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
          { name: "Terrine d'artichaut au lard fumé", price_cents: 1300 },
          { name: "Cappuccino de langoustines", price_cents: 1200 },
          { name: "Escalope de foie gras poêlé", price_cents: 1300 },
          { name: "Velouté de topinambours, rillettes corail", price_cents: 1100 },
          { name: "Moelleux de courge butternut", price_cents: 1300 },
          { name: "Œuf croustilliant, magret fumé", price_cents: 1200 },
          { name: "Croquettes de pieds de cochon", price_cents: 1300 },
          { name: "Croustillant de gambas au basilic", price_cents: 1400 },
          { name: "Salade de gésiers confits", price_cents: 1200 },
          { name: "Os à moelle rôti à la fleur de sel", price_cents: 1200 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Formule Midi (E + P ou P + D)", price_cents: 2500 },
          { name: "Menu Afaria (E + P + D)", price_cents: 2900 },
          { name: "Magret rôti aux sarments (pour 2)", price_cents: 4400 },
          { name: "Dos de cabillaud rôti, fèves", price_cents: 2200 },
          { name: "Quasi de veau à la crème de thym", price_cents: 2300 },
          { name: "Noix de St Jacques, risotto truffe", price_cents: 2800 },
          { name: "Caille farcie au cochon", price_cents: 2600 },
          { name: "Paleron de bœuf en pot-au-feu", price_cents: 2300 },
          { name: "Confit de canard du Sud-Ouest", price_cents: 2100 },
          { name: "Axoa de veau traditionnel", price_cents: 2000 },
          { name: "Ris d'agneau aux girolles", price_cents: 2500 },
          { name: "Pavé de sandre, sauce beurre rouge", price_cents: 2400 },
          { name: "Légumes de saison rôtis au miel", price_cents: 1800 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Millefeuille crème au citron", price_cents: 1000 },
          { name: "Profiteroles vanille, caramel salé", price_cents: 900 },
          { name: "Dôme mousse chocolat passion", price_cents: 1000 },
          { name: "Brioche façon pain perdu", price_cents: 1000 },
          { name: "Tiramisu poire et chocolat", price_cents: 900 },
          { name: "Moelleux tiède au chocolat", price_cents: 1000 },
          { name: "Tarte tatin à l'ananas", price_cents: 1000 },
          { name: "Plateau de fromages des Pyrénées", price_cents: 1200 },
          { name: "Pavlova aux fruits exotiques", price_cents: 1000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Bouteille d'eau minérale", price_cents: 600 },
          { name: "Verre de vin du Sud-Ouest", price_cents: 700 },
          { name: "Café Richard", price_cents: 300 }
        ]
      }
    ]
  },
  description: `Afaria est une ode vibrante au Sud-Ouest, nichée dans le 15e arrondissement. Sous l'impulsion de la cheffe Ludivine Merlin, cet établissement propose une cuisine de terroir magnifiée par une touche de modernité. Entre les magrets rôtis aux sarments de vigne et les terrines d'artichaut raffinées, chaque plat raconte une histoire de produits sourcés et de passion culinaire. L'ambiance y est chaleureuse, évoquant les grandes tablées basques dans un décor élégant et convivial.`,
  expert_catchline: `Cuisine du Sud-Ouest. Magret rôti aux sarments de vigne & Axoa de veau.`,
  insider_tip: `• **Le Bon Plan** : Visez le déjeuner en semaine pour profiter des formules à 25€, un rapport qualité-prix imbattable pour ce niveau de cuisine.
• **Le Festin** : Ne passez pas à côté des pieds de cochon croustillants suivis du magret de canard à partager.
• **L'Ambiance** : La bibliothèque gourmande à l'entrée et l'accent chantant de l'équipe vous transportent directement dans les Landes.`,
  specials: {
    cuisine: ["Sud-Ouest", "Bistrot", "Landais"],
    drinks: ["Vins du Béarn", "Armagnac"],
    must_eat: "Cuisine Basque. Le magret de canard rôti aux sarments de vigne.",
  },
  images: {
    hero: "AU_ZVEHF04LdM3fZxmiE-37ckeBb6GQ4r6xLQaeBgBnNGHrzkr990hY2FskIQhIlGRjDpnJPs-Q6wr4dJZPSzcA78lcUKyOoM8Uezj_EtAOcvh0h3k3Ih6-pg9vKE8hLdFHcw5AEsgCxo7zxmpG2NehLN1AhAST94hAZIcZmrFVi8Ih77k6BQqXnRTgBXo5MI3HBF-fmC_L9AW2pT0AioGC9yODb_ZAzyMs2n0sOiN1iHK4Gl4Vl-eoeVlGmbGRvGNnuhVuajiWA2PgXqRK6MIwkwRcJnMXRQjqymY3VDC1FjkFqsg",
    gallery: ["AU_ZVEGp5jg5v-UATJZ7a1swzQyS8YCUe7_xRoQ-zNG4Br_P-lLhds7_QwmCQ2AdJRYGfqBZUUqWvQazDO24Ok60OBKQgt0v_EbbrJ-zFHOe0ztGRmTVv8tgtu4lvGoRZ8GclTqziaJOXM0nRkgVz2MRPbDtQuqktelQUjIXynpECXgs17GN_6EhGmu_ttVUL6dB_PvvDqmJKZcm8o6IHZrLOnJrQD7JBXEcH_fsXHfWep8gGWhSYOly49u_P_ubmXSbkGeQE0V0XEYzU8V2ujy9HjZwO8UjKjdfY47lYJC0CccxJQ","AU_ZVEGZTSDHayl5FgBpOckwD-kmm4Px30k7sUHrHQinavXStXWHOFye-p7WueEqB0OgUhEYdqzWDCVouTXCWVba1aSw0PG79N2a1NXqCh1RZQIsAfS4NFwts5a9KuZouLloLVTpsIw4IdIwCi2wqiYeCAIKNdVcE2GKs7JeR1HueMG2C8PM5pQxR-9nQeYTKAbqGVuhSwfyMpv1KFKalf8wUpc_Iic7-snwUFnR9lJRvY4nQjhH214r95rZ0CMZal2JBp1iT1SyTdOa7nva2a8wjZKjGmMI6-pYlh4pp9MkNolQoO7hONva5cAWajle3TmEyGZL-w4x9SNX_-R1_Js9dFviP3J_0LHlEhWsJAY-HhySmAl6Y3WHzMq3Rxs_iICpV7x8r_5FvSFxpjVoBncjTdTjDEPZ2vnorAfNEndde9MvAviHs3Q4jYRn2-iSJcG2"]
  },
  verified: true,
  google_rating: 4.7
};

export default afaria;
