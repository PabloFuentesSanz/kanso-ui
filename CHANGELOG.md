# Changelog

All notable changes to **kanso-ui** are documented in this file. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.0.0 — 2026-06-02

First stable release of the rewritten library, replacing the legacy 1.x line under the `latest` npm tag. The 2.x line is a full rewrite of the package on top of the **KansoUI** design system — a React component library built on the Japanese aesthetic principles of *ma* (space), *wabi* (humility) and *sabi* (austerity).

### Build & distribution

- Bundled with `tsup` + `@vanilla-extract/esbuild-plugin`. ESM-only output, TypeScript declarations, source maps.
- Two entry points: `kanso-ui` (components and tokens) and `kanso-ui/styles` (side-effect entry that registers the three self-hosted font families, the global reset and every shipped component's CSS).
- `react` and `react-dom` are peer dependencies (`>=18`). Fonts ship as direct dependencies (`@fontsource/{noto-serif-jp,syne,dm-mono}`) so consumers get them for free via the styles entry.

### Tokens

- Two-layer token system in `vanilla-extract`: primitive palette (Japanese pigment names — sumi, washi, matcha, kogane, beni) feeds a global theme contract for non-themed values and a separate semantic contract for color slots.
- **Stable CSS variable names** matching the design spec literally — `--kanso-ink`, `--kanso-space-4`, `--kanso-radius-md`, `--kanso-serif`, `--kanso-font-size-h1`. Consumers can use the tokens from plain CSS, Tailwind, styled-components or emotion without depending on vanilla-extract.
- **Light** and **Dark** themes via `createTheme(contract, values)` — the paper/ink scales invert and the pale companion surfaces darken; matcha, kogane and beni stay constant.

### Components

| Group | Component | Variants |
|---|---|---|
| Actions | `Button` | primary · accent · secondary · ghost · destructive |
| Actions | `IconButton` | ghost · bordered (`aria-label` required) |
| Display | `Badge` | neutral · success · warning · error |
| Display | `Card` | default · elevated |

Every component is a thin React wrapper around a `@vanilla-extract/recipes` definition. Variant types are exposed via `RecipeVariants<typeof recipe>` so consumers get autocomplete with no manual prop unions.

### Documentation

Storybook 8 surface with a custom kanso-themed chrome (washi background, paper-3 hairline borders, sumi ink text, matcha accent, Syne / DM Mono / Noto Serif JP typography, custom `kansoLogo.png` brand mark). Five Foundations pages — Introduction, Theme, Color, Typography, Layout — plus Getting Started, all rendered as fullscreen TSX stories.

### Reusable docs primitives

Under `src/stories/_components/`:

- `DocsLayout`, `ScreenHeader`, `DocSection` — page wrapper, editorial header with kanji, numbered section.
- `CodeBlock` — paper-2 surface with kanso-palette syntax highlighting and a copy button.
- `CopyToken` — inline copyable token reference, used in every Foundations page so the vanilla-extract path and the CSS variable can be lifted with one click.
- `Example` — preview surface paired with its source code, used by every component story.

### Responsive

Single mobile breakpoint at 768px (`tokens/breakpoints.ts`). Card grids use intrinsic `repeat(auto-fill, minmax(min(N, 100%), 1fr))` to reflow without media queries; multi-column tables stack to 1fr below the breakpoint; page padding drops from `space-7` to `space-4`.

### Not yet included

- Inputs (`Field`, `Text input`, `Textarea`, `Select`, `Switch`, …)
- Feedback (`Alert`, `Toast`, `Progress`, `Spinner`, `Skeleton`)
- Navigation (`Tabs`, `Breadcrumb`, `Pagination`, `Stepper`, `Menu`, `Divider`)
- Overlay (`Dialog`, `Drawer`, `Popover`)
- Recipes (`Settings panel`)
- Test suite
