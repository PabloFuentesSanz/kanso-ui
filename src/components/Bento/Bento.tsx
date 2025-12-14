import { forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'
import { bentoStyles, bentoItemStyles } from './Bento.css'

export interface BentoProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns in the grid.
   * Mirrors valid CSS grid-template-columns.
   * @default '3'
   */
  columns?: '1' | '2' | '3' | '4' | '5' | '6' | '12'
  /**
   * Spacing between grid items. Uses Kanso spacing tokens.
   * @default 'md'
   */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  /** Vertical alignment of items */
  align?: 'start' | 'center' | 'end' | 'stretch'
  /** Horizontal alignment of items */
  justify?: 'start' | 'center' | 'end' | 'stretch'
  children: ReactNode
}

export interface BentoItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns this item should span.
   * @default '1'
   */
  span?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'full'
  /**
   * Number of rows this item should span.
   * @default '1'
   */
  rowSpan?: '1' | '2' | '3' | '4' | 'full'
  children: ReactNode
}

/**
 * **Bento (弁当)**
 *
 * A flexible grid layout inspired by Japanese bento boxes.
 * It provides a structured yet harmonious way to arrange content.
 *
 * @example
 * <Bento columns="3" gap="md">
 *   <BentoItem span="2">Main Content</BentoItem>
 *   <BentoItem>Sidebar</BentoItem>
 * </Bento>
 */
export const Bento = forwardRef<HTMLDivElement, BentoProps>(
  (
    {
      columns = '3',
      gap = 'md',
      align = 'stretch',
      justify = 'stretch',
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
          bentoStyles({
            columns,
            gap,
            align,
            justify,
          }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

/**
 * **BentoItem**
 *
 * An individual compartment within the Bento box.
 * Can span multiple columns or rows.
 */
export const BentoItem = forwardRef<HTMLDivElement, BentoItemProps>(
  ({ span = '1', rowSpan = '1', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          bentoItemStyles({
            span,
            rowSpan,
          }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

// Aliases for developer familiarity
export const Grid = Bento
export const GridItem = BentoItem

Bento.displayName = 'Bento'
BentoItem.displayName = 'BentoItem'