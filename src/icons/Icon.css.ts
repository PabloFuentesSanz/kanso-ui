import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../styles/tokens.css'

export const iconStyles = recipe({
  base: {
    display: 'inline-block',
    flexShrink: 0,
    userSelect: 'none',
    transition: vars.transition.colors,
  },
  
  variants: {
    size: {
      xs: {
        width: vars.spacing['3'],   // 12px
        height: vars.spacing['3'],
      },
      sm: {
        width: vars.spacing['4'],   // 16px
        height: vars.spacing['4'],
      },
      md: {
        width: vars.spacing['5'],   // 20px
        height: vars.spacing['5'],
      },
      lg: {
        width: vars.spacing['6'],   // 24px
        height: vars.spacing['6'],
      },
      xl: {
        width: vars.spacing['8'],   // 32px
        height: vars.spacing['8'],
      },
      '2xl': {
        width: vars.spacing['10'],  // 40px
        height: vars.spacing['10'],
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
})