import { SurgicalPlace } from "../../../type-definition";

export const sacree_fleur_montmartre: SurgicalPlace = {
  id: "poi-sacree-fleur-montmartre",
  slug: "sacree-fleur-montmartre",
  name: "Sacrée Fleur Montmartre",
  category: "restaurant",
  subcategory: ['bistrot'],
  location: {
    address: "50 Rue de Clignancourt, 75018 Paris, France",
    arrondissement: 18,
    lat: 48.8876187,
    lng: 2.3479882,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJf-oe7Wdu5kcRRto099RQ9Fc"
  },
  moods: {
    chill: 70,
    festif: 30,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 18:00 – 22:00 | mardi: 18:00 – 22:00 | mercredi: 18:00 – 22:00 | jeudi: 18:00 – 22:00 | vendredi: 18:00 – 22:00 | samedi: 18:00 – 22:00 | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: false,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.sacreefleur.fr/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 35,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Cuisses de grenouilles en persillade", price_cents: 1400 },
          { name: "Cassolette d’escargots à la normande", price_cents: 1300 },
          { name: "Foie gras et compotée d’échalotes maison", price_cents: 2000 },
          { name: "Mini-tartare de bœuf préparé", price_cents: 1200 },
          { name: "Rillettes maison de maquereaux fumés", price_cents: 1000 },
          { name: "Soupe à l’oignon gratinée", price_cents: 1000 }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Filet de bœuf (200 g) - Sauce Poivre", price_cents: 2900 },
          { name: "Entrecôte (300 g) - Sauce Échalote", price_cents: 2900 },
          { name: "Tartare de bœuf charolais (180 g)", price_cents: 2000 },
          { name: "Travers de porc au miel et au thym", price_cents: 2300 },
          { name: "Magret de canard, sauce cassis", price_cents: 2500 },
          { name: "Pavé de saumon grillé et ratatouille", price_cents: 2400 },
          { name: "Côte de bœuf 1kg (pour 2)", price_cents: 6900 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Brioche façon pain perdu", price_cents: 1000 },
          { name: "Crème brûlée traditionnelle", price_cents: 1000 },
          { name: "Tarte Tatin flambée au Calvados", price_cents: 1000 },
          { name: "Moelleux au chocolat maison", price_cents: 1000 }
        ]
      }
    ]
  },
  description: "Sacré Fleur est une adresse sacrée pour les amateurs de viande à Montmartre. Situé au pied de la Butte, ce restaurant familial se spécialise dans les pièces de bœuf d’exception (Charolais) accompagnées de frites maison et de sauces traditionnelles. Une ambiance de bistrot parisien chaleureux et sans chichis.",
  insider_tip: "• **Timing Stratégique** : Réservation impérative, le lieu est petit et très prisé des connaisseurs.\n• **Combo Moelle** : La Côte de bœuf est la star incontestée, idéale pour partager à deux.\n• **Détail Secret** : Ne repartez pas sans avoir goûté la Brioche façon pain perdu, un monument de gourmandise.",
  specials: {
    cuisine: ["Bistronomie"],
    drinks: ["Vins de Bordeaux", "Vins de la Vallée du Rhône"],
    must_eat: "Cuisine de bistrot. Côte de bœuf d’1 Kg",
  },
        images: {
    hero: "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sacree-fleur-montmartre/hero.jpg",
    gallery: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sacree-fleur-montmartre/hero.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sacree-fleur-montmartre/gallery_1.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sacree-fleur-montmartre/gallery_2.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sacree-fleur-montmartre/gallery_3.jpg",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/sacree-fleur-montmartre/gallery_4.jpg"
    ]
  },
  verified: false,
  google_rating: 4.8,

  real_talk: {
    text: "Une adresse de caractère, authentique et d'une grande sincérité.",
    must_eat: "Cuisine de bistrot. Côte de bœuf d’1 Kg",
    le_secret: "L'ambiance unique du quartier.",
    le_son: "Brouhaha joyeux et convivial.",
    le_must: "L'accueil chaleureux."
  }

};

export default sacree_fleur_montmartre;
