import { forwardRef, ReactNode, ElementType } from 'react'
import { clsx } from 'clsx'
import { kanjiStyles } from './Kanji.css'

export interface KanjiProps extends React.HTMLAttributes<HTMLElement> {
  // Element type
  as?: ElementType

  // Typography basics
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'

  // Text styling
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  uppercase?: boolean
  lowercase?: boolean
  capitalize?: boolean

  // Text alignment
  align?: 'left' | 'center' | 'right' | 'justify'

  // Line height & letter spacing
  leading?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose'
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest'

  // Colors
  color?: 'primary' | 'secondary' | 'muted' | 'white' | 'black' | 'danger' | 'warning' | 'success' | 'info'

  // Font family
  family?: 'sans' | 'serif' | 'mono' | 'display' | 'handwriting'

  // Text effects
  gradient?: boolean
  shadow?: 'none' | 'sm' | 'md' | 'lg'

  // Responsive
  truncate?: boolean
  clamp?: number // Lines to clamp

  // Theme colors
  theme?: 'sky' | 'lavender' | 'sage' | 'wasabi' | 'amber' | 'coral'

  children: ReactNode
}

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
      shadow,
      truncate = false,
      clamp,
      theme,
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
            color,
            family,
            gradient,
            shadow,
            truncate,
            clamp: clamp ? `line${clamp}` as any : undefined,
            theme,
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