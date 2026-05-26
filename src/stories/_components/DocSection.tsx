import type { ReactNode } from 'react';
import * as s from './DocSection.css';

type Props = {
  num: string;
  heading: string;
  description?: ReactNode;
  children: ReactNode;
};

export const DocSection = ({ num, heading, description, children }: Props) => (
  <section className={s.section}>
    <div className={s.head}>
      <div className={s.label}>
        <span className={s.num}>{num}</span>
        <h2 className={s.heading}>{heading}</h2>
      </div>
      {description ? <p className={s.desc}>{description}</p> : null}
    </div>
    {children}
  </section>
);
