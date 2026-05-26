/**
 * Side-effect imports that register @font-face declarations for the three
 * KansoUI families with the exact weights the design spec allows.
 *
 * Lives in a plain `.ts` (not `.css.ts`): the vanilla-extract compiler runs
 * `.css.ts` files in a Node sandbox that cannot resolve CSS subpath imports
 * like `@fontsource/syne/300.css`. Vite handles this file directly when
 * imported from preview.ts or a consumer's entry.
 *
 * Importing this file is opt-in: consumers who already host these fonts
 * elsewhere can skip it. Storybook's preview imports it once.
 *
 * Weights loaded — mirror the design spec's actual Google Fonts @import,
 * which is the source of truth (the spec prose drifts from the CSS in
 * places). Syne ships no 300 weight; body text that asks for weight 300
 * is browser-synthesized from 400, matching the design's rendered output.
 *
 *   Noto Serif JP — 200, 300        (display, kanji decoration)
 *   Syne           — 400, 500        (UI body via faux-light, headings)
 *   DM Mono        — 300, 400        (mono — tokens, code)
 */
import '@fontsource/noto-serif-jp/200.css';
import '@fontsource/noto-serif-jp/300.css';

import '@fontsource/syne/400.css';
import '@fontsource/syne/500.css';

import '@fontsource/dm-mono/300.css';
import '@fontsource/dm-mono/400.css';
