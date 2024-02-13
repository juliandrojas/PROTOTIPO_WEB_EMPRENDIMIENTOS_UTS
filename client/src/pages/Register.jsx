import React, { useState } from 'react';

function Register() {
    const [nombre, setNombre] = useState("");
    const [correo, setEmail] = useState("");
    const [contrasena, setPassword] = useState("");
    const [tipo, setTipo] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        tipo === '' ? alert("Campo vacio") : console.log(nombre, correo, contrasena, tipo);
    }
    
    return (
        <div className="login-box">
            {/* <img className="avatar" src="vite.svg" alt="Logo" /> */}
            <h1>Login Here</h1>
            <form onSubmit={handleSubmit}>
                {/* Nombre */}
                <label htmlFor="username">Nombre: </label>
                <input type="text" placeholder="Enter your username" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                {/* Correo */}
                <label htmlFor="email">Correo: </label>
                <input type="email" placeholder="Enter your email" value={correo} onChange={(e) => setEmail(e.target.value)} />
                {/* Contraseña */}
                <label htmlFor="password">Contraseña: </label>
                <input type="password" placeholder="Enter your password" value={contrasena} onChange={(e) => setPassword(e.target.value)} />
                {/* Tipo */}
                <label htmlFor="tipo">Tipo: </label>
                <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="">Selecciona el tipo</option>
                    <option value="usuario">Usuario</option>
                    <option value="administrador">Administrador</option>
                </select>
                {/* Enviar el formulario */}
                <input type="submit" value="Log In" />
                {/* Enlaces */}
                <a href="#">No estás registrado?</a>
            </form>
        </div>
    )
}

export default Register;
