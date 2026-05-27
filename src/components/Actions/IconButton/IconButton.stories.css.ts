import { style } from '@vanilla-extract/css';
import { bp } from '../../../tokens/breakpoints';
import { colorVars, vars } from '../../../tokens';

export const importBlock = style({
  marginBottom: vars.space[6],
});

export const toolbar = style({
  display: 'inline-flex',
  gap: 2,
  padding: 6,
  border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  borderRadius: vars.radius.md,
  background: colorVars.color.paper,
});

export const toolbarDivider = style({
  width: '0.5px',
  margin: `0 ${vars.space[1]}`,
  background: colorVars.color.paper3,
});

const propGrid = style({
  display: 'grid',
  gridTemplateColumns: '160px 240px 1fr',
  gap: vars.space[4],
  alignItems: 'baseline',
  padding: `${vars.space[3]} 0`,
  '@media': {
    [`screen and (max-width: ${bp.mobile})`]: {
      gridTemplateColumns: '1fr',
      gap: vars.space[1],
    },
  },
});

export const propHeader = style([
  propGrid,
  {
    fontFamily: vars.font.sans,
    fontSize: vars.fontSize.micro,
    fontWeight: vars.fontWeight.regular,
    letterSpacing: vars.letterSpacing.micro,
    textTransform: 'uppercase',
    color: colorVars.color.ink4,
    '@media': {
      [`screen and (max-width: ${bp.mobile})`]: {
        display: 'none',
      },
    },
  },
]);

export const propRow = style([
  propGrid,
  {
    borderTop: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  },
]);

export const propName = style({
  fontFamily: vars.font.mono,
  fontSize: '12px',
  color: colorVars.color.ink,
});

export const propType = style({
  fontFamily: vars.font.mono,
  fontSize: '11px',
  color: colorVars.color.ink3,
});

export const propDesc = style({
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: vars.fontSize.body,
  color: colorVars.color.ink2,
});

export const inlineCode = style({
  fontFamily: vars.font.mono,
  fontSize: '12px',
});
