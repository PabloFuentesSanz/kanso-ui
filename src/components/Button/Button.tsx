import { forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'
import { buttonStyles, buttonIconStyles } from './Button.css'

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          buttonStyles({
            variant,
            size,
            fullWidth,
            loading,
          }),
          className
        )}
        {...props}
      >
        {loading && (
          <span className={buttonIconStyles({ position: 'left', loading: true })}>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8 1V4M8 12V15M3.5 3.5L5.5 5.5M10.5 10.5L12.5 12.5M1 8H4M12 8H15M3.5 12.5L5.5 10.5M10.5 5.5L12.5 3.5'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </span>
        )}
        
        {!loading && leftIcon && (
          <span className={buttonIconStyles({ position: 'left' })}>
            {leftIcon}
          </span>
        )}
        
        {children}
        
        {!loading && rightIcon && (
          <span className={buttonIconStyles({ position: 'right' })}>
            {rightIcon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'