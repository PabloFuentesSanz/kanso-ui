import type { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { iconButton, type IconButtonVariants } from './IconButton.css';

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> &
  IconButtonVariants & {
    /**
     * Required — an icon button has no visible label, so an accessible name
     * must come from `aria-label`. TypeScript will refuse to render the
     * component without it.
     */
    'aria-label': string;
  };

export const IconButton = ({
  variant,
  className,
  type = 'button',
  ...props
}: IconButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={clsx(iconButton({ variant }), className)} {...props} />
);
