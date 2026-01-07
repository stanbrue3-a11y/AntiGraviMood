
const fs = require('fs');
const path = '/Users/stanbrue/Documents/AntiGraviMood/moodmap/src/data/pois_flattened.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const updates = {
    // BATCH 4: MUSEUMS
    "poi-1767052957817-629": {
        "Horaires": "10h00 – 18h30 (Fermé le lundi).",
        "L’expérience": "Hôtel particulier et jardin de 3 hectares peuplés de bronzes monumentaux.",
        "À ne pas manquer": "Le Penseur dans la roseraie et la Porte de l Enfer.",
        "L’astuce": "Le billet jardin seul (v. 4-6€) est le meilleur plan pour une pause luxe au calme.",
        "Le prix": "15€ l entrée complète. Gratuit pour les -26 ans résidents UE.",
        "Site web": "http://www.musee-rodin.fr/"
    },
    "poi-1767052958592-472": {
        "Horaires": "Mar-Dim : 11h-20h (Mardi jusqu à 22h).",
        "L’esprit": "Bâtiment de verre spectaculaire par Jean Nouvel dédié à l art contemporain radical.",
        "Le cadre": "Un jardin boisé sauvage entourant une architecture transparente.",
        "Le prix": "15€ l entrée complète, 10€ tarif réduit.",
        "Le bon plan": "Allez-y le mardi soir pour profiter du bâtiment illuminé et des nocturnes.",
        "Site web": "https://www.fondationcartier.com/"
    },
    "poi-1767052959702-836": {
        "Horaires": "09h00 – 18h00 (Fermé le mardi).",
        "Le chef-d’œuvre": "Les Nymphéas de Monet, installés dans deux salles ovales baignées de lumière.",
        "L’ambiance": "Un sanctuaire de paix au cœur des Tuileries. Immersion totale dans l impressionnisme.",
        "Le prix": "12.50€ (Gratuit -26 ans UE). Réservation en ligne conseillée.",
        "L’astuce": "Allez-y à l ouverture (09h00) pour voir les Monet seul au monde.",
        "Site web": "http://www.musee-orangerie.fr/"
    },
    // BATCH 5: HOTELS & OTHERS
    "poi-1767052939162-62": {
        "Horaires": "Bar/Resto : 12h-14h30, 19h-23h. Bar ouvert tard.",
        "L’ambiance": "Le repaire rock n roll et romantique de Pigalle. Moquette léopard et velours rouge.",
        "Le cadre": "Une cour intérieure cachée, ultra-calme et végétalisée, loin du bruit de la rue.",
        "Le prix": "Plats à 20-30€, cocktails à 14€. C est le prix de l ambiance Pigalle chic.",
        "Le tip": "Parfait pour un dernier verre en tête-à-tête dans un fauteuil discret.",
        "Site web": "https://www.hotelamourparis.fr/"
    },
    "poi-1767052940781-720": {
        "Horaires": "Resto : 12h-15h, 19h-23h (Bar jusqu à 02h).",
        "L’esprit": "L hôtel le plus vivant de Paris. Un mix de style industriel, rétro et jungle urbaine.",
        "Le cadre": "Un immense lobby-jardin intérieur. C est là que tout le monde se retrouve.",
        "Le prix": "Plats à 15-25€. Service décontracté et efficace.",
        "Le bon plan": "Le bar à cocktails derrière le lobby est plus calme pour discuter.",
        "Site web": "https://thehoxton.com/paris/"
    }
};

data.forEach(p => {
    if (updates[p.id]) {
        p.practical_info = { ...p.practical_info, ...updates[p.id] };
    }
});

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Update Complete');
