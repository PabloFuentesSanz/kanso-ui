import type { Meta, StoryObj } from '@storybook/react';
import { Color } from './Color';

const meta = {
  component: Color,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
