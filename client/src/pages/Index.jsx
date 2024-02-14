import React from 'react'

function Index() {
    return (
        <>
            <h1>UTS Emprende</h1>
            <div className="login-box">
                <form>
                    <a href="/register" className="boton-submit">Registrar emprendimiento</a>
                    <a href="/search" className="boton-submit">Subir foto</a>
                </form>
            </div>
        </>
    )
}

export default Index