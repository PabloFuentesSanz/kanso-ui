# kanso-ui

> 寛素 · the quiet system

A React component library implementing **KansoUI**, a design system rooted in three principles of Japanese aesthetics: **ma** (間 — space), **wabi** (侘 — humility) and **sabi** (寂 — austerity). The rule that emerges from them: remove until nothing remains that can be removed.

## Status

`2.0.0` — first release on the new design system. Major bump from the previous 1.0.x line, which was a different incarnation of the library. The **token layer** and the **Foundations documentation** are stable. Components (Button, Input, Card, …) ship in subsequent 2.x releases.

## Quick start

```bash
npm install kanso-ui
```

```ts
// app entry — main.tsx, _app.tsx, etc.
import 'kanso-ui/styles';
import { lightTheme } from 'kanso-ui';

document.documentElement.classList.add(lightTheme);
```

Tokens are exposed as both a typed vanilla-extract surface and stable CSS variables — pick whichever fits your stack:

```ts
// vanilla-extract
import { vars, colorVars } from 'kanso-ui';

export const card = style({
  padding: vars.space[4],
  border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  borderRadius: vars.radius.md,
  color: colorVars.color.ink2,
});
```

```css
/* plain CSS */
.card {
  padding: var(--kanso-space-4);
  border: var(--kanso-border-width-hair) solid var(--kanso-paper-3);
  border-radius: var(--kanso-radius-md);
  color: var(--kanso-ink-2);
}
```

## Documentation

The full design system lives in Storybook. Run it locally:

```bash
npm install
npm run dev
```

Then open <http://localhost:6006> to browse Getting Started, Foundations (Introduction, Theme, Color, Typography, Layout) and — as they land — the component pages.

## Stack

- React 18 · TypeScript · Vite
- `@vanilla-extract/css` + `@vanilla-extract/recipes`
- Self-hosted fonts via `@fontsource/{noto-serif-jp,syne,dm-mono}`
- `lucide-react` for icons
- Storybook 8 (`@storybook/react-vite`) as the documentation surface

## License

MIT
