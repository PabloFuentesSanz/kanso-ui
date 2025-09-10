import React from 'react'
import type { Decorator } from '@storybook/react'
import { lightTheme, darkTheme } from '../src/styles'

export const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light'
  const themeClass = theme === 'dark' ? darkTheme : lightTheme

  return (
    <div className={themeClass}>
      <Story />
    </div>
  )
}