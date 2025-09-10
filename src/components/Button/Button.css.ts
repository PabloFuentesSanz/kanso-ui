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
    variant: {
      primary: {
        backgroundColor: vars.color.primary,
        color: vars.color.white,
        
        ':hover:not(:disabled)': {
          backgroundColor: vars.color.primaryHover,
        },
        
        ':active:not(:disabled)': {
          backgroundColor: vars.color.primaryActive,
        },
      },
      
      secondary: {
        backgroundColor: vars.color.secondary,
        color: vars.color.white,
        
        ':hover:not(:disabled)': {
          backgroundColor: vars.color.secondaryHover,
        },
        
        ':active:not(:disabled)': {
          backgroundColor: vars.color.secondaryActive,
        },
      },
      
      outline: {
        backgroundColor: 'transparent',
        color: vars.color.primary,
        border: `1px solid ${vars.color.primary}`,
        
        ':hover:not(:disabled)': {
          backgroundColor: vars.color.primary,
          color: vars.color.white,
        },
        
        ':active:not(:disabled)': {
          backgroundColor: vars.color.primaryActive,
          borderColor: vars.color.primaryActive,
        },
      },
      
      ghost: {
        backgroundColor: 'transparent',
        color: vars.color.primary,
        
        ':hover:not(:disabled)': {
          backgroundColor: vars.color.primaryLighter,
        },
        
        ':active:not(:disabled)': {
          backgroundColor: vars.color.primaryLight,
        },
      },
      
      destructive: {
        backgroundColor: vars.color.error,
        color: vars.color.white,
        
        ':hover:not(:disabled)': {
          backgroundColor: vars.color.errorHover,
        },
        
        ':active:not(:disabled)': {
          backgroundColor: vars.color.errorActive,
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
    variant: 'primary',
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