import type { Meta, StoryObj } from '@storybook/react'
import { Bento, BentoItem } from './Bento'
import { Tatami } from '../Tatami'
import { Kanji } from '../Kanji'

const meta: Meta<typeof Bento> = {
  title: 'Components/Bento (Grid)',
  component: Bento,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
### Bento (弁当) - Harmony in structure.

A flexible grid layout system inspired by traditional Japanese lunch boxes.
Just as a Bento box organizes a meal into balanced compartments, the Bento component organizes your content into harmonious grids.

It supports:
- **Responsive layouts**
- **Gap management via Kanso spacing tokens**
- **Col/Row spanning for complex dashboards**
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6', '12'],
      description: 'Number of columns in the grid',
      table: { defaultValue: { summary: '3' } }
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Spacing between items',
      table: { defaultValue: { summary: 'md' } }
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    columns: '3',
    gap: 'md',
  },
  render: (args) => (
    <Bento {...args}>
      <BentoItem>
        <Tatami bg="sakura" rounded="md" p="md" display="flex" align="center" justify="center" shadow="sm" style={{ height: '100px' }}>
             <Kanji weight="medium" color="white">Sakura 300</Kanji>
        </Tatami>
      </BentoItem>
      <BentoItem>
        <Tatami bg="wasabi" rounded="md" p="md" display="flex" align="center" justify="center" shadow="sm" style={{ height: '100px' }}>
             <Kanji weight="medium" color="white">Wasabi 300</Kanji>
        </Tatami>
      </BentoItem>
      <BentoItem>
        <Tatami bg="sora" rounded="md" p="md" display="flex" align="center" justify="center" shadow="sm" style={{ height: '100px' }}>
             <Kanji weight="medium" color="white">Sora 300</Kanji>
        </Tatami>
      </BentoItem>
    </Bento>
  ),
}

export const SpanningColumns: Story = {
  render: () => (
    <Bento columns="3" gap="md">
      <BentoItem span="2">
        <Tatami bg="sora" rounded="md" p="md" display="flex" align="center" justify="center" shadow="sm" style={{ height: '100px' }}>
            <Kanji weight="bold" color="white">Sora (Sky) - Pastel</Kanji>
        </Tatami>
      </BentoItem>
      <BentoItem>
        <Tatami bg="soraLight" rounded="md" p="md" display="flex" align="center" justify="center" shadow="sm" style={{ height: '100px' }}>
            <Kanji weight="medium" color="sora">Sora Light</Kanji>
        </Tatami>
      </BentoItem>
      
      <BentoItem>
        <Tatami bg="soraLight" rounded="md" p="md" display="flex" align="center" justify="center" shadow="sm" style={{ height: '100px' }}>
             <Kanji weight="medium" color="sora">Sora Light</Kanji>
        </Tatami>
      </BentoItem>
      <BentoItem span="2">
        <Tatami bg="soraDark" rounded="md" p="md" display="flex" align="center" justify="center" shadow="sm" style={{ height: '100px' }}>
            <Kanji weight="bold" color="white">Sora Medium (500)</Kanji>
        </Tatami>
      </BentoItem>
    </Bento>
  ),
}

export const DashboardLayout: Story = {
  name: 'Harmony Dashboard',
  render: () => (
    <div style={{ maxWidth: '800px' }}>
         <h3 style={{ marginBottom: '1rem', fontFamily: 'sans-serif', color: '#444' }}>Analytics Dashboard</h3>
         
         <Bento columns="4" gap="md">
            {/* Main KPI */}
            <BentoItem span="2" rowSpan="2">
              <Tatami bg="indigo" h="full" rounded="lg" p="lg" display="flex" direction="column" align="center" justify="center" shadow="md">
                   <Kanji size="3xl" weight="bold" color="white">¥ 2.4M</Kanji>
                   <Kanji size="sm" color="white" style={{ opacity: 0.9 }}>Total Revenue</Kanji>
              </Tatami>
            </BentoItem>
            
            {/* Small stats */}
            <BentoItem>
               <Tatami bg="wasabi" h="full" rounded="lg" p="md" display="flex" direction="column" align="center" justify="center" shadow="sm" style={{ minHeight: '100px' }}>
                   <Kanji size="xl" weight="bold" color="white">+12%</Kanji>
                   <Kanji size="xs" color="white">Growth</Kanji>
               </Tatami>
            </BentoItem>
            <BentoItem>
               <Tatami bg="mikan" h="full" rounded="lg" p="md" display="flex" direction="column" align="center" justify="center" shadow="sm" style={{ minHeight: '100px' }}>
                   <Kanji size="xl" weight="bold" color="white">346</Kanji>
                   <Kanji size="xs" color="white">New Users</Kanji>
               </Tatami>
            </BentoItem>
            
             {/* Wide bottom */}
            <BentoItem span="2">
               <Tatami bg="sumiLight" h="full" rounded="lg" p="md" display="flex" align="center" justify="between" shadow="sm" style={{ height: '80px' }}>
                  <Kanji size="sm" color="sumi">System Status</Kanji>
                  <Tatami px="sm" py="xs" bg="wasabi" rounded="full">
                      <Kanji size="xs" weight="bold" color="white">Operational</Kanji>
                  </Tatami>
               </Tatami>
            </BentoItem>
         </Bento>
    </div>
  )
}

export const ColorsOfJapan: Story = {
  render: () => (
    <Bento columns="5" gap="sm">
      <BentoItem>
          <Tatami bg="sakura" p="md" rounded="md" display="flex" align="center" justify="center" shadow="sm" style={{ aspectRatio: '1/1' }}>
              <Kanji size="xs" weight="bold" color="white">Sakura</Kanji>
          </Tatami>
      </BentoItem>
      <BentoItem>
          <Tatami bg="wasabi" p="md" rounded="md" display="flex" align="center" justify="center" shadow="sm" style={{ aspectRatio: '1/1' }}>
              <Kanji size="xs" weight="bold" color="white">Wasabi</Kanji>
          </Tatami>
      </BentoItem>
      <BentoItem>
          <Tatami bg="sora" p="md" rounded="md" display="flex" align="center" justify="center" shadow="sm" style={{ aspectRatio: '1/1' }}>
              <Kanji size="xs" weight="bold" color="white">Sora</Kanji>
          </Tatami>
      </BentoItem>
      <BentoItem>
          <Tatami bg="mikan" p="md" rounded="md" display="flex" align="center" justify="center" shadow="sm" style={{ aspectRatio: '1/1' }}>
              <Kanji size="xs" weight="bold" color="white">Mikan</Kanji>
          </Tatami>
      </BentoItem>
      <BentoItem>
          <Tatami bg="akane" p="md" rounded="md" display="flex" align="center" justify="center" shadow="sm" style={{ aspectRatio: '1/1' }}>
              <Kanji size="xs" weight="bold" color="white">Akane</Kanji>
          </Tatami>
      </BentoItem>
    </Bento>
  )
}
