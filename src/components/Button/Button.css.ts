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
      sakura: {
        vars: {
          '--color-main': vars.color.sakura500,
          '--color-hover': vars.color.sakura600,
          '--color-active': vars.color.sakura700,
          '--color-light': vars.color.sakura100,
          '--color-lighter': vars.color.sakura50,
          '--color-text': vars.color.sakura900,
        }
      },
      wasabi: {
        vars: {
          '--color-main': vars.color.wasabi500,
          '--color-hover': vars.color.wasabi600,
          '--color-active': vars.color.wasabi700,
          '--color-light': vars.color.wasabi100,
          '--color-lighter': vars.color.wasabi50,
          '--color-text': vars.color.wasabi900,
        }
      },
      sora: {
        vars: {
          '--color-main': vars.color.sora500,
          '--color-hover': vars.color.sora600,
          '--color-active': vars.color.sora700,
          '--color-light': vars.color.sora100,
          '--color-lighter': vars.color.sora50,
          '--color-text': vars.color.sora900,
        }
      },
      indigo: {
        vars: {
          '--color-main': vars.color.indigo500,
          '--color-hover': vars.color.indigo600,
          '--color-active': vars.color.indigo700,
          '--color-light': vars.color.indigo100,
          '--color-lighter': vars.color.indigo50,
          '--color-text': vars.color.indigo900,
        }
      },
      mikan: {
        vars: {
          '--color-main': vars.color.mikan500,
          '--color-hover': vars.color.mikan600,
          '--color-active': vars.color.mikan700,
          '--color-light': vars.color.mikan100,
          '--color-lighter': vars.color.mikan50,
          '--color-text': vars.color.mikan900,
        }
      },
      akane: {
        vars: {
          '--color-main': vars.color.akane500,
          '--color-hover': vars.color.akane600,
          '--color-active': vars.color.akane700,
          '--color-light': vars.color.akane100,
          '--color-lighter': vars.color.akane50,
          '--color-text': vars.color.akane900,
        }
      },
      fuji: {
        vars: {
          '--color-main': vars.color.fuji500,
          '--color-hover': vars.color.fuji600,
          '--color-active': vars.color.fuji700,
          '--color-light': vars.color.fuji100,
          '--color-lighter': vars.color.fuji50,
          '--color-text': vars.color.fuji900,
        }
      },
      sumi: { // Neutral/Grayscale
        vars: {
          '--color-main': vars.color.sumi500,
          '--color-hover': vars.color.sumi600,
          '--color-active': vars.color.sumi700,
          '--color-light': vars.color.sumi100,
          '--color-lighter': vars.color.sumi50,
          '--color-text': vars.color.sumi900,
        }
      },
      custom: {
        // Variables will be injected via inline style
      },
    },
    
    variant: {
      filled: {
        backgroundColor: 'var(--color-main)',
        color: vars.color.yuki,
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
          color: vars.color.yuki,
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
    color: 'sora',
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