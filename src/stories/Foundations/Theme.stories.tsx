import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from './Theme';

const meta = {
  component: Theme,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Theme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
