import { createTheme } from '@vanilla-extract/css';
import { colorVars } from './contract.css';
import { palette } from './palette';

/**
 * Dark theme: the ink/paper scales swap roles. The accent, warm and red
 * hues stay the same — only their pale companion surfaces darken so they
 * still read as faint tints over the dark paper.
 */
export const darkTheme = createTheme(colorVars, {
  color: {
    ink: palette.yamiWashi,
    ink2: palette.usuzumi,
    ink3: palette.hai,
    ink4: palette.yamiUsuzumi,

    paper: palette.yamiSumi,
    paper2: palette.yamiKage,
    paper3: palette.yamiHai,

    accent: palette.matcha,
    accent2: palette.matchaSoft,
    accentPale: palette.yamiMatchaPale,

    warm: palette.kogane,
    warmPale: palette.yamiKoganePale,

    red: palette.beni,
    redPale: palette.yamiBeniPale,
  },
});
