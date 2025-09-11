import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/tokens.css'

export const inputStyles = recipe({
  base: {
    display: 'flex',
    width: '100%',
    borderRadius: vars.borderRadius.md,
    border: `1px solid ${vars.color.border}`,
    backgroundColor: vars.color.background,
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.normal,
    lineHeight: vars.lineHeight.normal,
    color: vars.color.textPrimary,
    transition: vars.transition.all,
    outline: 'none',

    '::placeholder': {
      color: vars.color.textMuted,
    },

    ':focus': {
      borderColor: vars.color.focus,
      boxShadow: `0 0 0 3px ${vars.color.focusRing}`,
    },

    ':disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
      backgroundColor: vars.color.gray100,
    },
  },

  variants: {
    color: {
      sky: {
        vars: {
          '--color-main': vars.color.sky,
          '--color-hover': vars.color.skyHover,
          '--color-light': vars.color.skyLight,
          '--color-lighter': vars.color.skyLighter,
        }
      },
      lavender: {
        vars: {
          '--color-main': vars.color.lavender,
          '--color-hover': vars.color.lavenderHover,
          '--color-light': vars.color.lavenderLight,
          '--color-lighter': vars.color.lavenderLighter,
        }
      },
      sage: {
        vars: {
          '--color-main': vars.color.sage,
          '--color-hover': vars.color.sageHover,
          '--color-light': vars.color.sageLight,
          '--color-lighter': vars.color.sageLighter,
        }
      },
      amber: {
        vars: {
          '--color-main': vars.color.amber,
          '--color-hover': vars.color.amberHover,
          '--color-light': vars.color.amberLight,
          '--color-lighter': vars.color.amberLighter,
        }
      },
      coral: {
        vars: {
          '--color-main': vars.color.coral,
          '--color-hover': vars.color.coralHover,
          '--color-light': vars.color.coralLight,
          '--color-lighter': vars.color.coralLighter,
        }
      },
    },
    
    variant: {
      filled: {
        backgroundColor: 'var(--color-lighter)',
        borderColor: 'var(--color-light)',
        ':focus': {
          borderColor: 'var(--color-main)',
          backgroundColor: vars.color.white,
          boxShadow: `0 0 0 3px var(--color-light)`,
        },
        ':hover:not(:disabled)': {
          borderColor: 'var(--color-hover)',
        },
      },
      outline: {
        backgroundColor: vars.color.background,
        borderColor: 'var(--color-light)',
        ':focus': {
          borderColor: 'var(--color-main)',
          boxShadow: `0 0 0 3px var(--color-light)`,
        },
        ':hover:not(:disabled)': {
          borderColor: 'var(--color-hover)',
        },
      },
    },

    size: {
      sm: {
        height: vars.spacing['8'], // 32px
        paddingLeft: vars.spacing['3'], // 12px
        paddingRight: vars.spacing['3'],
        fontSize: vars.fontSize.sm,
      },
      md: {
        height: vars.spacing['10'], // 40px
        paddingLeft: vars.spacing['4'], // 16px
        paddingRight: vars.spacing['4'],
        fontSize: vars.fontSize.base,
      },
      lg: {
        height: vars.spacing['12'], // 48px
        paddingLeft: vars.spacing['6'], // 24px
        paddingRight: vars.spacing['6'],
        fontSize: vars.fontSize.lg,
      },
    },
  },

  defaultVariants: {
    color: 'sky',
    variant: 'outline',
    size: 'md',
  },
})

export const inputGroupStyles = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: vars.spacing['1'],
  },

  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    fullWidth: true,
  },
})

export const inputLabelStyles = recipe({
  base: {
    fontSize: vars.fontSize.sm,
    fontWeight: vars.fontWeight.medium,
    color: vars.color.textPrimary,
  },

  variants: {
    required: {
      true: {
        '::after': {
          content: ' *',
          color: vars.color.coral,
        },
      },
    },
    disabled: {
      true: {
        color: vars.color.textMuted,
        cursor: 'not-allowed',
      },
    },
  },

  defaultVariants: {
    required: false,
    disabled: false,
  },
})

export const inputMessageStyles = recipe({
  base: {
    fontSize: vars.fontSize.sm,
    lineHeight: vars.lineHeight.tight,
  },

  variants: {
    color: {
      sky: {
        color: vars.color.sky,
      },
      lavender: {
        color: vars.color.lavender,
      },
      sage: {
        color: vars.color.sage,
      },
      amber: {
        color: vars.color.amber,
      },
      coral: {
        color: vars.color.coral,
      },
    },
  },

  defaultVariants: {
    color: 'sky',
  },
})