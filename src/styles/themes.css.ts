import { createTheme } from '@vanilla-extract/css'
import { vars, themeClass } from './tokens.css'

export const darkTheme = createTheme(vars, {
  color: {
    // Sky Blue - Dark mode version
    sky: '#4a9eff',
    skyHover: '#6bb3ff',
    skyActive: '#2a85e6',
    skyLight: '#1e3a5c',
    skyLighter: '#0d1d2e',
    
    // Lavender - Dark mode version
    lavender: '#a584c9',
    lavenderHover: '#b89dd5',
    lavenderActive: '#926bb8',
    lavenderLight: '#3a2d4a',
    lavenderLighter: '#1f1825',
    
    // Wasabi - Dark mode version (natural and balanced)
    wasabi: '#6fbf73',
    wasabiHover: '#85cc89',
    wasabiActive: '#5aa55f',
    wasabiLight: '#2d4a2f',
    wasabiLighter: '#1a2e1b',

    // Legacy sage alias (deprecated - use wasabi)
    sage: '#6fbf73',
    sageHover: '#85cc89',
    sageActive: '#5aa55f',
    sageLight: '#2d4a2f',
    sageLighter: '#1a2e1b',
    
    // Amber - Dark mode version
    amber: '#ffb347',
    amberHover: '#ffc067',
    amberActive: '#ff9f27',
    amberLight: '#4a3d2e',
    amberLighter: '#2e2419',
    
    // Coral - Dark mode version
    coral: '#ff7a89',
    coralHover: '#ff94a1',
    coralActive: '#ff5f72',
    coralLight: '#4a2d30',
    coralLighter: '#2e191b',
    
    // Nature-inspired Pastels - Dark mode versions
    peach: '#ff9aa5',
    mint: '#8fccb5',
    lilac: '#c4a2d4',
    cream: '#e6e69a',
    rose: '#ffaeb8',
    seafoam: '#9dcccd',
    
    // Refined Neutral/Gray palette (inverted for dark theme)
    white: '#000000',
    gray50: '#1a1a1a',
    gray100: '#2a2a2a',
    gray200: '#3a3a3a',
    gray300: '#4a4a4a',
    gray400: '#6a6a6a',
    gray500: '#8a8a8a',
    gray600: '#aaaaaa',
    gray700: '#cacaca',
    gray800: '#dadada',
    gray900: '#f5f5f5',
    black: '#ffffff',
    
    // Text colors
    textPrimary: '#f8fafc',
    textSecondary: '#e2e8f0',
    textMuted: '#94a3b8',
    textDisabled: '#64748b',
    textInverse: '#0f172a',
    
    // Background colors
    background: '#0f172a',
    backgroundAlt: '#1e293b',
    backgroundOverlay: 'rgba(15, 23, 42, 0.8)',
    
    // Border colors
    border: '#334155',
    borderLight: '#475569',
    borderDark: '#1e293b',
    
    // Focus and interaction (using sky blue)
    focus: '#4a9eff',
    focusRing: 'rgba(74, 158, 255, 0.3)',
  },
  
  // Keep the same spacing, fontSize, fontWeight, lineHeight, borderRadius as light theme
  spacing: vars.spacing,
  fontSize: vars.fontSize,
  fontWeight: vars.fontWeight,
  lineHeight: vars.lineHeight,
  borderRadius: vars.borderRadius,
  
  // Adjust shadows for dark theme
  shadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
  },
  
  transition: vars.transition,
})

export const lightTheme = themeClass