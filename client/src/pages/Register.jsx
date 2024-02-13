import React, { useState } from 'react';

function Register() {
    const [nombre, setNombre] = useState("");
    const [correo, setEmail] = useState("");
    const [contrasena, setPassword] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        tipo === '' ? alert("Campo vacio") : console.log(nombre, correo, contrasena);
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
                {/* Enviar el formulario */}
                <input type="submit" value="Log In" />
                {/* Enlaces */}
                <a href="/login">¿Ya tienes una cuenta? Inicia sesión</a>
            </form>
        </div>
    )
}

export default Register;
