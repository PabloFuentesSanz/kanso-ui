import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible Input component with customizable colors, variants, sizes, and states.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['sky', 'lavender', 'sage', 'amber', 'coral'],
      description: 'Color scheme of the input'
    },
    variant: {
      control: 'select',
      options: ['filled', 'outline'],
      description: 'Style variant of the input'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input should take full width'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled'
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required'
    },
    label: {
      control: 'text',
      description: 'Input label'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    helperText: {
      control: 'text',
      description: 'Helper text'
    },
    errorMessage: {
      control: 'text',
      description: 'Error message'
    },
    leftIcon: {
      control: 'text',
      description: 'Icon to display on the left side'
    },
    rightIcon: {
      control: 'text',
      description: 'Icon to display on the right side'
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Examples
export const Default: Story = {
  args: {
    placeholder: 'Enter some text...',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
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

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true,
  },
}

// Color Variants - Filled Style
export const SkyFilled: Story = {
  args: {
    color: 'sky',
    variant: 'filled',
    label: 'Sky Input',
    placeholder: 'Sky filled input',
    helperText: 'This is a sky colored input',
  },
}

export const LavenderFilled: Story = {
  args: {
    color: 'lavender',
    variant: 'filled',
    label: 'Lavender Input',
    placeholder: 'Lavender filled input',
    helperText: 'This is a lavender colored input',
  },
}

export const SageFilled: Story = {
  args: {
    color: 'sage',
    variant: 'filled',
    label: 'Sage Input',
    placeholder: 'Sage filled input',
    helperText: 'This is a sage colored input',
  },
}

export const AmberFilled: Story = {
  args: {
    color: 'amber',
    variant: 'filled',
    label: 'Amber Input',
    placeholder: 'Amber filled input',
    helperText: 'This is an amber colored input',
  },
}

export const CoralFilled: Story = {
  args: {
    color: 'coral',
    variant: 'filled',
    label: 'Coral Input',
    placeholder: 'Coral filled input',
    helperText: 'This is a coral colored input',
  },
}

// Outline Variants
export const SkyOutline: Story = {
  args: {
    color: 'sky',
    variant: 'outline',
    label: 'Sky Outline',
    placeholder: 'Sky outline input',
  },
}

export const LavenderOutline: Story = {
  args: {
    color: 'lavender',
    variant: 'outline',
    label: 'Lavender Outline',
    placeholder: 'Lavender outline input',
  },
}

export const SageOutline: Story = {
  args: {
    color: 'sage',
    variant: 'outline',
    label: 'Sage Outline',
    placeholder: 'Sage outline input',
  },
}

// Sizes
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

// Input Types
export const EmailInput: Story = {
  args: {
    type: 'email',
    color: 'sky',
    label: 'Email Address',
    placeholder: 'john@example.com',
    helperText: 'We\'ll never share your email',
  },
}

export const PasswordInput: Story = {
  args: {
    type: 'password',
    color: 'lavender',
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters',
  },
}

export const NumberInput: Story = {
  args: {
    type: 'number',
    color: 'sage',
    label: 'Age',
    placeholder: '25',
    min: 0,
    max: 120,
  },
}

// All Color Combinations
export const AllColorCombinations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <div>
        <h4 style={{ margin: '0 0 1rem 0', color: '#666' }}>Filled Variants</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input color='sky' variant='filled' label='Sky' placeholder='Sky filled input' />
          <Input color='lavender' variant='filled' label='Lavender' placeholder='Lavender filled input' />
          <Input color='sage' variant='filled' label='Sage' placeholder='Sage filled input' />
          <Input color='amber' variant='filled' label='Amber' placeholder='Amber filled input' />
          <Input color='coral' variant='filled' label='Coral' placeholder='Coral filled input' />
        </div>
      </div>
      
      <div>
        <h4 style={{ margin: '0 0 1rem 0', color: '#666' }}>Outline Variants</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input color='sky' variant='outline' label='Sky' placeholder='Sky outline input' />
          <Input color='lavender' variant='outline' label='Lavender' placeholder='Lavender outline input' />
          <Input color='sage' variant='outline' label='Sage' placeholder='Sage outline input' />
          <Input color='amber' variant='outline' label='Amber' placeholder='Amber outline input' />
          <Input color='coral' variant='outline' label='Coral' placeholder='Coral outline input' />
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

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input size='sm' color='sky' label='Small' placeholder='Small input' />
      <Input size='md' color='lavender' label='Medium' placeholder='Medium input' />
      <Input size='lg' color='sage' label='Large' placeholder='Large input' />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All input sizes with different colors'
      }
    }
  }
}

// Input States
export const InputStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input 
        color='sky' 
        label='Normal Input' 
        placeholder='Normal state' 
        helperText='This input is working properly'
      />
      <Input 
        color='sage' 
        label='With Helper Text' 
        placeholder='Success state' 
        helperText='This input looks good!'
        defaultValue='valid@example.com'
      />
      <Input 
        label='With Error' 
        placeholder='Error state' 
        errorMessage='This field is required'
      />
      <Input 
        color='amber'
        label='Disabled Input' 
        placeholder='Disabled state' 
        disabled 
        defaultValue='disabled value'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different input states and messages'
      }
    }
  }
}

// Input with Icons
export const WithLeftIcon: Story = {
  args: {
    color: 'sky',
    label: 'Search',
    placeholder: 'Search something...',
    leftIcon: '🔍',
  },
}

export const WithRightIcon: Story = {
  args: {
    color: 'lavender',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    rightIcon: '👁️',
  },
}

export const WithBothIcons: Story = {
  args: {
    color: 'sage',
    label: 'Amount',
    type: 'number',
    placeholder: '0.00',
    leftIcon: '💰',
    rightIcon: '📊',
  },
}

// Icon Examples with Different Colors
export const IconExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '350px' }}>
      <Input 
        color='sky'
        variant='outline'
        label='Search'
        placeholder='Search users...'
        leftIcon='🔍'
        helperText='Use the search icon to find users'
      />
      <Input 
        color='lavender'
        variant='filled'
        label='Email'
        type='email'
        placeholder='john@example.com'
        leftIcon='✉️'
        rightIcon='✅'
        defaultValue='john@example.com'
      />
      <Input 
        color='sage'
        variant='outline'
        label='Phone Number'
        type='tel'
        placeholder='+1 (555) 000-0000'
        leftIcon='📞'
      />
      <Input 
        color='amber'
        variant='filled'
        label='Website URL'
        type='url'
        placeholder='https://example.com'
        leftIcon='🌐'
        rightIcon='🔗'
      />
      <Input 
        color='coral'
        variant='outline'
        label='Location'
        placeholder='Enter your location'
        leftIcon='📍'
        rightIcon='🎯'
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input examples with various icons and color combinations'
      }
    }
  }
}