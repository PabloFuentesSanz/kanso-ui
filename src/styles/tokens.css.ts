import { createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  color: {
    // Sky Blue - Calm and serene
    sky: '#a8d8ea',
    skyHover: '#6bb3d9',
    skyActive: '#4a9bc9',
    skyLight: '#d4edff',
    skyLighter: '#f0f9ff',
    
    // Lavender - Elegant and peaceful
    lavender: '#c4a7d4',
    lavenderHover: '#a886be',
    lavenderActive: '#8d6ba8',
    lavenderLight: '#e6ddf1',
    lavenderLighter: '#f7f4fa',
    
    // Wasabi - Natural and balanced (わさび)
    wasabi: '#a8e6b0',
    wasabiHover: '#7fd88a',
    wasabiActive: '#5cc969',
    wasabiLight: '#d7f5da',
    wasabiLighter: '#f1fcf2',

    // Legacy sage alias (deprecated - use wasabi)
    sage: '#a8e6b0',
    sageHover: '#7fd88a',
    sageActive: '#5cc969',
    sageLight: '#d7f5da',
    sageLighter: '#f1fcf2',
    
    // Amber - Warm and inviting (Plattio inspired)
    amber: '#ffc067',
    amberHover: '#ffa640',
    amberActive: '#ff8f1c',
    amberLight: '#ffe2b8',
    amberLighter: '#fff7ed',
    
    // Coral - Vibrant and energetic (Ryoko inspired)
    coral: '#ff6b7a',
    coralHover: '#ff3c4f',
    coralActive: '#ff1a30',
    coralLight: '#ffc2c7',
    coralLighter: '#fff0f1',
    
    // Nature-inspired Pastels
    peach: '#ffb3ba',
    mint: '#bae1cc',
    lilac: '#d4b5e8',
    cream: '#ffffba',
    rose: '#ffd1dc',
    seafoam: '#b5e7e0',
    
    // Refined Neutral/Gray palette (warmer, softer)
    white: '#ffffff',
    gray50: '#fdfbf7',
    gray100: '#f7f5f0',
    gray200: '#f0ede8',
    gray300: '#e5e1da',
    gray400: '#cac5bd',
    gray500: '#a8a199',
    gray600: '#827a70',
    gray700: '#68605a',
    gray800: '#4a433e',
    gray900: '#2d2924',
    black: '#1a1715',
    
    // Softer text colors
    textPrimary: '#2d2924',
    textSecondary: '#68605a',
    textMuted: '#a8a199',
    textDisabled: '#cac5bd',
    textInverse: '#ffffff',
    
    // Warm background colors
    background: '#ffffff',
    backgroundAlt: '#fdfbf7',
    backgroundOverlay: 'rgba(45, 41, 36, 0.5)',
    
    // Subtle border colors
    border: '#e5e1da',
    borderLight: '#f0ede8',
    borderDark: '#cac5bd',
    
    // Focus and interaction (using sky blue)
    focus: '#a8d8ea',
    focusRing: 'rgba(168, 216, 234, 0.3)',
  },
  
  spacing: {
    '0': '0',
    '1': '0.25rem',   // 4px
    '2': '0.5rem',    // 8px
    '3': '0.75rem',   // 12px
    '4': '1rem',      // 16px
    '5': '1.25rem',   // 20px
    '6': '1.5rem',    // 24px
    '7': '1.75rem',   // 28px
    '8': '2rem',      // 32px
    '9': '2.25rem',   // 36px
    '10': '2.5rem',   // 40px
    '11': '2.75rem',  // 44px
    '12': '3rem',     // 48px
    '14': '3.5rem',   // 56px
    '16': '4rem',     // 64px
    '20': '5rem',     // 80px
    '24': '6rem',     // 96px
    '32': '8rem',     // 128px
    '40': '10rem',    // 160px
    '48': '12rem',    // 192px
    '56': '14rem',    // 224px
    '64': '16rem',    // 256px
  },
  
  fontSize: {
    'xs': '0.75rem',    // 12px
    'sm': '0.875rem',   // 14px
    'base': '1rem',     // 16px
    'lg': '1.125rem',   // 18px
    'xl': '1.25rem',    // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
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
    sm: '0.125rem',   // 2px
    default: '0.25rem', // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
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
    default: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), fill 150ms cubic-bezier(0.4, 0, 0.2, 1), stroke 150ms cubic-bezier(0.4, 0, 0.2, 1), opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    colors: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), fill 150ms cubic-bezier(0.4, 0, 0.2, 1), stroke 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 'opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    shadow: 'box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
})