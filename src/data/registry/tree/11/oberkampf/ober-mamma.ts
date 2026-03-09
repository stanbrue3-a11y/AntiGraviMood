import { SurgicalPlace } from '../../../type-definition';

export const ober_mamma: SurgicalPlace = {
    id: "poi-ober-mamma",
    name: "Ober Mamma",
    slug: "ober-mamma",
    category: "restaurant",
    subcategory: ["italien", "festif", "restaurant"],
    location: {
        address: "107 Bd Richard-Lenoir",
        arrondissement: 11,
        lat: 48.8644739,
        lng: 2.3701387,
        nearest_metro: "Oberkampf",
        metro_lines: [5, 9],
        google_id: "ChIJ9wPDGP1t5kcRuU-2tWgnWOQ"
    },
    moods: {
        chill: 30,
        festif: 70,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 12:00–14:30, 18:15–22:30\nmardi: 12:00–14:30, 18:15–22:30\nmercredi: 12:00–14:30, 18:15–22:30\njeudi: 12:00–14:30, 18:15–22:30\nvendredi: 12:00–14:30, 18:15–22:30\nsamedi: 12:00–15:30, 18:15–22:30\ndimanche: 12:00–15:30, 18:15–22:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://www.bigmammagroup.com/fr/restaurants-italiens/ober-mamma",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 35,
        is_free: false,
        pint_price: 7.00,
        wine_glass: 6.50,
        coffee_price: 2.50,
        dish_price: 18, // MANUAL: Focus Primi/pâtes fraîches (13.50-20€, médiane ~17€). Pizzas d'appel (6.90-15€) pas représentatives.
        force_manual_dish_price: true,
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "Antipasti & Fritti",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Stracciatella fondante", price: "8.00€" },
                    { name: "Poireau rôti, stracciatella, yaourt moutarde, noisettes", price: "8.50€" },
                    { name: "Insalata di cetrioli e melone", price: "8.50€" },
                    { name: "Petite Assiette Antipasti", price: "8.90€" },
                    { name: "Crocchette di melanzana, pecorino et menthe", price: "9.50€" },
                    { name: "Parmigiana di melanzane", price: "9.50€" },
                    { name: "Focaccia barese e prosciutto San Daniele", price: "9.50€" },
                    { name: "Arancini al tartufo (Truffe fraîche, mozza)", price: "10.50€" },
                    { name: "Tiradito di branzino e stracciatella (Carpaccio bar)", price: "12.00€" },
                    { name: "Grande Assiette Antipasti a partager", price: "12.50€" }
                ]
            },
            {
                category: "Pizzas Napolitaines (Cuit au feu de bois)",
                items: [
                    { name: "Margherita Vraie", price: "6.90€", description: "Le classique absolu à prix choc." },
                    { name: "4 Formaggi", price: "8.90€" },
                    { name: "Diavola (Épicée)", price: "8.50€" },
                    { name: "Speck al Tartuffo (Jambon Speck, fondue de truffes)", price: "8.50€" },
                    { name: "Pizza Rocca (Ø 32cm)", price: "10.00€" },
                    { name: "Pizza Big Mamma (Mozzarella di bufala, jambon parme)", price: "12.00€" },
                    { name: "Dancing Queen (Blanche, Fior di latte, Jambon, Champignons)", price: "15.00€" }
                ]
            },
            {
                category: "Primi (Pâtes Fraîches & Risotto)",
                items: [
                    { name: "Spaghettone allo scarpariello", price: "13.50€" },
                    { name: "Spaghettone all'arrabbiata", price: "13.50€" },
                    { name: "The great carbonara", price: "16.00€", description: "La carbonara romaine dans les règles de l'art." },
                    { name: "Risotto ai funghi, onctueux parmesan", price: "17.00€" },
                    { name: "Burratelli alla stracciatella", price: "18.50€" },
                    { name: "Spaghettone alle vongole (Palourdes fraîches)", price: "19.00€" },
                    { name: "Spaghetti alla puttanesca con branzino", price: "19.00€" },
                    { name: "Mafaldine à la truffe fraîche", price: "20.00€", description: "La pasta à la crème de truffe signature du groupe." }
                ]
            },
            {
                category: "Dolci (Desserts & Glaces Artisanales)",
                items: [
                    { name: "Gelato al cioccolato ou pistacchio", price: "7.50€" },
                    { name: "Il Tigramisu", price: "8.00€", description: "Servi généreusement à la louche et à la cuillère à table." },
                    { name: "Panna cotta ai frutti esotici, vanille Madagascar", price: "8.50€" },
                    { name: "Mousse al cioccolato, praliné, fleur de sel", price: "9.00€" },
                    { name: "Nocciolamisu (Tiramisu noisette)", price: "9.00€" },
                    { name: "Banoffee pie revisitée", price: "9.00€" },
                    { name: "Profiterole géante al pistacchio, chocolat chaud", price: "12.00€" }
                ]
            },
            {
                category: "Cocktails du Bar & Boissons",
                items: [
                    { name: "San Pellegrino", price: "4.00€" },
                    { name: "Chinotto Lurisia", price: "5.00€" },
                    { name: "Summer Spritz", price: "10.00€" },
                    { name: "Big Boy (Safran ou Balsamico)", price: "13.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXgqEasX4fTqrYjAVZjt70aiqjbNAv8ICpNaTxgbgsqHFNT6DBHYJ-D03HjFQnqyHnUwTL16aTOeZlBWHKXkDqgxu60MSKMskcQKJJul4e-NQFmU0BD62MFrY_7zTi-0fvIrn8lNabOxPu-FKUpq4AMHWk3DnTTGQK-F0pKmGYXKNjHAEjC3XAF_I5VnuSHvE0ns0al24DEgYgtMhOnoQQv27QCzBN1ocjpIX8jipWRCe-VnfQVp7aMbZmcwzpb1_KyzNBd8ezVEvQil04czPSBRSSq-WCUYvDISNTqdE7HdQ&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWkrwgcEH7t8n0tmNQ6NGZjUec_CA5Cnv9waM9gdDb7MCsdlG_9wPFOORq-gtCJzsd9eH4ba6iqoAE5Bp610XJHw39Y3dPqJNo6VJM6dsk7Ixnc8WoT34T2bAUty5v0WSGb1pHj3EL4giFbrMzWKoaJ-R1AilPnW3_D5d8WfBl5XuMah6R7szabKjTnNsL384Vl47CAjA2W7LUJS8Mul9MTrC70WTVLaLGoSp-g3TLcL2qUFD8f3um6bQ3GgKgOYU1G70pBr8as-cboIxlMtg-crFjr-pxaBIOa-oxqVixQ2Q&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfX166jrfKCFxpxT_E3_ujvRRaqmpLwk2BQWPBAmxkBZjYcpGoADjVsyf20ovRfkMJ836sJT4lpbRZmhJNAgX1ssarx6tF7W7k3iF_3z64XJ3gtGqcJnU8I3quposcFYK3K0FQB-NhR0ATaDL_hN90FoZ6hPtsZ7Jak4W5GRtGX2sN84RZk5d0fp7RLTjqodFtkVAsymV2A5AUn3ERH5Ekirbi3PevA21xbh5eSiIzMMUUJuJJksZIu_ANXk3moGbMezRRRsAz23Iz4o6-Tu7666YQDnL0HCfY7xy8IVp4l2tj__g-JL2GMjbQ7RcyuWWruiXe45WRMe6wmZduIPQrP9pr1lKKS14-cIXKq5jfSLoamPhkmxNLRsY_YQoRS560FksOuWOqI864uWjvpQG0ImiWywqUlUxM0RMxaWgf-n0yQIoBjWpgC72wHhF5gv&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "bigmammagroup",
    verified: true,
    google_rating: 4.7,
    description: "La trattoria géante et incandescente du groupe Big Mamma (la deuxième à succès après l'East Mamma). Ici, ça crie en italien, ça découpe du jambon San Daniele sur l'énorme comptoir à l'entrée, et les pizzas napolitaines cuisent au four à bois sous la verrière avec un grand arbre encastré.",
    insider_tip: "• Pensez à lever les yeux : le majestueux bar en bois et toute l'architecture valent la photo. \n• L'attente peut être rude si vous n'avez pas réservé : venez dès l'ouverture de 18h15 pour être sûr de rentrer.\n• La Marguerita d'appel (6,90€) reste l'un des braquages gastronomiques de Paris niveau rapport qualité/prix.",
    expert_catchline: "Tout le bruit, les saveurs et la démesure de l'Italie par le géant Big Mamma.",
    specials: {
        cuisine: ["Pizza napolitaine au four à bois", "Tiramisu servi à la louche"],
        drinks: ["Spritz géants explosifs"],
        must_eat: "Difficile de ne pas céder pour l'opulente Pizza à la Truffe ou, au moment du dessert, l'incontournable Tiramisu posé au centre de la table.",
        must_drink: "Un Spritz aux fruits ou un des \"Big Boys\" mixés par leurs barmans survoltés."
    }
};
