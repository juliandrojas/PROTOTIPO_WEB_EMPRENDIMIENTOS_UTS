import React from 'react';

function Menu() {
    return (
        <>
            <div className="login-box">
                <form>
                    <a href="/register" className="boton-submit">Registrar emprendimiento</a>
                    <a href="/search" className="boton-submit">Subir foto</a>
                </form>
            </div>
        </>
    )
}

export default Menu
