import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const codeStack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[3],
});

export const inlineCode = style({
  fontFamily: vars.font.mono,
  fontSize: vars.fontSize.mono,
  background: colorVars.color.paper2,
  padding: '1px 6px',
  borderRadius: vars.radius.sm,
});

export const para = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: vars.fontSize.body,
  lineHeight: vars.lineHeight.body,
  color: colorVars.color.ink2,
  margin: `${vars.space[4]} 0 ${vars.space[3]}`,
  maxWidth: '56ch',
});

export const tokenRow = style({
  display: 'grid',
  gridTemplateColumns: '220px 80px 1fr',
  gap: vars.space[4],
  alignItems: 'baseline',
  padding: `${vars.space[3]} 0`,
  borderTop: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  selectors: {
    '&:first-of-type': { borderTop: 'none' },
  },
});

export const tokenName = style({
  fontFamily: vars.font.mono,
  fontSize: vars.fontSize.mono,
  color: colorVars.color.ink,
});

export const tokenValue = style({
  fontFamily: vars.font.mono,
  fontSize: vars.fontSize.mono,
  color: colorVars.color.ink3,
});

export const tokenUse = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: vars.fontSize.body,
  color: colorVars.color.ink3,
});
