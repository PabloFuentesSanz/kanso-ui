import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/tokens.css'
import { spin } from '../../styles/global.css'

export const buttonStyles = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: vars.borderRadius.md,
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontWeight: vars.fontWeight.medium,
    textDecoration: 'none',
    textAlign: 'center',
    verticalAlign: 'middle',
    userSelect: 'none',
    transition: vars.transition.all,
    position: 'relative',
    overflow: 'hidden',
    
    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },
    
    ':focus-visible': {
      outline: `2px solid ${vars.color.focus}`,
      outlineOffset: '2px',
    },
  },
  
  variants: {
    color: {
      sky: {
        vars: {
          '--color-main': vars.color.sky,
          '--color-hover': vars.color.skyHover,
          '--color-active': vars.color.skyActive,
          '--color-light': vars.color.skyLight,
          '--color-lighter': vars.color.skyLighter,
        }
      },
      lavender: {
        vars: {
          '--color-main': vars.color.lavender,
          '--color-hover': vars.color.lavenderHover,
          '--color-active': vars.color.lavenderActive,
          '--color-light': vars.color.lavenderLight,
          '--color-lighter': vars.color.lavenderLighter,
        }
      },
      sage: {
        vars: {
          '--color-main': vars.color.sage,
          '--color-hover': vars.color.sageHover,
          '--color-active': vars.color.sageActive,
          '--color-light': vars.color.sageLight,
          '--color-lighter': vars.color.sageLighter,
        }
      },
      amber: {
        vars: {
          '--color-main': vars.color.amber,
          '--color-hover': vars.color.amberHover,
          '--color-active': vars.color.amberActive,
          '--color-light': vars.color.amberLight,
          '--color-lighter': vars.color.amberLighter,
        }
      },
      coral: {
        vars: {
          '--color-main': vars.color.coral,
          '--color-hover': vars.color.coralHover,
          '--color-active': vars.color.coralActive,
          '--color-light': vars.color.coralLight,
          '--color-lighter': vars.color.coralLighter,
        }
      },
    },
    
    variant: {
      filled: {
        backgroundColor: 'var(--color-main)',
        color: vars.color.white,
        ':hover:not(:disabled)': {
          backgroundColor: 'var(--color-hover)',
        },
        ':active:not(:disabled)': {
          backgroundColor: 'var(--color-active)',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        color: 'var(--color-main)',
        border: '1px solid var(--color-main)',
        ':hover:not(:disabled)': {
          backgroundColor: 'var(--color-main)',
          color: vars.color.white,
        },
        ':active:not(:disabled)': {
          backgroundColor: 'var(--color-active)',
          borderColor: 'var(--color-active)',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--color-main)',
        ':hover:not(:disabled)': {
          backgroundColor: 'var(--color-lighter)',
        },
        ':active:not(:disabled)': {
          backgroundColor: 'var(--color-light)',
        },
      },
    },
    
    size: {
      sm: {
        height: vars.spacing['8'],     // 32px
        paddingLeft: vars.spacing['3'], // 12px
        paddingRight: vars.spacing['3'],
        fontSize: vars.fontSize.sm,
        gap: vars.spacing['2'],        // 8px
      },
      
      md: {
        height: vars.spacing['10'],    // 40px
        paddingLeft: vars.spacing['4'], // 16px
        paddingRight: vars.spacing['4'],
        fontSize: vars.fontSize.base,
        gap: vars.spacing['2'],        // 8px
      },
      
      lg: {
        height: vars.spacing['12'],    // 48px
        paddingLeft: vars.spacing['6'], // 24px
        paddingRight: vars.spacing['6'],
        fontSize: vars.fontSize.lg,
        gap: vars.spacing['3'],        // 12px
      },
    },
    
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    
    loading: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
  
  defaultVariants: {
    color: 'sky',
    variant: 'filled',
    size: 'md',
    fullWidth: false,
    loading: false,
  },
})

export const buttonIconStyles = recipe({
  base: {
    display: 'inline-flex',
  },
  
  variants: {
    position: {
      left: {},
      right: {},
      only: {},
    },
    
    loading: {
      true: {
        animation: `${spin} 1s linear infinite`,
      },
    },
  },
  
  defaultVariants: {
    position: 'left',
    loading: false,
  },
})