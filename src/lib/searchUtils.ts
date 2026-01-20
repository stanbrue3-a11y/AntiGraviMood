
/**
 * Simple Fuzzy Search Utility (Levenshtein Distance)
 * Used to handle typos in search queries.
 */

// Normalise string (remove accents, lowercase)
export const normalizeStr = (str: string): string => {
    return str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
};

// Calculate Levenshtein Distance
// Returns the number of edits needed to turn a into b
const levenshteinDistance = (a: string, b: string): number => {
    const matrix = [];

    // Increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // Increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(
                        matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1  // deletion
                    )
                );
            }
        }
    }

    return matrix[b.length][a.length];
};

/**
 * Checks if a candidate string loosely matches the query.
 * @param candidate The text to search in (e.g. Place Name)
 * @param query The user's search query
 * @param tolerance Max edits allowed (default 2 for short words, 3 for long)
 */
export const fuzzyMatch = (candidate: string, query: string): boolean => {
    const normC = normalizeStr(candidate);
    const normQ = normalizeStr(query);

    // 1. Direct inclusion (Fastest & Best)
    if (normC.includes(normQ)) return true;

    // 2. Fuzzy Match (Only if query is long enough to avoid false positives)
    if (normQ.length < 3) return false;

    // Dynamic tolerance based on length
    // e.g. "bar" (3) -> 1 error max
    // "septime" (7) -> 2 errors max
    const tolerance = normQ.length <= 4 ? 1 : 2;

    // We check if ANY word in the candidate matches the query closely
    // e.g. "Clamato" vs "Clamto"
    const words = normC.split(' ');

    // Check match against the full candidate (for multi-word queries)
    const distFull = levenshteinDistance(normQ, normC);
    if (distFull <= tolerance) return true;

    // Check match against individual words
    for (const word of words) {
        if (Math.abs(word.length - normQ.length) > tolerance) continue; // Optimization
        const dist = levenshteinDistance(normQ, word);
        if (dist <= tolerance) return true;
    }

    return false;
};
