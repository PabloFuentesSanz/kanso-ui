import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/tokens.css'

export const inputStyles = recipe({
  base: {
    fontFamily: 'inherit',
    fontSize: vars.fontSize.base,
    padding: `${vars.spacing['2']} ${vars.spacing['3']}`,
    borderRadius: vars.borderRadius.md,
    border: `1px solid ${vars.color.sumi300}`,
    outline: 'none',
    width: '100%',
    transition: vars.transition.all,
    backgroundColor: vars.color.yuki,
    color: vars.color.sumi900,

    ':focus': {
      borderColor: vars.color.sora500,
      boxShadow: `0 0 0 2px ${vars.color.sora100}`,
    },
    
    '::placeholder': {
       color: vars.color.sumi400
    },

    ':disabled': {
        cursor: 'not-allowed',
        backgroundColor: vars.color.sumi50,
        opacity: 0.7
    }
  },

  variants: {
    color: {
      sakura: {
        ':focus': {
            borderColor: vars.color.sakura500,
            boxShadow: `0 0 0 2px ${vars.color.sakura100}`,
        }
      },
      wasabi: {
         ':focus': {
            borderColor: vars.color.wasabi500,
            boxShadow: `0 0 0 2px ${vars.color.wasabi100}`,
        }
      },
      sora: { /* Default */ },
      indigo: {
         ':focus': {
            borderColor: vars.color.indigo500,
            boxShadow: `0 0 0 2px ${vars.color.indigo100}`,
        }
      },
      mikan: {
         ':focus': {
            borderColor: vars.color.mikan500,
            boxShadow: `0 0 0 2px ${vars.color.mikan100}`,
        }
      },
      akane: {
         ':focus': {
            borderColor: vars.color.akane500,
            boxShadow: `0 0 0 2px ${vars.color.akane100}`,
        }
      },
      fuji: {
         ':focus': {
            borderColor: vars.color.fuji500,
            boxShadow: `0 0 0 2px ${vars.color.fuji100}`,
        }
      },
      sumi: {
         ':focus': {
            borderColor: vars.color.sumi500,
            boxShadow: `0 0 0 2px ${vars.color.sumi100}`,
        }
      },
    },
    variant: {
        outline: { /* Default */ },
        filled: {
             backgroundColor: vars.color.sumi50,
             border: '1px solid transparent',
             ':focus': {
                 backgroundColor: vars.color.yuki,
                 border: `1px solid currentColor` 
             }
        },
        flushed: {
            border: 'none',
            borderBottom: `1px solid ${vars.color.sumi300}`,
            borderRadius: 0,
            paddingLeft: 0,
            paddingRight: 0,
            ':focus': {
                boxShadow: 'none',
                borderBottomColor: 'currentColor'
            }
        }
    },
    size: {
        sm: {
             padding: `${vars.spacing['1']} ${vars.spacing['2']}`,
             fontSize: vars.fontSize.sm
        },
        md: { /* Default */ },
        lg: {
            padding: `${vars.spacing['3']} ${vars.spacing['4']}`,
            fontSize: vars.fontSize.lg
        }
    }
  },

  defaultVariants: {
    color: 'sora',
    variant: 'outline',
    size: 'md'
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
      true: { width: '100%' },
      false: { width: 'auto' }
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
    color: vars.color.sumi800,
  },
  variants: {
    required: {
      true: {
        '::after': {
          content: ' *',
          color: vars.color.akane500,
        },
      },
    },
    disabled: {
      true: {
        color: vars.color.sumi400,
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
      sakura: { color: vars.color.sakura500 },
      wasabi: { color: vars.color.wasabi500 },
      sora: { color: vars.color.sora500 },
      indigo: { color: vars.color.indigo500 },
      mikan: { color: vars.color.mikan500 },
      akane: { color: vars.color.akane500 },
      fuji: { color: vars.color.fuji500 },
      sumi: { color: vars.color.sumi500 },
    },
  },
  defaultVariants: {
    color: 'sora',
  },
})