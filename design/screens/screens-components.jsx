// KansoUI — component screens (Buttons, Inputs, Badges, Cards, Feedback, Navigation)

// Tiny outline icons drawn at 1.5px stroke — Lucide-style
function KIcon({ name, size = 16 }) {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'arrow-right': return <svg {...props}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
    case 'plus':        return <svg {...props}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
    case 'search':      return <svg {...props}><circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.65" y2="16.65"/></svg>;
    case 'check':       return <svg {...props}><polyline points="20 6 9 17 4 12"/></svg>;
    case 'leaf':        return <svg {...props}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.5c1 1.5 1 5 1 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></svg>;
    case 'circle-dot':  return <svg {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>;
    default: return null;
  }
}

// ── Buttons ────────────────────────────────────────────────────────────────
function ButtonScreen() {
  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">寛素UI · 04</div>
          <h1 className="k-display">Buttons</h1>
          <p className="k-body k-screen-head-tag">
            Three variants in a strict hierarchy. A single primary per screen. Hover dims to 75% opacity;
            active scales to 0.98. No long transitions, no spring, no glow.
          </p>
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">押</div>
      </header>

      {/* 01 — Primary */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">01 · Primary</div>
            <div className="k-h2">Primary — one per screen</div>
          </div>
          <p className="k-section-head-desc k-body">
            The single most important action. Ink on paper. Never repeated within a single view —
            if you find yourself reaching for a second, one of them is not actually primary.
          </p>
        </div>

        <div className="k-stack">
          <Example
            title="Default"
            description="A plain primary button."
            code={{
              react: `<Button variant="primary">Save changes</Button>`,
              html:  `<button class="k-btn k-btn--primary">\n  Save changes\n</button>`,
            }}
          >
            <button className="k-btn k-btn--primary">Save changes</button>
          </Example>

          <Example
            title="With trailing icon"
            description="Lucide outline, 16px, 1.5px stroke, currentColor."
            code={{
              react: `import { ArrowRight } from 'lucide-react';\n\n<Button variant="primary">\n  Continue <ArrowRight size={16} strokeWidth={1.5} />\n</Button>`,
              html:  `<button class="k-btn k-btn--primary">\n  Continue\n  <svg width="16" height="16" stroke-width="1.5" ...></svg>\n</button>`,
            }}
          >
            <button className="k-btn k-btn--primary">Continue<KIcon name="arrow-right"/></button>
          </Example>
        </div>
      </section>

      {/* 02 — Accent */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">02 · Accent</div>
            <div className="k-h2">Accent — affirmative confirmations</div>
          </div>
          <p className="k-section-head-desc k-body">
            Matcha background. Reserved for moments of confirmation — approving, signing, sending. The
            accent token is wired to the current theme, so swapping it tints every accent in the system.
          </p>
        </div>

        <Example
          title="Confirm action"
          code={{
            react: `<Button variant="accent">\n  <Check size={16} /> Approve\n</Button>`,
            html:  `<button class="k-btn k-btn--accent">\n  <svg>...</svg> Approve\n</button>`,
          }}
        >
          <button className="k-btn k-btn--accent">Confirm</button>
          <button className="k-btn k-btn--accent"><KIcon name="check"/>Approve</button>
        </Example>
      </section>

      {/* 03 — Secondary & Ghost */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">03 · Supporting</div>
            <div className="k-h2">Secondary &amp; ghost</div>
          </div>
          <p className="k-section-head-desc k-body">
            Secondary holds the supporting action — Cancel beside Save. Ghost is for tertiary or
            destructive actions that should feel optional.
          </p>
        </div>

        <div className="k-stack">
          <Example
            title="Secondary"
            description="Transparent background, 0.5px ink-4 border."
            code={{
              react: `<Button variant="secondary">Cancel</Button>\n<Button variant="secondary">\n  <Plus size={16} /> Add another\n</Button>`,
              html:  `<button class="k-btn k-btn--secondary">Cancel</button>\n<button class="k-btn k-btn--secondary">\n  <svg>...</svg> Add another\n</button>`,
            }}
          >
            <button className="k-btn k-btn--secondary">Cancel</button>
            <button className="k-btn k-btn--secondary"><KIcon name="plus"/>Add another</button>
          </Example>

          <Example
            title="Ghost &amp; destructive"
            description="No border. Smaller padding. Destructive uses beni, never as a primary."
            code={{
              react: `<Button variant="ghost">Skip for now</Button>\n<Button variant="destructive">Delete account</Button>`,
              html:  `<button class="k-btn k-btn--ghost">Skip for now</button>\n<button class="k-btn k-btn--destructive">Delete account</button>`,
            }}
          >
            <button className="k-btn k-btn--ghost">Skip for now</button>
            <button className="k-btn k-btn--destructive">Delete account</button>
          </Example>
        </div>
      </section>

      {/* 04 — States */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">04 · States</div>
            <div className="k-h2">States</div>
          </div>
          <p className="k-section-head-desc k-body">
            Hover dims to 75% opacity. Active scales 0.98. Disabled drops to 35% opacity and ignores
            pointer events. Focus uses a 1px outline at 2px offset — no glow.
          </p>
        </div>

        <Example
          title="All four states"
          description="Hover and active states shown frozen."
          code={{
            css: `.k-btn:hover { opacity: 0.75; }\n.k-btn:active { transform: scale(0.98); }\n.k-btn[disabled] { opacity: 0.35; pointer-events: none; }`,
            react: `<Button variant="primary">Save</Button>\n<Button variant="primary" disabled>Save</Button>`,
          }}
        >
          <div style={{ display: 'flex', gap: 'var(--kanso-space-5)', alignItems: 'center' }}>
            <div className="k-stack-sm" style={{ alignItems: 'center', gap: 6 }}>
              <button className="k-btn k-btn--primary">Save</button>
              <span className="k-mono k-ink-3">default</span>
            </div>
            <div className="k-stack-sm" style={{ alignItems: 'center', gap: 6 }}>
              <button className="k-btn k-btn--primary" style={{ opacity: 0.75 }}>Save</button>
              <span className="k-mono k-ink-3">hover</span>
            </div>
            <div className="k-stack-sm" style={{ alignItems: 'center', gap: 6 }}>
              <button className="k-btn k-btn--primary" style={{ transform: 'scale(0.98)' }}>Save</button>
              <span className="k-mono k-ink-3">active</span>
            </div>
            <div className="k-stack-sm" style={{ alignItems: 'center', gap: 6 }}>
              <button className="k-btn k-btn--primary" style={{ opacity: 0.35 }}>Save</button>
              <span className="k-mono k-ink-3">disabled</span>
            </div>
          </div>
        </Example>
      </section>

      {/* 05 — Used in context */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">05 · In context</div>
            <div className="k-h2">Used in context</div>
          </div>
          <p className="k-section-head-desc k-body">
            A form footer is the canonical layout: primary on the right, secondary directly beside it,
            destructive far on the left if it exists at all.
          </p>
        </div>

        <Example
          title="Form footer"
          height={140}
          code={{
            html: `<footer class="k-row" style="justify-content: space-between">\n  <button class="k-btn k-btn--destructive">Delete</button>\n  <div class="k-row">\n    <button class="k-btn k-btn--secondary">Cancel</button>\n    <button class="k-btn k-btn--primary">Save</button>\n  </div>\n</footer>`,
          }}
        >
          <div style={{ width: '100%', maxWidth: 520, display: 'flex', justifyContent: 'space-between' }}>
            <button className="k-btn k-btn--destructive">Delete</button>
            <div className="k-row">
              <button className="k-btn k-btn--secondary">Cancel</button>
              <button className="k-btn k-btn--primary">Save</button>
            </div>
          </div>
        </Example>
      </section>

      {/* 06 — Modifiers */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">06 · API</div>
            <div className="k-h2">Class modifiers</div>
          </div>
          <p className="k-section-head-desc k-body">
            Every variant is a class modifier on the base <span className="k-tag">.k-btn</span> selector.
            React props mirror these one-to-one.
          </p>
        </div>

        <ModifierTable rows={[
          ['.k-btn',              '—',         'Base button — required on every variant'],
          ['.k-btn--primary',     'variant',   'Ink on paper. One per screen.'],
          ['.k-btn--accent',      'variant',   'Matcha on paper. Affirmative actions.'],
          ['.k-btn--secondary',   'variant',   'Transparent with 0.5px ink-4 border.'],
          ['.k-btn--ghost',       'variant',   'Transparent, no border, smaller padding.'],
          ['.k-btn--destructive', 'variant',   'Beni text on transparent. Destructive only.'],
          ['[disabled]',          'attribute', 'Drops opacity to 35%, ignores pointer.'],
        ]} />
      </section>
    </article>
  );
}

// ── Inputs / Forms ─────────────────────────────────────────────────────────
function FormScreen() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('hello@kanso.design');
  const [notify, setNotify] = React.useState(true);
  const [plan, setPlan] = React.useState('annual');
  const [terms, setTerms] = React.useState(false);

  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">寛素UI · 05</div>
          <h1 className="k-display">Forms &amp; inputs</h1>
          <p className="k-body k-screen-head-tag">
            Inputs are quiet: 36px tall, hairline border, no glow on focus. The label sits above at 11px,
            never inside the field. Validation borrows from beni without raising its voice.
          </p>
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">入</div>
      </header>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">01 · Text fields</div>
            <div className="k-h2">Text inputs</div>
          </div>
          <p className="k-section-head-desc k-body">Default · focused · invalid · disabled. Focus shifts the border one tone darker — that is the only signal.</p>
        </div>
        <div className="k-grid-2">
          <div className="k-field">
            <label className="k-field-label">Full name</label>
            <input className="k-input" placeholder="Akira Sato" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="k-field">
            <label className="k-field-label">Email</label>
            <input className="k-input" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="k-field">
            <label className="k-field-label">Workspace URL</label>
            <input className={`k-input ${!email.includes('@') ? 'k-input--invalid' : ''}`} placeholder="invalid-input" defaultValue="not a url" />
            <span className="k-field-error">Must be a valid URL.</span>
          </div>
          <div className="k-field">
            <label className="k-field-label">Locale</label>
            <input className="k-input" defaultValue="ja-JP" disabled style={{ opacity: 0.5, background: 'var(--kanso-paper-2)' }} />
            <span className="k-field-hint">Synced from organisation settings.</span>
          </div>
        </div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">02 · Textarea &amp; search</div>
            <div className="k-h2">Multi-line &amp; search</div>
          </div>
          <p className="k-section-head-desc k-body"></p>
        </div>
        <div className="k-grid-2">
          <div className="k-field">
            <label className="k-field-label">Bio</label>
            <textarea className="k-textarea" placeholder="A few words about you." />
          </div>
          <div className="k-field">
            <label className="k-field-label">Search</label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: 10, top: 10, color: 'var(--kanso-ink-3)' }}><KIcon name="search"/></span>
              <input className="k-input" placeholder="Find anything…" style={{ paddingLeft: 32 }} />
            </div>
          </div>
        </div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">03 · Selection</div>
            <div className="k-h2">Checkboxes, radios, toggles</div>
          </div>
          <p className="k-section-head-desc k-body">Selection controls inherit ink tones. The toggle is the only one that uses the accent — and only when on.</p>
        </div>

        <div className="k-grid-3">
          <div className="k-stack">
            <div className="k-micro">Checkbox</div>
            <label className="k-row" style={{ gap: 10 }}>
              <input type="checkbox" className="k-check" checked={terms} onChange={() => setTerms(!terms)} />
              <span className="k-body">I accept the terms.</span>
            </label>
            <label className="k-row" style={{ gap: 10 }}>
              <input type="checkbox" className="k-check" defaultChecked />
              <span className="k-body">Send me product updates.</span>
            </label>
            <label className="k-row" style={{ gap: 10 }}>
              <input type="checkbox" className="k-check" />
              <span className="k-body k-ink-3">Marketing emails (optional).</span>
            </label>
          </div>

          <div className="k-stack">
            <div className="k-micro">Radio</div>
            {[
              { v: 'monthly', l: 'Monthly · ¥1,200' },
              { v: 'annual',  l: 'Annual · ¥12,000' },
              { v: 'lifetime', l: 'Lifetime · ¥48,000' },
            ].map((o) => (
              <label key={o.v} className="k-row" style={{ gap: 10 }}>
                <input type="radio" name="plan" className="k-radio" checked={plan === o.v} onChange={() => setPlan(o.v)} />
                <span className="k-body">{o.l}</span>
              </label>
            ))}
          </div>

          <div className="k-stack">
            <div className="k-micro">Toggle</div>
            <div className="k-row" style={{ justifyContent: 'space-between' }}>
              <span className="k-body">Email notifications</span>
              <button className="k-toggle" role="switch" aria-checked={notify} onClick={() => setNotify(!notify)} />
            </div>
            <div className="k-row" style={{ justifyContent: 'space-between' }}>
              <span className="k-body">Two-factor auth</span>
              <button className="k-toggle" role="switch" aria-checked={true} />
            </div>
            <div className="k-row" style={{ justifyContent: 'space-between' }}>
              <span className="k-body k-ink-3">Beta features</span>
              <button className="k-toggle" role="switch" aria-checked={false} />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

// ── Badges ────────────────────────────────────────────────────────────────
function BadgeScreen() {
  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">寛素UI · 06</div>
          <h1 className="k-display">Badges</h1>
          <p className="k-body k-screen-head-tag">
            Status reduced to its smallest legible form. 11px, 0.05em letter-spacing, never larger than the
            adjacent text. Color sets the meaning; nothing else.
          </p>
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">印</div>
      </header>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">01 · Semantic</div>
            <div className="k-h2">Four meanings</div>
          </div>
          <p className="k-section-head-desc k-body"></p>
        </div>
        <div className="k-grid-4">
          {[
            { c: 'neutral', l: 'Draft' },
            { c: 'success', l: 'Active' },
            { c: 'warning', l: 'Pending' },
            { c: 'error',   l: 'Failed' },
          ].map((b) => (
            <div key={b.c} className="k-stack-sm" style={{ alignItems: 'flex-start' }}>
              <span className={`k-badge k-badge--${b.c}`}>{b.l}</span>
              <span className="k-mono k-ink-3">{`.k-badge--${b.c}`}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">02 · In context</div>
            <div className="k-h2">Used in context</div>
          </div>
          <p className="k-section-head-desc k-body">Badges sit beside titles, inside list rows, or in metadata. Never as a standalone callout.</p>
        </div>
        <ul className="k-list">
          {[
            { title: 'Onboarding email · v3', meta: '12 days ago', badge: ['neutral', 'Draft'] },
            { title: 'Q4 retention experiment', meta: 'Running', badge: ['success', 'Active'] },
            { title: 'Pricing page A/B', meta: 'Awaiting review', badge: ['warning', 'Pending'] },
            { title: 'Legacy webhook migration', meta: '3 errors in last hour', badge: ['error', 'Failed'] },
          ].map((r) => (
            <li key={r.title}>
              <div className="k-stack-sm" style={{ gap: 2 }}>
                <div className="k-row" style={{ gap: 'var(--kanso-space-2)' }}>
                  <span className="k-body" style={{ color: 'var(--kanso-ink)' }}>{r.title}</span>
                  <span className={`k-badge k-badge--${r.badge[0]}`}>{r.badge[1]}</span>
                </div>
                <span className="k-mono k-ink-3">{r.meta}</span>
              </div>
              <button className="k-btn k-btn--ghost">Open</button>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

// ── Cards ─────────────────────────────────────────────────────────────────
function CardScreen() {
  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">寛素UI · 07</div>
          <h1 className="k-display">Cards</h1>
          <p className="k-body k-screen-head-tag">
            A card is a region with breathing room. Elevation is communicated by a 0.5px border on paper-3 —
            never by shadow. Don't nest cards inside cards.
          </p>
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">札</div>
      </header>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">01 · Basic</div>
            <div className="k-h2">Basic card</div>
          </div>
          <p className="k-section-head-desc k-body">Padding 1rem 1.25rem; border 0.5px solid paper-3; radius 4px. Nothing more.</p>
        </div>

        <div className="k-grid-2">
          <div className="k-card">
            <div className="k-h3">Daily reflection</div>
            <p className="k-body k-ink-2" style={{ margin: 0 }}>
              A small ritual at the end of each work session. One paragraph, no prompts.
            </p>
            <div className="k-row" style={{ justifyContent: 'space-between', marginTop: 'var(--kanso-space-2)' }}>
              <span className="k-mono k-ink-3">12 entries this month</span>
              <button className="k-btn k-btn--ghost">Open<KIcon name="arrow-right"/></button>
            </div>
          </div>

          <div className="k-card">
            <div className="k-row" style={{ justifyContent: 'space-between' }}>
              <div className="k-h3">Tea — matcha</div>
              <span className="k-badge k-badge--success">In stock</span>
            </div>
            <p className="k-body k-ink-2" style={{ margin: 0 }}>
              Ceremonial grade, Uji. Shipped in a 30g cedar canister.
            </p>
            <div className="k-row" style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span className="k-h2" style={{ fontWeight: 300 }}>¥3,800</span>
              <button className="k-btn k-btn--primary">Add to cart</button>
            </div>
          </div>
        </div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">02 · List card</div>
            <div className="k-h2">List card</div>
          </div>
          <p className="k-section-head-desc k-body">A card framing a list of items. Internal dividers are paper-3 hairlines.</p>
        </div>

        <div className="k-card" style={{ padding: 0 }}>
          <div style={{ padding: 'var(--kanso-space-4) var(--kanso-space-4) var(--kanso-space-3)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div className="k-h3">Activity</div>
            <span className="k-micro">Last 7 days</span>
          </div>
          <ul className="k-list" style={{ padding: '0 var(--kanso-space-4) var(--kanso-space-3)' }}>
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
        </div>
      </section>
    </article>
  );
}

// ── Feedback (Alerts / Progress / Toggle) ──────────────────────────────────
function FeedbackScreen() {
  const [p, setP] = React.useState(64);
  React.useEffect(() => {
    const id = setInterval(() => setP((x) => (x + 1) % 100), 90);
    return () => clearInterval(id);
  }, []);
  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">寛素UI · 08</div>
          <h1 className="k-display">Feedback</h1>
          <p className="k-body k-screen-head-tag">
            Alerts, progress, and motion. The system communicates state with one decoration only —
            a 2px left border — and animates as if breathing: present, but barely felt.
          </p>
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">音</div>
      </header>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">01 · Alerts</div>
            <div className="k-h2">Alerts &amp; banners</div>
          </div>
          <p className="k-section-head-desc k-body">A pale background plus a 2px left border. That single accent is the only decoration permitted.</p>
        </div>
        <div className="k-stack">
          <div className="k-alert k-alert--info">
            <div className="k-alert-title">A quiet word</div>
            <span>You have 12 unread notes from this week. They will not interrupt you.</span>
          </div>
          <div className="k-alert k-alert--success">
            <div className="k-alert-title">Saved</div>
            <span>Your changes were persisted to the workspace.</span>
          </div>
          <div className="k-alert k-alert--warning">
            <div className="k-alert-title">Subscription expires soon</div>
            <span>Renew within 7 days to keep your workspace active.</span>
          </div>
          <div className="k-alert k-alert--error">
            <div className="k-alert-title">Sync failed</div>
            <span>Three changes could not be uploaded. We'll retry automatically.</span>
          </div>
        </div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">02 · Progress</div>
            <div className="k-h2">Progress</div>
          </div>
          <p className="k-section-head-desc k-body">2px tall — never thicker. No pulse, no shimmer, no indeterminate stripes.</p>
        </div>
        <div className="k-stack">
          {[
            { lbl: 'Uploading attachments', val: p, mod: '' },
            { lbl: 'Annual plan usage',     val: 38, mod: 'accent' },
            { lbl: 'Storage',               val: 72, mod: 'warm' },
            { lbl: 'Sync errors',           val: 14, mod: 'error' },
          ].map((r) => (
            <div key={r.lbl} className="k-stack-sm">
              <div className="k-row" style={{ justifyContent: 'space-between' }}>
                <span className="k-body">{r.lbl}</span>
                <span className="k-mono k-ink-3">{r.val}%</span>
              </div>
              <div className="k-progress">
                <div className={`k-progress-fill${r.mod ? ' k-progress-fill--' + r.mod : ''}`} style={{ width: r.val + '%' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">03 · Motion</div>
            <div className="k-h2">Motion</div>
          </div>
          <p className="k-section-head-desc k-body">
            Maximum 200ms. Easing: ease or ease-out. Only opacity, transform, and border-color are animated —
            never width, height, padding, or margin.
          </p>
        </div>
        <div>
          {[
            ['Maximum duration', '200ms'],
            ['Easing', 'ease · ease-out'],
            ['Allowed properties', 'opacity · transform · border-color'],
            ['Forbidden', 'width · height · padding · margin · spring · bounce'],
            ['Entry fade', 'opacity 0 → 1 over 150ms, no slide'],
          ].map(([k, v]) => (
            <div key={k} className="k-spec-row">
              <span className="k-mono k-ink-2">{k}</span>
              <span className="k-body k-ink-3">{v}</span>
              <span></span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

// ── Navigation (Tabs, Avatars, Dividers) ───────────────────────────────────
function NavScreen() {
  const [tab, setTab] = React.useState('overview');
  const tabs = ['overview', 'activity', 'members', 'integrations', 'billing'];
  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">寛素UI · 09</div>
          <h1 className="k-display">Navigation</h1>
          <p className="k-body k-screen-head-tag">
            Tabs, dividers, avatars. Selection is conveyed by a single 1.5px underline — no pills, no backgrounds.
            Avatars are circular and quiet, holding initials at 12px.
          </p>
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">路</div>
      </header>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">01 · Tabs</div>
            <div className="k-h2">Tabs</div>
          </div>
          <p className="k-section-head-desc k-body">Active state: ink color + 1.5px ink underline. Inactive: ink-3, no underline. Nothing else.</p>
        </div>

        <div className="k-tabs">
          {tabs.map((t) => (
            <button key={t} className="k-tab" aria-selected={tab === t} onClick={() => setTab(t)}>
              {t[0].toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <div className="k-body k-ink-2" style={{ paddingTop: 'var(--kanso-space-4)' }}>
          Viewing <span className="k-tag">{tab}</span> — selection persists until you click another tab. There is no scroll snap, no animation, no caret.
        </div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">02 · Avatars</div>
            <div className="k-h2">Avatars</div>
          </div>
          <p className="k-section-head-desc k-body">A 36px circle with initials in Syne 500 at 12px. Background uses the active accent's pale tone — quiet, never loud.</p>
        </div>
        <div className="k-row" style={{ gap: 'var(--kanso-space-5)', alignItems: 'flex-end' }}>
          {['AS', 'M', 'RN', 'YK'].map((n, i) => (
            <div key={i} className="k-stack-sm" style={{ alignItems: 'center', gap: 6 }}>
              <div className={i === 0 ? 'k-avatar k-avatar--lg' : i === 3 ? 'k-avatar k-avatar--sm' : 'k-avatar'}>{n}</div>
              <span className="k-mono k-ink-3">{i === 0 ? '56' : i === 3 ? '24' : '36'}px</span>
            </div>
          ))}
          <div style={{ display: 'flex', marginLeft: 'var(--kanso-space-4)' }}>
            {['AS', 'M', 'RN', '+4'].map((n, i) => (
              <div key={i} className="k-avatar k-avatar--sm" style={{
                marginLeft: i === 0 ? 0 : -6,
                border: '1px solid var(--kanso-paper)',
                background: i === 3 ? 'var(--kanso-paper-2)' : undefined,
                color: i === 3 ? 'var(--kanso-ink-3)' : undefined,
              }}>{n}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">03 · Dividers</div>
            <div className="k-h2">Dividers</div>
          </div>
          <p className="k-section-head-desc k-body">0.5px paper-3 hairline. With text, 11px uppercase ink-4 at 0.1em.</p>
        </div>
        <div className="k-stack" style={{ gap: 'var(--kanso-space-5)' }}>
          <hr className="k-divider" />
          <div className="k-divider-text"><span>section</span></div>
          <div className="k-divider-text"><span>or continue with</span></div>
        </div>
      </section>
    </article>
  );
}

Object.assign(window, { ButtonScreen, FormScreen, BadgeScreen, CardScreen, FeedbackScreen, NavScreen, KIcon });
