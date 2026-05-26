/**
 * Stable CSS variable naming for the KansoUI token contracts.
 *
 * Goal: a consumer using plain CSS, Tailwind, styled-components or any
 * non-vanilla-extract stack must be able to write `var(--kanso-ink)` or
 * `var(--kanso-space-4)` directly. Vanilla-extract's default hashing
 * (e.g. `--global-space-1__7a2f4b9c`) makes that impossible — this
 * formatter restores stable, predictable names that match the design spec
 * 1:1.
 *
 * Naming rules:
 *   - All names prefixed `kanso-` to namespace the design system.
 *   - `color` and `font` paths flatten (spec uses --kanso-ink, not
 *     --kanso-color-ink; --kanso-serif, not --kanso-font-serif).
 *   - CamelCase keys (`accentPale`, `fontSize`) and digit-suffixed keys
 *     (`ink2`, `paper3`) convert to kebab-case (`accent-pale`, `ink-2`).
 */
// Insert a dash before a digit only when preceded by 2+ letters, so
// `ink2` → `ink-2` (scale step) but `h1` → `h1` (heading level, conventional).
const kebab = (key: string) =>
  key
    .replace(/([a-z][a-z]+)(\d)/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();

export const tokenName = (_value: string | null, path: string[]): string => {
  const flat = path[0] === 'color' || path[0] === 'font' ? path.slice(1) : path;
  return `kanso-${flat.map(kebab).join('-')}`;
};
