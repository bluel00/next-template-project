import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders 골라라 신상을 한눈에', () => {
    const { container } = render(<Home />);

    expect(container).toHaveTextContent('골라라 신상을 한눈에');
  })
})