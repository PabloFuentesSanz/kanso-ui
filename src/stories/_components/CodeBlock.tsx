import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Highlight, type Language } from 'prism-react-renderer';
import { kansoCodeTheme } from './codeTheme';
import * as s from './CodeBlock.css';

type Props = {
  /** Visible label in the top-right (e.g. "npm", "ts"). Falls back to the language. */
  label?: string;
  /** Prism language for syntax highlighting. Defaults to `tsx`. */
  language?: Language;
  children: string;
};

export const CodeBlock = ({ label, language = 'tsx', children }: Props) => {
  const [copied, setCopied] = useState(false);
  const code = children.replace(/\n$/, '');

  const handleCopy = () => {
    if (!navigator.clipboard?.writeText) return;
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {});
  };

  const tag = label ?? language;

  return (
    <div className={s.wrapper}>
      <div className={s.toolbar}>
        <span className={s.lang}>{tag}</span>
        <button
          type="button"
          className={s.copy}
          onClick={handleCopy}
          aria-label={copied ? 'Copied' : 'Copy code'}
        >
          {copied ? <Check size={14} strokeWidth={1.5} /> : <Copy size={14} strokeWidth={1.5} />}
        </button>
      </div>
      <Highlight code={code} language={language} theme={kansoCodeTheme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${s.pre} ${className}`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};
