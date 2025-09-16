import { forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'
import {
  kotatsuStyles,
  kotatsuTableStyles,
  kotatsuHeaderStyles,
  kotatsuHeaderCellStyles,
  kotatsuBodyStyles,
  kotatsuRowStyles,
  kotatsuCellStyles,
  kotatsuFooterStyles,
} from './Kotatsu.css'

export interface KotatsuProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'sky' | 'lavender' | 'sage' | 'amber' | 'coral'
  variant?: 'default' | 'outlined' | 'filled' | 'elevated'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export interface KotatsuHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}

export interface KotatsuHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right'
  children: ReactNode
}

export interface KotatsuBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}

export interface KotatsuRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  interactive?: boolean
  children: ReactNode
}

export interface KotatsuCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export interface KotatsuFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Kotatsu = forwardRef<HTMLDivElement, KotatsuProps>(
  (
    {
      color = 'sky',
      variant = 'default',
      size = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          kotatsuStyles({
            color,
            variant,
            size,
          }),
          className
        )}
        {...props}
      >
        <table className={kotatsuTableStyles()}>
          {children}
        </table>
      </div>
    )
  }
)

export const KotatsuHeader = forwardRef<HTMLTableSectionElement, KotatsuHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={clsx(kotatsuHeaderStyles(), className)}
        {...props}
      >
        {children}
      </thead>
    )
  }
)

export const KotatsuHeaderCell = forwardRef<HTMLTableCellElement, KotatsuHeaderCellProps>(
  ({ align = 'left', className, children, ...props }, ref) => {
    return (
      <th
        ref={ref}
        className={clsx(
          kotatsuHeaderCellStyles({ align }),
          className
        )}
        {...props}
      >
        {children}
      </th>
    )
  }
)

export const KotatsuBody = forwardRef<HTMLTableSectionElement, KotatsuBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        className={clsx(kotatsuBodyStyles(), className)}
        {...props}
      >
        {children}
      </tbody>
    )
  }
)

export const KotatsuRow = forwardRef<HTMLTableRowElement, KotatsuRowProps>(
  ({ interactive = false, className, children, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={clsx(
          kotatsuRowStyles({ interactive }),
          className
        )}
        {...props}
      >
        {children}
      </tr>
    )
  }
)

export const KotatsuCell = forwardRef<HTMLTableCellElement, KotatsuCellProps>(
  ({ align = 'left', size = 'md', className, children, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={clsx(
          kotatsuCellStyles({ align, size }),
          className
        )}
        {...props}
      >
        {children}
      </td>
    )
  }
)

export const KotatsuFooter = forwardRef<HTMLDivElement, KotatsuFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(kotatsuFooterStyles(), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

// Aliases for developer familiarity
export const Table = Kotatsu
export const TableHeader = KotatsuHeader
export const TableHeaderCell = KotatsuHeaderCell
export const TableBody = KotatsuBody
export const TableRow = KotatsuRow
export const TableCell = KotatsuCell
export const TableFooter = KotatsuFooter

Kotatsu.displayName = 'Kotatsu'
KotatsuHeader.displayName = 'KotatsuHeader'
KotatsuHeaderCell.displayName = 'KotatsuHeaderCell'
KotatsuBody.displayName = 'KotatsuBody'
KotatsuRow.displayName = 'KotatsuRow'
KotatsuCell.displayName = 'KotatsuCell'
KotatsuFooter.displayName = 'KotatsuFooter'