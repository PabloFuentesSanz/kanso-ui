/**
 * Primitive palette — raw hex values keyed by their Japanese pigment name.
 *
 * This file emits no CSS. It is the source of values consumed by the theme
 * implementations (`light.css.ts`, `dark.css.ts`) when they assign the
 * semantic theme contract.
 *
 * Add a new hue here first; never inline a hex inside a theme or component.
 */
export const palette = {
  sumi: '#1a1a18',
  kage: '#4a4a44',
  hai: '#8a8a82',
  usuzumi: '#c4c4bc',
  washi: '#fafaf7',
  usuki: '#f2f2ed',
  nezu: '#e8e8e2',

  matcha: '#2d5a3d',
  matchaSoft: '#4a7c5f',
  matchaPale: '#e8f0eb',

  kogane: '#8b6914',
  koganePale: '#f5edd8',

  beni: '#7a2e2e',
  beniPale: '#f5e8e8',

  yamiSumi: '#111110',
  yamiKage: '#1a1a18',
  yamiHai: '#2a2a26',
  yamiUsuzumi: '#4a4a44',
  yamiWashi: '#f0f0eb',
  yamiMatchaPale: '#1f2a23',
  yamiKoganePale: '#2a2418',
  yamiBeniPale: '#2a1818',
} as const;
