import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { darkTheme, lightTheme } from '../src/tokens';
import '../src/tokens/fonts';
import '../src/tokens/reset.css';

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // Override Storybook's default alphabetical sorting so pages follow
      // a reading order — Introduction first, then Theme as the lens for
      // everything that follows, then the three foundation surfaces in
      // increasing scope (Color → Typography → Layout).
      storySort: {
        order: [
          'Start', ['Getting Started'],
          'Foundations', ['Introduction', 'Theme', 'Color', 'Typography', 'Layout'],
          'Actions',
          'Inputs',
          'Display',
          'Feedback',
          'Navigation',
          'Overlay',
          'Recipes',
        ],
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        Light: lightTheme,
        Dark: darkTheme,
      },
      defaultTheme: 'Light',
      parentSelector: 'html',
    }),
  ],
};

export default preview;
