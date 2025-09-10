import type { Meta, StoryObj } from '@storybook/react'
import { Icon, HeartIcon, StarIcon } from './index'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente base para iconos SVG con soporte para diferentes tamaños y colores.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Tamaño del icono'
    },
    color: {
      control: 'color',
      description: 'Color del icono'
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  },
}

// Tamaños
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <HeartIcon size="xs" />
      <HeartIcon size="sm" />
      <HeartIcon size="md" />
      <HeartIcon size="lg" />
      <HeartIcon size="xl" />
      <HeartIcon size="2xl" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos los tamaños disponibles para iconos'
      }
    }
  }
}

// Colores
export const WithColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <HeartIcon color="#ef4444" size="lg" />
      <HeartIcon color="#10b981" size="lg" />
      <HeartIcon color="#3b82f6" size="lg" />
      <HeartIcon color="#f59e0b" size="lg" />
      <HeartIcon color="#8b5cf6" size="lg" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Iconos con diferentes colores'
      }
    }
  }
}

// Iconos específicos
export const HeartIconExample: Story = {
  render: () => <HeartIcon size="lg" color="#ef4444" />,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo del HeartIcon'
      }
    }
  }
}

export const StarIconExample: Story = {
  render: () => <StarIcon size="lg" color="#f59e0b" />,
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo del StarIcon'
      }
    }
  }
}

// Todos los iconos disponibles
export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <HeartIcon size="xl" color="#ef4444" />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>HeartIcon</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <StarIcon size="xl" color="#f59e0b" />
        <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>StarIcon</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos los iconos disponibles en la librería'
      }
    }
  }
}