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
