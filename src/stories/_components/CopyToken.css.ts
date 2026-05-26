import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const button = style({
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  padding: '1px 4px 1px 0',
  margin: 0,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  color: 'inherit',
  lineHeight: 'inherit',
  letterSpacing: 'inherit',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  borderRadius: vars.radius.sm,
  transition: `color ${vars.duration.base} ${vars.easing.standard}, background-color ${vars.duration.base} ${vars.easing.standard}`,
  selectors: {
    '&:hover': {
      color: colorVars.color.ink,
      background: colorVars.color.paper2,
    },
    '&:focus-visible': {
      outline: `${vars.borderWidth.emphasis} solid ${colorVars.color.ink3}`,
      outlineOffset: 1,
    },
  },
});

export const icon = style({
  display: 'inline-flex',
  alignItems: 'center',
  color: colorVars.color.ink4,
  opacity: 0,
  transition: `opacity ${vars.duration.base} ${vars.easing.standard}, color ${vars.duration.base} ${vars.easing.standard}`,
  selectors: {
    [`${button}:hover &`]: {
      opacity: 1,
      color: colorVars.color.ink3,
    },
    [`${button}:focus-visible &`]: {
      opacity: 1,
    },
  },
});

export const iconCopied = style({
  opacity: 1,
  color: colorVars.color.accent,
});
