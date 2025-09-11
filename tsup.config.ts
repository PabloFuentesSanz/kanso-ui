import { defineConfig } from 'tsup'
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'

export default defineConfig({
  entry: ['src/index.ts', 'src/styles/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  banner: {
    js: '"use client";',
  },
  esbuildOptions(options) {
    options.jsx = 'automatic'
  },
  esbuildPlugins: [vanillaExtractPlugin()],
  // Exclude test files from the build
  exclude: ['**/*.test.*', '**/*.spec.*', '**/test/**/*', '**/tests/**/*', '**/*.stories.*'],
})
