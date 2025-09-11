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
import { Button, Input } from 'kanso-ui'
import 'kanso-ui/styles'

function App() {
  return (
    <div>
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

## 🎨 Color Palette

| Color | Description |
|-------|-------------|
| `sky` | Calm blue tones |
| `lavender` | Gentle purple hues |
| `sage` | Natural green shades |
| `amber` | Warm orange tones |
| `coral` | Vibrant red accents |

## 📦 Components

### Button

```tsx
<Button color="sage" variant="outline" size="lg">
  Click me
</Button>
```

**Props:**
- `color`: `'sky' | 'lavender' | 'sage' | 'amber' | 'coral'`
- `variant`: `'filled' | 'outline' | 'ghost'`
- `size`: `'sm' | 'md' | 'lg'`
- `fullWidth`: `boolean`
- `loading`: `boolean`

### Input

```tsx
<Input 
  color="amber"
  variant="filled"
  label="Username"
  leftIcon="👤"
  rightIcon="✅"
/>
```

**Props:**
- `color`: `'sky' | 'lavender' | 'sage' | 'amber' | 'coral'`
- `variant`: `'filled' | 'outline'`  
- `size`: `'sm' | 'md' | 'lg'`
- `label`: `string`
- `helperText`: `string`
- `errorMessage`: `string`
- `leftIcon`: `ReactNode`
- `rightIcon`: `ReactNode`


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

Visit our [Storybook documentation](https://your-storybook-url.com) to explore all components and examples.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT © [Pablo](https://github.com/yourusername)

---

*Kanso (簡素) - Japanese aesthetic principle emphasizing simplicity and naturalness.*
