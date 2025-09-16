import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'
import { Tatami } from '../Tatami'
import { Kanji } from '../Kanji'

const meta: Meta<typeof Button> = {
  title: 'Components/Button (Botan) 🚀',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Botan (ボタン) - A flexible button component with elegant Japanese-inspired styling. Multiple variants, sizes, and states for every interaction need.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['sky', 'lavender', 'wasabi', 'sage', 'amber', 'coral'],
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
    children: 'Button: ボタン'
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Historias básicas
export const Default: Story = {
  args: {
    children: 'Default: デフォルト',
  },
}

// Color Variants - Filled Style
export const SkyFilled: Story = {
  args: {
    color: 'sky',
    variant: 'filled',
    children: 'Sky: 空',
  },
}

export const LavenderFilled: Story = {
  args: {
    color: 'lavender',
    variant: 'filled',
    children: 'Lavender: ラベンダー',
  },
}

export const SageFilled: Story = {
  args: {
    color: 'wasabi',
    variant: 'filled',
    children: 'Sage: 賢者',
  },
}

export const AmberFilled: Story = {
  args: {
    color: 'amber',
    variant: 'filled',
    children: 'Amber: 琥珀',
  },
}

export const CoralFilled: Story = {
  args: {
    color: 'coral',
    variant: 'filled',
    children: 'Coral: 珊瑚',
  },
}

// Outline Variants
export const SkyOutline: Story = {
  args: {
    color: 'sky',
    variant: 'outline',
    children: 'Sky Outline: 空の輪郭',
  },
}

export const LavenderOutline: Story = {
  args: {
    color: 'lavender',
    variant: 'outline',
    children: 'Lavender Outline: ラベンダーの輪郭',
  },
}

export const SageOutline: Story = {
  args: {
    color: 'wasabi',
    variant: 'outline',
    children: 'Sage Outline: 賢者の輪郭',
  },
}

// Ghost Variants
export const SkyGhost: Story = {
  args: {
    color: 'sky',
    variant: 'ghost',
    children: 'Sky Ghost: 空の幽霊',
  },
}

export const AmberGhost: Story = {
  args: {
    color: 'amber',
    variant: 'ghost',
    children: 'Amber Ghost: 琥珀の幽霊',
  },
}

export const CoralGhost: Story = {
  args: {
    color: 'coral',
    variant: 'ghost',
    children: 'Coral Ghost: 珊瑚の幽霊',
  },
}

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small: 小',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium: 中',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large: 大',
  },
}

// Estados
export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading: 読み込み中',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled: 無効',
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width: 全幅',
  },
  parameters: {
    layout: 'padded',
  },
}

// Con iconos
export const WithLeftIcon: Story = {
  args: {
    leftIcon: '←',
    children: 'Back: 戻る',
  },
}

export const WithRightIcon: Story = {
  args: {
    rightIcon: '→',
    children: 'Next: 次へ',
  },
}

export const WithBothIcons: Story = {
  args: {
    leftIcon: '←',
    rightIcon: '→',
    children: 'Both Icons: 両方',
  },
}

// All color combinations
export const AllColorCombinations: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="xl">
      <Tatami>
        <Kanji as="h4" size="lg" weight="semibold" color="secondary">Filled Variants - 塩塗りスタイル</Kanji>
        <Tatami display="flex" gap="md" wrap="wrap">
          <Button color='sky' variant='filled'>Sky: 空</Button>
          <Button color='lavender' variant='filled'>Lavender: ラベンダー</Button>
          <Button color='wasabi' variant='filled'>Wasabi: わさび</Button>
          <Button color='amber' variant='filled'>Amber: 琥珀</Button>
          <Button color='coral' variant='filled'>Coral: 珊瑚</Button>
        </Tatami>
      </Tatami>

      <Tatami>
        <Kanji as="h4" size="lg" weight="semibold" color="secondary">Outline Variants - 輪郭スタイル</Kanji>
        <Tatami display="flex" gap="md" wrap="wrap">
          <Button color='sky' variant='outline'>Sky: 空</Button>
          <Button color='lavender' variant='outline'>Lavender: ラベンダー</Button>
          <Button color='wasabi' variant='outline'>Wasabi: わさび</Button>
          <Button color='amber' variant='outline'>Amber: 琥珀</Button>
          <Button color='coral' variant='outline'>Coral: 珊瑚</Button>
        </Tatami>
      </Tatami>

      <Tatami>
        <Kanji as="h4" size="lg" weight="semibold" color="secondary">Ghost Variants - ゴーストスタイル</Kanji>
        <Tatami display="flex" gap="md" wrap="wrap">
          <Button color='sky' variant='ghost'>Sky: 空</Button>
          <Button color='lavender' variant='ghost'>Lavender: ラベンダー</Button>
          <Button color='wasabi' variant='ghost'>Wasabi: わさび</Button>
          <Button color='amber' variant='ghost'>Amber: 琥珀</Button>
          <Button color='coral' variant='ghost'>Coral: 珊瑚</Button>
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

// All sizes
export const AllSizes: Story = {
  render: () => (
    <Tatami display="flex" gap="lg" align="center">
      <Button size='sm'>Small: 小</Button>
      <Button size='md'>Medium: 中</Button>
      <Button size='lg'>Large: 大</Button>
    </Tatami>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button sizes from small to large - 小から大までのサイズ'
      }
    }
  }
}