import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'
import 'axe-core'

expect.extend(matchers)

afterEach(() => {
  cleanup()
})