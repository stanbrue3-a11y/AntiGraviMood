import { execFileSync } from 'child_process';
import path from 'path';

const payload = {
    dominant_mood: 'chill',
    dogme_source: 'institution marine, sourçage huîtres David Hervé, déco cordages, terrasse végétalisée place Brancusi',
    description: "Face à la place Constantin-Brancusi, La Cagouille est un sanctuaire du produit brut. Ici, pas de fioritures, mais une ode à la pureté marine : huîtres de chez David Hervé, poissons de ligne et couteaux à la plancha. Le décor, habillé de cordages et de bois sombre, rappelle un carré d'officier élégant, tandis que sa vaste terrasse végétalisée offre l'un des replis les plus calmes du 14e arrondissement.",
    insider_tip: "• Aux beaux jours, privilégiez la terrasse ombragée de la place Brancusi pour son calme exceptionnel.\n• Explorez leur carte de Cognacs et Pineaux des Charentes, héritage historique du fondateur Gérard Allemandou.",
    nearest_metro: 'Gaîté',
    metro_lines: ['13'],
    has_terrace: true,
    reservation_policy: 'resa_conseillee',
    tags: ['new_lot', 'pastille_bleue'],
    internal_audit_logs: ["[AUDIT F.I.P.P OK] Ordre validé : [0, 1, 2, 3, 4]"]
};

try {
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'la-cagouille', JSON.stringify(payload)], {
        cwd: path.join(process.cwd()),
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Erreur lors de la mise à jour.');
}
