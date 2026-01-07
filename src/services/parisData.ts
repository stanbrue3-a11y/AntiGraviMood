
interface OpenDataResult {
    found: boolean;
    name?: string;
    isOpen?: boolean | null; // null if unknown
    statusText?: string; // "Ouvert", "Fermé", "En rénovation"
    source: 'Paris Open Data';
}

/**
 * Fetches real-time info from Paris Open Data.
 * Currently supports:
 * - Espaces Verts (Parks, Gardens)
 */
export async function fetchParisData(query: string): Promise<OpenDataResult> {
    try {
        const encodedQuery = encodeURIComponent(query);
        // Search in 'espaces_verts' dataset
        const url = `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/espaces_verts/records?limit=1&refine=nom_ev:${encodedQuery}`;

        // Simple search if exact match fails
        const searchUrl = `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/espaces_verts/records?limit=1&where=search(nom_ev, "${query}")`;

        console.log('[ParisData] Fetching:', searchUrl);

        const response = await fetch(searchUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            const record = data.results[0];

            // Map 'ouvert_ferme' field (Oui/Non) -> boolean
            let isOpen = null;
            if (record.ouvert_ferme === 'Oui') isOpen = true;
            if (record.ouvert_ferme === 'Non') isOpen = false;

            return {
                found: true,
                name: record.nom_ev,
                isOpen,
                statusText: isOpen === true ? 'Ouvert (Confirmé)' : isOpen === false ? 'Fermé (Confirmé)' : 'Donnée OpenData trouvée',
                source: 'Paris Open Data'
            };
        }

        return { found: false, source: 'Paris Open Data' };
    } catch (error) {
        console.warn('[ParisData] Error:', error);
        return { found: false, source: 'Paris Open Data' };
    }
}
