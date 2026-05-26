import type { Meta, StoryObj } from '@storybook/react';
import { Introduction } from './Introduction';

const meta = {
  component: Introduction,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Introduction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
