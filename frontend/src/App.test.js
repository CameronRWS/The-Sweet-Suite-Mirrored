import { render, screen } from '@testing-library/react';
import App from './App';

test('example test', () => {
  render(<App />);
  const paraElement = screen.getByText(/The Sweet Suite/i);
  expect(paraElement).toBeInTheDocument();
});
