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

  // Branding — replaces the default Storybook wordmark in the top-left
  brandTitle: `
    <div style="display:flex;flex-direction:column;gap:2px;padding:6px 0;">
      <span style="font-family:'Syne',sans-serif;font-weight:500;font-size:14px;color:#1a1a18;line-height:1.1;">KansoUI</span>
      <span style="font-family:'Syne',sans-serif;font-weight:300;font-size:10px;color:#8a8a82;line-height:1.2;letter-spacing:0.03em;">
        <span style="font-family:'Noto Serif JP',serif;font-weight:200;">寛素</span> · the quiet system
      </span>
    </div>
  `,
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
