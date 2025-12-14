import { forwardRef, ReactNode, CSSProperties } from 'react'
import { clsx } from 'clsx'
import { buttonStyles, buttonIconStyles } from './Button.css'
import { vars } from '../../styles/tokens.css'

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  /**
   * Color scheme. Can be a preset Kanso palette name (e.g. 'sora', 'sakura')
   * OR a specific token name (e.g. 'sakura100', 'wasabi500').
   * @default 'sora'
   */
  color?: (keyof typeof vars.color & string) | (string & {})
  /**
   * Visual style variant.
   * @default 'filled'
   */
  variant?: 'filled' | 'outline' | 'ghost'
  /**
   * Size of the button.
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * If true, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean
  /**
   * If true, shows a loading spinner and disables interaction.
   * @default false
   */
  loading?: boolean
  /**
   * If true, the button is disabled.
   * @default false
   */
  disabled?: boolean
  /** Element to display on the left side of the button */
  leftIcon?: ReactNode
  /** Element to display on the right side of the button */
  rightIcon?: ReactNode
  children: ReactNode
}

// Preset color families that have fully defined variants in CSS
const PRESET_COLORS = ['sakura', 'wasabi', 'sora', 'indigo', 'mikan', 'akane', 'fuji', 'sumi']

// Helper to determine next shade for hover interaction
const getHoverShade = (token: string): string => {
  // Assuming token format like 'sakura100'
  const match = token.match(/([a-z]+)(\d+)/)
  if (!match) return token // Fallback to same color

  const [_, name, valStr] = match
  const val = parseInt(valStr)
  const scales = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

  const currentIndex = scales.indexOf(val)
  if (currentIndex === -1) return token

  // Darken by 1 step, max out at last index
  const nextIndex = Math.min(currentIndex + 1, scales.length - 1)
  return `${name}${scales[nextIndex]}`
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = 'sora',
      variant = 'filled',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading
    const isPreset = PRESET_COLORS.includes(color)

    // Calculate custom styles if using a specific token or custom string
    let customStyle: CSSProperties = { ...style }

    if (!isPreset && color) {
      // Check if it's a known token key in vars.color (e.g., 'sakura100')
      const mainColorRef = vars.color[color as keyof typeof vars.color]

      if (mainColorRef) {
        // It's a token!
        const hoverToken = getHoverShade(color)

        customStyle = {
          ...customStyle,
          '--color-main': mainColorRef,
          '--color-hover': vars.color[hoverToken as keyof typeof vars.color] || mainColorRef,
          // Default others to sensible values
          '--color-active': vars.color[hoverToken as keyof typeof vars.color] || mainColorRef,
          '--color-light': mainColorRef, // Simplified logic
          '--color-lighter': mainColorRef,
          '--color-text': vars.color.sumi900, // Default text
        } as CSSProperties
      } else {
        // It's a raw string (hex, etc) or unknown
        customStyle = {
          ...customStyle,
          '--color-main': color,
          '--color-hover': color, // CSS brightness filter in base could handle this, but for now flat
          '--color-active': color,
          '--color-light': color,
          '--color-lighter': color,
        } as CSSProperties
      }
    }

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          buttonStyles({
            color: isPreset ? (color as any) : 'custom',
            variant,
            size,
            fullWidth,
            loading,
          }),
          className
        )}
        style={customStyle}
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
          <span className={buttonIconStyles({ position: 'left' })}>{leftIcon}</span>
        )}

        {children}

        {!loading && rightIcon && (
          <span className={buttonIconStyles({ position: 'right' })}>{rightIcon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
