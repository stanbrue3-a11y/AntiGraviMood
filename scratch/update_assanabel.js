const { execFileSync } = require('child_process');

const payload = {
    dominant_mood: 'chill',
    has_terrace: true,
    closes_late: false,
    nearest_metro: 'Denfert-Rochereau',
    metro_lines: ['4', '6'],
    reservation_policy: 'resa_conseillee',
    subcategories: ['cuisine_libanaise', 'mezzes', 'halal'],
    raw_facts: [
        'terrasse extérieure verdoyante et fleurie sous de larges parasols gris',
        'mezzés froids et chauds faits maison',
        'feuilles de vigne farcies à la menthe et au citron',
        'décoration soignée avec éclairage tamisé',
        'service attentionné',
        'proximité immédiate de la place Denfert-Rochereau'
    ],
    sensory_material: 'les jardinières d’hibiscus et d’hortensias qui encadrent la terrasse tranquille',
    sensory_noise: 'les chuchotements et rires discrets autour des grands plateaux de mezzés partagés',
    description: "Situé à un jet de pierre de la place Denfert-Rochereau, Assanabel dévoile une terrasse dissimulée du quartier : un espace vert, fleuri d'hortensias et d'hibiscus, abrité sous de grands parasols gris. L'adresse met en valeur la cuisine libanaise avec une farandole de mezzés faits maison d'une fraîcheur absolue, des feuilles de vigne farcies parfumées au citron aux feuilletés croustillants. Un havre tranquille et parfumé.",
    dogme_source_ref: 'GOOGLE_REVIEWS',
    dogme_exact_quote: 'La fraîcheur et la saveur des plats sont inégalables',
    insider_tips: [
        "La terrasse arrière est un secret de quartier, réservez en extérieur lors des beaux jours.",
        "Le menu découverte de mezzés est idéal pour les groupes pour goûter à toute la richesse de la carte.",
        "N'hésitez pas à demander le thé à la menthe servi en fin de repas pour une note parfumée."
    ],
    tags: ['new_lot'],
    internal_audit_logs: ["[AUDIT F.I.P.P OK] Photos vérifiées : magnifique terrasse verte et fleurie en soirée, mezzés premium, feuilles de vigne. Correction métro Denfert-Rochereau."]
};

try {
    console.log("Updating Assanabel - Alésia...");
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'assanabel-alesia', JSON.stringify(payload)], {
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Failed.', e.message);
}
