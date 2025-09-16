import { forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'
import { tatamiStyles } from './Tatami.css'

export interface TatamiProps extends React.HTMLAttributes<HTMLDivElement> {
  // Layout & Display
  display?: 'block' | 'flex' | 'grid' | 'inline' | 'inline-block' | 'inline-flex' | 'none'
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string

  // Sizing
  w?: 'auto' | 'full' | 'screen' | 'fit' | 'min' | 'max' | string
  h?: 'auto' | 'full' | 'screen' | 'fit' | 'min' | 'max' | string
  minW?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string
  minH?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string
  maxW?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string
  maxH?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | string

  // Spacing
  p?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string
  px?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string
  py?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string
  m?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'auto' | string
  mx?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'auto' | string
  my?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'auto' | string

  // Visual
  bg?: 'transparent' | 'white' | 'gray' | 'primary' | 'secondary' | string
  border?: 'none' | 'sm' | 'md' | 'lg' | string
  borderColor?: 'gray' | 'primary' | 'secondary' | string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | string
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | string

  // Text
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  textSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | string
  textWeight?: 'normal' | 'medium' | 'semibold' | 'bold'
  textColor?: 'primary' | 'secondary' | 'muted' | 'white' | string

  // Positioning
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto'

  // Theme
  color?: 'sky' | 'lavender' | 'sage' | 'wasabi' | 'amber' | 'coral' | string

  children: ReactNode
}

export const Tatami = forwardRef<HTMLDivElement, TatamiProps>(
  (
    {
      // Layout & Display
      display = 'block',
      direction,
      wrap,
      justify,
      align,
      gap,

      // Sizing
      w,
      h,
      minW,
      minH,
      maxW,
      maxH,

      // Spacing
      p,
      px,
      py,
      m,
      mx,
      my,

      // Visual
      bg,
      border,
      borderColor,
      rounded,
      shadow,

      // Text
      textAlign,
      textSize,
      textWeight,
      textColor,

      // Positioning
      position,
      overflow,

      // Theme
      color,

      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          tatamiStyles({
            display,
            direction,
            wrap,
            justify,
            align,
            gap,
            w,
            h,
            minW,
            minH,
            maxW,
            maxH,
            p,
            px,
            py,
            m,
            mx,
            my,
            bg,
            border,
            borderColor,
            rounded,
            shadow,
            textAlign,
            textSize,
            textWeight,
            textColor,
            position,
            overflow,
            color,
          }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Tatami.displayName = 'Tatami'
