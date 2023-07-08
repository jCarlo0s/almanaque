import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Page from './page.tsx';

describe('Main Page', () => {
  it('render the main page', async () => {
    render(await Page());
    const element = screen.getByText(/Historial de Juegos/i);
    expect(element).toBeInTheDocument();
  });
});