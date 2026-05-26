// KansoUI — Getting started screen

function StartScreen() {
  const [pm, setPm] = React.useState('npm');
  const [copied, setCopied] = React.useState('');

  const copy = (id, text) => {
    const show = () => {
      setCopied(id);
      setTimeout(() => setCopied(''), 1200);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(show).catch(show);
    } else {
      show();
    }
  };

  const installCmd = {
    npm:  'npm install @kansoui/css @kansoui/react',
    pnpm: 'pnpm add @kansoui/css @kansoui/react',
    yarn: 'yarn add @kansoui/css @kansoui/react',
  }[pm];

  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">寛素UI · 00</div>
          <h1 className="k-display">Getting started</h1>
          <p className="k-body k-screen-head-tag">
            Three small steps. Install the CSS, load three Google Fonts, render a button.
            The system is mostly classes — React components are a thin convenience layer.
          </p>
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">始</div>
      </header>

      {/* 01 — Install */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">01 · Install</div>
            <div className="k-h2">Install the package</div>
          </div>
          <p className="k-section-head-desc k-body">
            Two packages: <span className="k-tag">@kansoui/css</span> contains tokens and component classes,
            <span className="k-tag" style={{ marginLeft: 6 }}>@kansoui/react</span> wraps them as React components.
            You can use either alone.
          </p>
        </div>

        <div className="k-tabs">
          {['npm', 'pnpm', 'yarn'].map((t) => (
            <button key={t} className="k-tab" aria-selected={pm === t} onClick={() => setPm(t)}>
              {t}
            </button>
          ))}
        </div>

        <CodeBlock
          id="install"
          code={installCmd}
          copied={copied}
          onCopy={copy}
        />
      </section>

      {/* 02 — Setup */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">02 · Setup</div>
            <div className="k-h2">Import once, at the root</div>
          </div>
          <p className="k-section-head-desc k-body">
            The CSS file declares all design tokens as custom properties and registers the component classes.
            Import it once at the top of your app entry point.
          </p>
        </div>

        <CodeBlock
          id="import"
          lang="js"
          code={`// app entry — main.tsx, _app.tsx, etc.
import '@kansoui/css';`}
          copied={copied}
          onCopy={copy}
        />

        <p className="k-body k-ink-2" style={{ marginTop: 'var(--kanso-space-4)', marginBottom: 'var(--kanso-space-3)' }}>
          The system uses three Google Fonts. Add them in your <span className="k-tag">{'<head>'}</span> — they are
          not bundled to keep the package small.
        </p>

        <CodeBlock
          id="fonts"
          lang="html"
          code={`<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300&family=Syne:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap"
/>`}
          copied={copied}
          onCopy={copy}
        />
      </section>

      {/* 03 — First component */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">03 · Hello, kanso</div>
            <div className="k-h2">Your first component</div>
          </div>
          <p className="k-section-head-desc k-body">
            Use the React API for state-bearing components, or reach for the plain class names when you
            don't want a runtime dependency. Both render identical markup.
          </p>
        </div>

        {/* Live preview */}
        <div style={{
          padding: 'var(--kanso-space-6) var(--kanso-space-5)',
          border: '0.5px solid var(--kanso-paper-3)',
          borderRadius: 'var(--kanso-radius-md)',
          background: 'var(--kanso-paper-2)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--kanso-space-4)',
          alignItems: 'flex-start',
        }}>
          <div className="k-micro">Preview</div>
          <div className="k-row" style={{ gap: 'var(--kanso-space-3)' }}>
            <button className="k-btn k-btn--primary">Save changes</button>
            <button className="k-btn k-btn--secondary">Cancel</button>
            <span className="k-badge k-badge--success">Saved</span>
          </div>
        </div>

        <div className="k-grid-2" style={{ marginTop: 'var(--kanso-space-4)', alignItems: 'stretch' }}>
          <div className="k-stack-sm">
            <div className="k-micro">React</div>
            <CodeBlock
              id="react"
              lang="jsx"
              code={`import { Button, Badge } from '@kansoui/react';

export function Toolbar() {
  return (
    <>
      <Button variant="primary">Save changes</Button>
      <Button variant="secondary">Cancel</Button>
      <Badge tone="success">Saved</Badge>
    </>
  );
}`}
              copied={copied}
              onCopy={copy}
            />
          </div>
          <div className="k-stack-sm">
            <div className="k-micro">Plain HTML · CSS classes</div>
            <CodeBlock
              id="html"
              lang="html"
              code={`<button class="k-btn k-btn--primary">
  Save changes
</button>
<button class="k-btn k-btn--secondary">
  Cancel
</button>
<span class="k-badge k-badge--success">
  Saved
</span>`}
              copied={copied}
              onCopy={copy}
            />
          </div>
        </div>
      </section>

      {/* 04 — Tokens */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">04 · Tokens</div>
            <div className="k-h2">Use the tokens</div>
          </div>
          <p className="k-section-head-desc k-body">
            Every value in the system is exposed as a CSS custom property prefixed <span className="k-tag">--kanso-</span>.
            Use them directly in your own components — never hardcode hex values.
          </p>
        </div>

        <CodeBlock
          id="tokens"
          lang="css"
          code={`/* good — reaches into the system */
.note {
  padding: var(--kanso-space-4);
  border: 0.5px solid var(--kanso-paper-3);
  border-radius: var(--kanso-radius-md);
  color: var(--kanso-ink-2);
  font: 300 0.9rem/1.7 var(--kanso-sans);
}

/* bad — invents new values, drifts from the system */
.note {
  padding: 18px;
  border: 1px solid #ddd;
  border-radius: 8px;
}`}
          copied={copied}
          onCopy={copy}
        />

        <p className="k-body k-ink-2" style={{ marginTop: 'var(--kanso-space-4)' }}>
          A condensed table of the tokens you'll reach for most. See <a className="k-link" href="#color" onClick={(e) => { e.preventDefault(); window.location.hash = '#color'; window.dispatchEvent(new HashChangeEvent('hashchange')); }} style={{ color: 'var(--kanso-ink)', textDecoration: 'underline', textUnderlineOffset: 3, textDecorationThickness: '0.5px' }}>Color</a>, <a className="k-link" href="#type" onClick={(e) => { e.preventDefault(); window.location.hash = '#type'; window.dispatchEvent(new HashChangeEvent('hashchange')); }} style={{ color: 'var(--kanso-ink)', textDecoration: 'underline', textUnderlineOffset: 3, textDecorationThickness: '0.5px' }}>Typography</a> and <a className="k-link" href="#space" onClick={(e) => { e.preventDefault(); window.location.hash = '#space'; window.dispatchEvent(new HashChangeEvent('hashchange')); }} style={{ color: 'var(--kanso-ink)', textDecoration: 'underline', textUnderlineOffset: 3, textDecorationThickness: '0.5px' }}>Space</a> for the full set.
        </p>

        <div style={{ marginTop: 'var(--kanso-space-4)' }}>
          {[
            ['--kanso-ink',           '#1a1a18',  'Primary text · icons'],
            ['--kanso-ink-3',         '#8a8a82',  'Muted text · placeholders'],
            ['--kanso-paper',         '#fafaf7',  'Page background'],
            ['--kanso-paper-3',       '#e8e8e2',  'Hairline borders'],
            ['--kanso-accent',        '#2d5a3d',  'Primary CTA (matcha)'],
            ['--kanso-space-4',       '20px',     'Card padding'],
            ['--kanso-space-7',       '80px',     'Page margins'],
            ['--kanso-radius-md',     '4px',      'Cards · panels'],
          ].map(([tok, val, use]) => (
            <div key={tok} className="k-spec-row" style={{ gridTemplateColumns: '220px 120px 1fr' }}>
              <span className="k-mono">{tok}</span>
              <span className="k-mono k-ink-3">{val}</span>
              <span className="k-body k-ink-3">{use}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 05 — Anatomy */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">05 · Anatomy</div>
            <div className="k-h2">Anatomy of a screen</div>
          </div>
          <p className="k-section-head-desc k-body">
            A KansoUI screen is a vertical sequence: header, sections separated by 0.5px paper-3 hairlines,
            generous margins on the outside. Don't nest cards inside cards.
          </p>
        </div>

        <CodeBlock
          id="anatomy"
          lang="html"
          code={`<main class="k-main">
  <header class="k-screen-head">
    <div class="k-screen-head-text">
      <span class="k-screen-head-eyebrow">section · 01</span>
      <h1 class="k-display">A quiet title</h1>
      <p class="k-body">Optional one-line description.</p>
    </div>
  </header>

  <section class="k-section">
    <div class="k-section-head">
      <div class="k-section-head-label">
        <span class="k-micro">01 · group</span>
        <h2 class="k-h2">Section heading</h2>
      </div>
      <p class="k-section-head-desc k-body">
        One-paragraph framing.
      </p>
    </div>

    <!-- your content -->
  </section>
</main>`}
          copied={copied}
          onCopy={copy}
        />
      </section>

      {/* 06 — Dark mode */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">06 · Modes</div>
            <div className="k-h2">Dark mode</div>
          </div>
          <p className="k-section-head-desc k-body">
            Dark mode inverts the paper / ink scales while keeping matcha, kogane, and beni intact. Toggle by
            setting <span className="k-tag">data-mode="dark"</span> on the document root — there is no JS dependency.
          </p>
        </div>

        <CodeBlock
          id="dark"
          lang="js"
          code={`// match the user's system preference
document.documentElement.setAttribute(
  'data-mode',
  matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
);`}
          copied={copied}
          onCopy={copy}
        />
      </section>

      {/* 07 — Next */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">07 · Onward</div>
            <div className="k-h2">Next</div>
          </div>
          <p className="k-section-head-desc k-body"></p>
        </div>

        <div className="k-grid-3">
          {[
            { id: 'overview', jp: '寛', label: 'Read the philosophy', body: 'The three principles that drive every decision in this system.' },
            { id: 'color',    jp: '色', label: 'Learn the palette',   body: 'Warm neutrals, one ceremonial accent, two semantic colors.' },
            { id: 'patterns', jp: '様', label: 'See composition',     body: 'Watch the system at full strength in a settings panel.' },
          ].map((n) => (
            <a key={n.id}
               href={'#' + n.id}
               onClick={(e) => { e.preventDefault(); window.location.hash = '#' + n.id; window.dispatchEvent(new HashChangeEvent('hashchange')); }}
               style={{
                 display: 'flex',
                 flexDirection: 'column',
                 gap: 'var(--kanso-space-3)',
                 padding: 'var(--kanso-space-4) 0 var(--kanso-space-4) var(--kanso-space-3)',
                 borderLeft: '0.5px solid var(--kanso-paper-3)',
                 textDecoration: 'none',
                 color: 'inherit',
                 transition: 'border-color 150ms ease',
               }}
               onMouseEnter={(e) => e.currentTarget.style.borderLeftColor = 'var(--kanso-ink-3)'}
               onMouseLeave={(e) => e.currentTarget.style.borderLeftColor = 'var(--kanso-paper-3)'}>
              <span className="k-quote-jp" style={{ fontSize: '2rem' }}>{n.jp}</span>
              <span className="k-h3">{n.label}</span>
              <span className="k-body k-ink-3">{n.body}</span>
              <span className="k-mono k-ink-3" style={{ marginTop: 'auto' }}>→ #{n.id}</span>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}

// ── Code block — paper-2 surface, mono text, copy button ─────────────────
function CodeBlock({ id, code, lang = 'sh', copied, onCopy }) {
  const isCopied = copied === id;
  return (
    <div style={{
      position: 'relative',
      minWidth: 0,
      background: 'var(--kanso-paper-2)',
      border: '0.5px solid var(--kanso-paper-3)',
      borderRadius: 'var(--kanso-radius-md)',
      padding: 'var(--kanso-space-4)',
      paddingRight: 'calc(var(--kanso-space-4) + 60px)',
    }}>
      <div style={{ position: 'absolute', top: 8, right: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span className="k-micro" style={{ color: 'var(--kanso-ink-4)' }}>{lang}</span>
        <button
          onClick={() => onCopy(id, code)}
          className="k-btn k-btn--ghost"
          style={{ fontSize: 11, padding: '2px 8px', minHeight: 0, height: 'auto' }}
          aria-label="Copy code"
        >
          {isCopied ? 'copied' : 'copy'}
        </button>
      </div>
      <pre style={{
        margin: 0,
        fontFamily: 'var(--kanso-mono)',
        fontWeight: 300,
        fontSize: 12.5,
        lineHeight: 1.7,
        color: 'var(--kanso-ink-2)',
        whiteSpace: 'pre',
        overflowX: 'auto',
      }}>{code}</pre>
    </div>
  );
}

Object.assign(window, { StartScreen, CodeBlock });
