import { SurgicalPlace } from "../../../type-definition";

export const pedzouille_la_grange: SurgicalPlace = {
  id: "poi-pedzouille-la-grange",
  slug: "pedzouille-la-grange",
  name: "Pedzouille La Grange",
  category: "restaurant",
  subcategory: ['français'],
  location: {
    address: "4 Avenue de la Porte de la Plaine, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8300006,
    lng: 2.2918557,
    nearest_metro: "Porte de Versailles",
    metro_lines: ["12", "T2", "T3a"],
    google_id: "ChIJx6FWq69x5kcRJ4EFegO5w0o"
  },
  moods: {
    chill: 60,
    festif: 90,
    culturel: 40
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:30, 19:00 – 23:00 | mardi: 12:00 – 14:30, 19:00 – 23:00 | mercredi: 12:00 – 14:30, 19:00 – 23:00 | jeudi: 12:00 – 14:30, 19:00 – 23:00 | vendredi: 12:00 – 14:30, 19:00 – 01:00 | samedi: 12:00 – 15:00, 19:00 – 01:00 | dimanche: 12:00 – 15:00, 19:00 – 23:00",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.pedzouille.fr/la-grange/",
      label: "RÉSERVER AU ROOFTOP"
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
        display_label: "Les Formules de la Ferme",
        items: [
          { name: "Formule Déjeuner (Entrée + Plat ou Plat + Dessert)", price_cents: 2400, description: "Uniquement le midi en semaine. Frais et rustique." },
          { name: "La Totale du Déjeuner (Complet)", price_cents: 2900 },
          { name: "Formule Pitchoun (Enfant)", price_cents: 1400 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Pour Commencer (Entrées)",
        items: [
          { name: "Camembert Flambé au Calvados", price_cents: 1400, description: "Coulant à souhait, flambage à table, pain grillé", is_highlight: true },
          { name: "Pâté en Croûte de Compétition", price_cents: 1200, description: "Recette secrète de la Grange, pickles maison" },
          { name: "Œuf Mollet du Poulailler", price_cents: 900, description: "Crème de champignons, éclats de noisettes" },
          { name: "Os à Moelle Rôti", price_cents: 1300, description: "Fleur de sel et poivre moulu, mouillettes beurrées" },
          { name: "Planche de Charcuterie Fine", price_cents: 1800, description: "Sélection de nos terroirs de France" },
          { name: "Burrata Crémeuse & Légumes Rôtis", price_cents: 1500, description: "Huile de noisette et basilic" }
        ]
      },
      {
        category_type: "main",
        display_label: "Le Coût de Fourchette (Plats)",
        items: [
          { name: "Le Steak Barbare (Veau Bleu d’Auvergne)", price_cents: 2600, description: "Tartare de veau coupé au couteau, noisettes, condiments", is_highlight: true },
          { name: "Ave Pedzouille ! (Poulet de Ferme)", price_cents: 2400, description: "Suprême de poulet, sauce à l’Ossau-Iraty, purée maison" },
          { name: "Daurade l’Exploratrice", price_cents: 2800, description: "Filet rôti, légumes oubliés glacés, beurre aux herbes" },
          { name: "Côte de Bœuf Maturée (Pour deux)", price_cents: 8200, description: "Sélectionnée par notre boucher, frites maison, os à moelle (Prix pour 2)" },
          { name: "L’Entrecôte de la Grange (300g)", price_cents: 3400, description: "Poivre en grains ou sauce Bleue, frites authentiques" },
          { name: "Burger des Champs", price_cents: 2200, description: "Bœuf français, Comté 18 mois, oignons confits, sauce Pedzouille" },
          { name: "Risotto d’Épeautre (Végé)", price_cents: 2100, description: "Courge rôtie, copeaux de fromage de brebis, sauge" }
        ]
      },
      {
        category_type: "dessert",
        display_label: "La Récompense (Desserts)",
        items: [
          { name: "Tarte Tatin de la Mère Grand", price_cents: 1000, description: "Pommes caramélisées, crème crue d’Isigny", is_highlight: true },
          { name: "Mousse au Chocolat XXL", price_cents: 900, description: "Servie à la louche, noisettes caramélisées" },
          { name: "Pavlova aux Fruits Rouges", price_cents: 1100, description: "Meringue légère, chantilly à la vanille bourbon" },
          { name: "Brioche Perdue au Caramel", price_cents: 1000, description: "Glace au lait d’amande, caramel beurre salé" }
        ]
      },
      {
        category_type: "drink",
        display_label: "Pour Arroser tout ça (Boissons)",
        items: [
          { name: "Cocktail Signature ’L’Abreuvoir’", price_cents: 1400 },
          { name: "Verre de Vin Bio (Sélection)", price_cents: 700 },
          { name: "Pinte de Bière Artisanale", price_cents: 900 },
          { name: "Bouteille de vin rouge (Morgon)", price_cents: 3600 },
          { name: "Limonade Artisanale", price_cents: 550 },
          { name: "Café de la Ferme", price_cents: 300 }
        ]
      }
    ]
  },
  description: `Perché au 8ème étage avec une vue spectaculaire sur la Tour Eiffel, Pedzouille La Grange est une véritable auberge franchouillarde suspendue dans le ciel de Paris. Entre bois brut, tables d’hôtes et cloches de vaches, l’ambiance est rustique, joyeuse et résolument festive. On y vient pour la côte de bœuf maturée, le camembert flamboyant et l’énergie débordante d’une équipe qui ne se prend pas au sérieux. Un rooftop atypique où le terroir français rencontre le panorama parisien le plus iconique.`,
  expert_catchline: `L'auberge montagnarde perchée sur un toit du 15ème, face à la Dame de Fer.`,
  insider_tip: `• **Le Spot Tour Eiffel** : Les places en terrasse au bord de la rambarde sont les plus demandées, réservez tôt et précisez votre souhait.
  • **Le Must-Eat** : Le Camembert flambé au Calvados est un spectacle visuel et gustatif incontournable pour démarrer.
  • **L'Ambiance** : Le week-end, le lieu se transforme en véritable fête foraine montagnarde avec sets DJ et karaoké improvisé.`,
  specials: {
    cuisine: ["Française de Terroir"],
    must_eat: `Cuisine rustique de rooftop. Camembert flambé & Côte de bœuf maturée.`
  },
  images: {
    hero: "AU_ZVEE7S7O2Y2rAnvJszA-sL0z8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS",
    gallery: ["AU_ZVEE_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS","AU_ZVEE_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS_L7rC2g-sZ_L8yAyL6Nsh9V_pE62D_oV8u7mS"]
  },
  verified: true,
  google_rating: 4.4
};

export default pedzouille_la_grange;
