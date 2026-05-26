import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import * as s from './CopyToken.css';

type Props = {
  /** The string to copy when the button is clicked. */
  value: string;
  /** Optional override for the visible text (defaults to `value`). */
  children?: string;
};

export const CopyToken = ({ value, children }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!navigator.clipboard?.writeText) return;
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {});
  };

  return (
    <button
      type="button"
      className={s.button}
      onClick={handleCopy}
      aria-label={copied ? `Copied ${value}` : `Copy ${value}`}
    >
      <span>{children ?? value}</span>
      <span className={`${s.icon}${copied ? ` ${s.iconCopied}` : ''}`}>
        {copied ? <Check size={11} strokeWidth={1.5} /> : <Copy size={11} strokeWidth={1.5} />}
      </span>
    </button>
  );
};
