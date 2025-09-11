import type { Meta, StoryObj } from '@storybook/react'
import { Kirei, KireiHeader, KireiBody, KireiFooter } from './Kirei'
import { Button } from '../Button'

const meta: Meta<typeof Kirei> = {
  title: 'Components/Kirei (Card) ✨',
  component: Kirei,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Kirei (綺麗) means "beautiful" or "clean" in Japanese. A versatile card component for displaying content in an organized, elegant way.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['sky', 'lavender', 'sage', 'amber', 'coral'],
      description: 'Accent color for the card',
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'filled', 'elevated'],
      description: 'Visual style of the card',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Internal padding',
    },
    height: {
      control: 'select',
      options: ['auto', 'full', 'fit'],
      description: 'Height behavior of the card',
    },
    interactive: {
      control: 'boolean',
      description: 'Make the card clickable with hover effects',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Examples
export const Default: Story = {
  args: {
    children: (
      <>
        <KireiHeader>
          <h3>Beautiful Card</h3>
        </KireiHeader>
        <KireiBody>
          <p>
            This is a Kirei (beautiful) card component. It provides a clean, elegant way to display
            content with proper spacing and visual hierarchy.
          </p>
        </KireiBody>
      </>
    ),
  },
}

export const WithAllSections: Story = {
  render: () => (
    <Kirei color='lavender' variant='outlined' style={{ width: '400px' }}>
      <KireiHeader accent>
        <h3>Complete Card</h3>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem', opacity: 0.8 }}>
          With header, body, and footer
        </p>
      </KireiHeader>
      <KireiBody>
        <p>
          This card demonstrates all available sections: header with accent, body content, and
          footer with actions.
        </p>
        <p>The accent header adds a subtle color touch that ties into the overall theme.</p>
      </KireiBody>
      <KireiFooter>
        <Button color='lavender' variant='outline' size='sm'>
          Cancel
        </Button>
        <Button color='lavender' variant='filled' size='sm'>
          Confirm
        </Button>
      </KireiFooter>
    </Kirei>
  ),
}

// Color Variants
export const ColorVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        width: '800px',
      }}
    >
      {(['sky', 'lavender', 'sage', 'amber', 'coral'] as const).map(color => (
        <Kirei key={color} color={color} variant='filled'>
          <KireiHeader accent>
            <h4 style={{ textTransform: 'capitalize' }}>{color}</h4>
          </KireiHeader>
          <KireiBody>
            <p style={{ fontSize: '0.875rem' }}>
              A {color} themed Kirei card showcasing the beautiful color palette.
            </p>
          </KireiBody>
        </Kirei>
      ))}
    </div>
  ),
}

// Style Variants
export const StyleVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem',
        width: '600px',
      }}
    >
      {(['default', 'outlined', 'filled', 'elevated'] as const).map(variant => (
        <Kirei key={variant} color='sage' variant={variant}>
          <KireiHeader>
            <h4 style={{ textTransform: 'capitalize' }}>{variant}</h4>
          </KireiHeader>
          <KireiBody>
            <p style={{ fontSize: '0.875rem' }}>
              The {variant} variant provides a unique visual style while maintaining the clean Kirei
              aesthetic.
            </p>
          </KireiBody>
        </Kirei>
      ))}
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', width: '600px' }}>
      <Kirei color='coral' variant='elevated' interactive onClick={() => alert('Kirei clicked!')}>
        <KireiBody>
          <h4>Interactive Card</h4>
          <p>Click me! I have hover effects and cursor pointer.</p>
        </KireiBody>
      </Kirei>
      <Kirei color='amber' variant='outlined'>
        <KireiBody>
          <h4>Static Card</h4>
          <p>I'm just a regular card without interaction.</p>
        </KireiBody>
      </Kirei>
    </div>
  ),
}

export const Dashboard: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        width: '900px',
      }}
    >
      <Kirei color='sky' variant='elevated'>
        <KireiHeader accent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4>Users</h4>
            <span style={{ fontSize: '2rem' }}>👥</span>
          </div>
        </KireiHeader>
        <KireiBody>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>1,234</div>
          <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>+12% from last month</p>
        </KireiBody>
      </Kirei>

      <Kirei color='amber' variant='elevated'>
        <KireiHeader accent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4>Revenue</h4>
            <span style={{ fontSize: '2rem' }}>💰</span>
          </div>
        </KireiHeader>
        <KireiBody>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>$45.2K</div>
          <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>+8% from last month</p>
        </KireiBody>
      </Kirei>

      <Kirei color='sage' variant='elevated'>
        <KireiHeader accent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4>Orders</h4>
            <span style={{ fontSize: '2rem' }}>📦</span>
          </div>
        </KireiHeader>
        <KireiBody>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>542</div>
          <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>+15% from last month</p>
        </KireiBody>
      </Kirei>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Dashboard-style cards perfect for displaying metrics and stats',
      },
    },
  },
}

export const ProductCard: Story = {
  render: () => (
    <Kirei color='lavender' variant='elevated' interactive style={{ width: '300px' }}>
      <div
        style={{
          height: '200px',
          background: 'linear-gradient(135deg, #c4a7d4, #e6ddf1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
        }}
      >
        🌸
      </div>
      <KireiBody>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Sakura Collection</h3>
        <p style={{ margin: '0 0 1rem 0', fontSize: '0.875rem', opacity: 0.8 }}>
          Beautiful cherry blossom inspired items for your home
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>$59.99</span>
          <Button color='lavender' size='sm'>
            Add to Cart
          </Button>
        </div>
      </KireiBody>
    </Kirei>
  ),
}

export const HeightVariants: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        height: '400px',
      }}
    >
      <Kirei color='sky' variant='outlined' height='auto'>
        <KireiHeader>
          <h4>Height: Auto</h4>
        </KireiHeader>
        <KireiBody>
          <p>This card takes up only the space it needs for its content.</p>
        </KireiBody>
      </Kirei>

      <Kirei color='sage' variant='outlined' height='full'>
        <KireiHeader>
          <h4>Height: Full</h4>
        </KireiHeader>
        <KireiBody>
          <p>This card expands to fill 100% of its container's height. Perfect for grid layouts.</p>
        </KireiBody>
      </Kirei>

      <Kirei color='amber' variant='outlined' height='fit'>
        <KireiHeader>
          <h4>Height: Fit</h4>
        </KireiHeader>
        <KireiBody>
          <p>
            This card uses fit-content, adjusting to content size but respecting max constraints.
          </p>
        </KireiBody>
      </Kirei>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstration of different height behaviors: auto (default), full (100%), and fit (fit-content)',
      },
    },
  },
}
