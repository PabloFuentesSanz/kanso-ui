import { DocSection, DocsLayout, ScreenHeader } from '../_components';
import { palette } from '../../tokens';
import * as s from './Color.css';

type Slot = {
  jsName: string;
  cssVar: string;
  hex: string;
  jp?: string;
  romaji?: string;
  use: string;
};

const INKS: Slot[] = [
  { jsName: 'color.ink',  cssVar: '--kanso-ink',   hex: palette.sumi,    jp: '墨',   romaji: 'sumi',    use: 'Body text, icons' },
  { jsName: 'color.ink2', cssVar: '--kanso-ink-2', hex: palette.kage,    jp: '影',   romaji: 'kage',    use: 'Secondary text' },
  { jsName: 'color.ink3', cssVar: '--kanso-ink-3', hex: palette.hai,     jp: '灰',   romaji: 'hai',     use: 'Muted text, placeholders' },
  { jsName: 'color.ink4', cssVar: '--kanso-ink-4', hex: palette.usuzumi, jp: '薄墨', romaji: 'usuzumi', use: 'Borders, separators' },
];

const PAPERS: Slot[] = [
  { jsName: 'color.paper',  cssVar: '--kanso-paper',   hex: palette.washi, jp: '和紙', romaji: 'washi', use: 'Primary background' },
  { jsName: 'color.paper2', cssVar: '--kanso-paper-2', hex: palette.usuki, jp: '薄黄', romaji: 'usuki', use: 'Elevated surfaces, inputs' },
  { jsName: 'color.paper3', cssVar: '--kanso-paper-3', hex: palette.nezu,  jp: '鼠',   romaji: 'nezu',  use: 'Soft borders, hover' },
];

const ACCENTS: Slot[] = [
  { jsName: 'color.accent',     cssVar: '--kanso-accent',       hex: palette.matcha,     jp: '抹茶', romaji: 'matcha', use: 'Primary CTA, active states' },
  { jsName: 'color.accent2',    cssVar: '--kanso-accent-2',     hex: palette.matchaSoft,                                 use: 'Accent hover' },
  { jsName: 'color.accentPale', cssVar: '--kanso-accent-pale',  hex: palette.matchaPale,                                 use: 'Success badges, highlights' },
];

const WARMS: Slot[] = [
  { jsName: 'color.warm',     cssVar: '--kanso-warm',      hex: palette.kogane,     jp: '黄金', romaji: 'kogane', use: 'Warning badges, warm emphasis' },
  { jsName: 'color.warmPale', cssVar: '--kanso-warm-pale', hex: palette.koganePale,                               use: 'Warning surfaces' },
];

const REDS: Slot[] = [
  { jsName: 'color.red',     cssVar: '--kanso-red',      hex: palette.beni,     jp: '紅', romaji: 'beni', use: 'Error, destructive' },
  { jsName: 'color.redPale', cssVar: '--kanso-red-pale', hex: palette.beniPale,                          use: 'Error surfaces' },
];

const Swatch = ({ jsName, cssVar, hex, jp, romaji, use }: Slot) => (
  <div className={s.swatch}>
    <div className={s.chip} style={{ background: hex }} />
    <div className={s.meta}>
      <div className={s.nameRow}>
        <span className={s.jsName}>{jsName}</span>
        {jp ? <span className={s.jp}>{jp} {romaji}</span> : null}
      </div>
      <span className={s.cssVar}>{cssVar}</span>
      <span className={s.hex}>{hex}</span>
      <span className={s.use}>{use}</span>
    </div>
  </div>
);

export const Color = () => (
  <DocsLayout>
    <ScreenHeader
      eyebrow="寛素UI · Foundations"
      title="Color"
      tagline="A palette of warm neutrals with three semantic accents named after natural Japanese pigments: matcha, kogane, beni. Contrast is built from grey, not from saturation."
      kanji="色"
    />

    <DocSection
      num="01 · Sumi"
      heading="Ink — text, lines, structure"
      description="All greys carry a subtle warm cast. Contrast within UI is achieved by stepping through these four tones — never by going more saturated."
    >
      <div className={s.grid4}>{INKS.map((c) => <Swatch key={c.cssVar} {...c} />)}</div>
    </DocSection>

    <DocSection
      num="02 · Washi"
      heading="Paper — surfaces"
      description="Surfaces never sit on a deeper background. Elevation is communicated by hairline borders, not shadow."
    >
      <div className={s.grid3}>{PAPERS.map((c) => <Swatch key={c.cssVar} {...c} />)}</div>
    </DocSection>

    <DocSection
      num="03 · Matcha"
      heading="Accent — used with restraint"
      description="One ceremonial green. It appears on the single primary action per screen, on active states, and nowhere else."
    >
      <div className={s.grid3}>{ACCENTS.map((c) => <Swatch key={c.cssVar} {...c} />)}</div>
    </DocSection>

    <DocSection
      num="04 · Kogane &amp; Beni"
      heading="Semantic — warm and red"
      description="Desaturated gold for caution, desaturated red for failure. Both surface only on badges, alerts and destructive actions — never as primary brand colours."
    >
      <div className={s.grid2}>{WARMS.map((c) => <Swatch key={c.cssVar} {...c} />)}</div>
      <div className={s.grid2} style={{ marginTop: '20px' }}>{REDS.map((c) => <Swatch key={c.cssVar} {...c} />)}</div>
    </DocSection>
  </DocsLayout>
);
