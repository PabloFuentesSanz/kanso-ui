// KansoUI — Display category

// ── Badge ──────────────────────────────────────────────────────────────────
function BadgeScreen2() {
  return makeScreen({
    eyebrow: '寛素UI · Display',
    title: 'Badge',
    kanji: '印',
    tag: 'Status reduced to its smallest legible form. 11px, 0.05em letter-spacing. Color sets the meaning; nothing else.',
    sections: [
      {
        eyebrow: '01 · Semantic',
        title: 'Four meanings',
        desc: '',
        body: (
          <Example
            code={{
              react: `<Badge tone="neutral">Draft</Badge>\n<Badge tone="success">Active</Badge>\n<Badge tone="warning">Pending</Badge>\n<Badge tone="error">Failed</Badge>`,
              html: `<span class="k-badge k-badge--neutral">Draft</span>\n<span class="k-badge k-badge--success">Active</span>`,
            }}
          >
            <span className="k-badge k-badge--neutral">Draft</span>
            <span className="k-badge k-badge--success">Active</span>
            <span className="k-badge k-badge--warning">Pending</span>
            <span className="k-badge k-badge--error">Failed</span>
          </Example>
        ),
      },
      {
        eyebrow: '02 · In context',
        title: 'Beside a title',
        desc: '',
        body: (
          <Example height={160}
            code={{ html: `<div class="k-row">\n  <span>Q4 retention</span>\n  <span class="k-badge k-badge--success">Active</span>\n</div>` }}
          >
            <ul className="k-list" style={{ width: '100%', maxWidth: 480 }}>
              {[
                ['Q4 retention experiment', 'success', 'Active'],
                ['Pricing A/B', 'warning', 'Pending'],
                ['Webhook migration', 'error', 'Failed'],
              ].map((r) => (
                <li key={r[0]}>
                  <div className="k-row" style={{ gap: 8 }}>
                    <span className="k-body" style={{ color: 'var(--kanso-ink)' }}>{r[0]}</span>
                    <span className={`k-badge k-badge--${r[1]}`}>{r[2]}</span>
                  </div>
                  <button className="k-btn k-btn--ghost">Open</button>
                </li>
              ))}
            </ul>
          </Example>
        ),
      },
      {
        eyebrow: '03 · API',
        title: 'Modifiers',
        desc: '',
        body: (
          <ModifierTable rows={[
            ['.k-badge',           '—',        'Base — 11px, 0.05em tracking'],
            ['.k-badge--neutral',  'tone',     'paper-2 background, ink-3 text'],
            ['.k-badge--success',  'tone',     'accent-pale background, accent text'],
            ['.k-badge--warning',  'tone',     'warm-pale background, kogane text'],
            ['.k-badge--error',    'tone',     'red-pale background, beni text'],
          ]} />
        ),
      },
    ],
  });
}

// ── Tag ────────────────────────────────────────────────────────────────────
function TagScreen() {
  const [tags, setTags] = React.useState(['design', 'system', 'wabi-sabi', '寛素']);
  return makeScreen({
    eyebrow: '寛素UI · Display',
    title: 'Tag',
    kanji: '札',
    tag: 'A removable pill — different from a badge. Badges describe state; tags describe identity. They are user-editable, often plural, and can carry a remove button.',
    sections: [
      {
        eyebrow: '01 · Removable',
        title: 'Removable tags',
        desc: 'A pill with a 0.5px ink-4 outline. The × is ghost — only opacity changes on hover.',
        body: (
          <Example
            code={{
              react: `<Tag onRemove={() => ...}>design</Tag>`,
              html: `<span class="k-tag-chip">\n  design <button>×</button>\n</span>`,
            }}
          >
            <div className="k-row" style={{ gap: 6, justifyContent: 'center' }}>
              {tags.map((t) => (
                <span key={t} className="k-tag-chip">
                  {t}
                  <button aria-label={`Remove ${t}`} onClick={() => setTags(tags.filter((x) => x !== t))}>×</button>
                </span>
              ))}
              {tags.length === 0 && <span className="k-body k-ink-3">no tags</span>}
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
            ['.k-tag-chip',         '—',  'Container — outlined pill'],
            ['.k-tag-chip > button', 'child', 'Remove control — opacity only on hover'],
          ]} />
        ),
      },
    ],
  });
}

// ── Avatar ─────────────────────────────────────────────────────────────────
function AvatarScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Display',
    title: 'Avatar',
    kanji: '貌',
    tag: 'A circular monogram in 12px Syne 500 on accent-pale. Never carries a photo unless the system explicitly supports image avatars — initials read more consistently across cultures.',
    sections: [
      {
        eyebrow: '01 · Sizes',
        title: 'Three sizes',
        desc: '24px · 36px · 56px. The 36px size is the default; smaller belongs to compact lists, larger to profile headers.',
        body: (
          <Example
            code={{
              react: `<Avatar size="sm">YK</Avatar>\n<Avatar>M</Avatar>\n<Avatar size="lg">AS</Avatar>`,
              html: `<div class="k-avatar">M</div>`,
            }}
          >
            <div className="k-row" style={{ gap: 32, alignItems: 'flex-end' }}>
              {[['24', 'sm', 'YK'], ['36', '', 'M'], ['56', 'lg', 'AS']].map(([px, mod, init]) => (
                <div key={px} className="k-stack-sm" style={{ alignItems: 'center', gap: 6 }}>
                  <div className={`k-avatar${mod ? ' k-avatar--' + mod : ''}`}>{init}</div>
                  <span className="k-mono k-ink-3">{px}px</span>
                </div>
              ))}
            </div>
          </Example>
        ),
      },
      {
        eyebrow: '02 · Group',
        title: 'Avatar group',
        desc: 'Overlap by 6px with a paper-colored border separating each. The overflow indicator is paper-2 — a quieter neutral.',
        body: (
          <Example
            code={{
              react: `<AvatarGroup max={3}>\n  <Avatar size="sm">AS</Avatar>\n  <Avatar size="sm">M</Avatar>\n  <Avatar size="sm">RN</Avatar>\n  <Avatar size="sm">YK</Avatar>\n  <Avatar size="sm">+4</Avatar>\n</AvatarGroup>`,
            }}
          >
            <div style={{ display: 'flex' }}>
              {['AS', 'M', 'RN', '+4'].map((n, i) => (
                <div key={i} className="k-avatar k-avatar--sm" style={{
                  marginLeft: i === 0 ? 0 : -6,
                  border: '1px solid var(--kanso-paper)',
                  background: i === 3 ? 'var(--kanso-paper-2)' : undefined,
                  color: i === 3 ? 'var(--kanso-ink-3)' : undefined,
                }}>{n}</div>
              ))}
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
            ['.k-avatar',         '—',        'Default 36px circle, accent-pale fill'],
            ['.k-avatar--sm',     'size',     '24px'],
            ['.k-avatar--lg',     'size',     '56px'],
          ]} />
        ),
      },
    ],
  });
}

// ── Card ───────────────────────────────────────────────────────────────────
function CardScreen2() {
  return makeScreen({
    eyebrow: '寛素UI · Display',
    title: 'Card',
    kanji: '札',
    tag: 'A region with breathing room. Elevation is communicated by a 0.5px paper-3 border — never shadow. Do not nest cards inside cards.',
    sections: [
      {
        eyebrow: '01 · Basic',
        title: 'Default',
        desc: 'Padding 1rem 1.25rem; border 0.5px solid paper-3; radius 4px. Nothing more.',
        body: (
          <Example
            code={{
              react: `<Card>\n  <CardTitle>Daily reflection</CardTitle>\n  <CardBody>A small ritual at the end…</CardBody>\n  <CardFooter>\n    <span>12 entries</span>\n    <Button variant="ghost">Open</Button>\n  </CardFooter>\n</Card>`,
              html: `<div class="k-card">\n  <h3 class="k-h3">Daily reflection</h3>\n  <p class="k-body k-ink-2">A small ritual…</p>\n</div>`,
            }}
          >
            <div className="k-grid-2" style={{ width: '100%', maxWidth: 640 }}>
              <div className="k-card">
                <div className="k-h3">Daily reflection</div>
                <p className="k-body k-ink-2" style={{ margin: 0 }}>A small ritual at the end of each work session.</p>
                <div className="k-row" style={{ justifyContent: 'space-between' }}>
                  <span className="k-mono k-ink-3">12 entries</span>
                  <button className="k-btn k-btn--ghost">Open<KIcon name="arrow-right"/></button>
                </div>
              </div>
              <div className="k-card">
                <div className="k-row" style={{ justifyContent: 'space-between' }}>
                  <div className="k-h3">Tea — matcha</div>
                  <span className="k-badge k-badge--success">In stock</span>
                </div>
                <p className="k-body k-ink-2" style={{ margin: 0 }}>Ceremonial grade, Uji. 30g.</p>
                <div className="k-row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="k-h2" style={{ fontWeight: 300 }}>¥3,800</span>
                  <button className="k-btn k-btn--primary">Add</button>
                </div>
              </div>
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
            ['.k-card',           '—',         'Base — paper-3 hairline, 4px radius'],
            ['.k-card--elevated', 'variant',   'Paper-2 background to lift from page'],
          ]} />
        ),
      },
    ],
  });
}

// ── List ───────────────────────────────────────────────────────────────────
function ListScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Display',
    title: 'List',
    kanji: '列',
    tag: 'Vertical sequence with 0.5px paper-3 hairlines between rows. The first row has no top border — the list is structure, not container.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Activity feed',
        desc: '',
        body: (
          <Example
            code={{ html: `<ul class="k-list">\n  <li>...</li>\n</ul>` }}
          >
            <ul className="k-list" style={{ width: '100%', maxWidth: 480 }}>
              {[
                { who: 'Akira', what: 'published a draft', when: '2h' },
                { who: 'Mei',   what: 'commented on Q4 plan', when: '5h' },
                { who: 'Ren',   what: 'invited 3 collaborators', when: '1d' },
              ].map((r, i) => (
                <li key={i}>
                  <div className="k-row">
                    <div className="k-avatar k-avatar--sm">{r.who[0]}</div>
                    <span className="k-body">
                      <span style={{ color: 'var(--kanso-ink)' }}>{r.who}</span>
                      <span className="k-ink-3"> {r.what}</span>
                    </span>
                  </div>
                  <span className="k-mono k-ink-3">{r.when}</span>
                </li>
              ))}
            </ul>
          </Example>
        ),
      },
    ],
  });
}

// ── Table ──────────────────────────────────────────────────────────────────
function TableScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Display',
    title: 'Table',
    kanji: '表',
    tag: 'A data table with horizontal hairlines only — never vertical lines. Headings render in micro-uppercase. Numeric columns shift to DM Mono and right-align.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Default',
        desc: '',
        body: (
          <Example
            code={{
              html: `<table class="k-table">\n  <thead>\n    <tr><th>Workspace</th><th>Status</th><th class="k-table-num">Seats</th></tr>\n  </thead>\n  <tbody>...</tbody>\n</table>`,
            }}
          >
            <table className="k-table" style={{ width: '100%', maxWidth: 560 }}>
              <thead>
                <tr><th>Workspace</th><th>Status</th><th style={{ textAlign: 'right' }}>Seats</th><th></th></tr>
              </thead>
              <tbody>
                {[
                  ['kanso.design', 'success', 'Active', 12],
                  ['quiet.studio', 'neutral', 'Draft', 1],
                  ['wabi.co',      'warning', 'Trial', 4],
                ].map((r) => (
                  <tr key={r[0]}>
                    <td style={{ color: 'var(--kanso-ink)' }}>{r[0]}</td>
                    <td><span className={`k-badge k-badge--${r[1]}`}>{r[2]}</span></td>
                    <td className="k-table-num">{r[3]}</td>
                    <td><button className="k-btn k-btn--ghost">Open</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Example>
        ),
      },
      {
        eyebrow: '02 · API',
        title: 'Modifiers',
        desc: '',
        body: (
          <ModifierTable rows={[
            ['.k-table',       '—',      'Base — no borders except horizontal hairlines'],
            ['.k-table-num',   'column', 'DM Mono, right-aligned for numeric data'],
          ]} />
        ),
      },
    ],
  });
}

// ── Tooltip ────────────────────────────────────────────────────────────────
function TooltipScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Display',
    title: 'Tooltip',
    kanji: '示',
    tag: 'A small ink-on-paper hint that appears on hover. 11px. Single line only — if you need two, you need a popover.',
    sections: [
      {
        eyebrow: '01 · Hover targets',
        title: 'On any focusable',
        desc: 'CSS-only on hover. The React component wires keyboard focus and adds a delay so the tooltip does not trail the cursor.',
        body: (
          <Example
            code={{
              react: `<Tooltip label="Add to library">\n  <IconButton><Plus /></IconButton>\n</Tooltip>`,
              html: `<span class="k-tooltip">\n  <button class="k-icon-btn">...</button>\n  <span class="k-tooltip-body">Add to library</span>\n</span>`,
            }}
          >
            <div className="k-row" style={{ gap: 'var(--kanso-space-4)' }}>
              <span className="k-tooltip">
                <button className="k-icon-btn k-icon-btn--bordered" aria-label="Add"><KIcon name="plus"/></button>
                <span className="k-tooltip-body">Add to library</span>
              </span>
              <span className="k-tooltip">
                <button className="k-icon-btn k-icon-btn--bordered" aria-label="Search"><KIcon name="search"/></button>
                <span className="k-tooltip-body">Search ⌘ K</span>
              </span>
              <span className="k-tooltip">
                <button className="k-btn k-btn--secondary">Hover me</button>
                <span className="k-tooltip-body">A short hint, never two lines.</span>
              </span>
            </div>
          </Example>
        ),
      },
    ],
  });
}

// ── Kbd ────────────────────────────────────────────────────────────────────
function KbdScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Display',
    title: 'Keyboard',
    kanji: '鍵',
    tag: 'A flat, monospace tag for keyboard shortcuts. Paper-2 background with a 0.5px hairline and a 1px bottom-border to imply a key.',
    sections: [
      {
        eyebrow: '01 · Single & sequence',
        title: 'Single keys & combos',
        desc: 'Use a thin space between keys in a combo — never a +.',
        body: (
          <Example
            code={{ html: `<kbd class="k-kbd">⌘</kbd>\n<kbd class="k-kbd">⌘ K</kbd>` }}
          >
            <div className="k-row" style={{ gap: 'var(--kanso-space-4)' }}>
              <kbd className="k-kbd">⌘</kbd>
              <kbd className="k-kbd">K</kbd>
              <kbd className="k-kbd">⌘ K</kbd>
              <kbd className="k-kbd">↵</kbd>
              <kbd className="k-kbd">Esc</kbd>
              <span className="k-body k-ink-3" style={{ marginLeft: 'var(--kanso-space-4)' }}>
                Press <kbd className="k-kbd">⌘ ⇧ P</kbd> to open the command palette.
              </span>
            </div>
          </Example>
        ),
      },
    ],
  });
}

// ── EmptyState ─────────────────────────────────────────────────────────────
function EmptyStateScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Display',
    title: 'Empty state',
    kanji: '空',
    tag: 'Where KansoUI feels most at home. A single large kanji as the only ornament, a one-line message, and at most one action. Embrace the void.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'No content yet',
        desc: '',
        body: (
          <Example height={280}
            code={{
              react: `<EmptyState mark="空" title="Nothing here yet" description="Your first reflection will appear here.">\n  <Button variant="primary">Write one</Button>\n</EmptyState>`,
              html: `<div class="k-empty">\n  <div class="k-empty-mark">空</div>\n  <div class="k-empty-title">Nothing here yet</div>\n  <div class="k-empty-desc">Your first reflection will appear here.</div>\n</div>`,
            }}
          >
            <div className="k-empty">
              <div className="k-empty-mark">空</div>
              <div className="k-empty-title">Nothing here yet</div>
              <div className="k-empty-desc">Your first reflection will appear here. Take your time.</div>
              <button className="k-btn k-btn--primary" style={{ marginTop: 'var(--kanso-space-3)' }}>Write one</button>
            </div>
          </Example>
        ),
      },
      {
        eyebrow: '02 · No action',
        title: 'Restful empty',
        desc: 'Sometimes the empty state is the destination — no CTA needed.',
        body: (
          <Example height={220}
            code={{ html: `<div class="k-empty">\n  <div class="k-empty-mark">無</div>\n  <div class="k-empty-title">All caught up</div>\n</div>` }}
          >
            <div className="k-empty">
              <div className="k-empty-mark">無</div>
              <div className="k-empty-title">All caught up</div>
              <div className="k-empty-desc">You have no notifications.</div>
            </div>
          </Example>
        ),
      },
    ],
  });
}

// ── Stat ───────────────────────────────────────────────────────────────────
function StatScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Display',
    title: 'Stat',
    kanji: '数',
    tag: 'A single metric rendered in Noto Serif JP 200. Number-as-typography — the serif weight gives weight to the figure without bolding.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Numbers as type',
        desc: 'Label above in micro-uppercase, value in display serif, optional delta below.',
        body: (
          <Example
            code={{
              react: `<Stat label="Active users" value="12,480" delta="+3.2% / month" trend="up" />`,
              html: `<div class="k-stat">\n  <span class="k-stat-label">Active users</span>\n  <span class="k-stat-value">12,480</span>\n  <span class="k-stat-delta k-stat-delta--up">+3.2% / month</span>\n</div>`,
            }}
          >
            <div className="k-grid-3" style={{ width: '100%', maxWidth: 640 }}>
              <div className="k-stat">
                <span className="k-stat-label">Active users</span>
                <span className="k-stat-value">12,480</span>
                <span className="k-stat-delta k-stat-delta--up">↑ 3.2% / month</span>
              </div>
              <div className="k-stat">
                <span className="k-stat-label">Sessions</span>
                <span className="k-stat-value">38,210</span>
                <span className="k-stat-delta">— flat</span>
              </div>
              <div className="k-stat">
                <span className="k-stat-label">Errors</span>
                <span className="k-stat-value">14</span>
                <span className="k-stat-delta k-stat-delta--down">↓ 1.1% / week</span>
              </div>
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
            ['.k-stat',                 '—',     'Container — label + value + delta stack'],
            ['.k-stat-delta--up',       'state', 'Matcha color — positive direction'],
            ['.k-stat-delta--down',     'state', 'Beni color — negative direction'],
          ]} />
        ),
      },
    ],
  });
}

// ── Quote ──────────────────────────────────────────────────────────────────
function QuoteScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Display',
    title: 'Quote',
    kanji: '言',
    tag: 'An editorial pull-quote in Noto Serif JP 200, paired with a faint kanji mark. Used for opening sections, framing principles, or as a closing flourish — never decoratively.',
    sections: [
      {
        eyebrow: '01 · Pull quote',
        title: 'Pull quote',
        desc: '',
        body: (
          <Example
            code={{
              html: `<blockquote class="k-quote-block">\n  <span class="k-quote-mark">言</span>\n  <p class="k-quote">Remove until nothing remains that can be removed.</p>\n</blockquote>`,
            }}
          >
            <blockquote className="k-quote-block" style={{ margin: 0, maxWidth: 460 }}>
              <span className="k-quote-mark">言</span>
              <p className="k-quote" style={{ margin: 0 }}>Remove until nothing remains that can be removed.</p>
            </blockquote>
          </Example>
        ),
      },
      {
        eyebrow: '02 · Seal',
        title: 'Seal — for stamps & signatures',
        desc: 'A 56px circle in beni red carrying a single kanji. Use sparingly — once per page, at most.',
        body: (
          <Example
            code={{
              html: `<span class="k-seal">寛</span>`,
            }}
          >
            <div className="k-row" style={{ gap: 'var(--kanso-space-5)', alignItems: 'center' }}>
              <span className="k-seal">寛</span>
              <div className="k-stack-sm" style={{ gap: 2 }}>
                <span className="k-h3">Approved</span>
                <span className="k-mono k-ink-3">12 May 2026 · A. Sato</span>
              </div>
            </div>
          </Example>
        ),
      },
    ],
  });
}

Object.assign(window, {
  BadgeScreen2, TagScreen, AvatarScreen, CardScreen2, ListScreen,
  TableScreen, TooltipScreen, KbdScreen, EmptyStateScreen, StatScreen, QuoteScreen,
});
