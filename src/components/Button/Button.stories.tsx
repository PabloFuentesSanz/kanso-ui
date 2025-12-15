import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button (Botan)',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Botan (ボタン) - Interaction with harmony.

A button is more than a click; it's an invitation to act. 
Our Button component follows Japanese design principles: simple, clear, and responsive.

It supports:
- **Nihon no Iro Palette**: Sakura, Wasabi, Sora, and more.
- **Multiple Variants**: Filled for emphasis, Outline for subtlety, Ghost for minimalism.
- **Interaction States**: Hover, active, focus, and loading states built-in.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['sakura', 'wasabi', 'sora', 'indigo', 'mikan', 'akane', 'fuji', 'sumi'],
      description: 'The color theme from our Japanese palette',
      table: { defaultValue: { summary: 'sora' } },
    },
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'ghost'],
      description: 'Visual style',
      table: { defaultValue: { summary: 'filled' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
      table: { defaultValue: { summary: 'md' } },
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading spinner',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Take full width of container',
    },
  },
  args: {
    onClick: fn(),
    children: 'Action',
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Reuse this wrapper for clean grid layouts in stories
const Grid = ({ children, cols = 4 }: { children: React.ReactNode; cols?: number }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: '1rem',
      alignItems: 'center',
      justifyItems: 'center',
    }}
  >
    {children}
  </div>
)

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
    {children}
  </div>
)

export const Default: Story = {
  args: {
    children: 'Click me',
    color: 'sora400',
  },
}

export const NihonNoPastelPalette: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginBottom: '1rem', color: '#666' }}>Pastel Styles (300/400)</h4>
        <Grid cols={4}>
          <Button color='sakura300'>Sakura 300</Button>
          <Button color='wasabi300'>Wasabi 300</Button>
          <Button color='sora300'>Sora 300</Button>
          <Button color='indigo300'>Indigo 300</Button>
          <Button color='mikan300'>Mikan 300</Button>
          <Button color='akane300'>Akane 300</Button>
          <Button color='fuji300'>Fuji 300</Button>
          <Button color='sumi300'>Sumi 300</Button>
        </Grid>
      </div>
      <div>
        <Grid cols={4}>
          <Button color='sakura400'>Sakura 400</Button>
          <Button color='wasabi400'>Wasabi 400</Button>
          <Button color='sora400'>Sora 400</Button>
          <Button color='indigo400'>Indigo 400</Button>
          <Button color='mikan400'>Mikan 400</Button>
          <Button color='akane400'>Akane 400</Button>
          <Button color='fuji400'>Fuji 400</Button>
          <Button color='sumi400'>Sumi 400</Button>
        </Grid>
      </div>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <Grid cols={3}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>Filled</p>
        <Button variant='filled' color='sora400'>
          Filled
        </Button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>Outline</p>
        <Button variant='outline' color='sora400'>
          Outline
        </Button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>Ghost</p>
        <Button variant='ghost' color='sora400'>
          Ghost
        </Button>
      </div>
    </Grid>
  ),
}

export const Sizes: Story = {
  render: () => (
    <Row>
      <Button size='sm' color='wasabi400'>
        Small
      </Button>
      <Button size='md' color='wasabi400'>
        Medium
      </Button>
      <Button size='lg' color='wasabi400'>
        Large
      </Button>
    </Row>
  ),
}

export const States: Story = {
  render: () => (
    <Row>
      <Button loading color='indigo300'>
        Loading
      </Button>
      <Button disabled color='indigo300'>
        Disabled
      </Button>
      <Button variant='outline' loading color='indigo300'>
        Loading
      </Button>
    </Row>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Row>
      <Button color='akane300' leftIcon={<span>←</span>}>
        Back
      </Button>
      <Button color='akane300' rightIcon={<span>→</span>}>
        Next
      </Button>
    </Row>
  ),
}

export const CustomColors: Story = {
  name: 'Deep & Vibrant (Legacy)',
  render: () => (
    <Grid cols={3}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>mikan500 (Vibrant)</p>
        <Button color='mikan500'>Submit</Button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>wasabi600 (Darker)</p>
        <Button color='wasabi600' variant='outline'>
          Save
        </Button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>#701a75 (Hex)</p>
        <Button color='#701a75'>Custom Hex</Button>
      </div>
    </Grid>
  ),
}
