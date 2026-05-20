import { execFileSync } from 'child_process';
import path from 'path';

const payload = {
    dogme_source: 'bistronomique, chef Alexandre Aziza, cuisine ouverte, produits de saison, vins nature, comptoir',
    description: "Une devanture bleu nuit élégante cache l'une des adresses bistronomiques les plus vibrantes du quartier Pernéty. Chez Barbo, le chef Alexandre Aziza orchestre une cuisine d'auteur décomplexée face à une grande cuisine ouverte. Le comptoir en marbre invite à observer le dressage millimétré d'assiettes créatives, sourcées en circuit court et renouvelées au fil des saisons. Une carte de vins nature très pointue vient sublimer l'expérience.",
    insider_tip: "• Installez-vous directement au comptoir pour profiter du ballet de la cuisine ouverte et échanger avec la brigade.\n• Laissez-vous guider les yeux fermés sur les recommandations de vins nature qui épousent la carte évolutive.",
    nearest_metro: 'Pernety',
    metro_lines: ['13'],
    has_terrace: false,
    reservation_policy: 'resa_conseillee',
    tags: ['new_lot', 'pastille_bleue'],
    internal_audit_logs: ["[AUDIT F.I.P.P OK] Ordre validé : [0, 1, 2, 3, 4]"]
};

try {
    execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'barbo', JSON.stringify(payload)], {
        cwd: path.join(process.cwd()),
        stdio: 'inherit'
    });
} catch (e) {
    console.error('Erreur lors de la mise à jour.');
}
