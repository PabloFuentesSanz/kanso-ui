import { CopyToken, DocSection, DocsLayout, ScreenHeader } from '../_components';
import { colorVars, vars } from '../../tokens';
import * as s from './Layout.css';

type SpaceRow = { name: string; cssVar: string; px: number; use: string };
type RadiusRow = { name: string; cssVar: string; px: number };
type BorderRow = { name: string; cssVar: string; width: string; color: string; use: string };
type MotionRow = { name: string; cssVar: string; value: string; use: string };

const SPACE: SpaceRow[] = [
  { name: 'space[1]', cssVar: '--kanso-space-1', px: 4,  use: 'Internal gap inside micro components' },
  { name: 'space[2]', cssVar: '--kanso-space-2', px: 8,  use: 'Padding inside badges and chips' },
  { name: 'space[3]', cssVar: '--kanso-space-3', px: 12, use: 'Gap between related elements' },
  { name: 'space[4]', cssVar: '--kanso-space-4', px: 20, use: 'Internal padding of cards and panels' },
  { name: 'space[5]', cssVar: '--kanso-space-5', px: 32, use: 'Separation between components' },
  { name: 'space[6]', cssVar: '--kanso-space-6', px: 48, use: 'Separation between sections' },
  { name: 'space[7]', cssVar: '--kanso-space-7', px: 80, use: 'Page margins and breathing room' },
];

const RADII: RadiusRow[] = [
  { name: 'radius.sm',   cssVar: '--kanso-radius-sm',   px: 2 },
  { name: 'radius.md',   cssVar: '--kanso-radius-md',   px: 4 },
  { name: 'radius.full', cssVar: '--kanso-radius-full', px: 9999 },
];

const BORDERS: BorderRow[] = [
  { name: 'borderWidth.hair',     cssVar: '--kanso-border-width-hair',     width: '0.5px', color: colorVars.color.ink4,  use: 'Default hairline — dividers, card edges, hover borders' },
  { name: 'borderWidth.emphasis', cssVar: '--kanso-border-width-emphasis', width: '1px',   color: colorVars.color.ink2,  use: 'Emphasis — active border, focused field. Use sparingly' },
  { name: 'borderWidth.tab',      cssVar: '--kanso-border-width-tab',      width: '1.5px', color: colorVars.color.ink,   use: 'Selected tab underline only. Never elsewhere' },
];

const MOTION: MotionRow[] = [
  { name: 'duration.fast', cssVar: '--kanso-duration-fast', value: '100ms', use: 'Tap feedback, instant responses' },
  { name: 'duration.base', cssVar: '--kanso-duration-base', value: '150ms', use: 'Default transition (hover, colour swap)' },
  { name: 'duration.slow', cssVar: '--kanso-duration-slow', value: '200ms', use: 'Maximum — toggle, drawer open' },
  { name: 'easing.standard', cssVar: '--kanso-easing-standard', value: 'ease',     use: 'Symmetric in / out' },
  { name: 'easing.out',      cssVar: '--kanso-easing-out',      value: 'ease-out', use: 'Element entering view' },
];

export const Layout = () => (
  <DocsLayout>
    <ScreenHeader
      eyebrow="寛素UI · Foundations"
      title="Layout"
      tagline="A 4px scale with deliberate jumps so spacing reads as rhythm, not as a continuous gradient. Two radius tokens; one is too small to see. Borders are 0.5px by default — a 1px line is loud."
      kanji="間"
    />

    <DocSection
      num="01 · Scale"
      heading="Seven steps"
      description="The two largest tokens (space[6] and space[7]) deserve generous use — empty space is part of the composition, not its absence."
    >
      <div>
        {SPACE.map((row) => (
          <div key={row.name} className={s.spaceRow}>
            <span className={s.mono}>
              <CopyToken value={row.name} />
            </span>
            <span className={s.monoMuted}>
              <CopyToken value={row.cssVar} />
            </span>
            <span className={s.monoMuted}>{row.px}px</span>
            <div className={s.bar} style={{ width: `${row.px}px` }} title={row.use} />
          </div>
        ))}
      </div>
    </DocSection>

    <DocSection
      num="02 · Radius"
      heading="Radius"
      description="UI does not round. Only avatars and circular controls use the full radius."
    >
      <div className={s.radiusGrid}>
        {RADII.map((r) => (
          <div key={r.name} className={s.radiusCell}>
            <div className={s.radiusSwatch} style={{ borderRadius: r.px }} />
            <span className={s.mono}>
              <CopyToken value={r.name} />
            </span>
            <span className={s.monoMuted}>
              <CopyToken value={r.cssVar} />
            </span>
            <span className={s.monoMuted}>{r.px >= 9999 ? '9999px' : `${r.px}px`}</span>
          </div>
        ))}
      </div>
    </DocSection>

    <DocSection
      num="03 · Lines"
      heading="Borders &amp; dividers"
      description="A 0.5px hairline is the default. 1px is reserved for emphasis. Anything thicker is forbidden."
    >
      <div>
        {BORDERS.map((b) => (
          <div key={b.name} className={s.borderRow}>
            <span className={s.mono}>
              <CopyToken value={b.name} />
            </span>
            <span className={s.monoMuted}>
              <CopyToken value={b.cssVar} />
            </span>
            <div className={s.borderLine} style={{ borderTop: `${b.width} solid ${b.color}` }} />
            <span className={s.desc} style={{ textAlign: 'right' }}>{b.use}</span>
          </div>
        ))}
      </div>
    </DocSection>

    <DocSection
      num="04 · Motion"
      heading="Duration &amp; easing"
      description="Animations breathe but never demand attention. Maximum 200ms; ease or ease-out only — no bounce or spring."
    >
      <div>
        {MOTION.map((m) => (
          <div key={m.name} className={s.motionRow}>
            <span className={s.mono}>
              <CopyToken value={m.name} />
            </span>
            <span className={s.monoMuted}>
              <CopyToken value={m.cssVar} />
            </span>
            <span className={s.desc}>
              <span style={{ fontFamily: vars.font.mono, color: colorVars.color.ink }}>{m.value}</span>
              {' · '}
              {m.use}
            </span>
          </div>
        ))}
      </div>
    </DocSection>
  </DocsLayout>
);
