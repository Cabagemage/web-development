// Single source of truth for the Codemage logo mark.
// A stylized "C" arc (code bracket) with a magic sparkle — Code + mage.

export const LOGO_COLORS = {
  from: '#1b5cf5',
  via: '#327dff',
  to: '#06b6d4'
} as const;

/**
 * Returns the raw SVG markup for the logo mark.
 * `id` must be unique per rendered document to avoid gradient id clashes.
 */
export function logoSvgMarkup(id = 'cg'): string {
  return [
    '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">',
    '<defs>',
    `<linearGradient id="${id}" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">`,
    `<stop stop-color="${LOGO_COLORS.from}"/>`,
    `<stop offset="0.55" stop-color="${LOGO_COLORS.via}"/>`,
    `<stop offset="1" stop-color="${LOGO_COLORS.to}"/>`,
    '</linearGradient>',
    '</defs>',
    `<rect width="48" height="48" rx="13" fill="url(#${id})"/>`,
    '<path d="M29.45 16.72 A 9.5 9.5 0 1 0 29.45 32.28" stroke="white" stroke-width="4.2" stroke-linecap="round"/>',
    '<path d="M36 6 Q36 11.5 41.5 11.5 Q36 11.5 36 17 Q36 11.5 30.5 11.5 Q36 11.5 36 6 Z" fill="white"/>',
    '</svg>'
  ].join('');
}

/** Base64 data URI of the logo mark (markup is pure ASCII, so btoa is safe). */
export function logoDataUri(id = 'cg'): string {
  return `data:image/svg+xml;base64,${btoa(logoSvgMarkup(id))}`;
}
