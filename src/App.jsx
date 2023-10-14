import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import MiApi from './components/MiApi';
import Footer from './components/Footer';

function App() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100";
    const response = await fetch(url);
    const data = await response.json();

    setPokemonData(data.results);
  };

  return (
    <>
      <Header />
      <MiApi pokemonData={pokemonData} />
      <Footer />
    </>
  );
}

export default App;
