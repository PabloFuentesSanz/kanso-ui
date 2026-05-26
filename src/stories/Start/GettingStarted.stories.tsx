import type { Meta, StoryObj } from '@storybook/react';
import { GettingStarted } from './GettingStarted';

const meta = {
  title: 'Start/Getting Started',
  component: GettingStarted,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof GettingStarted>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Page: Story = {};
