import { style } from '@vanilla-extract/css';
import { bp } from '../../tokens/breakpoints';
import { colorVars, vars } from '../../tokens';

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[4],
  padding: `${vars.space[6]} 0`,
  borderTop: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  selectors: {
    '&:first-of-type': {
      borderTop: 'none',
      paddingTop: 0,
    },
  },
});

export const head = style({
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  gap: vars.space[5],
  marginBottom: vars.space[3],
  '@media': {
    [`screen and (max-width: ${bp.mobile})`]: {
      gridTemplateColumns: '1fr',
      gap: vars.space[2],
    },
  },
});

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[1],
});

export const num = style({
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.micro,
  fontWeight: vars.fontWeight.regular,
  letterSpacing: vars.letterSpacing.micro,
  textTransform: 'uppercase',
  // .k-micro in the spec maps to ink-3, not ink-4. The .k-section-head-num
  // class (ink-4) is defined but never applied in the prototype JSX.
  color: colorVars.color.ink3,
});

export const heading = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.fontSize.h2,
  lineHeight: vars.lineHeight.snug,
  color: colorVars.color.ink,
  margin: 0,
});

export const desc = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: vars.fontSize.body,
  lineHeight: vars.lineHeight.body,
  color: colorVars.color.ink3,
  maxWidth: '56ch',
  margin: 0,
});
