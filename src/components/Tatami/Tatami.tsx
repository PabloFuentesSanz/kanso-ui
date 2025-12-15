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
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

  // Sizing
  w?: 'auto' | 'full' | 'screen' | 'fit' | 'min' | 'max'
  h?: 'auto' | 'full' | 'screen' | 'fit' | 'min' | 'max'
  minW?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  minH?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  maxW?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  maxH?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'

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

  children?: ReactNode
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
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            w: w as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            h: h as any,
            minW,
            minH,
            maxW,
            maxH,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            p: p as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            px: px as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            py: py as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            m: m as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            mx: mx as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            my: my as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            bg: bg as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            border: border as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            borderColor: borderColor as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            rounded: rounded as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            shadow: shadow as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            textAlign: textAlign as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            textSize: textSize as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            textWeight: textWeight as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            textColor: textColor as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            position: position as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            overflow: overflow as any,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            color: color as any,
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
