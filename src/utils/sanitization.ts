/**
 * Utility functions to sanitize messy data inputs from the database or CMS,
 * preventing false positives and ensuring clean strings.
 */

/**
 * Checks if a string is genuinely valid and not a false positive literal
 * like "false", "null", "undefined", or "0".
 */
export const isValidString = (str: any): boolean => {
  return (
    typeof str === 'string' &&
    str.trim().length > 2 &&
    str !== 'false' &&
    str !== 'null' &&
    str !== 'undefined' &&
    str !== '0' &&
    str !== 'true'
  );
};

/**
 * Extracts a clean Instagram handle from a potentially messy input
 * (like a full URL or a handle with '@').
 */
export const extractInstagramHandle = (rawInput: any): string | null => {
  if (!isValidString(rawInput)) return null;

  let handle = (rawInput as string).trim();

  // If it's a full URL, attempt to extract the username
  if (handle.includes('instagram.com/')) {
    try {
      const urlParts = handle.split('instagram.com/');
      if (urlParts.length > 1) {
        // Get the part after instagram.com/ and remove any query params or trailing slashes
        const path = urlParts[1].split('?')[0].split('/')[0];
        handle = path;
      }
    } catch (e) {
      // Fallback to original string if regex fails
    }
  }

  // Remove '@' if present
  handle = handle.replace('@', '');

  if (handle.length === 0) return null;
  return handle;
};
