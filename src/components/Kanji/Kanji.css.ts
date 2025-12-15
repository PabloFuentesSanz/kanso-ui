import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/tokens.css'

export const kanjiStyles = recipe({
  base: {
    margin: 0,
    lineHeight: 'inherit',
    transition: vars.transition.colors,
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
      thin: { fontWeight: vars.fontWeight.thin },
      light: { fontWeight: vars.fontWeight.light },
      normal: { fontWeight: vars.fontWeight.normal },
      medium: { fontWeight: vars.fontWeight.medium },
      semibold: { fontWeight: vars.fontWeight.semibold },
      bold: { fontWeight: vars.fontWeight.bold },
      extrabold: { fontWeight: vars.fontWeight.extrabold },
      black: { fontWeight: vars.fontWeight.black },
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
      none: { lineHeight: vars.lineHeight.none },
      tight: { lineHeight: vars.lineHeight.tight },
      snug: { lineHeight: vars.lineHeight.snug },
      normal: { lineHeight: vars.lineHeight.normal },
      relaxed: { lineHeight: vars.lineHeight.relaxed },
      loose: { lineHeight: vars.lineHeight.loose },
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

    // Kanso Color Palette
    color: {
      // Standard
      current: { color: 'currentColor' },
      white: { color: vars.color.yuki },
      black: { color: vars.color.sumi900 },
      
      // Theme Palette
      sakura: { color: vars.color.sakura500 },
      wasabi: { color: vars.color.wasabi500 },
      sora: { color: vars.color.sora500 },
      indigo: { color: vars.color.indigo500 },
      mikan: { color: vars.color.mikan500 },
      akane: { color: vars.color.akane500 },
      fuji: { color: vars.color.fuji500 },
      sumi: { color: vars.color.sumi500 },

      // Semantic (Aliases)
      primary: { color: vars.color.textPrimary },
      secondary: { color: vars.color.textSecondary },
      muted: { color: vars.color.textMuted },
      danger: { color: vars.color.akane500 },
      warning: { color: vars.color.mikan500 },
      success: { color: vars.color.wasabi500 },
      info: { color: vars.color.sora500 },
    },

    // Font families
    family: {
      sans: { fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' },
      serif: { fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' },
      mono: { fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' },
    },

    // Gradient text
    gradient: {
      true: {
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundImage: 'linear-gradient(45deg, var(--gradient-start), var(--gradient-end))'
      },
      false: {},
    },
    
    // Gradient Themes (sets CSS vars)
    gradientTheme: {
      sakura: { vars: { '--gradient-start': vars.color.sakura400, '--gradient-end': vars.color.sakura600 } },
      wasabi: { vars: { '--gradient-start': vars.color.wasabi400, '--gradient-end': vars.color.wasabi600 } },
      sora: { vars: { '--gradient-start': vars.color.sora400, '--gradient-end': vars.color.sora600 } },
      indigo: { vars: { '--gradient-start': vars.color.indigo400, '--gradient-end': vars.color.indigo600 } },
      mikan: { vars: { '--gradient-start': vars.color.mikan400, '--gradient-end': vars.color.mikan600 } },
      akane: { vars: { '--gradient-start': vars.color.akane400, '--gradient-end': vars.color.akane600 } },
      fuji: { vars: { '--gradient-start': vars.color.fuji400, '--gradient-end': vars.color.fuji600 } },
      sumi: { vars: { '--gradient-start': vars.color.sumi400, '--gradient-end': vars.color.sumi600 } },
      
      // Multi-color gradients
      sunset: { vars: { '--gradient-start': vars.color.mikan500, '--gradient-end': vars.color.akane600 } },
      ocean: { vars: { '--gradient-start': vars.color.sora500, '--gradient-end': vars.color.wasabi500 } },
      mystic: { vars: { '--gradient-start': vars.color.fuji500, '--gradient-end': vars.color.sakura500 } },
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

    // Text shadow
    shadow: {
      none: { textShadow: 'none' },
      sm: { textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' },
      md: { textShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
      lg: { textShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' },
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
    },
  },

  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'current',
    italic: false,
    underline: false,
    strikethrough: false,
    uppercase: false,
    gradient: false,
    truncate: false,
  },
})