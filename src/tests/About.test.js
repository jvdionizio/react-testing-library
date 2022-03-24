import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('Teste o componente <About.js />.', () => {
  it('Testando se a página contém as informações sobre a Pokédex.', () => {
    render(<About />);
    const info = screen.getByText(/digital encyclopedia containing all Pokémons/i);
    expect(info).toBeInTheDocument();
  });

  it('Testando se a página contém um heading h2 com o texto About Pokédex.', () => {
    render(<About />);
    expect(screen.getByRole('heading', { name: /About Pokédex/i })).toBeInTheDocument();
  });

  it('Testando se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    render(<About />);
    const paragraphOne = screen
      .getByText(/This application simulates a Pokédex/i);
    const paragraphTwo = screen
      .getByText(/One can filter Pokémons by type, and see more details for each one/i);
    expect(paragraphOne).toBeInTheDocument();
    expect(paragraphTwo).toBeInTheDocument();
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    render(<About />);
    const pokedexImg = screen.getByRole('img', { name: /pokédex/i });
    expect(pokedexImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
