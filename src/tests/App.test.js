import userEvent from '@testing-library/user-event';
import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente <App.js />', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWithRouter(<App />);
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Favorite Pokémons/i })).toBeInTheDocument();
  });

  it('Testando o redirecionamento do link Home', () => {
    const { history } = renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /Home/i });
    userEvent.click(homeLink);
    expect(history.location.pathname).toBe('/');
  });

  it('Testando o redirecionamento do link About', () => {
    const { history } = renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /About/i });
    userEvent.click(aboutLink);
    expect(history.location.pathname).toBe('/about');
  });

  it('Testando o redirecionamento do link Favorite Pokémons', () => {
    const { history } = renderWithRouter(<App />);
    const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favoriteLink);
    expect(history.location.pathname).toBe('/favorites');
  });

  it('Testando o redirecionamento ao entrar uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/xablau');
    expect(screen.getByRole('heading', { name: /Page requested not found/i }))
      .toBeInTheDocument();
  });
});
