import React, { useState } from 'react';

function Login() {
    const [correo, setEmail] = useState("");
    const [contrasena, setPassword] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        tipo === '' ? alert("Campo vacio") : console.log(correo, contrasena);
    }
    
    return (
        <div className="login-box">
            {/* <img className="avatar" src="vite.svg" alt="Logo" /> */}
            <h1>Login Here</h1>
            <form onSubmit={handleSubmit}>
                {/* Correo */}
                <label htmlFor="email">Correo: </label>
                <input type="email" placeholder="Enter your email" value={correo} onChange={(e) => setEmail(e.target.value)} />
                {/* Contraseña */}
                <label htmlFor="password">Contraseña: </label>
                <input type="password" placeholder="Enter your password" value={contrasena} onChange={(e) => setPassword(e.target.value)} />
                {/* Enviar el formulario */}
                <input type="submit" value="Log In" />
                {/* Enlaces */}
                <a href="/register">¿No estás registrado?</a>
            </form>
        </div>
    )
}

export default Login;
