# kanso-ui — implementation notes for Claude

A React component library implementing the **KansoUI (寛素UI)** design system: Japanese wabi-sabi minimalism, intended to be consumed by other developers.

## Stack

- React 18 + TypeScript + Vite
- Storybook 8 (`@storybook/react-vite`) — the public documentation surface
- `@vanilla-extract/css` + `@vanilla-extract/recipes` for styles (typed, zero runtime)
- `@fontsource/{noto-serif-jp,syne,dm-mono}` — self-hosted fonts so the library has no network dependency
- `lucide-react` for icons (per design spec — outline, 1.5px stroke, 16–20px)
- `clsx` for className composition

## Folder layout

```
src/
├── index.ts                       PUBLIC API — re-exports for consumers
│
├── tokens/                        ─── Design tokens (one source of truth)
│   ├── base.css.ts                Primitives: hex palette + raw scale
│   ├── contract.css.ts            createThemeContract — shape only, no values
│   ├── light.css.ts               createTheme(contract, lightValues) → lightTheme class
│   ├── dark.css.ts                createTheme(contract, darkValues)  → darkTheme class
│   ├── reset.css.ts               globalStyle resets ONLY (body, html, *)
│   └── fonts.css.ts               @fontsource side-effect imports
│
├── components/                    ─── One folder per component
│   └── <Component>/
│       ├── <Component>.tsx        typed props, maps to recipe classes
│       ├── <Component>.css.ts     recipe with variants + exported types
│       └── <Component>.stories.tsx
│
└── stories/                       ─── MDX docs (Foundations, Getting Started)
    └── *.mdx
```

### Authoring rules (enforced by skills)

- All raw values (hex, px, rem) live in `tokens/base.css.ts` only. Components reference `vars` from the contract — never literals.
- One component per folder. No `src/components/index.ts` barrel — consumers import via the root `src/index.ts`, internal code imports directly.
- Components: typed via `RecipeVariants<typeof recipe>`. No `React.FC`. Explicit props with `({ prop }: Props)`.
- Stories: CSF 3.0, `satisfies Meta<typeof X>`, omit `title` (file path infers), `tags: ['autodocs']`, common args at meta level.
- `globalStyle` only for browser reset. Never for headings, buttons, links — those are component recipes.

## Source of truth for the design

Everything visual lives under [design/](design/). Read these before designing or building any component:

- [design/kanso.css](design/kanso.css) — full reference CSS with every token and component (1281 lines). **This is canonical.** When in doubt about a color, spacing, or component rule, look here first.
- [design/screens/](design/screens/) — the JSX prototype that shows how each component is meant to be shown in docs: usage variants, copy, code examples. Use these as content reference for the Storybook page of each component. Files map directly to the nav taxonomy below (`screens-actions.jsx` → Actions group, etc.). `_example-helper.jsx` is the `<Example>` wrapper used across screens (preview/react/html tabs with copy).
- [design/HANDOFF-README.md](design/HANDOFF-README.md) — original handoff README from Claude Design
- [design/chat-transcript.md](design/chat-transcript.md) — design conversation, including the structural decisions (sub-category naming, components to add)

When the design spec and a built component disagree, the spec wins unless we explicitly noted an intentional divergence in this file.

Don't copy the JSX prototype 1:1 — it builds an HTML/CSS demo with hand-rolled class names. In our project we re-implement each component as a proper React + vanilla-extract module, and the Storybook story for that component plays the role the prototype's screen plays.

## Storybook structure (target)

Navigation taxonomy — frozen by the design spec (9 groups, 35 components):

```
Start         · Getting started
Foundations   · Introduction · Color · Typography · Layout
Actions       · Button · Icon button · Button group · Link
Inputs        · Text input · Textarea · Number · Select · Checkbox · Radio
                Switch · Slider · Search · Field
Display       · Badge · Tag · Avatar · Card · List · Table · Tooltip
                Keyboard · Empty state · Stat · Quote
Feedback      · Alert · Toast · Progress · Spinner · Skeleton
Navigation    · Tabs · Breadcrumb · Pagination · Stepper · Menu · Divider
Overlay       · Dialog · Drawer · Popover
Recipes       · Settings panel
```

## Non-negotiable rules (from the spec)

These come from "Lo que KansoUI nunca hace" — verify any new component against them:

- No gradient backgrounds, ever
- No decorative box-shadows
- Border-radius max 4px on UI (full-round only for avatars)
- No saturated primaries (electric blue, purple, neon green)
- Font-weight max 500 (no 600/700)
- No bounce/spring animations; max duration 200ms; only animate `opacity`, `transform`, `border-color`
- Icons: outline only, stroke 1.5px (never 2px), 16px in UI / 20px max decorative
- One primary CTA per screen
- No color-filled containers
- White text only on `--kanso-ink` (the deep ink, not on accents)

## Implementation status

### Done
- [x] Greenfield scaffold (Storybook + React + TS + Vite + vanilla-extract)
- [x] Agent skills installed (`.agents/skills/`)
- [x] Design spec copied into `design/`

### In progress — Phase 1: Foundation
- [ ] Install `@vanilla-extract/recipes`, `lucide-react`, `@fontsource/*` (3 fonts)
- [ ] `src/tokens/base.css.ts` — primitive palette + scale (createGlobalTheme on a `base` namespace)
- [ ] `src/tokens/contract.css.ts` — `createThemeContract` defining the semantic shape
- [ ] `src/tokens/light.css.ts` — `createTheme(contract, lightValues)` exports `lightTheme`
- [ ] `src/tokens/dark.css.ts` — `createTheme(contract, darkValues)` exports `darkTheme`
- [ ] `src/tokens/reset.css.ts` — minimal globalStyle (box-sizing, body bg/color/font-smoothing)
- [ ] `src/tokens/fonts.css.ts` — `@fontsource` side-effect imports
- [ ] `src/index.ts` — exports `vars`, `lightTheme`, `darkTheme` from tokens
- [ ] `.storybook/preview.ts` — apply `lightTheme` class on root, import reset + fonts
- [ ] `.storybook/main.ts` — `stories: ['../src/**/*.{stories.tsx,mdx}']`
- [ ] Smoke story (replace `src/Welcome.stories.tsx`) to confirm tokens + fonts load

### Pending — Phase 2: Foundations docs pages
- [ ] Color page (swatches with token name, hex, Japanese name, usage)
- [ ] Typography page (type scale specimen)
- [ ] Layout page (space scale, radii, borders)

### Pending — Phase 3+: Components
Build in priority order: Button → Field/Input → Badge → Card → Alert → Toggle → Tabs → Avatar → then the rest per the taxonomy above.

For each component: implementation file (.tsx), styles (.css.ts), and a story (.stories.tsx) with Preview + Code tabs (the chat established this pattern). One ticket per component — don't batch.

## How we work

- **One component at a time.** The user explicitly said "poco a poco". Don't pre-build screens that aren't asked for.
- **Be critical of fluff.** The design spec includes some poetic framing ("animations like breathing", closing haiku). Keep the cultural identity (kanji, Japanese color names, philosophy section) — strip the AI-generated flourishes that don't help a developer using the library.
- **Verify against the spec.** When porting `kanso.css` rules to vanilla-extract, the values must match exactly (heights, paddings, hex values). The spec is the contract.
- **Never inline styles in component code.** All styles go through vanilla-extract.
- **Read the installed skills before designing.** [.agents/skills/](.agents/skills/) holds the rulebooks the user installed for this project — `vanilla-extract`, `storybook`, `storybook-story-writing`, `typescript-react-reviewer`, `typescript-advanced-types`, `vercel-react-best-practices`, `git-commit`. Open the relevant SKILL.md before proposing architecture or patterns; do not invent conventions.

### Commit conventions

Follow Conventional Commits (per `.agents/skills/git-commit/SKILL.md`):

```
<type>[scope]: <description>      ← ≤72 chars, imperative, present tense
```

Types we use: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.

Atomic = one logical change per commit. Group by intent, not by file count. Typical scopes here: `tokens`, `storybook`, `deps`, `claude` (for CLAUDE.md), `<component-name>`.
