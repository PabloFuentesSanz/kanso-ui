import { createGlobalThemeContract } from '@vanilla-extract/css';
import { tokenName } from './formatter';

/**
 * Semantic color contract — the slots every theme must fill.
 *
 * Slot naming follows the design spec's token names verbatim, and the
 * formatter drops the `color` path segment so the resulting CSS variables
 * read `--kanso-ink`, `--kanso-paper-3`, `--kanso-accent-pale` — not
 * `--kanso-color-ink`. A consumer using plain CSS can write
 * `var(--kanso-ink)` directly with no knowledge of vanilla-extract.
 */
export const colorVars = createGlobalThemeContract(
  {
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
  },
  tokenName,
);
