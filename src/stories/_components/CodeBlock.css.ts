import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const wrapper = style({
  position: 'relative',
  minWidth: 0,
  background: colorVars.color.paper2,
  border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  borderRadius: vars.radius.md,
  padding: `${vars.space[4]} calc(${vars.space[4]} + 60px) ${vars.space[4]} ${vars.space[4]}`,
});

export const toolbar = style({
  position: 'absolute',
  top: vars.space[2],
  right: vars.space[2],
  display: 'flex',
  alignItems: 'center',
  gap: vars.space[2],
});

export const lang = style({
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.micro,
  fontWeight: vars.fontWeight.regular,
  letterSpacing: vars.letterSpacing.micro,
  textTransform: 'uppercase',
  color: colorVars.color.ink4,
});

export const copy = style({
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  width: 28,
  height: 28,
  borderRadius: vars.radius.sm,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: colorVars.color.ink3,
  cursor: 'pointer',
  padding: 0,
  transition: `color ${vars.duration.base} ${vars.easing.standard}, background-color ${vars.duration.base} ${vars.easing.standard}`,
  selectors: {
    '&:hover': {
      color: colorVars.color.ink,
      background: colorVars.color.paper3,
    },
    '&:focus-visible': {
      outline: `${vars.borderWidth.emphasis} solid ${colorVars.color.ink3}`,
      outlineOffset: 2,
    },
  },
});

export const pre = style({
  margin: 0,
  fontFamily: vars.font.mono,
  fontWeight: vars.fontWeight.light,
  fontSize: '12.5px',
  lineHeight: vars.lineHeight.body,
  whiteSpace: 'pre',
  overflowX: 'auto',
});
