import React, { useState } from 'react';

function Search() {
    const [nombre, setNombre] = useState("");
    const handleSubmit = (e) => {
        console.log("Hola Mundo")
    }
  return (
    <>
        <div className="login-box">
            <h1>Buscar emprendimiento</h1>
            <form onSubmit={handleSubmit}>
                {/* Nombre del emprendimiento */}
                <label htmlFor="name">Nombre: </label>
                <input type="text" placeholder="Ingresa el nombre del emprendimiento" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <a href="/search" className="boton-submit">Buscar</a>
            </form>
        </div>
    </>
  )
}

export default Search