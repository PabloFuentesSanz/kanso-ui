import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const spaceRow = style({
  display: 'grid',
  gridTemplateColumns: '180px 220px 80px 1fr',
  gap: vars.space[4],
  alignItems: 'center',
  padding: `${vars.space[2]} 0`,
  borderTop: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  selectors: {
    '&:first-of-type': { borderTop: 'none' },
  },
});

export const mono = style({
  fontFamily: vars.font.mono,
  fontSize: '12px',
  color: colorVars.color.ink,
});

export const monoMuted = style({
  fontFamily: vars.font.mono,
  fontSize: '11px',
  color: colorVars.color.ink3,
});

export const bar = style({
  height: 16,
  background: colorVars.color.accent,
  borderRadius: '1px',
});

export const radiusGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space[5],
});

export const radiusCell = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
});

export const radiusSwatch = style({
  height: 96,
  background: colorVars.color.paper2,
  border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
});

export const borderRow = style({
  display: 'grid',
  gridTemplateColumns: '180px 220px 1fr 160px',
  gap: vars.space[4],
  alignItems: 'center',
  padding: `${vars.space[3]} 0`,
});

export const borderLine = style({
  width: '100%',
  height: 0,
});

export const motionRow = style({
  display: 'grid',
  gridTemplateColumns: '180px 220px 1fr',
  gap: vars.space[4],
  alignItems: 'baseline',
  padding: `${vars.space[3]} 0`,
  borderTop: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  selectors: {
    '&:first-of-type': { borderTop: 'none' },
  },
});

export const desc = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: '11px',
  color: colorVars.color.ink3,
});
