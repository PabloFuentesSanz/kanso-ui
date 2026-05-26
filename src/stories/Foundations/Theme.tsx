import { CodeBlock, DocSection, DocsLayout, ScreenHeader } from '../_components';
import { colorVars, darkTheme, lightTheme } from '../../tokens';
import * as s from './Theme.css';

const APPLY_CODE = `import { lightTheme, darkTheme } from 'kanso-ui';

// Pick a default
document.documentElement.classList.add(lightTheme);

// Toggle later
const toggle = (mode: 'light' | 'dark') => {
  document.documentElement.classList.remove(lightTheme, darkTheme);
  document.documentElement.classList.add(mode === 'dark' ? darkTheme : lightTheme);
};`;

const SYSTEM_CODE = `import { lightTheme, darkTheme } from 'kanso-ui';

const mq = matchMedia('(prefers-color-scheme: dark)');
const apply = () => {
  document.documentElement.classList.remove(lightTheme, darkTheme);
  document.documentElement.classList.add(mq.matches ? darkTheme : lightTheme);
};

apply();
mq.addEventListener('change', apply);`;

type SwapRow = { jsName: string; cssVar: string; light: string; dark: string };

const INK_SWAP: SwapRow[] = [
  { jsName: 'color.ink',     cssVar: '--kanso-ink',     light: '#1a1a18', dark: '#f0f0eb' },
  { jsName: 'color.ink2',    cssVar: '--kanso-ink-2',   light: '#4a4a44', dark: '#c4c4bc' },
  { jsName: 'color.ink3',    cssVar: '--kanso-ink-3',   light: '#8a8a82', dark: '#8a8a82' },
  { jsName: 'color.ink4',    cssVar: '--kanso-ink-4',   light: '#c4c4bc', dark: '#4a4a44' },
  { jsName: 'color.paper',   cssVar: '--kanso-paper',   light: '#fafaf7', dark: '#111110' },
  { jsName: 'color.paper2',  cssVar: '--kanso-paper-2', light: '#f2f2ed', dark: '#1a1a18' },
  { jsName: 'color.paper3',  cssVar: '--kanso-paper-3', light: '#e8e8e2', dark: '#2a2a26' },
];

const STABLE: SwapRow[] = [
  { jsName: 'color.accent',     cssVar: '--kanso-accent',      light: '#2d5a3d', dark: '#2d5a3d' },
  { jsName: 'color.accent2',    cssVar: '--kanso-accent-2',    light: '#4a7c5f', dark: '#4a7c5f' },
  { jsName: 'color.warm',       cssVar: '--kanso-warm',        light: '#8b6914', dark: '#8b6914' },
  { jsName: 'color.red',        cssVar: '--kanso-red',         light: '#7a2e2e', dark: '#7a2e2e' },
];

const ThemePalette = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div className={s.swatchBar}>
      {INK_SWAP.map((r) => (
        <div key={r.cssVar} className={s.swatchCell} style={{ background: `var(${r.cssVar})` }} />
      ))}
    </div>
  </div>
);

export const Theme = () => (
  <DocsLayout>
    <ScreenHeader
      eyebrow="寛素UI · Foundations"
      title="Theme"
      tagline="Two themes ship with the system — Light and Dark. They invert the paper / ink scales while keeping the matcha accent, kogane warmth and beni red intact. Use the toolbar at the top to switch this whole sidebar between modes."
      kanji="陰"
    />

    <DocSection
      num="01 · Side by side"
      heading="Light and Dark"
      description="Each panel locks itself to one theme class so the colour tokens inside resolve independently of the active toolbar setting — useful for comparing them at a glance."
    >
      <div className={s.compareGrid}>
        <div className={`${lightTheme} ${s.themePanel}`}>
          <span className={s.themeLabel}>Light</span>
          <ThemePalette />
        </div>
        <div className={`${darkTheme} ${s.themePanel}`}>
          <span className={s.themeLabel}>Dark</span>
          <ThemePalette />
        </div>
      </div>
    </DocSection>

    <DocSection
      num="02 · What swaps"
      heading="Inversion, not recolouring"
      description="Dark mode mirrors the ink/paper scales and darkens the pale companion surfaces. Saturated accents (matcha, kogane, beni) stay identical between modes so brand presence is constant."
    >
      <SwapTable rows={INK_SWAP} caption="Inverts" />
      <p className={s.para} style={{ marginTop: 32 }}>The accents are loud enough on either surface that they don't need a dark-mode variant.</p>
      <SwapTable rows={STABLE} caption="Stays the same" />
    </DocSection>

    <DocSection
      num="03 · Apply"
      heading="Switch the class on the root"
      description="Theme classes (lightTheme, darkTheme) are plain strings exported from kanso-ui. Add one to <html> and every colour token inside the document picks up that theme's values."
    >
      <CodeBlock label="ts" language="tsx">{APPLY_CODE}</CodeBlock>

      <p className={s.para} style={{ margin: '32px 0 12px' }}>
        Honouring the user's OS preference is one matchMedia listener away — no provider, no context.
      </p>
      <CodeBlock label="ts" language="tsx">{SYSTEM_CODE}</CodeBlock>
    </DocSection>
  </DocsLayout>
);

const SwapTable = ({ rows, caption }: { rows: SwapRow[]; caption: string }) => (
  <div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '180px 200px 100px 100px',
      gap: '20px',
      padding: '12px 0',
      fontFamily: 'var(--kanso-sans)',
      fontSize: 'var(--kanso-font-size-micro)',
      fontWeight: 400,
      letterSpacing: 'var(--kanso-letter-spacing-micro)',
      textTransform: 'uppercase',
      color: colorVars.color.ink4,
    }}>
      <span>{caption}</span>
      <span>CSS variable</span>
      <span>Light</span>
      <span>Dark</span>
    </div>
    {rows.map((r) => (
      <div key={r.cssVar} style={{
        display: 'grid',
        gridTemplateColumns: '180px 200px 100px 100px',
        gap: '20px',
        padding: '12px 0',
        alignItems: 'center',
        borderTop: `var(--kanso-border-width-hair) solid ${colorVars.color.paper3}`,
      }}>
        <span style={{ fontFamily: 'var(--kanso-mono)', fontSize: '12px', color: colorVars.color.ink }}>{r.jsName}</span>
        <span style={{ fontFamily: 'var(--kanso-mono)', fontSize: '11px', color: colorVars.color.ink3 }}>{r.cssVar}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 16, height: 16, background: r.light, borderRadius: 'var(--kanso-radius-sm)', border: `var(--kanso-border-width-hair) solid ${colorVars.color.paper3}` }} />
          <span style={{ fontFamily: 'var(--kanso-mono)', fontSize: '11px', color: colorVars.color.ink3 }}>{r.light}</span>
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 16, height: 16, background: r.dark, borderRadius: 'var(--kanso-radius-sm)', border: `var(--kanso-border-width-hair) solid ${colorVars.color.paper3}` }} />
          <span style={{ fontFamily: 'var(--kanso-mono)', fontSize: '11px', color: colorVars.color.ink3 }}>{r.dark}</span>
        </span>
      </div>
    ))}
  </div>
);
