import { describe, it, expect, vi } from 'vitest'
import { render, screen, userEvent, runAxeTest } from '../../test/utils'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    
    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    
    await user.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled button</Button>)
    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
  })

  it('is disabled when loading prop is true', () => {
    render(<Button loading>Loading button</Button>)
    const button = screen.getByRole('button', { name: /loading button/i })
    expect(button).toBeDisabled()
  })

  it('shows loading spinner when loading', () => {
    render(<Button loading>Loading</Button>)
    const spinner = screen.getByRole('button').querySelector('svg')
    expect(spinner).toBeInTheDocument()
  })

  it('renders with left icon', () => {
    const LeftIcon = () => <span data-testid='left-icon'>←</span>
    render(<Button leftIcon={<LeftIcon />}>With left icon</Button>)
    
    expect(screen.getByTestId('left-icon')).toBeInTheDocument()
  })

  it('renders with right icon', () => {
    const RightIcon = () => <span data-testid='right-icon'>→</span>
    render(<Button rightIcon={<RightIcon />}>With right icon</Button>)
    
    expect(screen.getByTestId('right-icon')).toBeInTheDocument()
  })

  it('applies variant classes correctly', () => {
    const { rerender } = render(<Button variant='filled'>Filled</Button>)
    let button = screen.getByRole('button')
    expect(button.className).toContain('filled')

    rerender(<Button variant='ghost'>Ghost</Button>)
    button = screen.getByRole('button')
    expect(button.className).toContain('ghost')

    rerender(<Button variant='outline'>Outline</Button>)
    button = screen.getByRole('button')
    expect(button.className).toContain('outline')
  })

  it('applies size classes correctly', () => {
    const { rerender } = render(<Button size='sm'>Small</Button>)
    let button = screen.getByRole('button')
    expect(button.className).toContain('size_sm')

    rerender(<Button size='md'>Medium</Button>)
    button = screen.getByRole('button')
    expect(button.className).toContain('size_md')

    rerender(<Button size='lg'>Large</Button>)
    button = screen.getByRole('button')
    expect(button.className).toContain('size_lg')
  })

  it('applies fullWidth class when fullWidth is true', () => {
    render(<Button fullWidth>Full width</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('fullWidth_true')
  })

  it('meets accessibility standards', async () => {
    const { container } = render(<Button>Accessible button</Button>)
    await runAxeTest(container)
  })

  it('supports custom className', () => {
    render(<Button className='custom-class'>Custom</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })
})