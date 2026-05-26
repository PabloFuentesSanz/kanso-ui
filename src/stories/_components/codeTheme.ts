import type { PrismTheme } from 'prism-react-renderer';
import { colorVars } from '../../tokens';

/**
 * Prism theme that paints code in the KansoUI palette instead of the usual
 * neon greens / pinks. Token colours are CSS variable references from the
 * theme contract, so they auto-swap if the active theme class changes.
 *
 * Note: the original design spec called for *no* coloured syntax
 * highlighting at all ("eso traicionaría el sistema" — chat transcript).
 * Adding subtle highlighting in our own palette is an intentional
 * divergence requested by the user; comments stay faded (ink-4 italic)
 * and only keyword / string / number get a colour shift.
 */
export const kansoCodeTheme: PrismTheme = {
  plain: {
    color: colorVars.color.ink2,
    backgroundColor: 'transparent',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: colorVars.color.ink4,
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: { color: colorVars.color.ink3 },
    },
    {
      types: ['number', 'boolean', 'constant'],
      style: { color: colorVars.color.warm },
    },
    {
      types: ['string', 'char', 'attr-value', 'inserted', 'url'],
      style: { color: colorVars.color.accent2 },
    },
    {
      types: ['keyword', 'atrule', 'tag', 'attr-name', 'selector', 'property'],
      style: { color: colorVars.color.accent },
    },
    {
      types: ['function', 'class-name', 'builtin'],
      style: { color: colorVars.color.ink },
    },
    {
      types: ['variable', 'regex', 'important'],
      style: { color: colorVars.color.red },
    },
  ],
};
