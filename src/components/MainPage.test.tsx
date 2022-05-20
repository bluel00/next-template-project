import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import MainPage from './MainPage';

describe('Home', () => {
  it('renders header', () => {
    const { container } = render(<MainPage />);

    expect(container).toHaveTextContent('header');
  });

  it('renders 골라라 신상을 한눈에', () => {
    const { container } = render(<MainPage />);

    expect(container).toHaveTextContent('골라라 신상을 한눈에');
  });
});
