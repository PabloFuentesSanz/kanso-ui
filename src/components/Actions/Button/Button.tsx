import type { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { button, type ButtonVariants } from './Button.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

export const Button = ({ variant, className, type = 'button', ...props }: ButtonProps) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={clsx(button({ variant }), className)} {...props} />
);
