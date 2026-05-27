/**
 * Side-effect entry — imported once by the consumer's app:
 *
 *   import 'kanso-ui/styles';
 *
 * Registers @font-face declarations for the three KansoUI families
 * (Noto Serif JP, Syne, DM Mono), applies the minimal global reset
 * (box-sizing, body background and font stack), and pulls every
 * component recipe's CSS into the published stylesheet so consumers
 * receive component styles through this single import rather than
 * having to import dist/index.css manually.
 *
 * Apply lightTheme or darkTheme on the document root to fill the
 * surface colours.
 *
 * Keep the component import list below in sync with the public exports
 * in src/index.ts as new components ship.
 */
import './tokens/fonts';
import './tokens/reset.css';

import './components/Actions/Button/Button.css';
import './components/Actions/IconButton/IconButton.css';
import './components/Display/Badge/Badge.css';
import './components/Display/Card/Card.css';
