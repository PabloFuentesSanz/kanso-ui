const fs = require('fs')
const path = require('path')
const { transform } = require('@svgr/core')

const svgDir = path.join(__dirname, '../src/icons/svg')
const iconsDir = path.join(__dirname, '../src/icons')

// Configuración de SVGR
const svgrConfig = {
  typescript: true,
  jsxRuntime: 'automatic',
  exportType: 'named',
  namedExport: 'IconSvg',
  plugins: ['@svgr/plugin-jsx'],
  template: (variables, { tpl }) => {
    return tpl`
import { forwardRef } from 'react'
import { Icon } from './Icon'
import type { BaseIconProps } from './types'

export const %%componentName%% = forwardRef<SVGSVGElement, BaseIconProps>((props, ref) => (
  <Icon ref={ref} {...props}>
    %%jsx%%
  </Icon>
))

%%componentName%%.displayName = '%%componentName%%'
`
  },
  svgProps: {
    fill: 'currentColor',
  },
}

async function generateIcons() {
  try {
    // Crear directorio si no existe
    if (!fs.existsSync(iconsDir)) {
      fs.mkdirSync(iconsDir, { recursive: true })
    }

    // Leer todos los archivos SVG
    const svgFiles = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'))

    const iconExports = []

    for (const file of svgFiles) {
      const svgPath = path.join(svgDir, file)
      const svgContent = fs.readFileSync(svgPath, 'utf8')

      // Generar nombre del componente
      const basename = path.basename(file, '.svg')
      const componentName =
        basename
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('') + 'Icon'

      // Transformar SVG a componente React
      const jsCode = await transform(
        svgContent,
        {
          ...svgrConfig,
          componentName,
        },
        { componentName }
      )

      // Escribir el archivo del componente
      const outputPath = path.join(iconsDir, `${componentName}.tsx`)
      fs.writeFileSync(outputPath, jsCode)

      iconExports.push(`export { ${componentName} } from './${componentName}'`)

      console.log(`✓ Generated ${componentName}.tsx`)
    }

    // Generar archivo de index para exportar todos los iconos
    const indexContent = `export { Icon } from './Icon'
export type { IconProps, IconSize, BaseIconProps } from './types'

${iconExports.join('\n')}
`

    fs.writeFileSync(path.join(iconsDir, 'index.ts'), indexContent)

    console.log(`✓ Generated index.ts with ${iconExports.length} icon exports`)
    console.log('🎉 Icon generation completed!')
  } catch (error) {
    console.error('Error generating icons:', error)
    process.exit(1)
  }
}

generateIcons()
