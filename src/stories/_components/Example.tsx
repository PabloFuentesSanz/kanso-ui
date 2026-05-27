import type { ReactNode } from 'react';
import type { Language } from 'prism-react-renderer';
import { CodeBlock } from './CodeBlock';
import * as s from './Example.css';

type Props = {
  /** Short uppercase eyebrow above the preview. */
  title?: string;
  /** Body description below the title. */
  description?: ReactNode;
  /** Source code rendered in the CodeBlock under the preview. */
  code: string;
  /** Prism grammar for highlighting. Defaults to tsx. */
  language?: Language;
  /** Visible label on the code block (defaults to language). */
  codeLabel?: string;
  /** Live preview content rendered on the paper-2 surface above the code. */
  children: ReactNode;
};

/**
 * Component documentation example — a live preview on a paper-2 surface
 * with the matching source code rendered immediately below in a CodeBlock.
 * Use one Example per concrete demonstration ("Default", "With trailing
 * icon", "Confirm action", …) so each gets its own copyable snippet.
 */
export const Example = ({
  title,
  description,
  code,
  language = 'tsx',
  codeLabel,
  children,
}: Props) => (
  <div className={s.example}>
    {(title || description) && (
      <div className={s.head}>
        {title && <span className={s.title}>{title}</span>}
        {description && <p className={s.desc}>{description}</p>}
      </div>
    )}
    <div className={s.preview}>{children}</div>
    <CodeBlock label={codeLabel} language={language}>
      {code}
    </CodeBlock>
  </div>
);
