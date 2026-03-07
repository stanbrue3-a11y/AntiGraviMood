import { SurgicalPlace } from '../../../type-definition';

export const jones: SurgicalPlace = {
    id: "poi-jones",
    name: "Jones",
    slug: "jones",
    category: "restaurant",
    subcategory: ["bistronomie", "fusion", "italien", "restaurant"],
    location: {
        address: "43 Rue Godefroy Cavaignac",
        arrondissement: 11,
        lat: 48.856584,
        lng: 2.380064,
        nearest_metro: "Voltaire",
        metro_lines: [9],
        google_id: "ChIJDXxdvwly5kcRIKCw1301aTc"
    },
    moods: {
        chill: 80,
        festif: 20,
        culturel: 0
    },
    practical: {
        opening_hours_raw: "lundi: 19:00–22:30\nmardi: Fermé\nmercredi: Fermé\njeudi: 19:00–22:30\nvendredi: 19:00–22:30\nsamedi: 19:00–22:30\ndimanche: 19:00–22:30",
        reservation_policy: "resa_conseillee",
        terrace: false,
        accessibility: true,
        wifi: false,
        main_action: {
            type: "site",
            url: "http://www.jonescaferestaurant.com/",
            label: "RÉSERVER"
        }
    },
    pricing: {
        avg_budget: 45,
        is_free: false,
        pint_price: 0,
        wine_glass: 7.00,
        coffee_price: 0,
        dish_price: 18, // MANUAL: Petites assiettes complexes (13-22€) format 'tapas bistronomique'
        last_updated: "2026-03-07",
        menu_items: [
            {
                category: "Les Petites Assiettes (Entrées & Tapas)",
                items: [
                    // MENU 100% EXHAUSTIF INJECTÉ (Standard Moelle) - Relevés 2024
                    { name: "Arancini croustillants cacio e pepe", price: "9.00€", description: "Le classique italien frit, parfait pour ouvrir l'appétit." },
                    { name: "Pamplemousse avec Brocciu et pistache", price: "12.00€" },
                    { name: "Salade Caesar, radis, radicchio rouge et rose, suprêmes d'orange", price: "12.00€" },
                    { name: "Hareng, crème d'anguille et betteraves", price: "14.00€" },
                    { name: "Asperges vertes et crème d'anguille", price: "15.00€" },
                    { name: "Bonite, ricotta fumée et sarrasin", price: "15.00€" },
                    { name: "Burrata d'exception & poutargue", price: "16.00€", description: "L'iode de la poutargue vient percer le gras de la burrata." }
                ]
            },
            {
                category: "Pâtes & Plats Principaux",
                items: [
                    { name: "Bucatini alla puttanesca", price: "17.00€" },
                    { name: "Spaghetti Cacio e Pepe", price: "18.00€", description: "Pecorino Romano et poivre noir, émulsion parfaite." },
                    { name: "Raviolis Ricotta cacio e pepe", price: "19.00€" },
                    { name: "Saint-Jacques snackées, noisettes et panais", price: "22.00€" },
                    { name: "Onglet de bœuf de Galice", price: "24.00€" },
                    { name: "Veau avec palourdes et brocolis", price: "24.00€" }
                ]
            },
            {
                category: "Fromages, Desserts & Vins Natures",
                items: [
                    { name: "Assiette de fromages affinés", price: "9.00€" },
                    { name: "Gâteau chaud aux coings", price: "8.00€" },
                    { name: "Tiramisu somptueux", price: "9.00€" },
                    { name: "Chocolat, fromage blanc et café", price: "9.00€" },
                    { name: "Sorbet Poire-Oseille, poire pochée et pecorino", price: "10.00€" },
                    { name: "Verre de vin nature (Sélection caviste)", price: "7.00€", description: "Sélection pointue et vivante, changeante chaque soir." },
                    { name: "Bouteille de vin nature (à partir de)", price: "32.00€" }
                ]
            }
        ]
    },
    images: {
        hero: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUT3whw4JL8RSQqwIkp82GAm2qMjrnbPXDjSTJ4LMDZ6m4wY9UGaLdlnCcHzKIuKm7WqOj86jGy6eDOnXK2VK9Zbt-_u3s1E4NEov25OUkoe2e00nxuiJ5vQBMVKNqJEo-mCHFlrexY2nCAgkQCQgR2YA7lKdJtFW0XFJr50RkMmkfICHPgni7G6q9C1feG2KsqQr7AMlzNR5-3EXr6LEnBgroURRxbLWu4Dw4CUABZ7DUixhMlO7EjWDgyr_oY4ZQi_1cAh56-ju6KqDBb3I6iOepPEbItBJgkGOxCTBhkgx-H1SMyfa-MeGawCzmqzRlWXDR7DEnTDbHlHpEPCnYbkfGDT9xhlHQZObDkCp-1Ow_eWVmwaJ6xTiHOIQElQ6XC70-6JnPQP3fNdFvZxyPCcSAymeOg9C9JUlks4O00pyNd&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        gallery: [
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfU3SgbCD1Om7IxI9y4w4Di4NMjh5PD-U1NI1tjOd5l2mSyCpCevCLkDSjXuhY_rHTDfDHK2FcsxrskMvs_9xBBtzsx-KTvbfHw0tiwxwN0twzzJnvYAHUmPLpZq7z2l1c9DLKDxHy-chRmAg0c3iGJTcWVfHa1bIuphaxozzH1B2MDmq_hGpVRion4oTVu67tku-kBVXdqagyCaZpiGyqnlRIY6wDhFTahUi4QDlXrnpl4M2MiiaQwpHsszAtdgDb9_-GOTIZINu2aO_bMguHFe7TlUi2xxKBjljOODbyjBEHXzIExdbVrsvBcFhDCweFRbLjxuhE2uKyG5v8ZjtQk8GYs8dNaWVLIkY9mo2xk06g1_GnpCOcSjzM0bXqvYWx4MeRg_g5ZT9H_QoqaMyB-sUoufWL9t0e3EMYDliEibagq5LADXly8k9cgdYEyv&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`,
            `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=ATCDNfUQku8oiJsVm2vb3-5lOgJT9skBNHJE6THNgQ7QRPSQvrG72m_2r8wmIuGPpBOiDAfd87jog1WyyU0qyKxFYWEhDCV0RSxmh3pgdp8XHdMVfRpP20DSSmay3mqcWSRGzkBblKBgxvjB_qIxEO27mlpq50cVs2HaYpgKaRr-C6x2HJhS1B5LOU2gy5ZcaoQC8vHoTai0RVswY0qfsAOysTfjnUshr2bFdNv7qrdpSnXxx8uTo-ryW2yADET7Ikx1T-sXl81ibQg4fczXkMTf8ZfW2pbIMFVkqbGV67f1xqrh0By3LTNG3w6Xh8ZTk9gvGdbHRC39uz6VmDJNqjVA1Zt7mMAxeq3rJkPheCnX_DnKJOfZ6gMrWINDgOTUVlqxSFad9cCPj-4uWMePQShihBScDDr1XPK0AG9T_OkvvvIfhPYwda5IKM3ftdc22e_2&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        ]
    },
    instagram_handle: "jonescaferestaurant",
    verified: true,
    google_rating: 4.5,
    description: "Derrière sa devanture bleu nuit, Jones s'impose comme une pépite bistronomique infusée d'influences italiennes. Une salle chaleureuse (pierres grattées, vieux miroirs) accueille des assiettes millimétrées, pensées pour être partagées, où la maîtrise des sauces et des cuissons tutoie l'excellence.",
    insider_tip: "• La carte est construite sous forme de petites et moyennes assiettes. Comptez 3 à 4 assiettes pour deux pour construire un grand dîner.\n• La sélection de vins natures est parmi les plus justes du quartier, laissez le sommelier choisir pour vous.\n• Attention : le restaurant n'est ouvert que le soir, et complètement fermé le mardi et le mercredi.",
    expert_catchline: "Haute volée d'assiettes partagées italo-françaises et quilles natures acérées dans un bistrot vibrant.",
    specials: {
        cuisine: ["Raviolis cacio e pepe", "Arancini croustillants", "Tiramisu somptueux"],
        drinks: ["Vins vivants exclusifs", "Macération pointue"],
        must_eat: "Les déclinaisons Cacio e Pepe, signature de la maison : de l'arancini à l'ouverture, jusqu'au spaghetti en plat de résistance.",
        must_drink: "Un rouge léger du Beaujolais ou une macération de Loire pour accompagner les notes intenses des assiettes."
    }
};
