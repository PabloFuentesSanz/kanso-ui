import { forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'
import { kireiStyles, kireiHeaderStyles, kireiBodyStyles, kireiFooterStyles } from './Kirei.css'

export interface KireiProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'sky' | 'lavender' | 'sage' | 'amber' | 'coral'
  variant?: 'default' | 'outlined' | 'filled' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  height?: 'auto' | 'full' | 'fit'
  interactive?: boolean
  children: ReactNode
}

export interface KireiHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: boolean
  children: ReactNode
}

export interface KireiBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export interface KireiFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Kirei = forwardRef<HTMLDivElement, KireiProps>(
  (
    {
      color = 'sky',
      variant = 'default',
      padding = 'none',
      height = 'auto',
      interactive = false,
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
          kireiStyles({
            color,
            variant,
            padding,
            height,
            interactive,
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

export const KireiHeader = forwardRef<HTMLDivElement, KireiHeaderProps>(
  ({ accent = false, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          kireiHeaderStyles({
            accent,
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

export const KireiBody = forwardRef<HTMLDivElement, KireiBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(kireiBodyStyles(), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

export const KireiFooter = forwardRef<HTMLDivElement, KireiFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(kireiFooterStyles(), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

// Aliases for developer familiarity
export const Card = Kirei
export const CardHeader = KireiHeader
export const CardBody = KireiBody
export const CardFooter = KireiFooter

Kirei.displayName = 'Kirei'
KireiHeader.displayName = 'KireiHeader'
KireiBody.displayName = 'KireiBody'  
KireiFooter.displayName = 'KireiFooter'