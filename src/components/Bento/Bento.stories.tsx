import type { Meta, StoryObj } from '@storybook/react'
import { Bento, BentoItem } from './Bento'
import { Button } from '../Button'
import { Kirei, KireiHeader, KireiBody, KireiFooter } from '../Kirei'
import { Kanji } from '../Kanji'

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
            <Kanji as="h3" size="lg" weight="semibold">Sky Gallery - 空の間</Kanji>
            <Kanji>Beautiful sky-themed content showcasing serenity and vastness.</Kanji>
          </KireiBody>
        </Kirei>
      </BentoItem>
      <BentoItem>
        <Kirei color='lavender' variant='filled'>
          <KireiBody>
            <Kanji as="h3" size="lg" weight="semibold">Lavender Room - ラベンダー室</Kanji>
            <Kanji>Elegant lavender-themed content for peaceful moments.</Kanji>
          </KireiBody>
        </Kirei>
      </BentoItem>
      <BentoItem>
        <Kirei color='sage' variant='filled'>
          <KireiBody>
            <Kanji as="h3" size="lg" weight="semibold">Sage Garden - セージ庭</Kanji>
            <Kanji>Natural sage-themed content bringing harmony and balance.</Kanji>
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
              <Kanji as="h3" size="2xl" weight="semibold">Main Dashboard - メインダッシュボード</Kanji>
              <Kanji>Primary content section for your business analytics and insights.</Kanji>
            </div>
          </KireiBody>
        </Kirei>
      </BentoItem>
      <BentoItem span='4' rowSpan='2'>
        <Kirei color='coral' variant='filled' height='full' padding='none'>
          <KireiHeader accent>
            <Kanji as="h3" size="lg" weight="semibold">Navigation - ナビゲーション</Kanji>
          </KireiHeader>
        </Kirei>
      </BentoItem>
      <BentoItem span='4'>
        <Kirei color='sky' variant='elevated' padding='none'>
          <KireiHeader accent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Kanji as="h3" size="md" weight="medium">Active Users - アクティブユーザー</Kanji>
            </div>
          </KireiHeader>
          <KireiBody>
            <div
              style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}
              aria-label='Users: 1,234'
            >
              1,234
            </div>
            <Kanji size="sm" color="secondary">+12% from last month</Kanji>
          </KireiBody>
        </Kirei>
      </BentoItem>
      <BentoItem span='4'>
        <Kirei color='lavender' variant='elevated' padding='none'>
          <KireiHeader accent>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Kanji as="h3" size="md" weight="medium">Revenue - 収益</Kanji>
            </div>
          </KireiHeader>
          <KireiBody>
            <div
              style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}
              aria-label='Revenue: $45.2K'
            >
              $45.2K
            </div>
            <Kanji size="sm" color="secondary">+8% from last month</Kanji>
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
          <Kanji as="h3" size="xl" weight="semibold">Desktop Layout - デスクトップレイアウト (4 columns)</Kanji>
          <Bento columns='4' gap='md'>
            {Array.from({ length: 8 }, (_, i) => (
              <BentoItem key={`desktop-${i}`}>
                <Kirei color={colors[i % 4]} variant='outlined'>
                  <KireiBody>
                    <Kanji as="h4" size="md" weight="medium">Gallery {i + 1} - ギャラリー</Kanji>
                    <Kanji size="sm">Responsive layout showcasing Japanese design principles.</Kanji>
                  </KireiBody>
                </Kirei>
              </BentoItem>
            ))}
          </Bento>
        </section>

        <section>
          <Kanji as="h3" size="xl" weight="semibold">Mobile Layout - モバイルレイアウト (1 column)</Kanji>
          <Bento columns='1' gap='sm'>
            {Array.from({ length: 4 }, (_, i) => (
              <BentoItem key={`mobile-${i}`}>
                <Kirei color={colors[i]} variant='outlined'>
                  <KireiBody>
                    <Kanji as="h4" size="md" weight="medium">Mobile Gallery {i + 1} - モバイル</Kanji>
                    <Kanji size="sm">Stacked layout optimized for smaller screens.</Kanji>
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
              <Kanji as="h3" size="md" weight="semibold">Actions - アクション</Kanji>
            </div>
          </KireiHeader>
          <KireiBody>
            <Kanji style={{ marginBottom: '1rem' }}>Quick actions panel for essential operations.</Kanji>
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
              <Kanji as="h3" size="md" weight="semibold">Content Area - コンテンツエリア</Kanji>
            </div>
          </KireiHeader>
          <KireiBody>
            <Kanji>
              This section spans 2 columns in our Bento grid. Perfect for main content areas, forms,
              or detailed information with Japanese design principles.
            </Kanji>
            <Kanji>
              The Bento system makes it easy to create organized, modular layouts that feel natural
              and balanced like a traditional bento box.
            </Kanji>
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
            <Kanji
              as="h4"
              size="lg"
              weight="semibold"
              style={{ marginBottom: '1rem' }}
            >
              Gap Size: {gap} - 間隙
            </Kanji>
            <Bento columns='4' gap={gap}>
              {Array.from({ length: 4 }, (_, i) => (
                <BentoItem key={`${gap}-${i}`}>
                  <Kirei color={colors[i]} variant='default' padding='sm'>
                    <KireiBody>
                      <Kanji size="sm" align="center">Element {i + 1}</Kanji>
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
