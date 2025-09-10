import { createTheme } from '@vanilla-extract/css'
import { vars, themeClass } from './tokens.css'

export const darkTheme = createTheme(vars, {
  color: {
    // Primary palette (keep same for consistency)
    primary: '#007bff',
    primaryHover: '#0056b3',
    primaryActive: '#004085',
    primaryLight: '#1a3a5c',
    primaryLighter: '#0d1d2e',
    
    // Secondary palette
    secondary: '#6c757d',
    secondaryHover: '#868e96',
    secondaryActive: '#9ca3af',
    secondaryLight: '#374151',
    secondaryLighter: '#1f2937',
    
    // Success palette
    success: '#10b981',
    successHover: '#059669',
    successActive: '#047857',
    successLight: '#065f46',
    successLighter: '#022c22',
    
    // Warning palette
    warning: '#f59e0b',
    warningHover: '#d97706',
    warningActive: '#b45309',
    warningLight: '#92400e',
    warningLighter: '#451a03',
    
    // Error/Danger palette
    error: '#ef4444',
    errorHover: '#dc2626',
    errorActive: '#b91c1c',
    errorLight: '#991b1b',
    errorLighter: '#450a0a',
    
    // Neutral/Gray palette (inverted for dark theme)
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
    
    // Focus and interaction
    focus: '#3b82f6',
    focusRing: 'rgba(59, 130, 246, 0.25)',
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