import * as s from './CodeBlock.css';

type Props = {
  lang?: string;
  children: string;
};

export const CodeBlock = ({ lang, children }: Props) => (
  <div className={s.wrapper}>
    {lang ? <span className={s.lang}>{lang}</span> : null}
    <pre className={s.pre}>{children}</pre>
  </div>
);
