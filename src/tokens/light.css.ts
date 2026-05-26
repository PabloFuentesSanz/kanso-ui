import { createTheme } from '@vanilla-extract/css';
import { colorVars } from './contract.css';
import { palette } from './palette';

export const lightTheme = createTheme(colorVars, {
  color: {
    ink: palette.sumi,
    ink2: palette.kage,
    ink3: palette.hai,
    ink4: palette.usuzumi,

    paper: palette.washi,
    paper2: palette.usuki,
    paper3: palette.nezu,

    accent: palette.matcha,
    accent2: palette.matchaSoft,
    accentPale: palette.matchaPale,

    warm: palette.kogane,
    warmPale: palette.koganePale,

    red: palette.beni,
    redPale: palette.beniPale,
  },
});
