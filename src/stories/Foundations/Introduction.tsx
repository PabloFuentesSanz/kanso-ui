import { DocSection, DocsLayout, ScreenHeader } from '../_components';
import * as s from './Introduction.css';

const PRINCIPLES = [
  {
    jp: '間',
    romaji: 'ma',
    en: 'space',
    text: 'Empty space carries the same weight as filled space. Margins are not negative; they are the design.',
  },
  {
    jp: '侘',
    romaji: 'wabi',
    en: 'humility',
    text: "Beauty in what is imperfect, functional and honest. No ornament for ornament's sake.",
  },
  {
    jp: '寂',
    romaji: 'sabi',
    en: 'austerity',
    text: 'Only what is essential. If an element has no clear job, it does not appear.',
  },
] as const;

export const Introduction = () => (
  <DocsLayout>
    <ScreenHeader
      eyebrow="寛素UI · Foundations"
      title={
        <>
          Kanso
          <br />
          is restraint.
        </>
      }
      tagline={
        <>
          A design system built on three principles of Japanese aesthetics —{' '}
          <em>ma</em>, <em>wabi</em> and <em>sabi</em>. Strip until nothing remains that can be
          stripped. The margin is part of the design.
        </>
      }
      kanji="寛素"
    />

    <DocSection
      num="01 · Principles"
      heading="Three ideas, one rule"
      description="Every component decision in KansoUI can be traced back to one of these. The rule that emerges from them: remove until nothing else can be removed."
    >
      <div className={s.principleGrid}>
        {PRINCIPLES.map((p) => (
          <div key={p.jp} className={s.principle}>
            <div className={s.principleHead}>
              <span className={s.principleKanji}>{p.jp}</span>
              <span className={s.principleLabels}>
                <span className={s.principleRomaji}>{p.romaji}</span>
                <span className={s.principleEn}>{p.en}</span>
              </span>
            </div>
            <p className={s.principleBody}>{p.text}</p>
          </div>
        ))}
      </div>
    </DocSection>

    <DocSection num="02 · The rule" heading="Golden rule">
      <blockquote className={s.quote}>
        Remove until nothing remains that can be removed.
      </blockquote>
    </DocSection>
  </DocsLayout>
);
