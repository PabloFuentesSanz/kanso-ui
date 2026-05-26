import { createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css';
import { tokenName } from './formatter';

/**
 * Non-themed design tokens — never swap between light/dark.
 *
 * Two-step setup using the stable-name formatter:
 *   1. `createGlobalThemeContract` defines the CSS variable NAMES
 *      (e.g. --kanso-space-1, --kanso-serif). Names are stable across
 *      builds and match the design spec, so a consumer can reference them
 *      directly from plain CSS or any other styling stack.
 *   2. `createGlobalTheme(':root', vars, values)` assigns the values to
 *      those variables at the document root.
 *
 * Components must reference `vars` exclusively — never inline a px/rem
 * literal in a `.css.ts` file.
 */
export const vars = createGlobalThemeContract(
  {
    space: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
    },

    radius: {
      sm: null,
      md: null,
      full: null,
    },

    borderWidth: {
      hair: null,
      emphasis: null,
      tab: null,
    },

    font: {
      serif: null,
      sans: null,
      mono: null,
    },

    fontSize: {
      display: null,
      h1: null,
      h2: null,
      h3: null,
      body: null,
      label: null,
      micro: null,
      mono: null,
    },

    fontWeight: {
      extralight: null,
      light: null,
      regular: null,
      medium: null,
    },

    lineHeight: {
      none: null,
      tight: null,
      snug: null,
      body: null,
    },

    letterSpacing: {
      tight: null,
      normal: null,
      wide: null,
      label: null,
      micro: null,
    },

    duration: {
      fast: null,
      base: null,
      slow: null,
    },

    easing: {
      standard: null,
      out: null,
    },
  },
  tokenName,
);

createGlobalTheme(':root', vars, {
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
