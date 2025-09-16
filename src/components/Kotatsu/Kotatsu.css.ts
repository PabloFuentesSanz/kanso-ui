import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/tokens.css'

export const kotatsuStyles = recipe({
  base: {
    width: '100%',
    borderRadius: vars.borderRadius.lg,
    backgroundColor: vars.color.white,
    boxShadow: vars.shadow.sm,
    overflow: 'hidden',
    border: `1px solid ${vars.color.gray200}`,
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
      },
    },

    size: {
      sm: {
        fontSize: vars.fontSize.sm,
      },
      md: {
        fontSize: vars.fontSize.base,
      },
      lg: {
        fontSize: vars.fontSize.lg,
      },
    },
  },

  defaultVariants: {
    color: 'sky',
    variant: 'default',
    size: 'md',
  },
})

export const kotatsuTableStyles = recipe({
  base: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: 'inherit',
  }
})

export const kotatsuHeaderStyles = recipe({
  base: {
    backgroundColor: 'var(--color-accent-lighter)',
    borderBottom: `2px solid var(--color-accent)`,
  }
})

export const kotatsuHeaderCellStyles = recipe({
  base: {
    padding: vars.spacing['4'],
    textAlign: 'left',
    fontWeight: vars.fontWeight.semibold,
    color: vars.color.textPrimary,
    fontSize: vars.fontSize.sm,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },

  variants: {
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
  },

  defaultVariants: {
    align: 'left',
  },
})

export const kotatsuBodyStyles = recipe({
  base: {
    backgroundColor: vars.color.white,
  }
})

export const kotatsuRowStyles = recipe({
  base: {
    borderBottom: `1px solid ${vars.color.gray200}`,
    transition: vars.transition.colors,

    ':hover': {
      backgroundColor: vars.color.gray50,
    },

    ':last-child': {
      borderBottom: 'none',
    },
  },

  variants: {
    interactive: {
      true: {
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'var(--color-accent-lighter)',
        },
        ':active': {
          backgroundColor: 'var(--color-accent-light)',
        },
      },
    },
  },
})

export const kotatsuCellStyles = recipe({
  base: {
    padding: vars.spacing['4'],
    color: vars.color.textPrimary,
    verticalAlign: 'middle',
  },

  variants: {
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
    size: {
      sm: {
        padding: vars.spacing['2'],
        fontSize: vars.fontSize.sm,
      },
      md: {
        padding: vars.spacing['4'],
        fontSize: vars.fontSize.base,
      },
      lg: {
        padding: vars.spacing['6'],
        fontSize: vars.fontSize.lg,
      },
    },
  },

  defaultVariants: {
    align: 'left',
    size: 'md',
  },
})

export const kotatsuFooterStyles = recipe({
  base: {
    backgroundColor: vars.color.gray50,
    borderTop: `1px solid ${vars.color.gray200}`,
    padding: vars.spacing['4'],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: vars.fontSize.sm,
    color: vars.color.textSecondary,
  }
})