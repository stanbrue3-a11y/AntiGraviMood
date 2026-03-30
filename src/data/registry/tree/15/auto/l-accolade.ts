import { SurgicalPlace } from "../../../type-definition";

export const l_accolade: SurgicalPlace = {
  id: "poi-l-accolade",
  slug: "l-accolade",
  name: "L’Accolade",
  category: "restaurant",
  subcategory: ["bistronomie", "français"],
  location: {
    address: "208 Rue de la Croix Nivert, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8372654,
    lng: 2.289306,
    nearest_metro: "Porte de Versailles",
    metro_lines: ["12"],
    google_id: "ChIJGZhFK21w5kcRd7IPRjt7aYA"
  },
  moods: {
    chill: 80,
    festif: 10,
    culturel: 10
  },
  practical: {
    opening_hours_raw: "lundi: 12:00 – 14:00, 19:00 – 21:30 | mardi: 12:00 – 14:00, 19:00 – 21:30 | mercredi: 12:00 – 14:00, 19:00 – 21:30 | jeudi: 12:00 – 14:00, 19:00 – 21:30 | vendredi: 12:00 – 14:00, 19:00 – 21:30 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "resa_conseillee",
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.laccoladeparis.com/",
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
        display_label: "Les Formules & Dégustations",
        items: [
          { name: "Menu Dégustation", price_cents: 6500, description: "Amuse-bouches, 2 entrées, 2 plats, 2 desserts. Changement selon les saisons.", is_highlight: true },
          { name: "Menu Midi (Entrée + Plat ou Plat + Dessert)", price_cents: 2800 },
          { name: "Menu Midi Complet", price_cents: 3500 },
          { name: "L'Accord Mets & Vins (Menu Dégustation)", price_cents: 4500 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Les Entrées",
        items: [
          { name: "Tartare de Crevettes", price_cents: 1600, description: "Mascarpone, avocat et tomates confites", is_highlight: true },
          { name: "Ravioles de Betterave au Tourteau", price_cents: 1700, description: "Glace à la coriandre, bouillon infusé" },
          { name: "Œuf Parfait 63°", price_cents: 1400, description: "Crème de champignons, petits pois croquants, émulsion au lard" },
          { name: "Asperges Blanches Rôties", price_cents: 1800, description: "Sabayon au miso, noisettes torréfiées" },
          { name: "Ceviche de Daurade Royale", price_cents: 1600, description: "Lait de tigre, agrumes, coriandre fraîche" },
          { name: "Velouté de Saison", price_cents: 1200, description: "Herbes fraîches, croutons au beurre salé" },
          { name: "Terrine de Campagne Maison", price_cents: 1300, description: "Pickles maison, pain au levain rôti" }
        ]
      },
      {
        category_type: "main",
        display_label: "Les Plats de Résistance",
        items: [
          { name: "Poitrine de Porc Confite", price_cents: 2600, description: "Braisée pendant 12 heures, jus corsé, purée soyeuse", is_highlight: true },
          { name: "Filet de Bœuf Piqué", price_cents: 3800, description: "Réduction au vin rouge, pommes grenailles fumées au thym" },
          { name: "Poisson de la Criée Rôti", price_cents: 2900, description: "Navet de Tokyo, déclinaison de choux, beurre blanc au yuzu" },
          { name: "Canard de Challans", price_cents: 3200, description: "Lentilles vertes du Berry, chou pointu, ail noir" },
          { name: "Agneau de Lait Confite", price_cents: 3400, description: "Jus de viande, polenta crémeuse aux olives Kalamata" },
          { name: "Plat Végétarien de Saison", price_cents: 2400, description: "Déclinaison de légumes racines glacés, quinoa soufflé, jus végétal" },
          { name: "Ris de Veau Croustillant", price_cents: 4200, description: "Salsifis rôtis, jus tranché à la noisette" }
        ]
      },
      {
        category_type: "sharing",
        display_label: "L'Assiette de Fromages",
        items: [
          { name: "Assortiment de Fromages Affinés", price_cents: 1400, description: "Sélection du marché, confiture de cerise noire" },
          { name: "Demi Saint-Nectaire Fermier", price_cents: 900 }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Les Desserts",
        items: [
          { name: "Le Mille-Feuille Croquant", price_cents: 1200, description: "Crème légère à la vanille de Madagascar, pointe de meringue", is_highlight: true },
          { name: "Tartelette Chocolat Grand Cru", price_cents: 1300, description: "Cacao 70%, caramel beurre salé, tuile de grué" },
          { name: "Pavlova aux Fruits de Saison", price_cents: 1100, description: "Meringue française, chantilly peu sucrée, coulis acidulé" },
          { name: "Baba au Rhum Ambré", price_cents: 1400, description: "Crème diplomate, agrumes" },
          { name: "La Suggestion Glacée du Chef", price_cents: 1000 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Pour la Soif",
        items: [
          { name: "Verre de Vin Blanc (Sélection)", price_cents: 700 },
          { name: "Verre de Vin Rouge (Sélection)", price_cents: 800 },
          { name: "Coupe de Champagne Brut", price_cents: 1400 },
          { name: "Bouteille de Chablis (Bourgogne)", price_cents: 4500 },
          { name: "Bouteille de Pic Saint-Loup", price_cents: 3800 },
          { name: "Gin Tonic Botanique", price_cents: 1200 },
          { name: "Café Expresso", price_cents: 300 },
          { name: "Thé ou Infusion Bio", price_cents: 500 }
        ]
      }
    ]
  },
  description: `À un jet de pierre de la rue du Commerce se cache L’Accolade, une pépite bistronomique de quartier pilotée par le chef Nicolas Tardivel (ancien prof de sport reconverti). Dans une salle minimaliste et chaleureuse, le ton est donné : menu resserré, produits ultra-frais sourcés à Rungis et carte qui valse au rythme des saisons. Sans frou-frou mais avec une précision chirurgicale, les assiettes racontent l'amour du terroir français bousculé par de discrètes fulgurances (ail noir, yuzu, miso). Une adresse intimiste que les habitants du 15ème se murmurent à l'oreille.`,
  expert_catchline: `Bistronomie chirurgicale et poitrine de porc de légende.`,
  insider_tip: `• **Le Menu Dégustation** : C’est la véritable arme secrète du lieu (65€ pour un voyage en 6 temps), à préciser lors de la résa.
  • **Le Must-Have** : Demandez s'il reste du mille-feuille en arrivant, il part extrêmement vite.
  • **La Table Stratégique** : Le petit coin banquette au fond pour fuir l'agitation de la Croix-Nivert.`,
  specials: {
    cuisine: ["Bistronomie Française"],
    must_eat: `Bistronomie de haut vol. Poitrine de porc confite 12h & Mille-feuille croquant.`
  },
  images: {
    hero: "AU_ZVEHuaKfPNtAhtZC-NsFRB62rYXUDmZBDGL5iEe8mrABLaM87z-wZWymo1ZaBeLHEztYW9SOyfOBFbjgU8b-rct5J2kANAz6I4_Z7OiuBxR-KMIZa26-Jt79geyho90wyMd8GB3QlvT7PREBUdo54jPD3iTh3nIorYohCRO81Q-vu9De4JWWlEaboxpBbLD7_ivzTbDr5S62iW2wjji9GOXgm1VXhKZeUw-D7wjGdsxokb8LF_Nwk7VbbbXIG8zPnYDENCr-BWoLxn-qenPFx2ualLS8ysBfnPrZjyVWDosQWqA",
    gallery: ["AU_ZVEFg9hUYewKjA9ZfI16dyOcWKNrPLmz8eF9JGDY-Xn4E_rUAPnRylOQW_QfhlJsNkFNpRRMBc9W2DoIwLuVqBFKpXn4TeDxOnE8Sa668X33x-b8zz_FHTGmX-Oi9g_qn3SzPKuwhCeP_Z0Ff_f35rBDDtZApS6_06NCqSXS7MFX_gjGqKssyle_umeI9x98kSSQHCIiWzYdpu5jUKuwiUQSOcTGpq_5llADc-dyrceXg6jkeC1j1LCBy0IWBVvQcQWZDllS9RFfIi2lqdJHBYunjxl1SmTdwYT_T0eJ4Hx2q0Q","AU_ZVEGvKEXKf-o5Q2S9taQSKfwmoSRpPWm7O0L7Yh6wQVG0xC93-lkT5jBoKdNNYdnfIAlBOm4V3imINkLTDjWePNLmKuhbGm_GpNxISbvMH2L7AG_vL0R9vMjaplUF5e42asNz4a8sucvPiGv2_tpdzOi9D49R-MCE7SfqPdpBTwzYi38cZRCvUoUGXRfoxcZgYN1DS3MDbytJVkPkEaKCtVhCN79-6aXYMXMzw10Ss2sNJJIe8K0c4JxTJ_QVauouPAbUyUAgrECPabm0dEvHpR6tcnFAl-998VQUaP3ASxs6OA"]
  },
  verified: true,
  google_rating: 4.8
};

export default l_accolade;

