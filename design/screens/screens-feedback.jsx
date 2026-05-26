// KansoUI — Feedback category

// ── Alert ──────────────────────────────────────────────────────────────────
function AlertScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Feedback',
    title: 'Alert',
    kanji: '音',
    tag: 'A pale semantic background plus a 2px left border. That single accent is the only decoration permitted — no icons by default, no close button unless dismissible.',
    sections: [
      {
        eyebrow: '01 · Four tones',
        title: 'Info · success · warning · error',
        desc: '',
        body: (
          <Example
            code={{
              react: `<Alert tone="info" title="A quiet word">\n  You have 12 unread notes this week.\n</Alert>`,
              html: `<div class="k-alert k-alert--info">\n  <div class="k-alert-title">A quiet word</div>\n  <span>You have 12 unread notes this week.</span>\n</div>`,
            }}
          >
            <div className="k-stack" style={{ width: '100%', maxWidth: 520 }}>
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
          </Example>
        ),
      },
      {
        eyebrow: '02 · API',
        title: 'Modifiers',
        desc: '',
        body: (
          <ModifierTable rows={[
            ['.k-alert',           '—',      'Base — 2px left border, paper-2 background'],
            ['.k-alert--info',     'tone',   'ink-3 left border'],
            ['.k-alert--success',  'tone',   'accent left border, accent-pale background'],
            ['.k-alert--warning',  'tone',   'kogane left border, warm-pale background'],
            ['.k-alert--error',    'tone',   'beni left border, red-pale background'],
            ['.k-alert-title',     'child',  'Title — same color as the border'],
          ]} />
        ),
      },
    ],
  });
}

// ── Toast ──────────────────────────────────────────────────────────────────
function ToastScreen() {
  const [toasts, setToasts] = React.useState([]);
  const fire = (tone, title, msg) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, tone, title, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3000);
  };
  return makeScreen({
    eyebrow: '寛素UI · Feedback',
    title: 'Toast',
    kanji: '報',
    tag: 'A transient confirmation that fades in for 150ms and leaves on its own. Background is solid ink (or semantic) — the only place in the system where text sits on a saturated surface.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Fire a toast',
        desc: 'Click the trigger to spawn a toast in the bottom-left of this preview. The React API exposes a useToast() hook.',
        body: (
          <Example height={200}
            code={{
              react: `const toast = useToast();\n\n<Button onClick={() => toast({ tone: 'success', title: 'Saved' })}>\n  Save\n</Button>`,
              html: `<div class="k-toast k-toast--success">\n  <span class="k-toast-title">Saved</span>\n  <button class="k-toast-action">Undo</button>\n</div>`,
            }}
          >
            <div style={{ position: 'relative', width: '100%', minHeight: 160 }}>
              <div className="k-row" style={{ justifyContent: 'center' }}>
                <button className="k-btn k-btn--secondary" onClick={() => fire('', 'Note saved', 'Your draft is preserved.')}>Fire neutral</button>
                <button className="k-btn k-btn--secondary" onClick={() => fire('success', 'Saved', 'Persisted to workspace.')}>Fire success</button>
                <button className="k-btn k-btn--secondary" onClick={() => fire('error', 'Sync failed', 'We\'ll retry shortly.')}>Fire error</button>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start' }}>
                {toasts.map((t) => (
                  <div key={t.id} className={`k-toast${t.tone ? ' k-toast--' + t.tone : ''}`}>
                    <span className="k-toast-title">{t.title}</span>
                    <span style={{ opacity: 0.75 }}>{t.msg}</span>
                    <button className="k-toast-action" onClick={() => setToasts((x) => x.filter((y) => y.id !== t.id))}>Dismiss</button>
                  </div>
                ))}
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
            ['.k-toast',           '—',     'Base — ink background, paper text'],
            ['.k-toast--success',  'tone',  'Matcha background'],
            ['.k-toast--error',    'tone',  'Beni background'],
            ['.k-toast-action',    'child', 'Inline action — uppercase, 11px'],
          ]} />
        ),
      },
    ],
  });
}

// ── Progress ───────────────────────────────────────────────────────────────
function ProgressScreen() {
  const [p, setP] = React.useState(64);
  React.useEffect(() => { const id = setInterval(() => setP((x) => (x + 1) % 100), 90); return () => clearInterval(id); }, []);
  return makeScreen({
    eyebrow: '寛素UI · Feedback',
    title: 'Progress',
    kanji: '進',
    tag: 'A 2px track — never thicker. No pulse, no shimmer, no indeterminate stripes. If you need motion to communicate progress, use a spinner instead.',
    sections: [
      {
        eyebrow: '01 · Four tones',
        title: 'Default · accent · warm · error',
        desc: '',
        body: (
          <Example
            code={{
              react: `<Progress value={64} />\n<Progress value={38} tone="accent" />\n<Progress value={72} tone="warm" />`,
              html: `<div class="k-progress">\n  <div class="k-progress-fill" style="width: 64%"></div>\n</div>`,
            }}
          >
            <div className="k-stack" style={{ width: '100%', maxWidth: 480 }}>
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
          </Example>
        ),
      },
    ],
  });
}

// ── Spinner ────────────────────────────────────────────────────────────────
function SpinnerScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Feedback',
    title: 'Spinner',
    kanji: '回',
    tag: 'A 16px ring spinning at 1s linear. The only animation in the system that is allowed to be perpetual.',
    sections: [
      {
        eyebrow: '01 · Variants',
        title: 'Size & color',
        desc: '',
        body: (
          <Example
            code={{
              html: `<div class="k-spinner"></div>\n<div class="k-spinner k-spinner--accent k-spinner--lg"></div>`,
            }}
          >
            <div className="k-row" style={{ gap: 'var(--kanso-space-5)', alignItems: 'center' }}>
              <div className="k-stack-sm" style={{ alignItems: 'center' }}>
                <span className="k-spinner" />
                <span className="k-mono k-ink-3">16</span>
              </div>
              <div className="k-stack-sm" style={{ alignItems: 'center' }}>
                <span className="k-spinner k-spinner--lg" />
                <span className="k-mono k-ink-3">24</span>
              </div>
              <div className="k-stack-sm" style={{ alignItems: 'center' }}>
                <span className="k-spinner k-spinner--accent" />
                <span className="k-mono k-ink-3">accent</span>
              </div>
              <div className="k-stack-sm" style={{ alignItems: 'flex-start' }}>
                <button className="k-btn k-btn--primary" style={{ opacity: 0.75 }}>
                  <span className="k-spinner" style={{ borderTopColor: 'var(--kanso-paper)', borderColor: 'rgba(255,255,255,0.3) rgba(255,255,255,0.3) rgba(255,255,255,0.3) var(--kanso-paper)' }} />
                  Saving
                </button>
                <span className="k-mono k-ink-3">in button</span>
              </div>
            </div>
          </Example>
        ),
      },
    ],
  });
}

// ── Skeleton ───────────────────────────────────────────────────────────────
function SkeletonScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Feedback',
    title: 'Skeleton',
    kanji: '骨',
    tag: 'A paper-3 placeholder block. Wabi-sabi forbids shimmer — a skeleton in KansoUI is a quiet shape that simply waits. If the wait is short, omit it entirely.',
    sections: [
      {
        eyebrow: '01 · Primitives',
        title: 'Line · title · circle · block',
        desc: '',
        body: (
          <Example
            code={{
              html: `<div class="k-skel k-skel--title" style="width: 200px"></div>\n<div class="k-skel k-skel--line" style="width: 320px"></div>\n<div class="k-skel k-skel--circle" style="width: 36px; height: 36px"></div>`,
            }}
          >
            <div className="k-stack" style={{ width: '100%', maxWidth: 360 }}>
              <div className="k-row">
                <div className="k-skel k-skel--circle" style={{ width: 36, height: 36 }} />
                <div className="k-stack-sm" style={{ flex: 1 }}>
                  <div className="k-skel k-skel--title" style={{ width: '60%' }} />
                  <div className="k-skel k-skel--line" style={{ width: '40%' }} />
                </div>
              </div>
              <div className="k-skel k-skel--block" />
              <div className="k-skel k-skel--line" />
              <div className="k-skel k-skel--line" style={{ width: '80%' }} />
              <div className="k-skel k-skel--line" style={{ width: '92%' }} />
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
            ['.k-skel',           '—',      'Base — paper-3 fill'],
            ['.k-skel--line',     'shape',  '12px line — for body text'],
            ['.k-skel--title',    'shape',  '18px line — for headings'],
            ['.k-skel--block',    'shape',  '80px block — for cards'],
            ['.k-skel--circle',   'shape',  'Circular — for avatars'],
          ]} />
        ),
      },
    ],
  });
}

Object.assign(window, { AlertScreen, ToastScreen, ProgressScreen, SpinnerScreen, SkeletonScreen });
