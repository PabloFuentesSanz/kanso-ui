import type { Meta, StoryObj } from '@storybook/react';
import { darkTheme, lightTheme, palette } from '../../tokens';
import * as s from './Tokens.css';

const COLOR_SWATCHES = [
  { name: 'ink', hex: palette.sumi },
  { name: 'ink2', hex: palette.kage },
  { name: 'ink3', hex: palette.hai },
  { name: 'ink4', hex: palette.usuzumi },
  { name: 'paper', hex: palette.washi },
  { name: 'paper2', hex: palette.usuki },
  { name: 'paper3', hex: palette.nezu },
  { name: 'accent', hex: palette.matcha },
  { name: 'accent2', hex: palette.matchaSoft },
  { name: 'accentPale', hex: palette.matchaPale },
  { name: 'warm', hex: palette.kogane },
  { name: 'warmPale', hex: palette.koganePale },
  { name: 'red', hex: palette.beni },
  { name: 'redPale', hex: palette.beniPale },
] as const;

const SPACE_SCALE = [
  { token: 'space[1]', value: '4px' },
  { token: 'space[2]', value: '8px' },
  { token: 'space[3]', value: '12px' },
  { token: 'space[4]', value: '20px' },
  { token: 'space[5]', value: '32px' },
  { token: 'space[6]', value: '48px' },
  { token: 'space[7]', value: '80px' },
] as const;

const TokensPage = () => (
  <div className={s.page}>
    <section className={s.section}>
      <p className={s.sectionLabel}>Type scale</p>
      <h1 className={s.display}>寛素 — Kanso</h1>
      <h1 className={s.h1}>Heading 1 — Syne 400</h1>
      <h2 className={s.h2}>Heading 2 — Syne 400</h2>
      <h3 className={s.h3}>Heading 3 — Syne 500</h3>
      <p className={s.body}>
        Body copy in Syne 300 at 0.9rem with line-height 1.7. Generous
        leading is part of the design — whitespace is a first-class
        compositional element, not absence of content.
      </p>
      <p className={s.mono}>--kanso-mono · DM Mono 300</p>
    </section>

    <section className={s.section}>
      <p className={s.sectionLabel}>Color</p>
      <div className={s.swatchGrid}>
        {COLOR_SWATCHES.map((c) => (
          <div key={c.name} className={s.swatch}>
            <div className={s.swatchChip} style={{ background: c.hex }} />
            <span className={s.swatchName}>{c.name}</span>
            <span className={s.swatchHex}>{c.hex}</span>
          </div>
        ))}
      </div>
    </section>

    <section className={s.section}>
      <p className={s.sectionLabel}>Space scale</p>
      {SPACE_SCALE.map((row) => (
        <div key={row.token} className={s.spaceRow}>
          <span className={s.mono}>{row.token}</span>
          <span className={s.mono}>{row.value}</span>
          <div className={s.spaceFill} style={{ width: row.value }} />
        </div>
      ))}
    </section>
  </div>
);

const meta = {
  component: TokensPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TokensPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    (Story) => {
      document.documentElement.classList.remove(darkTheme);
      document.documentElement.classList.add(lightTheme);
      return Story();
    },
  ],
};

export const Dark: Story = {
  decorators: [
    (Story) => {
      document.documentElement.classList.remove(lightTheme);
      document.documentElement.classList.add(darkTheme);
      return Story();
    },
  ],
};
