import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../components/NotFound';

describe('Testando o componente <NotFound.js />', () => {
  it('Testando se página contém um heading com o texto Page requested not found', () => {
    render(<NotFound />);
    const notFoundHeading = screen
      .getByRole('heading', { name: /Page requested not found/i });
    expect(notFoundHeading).toBeInTheDocument();
  });

  it('Testando se página mostra a imagem correta', () => {
    render(<NotFound />);
    const img = screen
      .getByRole('img', { name: /Pikachu crying because the page requested was not f/i });
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
