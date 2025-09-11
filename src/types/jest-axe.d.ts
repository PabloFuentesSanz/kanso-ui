declare module 'jest-axe' {
  export function axe(container: Element): Promise<any>
  export const toHaveNoViolations: any
}

declare global {
  namespace Vi {
    interface Assertion {
      toHaveNoViolations(): void
    }
    interface AsymmetricMatchersContaining {
      toHaveNoViolations(): any
    }
  }
}