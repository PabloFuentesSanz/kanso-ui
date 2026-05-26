import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const grid4 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: vars.space[4],
});

export const grid3 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space[4],
});

export const grid2 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: vars.space[4],
});

export const swatch = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
});

export const chip = style({
  height: 96,
  borderRadius: vars.radius.sm,
  border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
});

export const meta = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
});

export const nameRow = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: vars.space[2],
});

export const jsName = style({
  fontFamily: vars.font.sans,
  fontSize: '12px',
  fontWeight: vars.fontWeight.regular,
  color: colorVars.color.ink,
});

export const jp = style({
  fontFamily: vars.font.serif,
  fontWeight: vars.fontWeight.extralight,
  fontSize: '11px',
  color: colorVars.color.ink3,
});

export const cssVar = style({
  fontFamily: vars.font.mono,
  fontSize: '11px',
  color: colorVars.color.ink3,
});

export const hex = style({
  fontFamily: vars.font.mono,
  fontSize: '11px',
  color: colorVars.color.ink3,
});

export const use = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: '11px',
  color: colorVars.color.ink3,
  marginTop: 2,
});
