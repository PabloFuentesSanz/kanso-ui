import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { card, type CardVariants } from './Card.css';

export type CardProps = HTMLAttributes<HTMLDivElement> & CardVariants;

export const Card = ({ variant, className, ...props }: CardProps) => (
  <div className={clsx(card({ variant }), className)} {...props} />
);
