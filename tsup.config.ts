import { defineConfig } from 'tsup';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

/**
 * Library build config. Two entry points:
 *
 *   - index   exports tokens (vars, colorVars, themes) + every component.
 *   - styles  side-effect-only — registers @font-face declarations and
 *             the minimal globalStyle reset. Consumers import this once
 *             at app entry: `import 'kanso-ui/styles';`.
 *
 * Vanilla-extract files (.css.ts) compile through @vanilla-extract/esbuild-plugin
 * into static CSS plus a small JS module exporting the generated class
 * names. The plugin emits CSS adjacent to each module; tsup picks them
 * up under dist/.
 *
 * Everything that should NOT be bundled into our package is marked
 * external so the consumer's bundler resolves it from their own
 * node_modules:
 *   - react, react-dom (peer deps)
 *   - @vanilla-extract/* (runtime helpers consumers may already have)
 *   - @fontsource/* (CSS-only packages; bundled via the side-effect
 *     import in tokens/fonts.ts and re-exported transparently)
 *   - clsx, lucide-react (lucide is not used in the published source —
 *     only stories; the external marker prevents accidental bundling)
 */
export default defineConfig({
  entry: {
    index: 'src/index.ts',
    styles: 'src/styles.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  treeshake: true,
  sourcemap: true,
  splitting: false,
  esbuildPlugins: [vanillaExtractPlugin()],
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime',
    'clsx',
    /^lucide-react/,
    /^@vanilla-extract\//,
    /^@fontsource\//,
  ],
});
