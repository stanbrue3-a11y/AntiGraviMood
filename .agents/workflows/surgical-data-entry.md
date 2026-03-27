---
description: Protocole strict de crÃ©ation et de validation des fiches lieux (Standard Industriel 2026 - Moelle Totale)
---

# Protocole Chirurgical de CrÃ©ation de Fiche Lieu (V11.0 - UnitÃ© de Lieu)

## ðŸš¨ RÃˆGLE ABSOLUE

> **L'AUTOMATISATION EST LA SEULE GARANTIE.**
> Aucun badge ne doit Ãªtre laissÃ© au hasard. Le Scribe V9.0 prÃ©-remplit les badges via l'API Google.
> Toute modification manuelle d'un badge auto-dÃ©tectÃ© doit Ãªtre justifiÃ©e par une preuve visuelle.
> **LE WIFI EST DÃ‰SORMAIS PROSCRIT (NE PLUS EN PARLER).**

---

## PHASE 0 â€” LE ROBOT SCRIBE (CAPTURE INITIALE) ðŸ¤–âš“

### 0.1 L'ANCRAGE & LES MÃ‰TADONNÃ‰ES
Utiliser systÃ©matiquement le script d'automatisation avec **l'adresse exacte** :
```bash
npx tsx scripts/industrial_add.ts "[NOM DU LIEU] [ADRESSE EXACTE] Paris"
```
**Ce que le robot verrouille dÃ©sormais (V9.0) :**
- `google_id` : Unique et ancrÃ© Ã  l'adresse.
- `terrace` : **Auto-dÃ©tectÃ©** via `outdoor_seating` de Google Maps.
- `ferme_tard` : **Auto-verrouillÃ©** si les horaires dÃ©passent 00:00.
- `reservation_policy` : **Auto-dÃ©tectÃ©** via la prÃ©sence de liens 'TheFork' ou 'Zenchef'.
- `hero` + `gallery` : Quota strict de 3 photos HD Google (Remplacement des images AI par le Scribe).
- **Étalonnage Visuel** : Si une photo Google est floue ou contient des visages trop marqués, relancer l'ancrage ou choisir manuellement une référence plus "premium" dans la galerie Google.

---

## PHASE 1 â€” OPÃ‰RATION MOELLE (REMPLISSAGE DU TS) ðŸ¦´ðŸ’¸

### 1.1 LE DOGME DU PRIX MÃ‰DIAN (ENRICH ENGINE 2026)
- **Ton unique obligation** : Saisir le `menu_items` de faÃ§on exhaustive (30+ items pour Lot #28).
- **Exclusion Biais** : Bien nommer les catÃ©gories. **Banni : "Plat de RÃ©sistance"**, utiliser **"Plats"**.

### 1.2 LES MOODS QUALITATIFS (BIO-MIMÃ‰TISME)
Ne jamais mettre 50/50. Analyser les avis Google rÃ©els.

### 1.3 L'APPARTÃ‰ DE L'INITIÃ‰ (TRIPLE BULLET) ðŸŽ¯
Utiliser systÃ©matiquement les **template literals (backticks)** pour Ã©viter les erreurs de parsing multi-lignes.

### 1.4 ON MANGE QUOI ICI ? (SPECIALS) ðŸ�œðŸ¥§
- `must_eat` : **DOIT COMMENCER PAR LE TYPE DE CUISINE.** 
  Format : `"[Type de cuisine]. [Plat 1] & [Plat 2]"` (Ex: "Cuisine Basque. Magret & PÃ¢tÃ©").

---

## PHASE 2 â€” SYNCHRONISATION INDUSTRIELLE ðŸ›°ï¸�âš¡ï¸�

### 2.0 L'AUDIT DE CONFORMITÃ‰ (OBLIGATOIRE) ðŸ›¡ï¸�
```bash
npm run audit-registry
```
**Si infractions (Parsing Error / LibellÃ© Proscrit / Menu AnÃ©mique) :**
- Corriger AVANT toute synchronisation.

### 2.1 DÃ‰PLOIEMENT CHIRURGICAL ðŸš€
Ne jamais recompiler tout le registre pour un petit lot. Utiliser le flag strict :
```bash
npx tsx scripts/sync_to_supabase.ts --slug=slug1,slug2...
npx tsx scripts/migrate_media.ts --slug=slug1,slug2...
npx tsx scripts/inject_data.ts
npx tsx scripts/enrich_data.ts --slug=slug1,slug2...
```

---

## ðŸ“‹ CHECKLIST DE VALIDATION "MOELLE TOTALE"

```
[ ] Phase 0 (Robot Scribe) effectuÃ©e avec Adresse Exacte
[ ] Photos : 3 visuels rÃ©els via Google (ZÃ©ro image AI)
[ ] Menu : 30+ items saisis (SatiÃ©tÃ© garantie)
[ ] CatÃ©gories : ZÃ©ro libellÃ© proscrit (Ex: "Plats" au lieu de "RÃ©sistance")
[ ] Multi-ligne : Emploi des backticks (``) pour insider_tip
[ ] On mange quoi ici : CommenÃ§ant par le type de cuisine (ex: "Cuisine Basque.")
[ ] Badges Ã‰lite : Terrasse (VÃ©rification visuelle), RÃ©sa, Ferme tard (Horaires)
[ ] WiFi : SupprimÃ© / Absent du fichier
[ ] Sync : CiblÃ©e via --slug= (VÃ©rification mÃ©diane Logic v8.7)
```
