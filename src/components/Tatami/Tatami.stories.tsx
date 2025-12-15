import type { Meta, StoryObj } from '@storybook/react'
import { Tatami } from './Tatami'
import { Kanji } from '../Kanji'
import { Bento, BentoItem } from '../Bento'

const meta: Meta<typeof Tatami> = {
  title: 'Components/Tatami (Div)',
  component: Tatami,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Tatami (畳) - The Foundation.

Think of **Tatami** as the fundamental building block of Kanso layouts. 
It's a super-powered \`div\` that speaks the language of the Kanso design system.

**Why use Tatami instead of \`div\`?**
- **Type-Safe Props**: No more magic strings or utility classes.
- **Kanso Integration**: Direct access to spacing, colors, and typography tokens.
- **Flexbox & Grid**: Native support for modern layouts.
- **Polymorphic**: Can render as \`section\`, \`article\`, \`main\` (TODO), etc.

Most UI components in Kanso are composed of Tatami elements.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    display: {
      control: 'select',
      options: ['block', 'flex', 'grid', 'inline-flex', 'none'],
    },
    bg: {
      control: 'select',
      options: ['transparent', 'white', 'gray', 'primary', 'secondary', 'sakura', 'wasabi', 'sora'],
    },
    p: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * The default Tatami behaves like a block element but with Kanso powers.
 */
export const Default: Story = {
  args: {
    bg: 'gray',
    p: 'md',
    rounded: 'md',
    children: <Kanji>I am a Tatami block. I conform to the grid.</Kanji>,
  },
}

/**
 * Tatami excels at Flexbox layouts.
 */
export const FlexRow: Story = {
  render: () => (
    <Tatami display='flex' gap='md' p='lg' bg='secondary' rounded='lg'>
      <Tatami p='md' bg='white' rounded='md' shadow='sm'>
        <Kanji weight='bold'>Item 1</Kanji>
      </Tatami>
      <Tatami p='md' bg='white' rounded='md' shadow='sm'>
        <Kanji weight='bold'>Item 2</Kanji>
      </Tatami>
      <Tatami p='md' bg='white' rounded='md' shadow='sm'>
        <Kanji weight='bold'>Item 3</Kanji>
      </Tatami>
    </Tatami>
  ),
}

/**
 * Use Tatami to build cards with distinct visual styles.
 */
export const CardExample: Story = {
  render: () => (
    <Tatami
      maxW='sm'
      mx='auto'
      p='none'
      bg='white'
      rounded='xl'
      shadow='lg'
      border='sm'
      borderColor='gray'
    >
      {/* Image placeholder */}
      <Tatami
        bg='sora'
        rounded='none'
        style={{
          height: '10rem',
          borderTopLeftRadius: 'var(--kanso-radius-xl)',
          borderTopRightRadius: 'var(--kanso-radius-xl)',
        }}
        display='flex'
        align='center'
        justify='center'
      >
        <Kanji size='4xl'>🗻</Kanji>
      </Tatami>

      <Tatami p='lg' display='flex' direction='column' gap='sm'>
        <Kanji size='xl' weight='bold'>
          Mount Fuji View
        </Kanji>
        <Kanji size='sm' color='secondary'>
          Experience the tranquility of Japan&apos;s most iconic mountain. A perfect getaway for the
          soul.
        </Kanji>

        <Tatami display='flex' justify='end' m='xs'>
          <Tatami
            px='md'
            py='xs'
            bg='primary'
            rounded='full'
            style={{ border: 'none', cursor: 'pointer' }}
            role='button'
          >
            <Kanji size='sm' weight='bold' color='white'>
              Book Now
            </Kanji>
          </Tatami>
        </Tatami>
      </Tatami>
    </Tatami>
  ),
}

/**
 * Tatami integrates perfectly with Bento grids.
 */
export const BentoIntegration: Story = {
  render: () => (
    <Bento columns='3' gap='md'>
      <BentoItem span='2'>
        <Tatami
          h='full'
          minH='md'
          bg='sakura'
          p='lg'
          rounded='lg'
          display='flex'
          align='center'
          justify='center'
        >
          <Kanji size='2xl' weight='bold' color='sakura'>
            Featured Content
          </Kanji>
        </Tatami>
      </BentoItem>
      <BentoItem>
        <Tatami
          h='full'
          bg='wasabi'
          p='lg'
          rounded='lg'
          display='flex'
          align='center'
          justify='center'
        >
          <Kanji size='xl' weight='bold' color='wasabi'>
            Sidebar
          </Kanji>
        </Tatami>
      </BentoItem>
      <BentoItem>
        <Tatami
          style={{ height: '8rem' }}
          bg='sora'
          p='lg'
          rounded='lg'
          display='flex'
          align='center'
          justify='center'
        >
          <Kanji weight='bold' color='sora'>
            Widget A
          </Kanji>
        </Tatami>
      </BentoItem>
      <BentoItem span='2'>
        <Tatami
          style={{ height: '8rem' }}
          bg='indigo'
          p='lg'
          rounded='lg'
          display='flex'
          align='center'
          justify='center'
        >
          <Kanji weight='bold' color='indigo'>
            Widget B (Wide)
          </Kanji>
        </Tatami>
      </BentoItem>
    </Bento>
  ),
}

/**
 * Showcasing the full Kanso color palette applied to Tatami backgrounds.
 */
export const ColorPalette: Story = {
  render: () => (
    <Bento columns='4' gap='md'>
      {['sakura', 'wasabi', 'sora', 'indigo', 'mikan', 'akane', 'fuji', 'sumi'].map(color => (
        <BentoItem key={color}>
          <Tatami
            p='lg'
            bg={color as any}
            rounded='md'
            display='flex'
            direction='column'
            align='center'
            justify='center'
            gap='sm'
          >
            <Kanji weight='bold' capitalize>
              {color}
            </Kanji>
            <Tatami w='full' style={{ height: '2rem' }} bg={`${color}Dark` as any} rounded='sm' />
          </Tatami>
        </BentoItem>
      ))}
    </Bento>
  ),
}
