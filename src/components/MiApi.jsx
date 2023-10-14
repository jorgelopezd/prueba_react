import { useState, useEffect } from "react";

const MiComponente = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        consultarApi();
    }, []);

    const consultarApi = async () => {

            const url = "https://huachitos.cl/api/animales/estado/adopcion";
            const response = await fetch(url);
            const data = await response.json();
            setInfo(data)
            
    }

    return (
        <div>
            <h1>Mi Componente</h1>
            <ul>
                {Array.isArray(info) && info.length > 0 ? (
                    info.map(item => (
                        <li key={item.id}>{item.nombre} - {item.tipo}</li>
                    ))
                ) : (
                    <li>No hay datos disponibles.</li>
                )}
            </ul>
        </div>
    )
}

export default MiComponente;
