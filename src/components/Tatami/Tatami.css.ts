import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/tokens.css'

export const tatamiStyles = recipe({
  base: {},

  variants: {
    // Layout & Display
    display: {
      block: { display: 'block' },
      flex: { display: 'flex' },
      grid: { display: 'grid' },
      inline: { display: 'inline' },
      'inline-block': { display: 'inline-block' },
      'inline-flex': { display: 'inline-flex' },
      none: { display: 'none' },
    },

    direction: {
      row: { flexDirection: 'row' },
      column: { flexDirection: 'column' },
      'row-reverse': { flexDirection: 'row-reverse' },
      'column-reverse': { flexDirection: 'column-reverse' },
    },

    wrap: {
      nowrap: { flexWrap: 'nowrap' },
      wrap: { flexWrap: 'wrap' },
      'wrap-reverse': { flexWrap: 'wrap-reverse' },
    },

    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
      evenly: { justifyContent: 'space-evenly' },
    },

    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
      baseline: { alignItems: 'baseline' },
    },

    gap: {
      none: { gap: '0' },
      xs: { gap: vars.spacing['1'] },
      sm: { gap: vars.spacing['2'] },
      md: { gap: vars.spacing['4'] },
      lg: { gap: vars.spacing['6'] },
      xl: { gap: vars.spacing['8'] },
      '2xl': { gap: vars.spacing['12'] },
    },

    // Sizing
    w: {
      auto: { width: 'auto' },
      full: { width: '100%' },
      screen: { width: '100vw' },
      fit: { width: 'fit-content' },
      min: { width: 'min-content' },
      max: { width: 'max-content' },
    },

    h: {
      auto: { height: 'auto' },
      full: { height: '100%' },
      screen: { height: '100vh' },
      fit: { height: 'fit-content' },
      min: { height: 'min-content' },
      max: { height: 'max-content' },
    },

    minW: {
      none: { minWidth: 'none' },
      xs: { minWidth: '320px' },
      sm: { minWidth: '480px' },
      md: { minWidth: '768px' },
      lg: { minWidth: '1024px' },
      xl: { minWidth: '1280px' },
      '2xl': { minWidth: '1536px' },
      full: { minWidth: '100%' },
    },

    minH: {
      none: { minHeight: 'none' },
      xs: { minHeight: '80px' },
      sm: { minHeight: '120px' },
      md: { minHeight: '200px' },
      lg: { minHeight: '300px' },
      xl: { minHeight: '400px' },
      '2xl': { minHeight: '500px' },
      full: { minHeight: '100%' },
    },

    maxW: {
      none: { maxWidth: 'none' },
      xs: { maxWidth: '320px' },
      sm: { maxWidth: '480px' },
      md: { maxWidth: '768px' },
      lg: { maxWidth: '1024px' },
      xl: { maxWidth: '1280px' },
      '2xl': { maxWidth: '1536px' },
      full: { maxWidth: '100%' },
    },

    maxH: {
      none: { maxHeight: 'none' },
      xs: { maxHeight: '80px' },
      sm: { maxHeight: '120px' },
      md: { maxHeight: '200px' },
      lg: { maxHeight: '300px' },
      xl: { maxHeight: '400px' },
      '2xl': { maxHeight: '500px' },
      full: { maxHeight: '100%' },
    },

    // Spacing
    p: {
      none: { padding: '0' },
      xs: { padding: vars.spacing['1'] },
      sm: { padding: vars.spacing['2'] },
      md: { padding: vars.spacing['4'] },
      lg: { padding: vars.spacing['6'] },
      xl: { padding: vars.spacing['8'] },
      '2xl': { padding: vars.spacing['12'] },
    },

    px: {
      none: { paddingLeft: '0', paddingRight: '0' },
      xs: { paddingLeft: vars.spacing['1'], paddingRight: vars.spacing['1'] },
      sm: { paddingLeft: vars.spacing['2'], paddingRight: vars.spacing['2'] },
      md: { paddingLeft: vars.spacing['4'], paddingRight: vars.spacing['4'] },
      lg: { paddingLeft: vars.spacing['6'], paddingRight: vars.spacing['6'] },
      xl: { paddingLeft: vars.spacing['8'], paddingRight: vars.spacing['8'] },
      '2xl': { paddingLeft: vars.spacing['12'], paddingRight: vars.spacing['12'] },
    },

    py: {
      none: { paddingTop: '0', paddingBottom: '0' },
      xs: { paddingTop: vars.spacing['1'], paddingBottom: vars.spacing['1'] },
      sm: { paddingTop: vars.spacing['2'], paddingBottom: vars.spacing['2'] },
      md: { paddingTop: vars.spacing['4'], paddingBottom: vars.spacing['4'] },
      lg: { paddingTop: vars.spacing['6'], paddingBottom: vars.spacing['6'] },
      xl: { paddingTop: vars.spacing['8'], paddingBottom: vars.spacing['8'] },
      '2xl': { paddingTop: vars.spacing['12'], paddingBottom: vars.spacing['12'] },
    },

    m: {
      none: { margin: '0' },
      xs: { margin: vars.spacing['1'] },
      sm: { margin: vars.spacing['2'] },
      md: { margin: vars.spacing['4'] },
      lg: { margin: vars.spacing['6'] },
      xl: { margin: vars.spacing['8'] },
      '2xl': { margin: vars.spacing['12'] },
      auto: { margin: 'auto' },
    },

    mx: {
      none: { marginLeft: '0', marginRight: '0' },
      xs: { marginLeft: vars.spacing['1'], marginRight: vars.spacing['1'] },
      sm: { marginLeft: vars.spacing['2'], marginRight: vars.spacing['2'] },
      md: { marginLeft: vars.spacing['4'], marginRight: vars.spacing['4'] },
      lg: { marginLeft: vars.spacing['6'], marginRight: vars.spacing['6'] },
      xl: { marginLeft: vars.spacing['8'], marginRight: vars.spacing['8'] },
      '2xl': { marginLeft: vars.spacing['12'], marginRight: vars.spacing['12'] },
      auto: { marginLeft: 'auto', marginRight: 'auto' },
    },

    my: {
      none: { marginTop: '0', marginBottom: '0' },
      xs: { marginTop: vars.spacing['1'], marginBottom: vars.spacing['1'] },
      sm: { marginTop: vars.spacing['2'], marginBottom: vars.spacing['2'] },
      md: { marginTop: vars.spacing['4'], marginBottom: vars.spacing['4'] },
      lg: { marginTop: vars.spacing['6'], marginBottom: vars.spacing['6'] },
      xl: { marginTop: vars.spacing['8'], marginBottom: vars.spacing['8'] },
      '2xl': { marginTop: vars.spacing['12'], marginBottom: vars.spacing['12'] },
      auto: { marginTop: 'auto', marginBottom: 'auto' },
    },

    // Visual
    bg: {
      transparent: { backgroundColor: 'transparent' },
      white: { backgroundColor: vars.color.white },
      gray: { backgroundColor: vars.color.gray100 },
      primary: { backgroundColor: 'var(--color-accent-lighter)' },
      secondary: { backgroundColor: vars.color.gray50 },
    },

    border: {
      none: { border: 'none' },
      sm: { border: `1px solid ${vars.color.gray200}` },
      md: { border: `2px solid ${vars.color.gray300}` },
      lg: { border: `4px solid ${vars.color.gray400}` },
    },

    borderColor: {
      gray: { borderColor: vars.color.gray200 },
      primary: { borderColor: 'var(--color-accent)' },
      secondary: { borderColor: vars.color.gray400 },
    },

    rounded: {
      none: { borderRadius: '0' },
      sm: { borderRadius: vars.borderRadius.sm },
      md: { borderRadius: vars.borderRadius.md },
      lg: { borderRadius: vars.borderRadius.lg },
      xl: { borderRadius: vars.borderRadius.xl },
      full: { borderRadius: '9999px' },
    },

    shadow: {
      none: { boxShadow: 'none' },
      sm: { boxShadow: vars.shadow.sm },
      md: { boxShadow: vars.shadow.md },
      lg: { boxShadow: vars.shadow.lg },
      xl: { boxShadow: vars.shadow.xl },
    },

    // Text
    textAlign: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
      justify: { textAlign: 'justify' },
    },

    textSize: {
      xs: { fontSize: vars.fontSize.xs },
      sm: { fontSize: vars.fontSize.sm },
      md: { fontSize: vars.fontSize.base },
      lg: { fontSize: vars.fontSize.lg },
      xl: { fontSize: vars.fontSize.xl },
      '2xl': { fontSize: vars.fontSize['2xl'] },
    },

    textWeight: {
      normal: { fontWeight: vars.fontWeight.normal },
      medium: { fontWeight: vars.fontWeight.medium },
      semibold: { fontWeight: vars.fontWeight.semibold },
      bold: { fontWeight: vars.fontWeight.bold },
    },

    textColor: {
      primary: { color: vars.color.textPrimary },
      secondary: { color: vars.color.textSecondary },
      muted: { color: vars.color.textMuted },
      white: { color: vars.color.white },
    },

    // Positioning
    position: {
      static: { position: 'static' },
      relative: { position: 'relative' },
      absolute: { position: 'absolute' },
      fixed: { position: 'fixed' },
      sticky: { position: 'sticky' },
    },

    overflow: {
      visible: { overflow: 'visible' },
      hidden: { overflow: 'hidden' },
      scroll: { overflow: 'scroll' },
      auto: { overflow: 'auto' },
    },

    // Theme colors
    color: {
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

  defaultVariants: {
    display: 'block',
  },
})