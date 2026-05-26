// KansoUI — Overlay category

// ── Dialog ─────────────────────────────────────────────────────────────────
function DialogScreen() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return makeScreen({
    eyebrow: '寛素UI · Overlay',
    title: 'Dialog',
    kanji: '聞',
    tag: 'A modal panel for decisions that require attention. The backdrop is ink at 32% alpha with a 1px blur — the page recedes without disappearing.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Confirmation',
        desc: 'Standard layout: title, body, secondary + primary in the footer. Esc closes; the backdrop click closes — both wired in the React API.',
        body: (
          <Example height={300}
            code={{
              react: `const [open, setOpen] = useState(false);\n\n<Dialog open={open} onClose={() => setOpen(false)}>\n  <Dialog.Title>Delete workspace?</Dialog.Title>\n  <Dialog.Body>...</Dialog.Body>\n  <Dialog.Footer>\n    <Button variant="secondary" onClick={...}>Cancel</Button>\n    <Button variant="primary" onClick={...}>Delete</Button>\n  </Dialog.Footer>\n</Dialog>`,
              html: `<div class="k-overlay">\n  <div class="k-dialog" role="dialog" aria-modal="true">\n    ...\n  </div>\n</div>`,
            }}
          >
            <button className="k-btn k-btn--primary" onClick={() => setOpen(true)}>Open dialog</button>
            {open && (
              <div className="k-overlay" onClick={() => setOpen(false)}>
                <div className="k-dialog" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                  <div className="k-dialog-head">
                    <div className="k-h2">Delete this workspace?</div>
                    <div className="k-body k-ink-3">This action cannot be undone. 12 collaborators will lose access.</div>
                  </div>
                  <div className="k-body k-ink-2">
                    Type <span className="k-tag">kanso.design</span> to confirm.
                  </div>
                  <input className="k-input" placeholder="kanso.design" />
                  <div className="k-dialog-footer">
                    <button className="k-btn k-btn--secondary" onClick={() => setOpen(false)}>Cancel</button>
                    <button className="k-btn k-btn--primary" onClick={() => setOpen(false)} style={{ background: 'var(--kanso-red)' }}>Delete workspace</button>
                  </div>
                </div>
              </div>
            )}
          </Example>
        ),
      },
      {
        eyebrow: '02 · API',
        title: 'Modifiers',
        desc: '',
        body: (
          <ModifierTable rows={[
            ['.k-overlay',         '—',    'Fixed full-screen backdrop with blur'],
            ['.k-dialog',          '—',    'Centered panel, max width 480'],
            ['.k-dialog-head',     'child', 'Title + description stack'],
            ['.k-dialog-footer',   'child', 'Right-aligned action row'],
          ]} />
        ),
      },
    ],
  });
}

// ── Drawer ─────────────────────────────────────────────────────────────────
function DrawerScreen() {
  const [open, setOpen] = React.useState(false);
  return makeScreen({
    eyebrow: '寛素UI · Overlay',
    title: 'Drawer',
    kanji: '扉',
    tag: 'A panel that slides in from the right. Used for inspectors, secondary detail, and editing flows that benefit from staying within context. Same backdrop as a dialog.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Right-edge panel',
        desc: '',
        body: (
          <Example height={320}
            code={{
              react: `<Drawer open={open} onClose={() => setOpen(false)} side="right">\n  <Drawer.Title>Edit member</Drawer.Title>\n  ...\n</Drawer>`,
              html: `<div class="k-overlay" style="align-items: stretch; justify-content: flex-end">\n  <div class="k-drawer">...</div>\n</div>`,
            }}
          >
            <button className="k-btn k-btn--primary" onClick={() => setOpen(true)}>Open drawer</button>
            {open && (
              <div className="k-overlay" style={{ alignItems: 'stretch', justifyContent: 'flex-end' }} onClick={() => setOpen(false)}>
                <div className="k-drawer" onClick={(e) => e.stopPropagation()}>
                  <div className="k-row" style={{ justifyContent: 'space-between' }}>
                    <div className="k-stack-sm" style={{ gap: 2 }}>
                      <div className="k-h2">Edit member</div>
                      <div className="k-mono k-ink-3">akira@kanso.design</div>
                    </div>
                    <button className="k-icon-btn" onClick={() => setOpen(false)} aria-label="Close">×</button>
                  </div>

                  <hr className="k-divider" />

                  <div className="k-field">
                    <label className="k-field-label">Display name</label>
                    <input className="k-input" defaultValue="Akira Sato" />
                  </div>
                  <div className="k-field">
                    <label className="k-field-label">Role</label>
                    <select className="k-select" defaultValue="owner">
                      <option value="owner">Owner</option>
                      <option value="member">Member</option>
                      <option value="guest">Guest</option>
                    </select>
                  </div>

                  <div className="k-row" style={{ justifyContent: 'flex-end', marginTop: 'auto' }}>
                    <button className="k-btn k-btn--secondary" onClick={() => setOpen(false)}>Cancel</button>
                    <button className="k-btn k-btn--primary" onClick={() => setOpen(false)}>Save</button>
                  </div>
                </div>
              </div>
            )}
          </Example>
        ),
      },
    ],
  });
}

// ── Popover ────────────────────────────────────────────────────────────────
function PopoverScreen() {
  const [open, setOpen] = React.useState(false);
  return makeScreen({
    eyebrow: '寛素UI · Overlay',
    title: 'Popover',
    kanji: '泡',
    tag: 'A lightweight floating panel anchored to its trigger. Use it for filters, quick actions, or short forms. Larger than a tooltip; smaller than a dialog.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Floating panel',
        desc: '',
        body: (
          <Example height={260}
            code={{
              html: `<div class="k-popover">\n  <div class="k-micro">Filter</div>\n  <label>...</label>\n</div>`,
            }}
          >
            <div style={{ position: 'relative' }}>
              <button className="k-btn k-btn--secondary" onClick={() => setOpen(!open)}>Filter</button>
              {open && (
                <div className="k-popover" style={{ position: 'absolute', top: '100%', left: 0, marginTop: 6, minWidth: 240, zIndex: 5 }}>
                  <div className="k-micro">Filter by</div>
                  <label className="k-row" style={{ gap: 10 }}>
                    <input type="checkbox" className="k-check" defaultChecked />
                    <span className="k-body">Active</span>
                  </label>
                  <label className="k-row" style={{ gap: 10 }}>
                    <input type="checkbox" className="k-check" />
                    <span className="k-body">Pending</span>
                  </label>
                  <label className="k-row" style={{ gap: 10 }}>
                    <input type="checkbox" className="k-check" />
                    <span className="k-body">Archived</span>
                  </label>
                  <hr className="k-divider" />
                  <div className="k-row" style={{ justifyContent: 'space-between' }}>
                    <button className="k-btn k-btn--ghost">Reset</button>
                    <button className="k-btn k-btn--primary" onClick={() => setOpen(false)}>Apply</button>
                  </div>
                </div>
              )}
            </div>
          </Example>
        ),
      },
    ],
  });
}

Object.assign(window, { DialogScreen, DrawerScreen, PopoverScreen });
