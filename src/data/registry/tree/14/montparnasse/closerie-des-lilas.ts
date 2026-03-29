import { SurgicalPlace } from "../../../type-definition";

export const closerie_des_lilas: SurgicalPlace = {
    id: "poi-closerie-des-lilas",
    name: "La Closerie des Lilas",
    slug: "la-closerie-des-lilas",
    category: "restaurant",
    subcategory: ["brasserie", "gastronomique", "institution", "historique", "cocktail-bar", "terrasse"],
    location: {
        address: "171 Boulevard du Montparnasse, 75006 Paris, France",
        arrondissement: 14, // Traditionally associated with 14th/Montparnasse
        lat: 48.8401436,
        lng: 2.3360432,
        nearest_metro: "Port-Royal",
        metro_lines: ["RER B"],
        google_id: "ChIJD0MBxsZx5kcREfMy9IsrUTo"
    },
    moods: {
        chill: 60,
        festif: 40,
        culturel: 100
    },
    practical: {
        opening_hours_raw: "Monday: 12:00 PM – 1:30 AM | Tuesday: 12:00 PM – 1:30 AM | Wednesday: 12:00 PM – 1:30 AM | Thursday: 12:00 PM – 1:30 AM | Friday: 12:00 PM – 1:30 AM | Saturday: 12:00 PM – 1:30 AM | Sunday: 12:00 PM – 1:30 AM",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        main_action: {
            type: "book",
            url: "https://www.closeriedeslilas.fr/",
            label: "RÉSERVER UNE TABLE"
        }
    },
    pricing: {
        avg_budget: 75,
        is_free: false,
        dish_price: 48,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category_type: "other",
                display_label: "L'Écailler & Crustacés",
                items: [
                    { name: "Plateau Royal Closerie (Homard, Tourteau, Huîtres, Langoustines)", price_cents: 11500 },
                    { name: "Plateau Dégustation", price_cents: 5400 },
                    { name: "Huîtres Gillardeau N°3 (les 6)", price_cents: 3400 },
                    { name: "Huîtres Brittany N°1 (les 6)", price_cents: 2340 },
                    { name: "Langoustines Royales fraîches", price_cents: 3800 }
                ]
            },
            {
                category_type: "other",
                display_label: "Légendes Hemingway",
                items: [
                    { name: "Le Célèbre Filet de Boeuf Hemingway", price_cents: 5200, description: "Flambé au poivre, la signature historique du lieu." },
                    { name: "Tartare de Boeuf Classique Closerie", price_cents: 3200 },
                    { name: "Quenelle de Brochet Sauce Nantua", price_cents: 4800 },
                    { name: "Sole Meunière de nos Côtes (500g)", price_cents: 5800 },
                    { name: "Ris de Veau doré au sautoir", price_cents: 5200 },
                    { name: "Pavé de Cabillaud à la vapeur, vierge de légumes", price_cents: 4200 },
                    { name: "Riz de Veau aux Morilles", price_cents: 5400 },
                    { name: "Epaule d'Agneau confite 7 heures", price_cents: 4500 }
                ]
            },
            {
                category_type: "dessert",
                display_label: "Douceurs & Classiques",
                items: [
                    { name: "Profiteroles au Chocolat Chaud", price_cents: 1600 },
                    { name: "Crêpes Suzette flambées en salle", price_cents: 2200 },
                    { name: "Millefeuille à la Vanille Bourbon", price_cents: 1800 },
                    { name: "Soufflé au Grand Marnier", price_cents: 2100 },
                    { name: "Baba au Rhum Ambré 'Closerie'", price_cents: 1900 }
                ]
            },
            {
                category_type: "drink",
                display_label: "Cocktails Signature",
                items: [
                    { name: "Hemingway Special (Rhum, Pamplemousse, Marasquin)", price_cents: 2200 },
                    { name: "Jazz à la Closerie", price_cents: 2100 }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfXiFoBPhdvSQjim9ZCf8a9PLOaY-cO-A1wcLMk2EAnyjD3SrR9TxezvmpeIRhaZ9-5wlPx2AL7fBW-m5cR9T8TIG8J1GotsHNwZJQLujmHlCvFXapE8w4ZOXjCSoCmZ1yzCxH_f8CCsp7Ec2i51XdvXZsi_3xGdUB1ezzZb7nfOZndmM5IGhQqG99zag533Rbph8IP9VhbXMdLD5oIABPrLllu4uBVRhmQnrTL3l3I3EYQ7B0jl9MGjHgZT_bHrWlIvw0MBOGRbHQoGREucg3bjj9vY183yztluaRXgetBvhzGJpHppPB9iuDLPauAy9kN-arBB5dx7MR4GxaNATRpOxQ7CBU_RMPZKp2PhkD5Ht58AGxVm3YhUxUs7lINJX7L8UxmP0ghJ_CkE4r8zodAZ9P1H9_Ax6FdSpXRRuzhhUURd&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWFhQhqFd6kVmc1AG_EwaWMT4ZBVOxjxpDJS1ak1Bw0P52p-xPOjpNDkmAeEiQVqxXpW2gn4xXEGYDZ1He08Hj1wNpVv9_uvY7e8SncoCL6Z2umjlmIKPh3B0zW8y-6UiH2I-AGKWNon6VJre1BmnLRGjT92XHnarXeDg3DXUhCE4BNAbgHLdiGZg0zD-UQuVc5MhodvjUQt7jVLVEdzNVFRNbt3Wwld3qOqujAGljCfi4Sf-bmj31NxGchNmVk16z1glJrthSQ_KmhichhJIq_vsTZNjsKfP9_Z1iZk8bnmy1xXpIzO_zm1PnYyjSMkS_CqBbptLXTray8LlFe2UioA5YyEkdOkJN4odGDk4lvhlLWIdc-xNR0H95IbFPdixFPDF4wwiJyGjPYNbi06qaWif8tZPBpLlbybg0zuV56WA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.3,
    description: "La Closerie des Lilas n'est pas qu'un restaurant, c'est un fragment vivant de l'histoire littéraire de Paris. Depuis 1847, ce lieu mythique a vu défiler Baudelaire, Verlaine, Hemingway, Fitzgerald et tant d'autres. Divisé en trois espaces — le bar à cocktails feutré, la brasserie animée et le restaurant gastronomique sous verrière — il conserve une atmosphère unique de salon intellectuel permanent. Les banquettes de cuir rouge portent encore les noms des illustres habitués, gravés sur des plaques de cuivre. Entre les lilas de la terrasse et les notes de piano qui s'échappent du bar, le temps semble s'être arrêté dans ce sanctuaire du chic rive gauche.",
    insider_tip: "Demandez la table de Hemingway au bar pour un cocktail en solo, ou installez-vous sous la verrière du restaurant pour un dîner romantique hors du temps. Ne manquez pas le Filet Hemingway, une institution inchangée depuis des décennies.",
    expert_catchline: "Le sanctuaire mythique des lettres et des arts à Montparnasse.",
    specials: {
        cuisine: ["Gastronomie Française", "Brasserie de Luxe"],
        drinks: ["Cocktails Historiques", "Vins d'Exception"],
        must_eat: "Le Filet de Boeuf Hemingway flambé.",
        must_drink: "Un Hemingway Special au mythique piano-bar."
    },
    source: "expert_human"
};
