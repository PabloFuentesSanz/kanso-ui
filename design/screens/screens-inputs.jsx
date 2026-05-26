// KansoUI — Inputs category

function TextInputScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Inputs',
    title: 'Text input',
    kanji: '文',
    tag: 'A 36px single-line field with a 0.5px hairline border. Focus shifts the border one tone darker — that single change is the only signal.',
    sections: [
      {
        eyebrow: '01 · States',
        title: 'Default · focused · invalid · disabled',
        desc: 'No glow, no shadow, no animation longer than 150ms. Error tone uses beni without raising its voice.',
        body: (
          <Example
            title="Four states"
            code={{
              react: `<TextInput label="Full name" placeholder="Akira Sato" />\n<TextInput label="Workspace" defaultValue="not a url" error="Must be a valid URL." />\n<TextInput label="Locale" defaultValue="ja-JP" disabled />`,
              html: `<label class="k-field-label">Full name</label>\n<input class="k-input" placeholder="Akira Sato" />`,
            }}
          >
            <div className="k-grid-2" style={{ width: '100%', maxWidth: 560 }}>
              <div className="k-field">
                <label className="k-field-label">Full name</label>
                <input className="k-input" placeholder="Akira Sato" />
              </div>
              <div className="k-field">
                <label className="k-field-label">Email</label>
                <input className="k-input" defaultValue="hello@kanso.design" />
              </div>
              <div className="k-field">
                <label className="k-field-label">Workspace URL</label>
                <input className="k-input k-input--invalid" defaultValue="not a url" />
                <span className="k-field-error">Must be a valid URL.</span>
              </div>
              <div className="k-field">
                <label className="k-field-label">Locale</label>
                <input className="k-input" defaultValue="ja-JP" disabled style={{ opacity: 0.5, background: 'var(--kanso-paper-2)' }} />
                <span className="k-field-hint">Synced from organisation.</span>
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
            ['.k-input',           '—',         '36px height, 0.5px ink-4 border'],
            ['.k-input--invalid',  'state',     'Border-color → --kanso-red'],
            ['[disabled]',         'attribute', 'Opacity 0.5, paper-2 background'],
            ['.k-field',           'wrapper',   'Flex column with 4px gap — pairs label + input'],
            ['.k-field-label',     'sibling',   '11px Syne, ink-3 — sits above the input'],
            ['.k-field-error',     'sibling',   '11px beni — sits below on invalid'],
            ['.k-field-hint',      'sibling',   '11px ink-3 — sits below for help text'],
          ]} />
        ),
      },
    ],
  });
}

function TextareaScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Inputs',
    title: 'Textarea',
    kanji: '記',
    tag: 'A multi-line field for paragraphs. Inherits the input border, but its body line-height is 1.6 — close to body text — so the field reads as a draft surface, not a form control.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Default & with content',
        desc: 'Minimum height 96px. Vertical resize permitted.',
        body: (
          <Example
            code={{
              react: `<Textarea label="Bio" placeholder="A few words about you." />`,
              html:  `<label class="k-field-label">Bio</label>\n<textarea class="k-textarea" placeholder="A few words about you."></textarea>`,
            }}
          >
            <div className="k-grid-2" style={{ width: '100%', maxWidth: 600 }}>
              <div className="k-field">
                <label className="k-field-label">Bio</label>
                <textarea className="k-textarea" placeholder="A few words about you." />
              </div>
              <div className="k-field">
                <label className="k-field-label">Notes</label>
                <textarea className="k-textarea" defaultValue={"A daily reflection at the end of work. One paragraph, no prompts."} />
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
            ['.k-textarea',  '—',  'Inherits input styles; 96px min-height; line-height 1.6'],
          ]} />
        ),
      },
    ],
  });
}

function NumberInputScreen() {
  const [n, setN] = React.useState(12);
  return makeScreen({
    eyebrow: '寛素UI · Inputs',
    title: 'Number input',
    kanji: '数',
    tag: 'A numeric field with explicit decrement and increment controls. The value renders in DM Mono so digits align — pure numbers want a mono voice.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Stepped control',
        desc: 'Native spinners are hidden; the visual stepper is the only interface. Long-press support comes via the React component.',
        body: (
          <Example
            code={{
              react: `const [n, setN] = useState(12);\n\n<NumberInput value={n} onChange={setN} min={0} step={1} />`,
              html: `<div class="k-num">\n  <button aria-label="Decrement">−</button>\n  <input type="number" value="12" />\n  <button aria-label="Increment">+</button>\n</div>`,
            }}
          >
            <div className="k-field" style={{ alignItems: 'flex-start' }}>
              <label className="k-field-label">Seats</label>
              <div className="k-num">
                <button onClick={() => setN(Math.max(0, n - 1))} aria-label="Decrement">−</button>
                <input type="number" value={n} onChange={(e) => setN(+e.target.value || 0)} />
                <button onClick={() => setN(n + 1)} aria-label="Increment">+</button>
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
            ['.k-num',          '—',  'Container — 36px height, ink-4 border'],
            ['.k-num button',   'child', 'Decrement / increment — 28px squares with hairline separators'],
            ['.k-num input',    'child', 'Mono value, centered, 72px wide'],
          ]} />
        ),
      },
    ],
  });
}

function SelectScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Inputs',
    title: 'Select',
    kanji: '選',
    tag: 'A native select styled to match the rest of the input family. We chose to keep the native control rather than re-implement — accessibility, mobile, and screen readers come for free.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Single select',
        desc: 'The chevron is drawn with two linear gradients — no SVG, no asset. Hairlines for the only visible structure.',
        body: (
          <Example
            code={{
              react: `<Select label="Timezone" defaultValue="jst">\n  <option value="jst">Japan · JST</option>\n  <option value="utc">UTC</option>\n</Select>`,
              html: `<label class="k-field-label">Timezone</label>\n<select class="k-select">\n  <option>Japan · JST</option>\n  <option>UTC</option>\n</select>`,
            }}
          >
            <div className="k-grid-2" style={{ width: '100%', maxWidth: 560 }}>
              <div className="k-field">
                <label className="k-field-label">Timezone</label>
                <select className="k-select" defaultValue="jst">
                  <option value="jst">Japan · JST (UTC+9)</option>
                  <option value="utc">UTC</option>
                  <option value="cet">Central European Time</option>
                  <option value="pst">Pacific Standard</option>
                </select>
              </div>
              <div className="k-field">
                <label className="k-field-label">Plan</label>
                <select className="k-select">
                  <option>Personal</option>
                  <option>Team</option>
                  <option>Enterprise</option>
                </select>
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
            ['.k-select',  '—',  'Native select with custom chevron, inherits input metrics'],
          ]} />
        ),
      },
    ],
  });
}

function CheckboxScreen() {
  const [a, setA] = React.useState(true);
  const [b, setB] = React.useState(false);
  return makeScreen({
    eyebrow: '寛素UI · Inputs',
    title: 'Checkbox',
    kanji: '✓',
    tag: 'A 14px square. Ink on paper when checked, drawn with a CSS-only chevron — no icon font, no SVG.',
    sections: [
      {
        eyebrow: '01 · States',
        title: 'Checked & unchecked',
        desc: '',
        body: (
          <Example
            code={{
              react: `<Checkbox checked>I accept the terms.</Checkbox>\n<Checkbox>Marketing emails</Checkbox>`,
              html:  `<label class="k-row" style="gap: 10px">\n  <input type="checkbox" class="k-check" checked />\n  <span>I accept the terms.</span>\n</label>`,
            }}
          >
            <div className="k-stack" style={{ alignItems: 'flex-start' }}>
              <label className="k-row" style={{ gap: 10 }}>
                <input type="checkbox" className="k-check" checked={a} onChange={() => setA(!a)} />
                <span className="k-body">I accept the terms.</span>
              </label>
              <label className="k-row" style={{ gap: 10 }}>
                <input type="checkbox" className="k-check" checked={b} onChange={() => setB(!b)} />
                <span className="k-body">Send me product updates.</span>
              </label>
              <label className="k-row" style={{ gap: 10 }}>
                <input type="checkbox" className="k-check" disabled />
                <span className="k-body k-ink-3">Marketing emails (optional).</span>
              </label>
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
            ['.k-check',  '—',  '14px square, ink-3 border, CSS-drawn chevron on check'],
          ]} />
        ),
      },
    ],
  });
}

function RadioScreen() {
  const [plan, setPlan] = React.useState('annual');
  return makeScreen({
    eyebrow: '寛素UI · Inputs',
    title: 'Radio',
    kanji: '◉',
    tag: 'A 14px circle with a 6px ink dot inside when selected. Mutually exclusive groups only.',
    sections: [
      {
        eyebrow: '01 · Group',
        title: 'Selection group',
        desc: '',
        body: (
          <Example
            code={{
              react: `const [plan, setPlan] = useState('annual');\n\n<RadioGroup value={plan} onChange={setPlan}>\n  <Radio value="monthly">Monthly · ¥1,200</Radio>\n  <Radio value="annual">Annual · ¥12,000</Radio>\n</RadioGroup>`,
              html:  `<label class="k-row" style="gap: 10px">\n  <input type="radio" name="plan" class="k-radio" />\n  <span>Monthly</span>\n</label>`,
            }}
          >
            <div className="k-stack" style={{ alignItems: 'flex-start' }}>
              {[
                { v: 'monthly',  l: 'Monthly · ¥1,200' },
                { v: 'annual',   l: 'Annual · ¥12,000' },
                { v: 'lifetime', l: 'Lifetime · ¥48,000' },
              ].map((o) => (
                <label key={o.v} className="k-row" style={{ gap: 10 }}>
                  <input type="radio" name="plan" className="k-radio" checked={plan === o.v} onChange={() => setPlan(o.v)} />
                  <span className="k-body">{o.l}</span>
                </label>
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
            ['.k-radio',  '—',  '14px circle, 6px ink center on check'],
          ]} />
        ),
      },
    ],
  });
}

function SwitchScreen() {
  const [a, setA] = React.useState(true);
  const [b, setB] = React.useState(false);
  return makeScreen({
    eyebrow: '寛素UI · Inputs',
    title: 'Switch',
    kanji: '切',
    tag: 'A 36×20 toggle. The only place the accent color appears in the input family — and only when on.',
    sections: [
      {
        eyebrow: '01 · States',
        title: 'On & off',
        desc: 'A 200ms ease transition. The thumb travels with the background — no overshoot, no spring.',
        body: (
          <Example
            code={{
              react: `const [on, setOn] = useState(true);\n\n<Switch checked={on} onChange={setOn} label="Email notifications" />`,
              html: `<button class="k-toggle" role="switch" aria-checked="true"></button>`,
            }}
          >
            <div className="k-stack" style={{ width: '100%', maxWidth: 360 }}>
              {[
                { l: 'Email notifications', v: a, set: setA },
                { l: 'Weekly digest',       v: b, set: setB },
                { l: 'Two-factor auth',     v: true,  set: () => {} },
              ].map((r) => (
                <div key={r.l} className="k-row" style={{ justifyContent: 'space-between' }}>
                  <span className="k-body">{r.l}</span>
                  <button className="k-toggle" role="switch" aria-checked={r.v} onClick={() => r.set(!r.v)} />
                </div>
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
            ['.k-toggle',                          '—',     'Base — paper-3 background when off'],
            ['[aria-checked="true"]',              'state', 'Background → --kanso-active'],
          ]} />
        ),
      },
    ],
  });
}

function SliderScreen() {
  const [val, setVal] = React.useState(48);
  return makeScreen({
    eyebrow: '寛素UI · Inputs',
    title: 'Slider',
    kanji: '幅',
    tag: 'A 2px track — same height as a progress bar — with a 14px ink thumb. The track does not fill on drag; we read the value, not the progress.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'Single value',
        desc: '',
        body: (
          <Example
            code={{
              react: `const [val, setVal] = useState(48);\n\n<Slider min={0} max={100} value={val} onChange={setVal} />`,
              html: `<input type="range" min="0" max="100" value="48" class="k-slider" />`,
            }}
          >
            <div className="k-field" style={{ width: '100%', maxWidth: 360 }}>
              <div className="k-row" style={{ justifyContent: 'space-between' }}>
                <label className="k-field-label">Volume</label>
                <span className="k-mono k-ink-3">{val}</span>
              </div>
              <input type="range" min="0" max="100" value={val} onChange={(e) => setVal(+e.target.value)} className="k-slider" />
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
            ['.k-slider',          '—',       '2px track, 14px ink thumb'],
            ['.k-slider--accent',  'variant', 'Thumb uses --kanso-active'],
          ]} />
        ),
      },
    ],
  });
}

function SearchScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Inputs',
    title: 'Search field',
    kanji: '探',
    tag: 'A text input with a leading search icon and, optionally, a keyboard shortcut hint on the right.',
    sections: [
      {
        eyebrow: '01 · Default',
        title: 'With shortcut hint',
        desc: 'The hint is a kbd — a flat tag of paper-2 with a 0.5px bottom border. Click to focus the field; the React component wires this for you.',
        body: (
          <Example
            code={{
              react: `<SearchField placeholder="Find anything…" shortcut="⌘ K" />`,
              html: `<div style="position: relative">\n  <svg>...</svg>\n  <input class="k-input" placeholder="Find anything…" style="padding-left: 32px" />\n  <kbd class="k-kbd">⌘ K</kbd>\n</div>`,
            }}
          >
            <div style={{ position: 'relative', width: 360 }}>
              <span style={{ position: 'absolute', left: 10, top: 10, color: 'var(--kanso-ink-3)' }}><KIcon name="search"/></span>
              <input className="k-input" placeholder="Find anything…" style={{ paddingLeft: 32, paddingRight: 56 }} />
              <kbd className="k-kbd" style={{ position: 'absolute', right: 8, top: 7 }}>⌘ K</kbd>
            </div>
          </Example>
        ),
      },
    ],
  });
}

function FieldScreen() {
  return makeScreen({
    eyebrow: '寛素UI · Inputs',
    title: 'Field',
    kanji: '欄',
    tag: 'A wrapper that pairs any input with a label, optional hint, and optional error message. Don\'t roll your own — Field handles vertical rhythm.',
    sections: [
      {
        eyebrow: '01 · Anatomy',
        title: 'Label · control · hint',
        desc: 'Vertical stack with 4px gap. Label is 11px Syne ink-3, sits above. Hint or error sits below at 11px.',
        body: (
          <Example
            code={{
              react: `<Field label="Email" hint="We never share this address.">\n  <TextInput defaultValue="hello@kanso.design" />\n</Field>`,
              html: `<div class="k-field">\n  <label class="k-field-label">Email</label>\n  <input class="k-input" />\n  <span class="k-field-hint">We never share this address.</span>\n</div>`,
            }}
          >
            <div className="k-grid-2" style={{ width: '100%', maxWidth: 560 }}>
              <div className="k-field">
                <label className="k-field-label">Email</label>
                <input className="k-input" defaultValue="hello@kanso.design" />
                <span className="k-field-hint">We never share this address.</span>
              </div>
              <div className="k-field">
                <label className="k-field-label">Workspace URL</label>
                <input className="k-input k-input--invalid" defaultValue="not a url" />
                <span className="k-field-error">Must be a valid URL.</span>
              </div>
            </div>
          </Example>
        ),
      },
    ],
  });
}

Object.assign(window, { TextInputScreen, TextareaScreen, NumberInputScreen, SelectScreen, CheckboxScreen, RadioScreen, SwitchScreen, SliderScreen, SearchScreen, FieldScreen });
