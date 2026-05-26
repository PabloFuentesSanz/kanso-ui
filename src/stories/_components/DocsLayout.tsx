import type { ReactNode } from 'react';
import * as s from './DocsLayout.css';

type Props = { children: ReactNode };

export const DocsLayout = ({ children }: Props) => (
  <article className={s.page}>{children}</article>
);
