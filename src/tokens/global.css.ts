import { createGlobalTheme } from '@vanilla-extract/css';

/**
 * Non-themed design tokens — never swap between light/dark.
 *
 * Spacing, type, radii, borders, motion. Anything that depends on the active
 * theme (i.e. colors) belongs in the theme contract instead.
 *
 * Components must reference these vars exclusively; never inline a px/rem
 * literal in a `.css.ts` file.
 */
export const vars = createGlobalTheme(':root', {
  space: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '20px',
    5: '32px',
    6: '48px',
    7: '80px',
  },

  radius: {
    sm: '2px',
    md: '4px',
    full: '9999px',
  },

  borderWidth: {
    hair: '0.5px',
    emphasis: '1px',
    tab: '1.5px',
  },

  font: {
    serif: '"Noto Serif JP", serif',
    sans: '"Syne", ui-sans-serif, sans-serif',
    mono: '"DM Mono", ui-monospace, monospace',
  },

  fontSize: {
    display: '2.8rem',
    h1: '1.75rem',
    h2: '1.25rem',
    h3: '1rem',
    body: '0.9rem',
    label: '0.75rem',
    micro: '0.7rem',
    mono: '0.75rem',
  },

  fontWeight: {
    extralight: '200',
    light: '300',
    regular: '400',
    medium: '500',
  },

  lineHeight: {
    none: '1',
    tight: '1.2',
    snug: '1.3',
    body: '1.7',
  },

  letterSpacing: {
    tight: '-0.01em',
    normal: '0',
    wide: '0.02em',
    label: '0.05em',
    micro: '0.15em',
  },

  duration: {
    fast: '100ms',
    base: '150ms',
    slow: '200ms',
  },

  easing: {
    standard: 'ease',
    out: 'ease-out',
  },
});
