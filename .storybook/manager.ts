import { addons } from '@storybook/manager-api';
import { kansoTheme } from './theme';

// Load the same self-hosted families used in the preview so the chrome
// (sidebar, toolbar, brand) renders in Syne / DM Mono / Noto Serif JP
// — the manager runs in its own bundle and needs its own font wiring.
import '@fontsource/noto-serif-jp/200.css';
import '@fontsource/syne/400.css';
import '@fontsource/syne/500.css';
import '@fontsource/dm-mono/300.css';
import '@fontsource/dm-mono/400.css';

addons.setConfig({
  theme: kansoTheme,
});
