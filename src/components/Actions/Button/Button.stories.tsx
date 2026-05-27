import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Check, Plus } from 'lucide-react';
import { CopyToken, DocSection, DocsLayout, ScreenHeader } from '../../../stories/_components';
import { colorVars, vars } from '../../../tokens';
import { Button } from './Button';

const row: React.CSSProperties = {
  display: 'flex',
  gap: vars.space[3],
  alignItems: 'center',
  flexWrap: 'wrap',
};

const stateRow: React.CSSProperties = {
  display: 'flex',
  gap: vars.space[5],
  alignItems: 'flex-start',
  flexWrap: 'wrap',
};

const stateCell: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space[2],
};

const stateLabel: React.CSSProperties = {
  fontFamily: vars.font.mono,
  fontSize: '11px',
  color: colorVars.color.ink3,
};

const propRow: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '160px 240px 1fr',
  gap: vars.space[4],
  alignItems: 'baseline',
  padding: `${vars.space[3]} 0`,
  borderTop: `${vars.borderWidth.hair} solid ${colorVars.color.paper3}`,
};

const propHeader: React.CSSProperties = {
  ...propRow,
  borderTop: 'none',
  fontFamily: vars.font.sans,
  fontSize: vars.fontSize.micro,
  fontWeight: vars.fontWeight.regular,
  letterSpacing: vars.letterSpacing.micro,
  textTransform: 'uppercase',
  color: colorVars.color.ink4,
};

const propName: React.CSSProperties = {
  fontFamily: vars.font.mono,
  fontSize: '12px',
  color: colorVars.color.ink,
};

const propType: React.CSSProperties = {
  fontFamily: vars.font.mono,
  fontSize: '11px',
  color: colorVars.color.ink3,
};

const propDesc: React.CSSProperties = {
  fontFamily: vars.font.sans,
  fontWeight: vars.fontWeight.light,
  fontSize: vars.fontSize.body,
  color: colorVars.color.ink2,
};

const ButtonOverview = () => (
  <DocsLayout>
    <ScreenHeader
      eyebrow="寛素UI · Actions"
      title="Button"
      tagline="Five variants in a strict hierarchy — primary, accent, secondary, ghost and destructive. A single primary per screen. Hover dims to 75% opacity; active scales to 0.98. No long transitions, no spring, no glow."
      kanji="押"
    />

    <DocSection
      num="01 · Primary"
      heading="Primary — one per screen"
      description="The single most important action on the surface. Ink on paper. Never repeated within a single view — if you find yourself reaching for a second, one of them is not actually primary."
    >
      <div style={row}>
        <Button variant="primary">Save changes</Button>
        <Button variant="primary">
          Continue <ArrowRight size={16} strokeWidth={1.5} />
        </Button>
      </div>
    </DocSection>

    <DocSection
      num="02 · Accent"
      heading="Accent — affirmative confirmations"
      description="Matcha background. Reserved for confirmations — approving, signing, sending. The accent token swaps with the active theme so every accent surface tints together."
    >
      <div style={row}>
        <Button variant="accent">Confirm</Button>
        <Button variant="accent">
          <Check size={16} strokeWidth={1.5} /> Approve
        </Button>
      </div>
    </DocSection>

    <DocSection
      num="03 · Supporting"
      heading="Secondary, ghost and destructive"
      description="Secondary carries the supporting action — Cancel beside Save. Ghost is for tertiary moments that should feel optional. Destructive renders in beni and uses the smaller ghost-sized box — never as a primary."
    >
      <div style={row}>
        <Button variant="secondary">Cancel</Button>
        <Button variant="secondary">
          <Plus size={16} strokeWidth={1.5} /> Add another
        </Button>
        <Button variant="ghost">Skip for now</Button>
        <Button variant="destructive">Delete account</Button>
      </div>
    </DocSection>

    <DocSection
      num="04 · States"
      heading="States"
      description="Hover dims to 75% opacity. Active scales to 0.98. Disabled drops to 35% and ignores pointer events. Focus uses a 1px outline at 2px offset — no glow."
    >
      <div style={stateRow}>
        <span style={stateCell}>
          <Button variant="primary">Save</Button>
          <span style={stateLabel}>default</span>
        </span>
        <span style={stateCell}>
          <Button variant="primary" disabled>
            Save
          </Button>
          <span style={stateLabel}>disabled</span>
        </span>
        <span style={stateCell}>
          <Button variant="secondary">Cancel</Button>
          <span style={stateLabel}>secondary</span>
        </span>
        <span style={stateCell}>
          <Button variant="secondary" disabled>
            Cancel
          </Button>
          <span style={stateLabel}>secondary, disabled</span>
        </span>
      </div>
    </DocSection>

    <DocSection
      num="05 · API"
      heading="Props"
      description="Button forwards every standard <button> attribute. The only kanso-specific prop is the variant."
    >
      <div>
        <div style={propHeader}>
          <span>Prop</span>
          <span>Type</span>
          <span>Description</span>
        </div>
        <div style={propRow}>
          <span style={propName}>
            <CopyToken value="variant" />
          </span>
          <span style={propType}>
            'primary' | 'accent' | 'secondary' | 'ghost' | 'destructive'
          </span>
          <span style={propDesc}>Visual hierarchy. Defaults to <code style={{ fontFamily: vars.font.mono, fontSize: '12px' }}>primary</code>.</span>
        </div>
        <div style={propRow}>
          <span style={propName}>
            <CopyToken value="disabled" />
          </span>
          <span style={propType}>boolean</span>
          <span style={propDesc}>Standard. Drops opacity to 35% and disables pointer events.</span>
        </div>
        <div style={propRow}>
          <span style={propName}>
            <CopyToken value="type" />
          </span>
          <span style={propType}>'button' | 'submit' | 'reset'</span>
          <span style={propDesc}>Defaults to <code style={{ fontFamily: vars.font.mono, fontSize: '12px' }}>button</code> so the component never accidentally submits a parent form.</span>
        </div>
        <div style={propRow}>
          <span style={propName}>...rest</span>
          <span style={propType}>ButtonHTMLAttributes</span>
          <span style={propDesc}>Every standard <code style={{ fontFamily: vars.font.mono, fontSize: '12px' }}>&lt;button&gt;</code> attribute (onClick, aria-*, form, name, …) is forwarded.</span>
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
