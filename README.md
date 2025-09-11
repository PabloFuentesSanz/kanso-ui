# Kanso UI 🌸

A modern, minimalist React component library inspired by Japanese design principles.

[![npm version](https://badge.fury.io/js/kanso-ui.svg)](https://badge.fury.io/js/kanso-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **Beautiful Pastel Colors** - Sky, Lavender, Sage, Amber, and Coral
- 🔧 **Flexible Design System** - Mix any color with any variant
- 🎯 **TypeScript Native** - Fully typed components
- ♿ **Accessibility First** - Built with a11y in mind
- 🚀 **Modern Stack** - Vanilla Extract CSS + React 18
- 📖 **Comprehensive Docs** - Storybook documentation

## 🚀 Installation

```bash
npm install kanso-ui
```

## 💡 Quick Start

```tsx
import { Button, Input, lightTheme } from 'kanso-ui'
import 'kanso-ui/dist/index.css'

function App() {
  return (
    <div className={lightTheme}>
      <Button color="sky" variant="filled">
        Hello World
      </Button>

      <Input 
        color="lavender" 
        variant="outline" 
        label="Email" 
        placeholder="john@example.com" 
      />
    </div>
  )
}
```

**⚠️ Important:** You must apply the `lightTheme` class to make CSS variables available.

## 🎨 Themes

Kanso UI uses CSS-in-JS with Vanilla Extract. You need to apply a theme class to activate the color variables:

```tsx
import { lightTheme, darkTheme } from 'kanso-ui'

// Apply to your root app
<div className={lightTheme}>
  {/* Your components */}
</div>

// Or for dark theme
<div className={darkTheme}>
  {/* Your components */}
</div>
```

## 🎨 Color Palette

| Color      | Description          |
| ---------- | -------------------- |
| `sky`      | Calm blue tones      |
| `lavender` | Gentle purple hues   |
| `sage`     | Natural green shades |
| `amber`    | Warm orange tones    |
| `coral`    | Vibrant red accents  |

## 🛠 Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run dev

# Run tests
npm test

# Build library
npm run build

# Type check
npm run typecheck
```

## 📖 Documentation

Visit our [Storybook documentation](https://kanso-ui.vercel.app/?path=/story/introduction--get-started) to explore all components and examples.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT © [Pablo](https://github.com/pablofuentessanz)

---

_Kanso (簡素) - Japanese aesthetic principle emphasizing simplicity and naturalness._
