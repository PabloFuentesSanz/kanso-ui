// KansoUI — <Example> + helpers for code-aware component docs

// ── Example block ──────────────────────────────────────────────────────────
// Renders a preview surface with tabs to flip to React / HTML source.
// Usage:
//   <Example title="Primary" description="..." code={{ react: '...', html: '...' }}>
//     <button className="k-btn k-btn--primary">Save</button>
//   </Example>
function Example({ title, description, code, children, height }) {
  const [view, setView] = React.useState('preview');
  const tabs = ['preview', code?.react && 'react', code?.html && 'html'].filter(Boolean);

  return (
    <div style={{
      border: '0.5px solid var(--kanso-paper-3)',
      borderRadius: 'var(--kanso-radius-md)',
      overflow: 'hidden',
      minWidth: 0,
    }}>
      {/* Head */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 'var(--kanso-space-3)',
        padding: 'var(--kanso-space-3) var(--kanso-space-4)',
        borderBottom: '0.5px solid var(--kanso-paper-3)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
          {title && <span className="k-h3" style={{ lineHeight: 1.2 }}>{title}</span>}
          {description && <span className="k-body k-ink-3" style={{ fontSize: 12 }}>{description}</span>}
        </div>
        <div style={{ display: 'flex', gap: 0, flexShrink: 0 }} role="tablist">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={view === t}
              onClick={() => setView(t)}
              style={{
                appearance: 'none',
                background: 'transparent',
                border: 'none',
                padding: '4px 10px',
                fontFamily: 'var(--kanso-mono)',
                fontWeight: 300,
                fontSize: 11,
                letterSpacing: '0.05em',
                color: view === t ? 'var(--kanso-ink)' : 'var(--kanso-ink-3)',
                cursor: 'pointer',
                borderBottom: view === t ? '1px solid var(--kanso-ink)' : '1px solid transparent',
                marginBottom: '-1px',
                transition: 'color 150ms ease, border-color 150ms ease',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      {view === 'preview' ? (
        <div style={{
          background: 'var(--kanso-paper-2)',
          padding: 'var(--kanso-space-5) var(--kanso-space-4)',
          minHeight: height || 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 'var(--kanso-space-3)',
        }}>
          {children}
        </div>
      ) : (
        <ExampleCode code={code[view]} lang={view === 'react' ? 'jsx' : 'html'} />
      )}
    </div>
  );
}

// Code panel inside an Example
function ExampleCode({ code, lang }) {
  const [copied, setCopied] = React.useState(false);
  const onCopy = () => {
    const show = () => { setCopied(true); setTimeout(() => setCopied(false), 1200); };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(code).then(show).catch(show);
    } else { show(); }
  };
  return (
    <div style={{ position: 'relative', minWidth: 0, background: 'var(--kanso-paper)' }}>
      <button
        onClick={onCopy}
        className="k-btn k-btn--ghost"
        style={{
          position: 'absolute',
          top: 8,
          right: 10,
          fontSize: 11,
          padding: '2px 8px',
          minHeight: 0,
          height: 'auto',
          zIndex: 1,
        }}
        aria-label="Copy code"
      >
        {copied ? 'copied' : 'copy'}
      </button>
      <pre style={{
        margin: 0,
        padding: 'var(--kanso-space-4)',
        paddingRight: 'calc(var(--kanso-space-4) + 60px)',
        fontFamily: 'var(--kanso-mono)',
        fontWeight: 300,
        fontSize: 12,
        lineHeight: 1.7,
        color: 'var(--kanso-ink-2)',
        whiteSpace: 'pre',
        overflowX: 'auto',
        minWidth: 0,
      }}>{highlight(code, lang)}</pre>
    </div>
  );
}

// Very small, KansoUI-honest tokenizer. We only dim comments and quoted
// strings — actual syntax coloring would betray the system's restraint.
function highlight(code, lang) {
  const out = [];
  const lines = code.split('\n');
  lines.forEach((line, i) => {
    // Dim full-line comments (//, #, /* */)
    const trimmed = line.trim();
    let className = '';
    if (lang === 'jsx' || lang === 'js' || lang === 'css') {
      if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
        className = 'k-ink-4';
      }
    }
    if (lang === 'html' && trimmed.startsWith('<!--')) className = 'k-ink-4';
    if (lang === 'sh' && trimmed.startsWith('#')) className = 'k-ink-4';

    out.push(
      <span key={i} className={className} style={className === 'k-ink-4' ? { color: 'var(--kanso-ink-4)' } : undefined}>
        {line}
      </span>
    );
    if (i < lines.length - 1) out.push('\n');
  });
  return out;
}

// ── Modifier table — for "anatomy / props" sections ───────────────────────
function ModifierTable({ rows }) {
  return (
    <div>
      <div className="k-spec-row" style={{ gridTemplateColumns: '220px 140px 1fr', borderTop: 'none' }}>
        <span className="k-micro">Class</span>
        <span className="k-micro">Default</span>
        <span className="k-micro">Purpose</span>
      </div>
      {rows.map(([cls, def, desc]) => (
        <div key={cls} className="k-spec-row" style={{ gridTemplateColumns: '220px 140px 1fr' }}>
          <span className="k-mono">{cls}</span>
          <span className="k-mono k-ink-3">{def}</span>
          <span className="k-body k-ink-2" style={{ fontSize: 13 }}>{desc}</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Example, ExampleCode, ModifierTable });
