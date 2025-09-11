import { globalStyle, keyframes } from '@vanilla-extract/css'
import { vars } from './tokens.css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('html', {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: vars.fontSize.base,
  lineHeight: vars.lineHeight.normal,
  color: vars.color.textPrimary,
  backgroundColor: vars.color.background,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      scrollBehavior: 'auto',
    },
  },
})

globalStyle('body', {
  margin: 0,
  padding: 0,
  textRendering: 'optimizeSpeed',
  lineHeight: vars.lineHeight.normal,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.tight,
  color: vars.color.textPrimary,
})

globalStyle('p, span, div', {
  margin: 0,
  color: vars.color.textPrimary,
})

globalStyle('button', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  margin: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
})

globalStyle('input, textarea, select', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  margin: 0,
})

globalStyle('a', {
  color: vars.color.sky,
  textDecoration: 'underline',
  transition: vars.transition.colors,
})

globalStyle('a:hover', {
  color: vars.color.skyHover,
})

globalStyle('a:focus', {
  outline: `2px solid ${vars.color.focus}`,
  outlineOffset: '2px',
})

globalStyle('img', {
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
})

globalStyle('svg', {
  display: 'block',
})

globalStyle('*:focus-visible', {
  outline: `2px solid ${vars.color.focus}`,
  outlineOffset: '2px',
  borderRadius: vars.borderRadius.sm,
})

export const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})