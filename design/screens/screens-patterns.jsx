// KansoUI — composed pattern screen

function PatternsScreen() {
  const [tab, setTab] = React.useState('profile');
  const [theme, setTheme] = React.useState('system');
  const [notify, setNotify] = React.useState(true);
  const [digest, setDigest] = React.useState(false);
  const [twofa, setTwofa] = React.useState(true);

  return (
    <article>
      <header className="k-screen-head">
        <div className="k-screen-head-text">
          <div className="k-screen-head-eyebrow">寛素UI · 10</div>
          <h1 className="k-display">In composition</h1>
          <p className="k-body k-screen-head-tag">
            A settings panel built only from the primitives in this system. No new tokens, no new variants,
            no new patterns invented. The system at full strength is what restraint actually looks like.
          </p>
        </div>
        <div className="k-screen-head-kanji" aria-hidden="true">様</div>
      </header>

      <section className="k-section" style={{ paddingTop: 0 }}>
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">Pattern · Settings</div>
            <div className="k-h2">Account &amp; preferences</div>
          </div>
          <p className="k-section-head-desc k-body">A vertical hierarchy — header, tabs, then sectioned content. No card containers; the layout itself is the structure.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--kanso-space-6)' }}>
          {/* Header row */}
          <div className="k-row" style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div className="k-row" style={{ alignItems: 'center' }}>
              <div className="k-avatar k-avatar--lg">AS</div>
              <div className="k-stack-sm" style={{ gap: 4 }}>
                <div className="k-h2">Akira Sato</div>
                <div className="k-mono k-ink-3">akira@kanso.design · joined April 2024</div>
              </div>
            </div>
            <div className="k-row">
              <button className="k-btn k-btn--secondary">Cancel</button>
              <button className="k-btn k-btn--primary">Save changes</button>
            </div>
          </div>

          {/* Tabs */}
          <div className="k-tabs">
            {['profile', 'workspace', 'notifications', 'billing', 'security'].map((t) => (
              <button key={t} className="k-tab" aria-selected={tab === t} onClick={() => setTab(t)}>
                {t[0].toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {/* Alert */}
          <div className="k-alert k-alert--warning">
            <div className="k-alert-title">Two changes are unsaved</div>
            <span>Your locale and digest preferences will revert if you navigate away.</span>
          </div>

          {/* Sectioned form */}
          <div>
            <SettingRow
              label="Display name"
              hint="Visible to your collaborators."
              control={<input className="k-input" defaultValue="Akira Sato" style={{ maxWidth: 320 }} />}
            />
            <SettingRow
              label="Workspace"
              hint="Your tenant identifier."
              control={
                <div className="k-row" style={{ gap: 8 }}>
                  <input className="k-input" defaultValue="kanso.design" style={{ maxWidth: 240 }} />
                  <span className="k-badge k-badge--success">Verified</span>
                </div>
              }
            />
            <SettingRow
              label="Theme"
              hint="Applied across all workspaces."
              control={
                <div className="k-row">
                  {['light', 'dark', 'system'].map((t) => (
                    <label key={t} className="k-row" style={{ gap: 8 }}>
                      <input type="radio" name="theme" className="k-radio" checked={theme === t} onChange={() => setTheme(t)} />
                      <span className="k-body">{t[0].toUpperCase() + t.slice(1)}</span>
                    </label>
                  ))}
                </div>
              }
            />
            <SettingRow
              label="Email notifications"
              hint="Sent to akira@kanso.design."
              control={<button className="k-toggle" role="switch" aria-checked={notify} onClick={() => setNotify(!notify)} />}
            />
            <SettingRow
              label="Weekly digest"
              hint="A Sunday-evening summary."
              control={<button className="k-toggle" role="switch" aria-checked={digest} onClick={() => setDigest(!digest)} />}
            />
            <SettingRow
              label="Two-factor auth"
              hint="Authenticator app, configured."
              control={
                <div className="k-row" style={{ gap: 12 }}>
                  <button className="k-toggle" role="switch" aria-checked={twofa} onClick={() => setTwofa(!twofa)} />
                  <span className="k-badge k-badge--success">Active</span>
                </div>
              }
            />
            <SettingRow
              label="Storage"
              hint="6.4 GB of 12 GB used."
              control={
                <div style={{ width: 220 }} className="k-stack-sm">
                  <div className="k-progress"><div className="k-progress-fill k-progress-fill--accent" style={{ width: '53%' }} /></div>
                  <span className="k-mono k-ink-3">5.6 GB remaining</span>
                </div>
              }
            />
          </div>

          <hr className="k-divider" />

          {/* Destructive zone */}
          <div className="k-row" style={{ justifyContent: 'space-between' }}>
            <div className="k-stack-sm" style={{ gap: 2 }}>
              <div className="k-h3" style={{ color: 'var(--kanso-red)' }}>Delete account</div>
              <span className="k-body k-ink-3">This cannot be undone. We will email a confirmation first.</span>
            </div>
            <button className="k-btn k-btn--destructive">Delete account</button>
          </div>
        </div>
      </section>

      {/* Quote — closing note */}
      <section className="k-section">
        <div className="k-section-head">
          <div className="k-section-head-label">
            <div className="k-micro">寛素 · closing</div>
          </div>
          <div></div>
        </div>
        <div className="k-row" style={{ gap: 'var(--kanso-space-5)', alignItems: 'baseline' }}>
          <div className="k-quote-jp">完</div>
          <blockquote className="k-quote" style={{ margin: 0 }}>
            Add nothing, take nothing away, simply remain as you are.
          </blockquote>
        </div>
        <p className="k-mono k-ink-3" style={{ marginTop: 'var(--kanso-space-3)' }}>
          // 何も足さない、何も引かない、ただ在るままに
        </p>
      </section>
    </article>
  );
}

function SettingRow({ label, hint, control }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '220px 1fr auto',
      gap: 'var(--kanso-space-4)',
      alignItems: 'center',
      padding: 'var(--kanso-space-4) 0',
      borderTop: '0.5px solid var(--kanso-paper-3)',
    }}>
      <div className="k-stack-sm" style={{ gap: 2 }}>
        <span className="k-body" style={{ color: 'var(--kanso-ink)' }}>{label}</span>
        <span className="k-body k-ink-3" style={{ fontSize: 12 }}>{hint}</span>
      </div>
      <div style={{ justifySelf: 'end' }}>{control}</div>
      <span></span>
    </div>
  );
}

Object.assign(window, { PatternsScreen });
