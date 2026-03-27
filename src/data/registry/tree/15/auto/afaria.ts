import { SurgicalPlace } from "../../../type-definition";

export const afaria: SurgicalPlace = {
  id: "poi-afaria",
  slug: "afaria",
  name: "Afaria",
  category: "restaurant",
  subcategory: [],
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
    reservation_policy: "resa_conseillee",
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
    last_updated: "2026-03-27",
    verified_at: "2026-03-27",
    menu_items: [
      {
        category: "Pour Commencer / À Partager",
        items: [
          { name: "Terrine d'artichaut au lard fumé", price: "13€" },
          { name: "Cappuccino de langoustines", price: "12€" },
          { name: "Escalope de foie gras poêlé", price: "13€" },
          { name: "Velouté de topinambours, rillettes corail", price: "11€" },
          { name: "Moelleux de courge butternut", price: "13€" },
          { name: "Œuf croustilliant, magret fumé", price: "12€" },
          { name: "Croquettes de pieds de cochon", price: "13€" },
          { name: "Croustillant de gambas au basilic", price: "14€" },
          { name: "Salade de gésiers confits", price: "12€" },
          { name: "Os à moelle rôti à la fleur de sel", price: "12€" }
        ]
      },
      {
        category: "Les Plats",
        items: [
          { name: "Formule Midi (E + P ou P + D)", price: "25€" },
          { name: "Menu Afaria (E + P + D)", price: "29€" },
          { name: "Magret rôti aux sarments (pour 2)", price: "44€" },
          { name: "Dos de cabillaud rôti, fèves", price: "22€" },
          { name: "Quasi de veau à la crème de thym", price: "23€" },
          { name: "Noix de St Jacques, risotto truffe", price: "28€" },
          { name: "Caille farcie au cochon", price: "26€" },
          { name: "Paleron de bœuf en pot-au-feu", price: "23€" },
          { name: "Confit de canard du Sud-Ouest", price: "21€" },
          { name: "Axoa de veau traditionnel", price: "20€" },
          { name: "Ris d'agneau aux girolles", price: "25€" },
          { name: "Pavé de sandre, sauce beurre rouge", price: "24€" },
          { name: "Légumes de saison rôtis au miel", price: "18€" }
        ]
      },
      {
        category: "Douceurs",
        items: [
          { name: "Millefeuille crème au citron", price: "10€" },
          { name: "Profiteroles vanille, caramel salé", price: "9€" },
          { name: "Dôme mousse chocolat passion", price: "10€" },
          { name: "Brioche façon pain perdu", price: "10€" },
          { name: "Tiramisu poire et chocolat", price: "9€" },
          { name: "Moelleux tiède au chocolat", price: "10€" },
          { name: "Tarte tatin à l'ananas", price: "10€" },
          { name: "Plateau de fromages des Pyrénées", price: "12€" },
          { name: "Pavlova aux fruits exotiques", price: "10€" }
        ]
      },
      {
        category: "La Cave & Boissons",
        items: [
          { name: "Bouteille d'eau minérale", price: "6€" },
          { name: "Verre de vin du Sud-Ouest", price: "7€" },
          { name: "Café Richard", price: "3€" }
        ]
      }
    ]
  },
  description: "Afaria est une ode vibrante au Sud-Ouest, nichée dans le 15e arrondissement. Sous l'impulsion de la cheffe Ludivine Merlin, cet établissement propose une cuisine de terroir magnifiée par une touche de modernité. Entre les magrets rôtis aux sarments de vigne et les terrines d'artichaut raffinées, chaque plat raconte une histoire de produits sourcés et de passion culinaire. L'ambiance y est chaleureuse, évoquant les grandes tablées basques dans un décor élégant et convivial.",
  insider_tip: "• **Timing Stratégique** : Visez le déjeuner en semaine pour profiter des formules à 25€, un rapport qualité-prix imbattable pour ce niveau de cuisine.\n  • **Combo Moelle** : Ne passez pas à côté des pieds de cochon croustillants suivis du magret de canard à partager.\n  • **Expérience Culturelle** : La bibliothèque gourmande à l'entrée et l'accent chantant de l'équipe vous transportent directement dans les Landes.",
  specials: {
    cuisine: ["Sud-Ouest", "Bistrot", "Landais"],
    drinks: ["Vins du Béarn", "Armagnac"],
    must_eat: "Cuisine Basque. Le magret de canard rôti aux sarments de vigne.",
  },
  images: {
    hero: "AU_ZVEFM1CCL7JPhEQsW7udeOWjGm4fSpU2lQq9bMAkuQis8VakCymcuYCeUTRgiaeVThAIDEUGTY5NvDCS19fr1RXKrFt2-FUS55jCldSim54P6JJ99IGNLT27hz1RJeo21yaAloeCTV9Bv84il49c0VfUzkcwzT-UqGFE4cSFzg597RlTNVf2TUqPzah7MbTk6YgjpqquqdAQsERP0hkVo4V65IRVsd3aanHXPbTD-LxL2uLs2_Sj4yuuVQQLnVuacmoIBeiocYQNriYqlZeF66jmmLLeXZXpSyHtPU2pXfjOg0w",
    gallery: ["AU_ZVEFeYGLrOrYB9SLZQycdvXZedXbTLzUebYILqldJqZjm01aQZWUhDUSph3UuIrfWHFSWOkUYVTgWlK98o3meuoRKlMfVntAXX8GA0kkQo3VVE84Wqb_3f5T5r_4vKyNEsQhDv3nEbqgkwP85QYiqfkqYF1D1Leb6aR_-mz7ziuBgO4KCkmgGjQHBi6Z_GMeE-PaYAIBNkP9V0l5RRX08hOAIu5epCEozhZsTkREWF8acWUQj-DAVi1dfOZwSXyJaO4BXo3fjZv3rHMVT1LW0ylNKG_Ffgj-j0lAwgDEjzWJ2OA","AU_ZVEHEt1s5Bv5fcEEO_M7JiMHow3b8kF2UrwFAlOqVNgl3ocCuKQpH8jZRv4sw3ftyPUsZziixt8qNSen8ApGAQ_vNFLTQqS12uJ8FLmEdmBzystuNt9CktbajjQkLbrzhglJeApZpvPjJpu7iPQxEAKAN7A5ToxZUhDVZ4P5Cd10vP1bLpiSwxo_AKFLJZ_kHTVup4U87Fhq1tSencf0W1qDyYHWfvO5tkwSxI1hNyoGi6dSvW5Ff0o4JJ2VoI7TgXWnXN0LDKTd2DNoNXrTXTAZhjpdlYCKwlrcK9om2tRJkDB333CrXzBS30WuK5S-MB8fjW94HksW7t5aazv-QaGoAW6crQ_x5AfUqacKDfFBLIhgnB8ohit7IrupyKKm2gRJT3IMA3Z3aJLG_amVEdumbq5cRw1zfvLKL3_EdT-w_qaAxv3h1PqqmxzLnFPlL"]
  },
  verified: true,
  google_rating: 4.7
};

export default afaria;
