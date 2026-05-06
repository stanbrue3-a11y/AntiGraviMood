-- ==========================================
-- MOODMAP V4 : TITAN SUPABASE SCHEMA
-- ==========================================

-- 0. NETTOYAGE DE L'ANCIENNE BASE (ATTENTION : SUPPRIME LES ANCIENNES DONNÉES)
DROP TABLE IF EXISTS place_menus CASCADE;
DROP TABLE IF EXISTS places CASCADE;
DROP TYPE IF EXISTS place_status CASCADE;
DROP TYPE IF EXISTS place_category CASCADE;
DROP TYPE IF EXISTS place_mood CASCADE;
DROP TYPE IF EXISTS menu_category CASCADE;
DROP TYPE IF EXISTS reservation_type CASCADE;

-- 1. ENUMS (La "Whitelist" stricte)
CREATE TYPE place_status AS ENUM ('SCAFFOLDED', 'PENDING_MENU', 'PUBLISHED', 'ARCHIVED');
CREATE TYPE place_category AS ENUM ('restaurant', 'bar', 'cafe');
CREATE TYPE place_mood AS ENUM ('chill', 'festif', 'culturel');
CREATE TYPE menu_category AS ENUM ('starter', 'main', 'dessert', 'drink', 'sharing', 'other');
CREATE TYPE reservation_type AS ENUM ('sans_resa', 'resa_conseillee', 'resa_obligatoire', 'privatisable');

-- 2. TABLE PRINCIPALE : PLACES
CREATE TABLE places (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  
  -- Catégories & Mood
  category place_category NOT NULL, -- Strict : restaurant, bar ou cafe
  subcategories TEXT[] NOT NULL DEFAULT '{}', -- ex: ['français', 'bistrot', 'brasserie']
  dominant_mood place_mood,
  
  -- Localisation
  address TEXT NOT NULL,
  arrondissement INTEGER NOT NULL CHECK (arrondissement BETWEEN 1 AND 20),
  lat DOUBLE PRECISION NOT NULL,
  lng DOUBLE PRECISION NOT NULL,
  nearest_metro TEXT,
  metro_lines TEXT[] DEFAULT '{}',
  
  -- Metrics Google
  google_id TEXT UNIQUE,
  google_rating DOUBLE PRECISION,
  google_reviews_count INTEGER,
  
  -- Éditorial
  description TEXT,
  insider_tip TEXT,
  on_mange_quoi_ici TEXT,
  
  -- Badges & Pratique
  opening_hours_raw TEXT,
  opening_hours_json JSONB, -- Pour requêter "Ouvert maintenant"
  closes_late BOOLEAN DEFAULT false,
  has_terrace BOOLEAN DEFAULT false,
  reservation_policy reservation_type,
  michelin_stars INTEGER CHECK (michelin_stars BETWEEN 1 AND 3),
  tags TEXT[] DEFAULT '{}',
  
  -- Pricing
  plat_median_cents INTEGER,
  
  -- Médias
  hero_image TEXT,
  google_photos TEXT[] DEFAULT '{}',
  
  -- Workflow & Audit
  is_verified BOOLEAN DEFAULT false,
  is_closed BOOLEAN DEFAULT false, -- Soft delete si le resto ferme
  internal_audit_logs JSONB DEFAULT '[]'::jsonb, -- Logs d'IA pour ta révision
  status place_status DEFAULT 'SCAFFOLDED',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TABLE SECONDAIRE : MENUS
CREATE TABLE place_menus (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  place_id UUID NOT NULL REFERENCES places(id) ON DELETE CASCADE,
  
  category_type menu_category NOT NULL,
  display_label TEXT,
  name TEXT NOT NULL,
  description TEXT,
  price_cents INTEGER,
  is_highlight BOOLEAN DEFAULT false,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. FONCTION AUTO-UPDATE
CREATE OR REPLACE FUNCTION update_modified_column()   
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;   
END;
$$ language 'plpgsql';

CREATE TRIGGER update_places_modtime 
BEFORE UPDATE ON places 
FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
