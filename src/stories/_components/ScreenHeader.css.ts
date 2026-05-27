import { style } from '@vanilla-extract/css';
import { bp } from '../../tokens/breakpoints';
import { colorVars, vars } from '../../tokens';

export const header = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'end',
  gap: vars.space[5],
  paddingBottom: vars.space[5],
  borderBottom: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  marginBottom: vars.space[6],
  '@media': {
    [`screen and (max-width: ${bp.mobile})`]: {
      gridTemplateColumns: '1fr',
      gap: vars.space[3],
      alignItems: 'start',
    },
  },
});

export const text = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[3],
});

export const eyebrow = style({
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.micro,
  fontWeight: vars.fontWeight.regular,
  letterSpacing: vars.letterSpacing.micro,
  textTransform: 'uppercase',
  color: colorVars.color.ink3,
});

export const title = style({
  fontFamily: vars.font.serif,
  fontWeight: vars.fontWeight.extralight,
  fontSize: vars.fontSize.display,
  lineHeight: vars.lineHeight.tight,
  letterSpacing: vars.letterSpacing.tight,
  color: colorVars.color.ink,
  margin: 0,
});

export const tag = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: vars.fontSize.body,
  lineHeight: vars.lineHeight.body,
  color: colorVars.color.ink3,
  maxWidth: '52ch',
  margin: 0,
});

export const kanji = style({
  fontFamily: vars.font.serif,
  fontWeight: vars.fontWeight.extralight,
  fontSize: '4.5rem',
  lineHeight: '0.8',
  color: colorVars.color.ink4,
  alignSelf: 'end',
  '@media': {
    [`screen and (max-width: ${bp.mobile})`]: {
      // Drops to 3rem and sits inline (above title) once stacked.
      fontSize: '3rem',
      alignSelf: 'start',
      gridRow: '1',
    },
  },
});
