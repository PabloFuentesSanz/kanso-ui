import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { badge, type BadgeVariants } from './Badge.css';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & BadgeVariants;

export const Badge = ({ tone, className, ...props }: BadgeProps) => (
  <span className={clsx(badge({ tone }), className)} {...props} />
);
