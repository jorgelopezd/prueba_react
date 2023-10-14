import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

const MiComponente = () => {
    const [info, setInfo] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        consultarTipos();
    }, []);

    const consultarTipos = async () => {
        const url = "https://pokeapi.co/api/v2/type";
        const response = await fetch(url);
        const data = await response.json();
        setInfo(data.results);
    };

    const handleTypeChange = async (e) => {
        const type = e.target.value;
        setSelectedType(type);

        if (type) {
            const url = `https://pokeapi.co/api/v2/type/${type}`;
            const response = await fetch(url);
            const data = await response.json();


            const limitedPokemonList = data.pokemon.slice(0, 30);

            const pokemonDataList = await Promise.all(
                limitedPokemonList.map(async (pokemon) => {
                    const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon.name}`);
                    return response2.json();
                })
            );

            setPokemonData(pokemonDataList);
        } else {
            setPokemonData(null);
        }
    };

    return (
        <div>
            <h1>Pokémon por Tipo</h1>
            <select value={selectedType} onChange={handleTypeChange}>
                <option value="">Selecciona un Tipo de Pokémon</option>
                {info.map((type, index) => (
                    <option key={index} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>
            {selectedType && pokemonData && (
                <div className="d-flex flex-wrap">
                    {pokemonData.map((data, index) => (
                        <Card className="card-container" key={index} >
                            <Card.Img variant="top" src={data.sprites.front_default} />
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text>
                                    Altura: {data.height}<br />
                                    Peso: {data.weight}<br />
                                    Daño por Ataque: {data.stats.find(stat => stat.stat.name === 'attack')?.base_stat || "Desconocido"}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MiComponente;
