---
description: Protocole strict de création et de validation des fiches lieux (Standard Industriel 2026)
---

# Protocole Chirurgical de Création de Fiche Lieu

## 🚨 RÈGLE ABSOLUE

> **NE JAMAIS SE PRÉCIPITER. PRENDRE SON TEMPS.**
> Chaque fiche lieu vaut mieux bien faite en 10 minutes que bâclée en 2.
> La vitesse n'est PAS un objectif. La rigueur est le SEUL objectif.
> Si tu sens que tu vas trop vite → STOP, relis le workflow, recommence proprement.

> **IL EST STRICTEMENT INTERDIT D'INVENTER UN PRIX, UNE INFO, OU UNE DONNÉE.**
> Si une donnée n'est pas trouvée après recherche exhaustive → mettre `0`
### 2. PRIX — SCRAPER JUSQU'À LA MOELLE
Chaque champ prix doit être renseigné ou explicitement justifié si absent :
- `pint_price` : Prix EXACT de la pinte
- `cocktail_price` : Prix EXACT d'un cocktail signature
- `wine_glass` : Prix EXACT du verre de vin
- `coffee_price` : Prix EXACT du café/expresso
- `dish_price` : **PRIX MÉDIAN DES PLATS** (Main Dishes only). Interdiction d'utiliser un menu ou une formule si des plats à la carte existent.
- `soft_price` : Prix d'un soft/eau minérale
- `planche_price` : Prix d'une planche (si applicable)
- `shot_price` : Prix d'un shot (si applicable)
- Si **Happy Hour** : renseigner `hh_pint`, `hh_cocktail`, `hh_wine`, et `hh_time`
- **`menu_items`** : OBLIGATOIRE si le lieu a un site web avec une carte. Saisir la TOTALITÉ de la carte (Menu complet, Entrées, Plats, Desserts, Boissons). Un lieu premium doit avoir **minimum 30 items** si le menu est riche.
- **`smart_tip`** : Résumer le meilleur deal du lieu (ex: "HR 16h-23h cocktails 5€")
- `0` = "prix NON TROUVÉ" — jamais inventer

### 2.2 LE DOGME DU PLAT MÉDIAN ⚖️
> **La jauge de prix (`dish_price`) repose UNIQUEMENT sur la médiane des "Vrais Plats" (Main Courses).**
> - **Outil** : Utiliser `scripts/audit_11.ts` ou `audit_14.ts` pour vérifier la cohérence.
> - **Priorité 1** : Médiane des Plats individuels (ex: 18€, 22€, 26€ -> 22€).
> - **Priorité 2 (si Menu Unique)** : Prix du menu le moins cher permettant d'être rassasié (Satiety Unit).
> - **Interdiction** : Ne jamais moyenner avec les entrées, desserts ou "petites assiettes".
> - **Exception** : Pour les bars à planches/tapas, prendre le prix d'une planche "Satiety" (~22€).

### 2.3 NOMMAGE CHIRURGICAL DES CATÉGORIES (ANTI-BIAIS) 🚫🍰
> **La jauge de prix est calculée par un script (ex. audit_14.ts). Les mots-clés du nom des catégories DÉFINISSENT si les prix sont inclus dans la médiane. Ne JAMAIS faire de l'à-peu-près.**
> - **Catégories "Plat Principal" (INCLUS)** : Le nom de la catégorie DOIT contenir des mots forts de ciblage : `Plats`, `Main`, `Résistance`, `Salé`, `Lunch`, `Pizza`, `Burger`, `Viande`, `Bistronomie`, `Moment`, `Planche`, `Satiété`.
> - **Catégories Secondaires (EXCLUS)** : Pour éviter le biais du dessert ou du sandwich pas cher, les catégories annexes DOIVENT contenir des mots d'exclusion : `Entrée`, `Dessert`, `Douceur`, `Sucré`, `Boisson`, `Café`, `Accompagnement`, `Side`, `Viennoiserie`.
> - **L'Interdiction Absolue** : Nommer une catégorie de façon ambiguë avec "Menu" ou "Signature" sans préciser le type. (Ex: "Signatures" → "Signatures (Desserts)"). Toujours lever l'ambiguïté pour le script.

### 3. PROTOCOLE JANUS — L'HYBRIDITÉ OBLIGATOIRE 🕵️‍♂️🎭
Les lieux ne sont plus binaires. Si un lieu est hybride, il DOIT être tagué pour apparaître dans TOUS les filtres :
- **Règle des Sous-Catégories** : Si un Bar sert des plats réeels → ajouter `"restaurant"` dans `subcategory`.
- **Analyse des Indices** : Chercher les mots-clés "cuisine", "menu", "chef", "signature" dans les avis.
- **Speakeasy** : Si un bar a un sous-sol caché → ajouter `"speakeasy"`.
- **Conséquence** : Un lieu hybride doit apparaître quand on filtre sur "Restaurant" MÊME si sa catégorie principale est "Bar".

### ⚡ RÈGLE HH 3H+ (FILTRAGE MAP)
> **Si le Happy Hour dure PLUS de 3 heures (ex: 15h-00h = 9h), le compilateur utilise AUTOMATIQUEMENT les prix HH pour les filtres de la carte.**
> C'est crucial pour que les "vrais bons plans durables" apparaissent quand l'utilisateur filtre par prix.
> Vérifier que `hh_time` est au format `HHh-HHh` (ex: `17h-20h`) pour que le calcul automatique fonctionne.

### 📊 RÈGLE BARRE DES PINCES (REMPLISSAGE)
> **Le remplissage de la barre des pinces doit être PRÉCIS.**
> Ne pas se contenter des 4 blocs (25, 50, 75, 100). Le code utilise désormais le `fill_percent` continu calculé par `CrabCalculator` (ex: 58% pour une pinte à 7.20€).
> Cela permet à l'utilisateur de voir d'un coup d'œil si le lieu est "un peu cher" ou "très cher" au sein de sa catégorie.

---

## PHASE 1 — RECHERCHE EXHAUSTIVE (avant toute écriture de code)

### Étape 1.1 : API Google Maps Place Details (OBLIGATOIRE)
```bash
curl -s "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=[NOM+LIEU+ADRESSE]&inputtype=textquery&fields=place_id,name,geometry,rating,photos,formatted_address&key=$EXPO_PUBLIC_GOOGLE_MAPS_API_KEY"
```
Puis avec le `place_id` obtenu :
```bash
curl -s "https://maps.googleapis.com/maps/api/place/details/json?place_id=[PLACE_ID]&fields=name,reviews,url,website,opening_hours,formatted_phone_number&key=$EXPO_PUBLIC_GOOGLE_MAPS_API_KEY&language=fr"
```
Extraire :
- **Coordonnées GPS** (lat/lng) — SEULE source fiable, jamais estimer
- **Rating Google** exact
- **Photo reference** pour le hero image
- **opening_hours.weekday_text** — horaires officiels
- **website** — lien officiel
- **reviews** → **LIRE CHAQUE AVIS** et noter tout prix mentionné par les clients

### Étape 1.2 : Recherches web croisées (minimum 5)
Lancer ces recherches dans cet ordre :
1. `"[nom lieu]" Paris prix bière pinte cocktail vin café menu carte`
2. `"[nom lieu]" Paris avis commentaires "€"`
3. `"[nom lieu]" Paris happy hour horaires terrasse`
4. `"[nom lieu]" Paris instagram site web`
5. `"[nom lieu]" [adresse] eat-list restaurantguru mapstr mistergoodbeer`

### Étape 1.3 : Scraping des pages (si read_url_content fonctionne)
Tenter de lire directement :
- `https://www.mistergoodbeer.com/bars/[slug]`
- `https://www.timetobar.com/bars/[slug]`
- `https://restaurantguru.com/[slug]-Paris`

### Étape 1.4 : Validation des données
Pour chaque donnée trouvée :
- **Date de la source** : > 2 ans = SUSPECTE, > 5 ans = REJETÉE
- **Nombre de sources** : 1 seule source = FRAGILE (mentionner dans le commentaire), 2+ concordantes = VÉRIFIÉ
- **Contradictions** : un avis Google récent PRIME sur un site d'annuaire. Exemple : un avis disant "pas de happy hour" invalide un HH affiché sur TimeToBar
- **Prix arrondis** : si la source dit "< 3€", mettre la borne sup (3) avec commentaire `// VERIFIED: [source] — "< 3€"`

---

## PHASE 2 — RÉDACTION DE LA FICHE

### Prix — Chaque champ annoté
```typescript
"pricing": {
    "avg_budget": 8,
    "is_free": false,
    // VERIFIED: MisterGoodBeer + Google review Arthur (2024) — 3,80€
    "pint_price": 3.80,
    // NOT FOUND: aucune source récente — mis à 0
    "cocktail_price": 0,
    // NOT FOUND: source 2015 obsolète — mis à 0
    "wine_glass": 0,
    "coffee_price": 0,
    "dish_price": 0,
    "last_updated": "2026-02-28"
}
```
- `0` = "prix NON TROUVÉ ou NON VÉRIFIÉ" (pas "le lieu n'en sert pas")
- Si Happy Hour : vérifier dans les AVIS GOOGLE qu'il est réellement appliqué avant de le mettre

### Contenu éditorial — Niveau premium
- **Description** : Minimum 3 phrases riches et FACTUELLES. Puiser dans les avis Google pour des détails vrais (ex: "anciennement l'Absinthe Café", "concerts de jazz", "croziflette mentionnée par un client")
- **insider_tip** : Minimum 2 phrases. Basé sur des FAITS trouvés dans les avis (ex: "les potatoes sont offertes" = avis Google). JAMAIS inventer un tip
- **specials.cuisine** : Lister UNIQUEMENT les plats mentionnés dans les avis ou menus trouvés
- **specials.drinks** : Inclure les prix vérifiés entre parenthèses (ex: "Bière pression (pinte 3,80€)")
- **specials.must_eat** : OBLIGATOIRE : Commencer par annoncer le type de cuisine (ex: "Cuisine méditerranéenne. ...") avant d'énumérer les plats recommandés par les vrais clients.
- **specials.expert_catchline** : Résumer en une phrase punchline avec des données vérifiées

### Données pratiques
- **opening_hours_raw** : Utiliser UNIQUEMENT les horaires de l'API Google Maps (`weekday_text`)
- **action_url** : Priorité au champ `website` de l'API Google Maps. Si absent, chercher sur le web
- **instagram_handle** : Chercher dans Google Maps, site web, et recherche web. Si introuvable → `null`
- **terrace** : Mentionné dans les avis ou les fiches de sites (TimeToBar, etc.). **Scan visuel obligatoire.**
- **reservation_policy** : Valeurs autorisées : `"sans_resa"`, `"resa_conseillee"`, `"resa_obligatoire"`, `null`

### Photo
- Construire avec la `photo_reference` de l'API `findplacefromtext` :
```
https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=[REF]&key=[KEY]
```
- **JAMAIS** d'image Unsplash générique

### 4. INTÉGRITÉ MÉDIA ET LOCALISATION (ANTI-FAKE DATA)
> **L'utilisation de données de remplissage (placeholders) est STRICTEMENT INTERDITE.**
> - **Photos** : L'agent DOIT récupérer **3 vraies URLs de photos Google Maps** (1 hero, 2 gallery). Interdiction formelle d'utiliser des motifs comme `v8v8v8` ou `Z-Z-Z`.
> - **Localisation** : L'agent DOIT vérifier et saisir les coordonnées GPS (`lat`/`lng`) **exactes** du lieu. Interdiction de copier/coller les coordonnées d'un autre lieu pour gagner du temps.

### 5. RÈGLE DE L'EXHAUSTIVITÉ (ANTI-FLÈMME)
> **Si un menu est trouvé (site web, instagram, ou photo de la carte), il est INTERDIT de le résumer.**
> Chaque item doit être saisi avec son prix exact. Si le menu a 50 items, on saisit 50 items.
> L'IA ne doit jamais tronquer la donnée par "gain de temps". La complétude est la priorité.

### 6. HIÉRARCHIE DES SOURCES (DOUBLE-CHECK)
> 1. **SOURCE N°1 (Vérité)** : Menu officiel (Site, Instagram récent, Photo de -3 mois).
> 2. **SOURCE N°2 (Fiabilité)** : Sites spécialisés (MisterGoodBeer, Schlouk, Privateaser).
> 3. **SOURCE N°3 (Indice)** : Avis Google.
> **Note** : Un avis Google ne peut plus invalider une source spécialisée sans une preuve visuelle jointe. Si un avis contredit un prix d'annuaire, on garde le prix d'annuaire par défaut sauf certitude absolue du contraire.

### 7. LE DEEP-LINK OBLIGATOIRE
> - Interdiction de valider une fiche sans `instagram_handle` ou `website` si le lieu est présent sur le web.
> - Si le lien est caché (bouton icône sans texte), l'agent DOIT explorer le DOM ou naviguer pour trouver l'URL finale.

---

## PHASE 3 — INSTALLATION TECHNIQUE & SOURCING

1. Créer le fichier `.ts` dans `src/data/registry/tree/[arrondissement]/[metro-slug]/[place-slug].ts`
2. **SOURCING TRANSPARENT** : Chaque bloc de données (Pricing, Menu, Practical) doit avoir un commentaire `// SOURCE: [URL/Source]` précisant l'origine et la date de vérification.
3. Ajouter l'import dans `index.ts`.
4. Compiler : `npx tsx scripts/compile_registry.ts` ← auto-hash, auto-manifest, auto-cleanup
5. Relancer Metro : `npx expo start -c --dev-client --lan`

> Plus de bump de version manuel. Le hash SHA-256 est généré automatiquement.

---

## 📋 CHECKLIST ULTIME

```
RECHERCHE
[ ] API Google Maps findplacefromtext appelée (coords, rating, photo)
[ ] API Google Maps Place Details appelée (reviews, hours, website)
[ ] Avis Google lus et prix extraits
[ ] 5+ recherches web effectuées et croisées
[ ] **Protocole Janus** : Hybridité vérifiée et tags subcategory ajoutés (ex: restaurant pour un bar à manger)
[ ] Date de chaque source vérifiée (< 2 ans)
[ ] Contradictions entre sources identifiées et résolues

PRIX & MENU
[ ] Chaque prix annoté avec // VERIFIED: [source] ([date])
[ ] **Opération Moelle** : 30+ items de menu saisis (si carte riche disponible)
[ ] Prix non trouvés mis à 0 avec // NOT FOUND
[ ] Happy Hour vérifié dans les AVIS (pas juste sur TimeToBar)
[ ] Règle HH 3h+ : si HH > 3h, les prix HH sont renseignés (ils serviront au filtrage)
[ ] Aucun prix inventé — ZÉRO

CONTENU
[ ] Description ≥ 3 phrases factuelles (puisées dans les avis)
[ ] Insider tip ≥ 2 phrases basées sur des faits vérifiés
[ ] must_eat basé sur les recommandations des vrais clients
[ ] expert_catchline avec données vérifiées
[ ] specials.drinks avec prix entre parenthèses

TECHNIQUE
[ ] Photo Google Maps (photo_reference API)
[ ] Horaires depuis Google Maps API (weekday_text)
[ ] Website depuis Google Maps API
[ ] Instagram cherché (renseigné ou confirmé inexistant)
[ ] Coordonnées GPS depuis API (jamais estimées)
[ ] Ajouté dans le bon index.ts
[ ] DB recompilée + version bumpée
[ ] Metro relancé avec -c
```
