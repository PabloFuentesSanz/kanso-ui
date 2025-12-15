import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
    },
    docs: {
      page: null,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const GetStarted: Story = {
  render: () => (
    <div
      style={{
        padding: '2rem 4rem',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: 1.6,
        color: '#374151',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #fb7185, #c084fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
          }}
        >
          Kanso UI (簡素) 🌸
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          A unique, minimalist React component library emphasizing harmony and simplicity. Inspired
          by the Japanese philosophy of <em>Kanso</em>—simplicity and naturalness.
        </p>
        <p
          style={{
            marginTop: '0.5rem',
            fontSize: '1rem',
            color: '#9ca3af',
            fontWeight: '500',
          }}
        >
          Developed fully by <strong>Pablo Fuentes Sanz</strong>.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }}
      >
        <div>
          <h2
            style={{
              color: '#1f2937',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
            }}
          >
            � Philosophy
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Kanso UI is not just a UI kit; it is a search for <strong>harmony</strong>. We believe
            that software should feel natural, like a calm garden.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>
              <strong>Minimalism</strong>: Eliminate the unnecessary to let the essential speak.
            </li>
            <li>
              <strong>Uniqueness</strong>: Distinctive aesthetics inspired by Japanese seasons and
              nature.
            </li>
            <li>
              <strong>Harmony</strong>: Colors and spacing that breathe together.
            </li>
          </ul>
        </div>

        <div>
          <h2
            style={{
              color: '#1f2937',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '1rem',
            }}
          >
            � Nihon no Iro (Colors of Japan)
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Our color system is handcrafted from traditional Japanese colors.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { name: 'Sakura (Cherry Blossom)', hex: '#f63d68', desc: 'Spring renewal' },
              { name: 'Wasabi (Nature)', hex: '#22c55e', desc: 'Vitality' },
              { name: 'Sora (Sky)', hex: '#0ea5e9', desc: 'Openness' },
              { name: 'Indigo (Deep Blue)', hex: '#6366f1', desc: 'Depth' },
              { name: 'Mikan (Mandarin)', hex: '#f97316', desc: 'Energy' },
            ].map(({ name, hex, desc }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: hex,
                    borderRadius: '50%',
                    border: '2px solid rgba(0,0,0,0.1)',
                  }}
                />
                <div>
                  <strong>{name}</strong> - <span style={{ color: '#6b7280' }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#f9fafb',
          padding: '2rem',
          borderRadius: '0.5rem',
          marginBottom: '3rem',
          border: '1px solid #e5e7eb',
        }}
      >
        <h2
          style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}
        >
          🚀 Getting Started
        </h2>

        <p style={{ marginBottom: '1rem' }}>Ready to bring harmony to your app?</p>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
          1. Installation
        </h3>
        <pre
          style={{
            backgroundColor: '#1f2937',
            color: '#f3f4f6',
            padding: '1rem',
            borderRadius: '0.375rem',
            overflow: 'auto',
            marginBottom: '1.5rem',
          }}
        >
          <code>npm install kanso-ui</code>
        </pre>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
          2. Basic Usage
        </h3>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4b5563' }}>
          Import the stylesheet and use components. You can use our variables for custom styling.
        </p>
        <pre
          style={{
            backgroundColor: '#1f2937',
            color: '#f3f4f6',
            padding: '1rem',
            borderRadius: '0.375rem',
            overflow: 'auto',
            fontSize: '0.875rem',
            lineHeight: '1.5',
          }}
        >
          <code>{`import { Button, Input, themeClass, vars } from 'kanso-ui'
import 'kanso-ui/dist/index.css';

function App() {
  return (
    // Apply the theme class to the root
    <div className={themeClass}>
      <h1>Welcome to Kanso</h1>
      
      <div style={{ display: 'flex', gap: vars.spacing[4] }}>
          <Button color="sakura" variant="filled">
            Bloom
          </Button>
          
          <Button color="sora" variant="outline">
            Fly
          </Button>
      </div>

      <div style={{ marginTop: vars.spacing[8] }}>
          <Input 
            color="wasabi" 
            placeholder="Search harmony..." 
          />
      </div>
    </div>
  )
}`}</code>
        </pre>

        <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#6b7280' }}>
          <strong>Note:</strong> We recommend using <code>vars.color</code> for type-safety when
          styling your own components.
        </div>
      </div>

      <div
        style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '2rem',
          borderTop: '1px solid #e5e7eb',
          backgroundColor: '#fdf2f8',
        }}
      >
        <p
          style={{
            color: '#be185d',
            fontStyle: 'italic',
            fontSize: '1.2rem',
            marginBottom: '1rem',
          }}
        >
          "Eliminate the unnecessary to let the essential speak."
        </p>
        <p style={{ fontSize: '1rem', color: '#374151' }}>
          Developed with ❤️ by{' '}
          <a
            href='https://github.com/PabloFuentesSanz'
            style={{ color: '#db2777', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Pablo Fuentes Sanz
          </a>
        </p>
        <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginTop: '0.5rem' }}>
          © {new Date().getFullYear()} Kanso UI Project
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}
