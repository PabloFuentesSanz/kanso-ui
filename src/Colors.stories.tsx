import type { Meta, StoryObj } from '@storybook/react'
import { Tatami } from './components/Tatami'
import { Kanji } from './components/Kanji'
import { vars, palette } from './styles/tokens.css'

const meta: Meta = {
  title: 'Design System/Iro (Colors) 🎨',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
**Our Japanese-inspired color system (Nihon no Iro).** Designed to evoke nature, seasons, and harmony.

### How to use

**1. In TypeScript / Vanilla Extract**
Use the \`vars\` object for type-safety and autocompletion.

\`\`\`ts
import { vars } from './styles/tokens.css';

// In a .css.ts file
const myStyle = style({
  color: vars.color.sakura500
});

// Or inline styles in React
<div style={{ backgroundColor: vars.color.wasabi500 }}>
  Content
</div>
\`\`\`

**2. In Plain CSS**
Use the standard CSS variable syntax.

\`\`\`css
.my-class {
  background-color: var(--kanso-color-sakura500);
  color: var(--kanso-color-sumi900);
}
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Color families aligned with our tokens
const families = [
  {
    name: 'Sakura (桜)',
    key: 'sakura',
    description: 'Cherry Blossom - Soft, fleeting pinks representing spring and renewal.',
  },
  {
    name: 'Wasabi (山葵)',
    key: 'wasabi',
    description: 'Wasabi - Fresh, sharp greens representing nature and vitality.',
  },
  {
    name: 'Sora (空)',
    key: 'sora',
    description: 'Sky - Vast, calm blues representing openness and freedom.',
  },
  {
    name: 'Indigo (藍)',
    key: 'indigo',
    description: 'Indigo - Deep, traditional blues representing depth and stability.',
  },
  {
    name: 'Mikan (蜜柑)',
    key: 'mikan',
    description: 'Mandarin - Warm, energetic oranges representing luck and happiness.',
  },
  {
    name: 'Akane (茜)',
    key: 'akane',
    description: 'Madder - Vivid, passionate reds representing sun and life.',
  },
  {
    name: 'Fuji (藤)',
    key: 'fuji',
    description: 'Wisteria - Elegant, mysterious purples representing nobility.',
  },
  {
    name: 'Sumi (墨)',
    key: 'sumi',
    description: 'Ink - Grayscale neutrals representing shadow and silence.',
  },
]

const scales = ['25', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']

const CopyableColor = ({
  color,
  name,
  variable,
}: {
  color: string
  name: string
  variable: string
}) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    // In a real app we might show a toast here
    // console.log(`Copied: ${text}`)
  }

  // Create CSS variable name from the JS variable path: vars.color.sakura500 -> --kanso-color-sakura500
  // Note: This logic assumes our contract map in tokens.css.ts.
  // For 'vars.color.sakura500' -> 'sakura500'
  const keyName = variable.split('.').pop()
  const cssVar = `--kanso-color-${keyName}`

  // Ensure color is a string for copy ease. It should be hex.
  return (
    <Tatami
      display='flex'
      direction='column'
      gap='xs'
      style={{ width: '140px' }} // Slightly wider for actions
    >
      <Tatami
        rounded='md'
        shadow='sm'
        style={{
          height: '80px',
          backgroundColor: color,
          cursor: 'pointer',
          transition: 'transform 0.2s',
          border: '1px solid rgba(0,0,0,0.05)',
        }}
        onClick={() => handleCopy(color)}
        title={`Click to copy HEX: ${color}`}
      />
      <Tatami display='flex' direction='column' gap='xs' p='xs'>
        <Tatami display='flex' align='center' gap='xs'>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: color,
              border: '1px solid black',
            }}
          />
          <Kanji size='xs' weight='bold'>
            {name}
          </Kanji>
        </Tatami>

        {/* Copy Options */}
        <Tatami
          style={{
            fontSize: '10px',
            cursor: 'pointer',
            padding: '2px',
            backgroundColor: 'rgba(0,0,0,0.03)',
            borderRadius: '4px',
          }}
          onClick={() => handleCopy(variable)}
          title='Copy TypeScript Variable (for Vanilla Extract)'
        >
          <Kanji size='xs' family='mono' color='secondary'>
            {variable}
          </Kanji>
        </Tatami>

        <Tatami
          style={{
            fontSize: '10px',
            cursor: 'pointer',
            padding: '2px',
            backgroundColor: 'rgba(0,0,0,0.03)',
            borderRadius: '4px',
          }}
          onClick={() => handleCopy(`var(${cssVar})`)}
          title='Copy CSS Variable (for plain CSS)'
        >
          <Kanji size='xs' family='mono' color='muted'>{`var(${cssVar})`}</Kanji>
        </Tatami>
      </Tatami>
    </Tatami>
  )
}

export const ColorPalette: Story = {
  render: () => (
    <Tatami display='flex' direction='column' gap='2xl'>
      <Tatami>
        <Kanji
          as='h1'
          size='3xl'
          weight='bold'
          className={undefined}
          style={{ marginBottom: vars.spacing['4'] }}
        >
          Nihon no Iro (日本の色)
        </Kanji>
        <Kanji size='lg' color='secondary'>
          A curated palette inspired by traditional Japanese colors and seasons.
        </Kanji>
      </Tatami>

      {families.map(family => (
        <Tatami key={family.key} display='flex' direction='column' gap='md'>
          <Tatami>
            <Kanji as='h2' size='xl' weight='bold' color='primary'>
              {family.name}
            </Kanji>
            <Kanji color='secondary'>{family.description}</Kanji>
          </Tatami>

          <Tatami display='flex' gap='md' wrap='wrap'>
            {scales.map(scale => {
              const paletteKey = `${family.key}${scale}` as keyof typeof palette
              const hexValue = palette[paletteKey]
              const variableName = `vars.color.${paletteKey}`

              return (
                <CopyableColor key={scale} name={scale} color={hexValue} variable={variableName} />
              )
            })}
          </Tatami>
        </Tatami>
      ))}

      <Tatami>
        <Kanji as='h2' size='xl' weight='bold' style={{ marginBottom: vars.spacing['4'] }}>
          Special Colors
        </Kanji>
        <Tatami display='flex' gap='md' wrap='wrap'>
          <CopyableColor name='Yuki (White)' color={palette.yuki} variable='vars.color.yuki' />
        </Tatami>
      </Tatami>
    </Tatami>
  ),
}

export const SemanticUsage: Story = {
  render: () => (
    <Tatami display='flex' direction='column' gap='xl'>
      <Tatami>
        <Kanji as='h2' size='2xl' weight='bold'>
          Semantic Aliases
        </Kanji>
        <Kanji style={{ marginBottom: vars.spacing['6'] }}>
          These colors adapt to the active theme (Light/Dark).
        </Kanji>
      </Tatami>

      <Tatami
        display='grid'
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}
      >
        {[
          { name: 'Primary', token: 'primary', desc: 'Main actions (Sora)' },
          { name: 'Secondary', token: 'secondary', desc: 'Secondary actions (Sumi)' },
          { name: 'Success', token: 'success', desc: 'Positive feedback (Wasabi)' },
          { name: 'Warning', token: 'warning', desc: 'Attention needed (Mikan)' },
          { name: 'Error', token: 'error', desc: 'Critical issues (Akane)' },
          { name: 'Background', token: 'background', desc: 'Page background' },
          { name: 'Text Primary', token: 'textPrimary', desc: 'Main text' },
        ].map(item => (
          <Tatami key={item.token} p='md' border='sm' borderColor='border' rounded='md'>
            <Tatami
              rounded='sm'
              style={{
                height: '60px',
                marginBottom: vars.spacing['2'],
                backgroundColor: vars.color[item.token],
              }}
            />
            <Kanji weight='bold'>{item.name}</Kanji>
            <Kanji size='sm' color='muted'>
              {item.desc}
            </Kanji>
            <Kanji size='xs' family='mono' style={{ marginTop: vars.spacing['1'] }}>
              vars.color.{item.token}
            </Kanji>
          </Tatami>
        ))}
      </Tatami>
    </Tatami>
  ),
}
