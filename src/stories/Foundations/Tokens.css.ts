import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[6],
  padding: vars.space[7],
  background: colorVars.color.paper,
  color: colorVars.color.ink,
  minHeight: '100vh',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[3],
});

export const sectionLabel = style({
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.micro,
  fontWeight: vars.fontWeight.regular,
  letterSpacing: vars.letterSpacing.micro,
  textTransform: 'uppercase',
  color: colorVars.color.ink3,
});

export const display = style({
  fontFamily: vars.font.serif,
  fontWeight: vars.fontWeight.extralight,
  fontSize: vars.fontSize.display,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
  margin: 0,
});

export const h1 = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.fontSize.h1,
  lineHeight: vars.lineHeight.tight,
  margin: 0,
});

export const h2 = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.fontSize.h2,
  lineHeight: vars.lineHeight.snug,
  margin: 0,
});

export const h3 = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.medium,
  fontSize: vars.fontSize.h3,
  lineHeight: vars.lineHeight.snug,
  margin: 0,
});

export const body = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: vars.fontSize.body,
  lineHeight: vars.lineHeight.body,
  margin: 0,
  maxWidth: '52ch',
  color: colorVars.color.ink2,
});

export const mono = style({
  fontFamily: vars.font.mono,
  fontWeight: vars.fontWeight.light,
  fontSize: vars.fontSize.mono,
  color: colorVars.color.ink3,
});

export const swatchGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: vars.space[3],
});

export const swatch = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
});

export const swatchChip = style({
  height: 80,
  borderRadius: vars.radius.sm,
  border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
});

export const swatchName = style({
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.label,
  fontWeight: vars.fontWeight.regular,
  color: colorVars.color.ink,
});

export const swatchHex = style({
  fontFamily: vars.font.mono,
  fontSize: vars.fontSize.micro,
  color: colorVars.color.ink3,
});

export const spaceRow = style({
  display: 'grid',
  gridTemplateColumns: '80px 80px 1fr',
  gap: vars.space[4],
  alignItems: 'center',
});

export const spaceFill = style({
  background: colorVars.color.paper3,
  borderRadius: '1px',
  height: 16,
});
