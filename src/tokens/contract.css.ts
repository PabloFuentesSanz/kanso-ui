import { createThemeContract } from '@vanilla-extract/css';

/**
 * Semantic color contract — the slots every theme must fill.
 *
 * Slot naming follows the design spec's token names verbatim
 * (`ink`/`ink2`…`ink4`, `paper`/`paper2`/`paper3`, `accent`, `warm`, `red`).
 * Pale variants exist for background-tinted surfaces (badges, alerts).
 *
 * `accent2` and `accentPale` swap together with `accent` so a consumer can
 * later expose an "accent palette" choice (matcha/kogane/beni) without
 * fragmenting components.
 */
export const colorVars = createThemeContract({
  color: {
    ink: null,
    ink2: null,
    ink3: null,
    ink4: null,

    paper: null,
    paper2: null,
    paper3: null,

    accent: null,
    accent2: null,
    accentPale: null,

    warm: null,
    warmPale: null,

    red: null,
    redPale: null,
  },
});
