import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../../styles/tokens.css'

export const bentoStyles = recipe({
  base: {
    display: 'grid',
    width: '100%',
    gap: vars.spacing['4'], // 16px default gap
  },

  variants: {
    columns: {
      '1': {
        gridTemplateColumns: '1fr',
      },
      '2': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      '3': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      '4': {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
      '5': {
        gridTemplateColumns: 'repeat(5, 1fr)',
      },
      '6': {
        gridTemplateColumns: 'repeat(6, 1fr)',
      },
      '12': {
        gridTemplateColumns: 'repeat(12, 1fr)',
      },
    },

    gap: {
      none: {
        gap: '0',
      },
      xs: {
        gap: vars.spacing['1'], // 4px
      },
      sm: {
        gap: vars.spacing['2'], // 8px
      },
      md: {
        gap: vars.spacing['4'], // 16px
      },
      lg: {
        gap: vars.spacing['6'], // 24px
      },
      xl: {
        gap: vars.spacing['8'], // 32px
      },
    },

    align: {
      start: {
        alignItems: 'start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },

    justify: {
      start: {
        justifyItems: 'start',
      },
      center: {
        justifyItems: 'center',
      },
      end: {
        justifyItems: 'end',
      },
      stretch: {
        justifyItems: 'stretch',
      },
    },
  },

  defaultVariants: {
    columns: '12',
    gap: 'md',
    align: 'stretch',
    justify: 'stretch',
  },
})

export const bentoItemStyles = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },

  variants: {
    span: {
      '1': {
        gridColumn: 'span 1',
      },
      '2': {
        gridColumn: 'span 2',
      },
      '3': {
        gridColumn: 'span 3',
      },
      '4': {
        gridColumn: 'span 4',
      },
      '5': {
        gridColumn: 'span 5',
      },
      '6': {
        gridColumn: 'span 6',
      },
      '7': {
        gridColumn: 'span 7',
      },
      '8': {
        gridColumn: 'span 8',
      },
      '9': {
        gridColumn: 'span 9',
      },
      '10': {
        gridColumn: 'span 10',
      },
      '11': {
        gridColumn: 'span 11',
      },
      '12': {
        gridColumn: 'span 12',
      },
    },

    rowSpan: {
      '1': {
        gridRow: 'span 1',
      },
      '2': {
        gridRow: 'span 2',
      },
      '3': {
        gridRow: 'span 3',
      },
      '4': {
        gridRow: 'span 4',
      },
    },
  },

  defaultVariants: {
    span: '1',
  },
})