import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const page = style({
  padding: `${vars.space[7]} ${vars.space[7]} calc(${vars.space[7]} * 1.5)`,
  maxWidth: 980,
  minWidth: 0,
  background: colorVars.color.paper,
  color: colorVars.color.ink,
  margin: '0 auto',
});
