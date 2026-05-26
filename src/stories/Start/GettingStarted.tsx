import { CodeBlock, DocSection, DocsLayout, ScreenHeader } from '../_components';
import * as s from './GettingStarted.css';

const SETUP_CODE = `// app entry — main.tsx, _app.tsx, etc.
import 'kanso-ui/styles';
import { lightTheme } from 'kanso-ui';

document.documentElement.classList.add(lightTheme);`;

const TOKENS_CODE = `// your-component.css.ts
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

const DARK_CODE = `import { lightTheme, darkTheme } from 'kanso-ui';

const apply = (mode: 'light' | 'dark') => {
  document.documentElement.classList.remove(lightTheme, darkTheme);
  document.documentElement.classList.add(mode === 'dark' ? darkTheme : lightTheme);
};

// Honour the system preference once on boot
apply(matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');`;

const TOKEN_ROWS = [
  ['vars.space[1]', '4px', 'Internal gap inside micro components'],
  ['vars.space[4]', '20px', 'Card and panel padding'],
  ['vars.space[7]', '80px', 'Page margins'],
  ['vars.radius.md', '4px', 'Cards · panels'],
  ['vars.borderWidth.hair', '0.5px', 'Default border thickness'],
  ['colorVars.color.ink', '#1a1a18', 'Primary text · icons'],
  ['colorVars.color.paper', '#fafaf7', 'Page background'],
  ['colorVars.color.accent', '#2d5a3d', 'Primary CTA (matcha)'],
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
        <CodeBlock lang="npm">{`npm install kanso-ui`}</CodeBlock>
        <CodeBlock lang="pnpm">{`pnpm add kanso-ui`}</CodeBlock>
        <CodeBlock lang="yarn">{`yarn add kanso-ui`}</CodeBlock>
      </div>
    </DocSection>

    <DocSection
      num="02 · Setup"
      heading="Apply the theme, once"
      description="Import the side-effect entry that loads the reset and the three self-hosted font families, then put a theme class on the document root. There is no separate stylesheet to wire — the styles travel with the components."
    >
      <CodeBlock lang="ts">{SETUP_CODE}</CodeBlock>
      <p className={s.para}>
        Fonts ship with the package as <code className={s.inlineCode}>@fontsource</code> imports.
        No <code className={s.inlineCode}>{'<link>'}</code> tags to Google Fonts and no network
        round-trip on first paint.
      </p>
    </DocSection>

    <DocSection
      num="03 · Tokens"
      heading="Reach for tokens, never hex"
      description="Every value in the system is exposed as a typed CSS variable. Reference the contract from your own vanilla-extract styles instead of inlining hex or px — your work stays inside the system."
    >
      <CodeBlock lang="ts">{TOKENS_CODE}</CodeBlock>
      <p className={s.para}>
        The tokens you'll reach for most. See <strong>Foundations / Tokens</strong> for the full
        set.
      </p>
      <div>
        {TOKEN_ROWS.map(([tok, val, use]) => (
          <div key={tok} className={s.tokenRow}>
            <span className={s.tokenName}>{tok}</span>
            <span className={s.tokenValue}>{val}</span>
            <span className={s.tokenUse}>{use}</span>
          </div>
        ))}
      </div>
    </DocSection>

    <DocSection
      num="04 · Dark mode"
      heading="Swap the theme class"
      description="Dark mode inverts the paper/ink scales and darkens the pales while keeping matcha, kogane and beni intact. Swap the class on the document root — there is no provider, no context."
    >
      <CodeBlock lang="ts">{DARK_CODE}</CodeBlock>
    </DocSection>

    <DocSection
      num="05 · Components"
      heading="What's available"
      description="Components ship one at a time. As each lands, a story page appears in the sidebar under its category — Actions, Inputs, Display, Feedback, Navigation, Overlay."
    >
      <p className={s.para}>
        Today the library exposes the token layer only — explore{' '}
        <strong>Foundations / Tokens</strong> to see every color, font and space step in light and
        dark themes. Component pages will fill in as each component is built.
      </p>
    </DocSection>
  </DocsLayout>
);
