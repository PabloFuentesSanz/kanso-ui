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
        component: 'Un componente Button flexible con múltiples variantes, tamaños y estados.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'Variante visual del botón'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del botón'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Si el botón debe ocupar todo el ancho disponible'
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carga del botón'
    },
    disabled: {
      control: 'boolean',
      description: 'Si el botón está deshabilitado'
    },
    children: {
      control: 'text',
      description: 'Contenido del botón'
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

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
  },
}

// Tamaños
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

// Todas las variantes juntas
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='destructive'>Destructive</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todas las variantes del botón en una sola vista'
      }
    }
  }
}

// Todos los tamaños
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
        story: 'Todos los tamaños del botón'
      }
    }
  }
}