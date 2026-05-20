const { execFileSync } = require('child_process');

const payload = {
    dominant_mood: 'chill',
    has_terrace: true,
    nearest_metro: 'École Militaire',
    metro_lines: ['8'],
    reservation_policy: 'sans_resa',
    dogme_source_ref: 'GOOGLE_REVIEWS',
    dogme_exact_quote: 'because of its popularity, it is common to experience queues, especially on weekends',
    raw_facts: [
        'devanture bleue marquée',
        'tables en métal sur la terrasse',
        'brunch servi toute la journée',
        'pancakes épais et oeufs bénédicte',
        'file d\'attente fréquente sur le trottoir le weekend'
    ],
    sensory_material: 'devanture bleue et petites tables en métal',
    sensory_noise: 'brouhaha des clients affamés',
    description: "À deux pas du Champ de Mars, cette imposante devanture bleue cache un repaire de brunch hautement désiré. À l'intérieur comme sur les petites tables en métal de la terrasse, le brouhaha des affamés du dimanche se mêle au bruit continu de la machine à expresso. On s'y presse dès le matin pour attaquer des piles vertigineuses de pancakes salés et des œufs Bénédicte, dans un pur esprit de coffee shop anglo-saxon.",
    insider_tips: [
        "La maison fonctionne sans réservation : visez l'ouverture si vous ne voulez pas patienter debout sur le trottoir.",
        "Les œufs 'Salmon Benny' et les brioches perdues s'imposent comme les assiettes phares.",
        "Accompagnez votre assiette avec l'un de leurs cafés de spécialité ou leur fameux matcha latte."
    ],
    subcategories: ['brunch', 'coffee_shop'],
    tags: ['new_lot', 'pastille_bleue'],
    internal_audit_logs: ["[AUDIT F.I.P.P OK] Photo 0 est la belle façade bleue, Photo 2 et 4 confirment la présence claire d'une terrasse."]
};

try {
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'kozy-bosquet', JSON.stringify(payload)], {
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Failed to update.');
}
