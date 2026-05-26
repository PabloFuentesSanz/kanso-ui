import { create } from '@storybook/theming/create';

/**
 * KansoUI theme for the Storybook manager chrome (sidebar, toolbar, panels).
 *
 * Mirrors the design spec's surface — washi paper background, hairline
 * paper-3 separators, sumi ink text and a matcha accent for active items.
 * Typography uses the same Syne / DM Mono / Noto Serif JP families the
 * library ships with.
 */
export const kansoTheme = create({
  base: 'light',

  // Branding — replaces the default Storybook wordmark in the top-left.
  // Use Storybook's native brandImage API rather than stuffing an <img>
  // inside brandTitle HTML, which forces a flat fixed height and squashes
  // wider logos. brandImage respects the source aspect ratio and lets the
  // theme's brandImage CSS resize cleanly. The lives in public/assets and
  // is served from /assets/* via staticDirs in main.ts.
  brandTitle: 'KansoUI',
  brandImage: '/assets/kansoLogo.png',
  brandUrl: './',
  brandTarget: '_self',

  // Brand colours
  colorPrimary: '#1a1a18',   // sumi — buttons, focus
  colorSecondary: '#2d5a3d', // matcha — active story marker, links

  // Surfaces
  appBg: '#fafaf7',          // washi
  appContentBg: '#fafaf7',
  appPreviewBg: '#fafaf7',
  appBorderColor: '#e8e8e2', // paper-3
  appBorderRadius: 4,

  // Typography
  fontBase: '"Syne", ui-sans-serif, sans-serif',
  fontCode: '"DM Mono", ui-monospace, monospace',

  // Text colours
  textColor: '#1a1a18',         // sumi
  textInverseColor: '#fafaf7',  // washi
  textMutedColor: '#8a8a82',    // hai

  // Toolbar
  barTextColor: '#4a4a44',      // kage
  barSelectedColor: '#1a1a18',  // sumi
  barHoverColor: '#1a1a18',
  barBg: '#fafaf7',

  // Form
  inputBg: '#fafaf7',
  inputBorder: '#c4c4bc',       // usuzumi
  inputTextColor: '#1a1a18',
  inputBorderRadius: 2,
});
