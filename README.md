# MoodMap

MoodMap est un moteur de recommandation de lieux (restaurants, bars, culture) basé sur une analyse quantitative des données tarifaires. Le projet se distingue par un pipeline de données rigoureux assurant l'intégrité et la précision des informations présentées à l'utilisateur.

---

## 🧭 Concept Technique

L'application vise à identifier objectivement le positionnement tarifaire des établissements parisiens. Contrairement aux annuaires classiques, MoodMap s'appuie sur une modélisation mathématique du marché local :

1.  **Référentiel de Qualité** : Chaque établissement est intégré selon un protocole strict d'exhaustivité des données.
2.  **PriceEngine** : Un moteur de calcul qui traite l'intégralité du menu pour isoler le prix médian des items principaux (ex: Plats de résistance), en excluant le "bruit" statistique (entrées, accompagnements, formules).
3.  **Analyse Comparative** : Le prix calculé est confronté aux moyennes du secteur géographique pour situer l'établissement sur une échelle de valeur factuelle.

---

## 🏗️ Architecture & Data Pipeline

Le projet adopte une approche **Data-as-Code**, où la base de données est le résultat d'une compilation de fichiers structurés.

### 🛡️ Le Pipeline de Compilation (`compile_registry.ts`)
Le script de compilation assure la cohérence du système à travers plusieurs étapes de validation :
- **Typage Strict** : Validation des schémas de données via TypeScript et Zod.
- **Audit de Prix (Pricing Audit)** : Vérification de la cohérence entre le prix de référence saisi manuellement et la médiane calculée par le `PriceEngine`. Un écart supérieur à 20% bloque la génération.
- **Radar de Proximité** : Détection automatique des doublons géographiques par calcul de distance (Haversine).
- **Garantie d'Exhaustivité** : Validation de la présence d'un menu complet pour chaque restaurant.

### 🚀 Stack Technologique
- **Application** : React Native / Expo.
- **Stockage** : SQLite (base locale pré-compilée pour assurer la rapidité des recherches hors-ligne).
- **Gestion des données** : Architecture Git-based CMS (fichiers `.ts` individuels organisés par quartier).

---

## 🛠️ Protocole d'Ingestion des Données

Pour garantir la pertinence du `PriceEngine`, toute nouvelle entrée suit le standard **Moelle**, imposant :
- **Exhaustivité Totale** : Transcription intégrale de la carte (Starter, Main, Dessert, Drinks).
- **Vérification Multi-Sources** : Recoupement systématique (Google Maps, sites officiels, photos de cartes récentes).
- **Normalisation** : Conversion des horaires en format ISO et standardisation des catégories de prix.

---

## ⚙️ Installation

```bash
# 1. Cloner le repository
git clone https://github.com/votre-user/moodmap.git

# 2. Installer les dépendances
npm install

# 3. Compiler la base de données (Validation & Audit)
npx tsx scripts/compile_registry.ts

# 4. Lancer l'application via Expo
npx expo start
```

---
*Ce projet applique des méthodes d'analyse quantitative à la curation urbaine pour offrir une information fiable et vérifiée.*
