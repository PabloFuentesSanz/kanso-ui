import { forwardRef, SVGProps } from 'react'
import { clsx } from 'clsx'
import { iconRecipe } from './Icons.css'

export type IconName =
  // Arrows
  | 'arrow-up'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-right'
  // Interface
  | 'check'
  | 'cross'
  | 'plus'
  | 'minus'
  | 'info'
  | 'warning'
  | 'help'
  | 'alert'
  | 'menu'
  | 'search'
  | 'close'
  | 'home'
  | 'settings'
  | 'user'
  | 'loading'
  | 'trash'
  | 'external-link'
  // Editor
  | 'save'
  | 'edit'
  | 'delete'
  | 'share'
  | 'copy'
  | 'download'
  | 'upload'
  | 'filter'
  // Media
  | 'play'
  | 'pause'
  | 'stop'
  | 'image'
  | 'video'
  | 'music'
  | 'volume-on'
  | 'volume-off'
  // Social/Communication
  | 'mail'
  | 'message'
  | 'phone'
  | 'heart'
  | 'star'
  | 'cloud'
  | 'wifi'
  | 'battery'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color' | 'ref'> {
  /**
   * Size of the icon
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  /**
   * Color of the icon from Kanso palette or 'currentColor'
   * @default 'currentColor'
   */
  color?:
    | 'currentColor'
    | 'sakura'
    | 'wasabi'
    | 'sora'
    | 'indigo'
    | 'mikan'
    | 'akane'
    | 'fuji'
    | 'sumi'
  /**
   * If true, the icon spins (useful for loading)
   * @default false
   */
  spin?: boolean
}

// Internal generic component
const BaseIcon = forwardRef<SVGSVGElement, IconProps>(
  ({ size, color, spin, className, children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox='0 0 24 24'
        className={clsx(iconRecipe({ size, color, spin: spin ? 'true' : 'false' }), className)}
        aria-hidden='true'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}
      >
        {children}
      </svg>
    )
  }
)
BaseIcon.displayName = 'BaseIcon'

// --- Icons Definitions ---

// Arrows
export const IconArrowUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M12 19V5M5 12l7-7 7 7' />
  </BaseIcon>
))
export const IconArrowDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M12 5v14M19 12l-7 7-7-7' />
  </BaseIcon>
))
export const IconArrowLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M19 12H5M12 19l-7-7 7-7' />
  </BaseIcon>
))
export const IconArrowRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M5 12h14M12 5l7 7-7 7' />
  </BaseIcon>
))
export const IconChevronUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M18 15l-6-6-6 6' />
  </BaseIcon>
))
export const IconChevronDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M6 9l6 6 6-6' />
  </BaseIcon>
))
export const IconChevronLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M15 18l-6-6 6-6' />
  </BaseIcon>
))
export const IconChevronRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M9 18l6-6-6-6' />
  </BaseIcon>
))

// Interface
export const IconCheck = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M20 6L9 17l-5-5' />
  </BaseIcon>
))
export const IconCross = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M18 6L6 18M6 6l12 12' />
  </BaseIcon>
))
export const IconPlus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M12 5v14M5 12h14' />
  </BaseIcon>
))
export const IconMinus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M5 12h14' />
  </BaseIcon>
))
export const IconInfo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <circle cx='12' cy='12' r='10' />
    <path d='M12 16v-4M12 8h.01' />
  </BaseIcon>
))
export const IconWarning = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z' />
    <path d='M12 9v4M12 17h.01' />
  </BaseIcon>
))
export const IconHelp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <circle cx='12' cy='12' r='10' />
    <path d='M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01' />
  </BaseIcon>
))
export const IconAlert = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <circle cx='12' cy='12' r='10' />
    <path d='M12 8v4M12 16h.01' />
  </BaseIcon>
))

export const IconMenu = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M4 12h16M4 6h16M4 18h16' />
  </BaseIcon>
))
export const IconSearch = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <circle cx='11' cy='11' r='8' />
    <path d='M21 21l-4.35-4.35' />
  </BaseIcon>
))
export const IconClose = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M18 6L6 18M6 6l12 12' />
  </BaseIcon>
))
export const IconHome = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z' />
    <polyline points='9 22 9 12 15 12 15 22' />
  </BaseIcon>
))
export const IconSettings = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
    <path d='M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z' />
  </BaseIcon>
))
export const IconUser = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
    <circle cx='12' cy='7' r='4' />
  </BaseIcon>
))
export const IconTrash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <polyline points='3 6 5 6 21 6' />
    <path d='M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2' />
  </BaseIcon>
))
export const IconExternalLink = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6' />
    <polyline points='15 3 21 3 21 9' />
    <line x1='10' y1='14' x2='21' y2='3' />
  </BaseIcon>
))

// Editor
export const IconSave = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2zM17 21v-8H7v8M7 3v5h8' />
  </BaseIcon>
))
export const IconEdit = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z' />
  </BaseIcon>
))
export const IconDelete = IconTrash // Alias
export const IconShare = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <circle cx='18' cy='5' r='3' />
    <circle cx='6' cy='12' r='3' />
    <circle cx='18' cy='19' r='3' />
    <line x1='8.59' y1='13.51' x2='15.42' y2='17.49' />
    <line x1='15.41' y1='6.51' x2='8.59' y2='10.49' />
  </BaseIcon>
))
export const IconCopy = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <rect x='9' y='9' width='13' height='13' rx='2' ry='2' />
    <path d='M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1' />
  </BaseIcon>
))
export const IconDownload = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4' />
    <polyline points='7 10 12 15 17 10' />
    <line x1='12' y1='15' x2='12' y2='3' />
  </BaseIcon>
))
export const IconUpload = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4' />
    <polyline points='17 8 12 3 7 8' />
    <line x1='12' y1='3' x2='12' y2='15' />
  </BaseIcon>
))
export const IconFilter = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <polygon points='22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3' />
  </BaseIcon>
))

// Media
export const IconPlay = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <polygon points='5 3 19 12 5 21 5 3' />
  </BaseIcon>
))
export const IconPause = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <rect x='6' y='4' width='4' height='16' />
    <rect x='14' y='4' width='4' height='16' />
  </BaseIcon>
))
export const IconStop = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <rect x='6' y='6' width='12' height='12' />
  </BaseIcon>
))
export const IconImage = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
    <circle cx='8.5' cy='8.5' r='1.5' />
    <polyline points='21 15 16 10 5 21' />
  </BaseIcon>
))
export const IconVideo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <polygon points='23 7 16 12 23 17 23 7' />
    <rect x='1' y='5' width='15' height='14' rx='2' ry='2' />
  </BaseIcon>
))
export const IconMusic = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M9 18V5l12-2v13' />
    <circle cx='6' cy='18' r='3' />
    <circle cx='18' cy='16' r='3' />
  </BaseIcon>
))
export const IconVolumeOn = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
    <path d='M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07' />
  </BaseIcon>
))
export const IconVolumeOff = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
    <line x1='23' y1='9' x2='17' y2='15' />
    <line x1='17' y1='9' x2='23' y2='15' />
  </BaseIcon>
))

// Social/Communications
export const IconMail = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
    <polyline points='22,6 12,13 2,6' />
  </BaseIcon>
))
export const IconMessage = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z' />
  </BaseIcon>
))
export const IconPhone = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z' />
  </BaseIcon>
))
export const IconHeart = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z' />
  </BaseIcon>
))
export const IconStar = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
  </BaseIcon>
))
export const IconCloud = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z' />
  </BaseIcon>
))
export const IconWifi = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <path d='M5 12.55a11 11 0 0114.08 0' />
    <path d='M1.42 9a16 16 0 0121.16 0' />
    <path d='M8.53 16.11a6 6 0 016.95 0' />
    <line x1='12' y1='20' x2='12.01' y2='20' />
  </BaseIcon>
))
export const IconBattery = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} ref={ref}>
    <rect x='1' y='6' width='18' height='12' rx='2' ry='2' />
    <line x1='23' y1='13' x2='23' y2='11' />
  </BaseIcon>
))

export const IconLoading = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <BaseIcon {...props} spin={props.spin ?? true} ref={ref}>
    <path d='M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83' />
  </BaseIcon>
))

// Namespace export
export const Icons = {
  // Arrows
  ArrowUp: IconArrowUp,
  ArrowDown: IconArrowDown,
  ArrowLeft: IconArrowLeft,
  ArrowRight: IconArrowRight,
  ChevronUp: IconChevronUp,
  ChevronDown: IconChevronDown,
  ChevronLeft: IconChevronLeft,
  ChevronRight: IconChevronRight,
  // Interface
  Check: IconCheck,
  Cross: IconCross,
  Plus: IconPlus,
  Minus: IconMinus,
  Info: IconInfo,
  Warning: IconWarning,
  Help: IconHelp,
  Alert: IconAlert,
  Menu: IconMenu,
  Search: IconSearch,
  Close: IconClose,
  Home: IconHome,
  Settings: IconSettings,
  User: IconUser,
  Trash: IconTrash,
  ExternalLink: IconExternalLink,
  // Editor
  Save: IconSave,
  Edit: IconEdit,
  Delete: IconDelete,
  Share: IconShare,
  Copy: IconCopy,
  Download: IconDownload,
  Upload: IconUpload,
  Filter: IconFilter,
  // Media
  Play: IconPlay,
  Pause: IconPause,
  Stop: IconStop,
  Image: IconImage,
  Video: IconVideo,
  Music: IconMusic,
  VolumeOn: IconVolumeOn,
  VolumeOff: IconVolumeOff,
  // Social
  Mail: IconMail,
  Message: IconMessage,
  Phone: IconPhone,
  Heart: IconHeart,
  Star: IconStar,
  Cloud: IconCloud,
  Wifi: IconWifi,
  Battery: IconBattery,
  // Loading
  Loading: IconLoading,
}
