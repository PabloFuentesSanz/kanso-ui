import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un componente Input con soporte para diferentes tamaños, variantes y estados.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del input'
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'Variante visual del input'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Si el input debe ocupar todo el ancho disponible'
    },
    disabled: {
      control: 'boolean',
      description: 'Si el input está deshabilitado'
    },
    required: {
      control: 'boolean',
      description: 'Si el input es obligatorio'
    },
    label: {
      control: 'text',
      description: 'Etiqueta del input'
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder'
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda'
    },
    errorMessage: {
      control: 'text',
      description: 'Mensaje de error'
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter some text...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email',
    placeholder: 'john@example.com',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Password must be at least 8 characters',
  },
}

export const Required: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    required: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'john@example.com',
    errorMessage: 'Please enter a valid email address',
    defaultValue: 'invalid-email',
  },
}

export const Success: Story = {
  args: {
    label: 'Email',
    variant: 'success',
    placeholder: 'john@example.com',
    helperText: 'Email is available',
    defaultValue: 'john@example.com',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
}

// Tamaños
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Input',
    placeholder: 'Small size',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Input',
    placeholder: 'Medium size',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Input',
    placeholder: 'Large size',
  },
}

// Tipos de input
export const EmailInput: Story = {
  args: {
    type: 'email',
    label: 'Email Address',
    placeholder: 'john@example.com',
    helperText: 'We\'ll never share your email',
  },
}

export const PasswordInput: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters',
  },
}

export const NumberInput: Story = {
  args: {
    type: 'number',
    label: 'Age',
    placeholder: '25',
    min: 0,
    max: 120,
  },
}

// Todos los tamaños
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input size='sm' label='Small' placeholder='Small input' />
      <Input size='md' label='Medium' placeholder='Medium input' />
      <Input size='lg' label='Large' placeholder='Large input' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos los tamaños del input'
      }
    }
  }
}

// Estados
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input label='Default' placeholder='Default state' />
      <Input 
        label='Success' 
        variant='success' 
        placeholder='Success state' 
        helperText='This is valid'
        defaultValue='valid@example.com'
      />
      <Input 
        label='Error' 
        placeholder='Error state' 
        errorMessage='This field is required'
      />
      <Input 
        label='Disabled' 
        placeholder='Disabled state' 
        disabled 
        defaultValue='disabled value'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos los estados del input'
      }
    }
  }
}