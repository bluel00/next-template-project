import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

import MainPage from './MainPage';

describe('Home', () => {
  const items = [
    { id: '0', title: 'title0' },
    { id: '1', title: 'title1' },
    { id: '2', title: 'title2' },
    { id: '3', title: 'title3' },
    { id: '4', title: 'title4' },
    { id: '5', title: 'title5' },
  ];

  it('renders header', () => {
    const { container } = render(<MainPage />);

    expect(container).toHaveTextContent('header');
  });

  it('renders 타이틀', () => {
    const { container } = render(<MainPage />);

    expect(container).toHaveTextContent('타이틀');
  });

  it('renders all items', () => {
    const { container } = render(<MainPage />);

    items.forEach(({ title }) => {
      expect(container).toHaveTextContent(title);
    });
  });
});
