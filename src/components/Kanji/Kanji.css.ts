import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/tokens.css'

export const kanjiStyles = recipe({
  base: {
    margin: 0,
    lineHeight: 'inherit',
  },

  variants: {
    // Font sizes
    size: {
      xs: { fontSize: vars.fontSize.xs },
      sm: { fontSize: vars.fontSize.sm },
      base: { fontSize: vars.fontSize.base },
      lg: { fontSize: vars.fontSize.lg },
      xl: { fontSize: vars.fontSize.xl },
      '2xl': { fontSize: vars.fontSize['2xl'] },
      '3xl': { fontSize: vars.fontSize['3xl'] },
      '4xl': { fontSize: vars.fontSize['4xl'] },
      '5xl': { fontSize: vars.fontSize['5xl'] },
      '6xl': { fontSize: vars.fontSize['6xl'] },
      '7xl': { fontSize: '4.5rem' },
      '8xl': { fontSize: '6rem' },
      '9xl': { fontSize: '8rem' },
    },

    // Font weights
    weight: {
      thin: { fontWeight: '100' },
      light: { fontWeight: '200' },
      normal: { fontWeight: vars.fontWeight.normal },
      medium: { fontWeight: vars.fontWeight.medium },
      semibold: { fontWeight: vars.fontWeight.semibold },
      bold: { fontWeight: vars.fontWeight.bold },
      extrabold: { fontWeight: '800' },
      black: { fontWeight: '900' },
    },

    // Text styling
    italic: {
      true: { fontStyle: 'italic' },
      false: { fontStyle: 'normal' },
    },

    underline: {
      true: { textDecoration: 'underline' },
      false: {},
    },

    strikethrough: {
      true: { textDecoration: 'line-through' },
      false: {},
    },

    uppercase: {
      true: { textTransform: 'uppercase' },
      false: {},
    },

    lowercase: {
      true: { textTransform: 'lowercase' },
      false: {},
    },

    capitalize: {
      true: { textTransform: 'capitalize' },
      false: {},
    },

    // Text alignment
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
      justify: { textAlign: 'justify' },
    },

    // Line height
    leading: {
      none: { lineHeight: '1' },
      tight: { lineHeight: '1.25' },
      snug: { lineHeight: '1.375' },
      normal: { lineHeight: '1.5' },
      relaxed: { lineHeight: '1.625' },
      loose: { lineHeight: '2' },
    },

    // Letter spacing
    tracking: {
      tighter: { letterSpacing: '-0.05em' },
      tight: { letterSpacing: '-0.025em' },
      normal: { letterSpacing: '0em' },
      wide: { letterSpacing: '0.025em' },
      wider: { letterSpacing: '0.05em' },
      widest: { letterSpacing: '0.1em' },
    },

    // Text colors
    color: {
      primary: { color: vars.color.textPrimary },
      secondary: { color: vars.color.textSecondary },
      muted: { color: vars.color.textMuted },
      white: { color: vars.color.white },
      black: { color: '#000000' },
      danger: { color: '#ef4444' },
      warning: { color: '#f59e0b' },
      success: { color: '#10b981' },
      info: { color: '#3b82f6' },
    },

    // Font families
    family: {
      sans: { fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' },
      serif: { fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' },
      mono: { fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' },
      display: { fontFamily: '"Inter Display", system-ui, sans-serif' },
      handwriting: { fontFamily: '"Caveat", cursive' },
    },

    // Gradient text
    gradient: {
      true: {
        background: 'linear-gradient(45deg, var(--color-accent), var(--color-accent-light))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      },
      false: {},
    },

    // Text shadow
    shadow: {
      none: { textShadow: 'none' },
      sm: { textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' },
      md: { textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
      lg: { textShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' },
    },

    // Truncate text
    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      false: {},
    },

    // Line clamping
    clamp: {
      line1: {
        display: '-webkit-box',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      },
      line2: {
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      },
      line3: {
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      },
      line4: {
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      },
      line5: {
        display: '-webkit-box',
        WebkitLineClamp: 5,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      },
      line6: {
        display: '-webkit-box',
        WebkitLineClamp: 6,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      },
    },

    // Theme colors for gradients and accents
    theme: {
      sky: {
        vars: {
          '--color-accent': vars.color.sky,
          '--color-accent-light': vars.color.skyLight,
          '--color-accent-lighter': vars.color.skyLighter,
        }
      },
      lavender: {
        vars: {
          '--color-accent': vars.color.lavender,
          '--color-accent-light': vars.color.lavenderLight,
          '--color-accent-lighter': vars.color.lavenderLighter,
        }
      },
      sage: {
        vars: {
          '--color-accent': vars.color.sage,
          '--color-accent-light': vars.color.sageLight,
          '--color-accent-lighter': vars.color.sageLighter,
        }
      },
      wasabi: {
        vars: {
          '--color-accent': vars.color.wasabi,
          '--color-accent-light': vars.color.wasabiLight,
          '--color-accent-lighter': vars.color.wasabiLighter,
        }
      },
      amber: {
        vars: {
          '--color-accent': vars.color.amber,
          '--color-accent-light': vars.color.amberLight,
          '--color-accent-lighter': vars.color.amberLighter,
        }
      },
      coral: {
        vars: {
          '--color-accent': vars.color.coral,
          '--color-accent-light': vars.color.coralLight,
          '--color-accent-lighter': vars.color.coralLighter,
        }
      },
    },
  },

  // Compound variants for combinations
  compoundVariants: [
    {
      variants: { underline: true, strikethrough: true },
      style: { textDecoration: 'underline line-through' }
    },
    {
      variants: { gradient: true, shadow: 'md' },
      style: {
        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
      }
    }
  ],

  defaultVariants: {
    size: 'base',
    weight: 'normal',
    italic: false,
    underline: false,
    strikethrough: false,
    uppercase: false,
    lowercase: false,
    capitalize: false,
    gradient: false,
    truncate: false,
  },
})