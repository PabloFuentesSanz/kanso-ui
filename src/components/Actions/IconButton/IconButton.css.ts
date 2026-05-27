import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { colorVars, vars } from '../../../tokens';

/**
 * Icon button — a 32x32 target carrying a single Lucide icon.
 *
 * Spec (design/kanso.css `.k-icon-btn`): used in toolbars, list rows and
 * beside titles. Never a primary action because it has no visible label;
 * for that reason `aria-label` is required at the type level.
 *
 *   - ghost (default): no visible border, hover paints paper-2 background
 *   - bordered:        0.5px ink-4 border, hover darkens to ink-3
 */
export const iconButton = recipe({
  base: {
    appearance: 'none',
    background: 'transparent',
    border: `${vars.borderWidth.hair} solid transparent`,
    width: 32,
    height: 32,
    borderRadius: vars.radius.sm,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colorVars.color.ink2,
    cursor: 'pointer',
    padding: 0,
    transition: [
      `background-color ${vars.duration.base} ${vars.easing.standard}`,
      `border-color ${vars.duration.base} ${vars.easing.standard}`,
      `color ${vars.duration.base} ${vars.easing.standard}`,
    ].join(', '),
    selectors: {
      '&:focus-visible': {
        outline: `${vars.borderWidth.emphasis} solid ${colorVars.color.ink3}`,
        outlineOffset: 2,
      },
      '&:disabled': {
        opacity: 0.35,
        pointerEvents: 'none',
        cursor: 'not-allowed',
      },
    },
  },
  variants: {
    variant: {
      ghost: {
        selectors: {
          '&:hover:not(:disabled)': {
            color: colorVars.color.ink,
            background: colorVars.color.paper2,
          },
        },
      },
      bordered: {
        borderColor: colorVars.color.ink4,
        selectors: {
          '&:hover:not(:disabled)': {
            color: colorVars.color.ink,
            borderColor: colorVars.color.ink3,
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'ghost',
  },
});

export type IconButtonVariants = RecipeVariants<typeof iconButton>;
