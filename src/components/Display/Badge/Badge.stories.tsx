import type { Meta, StoryObj } from '@storybook/react';
import {
  CodeBlock,
  CopyToken,
  DocSection,
  DocsLayout,
  Example,
  ScreenHeader,
} from '../../../stories/_components';
import { Badge } from './Badge';
import * as s from './Badge.stories.css';

const BadgeOverview = () => (
  <DocsLayout>
    <ScreenHeader
      eyebrow="寛素UI · Display"
      title="Badge"
      tagline="A small inline status label — 11px text, 2px radius, tight 0.2rem padding. Four tones map onto the system's semantic palette: neutral, success, warning, error. Used inside list rows, table cells, and beside titles. Never as a primary accent."
      kanji="標"
    />

    <div className={s.importBlock}>
      <CodeBlock label="ts" language="tsx">{`import { Badge } from 'kanso-ui';`}</CodeBlock>
    </div>

    <DocSection
      num="01 · Tones"
      heading="Four semantic variants"
      description="Neutral is paper-2 with a paper-3 hairline border — the only tone that draws a visible edge. Success uses matcha, warning uses kogane, error uses beni — each paired with its pale companion surface."
    >
      <Example
        title="Neutral (default)"
        code={`<Badge>Draft</Badge>`}
      >
        <Badge>Draft</Badge>
      </Example>

      <Example
        title="Success"
        code={`<Badge tone="success">Saved</Badge>`}
      >
        <Badge tone="success">Saved</Badge>
      </Example>

      <Example
        title="Warning"
        code={`<Badge tone="warning">Pending</Badge>`}
      >
        <Badge tone="warning">Pending</Badge>
      </Example>

      <Example
        title="Error"
        code={`<Badge tone="error">Failed</Badge>`}
      >
        <Badge tone="error">Failed</Badge>
      </Example>
    </DocSection>

    <DocSection
      num="02 · In context"
      heading="Alongside content"
      description="Badge is an inline span — sits naturally beside text, inside table cells, or at the end of a list row."
    >
      <Example
        title="Status row"
        code={`<div>
  <span>release 0.2.0</span>
  <Badge tone="success">Saved</Badge>
  <Badge>Draft</Badge>
  <Badge tone="warning">Pending review</Badge>
  <Badge tone="error">Failed CI</Badge>
</div>`}
      >
        <span style={{ fontFamily: 'var(--kanso-mono)', fontSize: 13, color: 'var(--kanso-ink-2)' }}>release 0.2.0</span>
        <Badge tone="success">Saved</Badge>
        <Badge>Draft</Badge>
        <Badge tone="warning">Pending review</Badge>
        <Badge tone="error">Failed CI</Badge>
      </Example>
    </DocSection>

    <DocSection
      num="03 · API"
      heading="Props"
      description="Badge renders as a span and forwards every standard HTML attribute."
    >
      <div>
        <div className={s.propHeader}>
          <span>Prop</span>
          <span>Type</span>
          <span>Description</span>
        </div>
        <div className={s.propRow}>
          <span className={s.propName}>
            <CopyToken value="tone" />
          </span>
          <span className={s.propType}>'neutral' | 'success' | 'warning' | 'error'</span>
          <span className={s.propDesc}>
            Defaults to <code className={s.inlineCode}>neutral</code>.
          </span>
        </div>
        <div className={s.propRow}>
          <span className={s.propName}>...rest</span>
          <span className={s.propType}>HTMLAttributes&lt;HTMLSpanElement&gt;</span>
          <span className={s.propDesc}>
            Every standard <code className={s.inlineCode}>&lt;span&gt;</code> attribute is forwarded.
          </span>
        </div>
      </div>
    </DocSection>
  </DocsLayout>
);

const meta = {
  title: 'Display/Badge',
  component: BadgeOverview,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof BadgeOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
