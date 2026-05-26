/**
 * Side-effect imports that register @font-face declarations for the three
 * KansoUI families with the exact weights the design spec allows.
 *
 * Importing this file is opt-in: consumers who already host these fonts
 * elsewhere can skip it. Storybook's preview imports it once.
 *
 * Weights:
 *   Noto Serif JP — 200, 300        (display, kanji)
 *   Syne           — 300, 400, 500  (UI body, headings, label/medium)
 *   DM Mono        — 300, 400       (mono — tokens, code)
 */
import '@fontsource/noto-serif-jp/200.css';
import '@fontsource/noto-serif-jp/300.css';

import '@fontsource/syne/300.css';
import '@fontsource/syne/400.css';
import '@fontsource/syne/500.css';

import '@fontsource/dm-mono/300.css';
import '@fontsource/dm-mono/400.css';
