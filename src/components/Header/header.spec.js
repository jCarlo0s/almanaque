import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Header from './index.tsx';


describe('Header Component', () => {
  it('render the company name', () => {
    render(<Header />);
    const element = screen.getByText(/El Almanaque/i);
    expect(element).toBeInTheDocument();
  });

  it('render the company logo', () => {
    render(<Header />);
    const element = screen.getByTestId('nba-logo');
    expect(element).toBeInTheDocument();
  });
});
