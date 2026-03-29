import { SurgicalPlace } from '../../../type-definition';

export const lissit: SurgicalPlace = {
    id: "poi-lissit",
    name: "Lissit",
    slug: "lissit",
    category: "restaurant",
    subcategory: ["french", "bistrot", "bib-gourmand", "natural wine"],
    location: {
        address: "48 Rue de la Folie Méricourt",
        arrondissement: 11,
        lat: 48.864385,
        lng: 2.370392,
        nearest_metro: "Parmentier",
        metro_lines: [3],
        google_id: "ChIJs8_Ypldt5kcRG-p8E-Ff2-Q"
    },
    moods: {
        chill: 80,
        festif: 40,
        culturel: 60
    },
    practical: {
        opening_hours_raw: "Mar-Sam: 17:00–01:00 (Cuisine 19:00–22:30); Fermé Dim-Lun",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.barlissit.com",
            label: "SITE WEB"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 9.00,
        coffee_price: 0,
        dish_price: 15.00, // MANUAL: Median des assiettes à partager (8€ - 19€)
        menu_type: "standard",
        force_manual_dish_price: true,
        last_updated: "2026-03-08",
        menu_items: [
            // VERIFIED: Lissit 2025 Standard (Bib Gourmand)
            {
                category_type: "sharing",
                display_label: "Assiettes à Partager (Maison)",
                items: [
                    { name: "Pâté en croûte du moment", price_cents: 1200, description: "Charcuterie 100% faite maison." },
                    { name: "Terrine de campagne & Pickles", price_cents: 950 },
                    { name: "Endive gratinée au bleu d'Auvergne", price_cents: 1100 },
                    { name: "Saucisse au couteau & purée maison", price_cents: 1600 },
                    { name: "Tripes à la romaine & gnocchis", price_cents: 1450 },
                    { name: "Vaille hachée & condiments", price_cents: 1300 },
                    { name: "Tatin boudin noir & poire", price_cents: 1250 },
                    { name: "Burrata fumée, noisettes", price_cents: 1400 }
                ]
            },
            {
                category_type: "main",
                display_label: "Plats Traditionnels (Weekly)",
                items: [
                    { name: "Cassoulet au confit de canard", price_cents: 1900, description: "Généreux, haricots de Tarbes." },
                    { name: "Volaille farcie aux herbes", price_cents: 1850 },
                    { name: "Pêche du jour, beurre blanc", price_cents: 1700 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs",
                items: [
                    { name: "Fromage affiné (Alexis)", price_cents: 850 },
                    { name: "Mousse au chocolat & sel fumé", price_cents: 900 },
                    { name: "Fruit de saison rôti, sablé", price_cents: 850 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cave & Vermouths",
                items: [
                    { name: "Verre de Vin Nature", price_cents: 900, description: "Sélection tournante de pépites." },
                    { name: "Vermouth artisanal", price_cents: 850 },
                    { name: "Cocktail Signature", price_cents: 1300 }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVtk8sP7AR7_RPMoMeus-D9li2r-ZOU5zAY3x2TFfVxMrBiHipRnQysOT4zsyyFVuboqal8s14Ycz_gI3X-plMVdhY2vv-qiu2vAmoKL4NGLcIRwJvFyOgGml9ghO1UGmUHD7l3LR42c6pHKQNNBNut-Sb1issEtei8Q5Ystg9vz5c6AtGSbIhIP-9tyghXukg2pe4CW3CMKW-Hxz7l01RF7uZpMBrpKiO7obYDEB-CFD_gABJzA7_TeWz5KeCsbw78w3p6QO5fYn4NBKdYQ3Ca2cjA-c23fOs2BSutinSSTg&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: []
    },
    verified: true,
    google_rating: 4.6,
    description: "Une pépite récompensée par le Bib Gourmand 2026. Lissit (pour l'enfant du pays Alexis Lissitzky) est un lieu à part où la charcuterie maison règne en maître. La cheffe Claire Grumellon y déploie une cuisine de tradition, brute et sincère, qui magnifie le produit sans artifice. Une ambiance de natural wine bar chaleureux où l'on se sent immédiatement chez soi.",
    insider_tip: "Alexis est un sommelier passionné ; demandez-lui sa sélection de vermouths ou de vins naturels hors-carte, c'est là que réside l'âme du lieu.",
    expert_catchline: "Bib Gourmand 2026. L'art de la charcuterie maison et du vin vivant.",
    specials: {
        cuisine: ["Charcuterie Maison", "Tradition Modernisée", "Plats de Grand-Mère"],
        drinks: ["Natural Wines", "Vermouth Specialist", "Artisanal Cocktails"],
        must_eat: "Le pâté en croûte maison (l'un des meilleurs du quartier).",
        must_drink: "Un vermouth artisanal sélectionné par Alexis."
    }
};
