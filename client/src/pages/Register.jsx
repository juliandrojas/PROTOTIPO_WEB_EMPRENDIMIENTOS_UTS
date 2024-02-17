import axios from 'axios';
import React, { useState } from 'react';

function Register() {
    const [nombre, setNombre] = useState("");
    const [numero, setNumero] = useState("");
    const [creador, setCreador] = useState("");
    const [tipo, setTipo] = useState("");
    const [fotoEmprendimiento, setFotoEmprendimiento] = useState(null);
    /*const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFotoEmprendimiento(file);
    };*/
    async function handleSubmit(e) {
        e.preventDefault();
        //! Destructuramos el arreglo con los datos
        const datos = { nombre, numero, creador, tipo };
        //* Enviamos los datos
        try {
            const response = await axios.post(
                'http://localhost:3000/api/emprendimientos/crear',
                datos
            );
            console.log(response);
            alert("Emprendimiento Registrado0")
        } catch (error) {
            console.error("Error al insertar los datos: " + error);
        }
    }

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="card">
                <div className="card-body">
                    <h1 className='text-center'>Registro de Emprendimientos</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            {/* Nombre del emprendimiento */}
                            <label htmlFor="name" className='form-label'>Nombre: </label>
                            <input className="form-control" type="text" placeholder="Ingresa el nombre de tu emprendimiento" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            {/* Contacto del emprendimiento */}
                            <label htmlFor="contact" className='form-label'>Contacto: </label>
                            <input className="form-control" type="number" placeholder="Ingresa el número de contacto" value={numero} onChange={(e) => setNumero(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            {/* Nombre del creador */}
                            <label htmlFor="name" className='form-label'>Nombre: </label>
                            <input className="form-control" type="text" placeholder="Ingresa el nombre del creador" value={creador} onChange={(e) => setCreador(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            {/* Tipo de emprendimiento */}
                            <label htmlFor="type" className='form-label'>Tipo de emprendimiento: </label>
                            <select className="form-select" id="type" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                                <option value="Default">Selecciona una opción</option>
                                <option value="Comida">Comida</option>
                                <option value="Regalos">Regalos</option>
                                <option value="Ropa">Ropa</option>
                            </select>
                        </div>
                        {/* Foto del emprendimiento */}
                        {/* <label htmlFor="image">Foto Emprendimiento: </label>
                <input
                    type='file'
                    id='image'
                    name='image'
                    accept=".jpg,.jpeg,.png,.gif"
                    onChange={handleFileChange}
                /> */}

                        {/* Enviar el formulario */}
                        <div className="mb-3">
                            <input type="submit" className="btn btn-primary w-100" value="Registrar emprendimiento" />
                        </div>
                        {/* Enlaces */}
                        <div className="mb-3">
                            <a href="/search" className="btn btn-secondary w-100">Subir foto</a>
                        </div>
                        <div className="mb-3">
                        <a href="/" className="btn btn-danger w-100">Volver</a>
                        </div>
                    </form>
                </div>
            </div>
            {/* <img className="avatar" src="vite.svg" alt="Logo" /> */}
        </div>
    )
}

export default Register;
