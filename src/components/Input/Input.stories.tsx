import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Tatami } from '../Tatami'
import { Kanji } from '../Kanji'

const meta: Meta<typeof Input> = {
  title: 'Components/Input (Nyuryoku) 🎌',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Nyuryoku (入力) - A flexible input component inspired by Japanese form aesthetics. Supports various colors, variants, sizes, and states for elegant data entry.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['sky', 'lavender', 'wasabi', 'sage', 'amber', 'coral'],
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
    placeholder: 'Enter text: テキスト入力',
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Email: メール',
    placeholder: 'tanaka@example.com',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Password: パスワード',
    type: 'password',
    placeholder: 'Enter password: パスワード入力',
    helperText: 'Password must be at least 8 characters: ８文字以上',
  },
}

export const Required: Story = {
  args: {
    label: 'Username: ユーザー名',
    placeholder: 'Enter username: ユーザー名入力',
    required: true,
  },
}

export const WithError: Story = {
  args: {
    label: 'Email: メール',
    placeholder: 'tanaka@example.com',
    errorMessage: 'Please enter a valid email: 正しいメールを入力',
    defaultValue: 'invalid-email',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled: 無効',
    placeholder: 'This input is disabled: このフィールドは無効',
    disabled: true,
  },
}

// Color Variants - Filled Style
export const SkyFilled: Story = {
  args: {
    color: 'sky',
    variant: 'filled',
    label: 'Sky: 空',
    placeholder: 'Sky filled input: 空の入力',
    helperText: 'This is a sky colored input: 空色のフィールド',
  },
}

export const LavenderFilled: Story = {
  args: {
    color: 'lavender',
    variant: 'filled',
    label: 'Lavender: ラベンダー',
    placeholder: 'Lavender filled input: ラベンダーの入力',
    helperText: 'This is a lavender colored input: ラベンダー色のフィールド',
  },
}

export const SageFilled: Story = {
  args: {
    color: 'wasabi',
    variant: 'filled',
    label: 'Sage: 賢者',
    placeholder: 'Sage filled input: 賢者の入力',
    helperText: 'This is a sage colored input: 賢者色のフィールド',
  },
}

export const AmberFilled: Story = {
  args: {
    color: 'amber',
    variant: 'filled',
    label: 'Amber: 琥珀',
    placeholder: 'Amber filled input: 琥珀の入力',
    helperText: 'This is an amber colored input: 琥珀色のフィールド',
  },
}

export const CoralFilled: Story = {
  args: {
    color: 'coral',
    variant: 'filled',
    label: 'Coral: 珊瑚',
    placeholder: 'Coral filled input: 珊瑚の入力',
    helperText: 'This is a coral colored input: 珊瑚色のフィールド',
  },
}

// Outline Variants
export const SkyOutline: Story = {
  args: {
    color: 'sky',
    variant: 'outline',
    label: 'Sky Outline: 空の輪郭',
    placeholder: 'Sky outline input: 空の輪郭入力',
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
    color: 'wasabi',
    variant: 'outline',
    label: 'Sage Outline',
    placeholder: 'Sage outline input',
  },
}

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small: 小',
    placeholder: 'Small size: 小サイズ',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium: 中',
    placeholder: 'Medium size: 中サイズ',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large: 大',
    placeholder: 'Large size: 大サイズ',
  },
}

// Input Types
export const EmailInput: Story = {
  args: {
    type: 'email',
    color: 'sky',
    label: 'Email Address: メールアドレス',
    placeholder: 'tanaka@example.com',
    helperText: 'We will never share your email: メールは公開しません',
  },
}

export const PasswordInput: Story = {
  args: {
    type: 'password',
    color: 'lavender',
    label: 'Password: パスワード',
    placeholder: 'Enter your password: パスワード入力',
    helperText: 'Must be at least 8 characters: ８文字以上',
  },
}

export const NumberInput: Story = {
  args: {
    type: 'number',
    color: 'wasabi',
    label: 'Age: 年齢',
    placeholder: '25',
    min: 0,
    max: 120,
  },
}

// All Color Combinations
export const AllColorCombinations: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="xl" w="auto" maxW="md">
      <Tatami>
        <Kanji as="h4" size="lg" weight="semibold" color="secondary">Filled Variants - 堕塗りスタイル</Kanji>
        <Tatami display="flex" direction="column" gap="md">
          <Input color='sky' variant='filled' label='Sky: 空' placeholder='Sky filled input: 空の入力' />
          <Input color='lavender' variant='filled' label='Lavender: ラベンダー' placeholder='Lavender filled input: ラベンダーの入力' />
          <Input color='wasabi' variant='filled' label='Sage: 賢者' placeholder='Sage filled input: 賢者の入力' />
          <Input color='amber' variant='filled' label='Amber: 琥珀' placeholder='Amber filled input: 琥珀の入力' />
          <Input color='coral' variant='filled' label='Coral: 珊瑚' placeholder='Coral filled input: 珊瑚の入力' />
        </Tatami>
      </Tatami>

      <Tatami>
        <Kanji as="h4" size="lg" weight="semibold" color="secondary">Outline Variants - 輪郭スタイル</Kanji>
        <Tatami display="flex" direction="column" gap="md">
          <Input color='sky' variant='outline' label='Sky: 空' placeholder='Sky outline input: 空の輪郭入力' />
          <Input color='lavender' variant='outline' label='Lavender: ラベンダー' placeholder='Lavender outline input: ラベンダーの輪郭入力' />
          <Input color='wasabi' variant='outline' label='Sage: 賢者' placeholder='Sage outline input: 賢者の輪郭入力' />
          <Input color='amber' variant='outline' label='Amber: 琥珀' placeholder='Amber outline input: 琥珀の輪郭入力' />
          <Input color='coral' variant='outline' label='Coral: 珊瑚' placeholder='Coral outline input: 珊瑚の輪郭入力' />
        </Tatami>
      </Tatami>
    </Tatami>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All possible combinations of colors and variants with Japanese aesthetic - すべての色とバリアントの組み合わせ'
      }
    }
  }
}

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="lg" w="auto" maxW="sm">
      <Input size='sm' color='sky' label='Small: 小' placeholder='Small input: 小さな入力' />
      <Input size='md' color='lavender' label='Medium: 中' placeholder='Medium input: 中央の入力' />
      <Input size='lg' color='wasabi' label='Large: 大' placeholder='Large input: 大きな入力' />
    </Tatami>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All input sizes with different colors - さまざまなサイズと色'
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
        color='wasabi' 
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
    color: 'wasabi',
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
        color='wasabi'
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