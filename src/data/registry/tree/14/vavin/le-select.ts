import { SurgicalPlace } from "../../../type-definition";

export const le_select: SurgicalPlace = {
    id: "poi-le-select-montparnasse",
    name: "Le Select",
    slug: "le-select-montparnasse",
    category: "restaurant",
    subcategory: ["brasserie", "historique", "institution", "parisien", "cafe", "terrasse"],
    location: {
        address: "99 Boulevard du Montparnasse, 75006 Paris, France",
        arrondissement: 14,
        lat: 48.8426118,
        lng: 2.3284069,
        nearest_metro: "Vavin",
        metro_lines: ["4"],
        google_id: "ChIJPcO4w85x5kcRjh9ZKp6tkPQ"
    },
    moods: {
        chill: 60,
        festif: 50,
        culturel: 100
    },
    practical: {
        opening_hours_raw: "Monday: 7:00 AM – 2:00 AM | Tuesday: 7:00 AM – 2:00 AM | Wednesday: 7:00 AM – 2:00 AM | Thursday: 7:00 AM – 2:00 AM | Friday: 7:00 AM – 2:00 AM | Saturday: 7:00 AM – 3:00 AM | Sunday: 7:00 AM – 3:00 AM",
        reservation_policy: "sans_resa",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "site",
            url: "http://www.leselect-montparnasse.fr/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        dish_price: 22,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "Les Grands Classiques du Select",
                items: [
                    { name: "Tartare de Boeuf Aubrac au couteau", price_cents: 2450 },
                    { name: "Confit de Canard des Landes, frites maison", price_cents: 2600 },
                    { name: "Andouillette 5A à la Chablisienne", price_cents: 2250 },
                    { name: "Onglet de Boeuf Sauce Poivre", price_cents: 2800 },
                    { name: "Pavé de Saumon, Sauce Béarnaise", price_cents: 2100 },
                    { name: "Filet de Bar à l'Huile d'Olive", price_cents: 2800 },
                    { name: "Magret de Canard, Sauce Périgourdine", price_cents: 2900 },
                    { name: "Risotto aux Champignons des bois", price_cents: 1950 },
                    { name: "Salade César au Poulet Fermier", price_cents: 1850 }
                ]
            },
            {
                category_type: "starter",
                display_label: "Entrées de Brasserie",
                items: [
                    { name: "Oeuf Mayo Tradition (Championnat)", price_cents: 850 },
                    { name: "Escargots de Bourgogne de chez Metzger", price_cents: 1450 },
                    { name: "Saumon Fumé & Blinis Maison", price_cents: 1800 },
                    { name: "Foie Gras de Canard, Toasts Chauds", price_cents: 1950 },
                    { name: "Harengs Pommes à l'Huile", price_cents: 1200 },
                    { name: "Tataki de Thon et Saumon", price_cents: 1600 },
                    { name: "Assiette de Planche de Charcuterie Conquet", price_cents: 1730 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs & Desserts",
                items: [
                    { name: "Tarte Tatin caramélisée, crème fraîche", price_cents: 1150 },
                    { name: "Crème Brûlée à la Vanille Bourbon", price_cents: 950 },
                    { name: "Profiteroles au Chocolat Chaud", price_cents: 1250 },
                    { name: "Baba au Rhum Ambré", price_cents: 1200 },
                    { name: "Tarte Citron façon Select", price_cents: 1050 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWB9J9gd2EpDr4HZS5FZ1Nl1VdVkKCUO-zm_j8qHiRp0YgION_HGaTfF3wf3aJYE6l9z88xMrlkapePOMXrgL81XWvGwqVpEwm4RBlg1YAN5HiyIaHugRTLxgcjbPW1nuRjSwWjy0FKhGHkhZafodFrHgJ0wsNOZ0IZ0OO9YohY7dauSa5Dcwh6Fvsovyqo5bzd0cS3W2zekf-_jvvEM8IRdNNLwCjQ8h9v1XpOgp1SwyuYJswx_G9nP2xaPKWtPRshJ1iUQ4jt8rvXYf5h943DzqGaSb7hvGFTsoMfuRYZ8w&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVbrJdMRi1uQ_-ZvwA8QvKHjKObvpIML357qocLGP6XcZpH-Z27TUKRi12yOfSQxLaTgyB8s0Ht7GQnPzRDSonCT8v4CcEnZyfRzSkJE9NhE4yYGh38mRrTp2M2b-dTzrrbIRkcrc4rrL97jqFfyCebMuH2O6ZNNidOHJwl0U4Gj6fW_RqVwqMTbG3v6gwMBecOUJVb71A9Zg79NekUeMOzXCiW0s_ZRLLiYp91kwhGH98lZzsxQ3jrY1n0Tmzr1MldazR3eakMLEel8nAmUZH4sB89bZVLVKI6RIcBFNFHMA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.1,
    description: "Le Select est la dernière grande brasserie de Montparnasse à avoir conservé son âme et son décor d'origine, sans succomber aux sirènes de la modernisation à outrance. Inauguré en 1923, il fut le refuge de la 'Lost Generation' : Henry Miller, Ernest Hemingway et Morley Callaghan y avaient leurs habitudes. Sous ses éclairages tamisés et son plafond patiné par les années, l'atmosphère y est restée intellectuelle, artistique et profondément parisienne. Que ce soit pour un café matinal, un déjeuner de brasserie classique ou un dernier verre à deux heures du matin, Le Select incarne cette permanence du Montparnasse éternel.",
    insider_tip: "Ne cherchez pas à réserver le soir, l'établissement cultive une liberté rare à Paris. Le chocolat chaud est l'un des plus onctueux du quartier, parfait pour une pause après-midi. Les soirs de week-end, l'ambiance y est particulièrement vibrante jusqu'au petit matin.",
    expert_catchline: "Le dernier temple authentique de la Lost Generation à Montparnasse.",
    specials: {
        cuisine: ["Brasserie Traditionnelle", "Viandes de Qualité"],
        drinks: ["Cocktails Classiques", "Vins de Vignerons"],
        must_eat: "L'Oeuf Mayo et le Confit de Canard.",
        must_drink: "Un café creme ou un cocktail au bar en zinc."
    }
};
