import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const principleGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: vars.space[4],
});

export const principle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[3],
  paddingTop: vars.space[3],
  borderTop: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
});

export const principleHead = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: vars.space[3],
});

export const principleKanji = style({
  fontFamily: vars.font.serif,
  fontWeight: vars.fontWeight.extralight,
  fontSize: '3rem',
  lineHeight: vars.lineHeight.none,
  color: colorVars.color.ink3,
});

export const principleLabels = style({
  display: 'flex',
  flexDirection: 'column',
});

export const principleRomaji = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.medium,
  fontSize: vars.fontSize.h3,
  lineHeight: vars.lineHeight.snug,
  color: colorVars.color.ink,
});

export const principleEn = style({
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.micro,
  fontWeight: vars.fontWeight.regular,
  letterSpacing: vars.letterSpacing.micro,
  textTransform: 'uppercase',
  color: colorVars.color.ink3,
});

export const principleBody = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: vars.fontSize.body,
  lineHeight: vars.lineHeight.body,
  color: colorVars.color.ink2,
  margin: 0,
});

export const quote = style({
  fontFamily: vars.font.serif,
  fontWeight: vars.fontWeight.extralight,
  fontSize: '1.5rem',
  lineHeight: '1.5',
  letterSpacing: '-0.005em',
  color: colorVars.color.ink,
  maxWidth: '40ch',
  margin: 0,
});
