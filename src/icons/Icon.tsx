import { forwardRef } from 'react'
import { clsx } from 'clsx'
import { iconStyles } from './Icon.css'
import type { IconProps } from './types'

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      children,
      size = 'md',
      color = 'currentColor',
      className,
      'aria-label': ariaLabel,
      'aria-hidden': ariaHidden,
      focusable = false,
      ...props
    },
    ref
  ) => {
    const hasAccessibleName = ariaLabel || props['aria-labelledby']
    const shouldHideFromScreenReaders = ariaHidden ?? !hasAccessibleName

    return (
      <svg
        ref={ref}
        className={clsx(iconStyles({ size }), className)}
        fill={color}
        focusable={focusable}
        aria-hidden={shouldHideFromScreenReaders}
        aria-label={ariaLabel}
        viewBox="0 0 24 24"
        {...props}
      >
        {children}
      </svg>
    )
  }
)

Icon.displayName = 'Icon'