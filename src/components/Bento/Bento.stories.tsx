import type { Meta, StoryObj } from '@storybook/react'
import { Bento, BentoItem } from './Bento'
import { Button } from '../Button'
import { Kirei, KireiHeader, KireiBody, KireiFooter } from '../Kirei'

const meta: Meta<typeof Bento> = {
  title: 'Layout/Bento (Grid) 🍱',
  component: Bento,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Bento (弁当) - A flexible grid layout system inspired by Japanese lunch boxes. Use it to create organized, modular layouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '12'],
      description: 'Number of columns in the grid',
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Spacing between grid items',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Vertical alignment of items',
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Horizontal alignment of items',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Examples
export const Default: Story = {
  render: () => (
    <Bento columns='3' gap='md'>
      <BentoItem>
        <Kirei color='sky' variant='filled'>
          <KireiBody>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>Sky Section</h3>
            <p>Beautiful sky-themed content in a Kirei card.</p>
          </KireiBody>
        </Kirei>
      </BentoItem>
      <BentoItem>
        <Kirei color='lavender' variant='filled'>
          <KireiBody>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>Lavender Section</h3>
            <p>Elegant lavender-themed content in a Kirei card.</p>
          </KireiBody>
        </Kirei>
      </BentoItem>
      <BentoItem>
        <Kirei color='sage' variant='filled'>
          <KireiBody>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>Sage Section</h3>
            <p>Natural sage-themed content in a Kirei card.</p>
          </KireiBody>
        </Kirei>
      </BentoItem>
    </Bento>
  ),
}

export const Dashboard: Story = {
  render: () => (
    <Bento columns='12' gap='lg'>
      <BentoItem span='8'>
        <Kirei color='amber' variant='filled' height='full' style={{ minHeight: '300px' }}>
          <KireiBody
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem' }}>Main Content Area</h3>
              <p>This is the primary content section of your dashboard.</p>
            </div>
          </KireiBody>
        </Kirei>
      </BentoItem>
      <BentoItem span='4' rowSpan='2'>
        <Kirei color='coral' variant='filled' height='full' padding='none'>
          <KireiHeader accent>
            <h3>Sidebar</h3>
          </KireiHeader>
        </Kirei>
      </BentoItem>
      <BentoItem span='4'>
        <Kirei color='sky' variant='elevated' padding='none'>
          <KireiHeader accent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Kirei</h3>
            </div>
          </KireiHeader>
          <KireiBody>
            <div
              style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}
              aria-label='Users: 1,234'
            >
              1,234
            </div>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>+12% from last month</p>
          </KireiBody>
        </Kirei>
      </BentoItem>
      <BentoItem span='4'>
        <Kirei color='lavender' variant='elevated' padding='none'>
          <KireiHeader accent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>Kirei</h3>
            </div>
          </KireiHeader>
          <KireiBody>
            <div
              style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}
              aria-label='Revenue: $45.2K'
            >
              $45.2K
            </div>
            <p style={{ fontSize: '0.875rem', opacity: 0.8 }}>+8% from last month</p>
          </KireiBody>
        </Kirei>
      </BentoItem>
    </Bento>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Complex dashboard layout using Bento grid with Kirei cards for consistent styling and proper accessibility',
      },
    },
  },
}

export const ResponsiveCards: Story = {
  render: () => {
    const colors = ['sky', 'lavender', 'sage', 'amber'] as const

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <section>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
            Desktop (4 columns)
          </h3>
          <Bento columns='4' gap='md'>
            {Array.from({ length: 8 }, (_, i) => (
              <BentoItem key={`desktop-${i}`}>
                <Kirei color={colors[i % 4]} variant='outlined'>
                  <KireiBody>
                    <h4 style={{ margin: '0 0 0.5rem 0' }}>Kirei {i + 1}</h4>
                    <p>Some content here showcasing responsive layout.</p>
                  </KireiBody>
                </Kirei>
              </BentoItem>
            ))}
          </Bento>
        </section>

        <section>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>
            Mobile (1 column)
          </h3>
          <Bento columns='1' gap='sm'>
            {Array.from({ length: 4 }, (_, i) => (
              <BentoItem key={`mobile-${i}`}>
                <Kirei color={colors[i]} variant='outlined'>
                  <KireiBody>
                    <h4 style={{ margin: '0 0 0.5rem 0' }}>Mobile Kirei {i + 1}</h4>
                    <p>Stacked layout for smaller screens with Kirei cards.</p>
                  </KireiBody>
                </Kirei>
              </BentoItem>
            ))}
          </Bento>
        </section>
      </div>
    )
  },
}

export const WithComponents: Story = {
  render: () => (
    <Bento columns='3' gap='lg'>
      <BentoItem>
        <Kirei color='sky' variant='elevated' padding='none' height='full'>
          <KireiHeader accent>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span aria-hidden='true'>⚡</span>
              <h3>Actions</h3>
            </div>
          </KireiHeader>
          <KireiBody>
            <p style={{ marginBottom: '1rem' }}>Quick actions panel with buttons</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Button color='sky' variant='filled'>
                Primary Action
              </Button>
              <Button color='sage' variant='outline'>
                Secondary
              </Button>
            </div>
          </KireiBody>
        </Kirei>
      </BentoItem>
      <BentoItem span='2'>
        <Kirei color='sage' variant='elevated' padding='none' height='full'>
          <KireiHeader accent>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span aria-hidden='true'>📝</span>
              <h3>Content Area</h3>
            </div>
          </KireiHeader>
          <KireiBody>
            <p>
              This section spans 2 columns in our Bento grid. Perfect for main content areas, forms,
              or detailed information.
            </p>
            <p>
              The Bento system makes it easy to create organized, modular layouts that feel natural
              and balanced.
            </p>
          </KireiBody>
          <KireiFooter>
            <Button color='sage' variant='outline' size='sm'>
              Cancel
            </Button>
            <Button color='sage' variant='filled' size='sm'>
              Save
            </Button>
          </KireiFooter>
        </Kirei>
      </BentoItem>
    </Bento>
  ),
}

// All Gap Sizes
export const GapSizes: Story = {
  render: () => {
    const colors = ['sky', 'lavender', 'sage', 'amber'] as const

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(gap => (
          <section key={gap}>
            <h4
              style={{
                marginBottom: '1rem',
                fontSize: '1.125rem',
                fontWeight: '600',
              }}
            >
              Gap: {gap}
            </h4>
            <Bento columns='4' gap={gap}>
              {Array.from({ length: 4 }, (_, i) => (
                <BentoItem key={`${gap}-${i}`}>
                  <Kirei color={colors[i]} variant='default' padding='sm'>
                    <KireiBody>
                      <div style={{ textAlign: 'center', fontSize: '0.875rem' }}>Item {i + 1}</div>
                    </KireiBody>
                  </Kirei>
                </BentoItem>
              ))}
            </Bento>
          </section>
        ))}
      </div>
    )
  },
}
