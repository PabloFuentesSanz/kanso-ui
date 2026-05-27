import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { colorVars, vars } from '../../../tokens';

/**
 * Badge — a small inline status label.
 *
 * Spec (design/kanso.css `.k-badge`): inline-flex, 11px text with
 * 0.05em letter-spacing, 2px radius, 0.2rem × 0.6rem padding.
 *
 * Four semantic tones:
 *   - neutral  paper-2 surface with a paper-3 hairline border (the
 *              only tone that draws a visible edge — its background
 *              is so close to paper that the border carries it)
 *   - success  accent-pale on accent (matcha)
 *   - warning  warm-pale on warm (kogane)
 *   - error    red-pale on red (beni)
 */
export const badge = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    paddingBlock: '0.2rem',
    paddingInline: '0.6rem',
    borderRadius: vars.radius.sm,
    fontFamily: vars.font.sans,
    fontWeight: vars.fontWeight.regular,
    fontSize: '11px',
    letterSpacing: vars.letterSpacing.label,
    whiteSpace: 'nowrap',
  },
  variants: {
    tone: {
      neutral: {
        background: colorVars.color.paper2,
        color: colorVars.color.ink3,
        border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
      },
      success: {
        background: colorVars.color.accentPale,
        color: colorVars.color.accent,
      },
      warning: {
        background: colorVars.color.warmPale,
        color: colorVars.color.warm,
      },
      error: {
        background: colorVars.color.redPale,
        color: colorVars.color.red,
      },
    },
  },
  defaultVariants: {
    tone: 'neutral',
  },
});

export type BadgeVariants = RecipeVariants<typeof badge>;
