# kanso-ui

```
寛素
the quiet system
```

A React component library built on three principles of Japanese aesthetics — **ma** (間, space), **wabi** (侘, humility) and **sabi** (寂, austerity). The rule that emerges from them: remove until nothing remains that can be removed.

This is not a comprehensive system. It is a restrained one.

---

## Install

```
npm install kanso-ui
```

Then, once, at your app entry:

```ts
import 'kanso-ui/styles';
import { lightTheme } from 'kanso-ui';

document.documentElement.classList.add(lightTheme);
```

The styles entry registers the three self-hosted families (Noto Serif JP, Syne, DM Mono) and applies a minimal reset. The theme class fills every CSS variable on the document root.

## Use the tokens

Every value the system defines ships as a typed JavaScript path and a stable CSS variable — both resolve to the same value at runtime. Reach for whichever fits.

```ts
import { style } from '@vanilla-extract/css';
import { vars, colorVars } from 'kanso-ui';

export const card = style({
  padding: vars.space[4],
  border: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
  borderRadius: vars.radius.md,
  color: colorVars.color.ink2,
  fontFamily: vars.font.sans,
});
```

```css
.card {
  padding: var(--kanso-space-4);
  border: var(--kanso-border-width-hair) solid var(--kanso-paper-3);
  border-radius: var(--kanso-radius-md);
  color: var(--kanso-ink-2);
  font-family: var(--kanso-sans);
}
```

## Use a component

```tsx
import { Button, IconButton, Badge, Card } from 'kanso-ui';
import { Plus } from 'lucide-react';

export const Toolbar = () => (
  <Card>
    <Button>Save changes</Button>
    <Button variant="secondary">
      <Plus size={16} strokeWidth={1.5} /> Add another
    </Button>
    <Badge tone="success">Saved</Badge>
    <IconButton aria-label="Search">{/* Lucide icon */}</IconButton>
  </Card>
);
```

## What ships

| | |
|---|---|
| **Tokens** | Color · Typography · Space · Radii · Borders · Motion |
| **Themes** | Light · Dark (`lightTheme`, `darkTheme` classes) |
| **Actions** | `Button` · `IconButton` |
| **Display** | `Badge` · `Card` |

More components land in subsequent releases on the `next` tag. The full taxonomy (35 components across nine groups) is documented in the Storybook sidebar.

## Documentation

The full design system — every token in light and dark, the typographic scale, the spacing system, the philosophy and every shipped component — lives at <https://kanso-ui.vercel.app>.

To run the docs locally for development:

```
npm install
npm run dev
```

Then open <http://localhost:6006>.

## Philosophy in three rules

1. **Empty space carries the same weight as filled space.** The margin is part of the design.
2. **Beauty is what is imperfect, functional and honest.** No ornament for ornament's sake.
3. **Only what is essential.** If an element has no clear job, it does not appear.

## What KansoUI never does

- No gradient backgrounds, even subtle ones
- No decorative box-shadows
- No border-radius larger than 4px on UI (avatars excepted)
- No saturated primaries — electric blue, neon green, brand purple
- No font weight heavier than 500
- No bounce or spring animations
- No filled icons or strokes thicker than 1.5px
- No more than one primary CTA per screen
- No colored backgrounds on primary containers

## Stack

React 18 · TypeScript · vanilla-extract · self-hosted `@fontsource/*` · Lucide for icons · Storybook 8.

## License

MIT.
