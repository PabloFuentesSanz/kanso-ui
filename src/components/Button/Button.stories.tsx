import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible Button component with multiple variants, sizes, and states.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['sky', 'lavender', 'sage', 'amber', 'coral'],
      description: 'Color scheme of the button'
    },
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'ghost'],
      description: 'Style variant of the button'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width'
    },
    loading: {
      control: 'boolean',
      description: 'Loading state of the button'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled'
    },
    children: {
      control: 'text',
      description: 'Button content'
    }
  },
  args: {
    onClick: fn(),
    children: 'Button'
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Historias básicas
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

// Color Variants - Filled Style
export const SkyFilled: Story = {
  args: {
    color: 'sky',
    variant: 'filled',
    children: 'Sky Button',
  },
}

export const LavenderFilled: Story = {
  args: {
    color: 'lavender',
    variant: 'filled',
    children: 'Lavender Button',
  },
}

export const SageFilled: Story = {
  args: {
    color: 'sage',
    variant: 'filled',
    children: 'Sage Button',
  },
}

export const AmberFilled: Story = {
  args: {
    color: 'amber',
    variant: 'filled',
    children: 'Amber Button',
  },
}

export const CoralFilled: Story = {
  args: {
    color: 'coral',
    variant: 'filled',
    children: 'Coral Button',
  },
}

// Outline Variants
export const SkyOutline: Story = {
  args: {
    color: 'sky',
    variant: 'outline',
    children: 'Sky Outline',
  },
}

export const LavenderOutline: Story = {
  args: {
    color: 'lavender',
    variant: 'outline',
    children: 'Lavender Outline',
  },
}

export const SageOutline: Story = {
  args: {
    color: 'sage',
    variant: 'outline',
    children: 'Sage Outline',
  },
}

// Ghost Variants
export const SkyGhost: Story = {
  args: {
    color: 'sky',
    variant: 'ghost',
    children: 'Sky Ghost',
  },
}

export const AmberGhost: Story = {
  args: {
    color: 'amber',
    variant: 'ghost',
    children: 'Amber Ghost',
  },
}

export const CoralGhost: Story = {
  args: {
    color: 'coral',
    variant: 'ghost',
    children: 'Coral Ghost',
  },
}

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
}

// Estados
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading Button',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
}

// Con iconos
export const WithLeftIcon: Story = {
  args: {
    leftIcon: '←',
    children: 'Back',
  },
}

export const WithRightIcon: Story = {
  args: {
    rightIcon: '→',
    children: 'Next',
  },
}

export const WithBothIcons: Story = {
  args: {
    leftIcon: '←',
    rightIcon: '→',
    children: 'Both Icons',
  },
}

// All color combinations
export const AllColorCombinations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ margin: '0 0 1rem 0', color: '#666' }}>Filled Variants</h4>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button color='sky' variant='filled'>Sky</Button>
          <Button color='lavender' variant='filled'>Lavender</Button>
          <Button color='sage' variant='filled'>Sage</Button>
          <Button color='amber' variant='filled'>Amber</Button>
          <Button color='coral' variant='filled'>Coral</Button>
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 1rem 0', color: '#666' }}>Outline Variants</h4>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button color='sky' variant='outline'>Sky</Button>
          <Button color='lavender' variant='outline'>Lavender</Button>
          <Button color='sage' variant='outline'>Sage</Button>
          <Button color='amber' variant='outline'>Amber</Button>
          <Button color='coral' variant='outline'>Coral</Button>
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 1rem 0', color: '#666' }}>Ghost Variants</h4>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button color='sky' variant='ghost'>Sky</Button>
          <Button color='lavender' variant='ghost'>Lavender</Button>
          <Button color='sage' variant='ghost'>Sage</Button>
          <Button color='amber' variant='ghost'>Amber</Button>
          <Button color='coral' variant='ghost'>Coral</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All possible combinations of colors and variants'
      }
    }
  }
}

// All sizes
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button sizes'
      }
    }
  }
}