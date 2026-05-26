import type { Preview } from '@storybook/react';
import { lightTheme } from '../src/tokens';
import '../src/tokens/fonts.css';
import '../src/tokens/reset.css';

if (typeof document !== 'undefined') {
  document.documentElement.classList.add(lightTheme);
}

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
};

export default preview;
