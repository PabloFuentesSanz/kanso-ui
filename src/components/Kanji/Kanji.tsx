import { forwardRef, ReactNode, ElementType } from 'react'
import { clsx } from 'clsx'
import { kanjiStyles } from './Kanji.css'

export interface KanjiProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * HTML element to render as (e.g. h1, p, span, div)
   * @default 'span'
   */
  as?: ElementType

  /**
   * Typography size from xs to 9xl
   * @default 'base'
   */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
  
  /**
   * Font weight
   * @default 'normal'
   */
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'

  /**
   * Text Styling
   */
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  uppercase?: boolean
  lowercase?: boolean
  capitalize?: boolean

  /**
   * Text alignment
   */
  align?: 'left' | 'center' | 'right' | 'justify'

  /**
   * Line height
   */
  leading?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'
  
  /**
   * Letter spacing (tracking)
   */
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'

  /**
   * Color from Kanso Palette
   * @default 'current'
   */
  color?: 
    | 'current' | 'white' | 'black' | 'primary' | 'secondary' | 'muted'
    | 'sakura' | 'wasabi' | 'sora' | 'indigo' | 'mikan' | 'akane' | 'fuji' | 'sumi'

  /**
   * Font Family
   */
  family?: 'sans' | 'serif' | 'mono'

  /**
   * Enable gradient text effect.
   * Requires 'gradientTheme' to be set to be visible, or defaults might apply.
   */
  gradient?: boolean
  
  /**
   * Theme for the gradient. Matches Kanso color names.
   */
  gradientTheme?: 
    | 'sakura' | 'wasabi' | 'sora' | 'indigo' | 'mikan' | 'akane' | 'fuji' | 'sumi'
    | 'sunset' | 'ocean' | 'mystic'

  /**
   * Shadow intensity
   */
  shadow?: 'none' | 'sm' | 'md' | 'lg'

  /**
   * Truncate text with ellipsis if it overflows one line
   */
  truncate?: boolean
  
  /**
   * Clamp text to a specific number of lines
   */
  clamp?: 1 | 2 | 3

  /**
   * @deprecated Use gradientTheme instead
   */
  theme?: string

  children?: ReactNode
}

/**
 * Kanji (漢字) - The Typography Component.
 * 
 * A versatile component for all text needs in the Kanso UI system.
 * It provides a unified interface for headings, paragraphs, and labels
 * with strict adherence to the design system tokens.
 */
export const Kanji = forwardRef<HTMLElement, KanjiProps>(
  (
    {
      as: Component = 'span',
      size = 'base',
      weight = 'normal',
      italic = false,
      underline = false,
      strikethrough = false,
      uppercase = false,
      lowercase = false,
      capitalize = false,
      align,
      leading,
      tracking,
      color,
      family,
      gradient = false,
      gradientTheme,
      shadow,
      truncate = false,
      clamp,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={clsx(
          kanjiStyles({
            size,
            weight,
            italic,
            underline,
            strikethrough,
            uppercase,
            lowercase,
            capitalize,
            align,
            leading,
            tracking,
            color: color as any,
            family,
            gradient,
            gradientTheme: gradientTheme ?? (gradient ? 'sora' : undefined),
            shadow,
            truncate,
            clamp: clamp ? `line${clamp}` as any : undefined,
          }),
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Kanji.displayName = 'Kanji'