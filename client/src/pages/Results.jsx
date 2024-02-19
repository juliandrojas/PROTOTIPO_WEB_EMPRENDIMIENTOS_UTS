import React from 'react';

function Results({ emprendimientoEncontrado }) {
    return (
        <div>
            {emprendimientoEncontrado ? (
                <div className="card">
                    <div className="card-body">
                        <h2>Resultados</h2>
                        <p>Nombre: {emprendimientoEncontrado.nombre}</p>
                        {/* Agrega más campos según la estructura de tu objeto de emprendimiento */}
                    </div>
                </div>
            ) : (
                <div>No se encontraron resultados</div>
            )}
        </div>
    );
}

export default Results;
