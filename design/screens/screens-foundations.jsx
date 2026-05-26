// KansoUI — foundation screens (Overview, Color, Type, Space, Borders)

// ── Overview ───────────────────────────────────────────────────────────────
function OverviewScreen() {
  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">寛素UI · 00</div>
          <h1 className="k-display">Kanso<br/>is restraint.</h1>
          <p className="k-body k-screen-head-tag" style={{ maxWidth: '52ch' }}>
            A design system built on three principles of Japanese aesthetics — <em>ma</em>, <em>wabi</em>,
            and <em>sabi</em>. Strip until nothing remains that can be stripped. The margin is part of the design.
          </p>
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">寛素</div>
      </header>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">01 · Principles</div>
            <div className="k-h2">Three ideas, one rule</div>
          </div>
          <p className="k-section-head-desc k-body">
            Every component decision in KansoUI can be traced back to one of these. The rule that emerges from them:
            remove until nothing else can be removed.
          </p>
        </div>

        <div className="k-grid-3">
          {[
            { jp: '間', romaji: 'ma', en: 'space', text: 'Empty space carries the same weight as filled space. Margins are not negative; they are the design.' },
            { jp: '侘', romaji: 'wabi', en: 'humility', text: 'Beauty in what is imperfect, functional, and honest. No ornament for ornament’s sake.' },
            { jp: '寂', romaji: 'sabi', en: 'austerity', text: 'Only what is essential. If an element has no clear job, it does not appear.' },
          ].map((p) => (
            <div key={p.jp} style={{ paddingTop: 'var(--kanso-space-3)', borderTop: '0.5px solid var(--kanso-paper-3)', display: 'flex', flexDirection: 'column', gap: 'var(--kanso-space-3)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--kanso-space-3)' }}>
                <span className="k-quote-jp" style={{ fontSize: '3rem' }}>{p.jp}</span>
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="k-h3">{p.romaji}</span>
                  <span className="k-micro">{p.en}</span>
                </span>
              </div>
              <p className="k-body k-ink-2">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">02 · The rule</div>
            <div className="k-h2">Golden rule</div>
          </div>
          <div className="k-section-head-desc"></div>
        </div>
        <blockquote className="k-quote" style={{ margin: 0, maxWidth: '40ch' }}>
          Remove until nothing remains that can be removed.
        </blockquote>
        <p className="k-mono k-ink-3" style={{ marginTop: 'var(--kanso-space-3)' }}>
          // 何も足さない、何も引かない、ただ在るままに
        </p>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">03 · What kanso never does</div>
            <div className="k-h2">Refusals</div>
          </div>
          <p className="k-section-head-desc k-body">A short list of things this system simply does not do.</p>
        </div>
        <div>
          {[
            'Background gradients, even subtle ones.',
            'Decorative box-shadows.',
            'Border-radius larger than 4px on UI (avatars excepted).',
            'Saturated primaries — electric blue, neon green, brand purple.',
            'Font weights heavier than 500.',
            'Bounce or spring animations.',
            'Filled icons or strokes thicker than 1.5px.',
            'More than one primary CTA per screen.',
            'Colored backgrounds on primary containers.',
          ].map((t) => (
            <div key={t} className="k-dont">
              <span className="k-dont-mark">×</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

// ── Color ──────────────────────────────────────────────────────────────────
function ColorScreen() {
  const inks = [
    { tok: '--kanso-ink',   hex: '#1a1a18', jp: '墨',   romaji: 'sumi',    use: 'Body text, icons' },
    { tok: '--kanso-ink-2', hex: '#4a4a44', jp: '影',   romaji: 'kage',    use: 'Secondary text' },
    { tok: '--kanso-ink-3', hex: '#8a8a82', jp: '灰',   romaji: 'hai',     use: 'Muted text, placeholders' },
    { tok: '--kanso-ink-4', hex: '#c4c4bc', jp: '薄墨', romaji: 'usuzumi', use: 'Borders, separators' },
  ];
  const papers = [
    { tok: '--kanso-paper',   hex: '#fafaf7', jp: '和紙', romaji: 'washi',   use: 'Primary background' },
    { tok: '--kanso-paper-2', hex: '#f2f2ed', jp: '薄黄', romaji: 'usuki',   use: 'Elevated surfaces, inputs' },
    { tok: '--kanso-paper-3', hex: '#e8e8e2', jp: '鼠',   romaji: 'nezu',    use: 'Soft borders, hover' },
  ];
  const accents = [
    { tok: '--kanso-accent',      hex: '#2d5a3d', jp: '抹茶', romaji: 'matcha', use: 'Primary CTA, active states' },
    { tok: '--kanso-accent-2',    hex: '#4a7c5f', jp: '',     romaji: 'hover',  use: 'Accent hover' },
    { tok: '--kanso-accent-pale', hex: '#e8f0eb', jp: '',     romaji: 'pale',   use: 'Success badges, highlights' },
  ];
  const warms = [
    { tok: '--kanso-warm',      hex: '#8b6914', jp: '黄金', romaji: 'kogane', use: 'Warning badges, warm emphasis' },
    { tok: '--kanso-warm-pale', hex: '#f5edd8', jp: '',     romaji: 'pale',   use: 'Warning surfaces' },
  ];
  const reds = [
    { tok: '--kanso-red',      hex: '#7a2e2e', jp: '紅', romaji: 'beni', use: 'Error, destructive' },
    { tok: '--kanso-red-pale', hex: '#f5e8e8', jp: '',   romaji: 'pale', use: 'Error surfaces' },
  ];

  const Swatch = ({ tok, hex, jp, romaji, use }) => (
    <div className="k-swatch">
      <div className="k-swatch-chip" style={{ background: hex }} />
      <div className="k-swatch-meta">
        <div className="k-swatch-name">
          <span className="k-mono">{tok}</span>
          {jp && <span className="k-swatch-jp">{jp} {romaji}</span>}
        </div>
        <div className="k-swatch-hex">{hex}</div>
        <div className="k-swatch-use">{use}</div>
      </div>
    </div>
  );

  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">寛素UI · 01</div>
          <h1 className="k-display">Color</h1>
          <p className="k-body k-screen-head-tag">
            A palette of warm neutrals with three semantic accents named after natural Japanese
            pigments: matcha, kogane, beni. Contrast is built from grey, not from saturation.
          </p>
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">色</div>
      </header>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">01 · Sumi</div>
            <div className="k-h2">Ink — text, lines, structure</div>
          </div>
          <p className="k-section-head-desc k-body">All greys carry a subtle warm cast. Contrast within UI is achieved by stepping through these four tones.</p>
        </div>
        <div className="k-grid-4">{inks.map((s) => <Swatch key={s.tok} {...s} />)}</div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">02 · Washi</div>
            <div className="k-h2">Paper — surfaces</div>
          </div>
          <p className="k-section-head-desc k-body">Surfaces never sit on a deeper background. Elevation is communicated by hairline borders, not shadow.</p>
        </div>
        <div className="k-grid-3">{papers.map((s) => <Swatch key={s.tok} {...s} />)}</div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">03 · Matcha</div>
            <div className="k-h2">Accent — used with restraint</div>
          </div>
          <p className="k-section-head-desc k-body">
            One ceremonial green. It appears on the single primary action per screen, on active states,
            and nowhere else.
          </p>
        </div>
        <div className="k-grid-3">{accents.map((s) => <Swatch key={s.tok} {...s} />)}</div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">04 · Semantic</div>
            <div className="k-h2">Kogane &amp; Beni</div>
          </div>
          <p className="k-section-head-desc k-body">Desaturated gold for caution, desaturated red for failure. Both surface only on badges and alerts.</p>
        </div>
        <div className="k-grid-3" style={{ marginBottom: 'var(--kanso-space-4)' }}>{warms.map((s) => <Swatch key={s.tok} {...s} />)}</div>
        <div className="k-grid-3">{reds.map((s) => <Swatch key={s.tok} {...s} />)}</div>
      </section>
    </article>
  );
}

// ── Typography ─────────────────────────────────────────────────────────────
function TypeScreen() {
  const scale = [
    { name: 'display', size: '2.8rem', weight: '200', fam: 'Noto Serif JP', sample: '寛素の美' },
    { name: 'h1',      size: '1.75rem', weight: '400', fam: 'Syne', sample: 'The quiet interface' },
    { name: 'h2',      size: '1.25rem', weight: '400', fam: 'Syne', sample: 'A section, set apart' },
    { name: 'h3',      size: '1rem',    weight: '500', fam: 'Syne', sample: 'A component title' },
    { name: 'body',    size: '0.9rem',  weight: '300', fam: 'Syne', sample: 'Long-form prose lives here. The line-height stays generous so the eye has room to move.' },
    { name: 'label',   size: '0.75rem', weight: '400', fam: 'Syne', sample: 'Form label' },
    { name: 'micro',   size: '0.7rem',  weight: '400', fam: 'Syne', sample: 'STATUS · 0.15em SPACING' },
    { name: 'mono',    size: '0.75rem', weight: '300', fam: 'DM Mono', sample: '--kanso-space-4: 20px;' },
  ];

  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">寛素UI · 02</div>
          <h1 className="k-display">Typography</h1>
          <p className="k-body k-screen-head-tag">
            Three families with distinct jobs. Noto Serif JP carries editorial moments and kanji.
            Syne handles all interface text. DM Mono is reserved for code and tokens. No system fonts.
          </p>
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">字</div>
      </header>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">01 · Families</div>
            <div className="k-h2">Three voices</div>
          </div>
          <p className="k-section-head-desc k-body">Each family has a clear lane. Mixing more than three voices in one composition is not allowed.</p>
        </div>

        <div className="k-grid-3">
          <div className="k-stack-sm">
            <div className="k-micro">Display · Noto Serif JP</div>
            <div style={{ fontFamily: 'var(--kanso-serif)', fontWeight: 200, fontSize: '3rem', lineHeight: 1 }}>静けさ</div>
            <div className="k-mono k-ink-3">200 · 300</div>
          </div>
          <div className="k-stack-sm">
            <div className="k-micro">UI · Syne</div>
            <div style={{ fontFamily: 'var(--kanso-sans)', fontWeight: 400, fontSize: '3rem', lineHeight: 1 }}>Aa</div>
            <div className="k-mono k-ink-3">300 · 400 · 500</div>
          </div>
          <div className="k-stack-sm">
            <div className="k-micro">Mono · DM Mono</div>
            <div style={{ fontFamily: 'var(--kanso-mono)', fontWeight: 300, fontSize: '3rem', lineHeight: 1 }}>{`{ }`}</div>
            <div className="k-mono k-ink-3">300 · 400</div>
          </div>
        </div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">02 · Scale</div>
            <div className="k-h2">Scale</div>
          </div>
          <p className="k-section-head-desc k-body">Eight roles. Weight 500 is the ceiling — heavier weights feel loud in this system.</p>
        </div>

        <div>
          {scale.map((s) => (
            <div key={s.name} className="k-spec-row">
              <div>
                <div className="k-mono">{s.name}</div>
                <div className="k-mono k-ink-3" style={{ marginTop: 2 }}>{s.size} · {s.weight}</div>
              </div>
              <div style={{
                fontFamily: s.fam === 'Noto Serif JP' ? 'var(--kanso-serif)' : s.fam === 'DM Mono' ? 'var(--kanso-mono)' : 'var(--kanso-sans)',
                fontWeight: s.weight,
                fontSize: s.size,
                lineHeight: 1.3,
                letterSpacing: s.name === 'micro' ? '0.15em' : 'normal',
                textTransform: s.name === 'micro' ? 'uppercase' : 'none',
              }}>{s.sample}</div>
              <div className="k-mono k-ink-3" style={{ textAlign: 'right' }}>{s.fam}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">03 · Rules</div>
            <div className="k-h2">Rules</div>
          </div>
          <p className="k-section-head-desc k-body"></p>
        </div>
        <div className="k-list" style={{ borderTop: '0.5px solid var(--kanso-paper-3)' }}>
          {[
            ['Microcopy', 'uppercase with 0.15em letter-spacing'],
            ['Body line-height', '1.7'],
            ['Heading line-height', '1.2'],
            ['Maximum weight', '500 — never 600 or 700'],
            ['Forbidden families', 'Arial, Inter, Roboto, system-ui'],
          ].map(([k, v]) => (
            <li key={k}>
              <span className="k-body k-ink-2">{k}</span>
              <span className="k-mono k-ink-3">{v}</span>
            </li>
          ))}
        </div>
      </section>
    </article>
  );
}

// ── Space ──────────────────────────────────────────────────────────────────
function SpaceScreen() {
  const space = [
    { tok: '--kanso-space-1', px: 4,  use: 'Internal gap inside micro components' },
    { tok: '--kanso-space-2', px: 8,  use: 'Padding inside badges and chips' },
    { tok: '--kanso-space-3', px: 12, use: 'Gap between related elements' },
    { tok: '--kanso-space-4', px: 20, use: 'Internal padding of cards and panels' },
    { tok: '--kanso-space-5', px: 32, use: 'Separation between components' },
    { tok: '--kanso-space-6', px: 48, use: 'Separation between sections' },
    { tok: '--kanso-space-7', px: 80, use: 'Page margins and breathing room' },
  ];
  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">寛素UI · 03</div>
          <h1 className="k-display">Space, radii, lines</h1>
          <p className="k-body k-screen-head-tag">
            A 4px scale with deliberate jumps so spacing reads as rhythm, not as a continuous gradient.
            Two radius tokens; one is too small to see. Borders are 0.5px by default — a 1px line is loud.
          </p>
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">間</div>
      </header>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">01 · Scale</div>
            <div className="k-h2">Seven steps</div>
          </div>
          <p className="k-section-head-desc k-body">The two largest tokens deserve generous use — empty space is part of the composition, not its absence.</p>
        </div>

        <div>
          {space.map((s) => (
            <div key={s.tok} className="k-space-row">
              <span className="k-mono k-ink-2">{s.tok.replace('--kanso-', '')}</span>
              <span className="k-mono k-ink-3">{s.px}px</span>
              <div className="k-space-fill" style={{ width: `${s.px}px`, background: 'var(--kanso-active)' }} title={s.use} />
            </div>
          ))}
        </div>

        <p className="k-mono k-ink-3" style={{ marginTop: 'var(--kanso-space-4)' }}>
          // ma in practice — use space-6 and space-7 generously
        </p>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">02 · Radius</div>
            <div className="k-h2">Radius</div>
          </div>
          <p className="k-section-head-desc k-body">UI does not round. Only avatars and circular controls use the full radius.</p>
        </div>
        <div className="k-grid-3">
          {[
            { name: 'sm', px: 2, sample: 'border-radius: 2px' },
            { name: 'md', px: 4, sample: 'border-radius: 4px' },
            { name: 'full', px: 9999, sample: 'border-radius: 9999px' },
          ].map((r) => (
            <div key={r.name} className="k-stack-sm">
              <div style={{
                height: 80,
                background: 'var(--kanso-paper-2)',
                border: '0.5px solid var(--kanso-paper-3)',
                borderRadius: r.px,
              }} />
              <div className="k-mono">--kanso-radius-{r.name}</div>
              <div className="k-mono k-ink-3">{r.sample}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">03 · Lines</div>
            <div className="k-h2">Borders &amp; dividers</div>
          </div>
          <p className="k-section-head-desc k-body">A 0.5px hairline is the default. 1px is reserved for emphasis. Anything thicker is forbidden.</p>
        </div>

        <div className="k-stack" style={{ gap: 'var(--kanso-space-5)' }}>
          {[
            { label: '0.5px · default', desc: 'Quiet separation, hover edge', style: { borderTop: '0.5px solid var(--kanso-ink-4)' } },
            { label: '0.5px · paper-3', desc: 'Soft divider', style: { borderTop: '0.5px solid var(--kanso-paper-3)' } },
            { label: '1px · emphasis', desc: 'Active border, sparingly', style: { borderTop: '1px solid var(--kanso-ink-2)' } },
            { label: '1px · accent', desc: 'Focused field, active card', style: { borderTop: '1px solid var(--kanso-active)' } },
          ].map((b) => (
            <div key={b.label}>
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 160px', gap: 'var(--kanso-space-4)', alignItems: 'center' }}>
                <span className="k-mono">{b.label}</span>
                <div style={{ ...b.style, height: 0, width: '100%' }} />
                <span className="k-body k-ink-3" style={{ textAlign: 'right' }}>{b.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

Object.assign(window, { OverviewScreen, ColorScreen, TypeScreen, SpaceScreen });
