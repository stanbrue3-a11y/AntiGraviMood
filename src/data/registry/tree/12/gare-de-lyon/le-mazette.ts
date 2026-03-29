import { SurgicalPlace } from "../../../../type-definition";

export const le_mazette: SurgicalPlace = {
  id: "poi-le-mazette",
  slug: "le-mazette",
  name: "Le Mazette",
  category: "restaurant",
  subcategory: [],
  location: {
    address: "69 Port de la Rapée, 75012 Paris, France",
    arrondissement: 12,
    lat: 48.8433165,
    lng: 2.3693186,
    nearest_metro: "TODO",
    metro_lines: [],
    google_id: "ChIJL-2G1atz5kcRgAvauwIOPPY"
  },
  moods: {
    chill: 60,
    festif: 40,
    culturel: 50
  },
  practical: {
    opening_hours_raw: "lundi: Fermé | mardi: Fermé | mercredi: 18:00 – 01:00 | jeudi: 18:00 – 01:00 | vendredi: 18:00 – 04:00 | samedi: 18:00 – 04:00 | dimanche: Fermé",
    reservation_policy: "sans_resa",
    terrace: true,
    ferme_tard: true,
    accessibility: true,
    main_action: {
      type: "site",
      url: "https://www.instagram.com/lemazette/",
      label: "VOIR LE SITE"
    }
  },
  pricing: {
    certification: "silver",
    avg_budget: 25,
    dish_price: 14.00,
    is_free: false,
    last_updated: "2026-03-25",
    verified_at: "2026-03-25",
    menu_items: [
      {
        category_type: "main",
        display_label: "Street Food du Pont (Plats)",
        items: [
          { name: "Mazette Burger (Boeuf, cheddar, oignons)", price_cents: 1450, is_highlight: true },
          { name: "Beyond Meat Burger (Végétarien)", price_cents: 1500 },
          { name: "Tacos Poulet Tinga (x3)", price_cents: 1200, is_highlight: true },
          { name: "Tacos Al Pastor (Porc & Ananas)", price_cents: 1250 },
          { name: "Hot Dog Gérant (Saucisse fumée)", price_cents: 950 },
          { name: "Fish & Chips de la Seine", price_cents: 1600 },
          { name: "Pizza Scudetto (Marguerita)", price_cents: 1300 },
          { name: "Pizza Spicy (Salami piquante)", price_cents: 1500 }
        ]
      },
      {
        category_type: "starter",
        display_label: "Finger Food & Partage (Entrées)",
        items: [
          { name: "Frites Maison (Double cuisson)", price_cents: 550 },
          { name: "Frites au Parmesan & Truffe", price_cents: 850, is_highlight: true },
          { name: "Nachos y Guacamole maison", price_cents: 1000 },
          { name: "Tenders de Poulet croustillants", price_cents: 1100 },
          { name: "Houmous au Zaatar & Pain Pita", price_cents: 800 },
          { name: "Planche de Charcuteries fines", price_cents: 1800 },
          { name: "Planche de Fromages AOP", price_cents: 1700 },
          { name: "Assiette de Falafels (x6)", price_cents: 900 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Pression & Craft Beers (Boissons)",
        items: [
          { name: "Pinte Mazette Lager (4.5%)", price_cents: 850, is_highlight: true },
          { name: "Pinte IPA Locale (La Goutte d'Or)", price_cents: 950 },
          { name: "Pinte Blanche (Wheat Beer)", price_cents: 900 },
          { name: "Demi Lager", price_cents: 500 },
          { name: "Bouteille Craft Saison (33cl)", price_cents: 750 },
          { name: "Cidre Artisanal (Pinte)", price_cents: 850 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Cocktails de Scène (Boissons)",
        items: [
          { name: "Moscow Mule Signature", price_cents: 1200, is_highlight: true },
          { name: "Spritz Aperol (Format XXL)", price_cents: 1100 },
          { name: "Dark & Stormy", price_cents: 1250 },
          { name: "Gin Tonic (Arduenna Gin)", price_cents: 1300 },
          { name: "Mocktail 'Sunny Boat'", price_cents: 900 },
          { name: "Shot de Tequila / Mezcal", price_cents: 600 }
        ]
      },
      {
        category_type: "drink",
        display_label: "Softs & Énergie (Boissons)",
        items: [
          { name: "Cola Artisanal (33cl)", price_cents: 550 },
          { name: "Limonade Maison", price_cents: 500 },
          { name: "Jus d'Orange pressé", price_cents: 600 },
          { name: "Eau Minérale (50cl)", price_cents: 450 },
          { name: "Café Espresso", price_cents: 250 },
          { name: "Thé Glacé Maison (Pêche/Mate)", price_cents: 650 }
        ]
      }
    ]
  },
  description: "Le Mazette est un bateau-phare de la vie nocturne parisienne, amarré au Port de la Rapée. Ancien Concrete, ce lieu hybride propose une programmation éclectique mêlant clubbing, concerts live et ateliers culturels. Avec sa terrasse sur le pont offrant une vue imprenable sur la Seine et ses espaces intérieurs industriels, c'est le spot idéal pour danser jusqu'à l'aube ou chiller au bord de l'eau en fin de journée.",
  insider_tip: `• **Terrasse Flottante** : Le pont supérieur est l'un des meilleurs rooftops de plein air sur l'eau à Paris.
  • **Programmation** : Vérifiez l'agenda sur leur Instagram, les soirées varient énormément entre house pétillante et techno pointue.
  • **Accès Port** : L'accès par le port de la Rapée offre une balade agréable avant de monter à bord.`,
  specials: {
    cuisine: ["Finger Food", "Street Food de saison"],
    drinks: ["Cocktails Créatifs", "Bières Artisanales"],
    must_eat: "Vibe Clubbing. Cocktails au coucher du soleil & Tapas à partager",
  },
  images: {
    hero: "AU_ZVEGlwZyS3zU6bUEKDAQb1NNU34El1Nj9lojFuCo6tNkcZOz_2YId9R0EKuEc_gBKAkNKyCunwcguuCySeZ2youJXBrDvNU0iTZNCpRPxKmADsAp6B9JyXio8SPs0JF58kMUSAp0e9_4gm-B_USwKXfNCQE_u8UP-PyEStrKo9fsD4q6qZnJc25pONx_RcmTVR7LiwMCT-alTpLYMSWVX9liKkvP3N9hmLy9HvjhvSf-ShAoAwVMlIwabPEhf1IIZ1JFjMteOJKhW8r0xb32-3FXjfZ6mpDisxdtY3WLI4wzeXGTIt6FfRgUyS8XbvvP_auNUE0Gt2Hd4NFAcO8xnt5lEmgTdT_Bgaoag4Np1_PtU9YmJrrrLNA3L4G4gPXmKPJD-WDU9xXnvfCFpV2G7WQjaSuD00LHvuNtu_APbFvOATA",
    gallery: ["AU_ZVEFVki1sq4TuH0nby06Ag9qO3cNpklnIZ3vocofEa9Z2td-QRQ-aVuINnnqceIGDHjWXAhVKl083lJOJmawlaTm2kfn5Le9x6ITWpj640O-yZjkaIbaSGQzX5dOBXCbBlwAKCY7KXsb8felPT3Tp2Nx0HoZAgLaOG3Z8cRSVP_K5NrhwqfrEY5JJN7-XUrMYQqntMZsbChof60tFD5lsYFykqfx9vSluY0AnoLe0jhvgaBDLLdiNn4Dm4cHAlA","AU_ZVEHZAwG-cB48g-FVM4B3h1kDZlov2qFRBBkJ8bJ1ahDqXbEwg6Lvl4SbjMa4hJZZ-KeBwzs9tqvNv8RUBucbXrw0DoaD8bqFCTMdx-HtvgQCZ31QFCpjELtdYS6C-7ect4YPboRbODCLVwtnruxC-QzwWZxcE7PtPdtswqmkitc9m_LEcedkBVTCPibyOGkR3ywEwufz6hti1ZW_nYfSE0vSTFcfWj8yMKHhoCBw-1m6M0Xuw37VICOYdzgWTir6zetOJ1ZMT3T8nEcGbLPVAQ-6CIDKZ9xK9V0vreG2Cs7ntM3C-kFevqBhc7zjqSJZLFyBvTgGZa7Z8a-WqjKvslY7XUii9x7TKOuXQVciWz7OE6mRQqLi0oTci6jgdQdyZKQUkcxN8ItwIyDBJbJdzJXaTz3Q_I7Ybw9M2YQTJEZlBDRJLECPv_bBl8HlF1RB"]
  },
  verified: false,
  google_rating: 4
};

export default le_mazette;
