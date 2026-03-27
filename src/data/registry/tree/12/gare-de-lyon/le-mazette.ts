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
    wifi: false,
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
        category: "Street Food du Pont (Plats)",
        items: [
          { name: "Mazette Burger (Boeuf, cheddar, oignons)", price: "14.50€", highlight: true },
          { name: "Beyond Meat Burger (Végétarien)", price: "15.00€" },
          { name: "Tacos Poulet Tinga (x3)", price: "12.00€", highlight: true },
          { name: "Tacos Al Pastor (Porc & Ananas)", price: "12.50€" },
          { name: "Hot Dog Gérant (Saucisse fumée)", price: "9.50€" },
          { name: "Fish & Chips de la Seine", price: "16.00€" },
          { name: "Pizza Scudetto (Marguerita)", price: "13.00€" },
          { name: "Pizza Spicy (Salami piquante)", price: "15.00€" }
        ]
      },
      {
        category: "Finger Food & Partage (Entrées)",
        items: [
          { name: "Frites Maison (Double cuisson)", price: "5.50€" },
          { name: "Frites au Parmesan & Truffe", price: "8.50€", highlight: true },
          { name: "Nachos y Guacamole maison", price: "10.00€" },
          { name: "Tenders de Poulet croustillants", price: "11.00€" },
          { name: "Houmous au Zaatar & Pain Pita", price: "8.00€" },
          { name: "Planche de Charcuteries fines", price: "18.00€" },
          { name: "Planche de Fromages AOP", price: "17.00€" },
          { name: "Assiette de Falafels (x6)", price: "9.00€" }
        ]
      },
      {
        category: "Pression & Craft Beers (Boissons)",
        items: [
          { name: "Pinte Mazette Lager (4.5%)", price: "8.50€", highlight: true },
          { name: "Pinte IPA Locale (La Goutte d'Or)", price: "9.50€" },
          { name: "Pinte Blanche (Wheat Beer)", price: "9.00€" },
          { name: "Demi Lager", price: "5.00€" },
          { name: "Bouteille Craft Saison (33cl)", price: "7.50€" },
          { name: "Cidre Artisanal (Pinte)", price: "8.50€" }
        ]
      },
      {
        category: "Cocktails de Scène (Boissons)",
        items: [
          { name: "Moscow Mule Signature", price: "12.00€", highlight: true },
          { name: "Spritz Aperol (Format XXL)", price: "11.00€" },
          { name: "Dark & Stormy", price: "12.50€" },
          { name: "Gin Tonic (Arduenna Gin)", price: "13.00€" },
          { name: "Mocktail 'Sunny Boat'", price: "9.00€" },
          { name: "Shot de Tequila / Mezcal", price: "6.00€" }
        ]
      },
      {
        category: "Softs & Énergie (Boissons)",
        items: [
          { name: "Cola Artisanal (33cl)", price: "5.50€" },
          { name: "Limonade Maison", price: "5.00€" },
          { name: "Jus d'Orange pressé", price: "6.00€" },
          { name: "Eau Minérale (50cl)", price: "4.50€" },
          { name: "Café Espresso", price: "2.50€" },
          { name: "Thé Glacé Maison (Pêche/Mate)", price: "6.50€" }
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
