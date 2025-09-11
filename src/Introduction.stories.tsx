import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: '00-Introduction',
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
    <div style={{ 
      padding: '2rem 4rem', 
      maxWidth: '1200px', 
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      lineHeight: 1.6,
      color: '#374151'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '700',
          background: 'linear-gradient(135deg, #7dd3fc, #c084fc, #86efac, #fbbf24, #fb7185)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          Kanso UI 🌸
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: '#6b7280',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          A modern, minimalist React component library inspired by Japanese design principles
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
        <div>
          <h2 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
            🎨 Design Philosophy
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Kanso embraces the Japanese concept of simplicity and natural beauty. Our components feature:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Pastel Color Palette</strong>: Sky, Lavender, Sage, Amber, and Coral inspired by nature</li>
            <li><strong>Flexible Design</strong>: Mix and match colors with any variant style</li>
            <li><strong>Accessibility First</strong>: Built with a11y in mind</li>
            <li><strong>TypeScript Native</strong>: Fully typed for the best developer experience</li>
          </ul>
        </div>

        <div>
          <h2 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
            🎯 Color System
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              { name: 'Sky', desc: 'Calm blue tones', color: '#7dd3fc' },
              { name: 'Lavender', desc: 'Gentle purple hues', color: '#c084fc' },
              { name: 'Sage', desc: 'Natural green shades', color: '#86efac' },
              { name: 'Amber', desc: 'Warm orange tones', color: '#fbbf24' },
              { name: 'Coral', desc: 'Vibrant red accents', color: '#fb7185' },
            ].map(({ name, desc, color }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  width: '24px', 
                  height: '24px', 
                  backgroundColor: color, 
                  borderRadius: '50%',
                  border: '2px solid white',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }} />
                <div>
                  <strong>{name}</strong> - {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f9fafb', 
        padding: '2rem', 
        borderRadius: '0.5rem',
        marginBottom: '3rem'
      }}>
        <h2 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
          🚀 Getting Started
        </h2>
        
        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Installation</h3>
        <pre style={{ 
          backgroundColor: '#1f2937', 
          color: '#f3f4f6',
          padding: '1rem',
          borderRadius: '0.375rem',
          overflow: 'auto',
          marginBottom: '1.5rem'
        }}>
          <code>npm install kanso-ui</code>
        </pre>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Basic Usage</h3>
        <pre style={{ 
          backgroundColor: '#1f2937', 
          color: '#f3f4f6',
          padding: '1rem',
          borderRadius: '0.375rem',
          overflow: 'auto',
          fontSize: '0.875rem',
          lineHeight: '1.5'
        }}>
          <code>{`import { Button, Input } from 'kanso-ui'
import 'kanso-ui/styles'

function App() {
  return (
    <div>
      <Button color="sky" variant="filled">
        Click me!
      </Button>
      
      <Input 
        color="lavender" 
        variant="outline"
        label="Email" 
        placeholder="john@example.com" 
      />
    </div>
  )
}`}</code>
        </pre>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <div>
          <h2 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
            📦 Components
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Explore our growing collection of components:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>Button</strong> - Flexible button component with multiple variants</li>
            <li><strong>Input</strong> - Form input with icon support and validation states</li>
            <li>More components coming soon...</li>
          </ul>
        </div>

        <div>
          <h2 style={{ color: '#1f2937', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
            🛠 Development
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            Built with modern tools:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li><strong>TypeScript</strong> for type safety</li>
            <li><strong>Vanilla Extract</strong> for CSS-in-JS styling</li>
            <li><strong>Storybook</strong> for component development</li>
            <li><strong>Vitest</strong> for testing</li>
          </ul>
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '4rem',
        padding: '2rem',
        borderTop: '1px solid #e5e7eb'
      }}>
        <p style={{ color: '#6b7280', fontStyle: 'italic' }}>
          <em>Kanso (簡素)</em> - Japanese aesthetic principle emphasizing simplicity and naturalness.
        </p>
        <p style={{ marginTop: '1rem', fontSize: '1.125rem' }}>
          <strong>Happy coding with Kanso UI! 🌸</strong>
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}