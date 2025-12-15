import type { Meta, StoryObj } from '@storybook/react'
import { Kanji } from './Kanji'
import { Tatami } from '../Tatami'
import { Bento, BentoItem } from '../Bento'
import { vars } from '../../styles/tokens.css'

const meta: Meta<typeof Kanji> = {
  title: 'Components/Kanji (Typography)',
  component: Kanji,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
// ...
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'span', 'div', 'label'],
      description: 'The semantic HTML tag.',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
    },
    weight: {
      control: 'select',
      options: ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
    },
    color: {
      control: 'select',
      options: ['current', 'primary', 'secondary', 'muted', 'sakura', 'wasabi', 'sora', 'indigo', 'mikan', 'akane', 'fuji', 'sumi'],
    },
    gradient: {
      control: 'boolean',
    },
    gradientTheme: {
      control: 'select',
      options: ['sakura', 'wasabi', 'sora', 'indigo', 'mikan', 'akane', 'fuji', 'sumi', 'sunset', 'ocean', 'mystic'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// --- Stories ---

/**
 * The standard Kanji component usage. 
 * Play with the controls below to explore different styles.
 */
export const Default: Story = {
  args: {
    children: 'Kanso UI - Typography',
    as: 'h1',
    size: '6xl',
    weight: 'bold',
    color: 'primary',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
       {['9xl', '7xl', '5xl', '3xl', 'xl', 'base', 'xs'].map((size) => (
         <div key={size} style={{ display: 'flex', alignItems: 'baseline', gap: '2rem' }}>
            <span style={{ width: '60px', fontFamily: 'monospace', fontSize: '12px', color: vars.color.sumi400 }}>{size}</span>
            <Kanji size={size as any} weight="bold" color="primary">
              The quick brown fox
            </Kanji>
         </div>
       ))}
    </div>
  )
}

export const Weights: Story = {
  render: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'].map((w) => (
              <div key={w} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', alignItems: 'center' }}>
                  <span style={{ color: vars.color.sumi400, fontSize: '14px' }}>{w}</span>
                  <Kanji size="3xl" weight={w as any}>Kanso UI Typography</Kanji>
              </div>
          ))}
      </div>
  )
}

export const Colors: Story = {
  render: () => (
    <Bento columns="2" gap="lg">
      {[
        { color: 'sakura', kanji: '桜', desc: 'Cherry Blossom' },
        { color: 'wasabi', kanji: '山葵', desc: 'Fresh Green' },
        { color: 'sora', kanji: '空', desc: 'Sky Blue' },
        { color: 'indigo', kanji: '藍', desc: 'Deep Blue' },
        { color: 'mikan', kanji: '蜜柑', desc: 'Mandarin Orange' },
        { color: 'akane', kanji: '茜', desc: 'Madder Red' },
        { color: 'fuji', kanji: '藤', desc: 'Wisteria Purple' },
        { color: 'sumi', kanji: '墨', desc: 'Ink Black' },
      ].map((c) => (
         <BentoItem key={c.color}>
            <Tatami p="xl" rounded="lg" border="sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Kanji size="2xl" weight="bold" color={c.color as any}>{c.kanji}</Kanji>
                    <Kanji size="sm" color="muted" uppercase tracking="widest">{c.color}</Kanji>
                </div>
                <Kanji size="lg" color={c.color as any} weight="medium">{c.desc}</Kanji>
            </Tatami>
         </BentoItem>
      ))}
    </Bento>
  )
}

export const Gradients: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'grid', gap: '2rem' }}>
            <Kanji size="6xl" weight="black" gradient gradientTheme="sunset">Sunset over Kyoto</Kanji>
            <Kanji size="6xl" weight="black" gradient gradientTheme="ocean">Waves of Kanagawa</Kanji>
            <Kanji size="6xl" weight="black" gradient gradientTheme="mystic">Spirited Away</Kanji>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {['sakura', 'wasabi', 'sora', 'indigo', 'mikan', 'akane'].map((theme) => (
                <Tatami key={theme} p="md" rounded="md" bg="secondary" style={{ backgroundColor: vars.color.sumi50 }}>
                    <Kanji size="2xl" weight="extrabold" gradient gradientTheme={theme as any}>
                        {theme}
                    </Kanji>
                </Tatami>
            ))}
        </div>
    </div>
  )
}

export const Effects: Story = {
    render: () => (
        <Bento columns="3" gap="lg">
             <BentoItem>
                 <Tatami p="xl" rounded="lg" border="sm" bg="white" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                     <Kanji weight="bold" color="muted">Truncated Text</Kanji>
                     <Kanji truncate size="lg" color="primary">
                         This is a very long text that should be truncated because it exceeds the container width which is limited.
                     </Kanji>
                 </Tatami>
             </BentoItem>
             <BentoItem>
                 <Tatami p="xl" rounded="lg" border="sm" bg="white" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                     <Kanji weight="bold" color="muted">Line Clamp (2)</Kanji>
                     <Kanji clamp={2} size="lg" color="primary">
                         This is a multiline text block that should be clamped after exactly two lines. It is useful for card descriptions or blog excerpts where you want to maintain a uniform height across elements.
                     </Kanji>
                 </Tatami>
             </BentoItem>
             <BentoItem>
                 <Tatami p="xl" rounded="lg" border="sm" bg="white" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                     <Kanji weight="bold" color="muted">Decoration</Kanji>
                     <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Kanji underline size="lg">Underlined</Kanji>
                        <Kanji strikethrough size="lg" color="secondary">Strikethrough</Kanji>
                        <Kanji italic size="lg" color="akane">Italic Emphasis</Kanji>
                     </div>
                 </Tatami>
             </BentoItem>
        </Bento>
    )
}