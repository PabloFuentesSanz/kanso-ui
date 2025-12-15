import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/tokens.css'
import { spin } from '../../styles/global.css'

export const iconRecipe = recipe({
  base: {
    display: 'inline-block',
    verticalAlign: 'middle',
    fill: 'currentColor', // Allows color inheritance
  },

  variants: {
    size: {
      xs: { width: vars.spacing['3'], height: vars.spacing['3'] }, // 12px
      sm: { width: vars.spacing['4'], height: vars.spacing['4'] }, // 16px
      md: { width: vars.spacing['6'], height: vars.spacing['6'] }, // 24px
      lg: { width: vars.spacing['8'], height: vars.spacing['8'] }, // 32px
      xl: { width: vars.spacing['12'], height: vars.spacing['12'] }, // 48px
      '2xl': { width: vars.spacing['16'], height: vars.spacing['16'] }, // 64px
    },
    color: {
        // Use mapping similar to Button for consistency, or standard vars
        currentColor: { color: 'currentColor' },
        sakura: { color: vars.color.sakura500 },
        wasabi: { color: vars.color.wasabi500 },
        sora: { color: vars.color.sora500 },
        indigo: { color: vars.color.indigo500 },
        mikan: { color: vars.color.mikan500 },
        akane: { color: vars.color.akane500 },
        fuji: { color: vars.color.fuji500 },
        sumi: { color: vars.color.sumi500 },
        // Also allow darker/lighter shades if needed via specific logic, but base palette is good start
    },
    spin: {
        true: {
            animation: `${spin} 1s linear infinite`
        },
        false: {}
    }
  },

  defaultVariants: {
    size: 'md',
    color: 'currentColor',
    spin: 'false'
  },
})
