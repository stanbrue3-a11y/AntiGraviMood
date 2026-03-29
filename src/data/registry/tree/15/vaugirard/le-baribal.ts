import { SurgicalPlace } from '../../../type-definition';

export const le_baribal: SurgicalPlace = {
    id: "poi-le-baribal",
    name: "Le Baribal",
    slug: "le-baribal",
    category: "restaurant",
    subcategory: ["brasserie", "bistrot", "français"],
    location: {
        address: "186 Rue de Vaugirard",
        arrondissement: 15,
        lat: 48.8418919,
        lng: 2.308947,
        nearest_metro: "Pasteur", // Estimated based on Rue de Vaugirard 186
        metro_lines: [6, 12],
        google_id: "ChIJ01xsAjpw5kcRus6pUHM0-5g"
    },
    moods: {
        chill: 60,
        festif: 30, // Good ambiance, noisy sometimes
        culturel: 0
    },
    practical: {
        // VERIFIED: Google Maps API (March 2026)
        opening_hours_raw: "lundi: 08:00–23:00\nmardi: 08:00–00:00\nmercredi: 08:00–00:00\njeudi: 08:00–00:00\nvendredi: 08:00–00:00\nsamedi: 09:00–00:00\ndimanche: 10:00–23:00",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: false,
        wifi: false,
        main_action: {
            type: "site",
            url: "https://lebaribal.shop/",
            label: "SITE OFFICIEL"
        }
    },
    pricing: {
        avg_budget: 25,
        is_free: false,
        pint_price: 4.00, // Based on reviews
        cocktail_price: 8.00,
        hh_cocktail: 6.00, // Happy Hour trigger for badge
        hh_time: "17h-20h",
        wine_glass: 0,
        coffee_price: 0,
        // NOT FOUND: Auto-calculated via `compile_registry.ts`
        dish_price: 0,
        last_updated: "2026-03-05",
        menu_items: [
            {
                category_type: "starter",
                display_label: "Entrées",
                items: [
                    { name: "Oeuf mayonnaise", price_cents: 600 },
                    { name: "Harengs pommes à l'huile", price_cents: 800 },
                    { name: "Soupe à l'oignon gratinée au Cantal", price_cents: 970 },
                    { name: "Os à moelle", price_cents: 1060 },
                    { name: "6 gros escargots en persillade", price_cents: 1100 },
                    { name: "Saumon fumé et ses blinis", price_cents: 1100 },
                    { name: "Foie gras de canard et son chutney", price_cents: 1100 }
                ]
            },
            {
                category_type: "main",
                display_label: "Viandes",
                items: [
                    { name: "Burger du 82 avec lard", price_cents: 1600 },
                    { name: "Tartare de boeuf", price_cents: 1800 },
                    { name: "Tête de veau, sauce gribiche", price_cents: 1800 },
                    { name: "Andouillette AAAAA", price_cents: 1800 },
                    { name: "Onglet de boeuf échalotes", price_cents: 1890 },
                    { name: "Saucisse aligot Thérondels", price_cents: 1900 },
                    { name: "Foie de veau persillé", price_cents: 1900 },
                    { name: "Rognons de veau, sauce moutarde", price_cents: 1900 },
                    { name: "Côtes d'agneau, sauce pistou", price_cents: 1900 },
                    { name: "Magret de canard sauce miel", price_cents: 2100 },
                    { name: "Tartare du Baribal (moelle)", price_cents: 2100 },
                    { name: "Entrecôte (300g) béarnaise", price_cents: 2380 },
                    { name: "Ris de veau, crème champignon", price_cents: 2600 },
                    { name: "Côte de boeuf 1 kg", price_cents: 6300 }
                ]
            },
            {
                category_type: "main",
                display_label: "Poissons",
                items: [
                    { name: "Fish burger, sauce tartare", price_cents: 1850 },
                    { name: "Gambas flambées au Jack", price_cents: 1900 },
                    { name: "Saumon vapeur, fondue de poireaux", price_cents: 1900 },
                    { name: "Filet de bar grillé, sauce pistou", price_cents: 1900 },
                    { name: "Thon grillé, sauce beurre persillé", price_cents: 2200 },
                    { name: "Daurade grillée, beurre citronné", price_cents: 2200 }
                ]
            },
            {
                category_type: "other",
                display_label: "Salades",
                items: [
                    { name: "César du Baribal", price_cents: 1700 },
                    { name: "Italienne", price_cents: 1800 },
                    { name: "Océane", price_cents: 1900 },
                    { name: "Périgourdine", price_cents: 1900 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Desserts & Boissons",
                items: [
                    { name: "Mousse au chocolat", price_cents: 700 },
                    { name: "Tarte citron meringuée", price_cents: 750 },
                    { name: "Tarte Tatin", price_cents: 750 },
                    { name: "Crème brûlée", price_cents: 800 },
                    { name: "Profiterole géante", price_cents: 1100 },
                    { name: "Café gourmand", price_cents: 1150 },
                    { name: "Pression 25cl (Kanterbrau)", price_cents: 350 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXpBM7hxUWIIkNmf9iHF31KKhk7HP9RTmUbO8b_7Qs546PxfCs9Ok6QFMfldfpSAinNJROuuk1wcIzUJwwLWfdhHew7G90LtAtTIhQYjWxz1sOFxfmImyVBq9zdFvIZn7Mak0YbJuIlunq1AvEZqZy1lsd1sAOSR1I_LOrNPe1DvCwirqE46lPYki46vigrHU2mT1Kicu9ipm0jcK0EBG23TnmNfoYePsm3gvjOci9UAKZky1n5d9RmnEQklLpMwAXTl8FBf9xuDDo4IbjUBNabjkt0Al8swRuJ6Gobh1c2V3D_k14&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: []
    },
    instagram_handle: "lebaribalparis",
    verified: true,
    google_rating: 4.4,
    description: "Une véritable institution du 15ème arrondissement installée depuis plus de 40 ans. Le Baribal, c'est ce bistrot de quartier qui ne triche pas : ambiance vivante, bruyante aux heures de pointe, et des portions d'une générosité redoutable. Fief des habitués de Vaugirard, l'adresse conjugue la tradition brasserie française pure jus avec une atmosphère de camaraderie où le patron n'hésite pas à envoyer des shots.",
    insider_tip: "• Les soirs de week-end, l'endroit peut être particulièrement bruyant et festif, avec une atmosphère presque \"pub\".\n• Une \"Formule Midi\" très efficace existe en semaine à 18€ (Entrée/Plat ou Plat/Dessert).\n• Ne manquez pas l'Happy Hour sur les cocktails à 6€.",
    expert_catchline: "Bistrot populaire et généreux, institution vibrante de Vaugirard depuis 40 ans.",
    specials: {
        cuisine: ["Saucisse aligot Thérondels", "Ris de veau crème champignon", "Tartare du Baribal à la moelle", "Profiterole géante"],
        drinks: ["Baribal Spritz", "Pinte de 1664", "Cocktails Happy Hour"],
        must_eat: "Une carte pléthorique où le terroir frappe fort. Ne passez pas à côté du monumental Tartare du Baribal à la moelle (21€) ou du classique Ris de veau à la crème (26€). En entrée, les 6 gros escargots en persillade annoncent la couleur.",
        must_drink: "Rien de savant, juste de l'efficace : des pintes qui coulent à flots et une belle sélection de cocktails classiques (dont leur signature Baribal Spritz) à 6€ en Happy Hour."
    }
};
