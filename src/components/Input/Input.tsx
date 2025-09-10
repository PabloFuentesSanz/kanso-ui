import { forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'
import { inputStyles, inputGroupStyles, inputLabelStyles, inputMessageStyles } from './Input.css'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'error' | 'success'
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
      size = 'md',
      variant = 'default',
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
    const hasError = Boolean(errorMessage)
    const inputVariant = hasError ? 'error' : variant
    const messageVariant = hasError ? 'error' : variant
    const message = errorMessage || helperText

    return (
      <div className={inputGroupStyles({ fullWidth })}>
        {label && (
          <label
            htmlFor={props.id}
            className={inputLabelStyles({ required, disabled })}
          >
            {label}
          </label>
        )}
        
        <div className='relative'>
          <input
            ref={ref}
            disabled={disabled}
            required={required}
            className={clsx(
              inputStyles({
                size,
                variant: inputVariant,
              }),
              className
            )}
            {...props}
          />
        </div>

        {message && (
          <span className={inputMessageStyles({ variant: messageVariant })}>
            {message}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'