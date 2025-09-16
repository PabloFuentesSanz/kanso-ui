import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'
import logo from './bigLogo.png'

const kansoTheme = create({
  base: 'dark',
  brandTitle: 'Kanso UI',
  brandImage: logo,
  brandUrl: 'https://github.com/pablofuentessanz/kanso-ui',
  colorPrimary: '#a5c9ff',
  colorSecondary: '#ff8da1',
})

addons.setConfig({
  theme: kansoTheme,
})
