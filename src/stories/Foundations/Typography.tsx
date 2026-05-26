import type { CSSProperties } from 'react';
import { CopyToken, DocSection, DocsLayout, ScreenHeader } from '../_components';
import { vars } from '../../tokens';
import * as s from './Typography.css';

type ScaleRow = {
  name: string;
  cssVar: string;
  size: string;
  weight: '200' | '300' | '400' | '500';
  family: 'serif' | 'sans' | 'mono';
  sample: string;
  uppercase?: boolean;
  tracking?: string;
};

const SCALE: ScaleRow[] = [
  { name: 'fontSize.display', cssVar: '--kanso-font-size-display', size: '2.8rem',  weight: '200', family: 'serif', sample: '寛素の美' },
  { name: 'fontSize.h1',      cssVar: '--kanso-font-size-h1',      size: '1.75rem', weight: '400', family: 'sans',  sample: 'The quiet interface' },
  { name: 'fontSize.h2',      cssVar: '--kanso-font-size-h2',      size: '1.25rem', weight: '400', family: 'sans',  sample: 'A section, set apart' },
  { name: 'fontSize.h3',      cssVar: '--kanso-font-size-h3',      size: '1rem',    weight: '500', family: 'sans',  sample: 'A component title' },
  { name: 'fontSize.body',    cssVar: '--kanso-font-size-body',    size: '0.9rem',  weight: '300', family: 'sans',  sample: 'Long-form prose lives here. The line-height stays generous so the eye has room to move.' },
  { name: 'fontSize.label',   cssVar: '--kanso-font-size-label',   size: '0.75rem', weight: '400', family: 'sans',  sample: 'Form label' },
  { name: 'fontSize.micro',   cssVar: '--kanso-font-size-micro',   size: '0.7rem',  weight: '400', family: 'sans',  sample: 'STATUS · 0.15em SPACING', uppercase: true, tracking: vars.letterSpacing.micro },
  { name: 'fontSize.mono',    cssVar: '--kanso-font-size-mono',    size: '0.75rem', weight: '300', family: 'mono',  sample: '--kanso-space-4: 20px;' },
];

type WeightRow = { name: string; cssVar: string; value: '200' | '300' | '400' | '500'; use: string };

const WEIGHTS: WeightRow[] = [
  { name: 'fontWeight.extralight', cssVar: '--kanso-font-weight-extralight', value: '200', use: 'Display titles, large kanji' },
  { name: 'fontWeight.light',      cssVar: '--kanso-font-weight-light',      value: '300', use: 'Body text, tabs, inputs' },
  { name: 'fontWeight.regular',    cssVar: '--kanso-font-weight-regular',    value: '400', use: 'Headings 1–2, form labels, micro' },
  { name: 'fontWeight.medium',     cssVar: '--kanso-font-weight-medium',     value: '500', use: 'Heading 3, active emphasis — ceiling' },
];

const RULES: Array<[string, string]> = [
  ['Microcopy',           'uppercase, 0.15em letter-spacing'],
  ['Body line-height',    '1.7'],
  ['Heading line-height', '1.2'],
  ['Maximum weight',      '500 — never 600 or 700'],
  ['Forbidden families',  'Arial, Inter, Roboto, system-ui'],
];

const familyVar = { serif: vars.font.serif, sans: vars.font.sans, mono: vars.font.mono } as const;
const familyLabel = { serif: 'Noto Serif JP', sans: 'Syne', mono: 'DM Mono' } as const;

export const Typography = () => (
  <DocsLayout>
    <ScreenHeader
      eyebrow="寛素UI · Foundations"
      title="Typography"
      tagline="Three families with distinct jobs. Noto Serif JP carries editorial moments and kanji. Syne handles all interface text. DM Mono is reserved for code and tokens. No system fonts."
      kanji="字"
    />

    <DocSection
      num="01 · Families"
      heading="Three voices"
      description="Each family has a clear lane. Mixing more than three voices in one composition is not allowed."
    >
      <div className={s.familyGrid}>
        <div className={s.familyCell}>
          <span className={s.familyLabel}>Display · Noto Serif JP</span>
          <span className={s.familySerifSample}>静けさ</span>
          <span className={s.familyJsName}>
            <CopyToken value="font.serif" />
          </span>
          <span className={s.familyWeights}>
            <CopyToken value="--kanso-serif" />
          </span>
          <span className={s.familyWeights}>weights · 200, 300</span>
        </div>
        <div className={s.familyCell}>
          <span className={s.familyLabel}>UI · Syne</span>
          <span className={s.familySansSample}>Aa</span>
          <span className={s.familyJsName}>
            <CopyToken value="font.sans" />
          </span>
          <span className={s.familyWeights}>
            <CopyToken value="--kanso-sans" />
          </span>
          <span className={s.familyWeights}>weights · 400, 500</span>
        </div>
        <div className={s.familyCell}>
          <span className={s.familyLabel}>Mono · DM Mono</span>
          <span className={s.familyMonoSample}>{'{ }'}</span>
          <span className={s.familyJsName}>
            <CopyToken value="font.mono" />
          </span>
          <span className={s.familyWeights}>
            <CopyToken value="--kanso-mono" />
          </span>
          <span className={s.familyWeights}>weights · 300, 400</span>
        </div>
      </div>
    </DocSection>

    <DocSection
      num="02 · Scale"
      heading="Eight roles"
      description="Weight 500 is the ceiling — heavier weights feel loud in this system. The mono family carries its own size (`size.mono`) used for code and tokens."
    >
      <div>
        {SCALE.map((row) => {
          const sampleStyle: CSSProperties = {
            fontFamily: familyVar[row.family],
            fontWeight: row.weight,
            fontSize: row.size,
            lineHeight: vars.lineHeight.snug,
            color: 'inherit',
            ...(row.uppercase ? { textTransform: 'uppercase' as const } : {}),
            ...(row.tracking ? { letterSpacing: row.tracking } : {}),
          };
          return (
            <div key={row.name} className={s.scaleRow}>
              <div className={s.scaleMeta}>
                <span className={s.scaleName}>
                  <CopyToken value={row.name} />
                </span>
                <span className={s.scaleVar}>
                  <CopyToken value={row.cssVar} />
                </span>
                <span className={s.scaleVar}>{row.size} · {row.weight}</span>
              </div>
              <div style={sampleStyle}>{row.sample}</div>
              <span className={s.scaleFamily}>{familyLabel[row.family]}</span>
            </div>
          );
        })}
      </div>
    </DocSection>

    <DocSection
      num="03 · Weights"
      heading="Four weights, ceiling at 500"
      description="The system loads only the weights it allows. 600 and 700 are intentionally absent — anything heavier reads as shouting."
    >
      <div>
        {WEIGHTS.map((w) => (
          <div key={w.name} className={s.scaleRow}>
            <div className={s.scaleMeta}>
              <span className={s.scaleName}>
                <CopyToken value={w.name} />
              </span>
              <span className={s.scaleVar}>
                <CopyToken value={w.cssVar} />
              </span>
              <span className={s.scaleVar}>{w.value}</span>
            </div>
            <div
              style={{
                fontFamily: vars.font.sans,
                fontWeight: w.value,
                fontSize: '1.5rem',
                lineHeight: vars.lineHeight.snug,
              }}
            >
              Aa · 寛素 · the quiet system
            </div>
            <span className={s.scaleFamily}>{w.use}</span>
          </div>
        ))}
      </div>
    </DocSection>

    <DocSection
      num="04 · Rules"
      heading="Rules"
      description="The five constraints to memorise — they keep the system quiet."
    >
      <div>
        {RULES.map(([k, v]) => (
          <div key={k} className={s.ruleRow}>
            <span className={s.ruleKey}>{k}</span>
            <span className={s.ruleVal}>{v}</span>
          </div>
        ))}
      </div>
    </DocSection>
  </DocsLayout>
);
