import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const example = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[3],
});

export const head = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[1],
});

export const title = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.fontSize.micro,
  letterSpacing: vars.letterSpacing.micro,
  textTransform: 'uppercase',
  color: colorVars.color.ink3,
});

export const desc = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: vars.fontSize.body,
  lineHeight: vars.lineHeight.body,
  color: colorVars.color.ink2,
  margin: 0,
  maxWidth: '56ch',
});

export const preview = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[3],
  flexWrap: 'wrap',
  padding: `${vars.space[5]} ${vars.space[4]}`,
  background: colorVars.color.paper2,
  border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  borderRadius: vars.radius.md,
});
