# Changelog

All notable changes to **kanso-ui** are documented in this file. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2.0.0 — 2026-05-27

First release on the new design system. **Major version bump (1.x → 2.x)** because this is a full rewrite of the package — every public export, file path and visual decision changes. The 1.0.x line on npm was the previous incarnation of the library and remains installable for projects still pinned to it.

This 2.0.0 release ships only the **token layer** and the **documentation surface**. Components return in subsequent 2.x releases.

### Design system

- Import the **KansoUI** design spec (`design/`) as the source of truth — CSS tokens, prototype screens, original design conversation.
- New folder layout: `src/tokens/` (palette + theme contracts + reset + fonts), `src/components/` (one folder per future component), `src/stories/` (MDX/TSX docs and shared docs primitives).

### Tokens

- Two-layer token system in `vanilla-extract`: primitive palette (`palette.ts`) keyed by Japanese pigment names, fed into a global theme contract for non-themed values (space, radii, type scale, motion) and a separate semantic contract for color slots.
- **Stable CSS variable names** matching the design spec literally — `--kanso-ink`, `--kanso-space-4`, `--kanso-radius-md`, `--kanso-serif`. Consumers can use the tokens from plain CSS, Tailwind, styled-components or emotion without depending on vanilla-extract.
- **Light** and **Dark** themes via `createTheme(contract, values)` — the paper/ink scales invert and the pale companion surfaces darken; matcha, kogane and beni stay constant.
- Self-hosted fonts shipped with the package (`@fontsource/{noto-serif-jp,syne,dm-mono}`) — no Google Fonts dependency at runtime.

### Storybook

- **Custom chrome theme** matched to the design system: washi background, paper-3 hairline borders, sumi ink text, matcha accent for active-story markers, Syne / DM Mono / Noto Serif JP typography. Custom brand image (`kansoLogo.png`) replaces the default Storybook wordmark.
- Global **Light/Dark toolbar toggle** (`@storybook/addon-themes`) swaps the active theme class on `<html>`.
- Directory-based stories config so the sidebar mirrors the folder hierarchy.

### Documentation pages

All pages render as fullscreen TSX stories (not MDX) so the kanso typography reaches the iframe edges without being overridden by Storybook's `.sbdocs` reset.

- **Start / Getting Started** — install, theme setup, tokens API (both vanilla-extract and plain CSS), dark mode swap.
- **Foundations / Introduction** — the three principles (ma · wabi · sabi) and the golden rule.
- **Foundations / Theme** — side-by-side light/dark palette comparison, what swaps vs. what stays, and the production class-swap pattern.
- **Foundations / Color** — all 14 color slots in four sections (sumi inks, washi papers, matcha accent, kogane + beni semantics) with hex, Japanese name and usage.
- **Foundations / Typography** — three families (Noto Serif JP, Syne, DM Mono), the eight role type scale, the four allowed weights, and the typographic rules.
- **Foundations / Layout** — the 4 → 80px space scale, three radii, three border widths and the motion tokens (duration + easing).

### Reusable docs primitives

Under `src/stories/_components/`:

- `DocsLayout`, `ScreenHeader`, `DocSection` — page wrapper, editorial header with kanji, numbered section.
- `CodeBlock` — paper-2 surface with syntax highlighting in the kanso palette (matcha keywords, kogane numbers, accent-soft strings) and a copy button.
- `CopyToken` — inline copyable token reference used across every Foundations page so both the vanilla-extract path (`color.ink`) and the CSS variable (`--kanso-ink`) can be lifted with one click.

### Tooling

- Greenfield Storybook 8 + React 18 + TypeScript + Vite setup.
- Conventional Commits enforced for the branch (`docs(claude)`, `feat(tokens)`, `fix(stories)`, …).
- Agent skills installed under `.agents/skills/` (vanilla-extract, storybook, typescript-react-reviewer, vercel-react-best-practices, git-commit).

### Not included yet

- Components (`Button`, `Input`, `Card`, `Badge`, `Alert`, …) — Phase 3.
- npm publishing pipeline (build with tsup, exports field, `kanso-ui/styles` subpath).
- Test suite.
