const { execFileSync } = require('child_process');

const payload = {
    dominant_mood: 'festif',
    has_terrace: false,
    closes_late: false,
    nearest_metro: 'Vavin',
    metro_lines: ['4'],
    reservation_policy: 'sans_resa',
    dogme_source_ref: 'GOOGLE_REVIEWS',
    dogme_exact_quote: 'Le fait de pouvoir choisir l’intensité du piquant dans son bouillon est juste génial',
    raw_facts: [
        'plafond couvert de lanternes rouges',
        'décor de marché de nuit chinois',
        'dragon suspendu',
        'nouilles épicées sichuanaises',
        'concombres tapés'
    ],
    sensory_material: 'le plafond tapissé de dizaines de lanternes rouges et les murs recouverts de faïence',
    sensory_noise: 'le bruit des baguettes qui brassent vigoureusement le bouillon brûlant',
    description: "Plongée directe dans l'atmosphère d'un marché de nuit du Sichuan. Sous un plafond saturé de lanternes rouges et un long dragon lumineux suspendu, on s'installe au coude-à-coude sur de petites tables façon marbre. L'endroit crache des bols fumants de nouilles épaisses noyées dans un bouillon rouge feu, accompagnées de raviolis baignant dans l'huile pimentée et de concombres tapés à l'ail.",
    insider_tips: [
        "Vous avez le contrôle total sur l'incendie : le niveau de piment du bouillon est personnalisable à la commande.",
        "La petite assiette de concombres tapés à l'ail est le coupe-feu idéal pour calmer le palais entre deux bouchées de nouilles.",
        "Il faudra souvent faire un peu la queue sur le boulevard, la maison ne prend aucune réservation."
    ],
    subcategories: ['cuisine_chinoise', 'street_food'],
    tags: ['new_lot'],
    internal_audit_logs: ["[AUDIT F.I.P.P OK] Photos vérifiées : salle avec lanternes rouges, dragon suspendu, nouilles en bouillon rouge."]
};

try {
    console.log("Updating TranTranZai...");
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'trantranzai', JSON.stringify(payload)], {
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Failed to update.', e);
}
