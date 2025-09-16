import type { Meta, StoryObj } from '@storybook/react'
import { Tatami } from './Tatami'
import { Kanji } from '../Kanji'
import { Kirei, KireiHeader, KireiBody } from '../Kirei'

const meta: Meta<typeof Tatami> = {
  title: 'Components/Tatami (Div) 🎋',
  component: Tatami,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Tatami (畳) - A super-flexible div component with built-in styling props. Like Tailwind but with a Japanese aesthetic and cleaner API. Perfect as a building block for any layout.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    display: {
      control: 'select',
      options: ['block', 'flex', 'grid', 'inline', 'inline-block', 'inline-flex', 'none'],
      description: 'CSS display property'
    },
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Flex direction'
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Justify content'
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Align items'
    },
    p: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Padding'
    },
    bg: {
      control: 'select',
      options: ['transparent', 'white', 'gray', 'primary', 'secondary'],
      description: 'Background color'
    },
    color: {
      control: 'select',
      options: ['sky', 'lavender', 'wasabi', 'sage', 'amber', 'coral'],
      description: 'Theme color'
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Examples
export const Default: Story = {
  render: () => (
    <Tatami p="md" bg="gray" rounded="md">
      <Kanji as="h3" size="lg" weight="semibold">基本的な畳</Kanji>
      <Kanji>シンプルな要素 - パディング、背景、角丸を持つ基本的なコンテナ。</Kanji>
    </Tatami>
  ),
}

export const FlexLayouts: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="lg">
      <Kanji as="h2" size="2xl" weight="bold" theme="sky">フレックスレイアウト - Flex Layouts</Kanji>

      {/* Horizontal flex */}
      <Tatami display="flex" gap="md" p="md" bg="primary" rounded="md" color="sky">
        <Tatami p="sm" bg="white" rounded="sm" display="flex" align="center" justify="center">
          <Kanji weight="medium">茶道具</Kanji>
        </Tatami>
        <Tatami p="sm" bg="white" rounded="sm" display="flex" align="center" justify="center">
          <Kanji weight="medium">花器</Kanji>
        </Tatami>
        <Tatami p="sm" bg="white" rounded="sm" display="flex" align="center" justify="center">
          <Kanji weight="medium">掛軸</Kanji>
        </Tatami>
      </Tatami>

      {/* Vertical flex */}
      <Tatami display="flex" direction="column" gap="sm" p="md" bg="secondary" rounded="md">
        <Tatami p="sm" bg="white" rounded="sm">
          <Kanji weight="medium">床の間</Kanji>
        </Tatami>
        <Tatami p="sm" bg="white" rounded="sm">
          <Kanji weight="medium">本間</Kanji>
        </Tatami>
        <Tatami p="sm" bg="white" rounded="sm">
          <Kanji weight="medium">茶室</Kanji>
        </Tatami>
      </Tatami>

      {/* Centered flex */}
      <Tatami
        display="flex"
        justify="center"
        align="center"
        minH="lg"
        bg="primary"
        rounded="md"
        color="lavender"
      >
        <Tatami p="lg" bg="white" rounded="md" textAlign="center">
          <Kanji as="h4" size="lg" weight="semibold">完全中央配置</Kanji>
          <Kanji>justify と align を使用</Kanji>
        </Tatami>
      </Tatami>
    </Tatami>
  ),
}

export const GridExample: Story = {
  render: () => (
    <Tatami
      display="grid"
      gap="md"
      p="md"
      bg="gray"
      rounded="md"
      style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
    >
      <Tatami p="md" bg="primary" rounded="md" textAlign="center" color="sky">
        <Kanji weight="medium">和室</Kanji>
      </Tatami>
      <Tatami p="md" bg="primary" rounded="md" textAlign="center" color="lavender">
        <Kanji weight="medium">縁側</Kanji>
      </Tatami>
      <Tatami p="md" bg="primary" rounded="md" textAlign="center" color="wasabi">
        <Kanji weight="medium">庭</Kanji>
      </Tatami>
      <Tatami
        p="md"
        bg="white"
        border="sm"
        borderColor="primary"
        rounded="md"
        textAlign="center"
        style={{ gridColumn: 'span 2' }}
      >
        <Kanji weight="medium">大広間 - 2列にまたがる</Kanji>
      </Tatami>
      <Tatami p="md" bg="primary" rounded="md" textAlign="center" color="coral">
        <Kanji weight="medium">玄関</Kanji>
      </Tatami>
    </Tatami>
  ),
}

export const SizingAndSpacing: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="xl">
      <Kanji as="h2" size="2xl" weight="bold" theme="wasabi">サイズと余白 - Sizing & Spacing</Kanji>

      {/* Width examples */}
      <Tatami>
        <Kanji as="h3" size="lg" weight="semibold">幅の例 - Width Examples</Kanji>
        <Tatami w="full" p="sm" bg="gray" rounded="sm" m="xs">
          <Kanji>w="full" - 全幅を使用</Kanji>
        </Tatami>
        <Tatami w="fit" p="sm" bg="gray" rounded="sm" m="xs">
          <Kanji>w="fit" - 内容に合わせる</Kanji>
        </Tatami>
        <Tatami maxW="md" p="sm" bg="gray" rounded="sm" m="xs">
          <Kanji>maxW="md" - 中サイズまで</Kanji>
        </Tatami>
      </Tatami>

      {/* Height examples */}
      <Tatami>
        <Kanji as="h3" size="lg" weight="semibold">高さの例 - Height Examples</Kanji>
        <Tatami display="flex" gap="md">
          <Tatami h="auto" p="md" bg="primary" rounded="md" color="sky">
            <Kanji>h="auto" - 内容に基づく高さ</Kanji>
          </Tatami>
          <Tatami minH="lg" p="md" bg="primary" rounded="md" color="lavender">
            <Kanji>minH="lg" - 最小高さ大</Kanji>
          </Tatami>
        </Tatami>
      </Tatami>

      {/* Spacing examples */}
      <Tatami>
        <Kanji as="h3" size="lg" weight="semibold">余白の例 - Spacing Examples</Kanji>
        <Tatami p="xl" bg="gray" rounded="md">
          <Tatami p="lg" bg="primary" rounded="sm" color="wasabi">
            <Kanji>外側 p="xl"、内側 p="lg"</Kanji>
          </Tatami>
        </Tatami>
      </Tatami>
    </Tatami>
  ),
}

export const VisualStyles: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="xl">
      <Kanji as="h2" size="2xl" weight="bold" theme="amber">視覚スタイル - Visual Styles</Kanji>

      {/* Backgrounds */}
      <Tatami>
        <Kanji as="h3" size="lg" weight="semibold">背景 - Backgrounds</Kanji>
        <Tatami display="flex" gap="md">
          <Tatami p="md" bg="white" border="sm" rounded="md">
            <Kanji>bg="white" - 白和紙</Kanji>
          </Tatami>
          <Tatami p="md" bg="gray" rounded="md">
            <Kanji>bg="gray" - 灰色畳</Kanji>
          </Tatami>
          <Tatami p="md" bg="primary" rounded="md" color="sky">
            <Kanji>bg="primary" - テーマ色</Kanji>
          </Tatami>
        </Tatami>
      </Tatami>

      {/* Borders & Shadows */}
      <Tatami>
        <Kanji as="h3" size="lg" weight="semibold">枠線と影 - Borders & Shadows</Kanji>
        <Tatami display="flex" gap="md" wrap="wrap">
          <Tatami p="md" border="sm" rounded="md">
            <Kanji>border="sm" - 細い縁</Kanji>
          </Tatami>
          <Tatami p="md" border="md" borderColor="primary" rounded="md" color="lavender">
            <Kanji>border="md" + テーマ色</Kanji>
          </Tatami>
          <Tatami p="md" shadow="md" bg="white" rounded="md">
            <Kanji>shadow="md" - 中くらいの影</Kanji>
          </Tatami>
          <Tatami p="md" shadow="lg" bg="white" rounded="lg">
            <Kanji>shadow="lg" - 大きな影</Kanji>
          </Tatami>
        </Tatami>
      </Tatami>

      {/* Rounded corners */}
      <Tatami>
        <Kanji as="h3" size="lg" weight="semibold">角の丸み - Border Radius</Kanji>
        <Tatami display="flex" gap="md" align="center">
          <Tatami p="md" bg="primary" rounded="none" color="sky">
            <Kanji>rounded="none"</Kanji>
          </Tatami>
          <Tatami p="md" bg="primary" rounded="md" color="lavender">
            <Kanji>rounded="md"</Kanji>
          </Tatami>
          <Tatami p="md" bg="primary" rounded="xl" color="wasabi">
            <Kanji>rounded="xl"</Kanji>
          </Tatami>
          <Tatami p="md" bg="primary" rounded="full" color="coral">
            <Kanji>rounded="full"</Kanji>
          </Tatami>
        </Tatami>
      </Tatami>
    </Tatami>
  ),
}

export const ComplexExample: Story = {
  render: () => (
    <Tatami
      maxW="lg"
      mx="auto"
      p="xl"
      bg="white"
      shadow="lg"
      rounded="xl"
      color="wasabi"
    >
      <Kanji as="h2" size="2xl" weight="bold" textAlign="center" m="lg">
        禅の商品カード
      </Kanji>

      <Tatami
        display="flex"
        gap="lg"
        p="lg"
        bg="primary"
        rounded="md"
        m="md"
      >
        <Tatami
          w="auto"
          minW="xs"
          minH="lg"
          bg="gray"
          rounded="md"
          display="flex"
          align="center"
          justify="center"
          textColor="muted"
        >
          <Kanji>商品画像</Kanji>
        </Tatami>

        <Tatami display="flex" direction="column" gap="sm" w="full">
          <Kanji as="h3" size="lg" weight="semibold">竹製茶碗セット</Kanji>
          <Kanji size="sm" color="secondary">
            職人が一つ一つ手作りした美しい茶碗。日本の伝統技法で作られ、
            茶道の心を現代に伝える逸品です。
          </Kanji>
          <Tatami display="flex" justify="between" align="center" py="sm">
            <Kanji size="xl" weight="bold" color="primary">¥15,800</Kanji>
            <Tatami
              px="md"
              py="sm"
              bg="white"
              rounded="md"
              textWeight="medium"
              style={{ cursor: 'pointer' }}
            >
              <Kanji>カートに追加</Kanji>
            </Tatami>
          </Tatami>
        </Tatami>
      </Tatami>
    </Tatami>
  ),
}

export const JapaneseLayoutExample: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="lg" color="lavender">
      <Kanji as="h2" size="2xl" weight="bold" theme="lavender">日本建築レイアウト - Japanese Architecture Layout</Kanji>

      {/* Traditional house layout */}
      <Tatami
        display="grid"
        gap="md"
        p="md"
        bg="secondary"
        rounded="lg"
        style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, auto)' }}
      >
        {/* 玄関 - Entrance */}
        <Tatami p="md" bg="primary" rounded="md" color="coral" style={{ gridColumn: 'span 1' }}>
          <Kanji weight="semibold" textAlign="center">玄関</Kanji>
        </Tatami>

        {/* 廊下 - Hallway */}
        <Tatami p="md" bg="gray" rounded="md" style={{ gridColumn: 'span 3' }}>
          <Kanji weight="semibold" textAlign="center">廊下</Kanji>
        </Tatami>

        {/* 和室 - Japanese room */}
        <Tatami p="lg" bg="primary" rounded="md" color="wasabi" style={{ gridColumn: 'span 2' }}>
          <Kanji weight="semibold" textAlign="center">和室</Kanji>
          <Kanji size="sm" textAlign="center">八畳間</Kanji>
        </Tatami>

        {/* 茶室 - Tea room */}
        <Tatami p="md" bg="primary" rounded="md" color="amber">
          <Kanji weight="semibold" textAlign="center">茶室</Kanji>
          <Kanji size="sm" textAlign="center">四畳半</Kanji>
        </Tatami>

        {/* 縁側 - Veranda */}
        <Tatami p="md" bg="primary" rounded="md" color="sky">
          <Kanji weight="semibold" textAlign="center">縁側</Kanji>
        </Tatami>

        {/* 庭 - Garden */}
        <Tatami p="lg" bg="white" border="sm" borderColor="primary" rounded="md" style={{ gridColumn: 'span 4' }}>
          <Kanji weight="semibold" textAlign="center" color="success">枯山水庭園</Kanji>
          <Kanji size="sm" textAlign="center">石と砂で表現された自然の美</Kanji>
        </Tatami>
      </Tatami>
    </Tatami>
  ),
}

export const PlaygroundExample: Story = {
  args: {
    display: 'flex',
    direction: 'column',
    gap: 'md',
    p: 'lg',
    bg: 'primary',
    rounded: 'md',
    color: 'sky',
  },
  render: (args) => (
    <Tatami {...args}>
      <Kanji weight="semibold">コントロールを編集してTatamiの動作を確認！</Kanji>
      <Kanji>これは超柔軟なdivコンポーネントです。</Kanji>
      <Kanji>あらゆるレイアウトニーズに最適。</Kanji>
    </Tatami>
  ),
}