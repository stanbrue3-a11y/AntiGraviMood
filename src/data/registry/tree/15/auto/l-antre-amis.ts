import { SurgicalPlace } from "../../../type-definition";

export const l_antre_amis: SurgicalPlace = {
  id: "poi-l-antre-amis",
  slug: "l-antre-amis",
  name: "L’Antre Amis",
  category: "restaurant",
  subcategory: ["bistronomique", "gastronomique", "créatif", "français"],
  location: {
    address: "9 Rue Bouchut, 75015 Paris, France",
    arrondissement: 15,
    lat: 48.8467683,
    lng: 2.310242,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJLXq2ATBw5kcRoqrUsJbvP8w"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: 12:15 – 14:45, 19:30 – 23:00 | mardi: 12:15 – 14:45, 19:30 – 23:00 | mercredi: 12:15 – 14:45, 19:30 – 23:00 | jeudi: 12:15 – 14:45, 19:30 – 23:00 | vendredi: 12:15 – 14:45, 19:30 – 23:00 | samedi: Fermé | dimanche: Fermé",
    reservation_policy: "sans_resa",
    wifi: false,
    terrace: true,
    ferme_tard: false,
    accessibility: true,
    main_action: {
      type: "site",
      url: "http://www.lantreamis.com/",
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
        category: "Entrées",
        items: [
          { name: "Carte blanche du chef en 5 temps", price: "96€", description: "Accompagnée de son accord mets et vins", highlight: true },
          { name: "Terrine de foie gras au Bas Armagnac", price: "24€" },
          { name: "Carpaccio de noix-de-Saint-Jacques, citron et noisettes", price: "28€" },
          { name: "Jardin de légumes printaniers", price: "18€", description: "Crème d'épinards, petites crevettes roses de Madagascar" },
          { name: "9 Escargots de Bourgogne Extra Gros", price: "16€" },
          { name: "Langoustines croustillantes au basilic", price: "22€", highlight: true },
          { name: "Carpaccio de Poulpe de Roche", price: "24€", description: "Huile d'olive et citron" },
          { name: "Sardinillas 'La Brujula'", price: "12€" },
          { name: "Chiffonnade d'épaule Ibérique", price: "19€", description: "Région Extramadura beurre et cornichons" }
        ]
      },
      {
        category: "Les Plats",
        items: [
          { name: "Coeur de faux-filet mature", price: "32€", description: "Pommes frites maison" },
          { name: "Suprême de volaille aux morilles", price: "28€", description: "Gnocchi de pommes-de-terre et crémée de vin jaune" },
          { name: "Côte de bœuf Angus maturée (pour 2)", price: "80€", highlight: true },
          { name: "Merlan de Saint-Gilles-Croix-de-Vie", price: "26€", description: "Fricassée de champignons et asperges vertes" },
          { name: "Pavé de veau de chez 'Hugo Desnoyer'", price: "35€", highlight: true },
          { name: "Risotto crémeux aux morilles fraîches", price: "24€" },
          { name: "Filet de boeuf Rossini façon Chateaubriand", price: "42€" },
          { name: "Sole meunière des Côtes Bretonnes", price: "45€" },
          { name: "Risotto de Noix de Saint-Jacques", price: "28€" }
        ]
      },
      {
        category: "Douceurs",
        items: [
          { name: "Mousse au chocolat soufflée", price: "14€", description: "Praliné noisettes, griottes à l'amaretto" },
          { name: "Ananas rôti", price: "14€", description: "Émulsion à la noix de coco, crumble et sorbet exotique" },
          { name: "Riz au lait à la vanille de Madagascar", price: "12€", description: "Caramel au beurre salé, noisettes et noix de pécan", highlight: true },
          { name: "Assiette de fromages affinés", price: "16€" }
        ]
      },
      {
        category: "La Cave",
        items: [
          { name: "Champagne Billecart-Salmon", price: "90€" },
          { name: "Champagne J-L Vergnon", price: "75€" },
          { name: "Champagne Langlet Taittinger", price: "85€" }
        ]
      }
    ]
  },
  description: `À la frontière du 7ème et du 15ème arrondissement se love l'Antre Amis, une table discrète et élégante. Le chef propriétaire y déploie une cuisine d'auteur, sourcée directement à Rungis et magnifiée par une exécution redoutable. Le cadre haussmannien, feutré sans être guindé, est le théâtre de repas bistronomiques de haute volée où le produit brut est roi.`,
  expert_catchline: `Haute Bistronomie Française. L'incroyable Menu Carte Blanche en 5 temps.`,
  insider_tip: `• **Le Bon Choix** : Osez le grand jeu avec le menu 'Carte Blanche' en 5 temps avec accords mets/vins, une véritable démonstration de l'étendue du talent de la cuisine.
• **L’Apothéose** : Si vous prenez à la carte, le Pavé de veau de chez Hugo Desnoyer est une viande d'exception incontournable.
• **L'Option Chill** : L'après-midi, la maison propose de formidables tapas haut de gamme (poulpe de roche, langoustines) pour un apéro dînatoire très exclusif.`,
  specials: {
    cuisine: ["Bistronomique", "Créatif", "Gastronomie Française"],
    drinks: ["Plus de 150 vignerons", "850 références en cave"],
    must_eat: "Cuisine bistronomique. Le faux-filet maturé et le Menu Carte Blanche.",
  },
  images: {
    hero: "AU_ZVEGCdaIEW94dd3aTekoVEsfXQ4eO9Z8dnzJn4p2RY_y8UcnEN53Lue93zGHIbSPSXxn44abSkh5U_rD_w6hQOpQlOdmQC2IOSVEWxPfav1yER21Qux6Or3oU3_cGd5eyIIhUNorzn7xhxPycBEad240lS8hj2sds7IFrHEGxW43qeT68rB1eT7nODOQiTqTLXy7eBjGY5IoMoYKAX88KsmUQKPalLoFPGlYc8wgp6QvvhGPSsXXKKBv8iC8gZyruMjbYzvMSJmjDfEaIQGBr8q7CWYb0N_rzi7dNtnDkiOJYSg",
    gallery: ["AU_ZVEHgkzAtetKklIoDWcmFp0B1lZ_nF-HlVN7YcqSCcppeuSNJ3erzyfOutYBIdNjQPNgXQIU6m5RPLCzb7CcyGZJ8Ez2HsWi_yJRHWqVNOZA7IEIza6gRYjDO7d9G9ZaM3tTyTKtafGKtj5mpWUJD4hEhiXrkpj9lI97PQ_IdPHMfYIOg8BN0b6ZruCbu3_GEXJIm5TC6IHVt-YDP1cl2gkNy2uJTQYDao6JgWqLbuk2OJieWQ_69_mjXRZpajUxbJrbG1Lffei551J-98K45ypzLOqF1p30_h94tSCZDWPab7w","AU_ZVEG9A3tGtqb8h62xx9EByusg68PzYDvAhbz4-IYdJwAG7nR0GEV2bAEvdb1462puBY0V7zKsh0HoTrif6ZYVk7799iP4GQnNknZsGEYV97ULE9nPNBBtT4Fu2Pni7WEkZ8eU3sNvjDMleqPjD37Ns8TojeUkRbOQBHWlDq0aeh9XAjERTRlzyObh9rsxspOSVUwm23ZLgvYTb9cBeNlbm_pAf_Ax_ZLx68NqUaCf9Sjzo3mTwzIVamKVNj8JQuqhPVUn8zN0FOQ5YDZje63IZDvhDLpSXxA4lC6aTVPj1IfGFEL4soxwLrxVZuGX3lwoSrCdnPeBK1xpNpaVmlG-3mYHEaQtO5QBtH9io_RyuDxQq6VNwkGBsDJYycXhS4kIZn2DaapKzSCAgJblhrtqAKa7YIswoHm2YGVNnxPFugQRFg"]
  },
  verified: false,
  google_rating: 4.6
};

export default l_antre_amis;
