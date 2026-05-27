import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Check, Plus } from 'lucide-react';
import {
  CodeBlock,
  CopyToken,
  DocSection,
  DocsLayout,
  Example,
  ScreenHeader,
} from '../../../stories/_components';
import { vars } from '../../../tokens';
import { Button } from './Button';
import * as s from './Button.stories.css';

const ButtonOverview = () => (
  <DocsLayout>
    <ScreenHeader
      eyebrow="寛素UI · Actions"
      title="Button"
      tagline="Five variants in a strict hierarchy — primary, accent, secondary, ghost and destructive. A single primary per screen. Hover dims to 75% opacity; active scales to 0.98. No long transitions, no spring, no glow."
      kanji="押"
    />

    <div className={s.importBlock}>
      <CodeBlock label="ts" language="tsx">{`import { Button } from 'kanso-ui';`}</CodeBlock>
    </div>

    <DocSection
      num="01 · Primary"
      heading="Primary — one per screen"
      description="The single most important action on the surface. Ink on paper. Never repeated within a single view — if you find yourself reaching for a second, one of them is not actually primary."
    >
      <Example
        title="Default"
        description="A plain primary button — variant defaults to 'primary' so it can be omitted."
        code={`<Button>Save changes</Button>`}
      >
        <Button>Save changes</Button>
      </Example>

      <Example
        title="With trailing icon"
        description="Lucide outline at 16px and 1.5px stroke. Icon inherits currentColor; gap between label and icon is space[2] (8px)."
        code={`import { ArrowRight } from 'lucide-react';

<Button>
  Continue <ArrowRight size={16} strokeWidth={1.5} />
</Button>`}
      >
        <Button>
          Continue <ArrowRight size={16} strokeWidth={1.5} />
        </Button>
      </Example>
    </DocSection>

    <DocSection
      num="02 · Accent"
      heading="Accent — affirmative confirmations"
      description="Matcha background. Reserved for confirmations — approving, signing, sending. The accent token swaps with the active theme so every accent surface tints together."
    >
      <Example
        title="Confirm action"
        code={`<Button variant="accent">Confirm</Button>`}
      >
        <Button variant="accent">Confirm</Button>
      </Example>

      <Example
        title="With leading icon"
        code={`import { Check } from 'lucide-react';

<Button variant="accent">
  <Check size={16} strokeWidth={1.5} /> Approve
</Button>`}
      >
        <Button variant="accent">
          <Check size={16} strokeWidth={1.5} /> Approve
        </Button>
      </Example>
    </DocSection>

    <DocSection
      num="03 · Supporting"
      heading="Secondary, ghost and destructive"
      description="Secondary carries the supporting action — Cancel beside Save. Ghost is for tertiary moments that should feel optional. Destructive renders in beni and uses the smaller ghost-sized box — never as a primary."
    >
      <Example
        title="Secondary"
        description="Transparent background with a 0.5px ink-4 border; hover darkens the border instead of fading."
        code={`import { Plus } from 'lucide-react';

<Button variant="secondary">Cancel</Button>
<Button variant="secondary">
  <Plus size={16} strokeWidth={1.5} /> Add another
</Button>`}
      >
        <Button variant="secondary">Cancel</Button>
        <Button variant="secondary">
          <Plus size={16} strokeWidth={1.5} /> Add another
        </Button>
      </Example>

      <Example
        title="Ghost"
        description="No border. Smaller padding and 12px text — fits in lists and table rows without dominating the row."
        code={`<Button variant="ghost">Skip for now</Button>`}
      >
        <Button variant="ghost">Skip for now</Button>
      </Example>

      <Example
        title="Destructive"
        description="Beni red, same compact box as ghost. Used for irreversible actions; never the only action on the surface."
        code={`<Button variant="destructive">Delete account</Button>`}
      >
        <Button variant="destructive">Delete account</Button>
      </Example>
    </DocSection>

    <DocSection
      num="04 · States"
      heading="States"
      description="Hover dims to 75% opacity. Active scales to 0.98. Disabled drops to 35% and ignores pointer events. Focus uses a 1px outline at 2px offset — no glow."
    >
      <div className={s.stateRow}>
        <span className={s.stateCell}>
          <Button>Save</Button>
          <span className={s.stateLabel}>default</span>
        </span>
        <span className={s.stateCell}>
          <Button disabled>Save</Button>
          <span className={s.stateLabel}>disabled</span>
        </span>
        <span className={s.stateCell}>
          <Button variant="secondary">Cancel</Button>
          <span className={s.stateLabel}>secondary</span>
        </span>
        <span className={s.stateCell}>
          <Button variant="secondary" disabled>
            Cancel
          </Button>
          <span className={s.stateLabel}>secondary, disabled</span>
        </span>
      </div>

      <div style={{ marginTop: vars.space[4] }}>
        <CodeBlock label="ts" language="tsx">{`<Button disabled>Save</Button>`}</CodeBlock>
      </div>
    </DocSection>

    <DocSection
      num="05 · API"
      heading="Props"
      description="Button forwards every standard <button> attribute. The only kanso-specific prop is the variant."
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
          <span className={s.propType}>
            'primary' | 'accent' | 'secondary' | 'ghost' | 'destructive'
          </span>
          <span className={s.propDesc}>
            Visual hierarchy. Defaults to <code className={s.inlineCode}>primary</code>.
          </span>
        </div>
        <div className={s.propRow}>
          <span className={s.propName}>
            <CopyToken value="disabled" />
          </span>
          <span className={s.propType}>boolean</span>
          <span className={s.propDesc}>
            Standard. Drops opacity to 35% and disables pointer events.
          </span>
        </div>
        <div className={s.propRow}>
          <span className={s.propName}>
            <CopyToken value="type" />
          </span>
          <span className={s.propType}>'button' | 'submit' | 'reset'</span>
          <span className={s.propDesc}>
            Defaults to <code className={s.inlineCode}>button</code> so the component never accidentally submits a parent form.
          </span>
        </div>
        <div className={s.propRow}>
          <span className={s.propName}>...rest</span>
          <span className={s.propType}>ButtonHTMLAttributes</span>
          <span className={s.propDesc}>
            Every standard <code className={s.inlineCode}>&lt;button&gt;</code> attribute (onClick, aria-*, form, name, …) is forwarded.
          </span>
        </div>
      </div>
    </DocSection>
  </DocsLayout>
);

const meta = {
  title: 'Actions/Button',
  component: ButtonOverview,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ButtonOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
