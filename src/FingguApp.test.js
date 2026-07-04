import React from 'react';
import { render } from '@testing-library/react';
import { FingguApp } from './FingguApp';

test('renders FingguApp component', () => {
  const { getByText } = render(<FingguApp />);
  const linkElement = getByText(/Task Board/i);
  expect(linkElement).toBeInTheDocument();
});