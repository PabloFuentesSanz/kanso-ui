import { forwardRef, ReactNode, useId } from 'react'
import { clsx } from 'clsx'
import { inputStyles, inputGroupStyles, inputLabelStyles, inputMessageStyles } from './Input.css'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  color?: 'sky' | 'lavender' | 'sage' | 'amber' | 'coral'
  variant?: 'filled' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  label?: string
  helperText?: string
  errorMessage?: string
  fullWidth?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      color = 'sky',
      variant = 'outline',
      size = 'md',
      label,
      helperText,
      errorMessage,
      fullWidth = true,
      leftIcon,
      rightIcon,
      className,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = props.id || generatedId
    const hasError = Boolean(errorMessage)
    const message = errorMessage || helperText
    const messageColor = hasError ? 'coral' : color

    return (
      <div className={inputGroupStyles({ fullWidth })}>
        {label && (
          <label
            htmlFor={inputId}
            className={inputLabelStyles({ required, disabled })}
          >
            {label}
          </label>
        )}
        
        <div className='relative'>
          {leftIcon && (
            <div 
              style={{
                position: 'absolute',
                left: size === 'sm' ? '12px' : size === 'md' ? '16px' : '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px',
                color: disabled ? '#cac5bd' : undefined,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '16px',
                lineHeight: 1,
              }}
            >
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            className={clsx(
              inputStyles({
                color: hasError ? 'coral' : color,
                variant,
                size,
              }),
              className
            )}
            style={{
              paddingLeft: leftIcon ? 
                (size === 'sm' ? '36px' : size === 'md' ? '44px' : '56px') : undefined,
              paddingRight: rightIcon ? 
                (size === 'sm' ? '36px' : size === 'md' ? '44px' : '56px') : undefined,
            }}
            {...props}
          />
          
          {rightIcon && (
            <div 
              style={{
                position: 'absolute',
                right: size === 'sm' ? '12px' : size === 'md' ? '16px' : '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1,
                fontSize: size === 'sm' ? '14px' : size === 'md' ? '16px' : '18px',
                color: disabled ? '#cac5bd' : undefined,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '16px',
                lineHeight: 1,
              }}
            >
              {rightIcon}
            </div>
          )}
        </div>

        {message && (
          <span className={inputMessageStyles({ color: messageColor })}>
            {message}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'