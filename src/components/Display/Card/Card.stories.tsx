import type { Meta, StoryObj } from '@storybook/react';
import { MoreHorizontal } from 'lucide-react';
import {
  CodeBlock,
  CopyToken,
  DocSection,
  DocsLayout,
  Example,
  ScreenHeader,
} from '../../../stories/_components';
import { Badge } from '../Badge/Badge';
import { Button } from '../../Actions/Button/Button';
import { IconButton } from '../../Actions/IconButton/IconButton';
import { Card } from './Card';
import * as s from './Card.stories.css';

const CardOverview = () => (
  <DocsLayout>
    <ScreenHeader
      eyebrow="寛素UI · Display"
      title="Card"
      tagline="The canonical surface container — 0.5px paper-3 border, 4px radius, generous interior padding. Elevation is read from the surface tint (paper-2), never a shadow. Children stack as a flex column with a space-3 gap, so dropping headings, body and actions inside gives you rhythm for free."
      kanji="札"
    />

    <div className={s.importBlock}>
      <CodeBlock label="ts" language="tsx">{`import { Card } from 'kanso-ui';`}</CodeBlock>
    </div>

    <DocSection
      num="01 · Surface"
      heading="Default &amp; elevated"
      description="Default sits on paper with a paper-3 hairline. Elevated lifts to paper-2 — the same surface inputs use — to feel one layer above the page without a shadow."
    >
      <Example
        title="Default"
        code={`<Card>
  <h3>Quiet release</h3>
  <p>A small change, intentionally unannounced.</p>
</Card>`}
      >
        <Card>
          <h3 className={s.cardTitle}>Quiet release</h3>
          <p className={s.cardBody}>A small change, intentionally unannounced.</p>
        </Card>
      </Example>

      <Example
        title="Elevated"
        code={`<Card variant="elevated">
  <h3>Pinned</h3>
  <p>This card sits a step above the page.</p>
</Card>`}
      >
        <Card variant="elevated">
          <h3 className={s.cardTitle}>Pinned</h3>
          <p className={s.cardBody}>This card sits a step above the page.</p>
        </Card>
      </Example>
    </DocSection>

    <DocSection
      num="02 · Composition"
      heading="With header, body and actions"
      description="Card has no compound API — direct children just stack with the flex gap. Drop a Badge or IconButton in the header row, body copy in the middle, Button group at the bottom."
    >
      <Example
        title="Release card"
        code={`<Card>
  <div className="row">
    <h3>release 2.0.0</h3>
    <Badge tone="success">Saved</Badge>
  </div>
  <p>Token layer and Foundations docs. Components ship in 2.x.</p>
  <div className="actions">
    <Button variant="primary">Read changelog</Button>
    <Button variant="ghost">Dismiss</Button>
  </div>
</Card>`}
      >
        <Card style={{ maxWidth: 420 }}>
          <div className={s.cardHeaderRow}>
            <h3 className={s.cardTitle}>release 2.0.0</h3>
            <Badge tone="success">Saved</Badge>
          </div>
          <p className={s.cardBody}>
            Token layer and Foundations docs. Components ship in 2.x.
          </p>
          <div className={s.cardActions}>
            <Button variant="primary">Read changelog</Button>
            <Button variant="ghost">Dismiss</Button>
          </div>
        </Card>
      </Example>

      <Example
        title="With icon-button menu"
        code={`<Card>
  <div className="row">
    <h3>Project notes</h3>
    <IconButton aria-label="More"><MoreHorizontal size={16} /></IconButton>
  </div>
  <p>Use the menu button for secondary actions on the row.</p>
</Card>`}
      >
        <Card style={{ maxWidth: 420 }}>
          <div className={s.cardHeaderRow}>
            <h3 className={s.cardTitle}>Project notes</h3>
            <IconButton aria-label="More">
              <MoreHorizontal size={16} strokeWidth={1.5} />
            </IconButton>
          </div>
          <p className={s.cardBody}>
            Use the menu button for secondary actions on the row.
          </p>
        </Card>
      </Example>
    </DocSection>

    <DocSection
      num="03 · In a grid"
      heading="Card row"
      description="Cards drop into an intrinsic grid (auto-fill minmax) so the row reflows from three across to one on mobile without a media query."
    >
      <div className={s.cardRow}>
        <Card>
          <h3 className={s.cardTitle}>Foundations</h3>
          <p className={s.cardBody}>Tokens, theme, color, type, layout.</p>
        </Card>
        <Card>
          <h3 className={s.cardTitle}>Actions</h3>
          <p className={s.cardBody}>Button, icon button, button group, link.</p>
        </Card>
        <Card>
          <h3 className={s.cardTitle}>Display</h3>
          <p className={s.cardBody}>Badge, card, list, table, tooltip, kbd.</p>
        </Card>
      </div>
    </DocSection>

    <DocSection
      num="04 · API"
      heading="Props"
      description="Card renders as a div and forwards every standard HTML attribute."
    >
      <div>
        <div className={s.propHeader}>
          <span>Prop</span>
          <span>Type</span>
          <span>Description</span>
        </div>
        <div className={s.propRow}>
          <span className={s.propName}>
            <CopyToken value="variant" />
          </span>
          <span className={s.propType}>'default' | 'elevated'</span>
          <span className={s.propDesc}>
            Defaults to <code className={s.inlineCode}>default</code>. <code className={s.inlineCode}>elevated</code> swaps the surface to paper-2.
          </span>
        </div>
        <div className={s.propRow}>
          <span className={s.propName}>...rest</span>
          <span className={s.propType}>HTMLAttributes&lt;HTMLDivElement&gt;</span>
          <span className={s.propDesc}>
            Every standard <code className={s.inlineCode}>&lt;div&gt;</code> attribute is forwarded.
          </span>
        </div>
      </div>
    </DocSection>
  </DocsLayout>
);

const meta = {
  title: 'Display/Card',
  component: CardOverview,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof CardOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
