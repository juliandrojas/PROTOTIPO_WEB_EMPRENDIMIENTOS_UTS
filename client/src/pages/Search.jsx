import React, { useState } from 'react';

function Search() {
    const [nombre, setNombre] = useState("");
    const handleSubmit = (e) => {
        console.log("Hola Mundo")
    }
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search