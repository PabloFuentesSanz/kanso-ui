import { globalStyle } from '@vanilla-extract/css';
import { colorVars } from './contract.css';
import { vars } from './global.css';

/**
 * Minimal global reset.
 *
 * Per the vanilla-extract skill: `globalStyle` is appropriate for browser
 * resets only. Headings, links, buttons and other interactive elements
 * stay component-scoped — never globally styled.
 *
 * Body adopts the active theme's surface and ink so a consumer who applies
 * `lightTheme` or `darkTheme` to `:root` gets a correct backdrop with no
 * extra wiring.
 */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  background: colorVars.color.paper,
  color: colorVars.color.ink,
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.body,
  fontWeight: vars.fontWeight.light,
  lineHeight: vars.lineHeight.body,
  WebkitFontSmoothing: 'antialiased',
  textRendering: 'optimizeLegibility',
});
