import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Icons } from '../Icons'

const meta: Meta<typeof Input> = {
  title: 'Components/Input (Nyuryoku) 🎌',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Nyuryoku (入力) - Data entry with intent.

A flexible input component inspired by Japanese form aesthetics.
Designed for clarity and focus.

**Features:**
- **Nihon no Iro Palette**: Supports all system colors.
- **Icon Support**: Easily add left or right icons.
- **Variants**: Outline, Filled, Flushed (Underlined).
- **Validation**: Error states and helper text built-in.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['sakura', 'wasabi', 'sora', 'indigo', 'mikan', 'akane', 'fuji', 'sumi'],
      description: 'Color theme',
      table: { defaultValue: { summary: 'sora' } },
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'flushed'],
      description: 'Visual style',
      table: { defaultValue: { summary: 'outline' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Take full width of container',
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
    label: 'Label',
    color: 'sora',
  },
}

export const PaletteShowcase: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1.5rem',
        width: '600px',
      }}
    >
      <Input color='sakura' label='Sakura (Cherry)' placeholder='Sakura input...' />
      <Input color='wasabi' label='Wasabi (Nature)' placeholder='Wasabi input...' />
      <Input color='sora' label='Sora (Sky)' placeholder='Sora input...' />
      <Input color='mikan' label='Mikan (Citrus)' placeholder='Mikan input...' />
      <Input color='indigo' label='Indigo (Deep)' placeholder='Indigo input...' />
      <Input color='akane' label='Akane (Madder)' placeholder='Akane input...' />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '300px' }}>
      <Input variant='outline' label='Outline (Default)' placeholder='Outline style' />
      <Input variant='filled' label='Filled' placeholder='Filled style' />
      <Input variant='flushed' label='Flushed (Underline)' placeholder='Flushed style' />
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '300px' }}>
      <Input
        color='sora'
        label='Search'
        placeholder='Search...'
        leftIcon={<Icons.Search size='sm' />}
      />
      <Input
        color='indigo'
        label='Email'
        placeholder='your@email.com'
        leftIcon={<Icons.User size='sm' />}
        rightIcon={<Icons.Check size='sm' color='wasabi' />}
      />
      <Input
        color='akane'
        label='Password'
        type='password'
        placeholder='Secrets...'
        leftIcon={<Icons.Info size='sm' />}
      />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '300px' }}>
      <Input
        label='Required'
        required
        placeholder='Mandatory field'
        helperText='This field is required'
      />
      <Input
        label='Error State'
        errorMessage='Invalid input detected'
        placeholder='Wrong value'
        defaultValue='Bad Input'
      />
      <Input
        label='Disabled'
        disabled
        placeholder="Can't touch this"
        defaultValue='Locked'
        leftIcon={<Icons.Cross size='sm' />}
      />
    </div>
  ),
}
