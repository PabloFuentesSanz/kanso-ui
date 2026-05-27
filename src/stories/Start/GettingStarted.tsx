import { CodeBlock, DocSection, DocsLayout, ScreenHeader } from '../_components';
import * as s from './GettingStarted.css';

const SETUP_CODE = `// app entry — main.tsx, _app.tsx, etc.
import 'kanso-ui/styles';
import { lightTheme } from 'kanso-ui';

document.documentElement.classList.add(lightTheme);`;

const TOKENS_VE_CODE = `// your-component.css.ts
import { style } from '@vanilla-extract/css';
import { vars, colorVars } from 'kanso-ui';

export const card = style({
  padding: vars.space[4],
  border: \`\${vars.borderWidth.hair} solid \${colorVars.color.paper3}\`,
  borderRadius: vars.radius.md,
  color: colorVars.color.ink2,
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.body,
});`;

const TOKENS_CSS_CODE = `/* your-component.css — no build step, no extra dependency */
.card {
  padding: var(--kanso-space-4);
  border: var(--kanso-border-width-hair) solid var(--kanso-paper-3);
  border-radius: var(--kanso-radius-md);
  color: var(--kanso-ink-2);
  font-family: var(--kanso-sans);
  font-size: var(--kanso-font-size-body);
}`;

// [vanilla-extract path, CSS variable, value, purpose]
const TOKEN_ROWS = [
  ['vars.space[1]', '--kanso-space-1', '4px', 'Internal gap inside micro components'],
  ['vars.space[4]', '--kanso-space-4', '20px', 'Card and panel padding'],
  ['vars.space[7]', '--kanso-space-7', '80px', 'Page margins'],
  ['vars.radius.md', '--kanso-radius-md', '4px', 'Cards · panels'],
  ['vars.borderWidth.hair', '--kanso-border-width-hair', '0.5px', 'Default border thickness'],
  ['colorVars.color.ink', '--kanso-ink', '#1a1a18', 'Primary text · icons'],
  ['colorVars.color.paper', '--kanso-paper', '#fafaf7', 'Page background'],
  ['colorVars.color.accent', '--kanso-accent', '#2d5a3d', 'Primary CTA (matcha)'],
] as const;

export const GettingStarted = () => (
  <DocsLayout>
    <ScreenHeader
      eyebrow="寛素UI · 00"
      title="Getting started"
      tagline="Install the package, apply the theme, then reach for tokens. KansoUI is mostly tokens — React components are a thin convenience layer on top."
      kanji="始"
    />

    <DocSection
      num="01 · Install"
      heading="Install the package"
      description={
        <>
          One package contains tokens, theme classes and all components. The library has zero
          runtime dependencies beyond <code className={s.inlineCode}>react</code> and{' '}
          <code className={s.inlineCode}>clsx</code>.
        </>
      }
    >
      <div className={s.codeStack}>
        <CodeBlock label="npm" language="bash">{`npm install kanso-ui`}</CodeBlock>
        <CodeBlock label="pnpm" language="bash">{`pnpm add kanso-ui`}</CodeBlock>
        <CodeBlock label="yarn" language="bash">{`yarn add kanso-ui`}</CodeBlock>
      </div>
    </DocSection>

    <DocSection
      num="02 · Setup"
      heading="Apply the theme, once"
      description="Import the side-effect entry that loads the reset and the three self-hosted font families, then put a theme class on the document root. There is no separate stylesheet to wire — the styles travel with the components."
    >
      <CodeBlock label="ts" language="tsx">{SETUP_CODE}</CodeBlock>
      <p className={s.para}>
        Fonts ship with the package as <code className={s.inlineCode}>@fontsource</code> imports.
        No <code className={s.inlineCode}>{'<link>'}</code> tags to Google Fonts and no network
        round-trip on first paint.
      </p>
    </DocSection>

    <DocSection
      num="03 · Tokens"
      heading="Reach for tokens, never hex"
      description="Every value in the system ships as a stable CSS variable named exactly as the spec defines it. Use the typed vanilla-extract paths from JS, or the raw CSS variable from any other stylesheet — both resolve to the same value at runtime."
    >
      <p className={s.subhead}>With vanilla-extract</p>
      <CodeBlock label="css.ts" language="tsx">{TOKENS_VE_CODE}</CodeBlock>
      <p className={s.subhead}>Or in plain CSS</p>
      <CodeBlock label="css" language="css">{TOKENS_CSS_CODE}</CodeBlock>
      <p className={s.para}>
        The tokens you'll reach for most. Browse the <strong>Foundations</strong> section for the
        full set — Color, Typography and Layout each list every token with its CSS variable name
        and its vanilla-extract path side by side.
      </p>
      <div>
        <div className={s.tokenHeader}>
          <span>vanilla-extract</span>
          <span>CSS variable</span>
          <span>value</span>
          <span>purpose</span>
        </div>
        {TOKEN_ROWS.map(([js, css, val, use]) => (
          <div key={js} className={s.tokenRow}>
            <span className={s.tokenName}>{js}</span>
            <span className={s.tokenValue}>{css}</span>
            <span className={s.tokenValue}>{val}</span>
            <span className={s.tokenUse}>{use}</span>
          </div>
        ))}
      </div>
    </DocSection>

  </DocsLayout>
);
