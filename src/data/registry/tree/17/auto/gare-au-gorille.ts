import { SurgicalPlace } from "../../../type-definition";

export const gare_au_gorille: SurgicalPlace = {
  id: "poi-gare-au-gorille",
  slug: "gare-au-gorille",
  name: "Gare au Gorille",
  category: "restaurant",
  subcategory: ['bistrot'],
  location: {
    address: "68 Rue des Dames, 75017 Paris, France",
    arrondissement: 17,
    lat: 48.8835381,
    lng: 2.3199551,
    nearest_metro: "Rome / Villiers",
    metro_lines: [2, 3],
    google_id: "ChIJAdSBY8tv5kcRM4OHfSBjKZM"
  },
  moods: {
    chill: 80,
    festif: 30,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: 12:15 – 14:00, 19:30 – 22:00 | mardi: 12:15 – 14:00, 19:30 – 22:00 | mercredi: 12:15 – 14:00, 19:30 – 22:00 | jeudi: 12:15 – 14:00, 19:30 – 22:00 | vendredi: 12:15 – 14:00, 19:30 – 22:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.gareaugorille.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "gold",
    is_free: false,
    last_updated: "2026-03-31",
    verified_at: "2026-03-31",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Pour Commencer / À Partager",
        items: [
          { name: "Poireaux brûlés, noisettes et vinaigrette", price_cents: 1200 },
          { name: "Tataki de bonite, soja et gingembre", price_cents: 1400 },
          { name: "Terrine de campagne maison", price_cents: 1100 },
          { name: "Croquettes de cochon, crème gribiche", price_cents: 1000 },
          { name: "Asperges vertes, œuf parfait et crème d’ail", price_cents: 1500 }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats",
        items: [
          { name: "Longe de veau rôtie, artichauts barigoule", price_cents: 2800 },
          { name: "Cabillaud nacré, petits pois et menthe", price_cents: 2600 },
          { name: "Risnotto de petit épeautre, champignons de Paris", price_cents: 2200 },
          { name: "Pigeon rôti, betteraves et jus corsé", price_cents: 3200 },
          { name: "Épaule d’agneau confite, purée de panais", price_cents: 2900 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Douceurs",
        items: [
          { name: "Ganache chocolat noir, fleur de sel", price_cents: 900 },
          { name: "Tarte tatin, crème crue", price_cents: 1000 },
          { name: "Sélection de fromages affinés", price_cents: 1200 },
          { name: "Sorbets maison aux fruits de saison", price_cents: 800 },
          { name: "Mousse de riz au lait, caramel beurre salé", price_cents: 900 }
        ]
      },
      {
        category_type: "drink",
        display_label: "La Cave & Boissons",
        items: [
          { name: "Verre de vin (sélection nature)", price_cents: 800 },
          { name: "Bouteille de vin (dès)", price_cents: 3500 },
          { name: "Bière artisanale IPA", price_cents: 700 },
          { name: "Café de spécialité", price_cents: 350 },
          { name: "Eau micro-filtrée", price_cents: 400 }
        ]
      }
    ]
  },
  description: `À deux pas de la place de Clichy, Gare au Gorille s’est imposé comme l’un des fleurons de la bistronomie parisienne. Dans une ancienne forge aux murs de briques et charpentes métalliques, on déguste une cuisine d'auteur brute et précise. Les assiettes, souvent à partager ou non, célèbrent le produit local avec un penchant assumé pour les vins propres.`,
  insider_tip: `• **Timing Stratégique** : Arrivez tôt le soir pour profiter du calme avant le rush des habitués du quartier.
  • **Combo Moelle** : Ne passez pas à côté des croquettes de cochon, véritables signatures de la maison.
  • **Côté Verre** : Laissez-vous guider par les recommandations de l’équipe pour découvrir des vignerons natures confidentiels.`,
  expert_catchline: "L’excellence de la bistronomie brute dans un décor industriel.",
  specials: {
    cuisine: ["Français"],
    drinks: ["Vins Natures"],
    must_eat: "Cuisine de bistrot. La longe de veau rôtie et artichauts barigoule.",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/gare-au-gorille/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/gare-au-gorille/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/gare-au-gorille/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/gare-au-gorille/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/gare-au-gorille/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/gare-au-gorille/gallery_4.jpg"
    ]
  },
  verified: true,
  google_rating: 4.5,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. La longe de veau rôtie et artichauts barigoule.",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default gare_au_gorille;
