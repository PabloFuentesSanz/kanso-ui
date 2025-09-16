import type { Meta, StoryObj } from '@storybook/react'
import { Tatami } from './components/Tatami'
import { Kanji } from './components/Kanji'
import { vars } from './styles/tokens.css'

const meta: Meta = {
  title: 'Design System/Colors (Iro) 🎨',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Iro (色) - Our Japanese-inspired color palette. Each color is carefully chosen to evoke specific emotions and create harmony in your designs.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Helper function to convert hex to RGB
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

// Color card component
const ColorCard = ({
  name,
  nameJapanese,
  description,
  hex,
  cssVar,
  colorKey,
}: {
  name: string
  nameJapanese: string
  description: string
  hex: string
  cssVar: string
  colorKey: string
}) => {
  const rgb = hexToRgb(hex)
  const rgbString = rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : ''

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Tatami
      p='lg'
      bg='white'
      rounded='lg'
      shadow='md'
      border='sm'
      borderColor='primary'
      style={{ minWidth: '280px' }}
    >
      {/* Color Swatch */}

      {/* Color Info */}
      <Tatami display='flex' direction='column' gap='sm'>
        <Tatami h='60px' bg={colorKey} rounded='md' >
          <Kanji as='h3' size='lg' weight='semibold' color='white'>
            {name}: {nameJapanese}
          </Kanji>
        </Tatami>
        <Kanji size='sm' color='secondary'>
          {description}
        </Kanji>

        {/* Color Values */}
        <Tatami display='flex' direction='column' gap='xs' mt='md'>
          <Tatami
            display='flex'
            justify='between'
            align='center'
            p='xs'
            bg='gray'
            rounded='sm'
            style={{ cursor: 'pointer' }}
            onClick={() => copyToClipboard(hex)}
          >
            <Kanji size='sm' weight='medium'>
              HEX:
            </Kanji>
            <Kanji size='sm' family='mono'>
              {hex}
            </Kanji>
          </Tatami>

          <Tatami
            display='flex'
            justify='between'
            align='center'
            p='xs'
            bg='gray'
            rounded='sm'
            style={{ cursor: 'pointer' }}
            onClick={() => copyToClipboard(rgbString)}
          >
            <Kanji size='sm' weight='medium'>
              RGB:
            </Kanji>
            <Kanji size='sm' family='mono'>
              {rgbString}
            </Kanji>
          </Tatami>

          <Tatami
            display='flex'
            justify='between'
            align='center'
            p='xs'
            bg='gray'
            rounded='sm'
            style={{ cursor: 'pointer' }}
            onClick={() => copyToClipboard(`color="${colorKey}"`)}
          >
            <Kanji size='sm' weight='medium'>
              Class:
            </Kanji>
            <Kanji size='sm' family='mono'>
              color="{colorKey}"
            </Kanji>
          </Tatami>

          <Tatami
            display='flex'
            justify='between'
            align='center'
            p='xs'
            bg='gray'
            rounded='sm'
            style={{ cursor: 'pointer' }}
            onClick={() => copyToClipboard(cssVar)}
          >
            <Kanji size='sm' weight='medium'>
              CSS Var:
            </Kanji>
            <Kanji size='sm' family='mono'>
              {cssVar}
            </Kanji>
          </Tatami>
        </Tatami>

        <Kanji size='xs' color='muted' align='center' mt='sm'>
          Click any value to copy
        </Kanji>
      </Tatami>
    </Tatami>
  )
}

// Main color palette - we'll update these names to be more Japanese
const mainColors = [
  {
    name: 'Sky',
    nameJapanese: '空',
    description: 'Calm and serene like morning sky',
    hex: vars.color.sky,
    cssVar: 'vars.color.sky',
    colorKey: 'sky',
  },
  {
    name: 'Lavender',
    nameJapanese: 'ラベンダー',
    description: 'Elegant and peaceful purple',
    hex: vars.color.lavender,
    cssVar: 'vars.color.lavender',
    colorKey: 'lavender',
  },
  {
    name: 'Wasabi',
    nameJapanese: 'わさび',
    description: 'Natural and balanced green',
    hex: vars.color.wasabi,
    cssVar: 'vars.color.wasabi',
    colorKey: 'wasabi',
  },
  {
    name: 'Amber',
    nameJapanese: '琥珀',
    description: 'Warm and inviting golden color',
    hex: vars.color.amber,
    cssVar: 'vars.color.amber',
    colorKey: 'amber',
  },
  {
    name: 'Coral',
    nameJapanese: '珊瑚',
    description: 'Vibrant and energetic coral red',
    hex: vars.color.coral,
    cssVar: 'vars.color.coral',
    colorKey: 'coral',
  },
]

// Additional nature-inspired colors
const accentColors = [
  {
    name: 'Peach',
    nameJapanese: '桃',
    description: 'Soft peach blossom',
    hex: vars.color.peach,
    cssVar: 'vars.color.peach',
    colorKey: 'peach',
  },
  {
    name: 'Mint',
    nameJapanese: 'ミント',
    description: 'Fresh mint green',
    hex: vars.color.mint,
    cssVar: 'vars.color.mint',
    colorKey: 'mint',
  },
  {
    name: 'Lilac',
    nameJapanese: 'ライラック',
    description: 'Delicate lilac purple',
    hex: vars.color.lilac,
    cssVar: 'vars.color.lilac',
    colorKey: 'lilac',
  },
  {
    name: 'Cream',
    nameJapanese: 'クリーム',
    description: 'Warm cream color',
    hex: vars.color.cream,
    cssVar: 'vars.color.cream',
    colorKey: 'cream',
  },
  {
    name: 'Rose',
    nameJapanese: 'バラ',
    description: 'Gentle rose pink',
    hex: vars.color.rose,
    cssVar: 'vars.color.rose',
    colorKey: 'rose',
  },
  {
    name: 'Seafoam',
    nameJapanese: '海泡',
    description: 'Ocean seafoam blue-green',
    hex: vars.color.seafoam,
    cssVar: 'vars.color.seafoam',
    colorKey: 'seafoam',
  },
]

export const MainColorPalette: Story = {
  render: () => (
    <Tatami display='flex' direction='column' gap='xl'>
      <Tatami>
        <Kanji as='h1' size='3xl' weight='bold' textAlign='center' mb='lg'>
          Color Palette: 色彩パレット
        </Kanji>
        <Kanji size='lg' textAlign='center' color='secondary' mb='xl'>
          Our five main colors inspired by Japanese aesthetics and nature
        </Kanji>
      </Tatami>

      <Tatami display='flex' gap='lg' wrap='wrap' justify='center'>
        {mainColors.map(color => (
          <ColorCard key={color.colorKey} {...color} />
        ))}
      </Tatami>
    </Tatami>
  ),
}

export const AccentColors: Story = {
  render: () => (
    <Tatami display='flex' direction='column' gap='xl'>
      <Tatami>
        <Kanji as='h2' size='2xl' weight='bold' textAlign='center' mb='lg'>
          Accent Colors: アクセントカラー
        </Kanji>
        <Kanji size='lg' textAlign='center' color='secondary' mb='xl'>
          Additional nature-inspired colors for variety and expression
        </Kanji>
      </Tatami>

      <Tatami display='flex' gap='lg' wrap='wrap' justify='center'>
        {accentColors.map(color => (
          <ColorCard key={color.colorKey} {...color} />
        ))}
      </Tatami>
    </Tatami>
  ),
}

export const ColorUsageGuide: Story = {
  render: () => (
    <Tatami display='flex' direction='column' gap='xl' maxW='2xl' mx='auto'>
      <Kanji as='h2' size='2xl' weight='bold' textAlign='center'>
        Usage Guide: 使用ガイド
      </Kanji>

      <Tatami display='flex' direction='column' gap='lg'>
        <Tatami p='lg' bg='primary' rounded='lg' color='sky'>
          <Kanji as='h3' size='lg' weight='semibold' mb='md'>
            Sky (空) - Primary Actions
          </Kanji>
          <Kanji>
            Use for primary buttons, links, and call-to-action elements. Represents clarity, trust,
            and calmness.
          </Kanji>
        </Tatami>

        <Tatami p='lg' bg='primary' rounded='lg' color='lavender'>
          <Kanji as='h3' size='lg' weight='semibold' mb='md'>
            Lavender (ラベンダー) - Elegance
          </Kanji>
          <Kanji>
            Perfect for premium features, elegant designs, and sophisticated interfaces. Conveys
            luxury and refinement.
          </Kanji>
        </Tatami>

        <Tatami p='lg' bg='primary' rounded='lg' color='wasabi'>
          <Kanji as='h3' size='lg' weight='semibold' mb='md'>
            Wasabi (わさび) - Success & Nature
          </Kanji>
          <Kanji>
            Ideal for success states, environmental themes, and natural elements. Represents growth,
            harmony, and balance.
          </Kanji>
        </Tatami>

        <Tatami p='lg' bg='primary' rounded='lg' color='amber'>
          <Kanji as='h3' size='lg' weight='semibold' mb='md'>
            Amber (琥珀) - Warmth & Warning
          </Kanji>
          <Kanji>
            Great for warnings, highlights, and warm inviting elements. Evokes attention without
            alarm.
          </Kanji>
        </Tatami>

        <Tatami p='lg' bg='primary' rounded='lg' color='coral'>
          <Kanji as='h3' size='lg' weight='semibold' mb='md'>
            Coral (珊瑚) - Energy & Alerts
          </Kanji>
          <Kanji>
            Use for errors, important alerts, and energetic call-to-actions. Commands attention and
            conveys urgency.
          </Kanji>
        </Tatami>
      </Tatami>
    </Tatami>
  ),
}

export const AllColors: Story = {
  render: () => (
    <Tatami display='flex' direction='column' gap='xl'>
      <Tatami>
        <Kanji as='h1' size='3xl' weight='bold' textAlign='center' mb='lg'>
          Complete Color System: 完全色彩システム
        </Kanji>
        <Kanji size='lg' textAlign='center' color='secondary' mb='xl'>
          All colors in our Japanese-inspired design system
        </Kanji>
      </Tatami>

      <Tatami>
        <Kanji as='h2' size='xl' weight='semibold' mb='lg'>
          Main Palette: メインパレット
        </Kanji>
        <Tatami display='flex' gap='lg' wrap='wrap' justify='center' mb='xl'>
          {mainColors.map(color => (
            <ColorCard key={color.colorKey} {...color} />
          ))}
        </Tatami>
      </Tatami>

      <Tatami>
        <Kanji as='h2' size='xl' weight='semibold' mb='lg'>
          Accent Colors: アクセントカラー
        </Kanji>
        <Tatami display='flex' gap='lg' wrap='wrap' justify='center'>
          {accentColors.map(color => (
            <ColorCard key={color.colorKey} {...color} />
          ))}
        </Tatami>
      </Tatami>
    </Tatami>
  ),
}
