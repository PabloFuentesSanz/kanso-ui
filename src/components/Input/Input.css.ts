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

    variant: {
      default: {},
      error: {
        borderColor: vars.color.error,
        ':focus': {
          borderColor: vars.color.error,
          boxShadow: `0 0 0 3px ${vars.color.errorLight}`,
        },
      },
      success: {
        borderColor: vars.color.success,
        ':focus': {
          borderColor: vars.color.success,
          boxShadow: `0 0 0 3px ${vars.color.successLight}`,
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'default',
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
          color: vars.color.error,
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
    variant: {
      default: {
        color: vars.color.textMuted,
      },
      error: {
        color: vars.color.error,
      },
      success: {
        color: vars.color.success,
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})