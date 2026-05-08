import axios from 'axios';

// Interfaces pour clarifier les données d'entrée
interface GooglePlaceDetails {
    reviews?: { text: string; rating: number }[];
    photos?: { photo_reference: string }[];
    opening_hours?: { weekday_text?: string[] };
}

interface MoodResult {
    dominant_mood: 'chill' | 'festif' | 'culturel';
    has_terrace: boolean | null;
    confidence: number;
    justification: string;
}

/**
 * Télécharge une photo depuis Google Places API et la convertit en Base64
 */
async function downloadPhotoBase64(photoReference: string, googleKey: string): Promise<string | null> {
    try {
        const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photoReference}&key=${googleKey}`;
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        return Buffer.from(response.data, 'binary').toString('base64');
    } catch (e) {
        console.error("Erreur lors du téléchargement de la photo", e);
        return null;
    }
}

/**
 * Analyse les données d'un lieu (avis, horaires, photos) avec Gemini Vision pour déterminer
 * le dominant_mood et la présence d'une terrasse.
 */
export async function calculateMoodAndTerrace(
    details: GooglePlaceDetails, 
    googleKey: string, 
    geminiKey: string
): Promise<MoodResult> {
    
    // 1. Extraction des horaires (closes_late)
    const hoursText = details.opening_hours?.weekday_text?.join(' ') || '';
    const latePatterns = [/12:00\s*AM/i, /1:00\s*AM/i, /2:00\s*AM/i, /00:00/, /01:00/, /02:00/];
    const closes_late = latePatterns.some(p => p.test(hoursText));

    // 2. Extraction des avis
    const reviews = details.reviews?.map(r => `Avis (${r.rating}⭐): ${r.text}`).join('\n') || 'Aucun avis.';

    // 3. Téléchargement des 5 photos en Base64 (audit mood + terrasse unifié)
    const photoRefs = details.photos?.slice(0, 5).map(p => p.photo_reference) || [];
    const base64Photos: string[] = [];
    for (const ref of photoRefs) {
        const b64 = await downloadPhotoBase64(ref, googleKey);
        if (b64) base64Photos.push(b64);
    }

    // 4. Construction du payload Gemini
    const systemInstruction = `Tu es un expert critique gastronomique parisien. Tu dois analyser ce restaurant pour déterminer son ambiance principale et s'il possède une terrasse visible en extérieur.
    
RÈGLES D'AMBIANCE (dominant_mood doit être EXACTEMENT l'une de ces 3 valeurs) :
- "chill" : Calme, feutré, intime, gastronomique, nappes blanches, discussion possible.
- "festif" : Bruyant, musique, bar, mange-debout, cocktails, lieu de soirée, animé.
- "culturel" : Immersion étrangère très forte, traditionnel typique. (Si doute entre chill et culturel, privilégie chill).

RÈGLES TERRASSE (has_terrace) :
- "true" si tu vois CLAIREMENT des tables à l'extérieur dans la rue/cour sur les photos.
- "false" si tu ne vois aucune terrasse ou que l'intérieur exclusif.
- null si tu as un doute.

Tu vas recevoir :
- Le flag 'Ferme tard' (closes_late) : Indice de lieu de soirée.
- Les derniers avis Google.
- Les 5 photos du lieu (façade, salle, plats, extérieur si disponible).

RÉPONSE STRICTEMENT AU FORMAT JSON (sans markdown de code) :
{
  "dominant_mood": "chill" ou "festif" ou "culturel",
  "has_terrace": true, false ou null,
  "confidence": entier de 0 à 100,
  "justification": "Explique brièvement pourquoi en citant les avis ou ce que tu vois sur les photos"
}`;

    const userPrompt = `Ferme tard (closes_late) : ${closes_late}\n\nAvis Google :\n${reviews}`;

    const parts: any[] = [{ text: userPrompt }];
    for (const b64 of base64Photos) {
        parts.push({
            inline_data: {
                mime_type: "image/jpeg",
                data: b64
            }
        });
    }

    const payload = {
        system_instruction: { parts: [{ text: systemInstruction }] },
        contents: [{ parts: parts }],
        generationConfig: {
            response_mime_type: "application/json",
            temperature: 0.2
        }
    };

    // 5. Appel API REST Gemini
    try {
        console.log(`🧠 Appel Gemini 2.5 Flash (Analyse de ${base64Photos.length} photos et ${details.reviews?.length || 0} avis)...`);
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiKey}`;
        const response = await axios.post(geminiUrl, payload);
        
        const rawText = response.data.candidates[0].content.parts[0].text;
        const result: MoodResult = JSON.parse(rawText);
        return result;
    } catch (e: any) {
        console.error("❌ Erreur Gemini Mood Engine:", e.response?.data || e.message);
        // Fallback sécurisé en cas de plantage IA
        return {
            dominant_mood: closes_late ? 'festif' : 'chill',
            has_terrace: null,
            confidence: 0,
            justification: "Fallback d'urgence suite à une erreur IA."
        };
    }
}
