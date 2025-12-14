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
          '--color-accent': vars.color.sora400,
          '--color-accent-light': vars.color.sora200,
          '--color-accent-lighter': vars.color.sora50,
        }
      },
      lavender: {
        vars: {
          '--color-accent': vars.color.fuji400,
          '--color-accent-light': vars.color.fuji200,
          '--color-accent-lighter': vars.color.fuji50,
        }
      },
      sage: {
        vars: {
          '--color-accent': vars.color.wasabi400,
          '--color-accent-light': vars.color.wasabi200,
          '--color-accent-lighter': vars.color.wasabi50,
        }
      },
      amber: {
        vars: {
          '--color-accent': vars.color.mikan400, // Mikan is Orange/Amber
          '--color-accent-light': vars.color.mikan200,
          '--color-accent-lighter': vars.color.mikan50,
        }
      },
      coral: {
        vars: {
          '--color-accent': vars.color.akane400, // Akane is Red/Coral
          '--color-accent-light': vars.color.akane200,
          '--color-accent-lighter': vars.color.akane50,
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