declare module 'jest-axe' {
  export function axe(container: Element): Promise<unknown>
  export const toHaveNoViolations: unknown
}

declare global {
  namespace Vi {
    interface Assertion {
      toHaveNoViolations(): void
    }
    interface AsymmetricMatchersContaining {
      toHaveNoViolations(): unknown
    }
  }
}
