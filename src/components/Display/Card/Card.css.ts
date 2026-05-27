import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { colorVars, vars } from '../../../tokens';

/**
 * Card — the canonical surface container.
 *
 * Spec (design/kanso.css `.k-card`): 0.5px paper-3 border, radius-md
 * (4px), 1rem × 1.25rem padding, flex column with space-3 gap so direct
 * children stack with rhythm. Elevation is communicated by a paper-2
 * background, never by shadow.
 */
export const card = recipe({
  base: {
    background: colorVars.color.paper,
    border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
    borderRadius: vars.radius.md,
    paddingBlock: '1rem',
    paddingInline: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: vars.space[3],
  },
  variants: {
    variant: {
      default: {},
      elevated: {
        background: colorVars.color.paper2,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type CardVariants = RecipeVariants<typeof card>;
