-- ============================================================
-- MIGRATION 001 — Architecture Relationnelle des Menus (Titan-V4)
-- MoodMap Standard Industriel 2026
-- 
-- À EXÉCUTER SUR SUPABASE via : SQL Editor → Run
-- 
-- Ce que ça fait :
--   1. Ajoute les colonnes de cache de prix dans "places"
--   2. Crée la table "menu_categories"
--   3. Crée la table "menu_items" (avec happy hour)
--   4. Crée la table "menu_price_history" (ledger comptable)
--   5. Pose les index pour la recherche full-text sur les plats
-- ============================================================


-- ============================================================
-- PARTIE 1 : Colonnes de cache dans la table "places"
-- ============================================================
-- Ces colonnes dénormalisées permettent un filtrage rapide sur la
-- carte mobile SANS faire de jointure avec menu_items.
-- Elles sont recalculées automatiquement à chaque ingestion de menu.

ALTER TABLE places
  ADD COLUMN IF NOT EXISTS pint_price_cents       INTEGER,        -- Cache : prix pinte en centimes
  ADD COLUMN IF NOT EXISTS cocktail_price_cents   INTEGER,        -- Cache : prix cocktail en centimes
  ADD COLUMN IF NOT EXISTS coffee_price_cents     INTEGER,        -- Cache : prix café en centimes
  ADD COLUMN IF NOT EXISTS wine_glass_cents       INTEGER,        -- Cache : prix verre de vin en centimes
  ADD COLUMN IF NOT EXISTS menu_verified_at       TIMESTAMPTZ;    -- Date de dernière ingestion de menu validée


-- ============================================================
-- PARTIE 2 : Table "menu_categories"
-- ============================================================
-- Une ligne par section du menu (ex: "Entrées", "Cocktails Signature")
-- Liée à places via place_id.
-- category_type = le type technique (enum à 8 valeurs du Standard Moelle 2026)
-- display_label = le nom affiché librement (copié de la vraie carte)

CREATE TABLE IF NOT EXISTS menu_categories (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  place_id      UUID        NOT NULL REFERENCES places(id) ON DELETE CASCADE,

  -- Type technique (Standard Moelle 2026 — 8 valeurs strictes)
  category_type TEXT        NOT NULL CHECK (category_type IN (
    'starter',        -- Entrées
    'main',           -- Plats principaux
    'sharing',        -- À partager / Tapas
    'side',           -- Accompagnements
    'dessert',        -- Desserts
    'soft_drink',     -- Boissons sans alcool
    'alcohol_drink',  -- Boissons alcoolisées
    'formula'         -- Formules & Menus
  )),

  -- Nom affiché sur l'interface (copié mot pour mot de la carte)
  display_label TEXT        NOT NULL,

  -- Ordre d'affichage dans l'UI (0 = premier)
  sort_order    INTEGER     NOT NULL DEFAULT 0,

  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Trigger auto-update updated_at
CREATE TRIGGER update_menu_categories_modtime
  BEFORE UPDATE ON menu_categories
  FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

-- Index pour récupérer toutes les catégories d'un lieu
CREATE INDEX IF NOT EXISTS idx_menu_categories_place_id
  ON menu_categories(place_id);


-- ============================================================
-- PARTIE 3 : Table "menu_items"
-- ============================================================
-- Une ligne par plat/boisson.
-- place_id est dénormalisé (redondant avec category → place) pour
-- permettre des requêtes directes de type "tous les plats de Paris
-- contenant 'entrecôte'" sans jointure supplémentaire.

CREATE TABLE IF NOT EXISTS menu_items (
  id                      UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id             UUID        NOT NULL REFERENCES menu_categories(id) ON DELETE CASCADE,
  place_id                UUID        NOT NULL REFERENCES places(id) ON DELETE CASCADE, -- Dénormalisé pour recherche directe

  -- Données du plat
  name                    TEXT        NOT NULL,
  description             TEXT,                   -- Obligatoire si présente sur la carte (moteur de recherche)
  price_cents             INTEGER,                -- Prix normal en centimes (ex: 1800 = 18€)
  happy_hour_price_cents  INTEGER,                -- Prix Happy Hour en centimes (NULL si pas de HH)
  is_highlight            BOOLEAN     NOT NULL DEFAULT false, -- 2-3 plats signatures max par lieu

  created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Trigger auto-update updated_at
CREATE TRIGGER update_menu_items_modtime
  BEFORE UPDATE ON menu_items
  FOR EACH ROW EXECUTE PROCEDURE update_modified_column();

-- Index pour récupérer les plats d'un lieu (fiche détaillée)
CREATE INDEX IF NOT EXISTS idx_menu_items_place_id
  ON menu_items(place_id);

-- Index pour récupérer les plats d'une catégorie
CREATE INDEX IF NOT EXISTS idx_menu_items_category_id
  ON menu_items(category_id);

-- Index full-text sur le nom ET la description des plats
-- Permet la recherche globale "Entrecôte", "frites maison", etc.
CREATE INDEX IF NOT EXISTS idx_menu_items_fts
  ON menu_items USING gin(
    to_tsvector('french', coalesce(name, '') || ' ' || coalesce(description, ''))
  );


-- ============================================================
-- PARTIE 4 : Table "menu_price_history"
-- ============================================================
-- Ledger comptable des variations de prix.
-- UNE SEULE règle de déclenchement :
--   → Écrire une ligne UNIQUEMENT si le prix change par rapport 
--     au menu_items actif. Jamais de doublons si même prix.
-- Exception : lors de la PREMIÈRE ingestion d'un menu, on écrit
--   une ligne initiale dans l'historique (old_price_cents = NULL).

CREATE TABLE IF NOT EXISTS menu_price_history (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  menu_item_id    UUID        NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
  place_id        UUID        NOT NULL,           -- Dénormalisé pour audits rapides par lieu
  item_name       TEXT        NOT NULL,           -- Snapshot du nom au moment de l'enregistrement
  old_price_cents INTEGER,                        -- NULL lors de la première ingestion
  new_price_cents INTEGER     NOT NULL,
  changed_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index pour récupérer l'historique d'un plat
CREATE INDEX IF NOT EXISTS idx_menu_price_history_item_id
  ON menu_price_history(menu_item_id);

-- Index pour auditer l'inflation d'un lieu
CREATE INDEX IF NOT EXISTS idx_menu_price_history_place_id
  ON menu_price_history(place_id, changed_at DESC);


-- ============================================================
-- PARTIE 5 : Row Level Security (RLS)
-- ============================================================
-- Lecture publique, écriture réservée au service role.

ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items       ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_price_history ENABLE ROW LEVEL SECURITY;

-- Lecture publique (app mobile)
CREATE POLICY "menu_categories_read" ON menu_categories FOR SELECT USING (true);
CREATE POLICY "menu_items_read"       ON menu_items       FOR SELECT USING (true);
CREATE POLICY "menu_price_history_read" ON menu_price_history FOR SELECT USING (true);

-- Écriture service role uniquement (scripts industriels)
CREATE POLICY "menu_categories_write" ON menu_categories FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "menu_items_write"       ON menu_items       FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "menu_price_history_write" ON menu_price_history FOR ALL USING (auth.role() = 'service_role');


-- ============================================================
-- VÉRIFICATION FINALE
-- ============================================================
-- Après exécution, vérifier dans Supabase Table Editor :
--   ✅ places → nouvelles colonnes pint_price_cents, cocktail_price_cents, coffee_price_cents, wine_glass_cents, menu_verified_at
--   ✅ menu_categories → table créée
--   ✅ menu_items → table créée avec happy_hour_price_cents
--   ✅ menu_price_history → table créée
