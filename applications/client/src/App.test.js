import { render, screen } from '@testing-library/react';
import App from './App';

// "Learn React" is long gone but lets keep it here in case we need
// an example of how test() works.
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});