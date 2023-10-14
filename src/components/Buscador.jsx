    import React from "react";

    function Buscador({ searchTerm, setSearchTerm, onSearch }) {
    const handleSearch = () => {
        onSearch();
    };

    return (
        <div>
        <h1>Buscador de Pokémon por Número</h1>
        <input
            type="text"
            placeholder="Buscar Pokémon por número"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
        </div>
    );
    }

    export default Buscador;
