import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { expect } from 'vitest'

// Extender expect con axe matchers
expect.extend(toHaveNoViolations)

// Proveedor de tema personalizado para tests
interface TestProviderProps {
  children: React.ReactNode
  theme?: 'light' | 'dark'
}

const TestProvider = ({ children, theme = 'light' }: TestProviderProps) => {
  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      {children}
    </div>
  )
}

// Render personalizado que incluye el proveedor de tema
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'> & {
    theme?: 'light' | 'dark'
  }
): ReturnType<typeof render> => {
  const { theme, ...renderOptions } = options || {}
  
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <TestProvider theme={theme}>{children}</TestProvider>
  )

  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

// Función helper para tests de accesibilidad
export const runAxeTest = async (container: Element) => {
  const results = await axe(container)
  expect(results).toHaveNoViolations()
}

// Re-exportar todo de testing-library
export * from '@testing-library/react'
export { userEvent } from '@testing-library/user-event'

// Exportar nuestro render personalizado como el render por defecto
export { customRender as render }