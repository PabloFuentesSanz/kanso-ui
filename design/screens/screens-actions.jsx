// KansoUI — Actions category

function makeScreen({ num, kanji, eyebrow, title, tag, sections }) {
  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">{eyebrow}</div>
          <h1 className="k-display">{title}</h1>
          {tag && <p className="k-body k-screen-head-tag">{tag}</p>}
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">{kanji}</div>
      </header>
      {sections.map((s, i) => (
        <section key={i} className="k-section">
          <div className="k-section-head">
            <div className="k-section-head-label">
              <div className="k-micro">{s.eyebrow}</div>
              <div className="k-h2">{s.title}</div>
            </div>
            <p className="k-section-head-desc k-body">{s.desc}</p>
          </div>
          {s.body}
        </section>
      ))}
    </article>
  );
}
window.makeScreen = makeScreen;

// ── Icon Button ────────────────────────────────────────────────────────────
function IconButtonScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Actions',
    title: 'Icon button',
    kanji: '点',
    tag: 'A 32px target carrying a single Lucide icon at 16px, 1.5px stroke. Used in toolbars, list rows, and beside titles. Never as a primary action — it has no label.',
    sections: [
      {
        eyebrow: '01 · Variants',
        title: 'Ghost & bordered',
        desc: 'Ghost is the default — fades into the background until hover. Bordered is for toolbars where the target needs to feel clickable.',
        body: (
          <Example
            title="Two variants"
            code={{
              react: `<IconButton aria-label="Search"><Search size={16} /></IconButton>\n<IconButton variant="bordered" aria-label="Add"><Plus size={16} /></IconButton>`,
              html:  `<button class="k-icon-btn" aria-label="Search">\n  <svg width="16" height="16" stroke-width="1.5">...</svg>\n</button>\n<button class="k-icon-btn k-icon-btn--bordered" aria-label="Add">\n  <svg>...</svg>\n</button>`,
            }}
          >
            <button className="k-icon-btn" aria-label="Search"><KIcon name="search"/></button>
            <button className="k-icon-btn" aria-label="Add"><KIcon name="plus"/></button>
            <button className="k-icon-btn" aria-label="Approve"><KIcon name="check"/></button>
            <button className="k-icon-btn k-icon-btn--bordered" aria-label="Add"><KIcon name="plus"/></button>
            <button className="k-icon-btn k-icon-btn--bordered" aria-label="Next"><KIcon name="arrow-right"/></button>
          </Example>
        ),
      },
      {
        eyebrow: '02 · In context',
        title: 'In a toolbar',
        desc: 'Sequence multiple icon buttons in a row with no gap — the visual rhythm of equal-sized hit targets is the structure.',
        body: (
          <Example
            title="Toolbar"
            code={{
              html: `<div class="k-row" style="gap: 2px">\n  <button class="k-icon-btn">...</button>\n  <button class="k-icon-btn">...</button>\n  <button class="k-icon-btn">...</button>\n</div>`,
            }}
          >
            <div style={{ display: 'flex', gap: 2, padding: 6, border: '0.5px solid var(--kanso-paper-3)', borderRadius: 4 }}>
              <button className="k-icon-btn" aria-label="Search"><KIcon name="search"/></button>
              <button className="k-icon-btn" aria-label="Add"><KIcon name="plus"/></button>
              <button className="k-icon-btn" aria-label="Check"><KIcon name="check"/></button>
              <span style={{ width: '0.5px', background: 'var(--kanso-paper-3)', margin: '0 2px' }}/>
              <button className="k-icon-btn" aria-label="Leaf"><KIcon name="leaf"/></button>
              <button className="k-icon-btn" aria-label="Dot"><KIcon name="circle-dot"/></button>
            </div>
          </Example>
        ),
      },
      {
        eyebrow: '03 · API',
        title: 'Modifiers',
        desc: '',
        body: (
          <ModifierTable rows={[
            ['.k-icon-btn',            '—',         'Base icon button — 32×32, ghost'],
            ['.k-icon-btn--bordered',  'variant',   '0.5px ink-4 border, hover darkens to ink-3'],
            ['aria-label',             'required',  'Always present — there is no visible label'],
          ]} />
        ),
      },
    ],
  });
}

// ── Button Group ───────────────────────────────────────────────────────────
function ButtonGroupScreen() {
  const [view, setView] = React.useState('list');
  return makeScreen({
    eyebrow: '寛素UI · Actions',
    title: 'Button group',
    kanji: '組',
    tag: 'Segmented selection for mutually-exclusive views. A single 0.5px border wraps the group; internal dividers use the same hairline.',
    sections: [
      {
        eyebrow: '01 · Segmented',
        title: 'View switcher',
        desc: 'Active segment uses paper-2 background and weight 400. No accent — selection is communicated by contrast, not color.',
        body: (
          <Example
            title="Three views"
            code={{
              react: `const [view, setView] = useState('list');\n\n<ButtonGroup value={view} onChange={setView}>\n  <ButtonGroup.Item value="list">List</ButtonGroup.Item>\n  <ButtonGroup.Item value="grid">Grid</ButtonGroup.Item>\n  <ButtonGroup.Item value="map">Map</ButtonGroup.Item>\n</ButtonGroup>`,
              html: `<div class="k-btn-group" role="group">\n  <button aria-pressed="true">List</button>\n  <button aria-pressed="false">Grid</button>\n  <button aria-pressed="false">Map</button>\n</div>`,
            }}
          >
            <div className="k-btn-group" role="group">
              {['list', 'grid', 'map'].map((v) => (
                <button key={v} aria-pressed={view === v} onClick={() => setView(v)}>
                  {v[0].toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </Example>
        ),
      },
      {
        eyebrow: '02 · API',
        title: 'Modifiers',
        desc: '',
        body: (
          <ModifierTable rows={[
            ['.k-btn-group',          '—',          'Container — wraps all segments'],
            ['button[aria-pressed]',  'state',      'true = selected; renders paper-2 bg'],
          ]} />
        ),
      },
    ],
  });
}

// ── Link ───────────────────────────────────────────────────────────────────
function LinkScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Actions',
    title: 'Link',
    kanji: '繋',
    tag: 'Underlined ink. The decoration is 0.5px to match the rest of the system — never thicker. Use sparingly inside body copy; never as the only call to action.',
    sections: [
      {
        eyebrow: '01 · Variants',
        title: 'Default & accent',
        desc: 'Default link uses ink color and a 0.5px underline at 3px offset. Accent uses the active color — reserved for primary inline actions.',
        body: (
          <Example
            title="In context"
            code={{
              html: `<a href="#" class="k-link">Read the philosophy</a>\n<a href="#" class="k-link k-link--accent">Open settings</a>`,
            }}
          >
            <p className="k-body" style={{ maxWidth: 380, textAlign: 'left', margin: 0 }}>
              The system is documented in <a href="#" className="k-link">our philosophy</a> — start there
              before reaching for components. To configure your workspace, <a href="#" className="k-link k-link--accent">open settings</a>.
            </p>
          </Example>
        ),
      },
      {
        eyebrow: '02 · API',
        title: 'Modifiers',
        desc: '',
        body: (
          <ModifierTable rows={[
            ['.k-link',          '—',        'Underlined ink, 0.5px decoration at 3px offset'],
            ['.k-link--accent',  'variant',  'Uses --kanso-active for the text color'],
          ]} />
        ),
      },
    ],
  });
}

Object.assign(window, { IconButtonScreen, ButtonGroupScreen, LinkScreen });
