-- ============================================================
-- MIGRATION 002 — Gestion Relationnelle des Photos & Dates de Menus
-- MoodMap Standard Industriel 2026
-- 
-- À EXÉCUTER SUR SUPABASE via : SQL Editor → Run
-- ============================================================

-- ============================================================
-- PARTIE 1 : Création de la table "menu_photos"
-- ============================================================
CREATE TABLE IF NOT EXISTS menu_photos (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  place_id       UUID        NOT NULL REFERENCES places(id) ON DELETE CASCADE,
  url            TEXT        NOT NULL UNIQUE,               -- URL de stockage dans le bucket Supabase
  photo_date     DATE,                                      -- Date de la photo (ex: 2025-01-01)
  raw_date_label TEXT,                                      -- Label brut de la date (ex: "Janvier 2025")
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index pour récupérer toutes les photos d'un restaurant
CREATE INDEX IF NOT EXISTS idx_menu_photos_place_id
  ON menu_photos(place_id);

-- ============================================================
-- PARTIE 2 : Modification de la table "menu_items"
-- ============================================================
-- Ajout de la clé étrangère facultative pour lier chaque plat à sa photo source
ALTER TABLE menu_items
  ADD COLUMN IF NOT EXISTS menu_photo_id UUID REFERENCES menu_photos(id) ON DELETE SET NULL;

-- Index pour accélérer le filtrage par photo
CREATE INDEX IF NOT EXISTS idx_menu_items_photo_id
  ON menu_items(menu_photo_id);

-- ============================================================
-- PARTIE 3 : Row Level Security (RLS)
-- ============================================================
ALTER TABLE menu_photos ENABLE ROW LEVEL SECURITY;

-- Lecture publique (app mobile)
CREATE POLICY "menu_photos_read" ON menu_photos FOR SELECT USING (true);

-- Écriture service role uniquement (scripts d'ingestion)
CREATE POLICY "menu_photos_write" ON menu_photos FOR ALL USING (auth.role() = 'service_role');
