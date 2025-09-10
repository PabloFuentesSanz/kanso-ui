import { vars } from './tokens.css'

export type ThemeContract = typeof vars

export type ColorKeys = keyof typeof vars.color
export type SpacingKeys = keyof typeof vars.spacing
export type FontSizeKeys = keyof typeof vars.fontSize
export type FontWeightKeys = keyof typeof vars.fontWeight
export type BorderRadiusKeys = keyof typeof vars.borderRadius
export type ShadowKeys = keyof typeof vars.shadow