import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { colorVars, vars } from '../../../tokens';

/**
 * Button — five variants in a strict hierarchy.
 *
 * Spec (design/kanso.css `.k-btn` and friends):
 *   - 36px tall base, padding 0.5rem 1.25rem, radius-sm (2px)
 *   - Syne 400 13px with letter-spacing 0.02em (vars.letterSpacing.wide)
 *   - Hover dims to 75% opacity; active scales to 0.98
 *   - Focus uses a 1px outline at 2px offset (no glow)
 *   - Disabled drops to 35% opacity and ignores pointer events
 *
 * Ghost and destructive break the size mould — smaller padding, 12px text,
 * height auto — so they fit inside lists, table rows and inline contexts
 * without dominating the layout.
 */
export const button = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.space[2],
    paddingBlock: '0.5rem',
    paddingInline: '1.25rem',
    height: 36,
    borderRadius: vars.radius.sm,
    fontFamily: vars.font.sans,
    fontWeight: vars.fontWeight.regular,
    fontSize: '13px',
    letterSpacing: vars.letterSpacing.wide,
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    transition: [
      `opacity ${vars.duration.base} ${vars.easing.standard}`,
      `transform ${vars.duration.fast} ${vars.easing.standard}`,
      `border-color ${vars.duration.base} ${vars.easing.standard}`,
      `background-color ${vars.duration.base} ${vars.easing.standard}`,
      `color ${vars.duration.base} ${vars.easing.standard}`,
    ].join(', '),
    selectors: {
      '&:hover:not(:disabled)': { opacity: 0.75 },
      '&:active:not(:disabled)': { transform: 'scale(0.98)' },
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
      primary: {
        background: colorVars.color.ink,
        color: colorVars.color.paper,
        border: 'none',
      },
      accent: {
        background: colorVars.color.accent,
        color: colorVars.color.paper,
        border: 'none',
      },
      secondary: {
        background: 'transparent',
        color: colorVars.color.ink,
        border: `${vars.borderWidth.hair} solid ${colorVars.color.ink4}`,
        selectors: {
          '&:hover:not(:disabled)': {
            opacity: 1,
            borderColor: colorVars.color.ink3,
          },
        },
      },
      ghost: {
        background: 'transparent',
        color: colorVars.color.ink2,
        border: 'none',
        paddingBlock: '0.4rem',
        paddingInline: '0.75rem',
        fontSize: '12px',
        height: 'auto',
      },
      destructive: {
        background: 'transparent',
        color: colorVars.color.red,
        border: 'none',
        paddingBlock: '0.4rem',
        paddingInline: '0.75rem',
        fontSize: '12px',
        height: 'auto',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
