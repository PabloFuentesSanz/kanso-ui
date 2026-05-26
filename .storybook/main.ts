import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    { directory: '../src/stories', titlePrefix: '', files: '**/*.@(mdx|stories.@(ts|tsx))' },
    { directory: '../src/components', titlePrefix: '', files: '**/*.stories.@(ts|tsx)' },
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config;
