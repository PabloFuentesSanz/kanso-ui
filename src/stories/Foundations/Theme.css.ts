import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const compareGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: vars.space[5],
});

export const themePanel = style({
  background: colorVars.color.paper,
  color: colorVars.color.ink,
  border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  borderRadius: vars.radius.md,
  padding: vars.space[5],
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[4],
});

export const themeLabel = style({
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.micro,
  fontWeight: vars.fontWeight.regular,
  letterSpacing: vars.letterSpacing.micro,
  textTransform: 'uppercase',
  color: colorVars.color.ink3,
});

export const swatchRow = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
});

export const swatchBar = style({
  display: 'flex',
  height: 28,
  borderRadius: vars.radius.sm,
  overflow: 'hidden',
  border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
});

export const swatchCell = style({
  flex: 1,
});

export const para = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: vars.fontSize.body,
  lineHeight: vars.lineHeight.body,
  color: colorVars.color.ink2,
  margin: 0,
  maxWidth: '56ch',
});
