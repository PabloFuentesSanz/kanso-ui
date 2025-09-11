import { forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'
import { bentoStyles, bentoItemStyles } from './Bento.css'

export interface BentoProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: '1' | '2' | '3' | '4' | '5' | '6' | '12'
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'stretch'
  children: ReactNode
}

export interface BentoItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  rowSpan?: '1' | '2' | '3' | '4'
  children: ReactNode
}

export const Bento = forwardRef<HTMLDivElement, BentoProps>(
  (
    {
      columns = '12',
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

export const BentoItem = forwardRef<HTMLDivElement, BentoItemProps>(
  ({ span = '1', rowSpan, className, children, ...props }, ref) => {
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