import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Icons, IconProps } from './Icons'
import { Input } from '../Input'
import { Bento, BentoItem } from '../Bento'
import { vars } from '../../styles/tokens.css'

const meta: Meta = {
  title: 'Icon Library/Aikons',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Aikon (アイコン) - Symbols of clarity.

A comprehensive icon library designed to be lightweight, scalable, and perfectly aligned with our typography and spacing.
Includes categories for Interface, Editing, Media, Social, and more.

**Features:**
- **Tree-shakable**: Import only what you need (e.g., \`import { IconArrowUp } from 'kanso-ui'\`).
- **Sizing**: Uses t-shirt sizing (xs, sm, md, lg, xl, 2xl).
- **Coloring**: Supports Kanso palette tokens.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj

// Interactive Browser Component
const IconBrowser = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [copied, setCopied] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<IconProps['color']>('currentColor')
  const [selectedSize, setSelectedSize] = useState<IconProps['size']>('md')

  const iconNames = Object.keys(Icons) as Array<keyof typeof Icons>
  const filteredIcons = iconNames.filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCopy = (name: string) => {
    const textToCopy = `<Icons.${name} size="${selectedSize}" color="${selectedColor}" />`
    navigator.clipboard.writeText(textToCopy)
    setCopied(name)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* Controls */}
      <div
        style={{
          marginBottom: '2rem',
          padding: '1.5rem',
          backgroundColor: vars.color.yuki,
          borderRadius: vars.borderRadius.lg,
          border: `1px solid ${vars.color.sumi100}`,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <Input
          placeholder='Search icons... (e.g. arrow, user)'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          color='sora'
        />

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              Size
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: '0.25rem 0.75rem',
                    backgroundColor: selectedSize === size ? vars.color.sora100 : 'transparent',
                    border: `1px solid ${selectedSize === size ? vars.color.sora500 : vars.color.sumi200}`,
                    borderRadius: '0.25rem',
                    cursor: 'pointer',
                    fontWeight: selectedSize === size ? 'bold' : 'normal',
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}
            >
              Color
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {(
                [
                  { name: 'currentColor', hex: '#000' },
                  { name: 'sakura', hex: vars.color.sakura500 },
                  { name: 'wasabi', hex: vars.color.wasabi500 },
                  { name: 'sora', hex: vars.color.sora500 },
                  { name: 'mikan', hex: vars.color.mikan500 },
                  { name: 'indigo', hex: vars.color.indigo500 },
                ] as const
              ).map(c => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name as IconProps['color'])}
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: c.name === 'currentColor' ? '#333' : (c.hex as string), // Fix type issue with var mapping
                    border:
                      selectedColor === c.name
                        ? `2px solid ${vars.color.sumi900}`
                        : '2px solid transparent',
                    cursor: 'pointer',
                  }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <Bento columns='5' gap='md'>
        {filteredIcons.map(name => {
          const IconComponent = Icons[name]
          return (
            <BentoItem key={name}>
              <button
                onClick={() => handleCopy(name)}
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  backgroundColor: vars.color.yuki,
                  border: `1px solid ${copied === name ? vars.color.wasabi500 : vars.color.sumi100}`,
                  borderRadius: vars.borderRadius.md,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  padding: '1rem',
                  position: 'relative',
                }}
              >
                <IconComponent size={selectedSize} color={selectedColor} />
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: vars.color.sumi600,
                    wordBreak: 'break-all',
                  }}
                >
                  {name}
                </span>

                {copied === name && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '0.5rem',
                      fontSize: '0.75rem',
                      color: vars.color.wasabi600,
                      fontWeight: 'bold',
                      backgroundColor: vars.color.wasabi50,
                      padding: '0.125rem 0.375rem',
                      borderRadius: '4px',
                    }}
                  >
                    Copied!
                  </div>
                )}
              </button>
            </BentoItem>
          )
        })}
      </Bento>

      {filteredIcons.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', color: vars.color.sumi400 }}>
          No icons found for "{searchTerm}"
        </div>
      )}
    </div>
  )
}

export const Library: Story = {
  render: () => <IconBrowser />,
}
