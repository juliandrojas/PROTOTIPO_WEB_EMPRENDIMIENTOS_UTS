import React, { useState } from 'react';

function Search() {
    const [nombre, setNombre] = useState("");
    const [emprendimientoEncontrado, setEmprendimientoEncontrado] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/emprendimientos/?nombre=${nombre}`);
            if (!response.ok) {
                throw new Error('Emprendimiento no encontrado');
            }
            const data = await response.json();
            setEmprendimientoEncontrado(data);
            setError(null);
        } catch (error) {
            setError(error.message);
            setEmprendimientoEncontrado(null);
        }
    };

    return (
        <>
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="card">
                    <div className="card-body">
                        <h1 className="text-center">Buscar emprendimiento</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                {/* Nombre del emprendimiento */}
                                <label htmlFor="name" className='form-label'>Nombre: </label>
                                <input className="form-control" type="text" placeholder="Ingresa el nombre del emprendimiento" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <input type="submit" value="Buscar Emprendimiento" className='btn btn-danger w-100' />
                            </div>
                            <div className="mb-3">
                                <a href="/register" className="btn btn-secondary w-100">Registrar otro emprendimiento</a>
                            </div>
                        </form>
                        {emprendimientoEncontrado && (
                            <div className="alert alert-success" role="alert">
                                Emprendimiento encontrado: {emprendimientoEncontrado.nombre}
                            </div>
                        )}
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;
