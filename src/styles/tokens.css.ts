import { createGlobalTheme, style } from '@vanilla-extract/css'

// 1. Define the Palette Values separately (Javascript values)
export const palette = {
  // SAKURA (桜)
  sakura25: '#fff5f7',
  sakura50: '#fff0f3',
  sakura100: '#ffe4e9',
  sakura200: '#fecdd7',
  sakura300: '#fea2b5',
  sakura400: '#fc6b8b',
  sakura500: '#f63d68',
  sakura600: '#e31b4b',
  sakura700: '#c00f39',
  sakura800: '#a01135',
  sakura900: '#851431',
  sakura950: '#480616',

  // WASABI (山葵)
  wasabi25: '#f2fcf5',
  wasabi50: '#ebf9ee',
  wasabi100: '#dcfce7',
  wasabi200: '#bbf7d0',
  wasabi300: '#86efac',
  wasabi400: '#4ade80',
  wasabi500: '#22c55e',
  wasabi600: '#16a34a',
  wasabi700: '#15803d',
  wasabi800: '#166534',
  wasabi900: '#14532d',
  wasabi950: '#052e16',

  // SORA (空)
  sora25: '#f0f9ff',
  sora50: '#f0f9ff',
  sora100: '#e0f2fe',
  sora200: '#bae6fd',
  sora300: '#7dd3fc',
  sora400: '#38bdf8',
  sora500: '#0ea5e9',
  sora600: '#0284c7',
  sora700: '#0369a1',
  sora800: '#075985',
  sora900: '#0c4a6e',
  sora950: '#082f49',

  // INDIGO (藍)
  indigo25: '#f5f7ff',
  indigo50: '#eef2ff',
  indigo100: '#e0e7ff',
  indigo200: '#c7d2fe',
  indigo300: '#a5b4fc',
  indigo400: '#818cf8',
  indigo500: '#6366f1',
  indigo600: '#4f46e5',
  indigo700: '#4338ca',
  indigo800: '#3730a3',
  indigo900: '#312e81',
  indigo950: '#1e1b4b',

  // MIKAN (蜜柑)
  mikan25: '#fffbeb',
  mikan50: '#fff7ed',
  mikan100: '#ffedd5',
  mikan200: '#fed7aa',
  mikan300: '#fdba74',
  mikan400: '#fb923c',
  mikan500: '#f97316',
  mikan600: '#ea580c',
  mikan700: '#c2410c',
  mikan800: '#9a3412',
  mikan900: '#7c2d12',
  mikan950: '#431407',

  // AKANE (茜)
  akane25: '#fff5f5',
  akane50: '#fef2f2',
  akane100: '#fee2e2',
  akane200: '#fecaca',
  akane300: '#fca5a5',
  akane400: '#f87171',
  akane500: '#ef4444',
  akane600: '#dc2626',
  akane700: '#b91c1c',
  akane800: '#991b1b',
  akane900: '#7f1d1d',
  akane950: '#450a0a',

  // FUJI (藤)
  fuji25: '#faf5ff',
  fuji50: '#f3e8ff',
  fuji100: '#e9d5ff',
  fuji200: '#d8b4fe',
  fuji300: '#c084fc',
  fuji400: '#a855f7',
  fuji500: '#9333ea',
  fuji600: '#7e22ce',
  fuji700: '#6b21a8',
  fuji800: '#581c87',
  fuji900: '#4c1d95',
  fuji950: '#3b0764',

  // SUMI (墨)
  sumi25: '#f9fafb',
  sumi50: '#f8fafc',
  sumi100: '#f1f5f9',
  sumi200: '#e2e8f0',
  sumi300: '#cbd5e1',
  sumi400: '#94a3b8',
  sumi500: '#64748b',
  sumi600: '#475569',
  sumi700: '#334155',
  sumi800: '#1e293b',
  sumi900: '#0f172a',
  sumi950: '#020617',

  // YUKI (雪)
  yuki: '#ffffff',
}

// Helper to manual generate variable strings
// VE evaluates this file at build time, so we can use functions.
// We want strict control over names: --kanso-color-sakura500
// Structure of vars needs to match the structure we pass to createGlobalTheme
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function makeVars(obj: Record<string, any>, prefix: string): any {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = {}
  for (const key in obj) {
    if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
      result[key] = `var(--${prefix}-${key})`
    } else {
      result[key] = makeVars(obj[key], `${prefix}-${key}`)
    }
  }
  return result
}

// 2. Define the CONTRACT manually
// We must mirror the structure of the tokens we want to inject.
// Note: We need to define the structure of semantic aliases too.
const semanticColorStructure = {
  primary: '',
  secondary: '',
  success: '',
  warning: '',
  error: '',
  sky: '',
  lavender: '',
  wasabi: '',
  amber: '',
  coral: '',
  peach: '',
  mint: '',
  seafoam: '',
  background: '',
  backgroundAlt: '',
  backgroundOverlay: '',
  textPrimary: '',
  textSecondary: '',
  textMuted: '',
  textInverse: '',
  border: '',
  borderLight: '',
  borderDark: '',
  focus: '',
  focusRing: '',
}

const spacingStructure = {
  '0': '',
  '1': '',
  '2': '',
  '3': '',
  '4': '',
  '5': '',
  '6': '',
  '7': '',
  '8': '',
  '9': '',
  '10': '',
  '11': '',
  '12': '',
  '14': '',
  '16': '',
  '20': '',
  '24': '',
  '32': '',
  '40': '',
  '48': '',
  '56': '',
  '64': '',
}
const fontSizeStructure = {
  xs: '',
  sm: '',
  base: '',
  lg: '',
  xl: '',
  '2xl': '',
  '3xl': '',
  '4xl': '',
  '5xl': '',
  '6xl': '',
}
const fontWeightStructure = {
  thin: '',
  light: '',
  normal: '',
  medium: '',
  semibold: '',
  bold: '',
  extrabold: '',
  black: '',
}
const lineHeightStructure = { none: '', tight: '', snug: '', normal: '', relaxed: '', loose: '' }
const borderRadiusStructure = {
  none: '',
  sm: '',
  default: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',
  '3xl': '',
  full: '',
}
const shadowStructure = {
  none: '',
  sm: '',
  default: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',
  inner: '',
}
const transitionStructure = {
  none: '',
  all: '',
  default: '',
  colors: '',
  opacity: '',
  shadow: '',
  transform: '',
}

export const vars = {
  color: {
    ...makeVars(palette, 'kanso-color'),
    ...makeVars(semanticColorStructure, 'kanso-color'),
  },
  spacing: makeVars(spacingStructure, 'kanso-spacing'),
  fontSize: makeVars(fontSizeStructure, 'kanso-font'), // 'font' prefix for cleaner names
  fontWeight: makeVars(fontWeightStructure, 'kanso-font'),
  lineHeight: makeVars(lineHeightStructure, 'kanso-leading'),
  borderRadius: makeVars(borderRadiusStructure, 'kanso-radius'),
  shadow: makeVars(shadowStructure, 'kanso-shadow'),
  transition: makeVars(transitionStructure, 'kanso-transition'),
}

// 3. Inject global variables at :root matching the contract structure
createGlobalTheme(':root', vars, {
  color: {
    ...palette,

    // Semantic Aliases
    primary: palette.sora500,
    secondary: palette.sumi500,
    success: palette.wasabi500,
    warning: palette.mikan500,
    error: palette.akane500,

    // Legacy Aliases
    sky: palette.sora500,
    lavender: palette.fuji500,
    wasabi: palette.wasabi500,
    amber: palette.mikan500,
    coral: palette.akane500,
    peach: palette.sakura500,
    mint: palette.wasabi400,
    seafoam: palette.sora400,

    background: palette.yuki,
    backgroundAlt: palette.sumi50,
    backgroundOverlay: 'rgba(255, 255, 255, 0.8)',
    textPrimary: palette.sumi900,
    textSecondary: palette.sumi600,
    textMuted: palette.sumi400,
    textInverse: palette.yuki,
    border: palette.sumi200,
    borderLight: palette.sumi100,
    borderDark: palette.sumi300,

    focus: palette.sora500,
    focusRing: 'rgba(14, 165, 233, 0.3)',
  },

  spacing: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
  },

  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },

  fontWeight: {
    thin: '100',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  borderRadius: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  shadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },

  transition: {
    none: 'none',
    all: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    default:
      'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), fill 150ms cubic-bezier(0.4, 0, 0.2, 1), stroke 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    colors:
      'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), fill 150ms cubic-bezier(0.4, 0, 0.2, 1), stroke 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    shadow: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
})

// Export themeClass properly for Light Mode (it's implicit in :root but we keep legacy export)
export const themeClass = style({})
