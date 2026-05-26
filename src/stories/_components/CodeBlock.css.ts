import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const wrapper = style({
  position: 'relative',
  minWidth: 0,
  background: colorVars.color.paper2,
  border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  borderRadius: vars.radius.md,
  padding: vars.space[4],
});

export const lang = style({
  position: 'absolute',
  top: vars.space[2],
  right: vars.space[3],
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.micro,
  fontWeight: vars.fontWeight.regular,
  letterSpacing: vars.letterSpacing.micro,
  textTransform: 'uppercase',
  color: colorVars.color.ink4,
});

export const pre = style({
  margin: 0,
  fontFamily: vars.font.mono,
  fontWeight: vars.fontWeight.light,
  fontSize: '12.5px',
  lineHeight: vars.lineHeight.body,
  color: colorVars.color.ink2,
  whiteSpace: 'pre',
  overflowX: 'auto',
});
