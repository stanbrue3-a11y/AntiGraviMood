import { dataService } from '../src/services/dataService';
import { logger } from '../src/lib/logger';

async function verify() {
  console.log('🔍 VERIFICATION SUPABASE...');
  
  try {
    // 1. Initialisation du service (force le chargement de Supabase)
    await dataService.init();
    console.log('✅ Service initialisé.');

    // 2. Test getRegistrySkeletons
    console.log('📡 Fetching Skeletons...');
    const skeletons = await dataService.getRegistrySkeletons();
    console.log(`📍 Nombre de lieux trouvés : ${skeletons.length}`);

    if (skeletons.length === 296) {
      console.log('✅ NOMBRE DE LIEUX CORRECT (296/296).');
    } else {
      console.error(`❌ DISCRÉPANCE : ${skeletons.length} au lieu de 296.`);
    }

    // 3. Test unitaire sur un lieu connu (ex: 59-rivoli)
    console.log('🔎 Vérification des détails (59-rivoli)...');
    const rivoli = skeletons.find(s => s.slug === '59-rivoli');
    if (rivoli) {
        const details = await dataService.getPlaceDetails(rivoli.id);
        if (details) {
            console.log(`✅ Détails récupérés pour ${details.name}`);
            console.log(`📸 Image : ${details.media?.hero_image}`);
            if (details.media?.hero_image?.includes('supabase.co')) {
                console.log('✅ CDN SUPABASE DÉTECTÉ.');
            } else {
                console.warn('⚠️ IMAGE ENCORE SUR GOOGLE ?');
            }
        } else {
            console.error('❌ Impossible de récupérer les détails.');
        }
    } else {
        console.error('❌ 59-rivoli non trouvé dans les skeletons.');
    }

    // 4. Test Search (Supabase)
    console.log('🔎 Test Recherche "Bourse"...');
    const searchResults = await dataService.getFilteredPlaces({ searchQuery: 'Bourse' });
    console.log(`🎯 Résultats pour "Bourse" : ${searchResults.length}`);
    searchResults.forEach(p => console.log(`   - ${p.name}`));

  } catch (error) {
    console.error('💀 ERREUR CRITIQUE DE VÉRIFICATION :', error);
  } finally {
    process.exit();
  }
}

verify();
