# 🎨 Kanso UI

Una librería moderna de componentes React construida con TypeScript, vanilla-extract y Storybook.

## ✨ Características

- 🎯 **TypeScript First**: Tipos completos y seguros
- 🎨 **Design Tokens**: Sistema de diseño consistente con vanilla-extract
- 📚 **Storybook**: Documentación interactiva y desarrollo de componentes
- 🧪 **Testing**: Tests unitarios con Vitest y React Testing Library
- ♿ **Accesibilidad**: Componentes accesibles por defecto con axe-core
- 🎭 **Temas**: Soporte para temas light/dark
- 📦 **Optimización**: Build con tsup para ESM/CJS
- 🔧 **DX**: Herramientas de desarrollo y calidad de código
- 📈 **Versionado**: Semantic versioning con Changesets

## 🚀 Instalación

```bash
npm install kanso-ui
# o
yarn add kanso-ui
# o
pnpm add kanso-ui
```

## 📖 Uso Básico

```tsx
import { Button, Input, HeartIcon } from 'kanso-ui'
import { lightTheme } from 'kanso-ui/styles'

function App() {
  return (
    <div className={lightTheme}>
      <Button variant='primary' size='md' leftIcon={<HeartIcon />}>
        Click me
      </Button>

      <Input label='Email' placeholder='Enter your email' type='email' />
    </div>
  )
}
```

## 🎨 Temas

Kanso UI incluye temas light y dark listos para usar:

```tsx
import { lightTheme, darkTheme } from 'kanso-ui/styles'

// Aplicar tema light
<div className={lightTheme}>
  {/* Tu app */}
</div>

// Aplicar tema dark
<div className={darkTheme}>
  {/* Tu app */}
</div>
```

## 📚 Componentes

### Button

Un componente Button versátil con múltiples variantes y tamaños.

```tsx
<Button variant='primary' size='lg' fullWidth>
  Primary Button
</Button>
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean
- `disabled`: boolean
- `fullWidth`: boolean
- `leftIcon`, `rightIcon`: ReactNode

### Input

Un componente Input con soporte para validación y estados.

```tsx
<Input label='Password' type='password' required errorMessage='Password is required' />
```

**Props:**

- `size`: 'sm' | 'md' | 'lg'
- `variant`: 'default' | 'error' | 'success'
- `label`: string
- `helperText`: string
- `errorMessage`: string
- `fullWidth`: boolean

### Iconos

Sistema de iconos SVG optimizado:

```tsx
import { HeartIcon, StarIcon, Icon } from 'kanso-ui'

<HeartIcon size="lg" color="#ef4444" />
<StarIcon size="md" />

// Icono personalizado
<Icon size="sm" color="blue">
  <path d="..." />
</Icon>
```

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar Storybook
npm run dev

# Ejecutar tests
npm test

# Ejecutar tests con UI
npm run test:ui

# Build
npm run build

# Linting
npm run lint

# Formatear código
npm run format

# Type checking
npm run typecheck
```

## 📝 Scripts Disponibles

- `dev`: Ejecuta Storybook en modo desarrollo
- `build`: Construye la librería para producción
- `test`: Ejecuta los tests unitarios
- `test:coverage`: Ejecuta tests con reporte de cobertura
- `lint`: Ejecuta ESLint
- `format`: Formatea el código con Prettier
- `typecheck`: Verifica tipos con TypeScript
- `changeset`: Crea un nuevo changeset
- `version-packages`: Actualiza versiones basado en changesets
- `release`: Publica la librería en npm

## 🏗️ Arquitectura

### Design Tokens

Los tokens de diseño están definidos usando vanilla-extract:

```tsx
import { vars } from 'kanso-ui/styles'

// Usar tokens en CSS-in-JS
const styles = {
  color: vars.color.primary,
  fontSize: vars.fontSize.lg,
  spacing: vars.spacing['4'],
}
```

### Testing

Los componentes incluyen tests unitarios y de accesibilidad:

```tsx
import { render, screen, runAxeTest } from '@testing-library/react'
import { Button } from './Button'

test('meets accessibility standards', async () => {
  const { container } = render(<Button>Test</Button>)
  await runAxeTest(container)
})
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

MIT © Pablo

## 🔗 Enlaces

- [Documentación](https://your-storybook-url.com)
- [Repository](https://github.com/your-username/kanso-ui)
- [NPM Package](https://www.npmjs.com/package/kanso-ui)
