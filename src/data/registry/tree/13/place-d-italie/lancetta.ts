import { SurgicalPlace } from '../../../type-definition';

export const lancetta: SurgicalPlace = {
    id: "poi-lancetta",
    name: "Lancetta",
    slug: "lancetta",
    category: "restaurant",
    subcategory: ["italien", "pizzeria", "pâtes"],
    location: {
        address: "26 Rue Bobillot",
        arrondissement: 13,
        lat: 48.8289618,
        lng: 2.3532545,
        nearest_metro: "Place d'Italie",
        metro_lines: [5, 6, 7],
        google_id: "ChIJASxHw1tx5kcRazhEw6tmluU"
    },
    moods: {
        chill: 60,
        festif: 10,
        culturel: 10
    },
    practical: {
        // VERIFIED: Google Maps API (March 2026)
        opening_hours_raw: "lundi: 19:00–22:30\nmardi: 12:00–14:40, 19:00–22:30\nmercredi: 12:00–14:40, 19:00–22:30\njeudi: 12:00–14:40, 19:00–22:40\nvendredi: 12:00–14:40, 19:00–22:40\nsamedi: 12:00–14:40, 19:00–22:45\ndimanche: Fermé",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: false,
        main_action: {
            type: "site",
            url: "http://lancetta.eatbu.com",
            label: "MENU & RÉSA"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 0,
        cocktail_price: 0,
        wine_glass: 0,
        coffee_price: 0,
        // NOT FOUND: Auto-calculated via `compile_registry.ts`
        dish_price: 0,
        last_updated: "2026-03-05",
        menu_items: [
            {
                category_type: "other",
                display_label: "Antipasti",
                items: [
                    { name: "Mozzarella bufala, pesto di basilico", price_cents: 900 },
                    { name: "Antipasto verduro", price_cents: 900 },
                    { name: "Piatti di parma (Assiette jambon de Parme)", price_cents: 950 },
                    { name: "Burratina", price_cents: 1100 },
                    { name: "Trio di bruschetta casareccia", price_cents: 1350 },
                    { name: "Involtini di melanzane", price_cents: 1350 },
                    { name: "Fiori di zucchina in pastella", price_cents: 1400 }
                ]
            },
            {
                category_type: "main",
                display_label: "Pizzas (Feu de bois)",
                items: [
                    { name: "Margherita", price_cents: 1250 },
                    { name: "4 Formaggi", price_cents: 1550 }
                ]
            },
            {
                category_type: "other",
                display_label: "Pâtes & Gnocchis",
                items: [
                    { name: "Penne puttanesca", price_cents: 1500 },
                    { name: "Linguine al limone (Pignons, citron, crème)", price_cents: 1500 },
                    { name: "Tagliatelle verdure", price_cents: 1550 },
                    { name: "Gnocchi ai formaggi", price_cents: 1550 },
                    { name: "Penne modica (Pesto de noix, gorgonzola)", price_cents: 1600 },
                    { name: "Gnocchi Veloci (Speck, champignon, crème)", price_cents: 1600 },
                    { name: "Fusilli calabrese", price_cents: 1700 },
                    { name: "Penne salmone", price_cents: 1750 },
                    { name: "Fusilli dello chef (Veau haché, champignons)", price_cents: 1750 },
                    { name: "Linguine alle vongole", price_cents: 1850 },
                    { name: "Tagliatelle di bronte (Gambas, pesto pistache)", price_cents: 1850 },
                    { name: "Tagliatelle tartufate (Crème de truffe, Parme)", price_cents: 1900 },
                    { name: "Linguine frutti di mare", price_cents: 1950 }
                ]
            },
            {
                category_type: "main",
                display_label: "Viandes (Secondi Piatti)",
                items: [
                    { name: "Scaloppina alla crema di tartufo", price_cents: 2350 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Dolci (Desserts)",
                items: [
                    { name: "Cannoli siciliani", price_cents: 900 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVXYOe3SVR15OP6pI732O7DV9_qSAE-lvmHZKM_voxyX9c2UGPRVQFcSkMvszwjb6pvAxpwbPIJ1J3yejKrZF8NK19yz4L5DA_BlcFn9EMaKj9a7bUButz5eDfGFa4Rst_IogeAdx1nvlO6V1x6EcEzeipgbapD_5AlP79lK48YoVSAmaZmgpyk8ZukfiSvjZ6VSwZ2phHzQwY54nFCO68EmvHMhggaIXCjvBWMB1tyepAWuxUU7Um-AabNwftuoM3x3bqwWDAE7CFK4PtJIM_i-n7eW8z-mbEUTennp0XD2tobOr8&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: []
    },
    instagram_handle: "lancetta_paris",
    verified: true,
    google_rating: 4.8,
    description: "Installé en plein cœur du 13ème arrondissement historique près de la Place d'Italie, Lancetta est une véritable pépite italienne qui cultive le secret d'une trattoria authentique. Avec son ambiance chaleureuse, son rez-de-chaussée vibrant et sa salle à l'étage un peu plus intime, on y vient pour déguster une cuisine sincère et extrêmement soignée : pêle-mêle de pâtes minutieusement sourcées, d'antipasti généreux et de pizzas au feu de bois.",
    insider_tip: "• Une salle à manger se trouve à l'étage, n'hésitez pas à la demander lors de votre réservation si vous souhaitez un cadre plus intimiste.\n• Le restaurant est fermé le dimanche et le lundi midi.\n• Pensez à garder une petite place pour les desserts, les habitués considèrent leurs Cannoli siciliens comme l'un des meilleurs de Paris.",
    expert_catchline: "Superbe trattoria italienne confidentielle et chaleureuse du 13ème arrondissement.",
    specials: {
        cuisine: ["Tagliatelle à la truffe", "Fleurs de courgette en beignet", "Cannoli siciliens", "Linguine Frutti di Mare"],
        drinks: ["Spritz", "Vin italien"],
        must_eat: "L'art de la pasta. Ne passez pas à côté des beignets de fleurs de courgettes (14€) en entrée. Le plat phare : les incroyables Tagliatelle tartufate (19€) ou de puissantes Linguine frutti di mare.",
        must_drink: "Sélection solide de vins italiens de petits producteurs et classiques Spritz pour l'aperitivo."
    }
};
