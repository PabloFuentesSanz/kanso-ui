import { createTheme } from '@vanilla-extract/css'
import { vars, palette } from './tokens.css'

// Helper to invert scales for dark mode
// Simple logical inversion: 25<->950, 50<->900, 100<->800, etc.
const invert = (p: typeof palette) => {
  const inverted: Record<string, string> = {}
  
  const families = ['sakura', 'wasabi', 'sora', 'indigo', 'mikan', 'akane', 'fuji', 'sumi']
  const scales = ['25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
  const reverseScales = [...scales].reverse()

  families.forEach(family => {
    scales.forEach((scale, index) => {
      const key = `${family}${scale}` as keyof typeof p
      const reverseKey = `${family}${reverseScales[index]}` as keyof typeof p
      inverted[key] = p[reverseKey]
    })
  })

  return inverted
}

const invertedColors = invert(palette)

export const darkTheme = createTheme(vars, {
  color: {
    ...palette, // Start with default palette
    ...invertedColors, // Overlay inverted scales
    
    // Semantic Overrides for Dark Mode
    primary: palette.sora400, // Lighter for dark background
    secondary: palette.sumi400,
    success: palette.wasabi400,
    warning: palette.mikan400,
    error: palette.akane400,
    
    // Legacy mapping (simplified)
    sky: palette.sora400,
    lavender: palette.fuji400,
    wasabi: palette.wasabi400,
    amber: palette.mikan400,
    coral: palette.akane400,
    peach: palette.sakura400,
    mint: palette.wasabi300,
    seafoam: palette.sora300,
    
    // Backgrounds
    background: palette.sumi950,
    backgroundAlt: palette.sumi900,
    backgroundOverlay: 'rgba(2, 6, 23, 0.8)',
    
    // Text
    textPrimary: palette.sumi50,
    textSecondary: palette.sumi300,
    textMuted: palette.sumi500,
    textInverse: palette.sumi950,
    
    // Borders
    border: palette.sumi700,
    borderLight: palette.sumi800,
    borderDark: palette.sumi600,
    
    // Focus
    focus: palette.sora400,
    focusRing: 'rgba(56, 189, 248, 0.3)',
  },
  
  // Inherit others
  spacing: vars.spacing,
  fontSize: vars.fontSize,
  fontWeight: vars.fontWeight,
  lineHeight: vars.lineHeight,
  borderRadius: vars.borderRadius,
  shadow: vars.shadow,
  transition: vars.transition,
})