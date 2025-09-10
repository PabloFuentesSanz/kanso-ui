import type { SVGProps } from 'react'

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'size' | 'color'> {
  size?: IconSize
  color?: string
  'aria-label'?: string
  'aria-hidden'?: boolean
  focusable?: boolean
}

export interface BaseIconProps extends IconProps {
  children?: never
}