/**
 * Viewport breakpoints for media queries.
 *
 * Defined as plain TypeScript constants — CSS `@media` query conditions
 * cannot reference CSS custom properties, so these are NOT part of the
 * `vars` theme contract. Reference via string interpolation in
 * vanilla-extract's `@media` key:
 *
 *   '@media': {
 *     [`screen and (max-width: ${bp.mobile})`]: { ... },
 *   }
 *
 * KansoUI ships a deliberately small set — a single mobile cutoff at 768
 * is enough to handle the worst case (fixed-column grids that would crush
 * below a phone-width viewport). For card grids prefer the intrinsic
 * `repeat(auto-fill, minmax(N, 1fr))` pattern instead of a breakpoint.
 */
export const bp = {
  /** Stack-to-single-column threshold. */
  mobile: '768px',
} as const;
