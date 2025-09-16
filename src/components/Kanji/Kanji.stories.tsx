import type { Meta, StoryObj } from '@storybook/react'
import { Kanji } from './Kanji'
import { Tatami } from '../Tatami'
import { Kirei } from '../Kirei'

const meta: Meta<typeof Kanji> = {
  title: 'Components/Kanji (Typography) 📝',
  component: Kanji,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Kanji (漢字) - A powerful typography component for all text needs. Control size, weight, styling, colors, and effects with clean, intuitive props.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'],
      description: 'HTML element to render as',
    },
    size: {
      control: 'select',
      options: [
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      description: 'Font size',
    },
    weight: {
      control: 'select',
      options: ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
      description: 'Font weight',
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'muted',
        'white',
        'black',
        'danger',
        'warning',
        'success',
        'info',
      ],
      description: 'Text color',
    },
    family: {
      control: 'select',
      options: ['sans', 'serif', 'mono', 'display', 'handwriting'],
      description: 'Font family',
    },
    theme: {
      control: 'select',
      options: ['sky', 'lavender', 'sage', 'amber', 'coral'],
      description: 'Theme for gradients and accents',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Basic Examples
export const Default: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="md">
      <Kanji>美しい日本の文字 - Beautiful Japanese typography</Kanji>
      <Kanji size="lg" weight="semibold">
        書道の心 - The spirit of calligraphy
      </Kanji>
      <Kanji color="muted" italic>
        静寂の中に美を見つける - Finding beauty in silence
      </Kanji>
    </Tatami>
  ),
}

export const FontSizes: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="md">
      <Kanji as="h2" size="2xl" weight="bold" theme="sage">文字サイズ - Font Sizes</Kanji>
      <Kanji size="xs">極小 - xs: 茶室の静寂</Kanji>
      <Kanji size="sm">小 - sm: 桜の花びら</Kanji>
      <Kanji size="base">基本 - base: 和の心</Kanji>
      <Kanji size="lg">大 - lg: 富士山の雄大さ</Kanji>
      <Kanji size="xl">特大 - xl: 太陽の光</Kanji>
      <Kanji size="2xl">二倍 - 2xl: 月の美しさ</Kanji>
      <Kanji size="3xl">三倍 - 3xl: 海の深さ</Kanji>
      <Kanji size="4xl">四倍 - 4xl: 山の高さ</Kanji>
      <Kanji size="5xl">五倍 - 5xl: 空の広さ</Kanji>
      <Kanji size="6xl">六倍 - 6xl: 宇宙の無限</Kanji>
    </Tatami>
  ),
}

export const FontWeights: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="md">
      <Kanji as="h2" size="2xl" weight="bold" theme="lavender">文字の重み - Font Weights</Kanji>
      <Kanji size="lg" weight="thin">薄 - thin: 朝霧のように</Kanji>
      <Kanji size="lg" weight="light">軽 - light: 羽のように</Kanji>
      <Kanji size="lg" weight="normal">普通 - normal: 日常の美</Kanji>
      <Kanji size="lg" weight="medium">中 - medium: バランスの取れた美</Kanji>
      <Kanji size="lg" weight="semibold">半太 - semibold: 竹の強さ</Kanji>
      <Kanji size="lg" weight="bold">太 - bold: 力強い筆致</Kanji>
      <Kanji size="lg" weight="extrabold">極太 - extrabold: 武士の心</Kanji>
      <Kanji size="lg" weight="black">最太 - black: 不動の意志</Kanji>
    </Tatami>
  ),
}

export const TextStyles: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="md">
      <Kanji as="h2" size="2xl" weight="bold" theme="sky">文字装飾 - Text Styles</Kanji>
      <Kanji size="lg">普通 - 禅の心</Kanji>
      <Kanji size="lg" italic>斜体 - 風に舞う桜</Kanji>
      <Kanji size="lg" underline>Underlined Text</Kanji>
      <Kanji size="lg" strikethrough>Strikethrough Text</Kanji>
      <Kanji size="lg" underline strikethrough>Both Decorations</Kanji>
      <Kanji size="lg" uppercase>UPPERCASE WABI-SABI</Kanji>
      <Kanji size="lg" lowercase>lowercase mono no aware</Kanji>
      <Kanji size="lg" capitalize>Capitalize Every Word</Kanji>
    </Tatami>
  ),
}

export const TextColors: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="md" p="lg" bg="gray" rounded="md">
      <Kanji as="h2" size="2xl" weight="bold">色の調和 - Color Harmony</Kanji>
      <Kanji size="lg" color="primary">主色 - primary: 日本の美意識</Kanji>
      <Kanji size="lg" color="secondary">副色 - secondary: 侘寂の境地</Kanji>
      <Kanji size="lg" color="muted">淡色 - muted: 奥ゆかしさ</Kanji>
      <Tatami bg="white" p="md" rounded="sm" border="sm">
        <Kanji size="lg" color="black">黒 - black: 墨の深み</Kanji>
      </Tatami>
      <Kanji size="lg" color="danger">警告 - danger: 紅葉の色</Kanji>
      <Kanji size="lg" color="warning">注意 - warning: 黄金の秋</Kanji>
      <Kanji size="lg" color="success">成功 - success: 若葉の緑</Kanji>
      <Kanji size="lg" color="info">情報 - info: 空の青</Kanji>
    </Tatami>
  ),
}

export const FontFamilies: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="md">
      <Kanji as="h2" size="2xl" weight="bold" theme="amber">書体の種類 - Font Families</Kanji>
      <Kanji size="lg" family="sans">ゴシック体 - sans: モダンな日本</Kanji>
      <Kanji size="lg" family="serif">明朝体 - serif: 伝統の美しさ</Kanji>
      <Kanji size="lg" family="mono">等幅 - mono: コードの詩</Kanji>
      <Kanji size="lg" family="display">表示用 - display: 看板の文字</Kanji>
      <Kanji size="lg" family="handwriting">手書き風 - handwriting: 心からの手紙</Kanji>
    </Tatami>
  ),
}

export const TextAlignment: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="md">
      <Kanji as="h2" size="2xl" weight="bold" theme="coral">文字配置 - Text Alignment</Kanji>
      <Tatami border="sm" borderColor="primary" p="md" rounded="md" color="sky">
        <Kanji size="lg" align="left">左寄せ - 伝統的な配置</Kanji>
      </Tatami>
      <Tatami border="sm" borderColor="primary" p="md" rounded="md" color="lavender">
        <Kanji size="lg" align="center">中央寄せ - 調和とバランス</Kanji>
      </Tatami>
      <Tatami border="sm" borderColor="primary" p="md" rounded="md" color="sage">
        <Kanji size="lg" align="right">右寄せ - 現代的な美学</Kanji>
      </Tatami>
      <Tatami border="sm" borderColor="primary" p="md" rounded="md" color="amber">
        <Kanji align="justify">
          両端揃え - justify: 文章全体が美しく整列し、読み手に安らぎを与える。
          日本の美学では、整然とした配置が心の平静をもたらすとされている。
          書道においても、文字の配置は作品の品格を決める重要な要素である。
        </Kanji>
      </Tatami>
    </Tatami>
  ),
}

export const LineHeightAndSpacing: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="xl">
      <Tatami>
        <Kanji as="h3" size="xl" weight="semibold" theme="sage">行間の美学 - Line Height</Kanji>
        <Tatami display="flex" direction="column" gap="md">
          <Tatami border="sm" borderColor="gray" p="md" rounded="md">
            <Kanji leading="tight">
              密な行間 - tight: 茶道の所作のように、一つ一つの動作が密接に繋がり、
              無駄のない美しさを表現する。短い詩や俳句に適している。
            </Kanji>
          </Tatami>
          <Tatami border="sm" borderColor="gray" p="md" rounded="md">
            <Kanji leading="normal">
              標準行間 - normal: 日常の文章に最適な間隔。読みやすさと美しさの
              バランスが取れており、長文でも疲れにくい配置である。
            </Kanji>
          </Tatami>
          <Tatami border="sm" borderColor="gray" p="md" rounded="md">
            <Kanji leading="relaxed">
              ゆったり行間 - relaxed: 庭園の配置のように、ゆとりを持った美しさ。
              瞑想的な文章や詩的な表現に向いている配置である。
            </Kanji>
          </Tatami>
        </Tatami>
      </Tatami>

      <Tatami>
        <Kanji as="h3" size="xl" weight="semibold" theme="lavender">文字間隔 - Letter Spacing</Kanji>
        <Tatami display="flex" direction="column" gap="md">
          <Kanji size="lg" tracking="tight">密間隔: 書道の流れるような美</Kanji>
          <Kanji size="lg" tracking="normal">標準間隔: 日常の読みやすさ</Kanji>
          <Kanji size="lg" tracking="wide">広間隔: ゆとりある表現</Kanji>
          <Kanji size="lg" tracking="widest" uppercase>最広間隔: ZEN NO KOKORO</Kanji>
        </Tatami>
      </Tatami>
    </Tatami>
  ),
}

export const GradientsAndEffects: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="xl">
      <Kanji as="h2" size="3xl" weight="bold" theme="coral">色彩効果 - Gradients & Effects</Kanji>

      <Tatami>
        <Kanji as="h3" size="xl" weight="semibold">五色の調和 - Gradient Harmony</Kanji>
        <Tatami display="flex" direction="column" gap="lg">
          <Kanji size="4xl" weight="bold" gradient theme="sky">
            空の色 - Sky Harmony
          </Kanji>
          <Kanji size="4xl" weight="bold" gradient theme="lavender">
            薫衣草の香り - Lavender Dreams
          </Kanji>
          <Kanji size="4xl" weight="bold" gradient theme="sage">
            若葉の息づき - Sage Wisdom
          </Kanji>
          <Kanji size="4xl" weight="bold" gradient theme="amber">
            琥珀の輝き - Amber Light
          </Kanji>
          <Kanji size="4xl" weight="bold" gradient theme="coral">
            珊瑚の美しさ - Coral Beauty
          </Kanji>
        </Tatami>
      </Tatami>

      <Tatami bg="secondary" p="xl" rounded="lg">
        <Kanji as="h3" size="xl" weight="semibold">文字の陰影 - Text Shadows</Kanji>
        <Tatami display="flex" direction="column" gap="lg">
          <Kanji size="2xl" weight="bold" shadow="sm">薄い影 - 朝露の美しさ</Kanji>
          <Kanji size="2xl" weight="bold" shadow="md">標準影 - 午後の木漏れ日</Kanji>
          <Kanji size="2xl" weight="bold" shadow="lg">濃い影 - 夕暮れの趣</Kanji>
          <Kanji size="2xl" weight="bold" gradient shadow="md" theme="coral">
            彩影融合 - 虹色の詩
          </Kanji>
        </Tatami>
      </Tatami>
    </Tatami>
  ),
}

export const TextTruncation: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="xl">
      <Kanji as="h2" size="2xl" weight="bold" theme="sage">文字制限の美学 - Text Truncation</Kanji>

      <Tatami>
        <Kanji as="h3" size="lg" weight="semibold">一行省略 - Single Line</Kanji>
        <Tatami w="300px" border="sm" borderColor="primary" p="md" rounded="md" color="sky">
          <Kanji truncate>
            これは非常に長い日本の文章で、容器の幅を超えた時に省略記号で表示される美しい例である
          </Kanji>
        </Tatami>
      </Tatami>

      <Tatami>
        <Kanji as="h3" size="lg" weight="semibold">複数行制限 - Multi-line Clamp</Kanji>
        <Tatami w="300px" border="sm" borderColor="primary" p="md" rounded="md" color="lavender">
          <Kanji as="h4" size="md" weight="medium">二行制限</Kanji>
          <Kanji clamp={2}>
            日本の美学において、制限は創造性を生み出す源泉である。茶室の狭い空間、
            俳句の短い形式、盆栽の小さな世界。これらすべてが制限の中に無限の美を見出している。
            短い文章の中にも、深い思想と感情が込められているのである。
          </Kanji>
        </Tatami>

        <Tatami w="300px" border="sm" borderColor="primary" p="md" rounded="md" color="amber">
          <Kanji as="h4" size="md" weight="medium">三行制限</Kanji>
          <Kanji clamp={3}>
            禅の教えでは、「少ない中に多くを見る」という概念がある。これは文章においても同様で、
            簡潔な表現の中に豊かな意味を込めることができる。読み手は制限された情報から、
            自身の経験と想像力を使って、より深い理解に到達する。これこそが日本の美意識の
            核心部分であり、現代のデザインにも活かされている重要な概念なのである。
          </Kanji>
        </Tatami>
      </Tatami>
    </Tatami>
  ),
}

export const SemanticElements: Story = {
  render: () => (
    <Tatami display="flex" direction="column" gap="xl">
      <Kanji as="h2" size="3xl" weight="bold" theme="coral">意味構造 - Semantic Elements</Kanji>

      <Kanji as="h1" size="6xl" weight="bold">
        大見出し - Main Title
      </Kanji>

      <Kanji as="h2" size="4xl" weight="semibold">
        副見出し - Section Header
      </Kanji>

      <Kanji as="h3" size="2xl" weight="medium">
        小見出し - Subsection
      </Kanji>

      <Kanji as="p" leading="relaxed">
        段落文章 - この文章は日本の美学について語っている。侘寂の心、物の哀れ、
        そして間の美しさ。これらすべてが現代のデザインにも息づいている。
      </Kanji>

      <Kirei color="sage" variant="outlined" p="lg">
        <Kanji as="blockquote" size="lg" italic color="secondary" family="serif">
          「美は細部に宿る」- 千利休の茶道哲学より
        </Kanji>
      </Kirei>

      <Tatami bg="gray" p="md" rounded="md">
        <Kanji as="code" family="mono" size="sm" color="info">
          const wabi_sabi = '不完全の中の美しさ';
        </Kanji>
      </Tatami>
    </Tatami>
  ),
}

export const PlaygroundExample: Story = {
  args: {
    size: '2xl',
    weight: 'semibold',
    color: 'primary',
    gradient: false,
    italic: false,
    underline: false,
    theme: 'sky',
  },
  render: args => (
    <Tatami p="lg" bg="secondary" rounded="lg">
      <Kanji {...args}>
        美しい日本の文字 - Perfect typography made simple
      </Kanji>
    </Tatami>
  ),
}