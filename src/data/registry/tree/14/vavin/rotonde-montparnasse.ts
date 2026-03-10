import { SurgicalPlace } from "../../../type-definition";

export const rotonde_montparnasse: SurgicalPlace = {
    id: "poi-rotonde-montparnasse",
    name: "La Rotonde Montparnasse",
    slug: "la-rotonde-montparnasse",
    category: "restaurant",
    subcategory: ["brasserie", "historique", "institution", "fruits-de-mer", "terrasse", "parisien"],
    location: {
        address: "105 Boulevard du Montparnasse, 75006 Paris, France",
        arrondissement: 14,
        lat: 48.842777,
        lng: 2.329444,
        nearest_metro: "Vavin",
        metro_lines: ["4"],
        google_id: "ChIJUUTr285x5kcR-hIAm6NjUHY"
    },
    moods: {
        chill: 50,
        festif: 60,
        culturel: 90
    },
    practical: {
        opening_hours_raw: "Monday: 7:30 AM – 1:00 AM | Tuesday: 7:30 AM – 1:00 AM | Wednesday: 7:30 AM – 1:00 AM | Thursday: 7:30 AM – 1:00 AM | Friday: 7:30 AM – 1:00 AM | Saturday: 7:30 AM – 1:00 AM | Sunday: 7:30 AM – 1:00 AM",
        reservation_policy: "resa_conseillee",
        terrace: true,
        accessibility: true,
        wifi: true,
        main_action: {
            type: "book",
            url: "https://www.rotondemontparnasse.fr/",
            label: "RÉSERVER UNE TABLE"
        }
    },
    pricing: {
        avg_budget: 65,
        is_free: false,
        dish_price: 32,
        menu_type: "standard",
        last_updated: "2026-03-10",
        menu_items: [
            {
                category: "L'Écailler de la Rotonde",
                items: [
                    { name: "Plateau La Rotonde (pour 2 personnes)", price: "98.00€" },
                    { name: "Assiette du Mareyeur", price: "42.00€" },
                    { name: "Huîtres Marennes d'Oléron N°3 (les 6)", price: "24.00€" },
                    { name: "Tourteau frais entier", price: "32.00€" },
                    { name: "Langoustines de casier (les 5)", price: "36.00€" },
                    { name: "Bulots et Crevettes roses", price: "21.00€" }
                ]
            },
            {
                category: "Les Grands Classiques",
                items: [
                    { name: "Foie Gras de Canard Maison", price: "26.00€" },
                    { name: "Soupe à l'Oignon Gratinée", price: "14.50€" },
                    { name: "Sole de Petit Bateau Meunière", price: "54.00€" },
                    { name: "Côte de Boeuf (env. 1kg pour 2)", price: "115.00€" },
                    { name: "Confit de Canard et Pommes Sarladaises", price: "28.00€" },
                    { name: "Tartare de Boeuf Charolais au couteau", price: "26.50€" },
                    { name: "Magret de Canard au Miel et Epices", price: "34.00€" },
                    { name: "Blanquette de Veau à l'ancienne", price: "32.00€" },
                    { name: "Filet de Bar grillé, légumes de saison", price: "38.00€" },
                    { name: "Ravioles de Royans crème de parmesan", price: "24.00€" }
                ]
            },
            {
                category: "Douceurs de la Rive Gauche",
                items: [
                    { name: "Profiteroles Classiques de La Rotonde", price: "14.50€" },
                    { name: "Ile Flottante aux Pralines Roses", price: "12.00€" },
                    { name: "Tarte Tatin et Crème Fraîche", price: "13.50€" },
                    { name: "Baba au Rhum Géant", price: "15.00€" },
                    { name: "Mousse au Chocolat à discrétion", price: "12.50€" }
                ]
            }
        ]
    },
    images: {
        hero: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWB9J9gd2EpDr4HZS5FZ1Nl1VdVkKCUO-zm_j8qHiRp0YgION_HGaTfF3wf3aJYE6l9z88xMrlkapePOMXrgL81XWvGwqVpEwm4RBlg1YAN5HiyIaHugRTLxgcjbPW1nuRjSwWjy0FKhGHkhZafodFrHgJ0wsNOZ0IZ0OO9YohY7dauSa5Dcwh6Fvsovyqo5bzd0cS3W2zekf-_jvvEM8IRdNNLwCjQ8h9v1XpOgp1SwyuYJswx_G9nP2xaPKWtPRshJ1iUQ4jt8rvXYf5h943DzqGaSb7hvGFTsoMfuRYZ8w&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
        gallery: [
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfVbrJdMRi1uQ_-ZvwA8QvKHjKObvpIML357qocLGP6XcZpH-Z27TUKRi12yOfSQxLaTgyB8s0Ht7GQnPzRDSonCT8v4CcEnZyfRzSkJE9NhE4yYGh38mRrTp2M2b-dTzrrbIRkcrc4rrL97jqFfyCebMuH2O6ZNNidOHJwl0U4Gj6fW_RqVwqMTbG3v6gwMBecOUJVb71A9Zg79NekUeMOzXCiW0s_ZRLLiYp91kwhGH98lZzsxQ3jrY1n0Tmzr1MldazR3eakMLEel8nAmUZH4sB89bZVLVKI6RIcBFNFHMA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM",
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfWWR68wjD5_k0gRgltQoZAkhpUrVO3xGKbYY9iuk2r5QkqxPmbIHOmhV7sF3VM1Ss7EvqQx-9kS5C3sMpFLmuGSFs_clofIjLcUjEfx-2XuRyhdgSUKa6bAAL8CK5lol1kqIlgqE40ncqF02fEVt2eV9Hm7mUOp2flm7K2dAzoxlFDjmeXZ2EwHHwfwrG6BL2MYccSBT5c6V_5drUKORSYH-vV86IvUCPJMaqg7khO3VHD38zOt9ST2IcrWasAWJHhv86OdPzNS8NcbCkkTFVbOVLIZ8t1D7Qjhwz8xLvKKHVr90mOk1adVFCvEqy805xXFf_KlT-l_cps-KmFhdmwF2gkvVPQYhGqlz0afOF1w95WTyncd7m5det8aeTA3WoX3PbFtN1veNHc6dohGstRIqi_DBe7tWo3SaINWJz_Owdenl-Imd16FS_dWSRkS&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM"
        ]
    },
    verified: true,
    google_rating: 4.4,
    description: "Avec son auvent rouge flamboyant et ses éclairages d'or, La Rotonde est le phare de Montparnasse. Temple de l'art de vivre parisien depuis 1911, elle fut le quartier général de Picasso, Modigliani et Apollinaire. Aujourd'hui, elle incarne la brasserie d'exception où le service en tablier blanc et la nappe immaculée sont de rigueur. On y vient aussi bien pour ses plateaux de fruits de mer vertigineux que pour ses classiques de la gastronomie bourgeoise, servis dans un décor resté fidèle à sa légende. C'est le lieu idéal pour observer le ballet parisien depuis sa terrasse mythique ou pour un dîner feutré dans les salons chargés d'histoire.",
    insider_tip: "Bien que très courue, La Rotonde garde toujours quelques tables pour les habitués au bar. Pour un moment plus calme, préférez le salon à l'étage. N'oubliez pas de goûter aux fruits de mer froids, leur arrivage est quotidien.",
    expert_catchline: "L'institution flamboyante de l'art de vivre montparnassien.",
    specials: {
        cuisine: ["Brasserie Française", "Fruits de Mer"],
        drinks: ["Grands Crus au Verre", "Champagnes de Marque"],
        must_eat: "Le Plateau Royal de l'Écailler.",
        must_drink: "Un vin blanc de Loire avec les huîtres."
    },
    source: "expert_human"
};
