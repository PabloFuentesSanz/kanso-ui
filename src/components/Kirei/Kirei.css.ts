import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/tokens.css'

export const kireiStyles = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: vars.color.white,
    borderRadius: vars.borderRadius.lg,
    border: `1px solid ${vars.color.gray200}`,
    overflow: 'hidden',
    transition: vars.transition.all,
    boxShadow: vars.shadow.sm,
    
    ':hover': {
      boxShadow: vars.shadow.md,
    },
  },

  variants: {
    color: {
      sky: {
        vars: {
          '--color-accent': vars.color.sky,
          '--color-accent-light': vars.color.skyLight,
          '--color-accent-lighter': vars.color.skyLighter,
        }
      },
      lavender: {
        vars: {
          '--color-accent': vars.color.lavender,
          '--color-accent-light': vars.color.lavenderLight,
          '--color-accent-lighter': vars.color.lavenderLighter,
        }
      },
      sage: {
        vars: {
          '--color-accent': vars.color.sage,
          '--color-accent-light': vars.color.sageLight,
          '--color-accent-lighter': vars.color.sageLighter,
        }
      },
      amber: {
        vars: {
          '--color-accent': vars.color.amber,
          '--color-accent-light': vars.color.amberLight,
          '--color-accent-lighter': vars.color.amberLighter,
        }
      },
      coral: {
        vars: {
          '--color-accent': vars.color.coral,
          '--color-accent-light': vars.color.coralLight,
          '--color-accent-lighter': vars.color.coralLighter,
        }
      },
    },

    variant: {
      default: {},
      outlined: {
        border: `2px solid var(--color-accent)`,
      },
      filled: {
        backgroundColor: 'var(--color-accent-lighter)',
        border: `1px solid var(--color-accent-light)`,
      },
      elevated: {
        boxShadow: vars.shadow.lg,
        ':hover': {
          boxShadow: vars.shadow.xl,
          transform: 'translateY(-2px)',
        },
      },
    },

    padding: {
      none: {
        padding: '0',
      },
      sm: {
        padding: vars.spacing['4'],
      },
      md: {
        padding: vars.spacing['6'],
      },
      lg: {
        padding: vars.spacing['8'],
      },
    },

    height: {
      auto: {},
      full: {
        height: '100%',
      },
      fit: {
        height: 'fit-content',
      },
    },

    interactive: {
      true: {
        cursor: 'pointer',
        ':hover': {
          transform: 'translateY(-1px)',
          boxShadow: vars.shadow.md,
        },
        ':active': {
          transform: 'translateY(0)',
        },
      },
    },
  },

  defaultVariants: {
    color: 'sky',
    variant: 'default',
    padding: 'none',
    height: 'auto',
    interactive: false,
  },
})

export const kireiHeaderStyles = recipe({
  base: {
    padding: vars.spacing['6'],
    paddingBottom: vars.spacing['4'],
    borderBottom: `1px solid ${vars.color.gray100}`,
  },

  variants: {
    accent: {
      true: {
        borderBottom: `2px solid var(--color-accent)`,
        backgroundColor: 'var(--color-accent-lighter)',
      },
    },
  },
})

export const kireiBodyStyles = recipe({
  base: {
    padding: vars.spacing['6'],
    paddingTop: vars.spacing['4'],
    flex: 1,
  },
})

export const kireiFooterStyles = recipe({
  base: {
    padding: vars.spacing['6'],
    paddingTop: vars.spacing['4'],
    borderTop: `1px solid ${vars.color.gray100}`,
    backgroundColor: vars.color.gray50,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: vars.spacing['2'],
  },
})