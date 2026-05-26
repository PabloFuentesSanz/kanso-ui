import { style } from '@vanilla-extract/css';
import { colorVars, vars } from '../../tokens';

export const page = style({
  padding: `${vars.space[7]} ${vars.space[7]} calc(${vars.space[7]} * 1.5)`,
  minWidth: 0,
  background: colorVars.color.paper,
  color: colorVars.color.ink,
  // Docs canvas fills the Storybook iframe edge-to-edge. The design's
  // `.k-main` caps at 980px because it shares a viewport with a 256px
  // sidebar — here the Storybook sidebar plays that role, so the canvas
  // can use the full width.
});
