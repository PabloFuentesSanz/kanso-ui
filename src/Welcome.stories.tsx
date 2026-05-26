import type { Meta, StoryObj } from '@storybook/react';

const Welcome = () => (
  <div style={{ padding: '4rem', fontFamily: 'system-ui, sans-serif' }}>
    <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 600 }}>kanso-ui</h1>
    <p style={{ marginTop: '1rem', color: '#666' }}>
      Greenfield. Empieza a añadir componentes en <code>src/</code>.
    </p>
  </div>
);

const meta: Meta<typeof Welcome> = {
  title: 'Welcome',
  component: Welcome,
};

export default meta;

export const Default: StoryObj<typeof Welcome> = {};
