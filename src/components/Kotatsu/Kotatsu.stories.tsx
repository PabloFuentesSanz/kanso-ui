import type { Meta, StoryObj } from '@storybook/react'
import {
  Kotatsu,
  KotatsuHeader,
  KotatsuHeaderCell,
  KotatsuBody,
  KotatsuRow,
  KotatsuCell,
  KotatsuFooter
} from './Kotatsu'
import { Button } from '../Button'

const meta: Meta<typeof Kotatsu> = {
  title: 'Components/Kotatsu (Table) 🏮',
  component: Kotatsu,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Kotatsu (こたつ) - A warm, comfortable table component inspired by traditional Japanese heated tables. Perfect for displaying structured data with a cozy, organized feel.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['sky', 'lavender', 'sage', 'amber', 'coral'],
      description: 'Accent color for the table'
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'filled', 'elevated'],
      description: 'Visual style of the table'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the table content'
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Examples
export const Default: Story = {
  render: () => (
    <Kotatsu color="sky">
      <KotatsuHeader>
        <KotatsuRow>
          <KotatsuHeaderCell>Name</KotatsuHeaderCell>
          <KotatsuHeaderCell>Role</KotatsuHeaderCell>
          <KotatsuHeaderCell align="right">Salary</KotatsuHeaderCell>
        </KotatsuRow>
      </KotatsuHeader>
      <KotatsuBody>
        <KotatsuRow>
          <KotatsuCell>Akira Tanaka</KotatsuCell>
          <KotatsuCell>Senior Developer</KotatsuCell>
          <KotatsuCell align="right">¥5,200,000</KotatsuCell>
        </KotatsuRow>
        <KotatsuRow>
          <KotatsuCell>Yuki Sato</KotatsuCell>
          <KotatsuCell>Designer</KotatsuCell>
          <KotatsuCell align="right">¥4,100,000</KotatsuCell>
        </KotatsuRow>
        <KotatsuRow>
          <KotatsuCell>Hiroshi Yamamoto</KotatsuCell>
          <KotatsuCell>Product Manager</KotatsuCell>
          <KotatsuCell align="right">¥6,000,000</KotatsuCell>
        </KotatsuRow>
      </KotatsuBody>
    </Kotatsu>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <>
      <Kotatsu color="sage" variant="outlined">
        <KotatsuHeader>
          <KotatsuRow>
            <KotatsuHeaderCell>Product</KotatsuHeaderCell>
            <KotatsuHeaderCell>Category</KotatsuHeaderCell>
            <KotatsuHeaderCell align="center">Stock</KotatsuHeaderCell>
            <KotatsuHeaderCell align="right">Price</KotatsuHeaderCell>
          </KotatsuRow>
        </KotatsuHeader>
        <KotatsuBody>
          <KotatsuRow>
            <KotatsuCell>Zen Garden Kit</KotatsuCell>
            <KotatsuCell>Meditation</KotatsuCell>
            <KotatsuCell align="center">23</KotatsuCell>
            <KotatsuCell align="right">$89.00</KotatsuCell>
          </KotatsuRow>
          <KotatsuRow>
            <KotatsuCell>Bamboo Tea Set</KotatsuCell>
            <KotatsuCell>Kitchen</KotatsuCell>
            <KotatsuCell align="center">15</KotatsuCell>
            <KotatsuCell align="right">$156.00</KotatsuCell>
          </KotatsuRow>
          <KotatsuRow>
            <KotatsuCell>Origami Paper Pack</KotatsuCell>
            <KotatsuCell>Crafts</KotatsuCell>
            <KotatsuCell align="center">47</KotatsuCell>
            <KotatsuCell align="right">$24.00</KotatsuCell>
          </KotatsuRow>
        </KotatsuBody>
      </Kotatsu>
      <KotatsuFooter>
        <span>Showing 3 of 15 items</span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button color="sage" variant="outline" size="sm">Previous</Button>
          <Button color="sage" variant="filled" size="sm">Next</Button>
        </div>
      </KotatsuFooter>
    </>
  ),
}

export const Interactive: Story = {
  render: () => (
    <Kotatsu color="lavender" variant="elevated">
      <KotatsuHeader>
        <KotatsuRow>
          <KotatsuHeaderCell>Task</KotatsuHeaderCell>
          <KotatsuHeaderCell>Assignee</KotatsuHeaderCell>
          <KotatsuHeaderCell align="center">Priority</KotatsuHeaderCell>
          <KotatsuHeaderCell align="center">Status</KotatsuHeaderCell>
        </KotatsuRow>
      </KotatsuHeader>
      <KotatsuBody>
        <KotatsuRow interactive onClick={() => alert('Task 1 clicked')}>
          <KotatsuCell>Redesign landing page</KotatsuCell>
          <KotatsuCell>Yuki Sato</KotatsuCell>
          <KotatsuCell align="center">
            <span style={{ 
              padding: '0.25rem 0.5rem', 
              borderRadius: '0.25rem', 
              backgroundColor: '#ff6b7a', 
              color: 'white', 
              fontSize: '0.75rem' 
            }}>
              High
            </span>
          </KotatsuCell>
          <KotatsuCell align="center">
            <span style={{ 
              padding: '0.25rem 0.5rem', 
              borderRadius: '0.25rem', 
              backgroundColor: '#ffc067', 
              color: 'white', 
              fontSize: '0.75rem' 
            }}>
              In Progress
            </span>
          </KotatsuCell>
        </KotatsuRow>
        <KotatsuRow interactive onClick={() => alert('Task 2 clicked')}>
          <KotatsuCell>Update documentation</KotatsuCell>
          <KotatsuCell>Akira Tanaka</KotatsuCell>
          <KotatsuCell align="center">
            <span style={{ 
              padding: '0.25rem 0.5rem', 
              borderRadius: '0.25rem', 
              backgroundColor: '#a8e6b0', 
              color: 'white', 
              fontSize: '0.75rem' 
            }}>
              Medium
            </span>
          </KotatsuCell>
          <KotatsuCell align="center">
            <span style={{ 
              padding: '0.25rem 0.5rem', 
              borderRadius: '0.25rem', 
              backgroundColor: '#a8d8ea', 
              color: 'white', 
              fontSize: '0.75rem' 
            }}>
              Review
            </span>
          </KotatsuCell>
        </KotatsuRow>
      </KotatsuBody>
    </Kotatsu>
  ),
}

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['sky', 'lavender', 'sage', 'amber', 'coral'] as const).map((color) => (
        <div key={color}>
          <h3 style={{ 
            marginBottom: '1rem', 
            textTransform: 'capitalize',
            color: `var(--color-${color})`
          }}>
            {color} Kotatsu
          </h3>
          <Kotatsu color={color} variant="filled">
            <KotatsuHeader>
              <KotatsuRow>
                <KotatsuHeaderCell>Feature</KotatsuHeaderCell>
                <KotatsuHeaderCell align="right">Value</KotatsuHeaderCell>
              </KotatsuRow>
            </KotatsuHeader>
            <KotatsuBody>
              <KotatsuRow>
                <KotatsuCell>Color Theme</KotatsuCell>
                <KotatsuCell align="right" style={{ textTransform: 'capitalize' }}>{color}</KotatsuCell>
              </KotatsuRow>
              <KotatsuRow>
                <KotatsuCell>Style</KotatsuCell>
                <KotatsuCell align="right">Filled</KotatsuCell>
              </KotatsuRow>
            </KotatsuBody>
          </Kotatsu>
        </div>
      ))}
    </div>
  ),
}

export const StyleVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
      {(['default', 'outlined', 'filled', 'elevated'] as const).map((variant) => (
        <div key={variant}>
          <h4 style={{ marginBottom: '1rem', textTransform: 'capitalize' }}>
            {variant}
          </h4>
          <Kotatsu color="amber" variant={variant}>
            <KotatsuHeader>
              <KotatsuRow>
                <KotatsuHeaderCell>Item</KotatsuHeaderCell>
                <KotatsuHeaderCell align="right">Quantity</KotatsuHeaderCell>
              </KotatsuRow>
            </KotatsuHeader>
            <KotatsuBody>
              <KotatsuRow>
                <KotatsuCell>Green Tea</KotatsuCell>
                <KotatsuCell align="right">12</KotatsuCell>
              </KotatsuRow>
              <KotatsuRow>
                <KotatsuCell>Matcha Powder</KotatsuCell>
                <KotatsuCell align="right">8</KotatsuCell>
              </KotatsuRow>
            </KotatsuBody>
          </Kotatsu>
        </div>
      ))}
    </div>
  ),
}

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <h4 style={{ marginBottom: '1rem' }}>Size: {size}</h4>
          <Kotatsu color="coral" size={size}>
            <KotatsuHeader>
              <KotatsuRow>
                <KotatsuHeaderCell>Name</KotatsuHeaderCell>
                <KotatsuHeaderCell align="right">Score</KotatsuHeaderCell>
              </KotatsuRow>
            </KotatsuHeader>
            <KotatsuBody>
              <KotatsuRow>
                <KotatsuCell size={size}>Zen Master</KotatsuCell>
                <KotatsuCell size={size} align="right">95</KotatsuCell>
              </KotatsuRow>
              <KotatsuRow>
                <KotatsuCell size={size}>Harmony Seeker</KotatsuCell>
                <KotatsuCell size={size} align="right">87</KotatsuCell>
              </KotatsuRow>
            </KotatsuBody>
          </Kotatsu>
        </div>
      ))}
    </div>
  ),
}