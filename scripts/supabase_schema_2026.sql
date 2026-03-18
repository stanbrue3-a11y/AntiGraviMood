
-- MOODMAP : SCHEMA MOELLE INDUSTRIELLE 2026 🧬
-- Table maîtresse pour le registre gastronomique

CREATE TABLE IF NOT EXISTS public.places (
    id TEXT PRIMARY KEY,                       -- Format: poi-XXX
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,                    -- restaurant, bar, café, etc.
    subcategory TEXT[] DEFAULT '{}',           -- Tags de recherche
    
    -- Géo-Précision
    address TEXT NOT NULL,
    arrondissement INTEGER NOT NULL CHECK (arrondissement >= 1 AND arrondissement <= 20),
    latitude DOUBLE PRECISION NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    nearest_metro TEXT,
    metro_lines JSONB DEFAULT '[]',            -- ex: [1, 5, 8]
    google_id TEXT,                            -- Place ID pour synchronisation pipeline
    
    -- Editorial & Content (Standard Moelle)
    description TEXT NOT NULL,
    expert_catchline TEXT,
    insider_tip TEXT NOT NULL,
    
    -- Moods (0-100)
    mood_chill INTEGER DEFAULT 0 CHECK (mood_chill >= 0 AND mood_chill <= 100),
    mood_festif INTEGER DEFAULT 0 CHECK (mood_festif >= 0 AND mood_festif <= 100),
    mood_culturel INTEGER DEFAULT 0 CHECK (mood_culturel >= 0 AND mood_culturel <= 100),
    
    -- Objets Complexes (JSONB)
    pricing JSONB NOT NULL DEFAULT '{}',       -- Contient menu_items, avg_budget, etc.
    practical JSONB NOT NULL DEFAULT '{}',     -- Contient reservation_policy, accessibility, etc.
    specials JSONB NOT NULL DEFAULT '{}',      -- Contient cuisine_type, beverage_type, must_eat
    
    -- Media (URLs pérennes)
    image_hero TEXT,                           -- URL vers Supabase Storage
    image_gallery TEXT[] DEFAULT '{}',         -- Array d'URLs vers Supabase Storage
    
    -- Metadata & Pipeline
    verified BOOLEAN DEFAULT false,
    google_rating REAL,
    instagram_handle TEXT,
    michelin_stars INTEGER DEFAULT 0,
    source TEXT DEFAULT 'to_be_verified',
    
    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Indexation pour performance maximale
CREATE INDEX IF NOT EXISTS idx_places_arrondissement ON public.places(arrondissement);
CREATE INDEX IF NOT EXISTS idx_places_category ON public.places(category);
CREATE INDEX IF NOT EXISTS idx_places_slug ON public.places(slug);

-- Enable Row Level Security (RLS)
ALTER TABLE public.places ENABLE ROW LEVEL SECURITY;

-- Politique : Lecture publique autorisée
CREATE POLICY "Allow public read access" ON public.places
    FOR SELECT USING (true);
