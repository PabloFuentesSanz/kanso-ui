import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Check, Plus, Search } from 'lucide-react';
import {
  CodeBlock,
  CopyToken,
  DocSection,
  DocsLayout,
  Example,
  ScreenHeader,
} from '../../../stories/_components';
import { IconButton } from './IconButton';
import * as s from './IconButton.stories.css';

const IconButtonOverview = () => (
  <DocsLayout>
    <ScreenHeader
      eyebrow="寛素UI · Actions"
      title="Icon button"
      tagline="A 32px target carrying a single Lucide icon at 16px and 1.5px stroke. Used in toolbars, list rows and beside titles. Never a primary action — it has no visible label, so `aria-label` is required at the type level."
      kanji="点"
    />

    <div className={s.importBlock}>
      <CodeBlock label="ts" language="tsx">{`import { IconButton } from 'kanso-ui';`}</CodeBlock>
    </div>

    <DocSection
      num="01 · Variants"
      heading="Ghost &amp; bordered"
      description="Ghost is the default — fades into the background until hover paints it with paper-2. Bordered wears a 0.5px ink-4 border so the target feels clickable even at rest, used in toolbars where the row of icons needs explicit edges."
    >
      <Example
        title="Ghost (default)"
        code={`import { Search } from 'lucide-react';

<IconButton aria-label="Search">
  <Search size={16} strokeWidth={1.5} />
</IconButton>`}
      >
        <IconButton aria-label="Search">
          <Search size={16} strokeWidth={1.5} />
        </IconButton>
        <IconButton aria-label="Add">
          <Plus size={16} strokeWidth={1.5} />
        </IconButton>
        <IconButton aria-label="Approve">
          <Check size={16} strokeWidth={1.5} />
        </IconButton>
      </Example>

      <Example
        title="Bordered"
        code={`import { Plus } from 'lucide-react';

<IconButton variant="bordered" aria-label="Add">
  <Plus size={16} strokeWidth={1.5} />
</IconButton>`}
      >
        <IconButton variant="bordered" aria-label="Add">
          <Plus size={16} strokeWidth={1.5} />
        </IconButton>
        <IconButton variant="bordered" aria-label="Next">
          <ArrowRight size={16} strokeWidth={1.5} />
        </IconButton>
      </Example>
    </DocSection>

    <DocSection
      num="02 · In context"
      heading="Toolbar"
      description="Sequence multiple icon buttons in a row with no gap — the visual rhythm of equal-sized hit targets is the structure. A 0.5px paper-3 divider can separate logical groups."
    >
      <Example
        title="Three actions and a divider"
        code={`<div className="toolbar">
  <IconButton aria-label="Search"><Search size={16} strokeWidth={1.5} /></IconButton>
  <IconButton aria-label="Add"><Plus size={16} strokeWidth={1.5} /></IconButton>
  <IconButton aria-label="Approve"><Check size={16} strokeWidth={1.5} /></IconButton>
  <span className="divider" />
  <IconButton aria-label="Next"><ArrowRight size={16} strokeWidth={1.5} /></IconButton>
</div>`}
      >
        <div className={s.toolbar}>
          <IconButton aria-label="Search">
            <Search size={16} strokeWidth={1.5} />
          </IconButton>
          <IconButton aria-label="Add">
            <Plus size={16} strokeWidth={1.5} />
          </IconButton>
          <IconButton aria-label="Approve">
            <Check size={16} strokeWidth={1.5} />
          </IconButton>
          <span className={s.toolbarDivider} />
          <IconButton aria-label="Next">
            <ArrowRight size={16} strokeWidth={1.5} />
          </IconButton>
        </div>
      </Example>
    </DocSection>

    <DocSection
      num="03 · API"
      heading="Props"
      description="IconButton forwards every standard <button> attribute. aria-label is required because the component renders no visible text."
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
          <span className={s.propType}>'ghost' | 'bordered'</span>
          <span className={s.propDesc}>
            Defaults to <code className={s.inlineCode}>ghost</code>.
          </span>
        </div>
        <div className={s.propRow}>
          <span className={s.propName}>
            <CopyToken value="aria-label" />
          </span>
          <span className={s.propType}>string (required)</span>
          <span className={s.propDesc}>
            The accessible name. TypeScript refuses to compile without it.
          </span>
        </div>
        <div className={s.propRow}>
          <span className={s.propName}>
            <CopyToken value="disabled" />
          </span>
          <span className={s.propType}>boolean</span>
          <span className={s.propDesc}>
            Standard. Drops opacity to 35% and removes pointer events.
          </span>
        </div>
        <div className={s.propRow}>
          <span className={s.propName}>...rest</span>
          <span className={s.propType}>ButtonHTMLAttributes</span>
          <span className={s.propDesc}>
            Every standard <code className={s.inlineCode}>&lt;button&gt;</code> attribute is forwarded.
          </span>
        </div>
      </div>
    </DocSection>
  </DocsLayout>
);

const meta = {
  title: 'Actions/Icon button',
  component: IconButtonOverview,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof IconButtonOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
