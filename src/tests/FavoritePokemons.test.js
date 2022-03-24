import userEvent from '@testing-library/user-event';
import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando o componente <FavoritePokemons.js />', () => {
  it('Testando se a mensagem correta é exibida quando não há favoritos', () => {
    render(<FavoritePokemons />);
    const notFound = screen.getByText(/No favorite pokemon found/i);
    expect(notFound).toBeInTheDocument();
  });

  it('Teste se é exibido todos os cards de pokémons favoritados.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');
    const favoriteButton = screen.getByLabelText(/pokémon favoritado\?/i);
    userEvent.click(favoriteButton);
    history.push('/favorites');
    const pokemonCard = screen.getByText(/pikachu/i);
    expect(pokemonCard).toBeInTheDocument();
  });
});
