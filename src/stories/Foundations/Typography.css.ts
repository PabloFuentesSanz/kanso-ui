import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const familyGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space[5],
});

export const familyCell = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[2],
});

export const familyLabel = style({
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.micro,
  fontWeight: vars.fontWeight.regular,
  letterSpacing: vars.letterSpacing.micro,
  textTransform: 'uppercase',
  color: colorVars.color.ink3,
});

export const familySerifSample = style({
  fontFamily: vars.font.serif,
  fontWeight: vars.fontWeight.extralight,
  fontSize: '3rem',
  lineHeight: vars.lineHeight.none,
  color: colorVars.color.ink,
});

export const familySansSample = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.regular,
  fontSize: '3rem',
  lineHeight: vars.lineHeight.none,
  color: colorVars.color.ink,
});

export const familyMonoSample = style({
  fontFamily: vars.font.mono,
  fontWeight: vars.fontWeight.light,
  fontSize: '3rem',
  lineHeight: vars.lineHeight.none,
  color: colorVars.color.ink,
});

export const familyWeights = style({
  fontFamily: vars.font.mono,
  fontSize: '11px',
  color: colorVars.color.ink3,
});

export const scaleRow = style({
  display: 'grid',
  gridTemplateColumns: '200px 1fr 160px',
  gap: vars.space[4],
  alignItems: 'baseline',
  padding: `${vars.space[3]} 0`,
  borderTop: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  selectors: {
    '&:first-of-type': { borderTop: 'none' },
  },
});

export const scaleMeta = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
});

export const scaleName = style({
  fontFamily: vars.font.mono,
  fontSize: '12px',
  color: colorVars.color.ink,
});

export const scaleVar = style({
  fontFamily: vars.font.mono,
  fontSize: '11px',
  color: colorVars.color.ink3,
});

export const scaleFamily = style({
  fontFamily: vars.font.mono,
  fontSize: '11px',
  color: colorVars.color.ink3,
  textAlign: 'right',
});

export const ruleRow = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: vars.space[4],
  padding: `${vars.space[3]} 0`,
  borderTop: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  selectors: {
    '&:first-of-type': { borderTop: 'none' },
  },
});

export const ruleKey = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: vars.fontSize.body,
  color: colorVars.color.ink2,
});

export const ruleVal = style({
  fontFamily: vars.font.mono,
  fontSize: '11px',
  color: colorVars.color.ink3,
});
