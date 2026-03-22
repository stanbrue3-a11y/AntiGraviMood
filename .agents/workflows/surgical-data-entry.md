---
description: Protocole strict de création et de validation des fiches lieux (Standard Industriel 2026 - Moelle Totale)
---

# Protocole Chirurgical de Création de Fiche Lieu (V8.9)

## 🚨 RÈGLE ABSOLUE

> **LA PARESSE EST UN ÉCHEC CRITIQUE.**
> Chaque fiche lieu doit être traitée "jusqu'à la moelle". Si le travail est bâclé, Antigravity sera recalibré.
> La vitesse n'est PAS un objectif. La complétude et la rigueur sont les SEULS objectifs.

---

## PHASE 0 — LE ROBOT SCRIBE (CAPTURE INITIALE) 🤖⚓

Utiliser systématiquement le script d'automatisation. **INTERDICTION** de chercher par nom seul pour les chaînes ou noms communs :
```bash
npx tsx scripts/industrial_add.ts "[NOM DU LIEU] [ADRESSE EXACTE] Paris"
```
**Ce que le robot verrouille :**
- `google_id` : Unique et ancré à l'adresse (Indispensable pour les doublons d'enseignes).
- `lat`, `lng` : Coordonnées réelles du local physique.
- `hero` + `gallery` : **Quota strict de 3 photos HD.** Si le robot n'en trouve qu'une, relancer avec une requête plus précise.
- `opening_hours_raw` : Horaires spécifiques au point de vente.

---

## PHASE 1 — OPÉRATION MOELLE (REMPLISSAGE DU TS) 🦴💸

### 1.1 LE DOGME DU PRIX MÉDIAN (ENRICH ENGINE 2026)
Le champ `dish_price` est désormais **CALCULÉ AUTOMATIQUEMENT** par `enrich_data.ts` lors de la synchronisation.
- **Ton unique obligation** : Saisir le `menu_items` de façon exhaustive.
- **Quota de Satiété** : Minimum **15 à 20 items de menu** pour tout lieu ayant une carte riche.
- **Exclusion Biais** : Bien nommer les catégories (ex: "Entrées", "Plats de Résistance", "Douceurs") pour que le script identifie les "vrais plats".

### 1.2 LES MOODS QUALITATIFS (BIO-MIMÉTISME)
Ne jamais mettre 50/50. Analyser les avis Google réels pour ajuster :
- **Chill** (< 20% si bruyant/vibrant) : Zen, intime, calme.
- **Festif** (> 70% si bouillon/brasserie) : Effervescence, volume sonore, énergie.
- **Culturel** (> 60% si décor iconique) : Histoire, architecture (ex: Art Déco), concept fort.

### 1.3 L'APPARTÉ DE L'INITIÉ (TRIPLE BULLET) 🎯
Le champ `insider_tip` doit obligatoirement suivre le format **Triple Bullet** (`•`) avec des infos "vérité terrain" :
- `•` **Timing Stratégique** (ex: "Arriver avant 12h15 pour éviter la queue").
- `•` **Combo Gagnant / Moelle** (ex: "Le combo Os à Moelle + Bière du moment est imbattable").
- `•` **Détail Secret / Ambiance** (ex: "Demander la table du fond pour plus d'intimité").

### 1.4 ON MANGE QUOI ICI ? (SPECIALS) 🍜🥧
La section `specials` ne doit jamais être vide :
- `cuisine` : Liste de 3 à 5 tags (ex: ["Française", "Bouillon", "Traditionnelle"]).
- `must_eat` : **Doit commencer par le type de cuisine.** Format : "[Type de cuisine]. [Plat 1] & [Plat 2]". (Ex: "Bouillon traditionnel. Bœuf Bourguignon & Œuf Mayo").
- `drinks` : Lister 2-3 types de boissons phares (ex: ["Vin de table", "Kir", "Café"]).

### 1.5 LES 5 BADGES ÉLITE (FILTRAGE UNIQUE & COHÉRENCE) 💎🛡️
Seuls ces 5 badges ont une valeur de filtrage. **AUDIT DE COHÉRENCE OBLIGATOIRE** :
- **Résa conseillée** : `reservation_policy: "resa_conseillee"`. (Vérifier si le lieu est souvent complet).
- **Terrasse** : `terrace: true`. (**Vérification visuelle systématique** sur Google Photos).
- **Viande d'exception** : `viande_exception: true`. (Vérifier si viande maturée ou sourcée).
- **Ferme tard** : `ferme_tard: true`. (**Cohérence Horaires** : Obligatoire si fermeture ≥ 00h00).
- **Étoilé** : Renseigner `michelin_stars: 1 | 2 | 3`. (Vérifier le guide Michelin).

### 1.6 L'AUDIT D'IDENTITÉ (VERROUILLAGE BATCH) 🧬
Pour les envois par lot (ex: "Toutes les tavernes Zhao"), effectuer une relecture comparative :
- `google_id` : Doit être **différent** pour chaque fichier.
- `location` : Les coordonnées ne doivent pas être identiques (sauf adresse partagée type foodcourt).
- `photos` : Les IDs et références doivent être uniques au lieu physique.

---

## PHASE 2 — SYNCHRONISATION INDUSTRIELLE 🛰️⚡️

### 2.0 L'AUDIT DE CONFORMITÉ (OBLIGATOIRE) 🛡️
Avant toute synchronisation, il est **STRICTEMENT OBLIGATOIRE** de lancer l'audit global :
```bash
npm run audit-registry
```
**Si l'audit échoue (Exit Code 1) :**
- Analyser les infractions (Collisions IDs, Menu anémique, Photos manquantes).
- Corriger les fichiers `.ts` concernés.
- Relancer l'audit jusqu'à obtenir le message : `✅ AUDIT RÉUSSI`.

### 2.1 LE SCAN DYNAMIQUE
Le système scanne désormais toute l'arborescence `src/data/registry/tree/` dynamiquement. 
**IL EST INTERDIT de modifier manuellement `src/data/registry/index.ts`.**

### 2.2 COMMANDE DE DÉPLOIEMENT
Lancer la synchronisation ciblée :
```bash
npm run industrial-sync --slug=[slug-du-lieu]
```
**Vérification de sortie :**
- `📍 1 lieux à injecter` (PostgreSQL Supabase).
- `💰 [slug] Médiane Plats : XX.XX€` (Validation Logic V8.7).

---

## 📋 CHECKLIST DE VALIDATION "MOELLE"

```
[ ] Phase 0 (Robot Scribe) effectuée avec **Adresse Exacte** (Ancrage)
[ ] Fichier .ts créé avec slug "chirurgical"
[ ] Unicité des IDs vérifiée ( google_id unique pour chaque lieu d'un batch )
[ ] Menu : 20+ items saisis avec prix exacts (Respect des catégories enseigne)
[ ] Photos : Quota de 3 visuels authentiques (Hero + 2 Gallery) respecté
[ ] Moods : Analyse textuelle des avis effectuée (Pas de 50/50)
[ ] Description : 3 phrases riches et immersives (Effervescence, Décor)
[ ] On mange quoi ici : Commençant par le type de cuisine (ex: "Bouillon.")
[ ] Badges Élite : Terrasse, Résa, Viande d'exception, Ferme tard, Étoilé
[ ] Audit de Cohérence : Badges alignés sur Horaires/Visuels (ex: 00h00 = Ferme tard)
[ ] Insider Tip : Format 3 puces (•) respecté et actionnable
[ ] Sync : Commande industrial-sync lancée et Médiane confirmée
```
