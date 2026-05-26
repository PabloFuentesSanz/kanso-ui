// KansoUI — Navigation category

// ── Tabs ───────────────────────────────────────────────────────────────────
function TabsScreen() {
  const [tab, setTab] = React.useState('overview');
  return makeScreen({
    eyebrow: '寛素UI · Navigation',
    title: 'Tabs',
    kanji: '頁',
    tag: 'Active state: ink color + 1.5px ink underline. Inactive: ink-3, no underline. There are no pills, no backgrounds, no carets.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Underline tabs',
        desc: '',
        body: (
          <Example
            code={{
              react: `const [tab, setTab] = useState('overview');\n\n<Tabs value={tab} onChange={setTab}>\n  <Tab value="overview">Overview</Tab>\n  <Tab value="activity">Activity</Tab>\n</Tabs>`,
              html: `<div class="k-tabs" role="tablist">\n  <button class="k-tab" aria-selected="true">Overview</button>\n  <button class="k-tab">Activity</button>\n</div>`,
            }}
          >
            <div style={{ width: '100%', maxWidth: 560 }}>
              <div className="k-tabs">
                {['overview', 'activity', 'members', 'integrations', 'billing'].map((t) => (
                  <button key={t} className="k-tab" aria-selected={tab === t} onClick={() => setTab(t)}>
                    {t[0].toUpperCase() + t.slice(1)}
                  </button>
                ))}
              </div>
              <div className="k-body k-ink-3" style={{ paddingTop: 'var(--kanso-space-3)' }}>
                Viewing <span className="k-tag">{tab}</span>
              </div>
            </div>
          </Example>
        ),
      },
    ],
  });
}

// ── Breadcrumb ─────────────────────────────────────────────────────────────
function BreadcrumbScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Navigation',
    title: 'Breadcrumb',
    kanji: '径',
    tag: 'A path of typography, separated by a single character. We use a low-density middle dot (·) — chevrons are too loud for this system.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Path',
        desc: '',
        body: (
          <Example
            code={{
              html: `<nav class="k-breadcrumb" aria-label="Breadcrumb">\n  <a href="#">Home</a>\n  <span class="k-breadcrumb-sep">·</span>\n  <a href="#">Settings</a>\n  <span class="k-breadcrumb-sep">·</span>\n  <span aria-current="page">Billing</span>\n</nav>`,
            }}
          >
            <nav className="k-breadcrumb" aria-label="Breadcrumb">
              <a href="#">Home</a>
              <span className="k-breadcrumb-sep">·</span>
              <a href="#">Workspace</a>
              <span className="k-breadcrumb-sep">·</span>
              <a href="#">Settings</a>
              <span className="k-breadcrumb-sep">·</span>
              <span aria-current="page">Billing</span>
            </nav>
          </Example>
        ),
      },
    ],
  });
}

// ── Pagination ─────────────────────────────────────────────────────────────
function PaginationScreen() {
  const [page, setPage] = React.useState(3);
  const total = 12;
  return makeScreen({
    eyebrow: '寛素UI · Navigation',
    title: 'Pagination',
    kanji: '頁',
    tag: 'Numbers in DM Mono, separated by quiet hairlines on the active page only. Prev / Next are textual — never icon-only.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Page numbers',
        desc: '',
        body: (
          <Example
            code={{
              react: `<Pagination total={12} value={page} onChange={setPage} />`,
              html: `<nav class="k-pagination">\n  <button>Prev</button>\n  <button aria-current="true">3</button>\n  <button>Next</button>\n</nav>`,
            }}
          >
            <div className="k-stack" style={{ alignItems: 'center' }}>
              <nav className="k-pagination">
                <button onClick={() => setPage(Math.max(1, page - 1))}>Prev</button>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} aria-current={page === n} onClick={() => setPage(n)}>{n}</button>
                ))}
                <span className="k-ink-4 k-mono" style={{ padding: '0 6px' }}>…</span>
                <button onClick={() => setPage(total)}>{total}</button>
                <button onClick={() => setPage(Math.min(total, page + 1))}>Next</button>
              </nav>
              <span className="k-mono k-ink-3">page {page} of {total}</span>
            </div>
          </Example>
        ),
      },
    ],
  });
}

// ── Stepper ────────────────────────────────────────────────────────────────
function StepperScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Navigation',
    title: 'Stepper',
    kanji: '段',
    tag: 'A vertical list of steps connected by a hairline. Step numbers use Noto Serif JP 200 inside a circle — they read as numerals, not as UI chrome.',
    sections: [
      {
        eyebrow: '01 · Vertical',
        title: 'Multi-step flow',
        desc: '',
        body: (
          <Example height={280}
            code={{
              html: `<ol class="k-stepper">\n  <li class="k-step k-step--done"><span class="k-step-num">1</span>...</li>\n  <li class="k-step k-step--current"><span class="k-step-num">2</span>...</li>\n  <li class="k-step"><span class="k-step-num">3</span>...</li>\n</ol>`,
            }}
          >
            <ol className="k-stepper" style={{ width: '100%', maxWidth: 360, listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { state: 'done',    title: 'Create your workspace', hint: 'Completed' },
                { state: 'done',    title: 'Invite your team',      hint: '3 invitations sent' },
                { state: 'current', title: 'Configure billing',     hint: 'In progress' },
                { state: '',        title: 'Connect integrations',  hint: 'Pending' },
              ].map((s, i) => (
                <li key={i} className={`k-step ${s.state ? 'k-step--' + s.state : ''}`}>
                  <span className="k-step-num">{i + 1}</span>
                  <div className="k-step-body">
                    <span className="k-step-title">{s.title}</span>
                    <span className="k-step-hint">{s.hint}</span>
                  </div>
                </li>
              ))}
            </ol>
          </Example>
        ),
      },
      {
        eyebrow: '02 · API',
        title: 'Modifiers',
        desc: '',
        body: (
          <ModifierTable rows={[
            ['.k-step',              '—',     'Single step row with circle + body'],
            ['.k-step--done',        'state', 'Filled ink circle, paper text'],
            ['.k-step--current',     'state', 'Outlined ink circle, ink title'],
          ]} />
        ),
      },
    ],
  });
}

// ── Menu ───────────────────────────────────────────────────────────────────
function MenuScreen() {
  const [open, setOpen] = React.useState(false);
  return makeScreen({
    eyebrow: '寛素UI · Navigation',
    title: 'Menu',
    kanji: '献',
    tag: 'A dropdown of actions. Menu items render at 13px ink-2; the section label above them is 10px micro-uppercase. Danger items use beni.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Dropdown menu',
        desc: 'Click the trigger to open. Inside, items can carry trailing shortcuts via kbd.',
        body: (
          <Example height={300}
            code={{
              react: `<Menu trigger={<Button variant="secondary">Open menu</Button>}>\n  <MenuItem>Edit</MenuItem>\n  <MenuItem shortcut="⌘ D">Duplicate</MenuItem>\n  <MenuSep />\n  <MenuItem danger>Delete</MenuItem>\n</Menu>`,
              html: `<div class="k-menu">\n  <div class="k-menu-label">Actions</div>\n  <button class="k-menu-item">Edit</button>\n  <button class="k-menu-item">Duplicate <kbd class="k-kbd">⌘ D</kbd></button>\n  <hr class="k-menu-sep" />\n  <button class="k-menu-item k-menu-item--danger">Delete</button>\n</div>`,
            }}
          >
            <div style={{ position: 'relative' }}>
              <button className="k-btn k-btn--secondary" onClick={() => setOpen(!open)}>
                Workspace actions <span style={{ marginLeft: 6, color: 'var(--kanso-ink-3)' }}>▾</span>
              </button>
              {open && (
                <div className="k-menu" style={{ position: 'absolute', top: '100%', left: 0, marginTop: 6, zIndex: 5 }}>
                  <div className="k-menu-label">Actions</div>
                  <button className="k-menu-item">Open<kbd className="k-kbd">↵</kbd></button>
                  <button className="k-menu-item">Edit details<kbd className="k-kbd">⌘ E</kbd></button>
                  <button className="k-menu-item">Duplicate<kbd className="k-kbd">⌘ D</kbd></button>
                  <hr className="k-menu-sep" />
                  <div className="k-menu-label">Sharing</div>
                  <button className="k-menu-item">Invite collaborators</button>
                  <button className="k-menu-item">Manage access</button>
                  <hr className="k-menu-sep" />
                  <button className="k-menu-item k-menu-item--danger">Delete workspace</button>
                </div>
              )}
              {!open && (
                <span className="k-mono k-ink-3" style={{ position: 'absolute', top: '100%', left: 0, marginTop: 6 }}>
                  ← click to open
                </span>
              )}
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
            ['.k-menu',                 '—',     'Container — paper, hairline border, radius-md'],
            ['.k-menu-item',            'child', '13px row, hover → paper-2 background'],
            ['.k-menu-item--danger',    'state', 'Beni text — destructive actions'],
            ['.k-menu-label',           'child', '10px micro-uppercase section label'],
            ['.k-menu-sep',             'child', '0.5px paper-3 divider'],
          ]} />
        ),
      },
    ],
  });
}

// ── Divider ────────────────────────────────────────────────────────────────
function DividerScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Navigation',
    title: 'Divider',
    kanji: '断',
    tag: 'A 0.5px paper-3 line. With text, an 11px uppercase ink-4 label at 0.1em — used to break long forms or to introduce a sub-section.',
    sections: [
      {
        eyebrow: '01 · Plain & labeled',
        title: 'Two variants',
        desc: '',
        body: (
          <Example
            code={{
              html: `<hr class="k-divider" />\n<div class="k-divider-text"><span>section</span></div>`,
            }}
          >
            <div className="k-stack" style={{ width: '100%', maxWidth: 480, gap: 'var(--kanso-space-5)' }}>
              <hr className="k-divider" />
              <div className="k-divider-text"><span>section</span></div>
              <div className="k-divider-text"><span>or continue with</span></div>
            </div>
          </Example>
        ),
      },
    ],
  });
}

Object.assign(window, { TabsScreen, BreadcrumbScreen, PaginationScreen, StepperScreen, MenuScreen, DividerScreen });
