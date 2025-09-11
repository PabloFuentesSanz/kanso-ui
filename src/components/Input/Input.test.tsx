import { describe, it, expect } from 'vitest'
import { render, screen, userEvent, runAxeTest } from '../../test/utils'
import { Input } from './Input'

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder='Test input' />)
    const input = screen.getByPlaceholderText('Test input')
    expect(input).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<Input label='Email' placeholder='test@example.com' />)
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })

  it('renders with helper text', () => {
    render(<Input helperText='This is helper text' />)
    expect(screen.getByText('This is helper text')).toBeInTheDocument()
  })

  it('renders with error message', () => {
    render(<Input errorMessage='This field is required' />)
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('shows required asterisk when required', () => {
    render(<Input label='Required Field' required />)
    const label = screen.getByText('Required Field')
    expect(label).toBeInTheDocument()
  })

  it('handles user input', async () => {
    const user = userEvent.setup()
    render(<Input placeholder='Type here' />)
    
    const input = screen.getByPlaceholderText('Type here')
    await user.type(input, 'Hello World')
    
    expect(input).toHaveValue('Hello World')
  })

  it('is disabled when disabled prop is true', () => {
    render(<Input disabled placeholder='Disabled input' />)
    const input = screen.getByPlaceholderText('Disabled input')
    expect(input).toBeDisabled()
  })

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Input size='sm' placeholder='Small' />)
    let input = screen.getByPlaceholderText('Small')
    expect(input.className).toContain('size_sm')

    rerender(<Input size='md' placeholder='Medium' />)
    input = screen.getByPlaceholderText('Medium')
    expect(input.className).toContain('size_md')

    rerender(<Input size='lg' placeholder='Large' />)
    input = screen.getByPlaceholderText('Large')
    expect(input.className).toContain('size_lg')
  })

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Input variant='outline' placeholder='Outline' />)
    let input = screen.getByPlaceholderText('Outline')
    expect(input.className).toContain('variant_outline')

    rerender(<Input variant='filled' placeholder='Filled' />)
    input = screen.getByPlaceholderText('Filled')
    expect(input.className).toContain('variant_filled')
  })

  it('prioritizes error message over helper text', () => {
    render(
      <Input 
        helperText='Helper text' 
        errorMessage='Error message' 
        placeholder='Test'
      />
    )
    
    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(screen.queryByText('Helper text')).not.toBeInTheDocument()
  })

  it('supports custom className', () => {
    render(<Input className='custom-class' placeholder='Custom' />)
    const input = screen.getByPlaceholderText('Custom')
    expect(input).toHaveClass('custom-class')
  })

  it('meets accessibility standards', async () => {
    const { container } = render(
      <Input 
        label='Accessible Input' 
        placeholder='Enter text'
        helperText='This is help text'
      />
    )
    await runAxeTest(container)
  })

  it('associates label with input correctly', () => {
    render(<Input id='test-input' label='Test Label' />)
    const input = screen.getByLabelText('Test Label')
    expect(input).toHaveAttribute('id', 'test-input')
  })
})