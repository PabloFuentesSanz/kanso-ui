import type { ReactNode } from 'react';
import * as s from './ScreenHeader.css';

type Props = {
  eyebrow: string;
  title: ReactNode;
  tagline?: ReactNode;
  kanji: string;
};

export const ScreenHeader = ({ eyebrow, title, tagline, kanji }: Props) => (
  <header className={s.header}>
    <div className={s.text}>
      <span className={s.eyebrow}>{eyebrow}</span>
      <h1 className={s.title}>{title}</h1>
      {tagline ? <p className={s.tag}>{tagline}</p> : null}
    </div>
    <span className={s.kanji} aria-hidden="true">
      {kanji}
    </span>
  </header>
);
