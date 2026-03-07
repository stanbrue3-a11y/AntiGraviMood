import { SurgicalPlace } from '../../../type-definition';

export const osteria_anima: SurgicalPlace = {
    id: "poi-osteria-anima",
    name: "L'Osteria dell'anima",
    slug: "osteria-anima",
    category: "restaurant",
    subcategory: ["italien", "pâtes", "restaurant"],
    location: {
        address: "37 Rue Oberkampf",
        arrondissement: 11,
        lat: 48.8639985,
        lng: 2.3704555,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJR2qQ4vxt5kcRzIR3m9By5VQ"
    },
    moods: {
        chill: 70,
        festif: 10,
        culturel: 10
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 19:30–23:00\nmardi: 12:00–14:30, 19:30–23:00\nmercredi: 12:00–14:30, 19:30–23:00\njeudi: 12:00–14:30, 19:30–23:00\nvendredi: 12:00–14:30, 19:30–23:00\nsamedi: 19:30–23:00\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "tel:+33143384003",
            label: "APPELER"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 0,
        wine_glass: 7.00,
        coffee_price: 2.50,
        dish_price: 22, // MANUAL: Fresh pastas are generally 18-26€
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "Antipasti & Entrées",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Focaccia artisanale", price: "8.00€" },
                    { name: "Crème de Tomate maison", price: "9.00€" },
                    { name: "Burrata onctueuse des pouilles", price: "12.00€" },
                    { name: "Asperges au Parmesan (Saison)", price: "13.00€" },
                    { name: "Carpaccio de bœuf", price: "14.50€" },
                    { name: "Salade de Roquette au Parmesan", price: "14.00€" },
                    { name: "Poulpe et petit Orzo", price: "16.00€" }
                ]
            },
            {
                category: "Les Pizzas (Spécialités complémentaires)",
                items: [
                    { name: "Margherita", price: "15.00€" },
                    { name: "Bufala", price: "17.00€" },
                    { name: "Diavola", price: "18.00€" }
                ]
            },
            {
                category: "Pâtes Fraîches Artisanales (Signature)",
                items: [
                    { name: "Pâtes Cacio e Pepe", price: "18.00€", description: "Minimalisme romain : Fromage Pecorino & poivre de qualité." },
                    { name: "La Vraie Carbonara", price: "19.00€" },
                    { name: "Gnocchi maison", price: "19.00€" },
                    { name: "Lasagne Traditionnelle au four", price: "20.00€" },
                    { name: "Pappardelle au ragout de bœuf lent", price: "22.00€" },
                    { name: "Pâtes fraîches aux fruits de mer", price: "24.00€", description: "Le grand classique de la maison, garni de crustacés." }
                ]
            },
            {
                category: "Desserts (Dolci) & Boissons",
                items: [
                    { name: "Pudding au Caramel", price: "8.50€" },
                    { name: "Tiramisu de L'Osteria", price: "10.00€" },
                    { name: "Bière Extraomnes / Montestella", price: "8.00€" },
                    { name: "Limoncello (Digeo)", price: "6.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfW9bf8Q4zi7ujKxPpJHrsVo0F6OMt1jU37EdPg1S3tPRc-GlWUrp4pELmS3osM-0JbmfWqC66U6VZay68PQjwvTX3K2J7sdX6FWzStt_UrKBNM8sDjBCU6T7sAt6NP2ooEHDFr4Sn-ggWeytyX9PkB10NksstVyvIplRt4Ez2RPj2wTl41y8zOYWwlT8DXWM5e9wTXe9yhs1f3xe1gZflM8GkC8qFtHNoHd2-KfcmUyVyi9WoZf__im5GIGyLpyEzGBNBH05pS5QcrscAzRjFq7abM8lMJjMFUrSJt27NOR1pxP8cHiq2LSXeBf-GlbG0wUfkNNgKXxsEyqL4A5sLOafELyh6qB5r-dXfFoWexLa3aaR7LhSawF4hW5EU31vwsr30VNhh0suSmGOOiHjz-tsvv5vdcV_aAKqAoUgDoVtwc&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX4L6FoHFpC8UDRcsnx_2EjAVH2Eskbm1J2a_IEa-j76OQaYnpu4HN85xUCYpO8YGo9cUqSKGJsi8_hM0s3AkjHbMsrUTMGLT3wC8gbOchLoI5o9U6-beURpiIVjOQvg0tylgggQ30gWgiWpppib25O3FdO2fKk1VyUMXvKMOApldIlcF7XSOjZVEav9gX9Qv7irPXXwFmDXe_eBrbsWRzSs-BgtMWHN3Ep_JO_VhsS4kTMnRIRpRkp1tVMEEYG02mgkqggGV6E4NwKMcdzJrlJU1-2kVu0XsQYrAL-7pQdSBxxgHrPhtImnXBLHW8tltr14WeExZNX6HVRll7JIi3DeIG1Nbg5VeA2aAlg9EmR9VV_lK6yWLfFTE6m2AMfBVP7jDxyhNAIEGQXI_eNcNGsYqoqdv2Zyepde-xde2ax_VfNXtcoAdRGE-utCxDD&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXd_QyLWk8BnT5BqSggOxYjG9crR52MX4_801KE7gGrwyR5Yhp_BSVB8vjqxsznHl7CphTlQaamH-acxQh0ZvbvWjmETFT6H0sLsnVLaayT722Kt5_fxsqMlk2JY6vZBkkywuIBtx3rcvfFONwrTzuphfUy89eBOYI9-5freRb2dhUXbVamr0nG0olXPw-ubE3JuUaBYR1_TOKxg-FEHDy1Gr_fA3QStlogDc8dgHO4cy0g2yx2hp9NY4DmTqW_45CGQzv8jYuCnuia-VZ4h6mXMMfbWmjUKsR-XniZBfbyIGXTF7FanMxcAINb_C2ca1JoH7dEx6UjHx0GQ0leZwB8or2RRVwX2OMWpnv2ErIvgBTF9O5SkKwjbHh9R5SHbuT8MbiN6x9N0Y_XIX-V98JS2T9kdTIU96uCLnc1mF-5q1qvhriMBrmzje-JTZu8&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "", // Not well known/prominent. Emphasize standard practical interaction.
    verified: true,
    google_rating: 4.6,
    description: "Une discrète Osteria nichée au cœur de la rue Oberkampf qui résiste aux modes avec brio. C'est l'un des rares temples totalement dédiés à la confection manuelle des pâtes fraîches, dans une salle au cadre rudimentaire mais hyper romantique.",
    insider_tip: "• La devanture ne paie pas de mine, mais le lieu est très intime et petit : une réservation par téléphone est chaudement recommandée.\n• Regardez vers la cuisine ouverte : on y façonne les pâtes toute la journée à la main.\n• Si vous êtes deux, prenez une assiette de Cacio e Pepe et une assiette Fruit de Mer, et partagez.",
    expert_catchline: "L'artisanat brut de la pâte fraîche italienne, servie copieusement dans une salle minuscule et vivante.",
    specials: {
        cuisine: ["Pâtes aux fruits de mer fraîches", "Cacio e Pepe"],
        drinks: ["Montepulciano rouge"],
        must_eat: "L'énorme assiette fumante de Pâtes fraîches enrobées d'ail, d'huile d'olive, de palourdes et fruits de mer.",
        must_drink: "Un chaleureux vin Toscan à prix doux pour escorter les glucides."
    }
};
