import axios from 'axios';
import React, { useState } from 'react';

function Register() {
    const [nombre, setNombre] = useState("");
    const [numero, setNumero] = useState("");
    const [creador, setCreador] = useState("");
    const [tipoEmprendimiento, setTipoEmprendimiento] = useState("");
    const [fotoEmprendimiento, setFotoEmprendimiento] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFotoEmprendimiento(file);
    };
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(nombre, numero, creador, tipoEmprendimiento);
        //tipoEmprendimiento === '' ? alert("Campo vacio") : console.log(nombre, numero, creador, tipoEmprendimiento);
        //* Creamos un objeto FormData para enviar datos del formulario
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('numero', numero);
        formData.append('creador', creador);
        formData.append('tipoEmprendimiento', tipoEmprendimiento);
        console.log(formData);
        //formData.append('fotoEmprendimiento', fotoEmprendimiento);
        try {
            //* Realizamos la solicitud POST a la API usando Axios
            const response = await axios.post('http://localhost:3000/api/emprendimientos/crear', formData);
            //! Manejamos la respuesta de la API
            console.log(response.data);
        } catch (error) {
            console.error('Error al registrar el emprendimiento: ', error);
        }
    }

    return (
        <div className="login-box">
            {/* <img className="avatar" src="vite.svg" alt="Logo" /> */}
            <h1>Registro de Emprendimientos</h1>
            <form onSubmit={handleSubmit}>
                {/* Nombre del emprendimiento */}
                <label htmlFor="name">Nombre: </label>
                <input type="text" placeholder="Ingresa el nombre de tu emprendimiento" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                {/* Contacto del emprendimiento */}
                <label htmlFor="contact">Contacto: </label>
                <input type="number" placeholder="Ingresa el número de contacto" value={numero} onChange={(e) => setNumero(e.target.value)} />
                {/* Nombre del creador */}
                <label htmlFor="name">Nombre: </label>
                <input type="text" placeholder="Ingresa el nombre del creador" value={creador} onChange={(e) => setCreador(e.target.value)} />
                {/* Tipo de emprendimiento */}
                <label htmlFor="type">Tipo de emprendimiento: </label>
                <select id="type" value={tipoEmprendimiento} onChange={(e) => setTipoEmprendimiento(e.target.value)}>
                    <option value="Default">Selecciona una opción</option>
                    <option value="Comida">Comida</option>
                    <option value="Regalos">Regalos</option>
                    <option value="Ropa">Ropa</option>
                </select>
                {/* Foto del emprendimiento */}
                <label htmlFor="image">Foto Emprendimiento: </label>
                <input
                    type='file'
                    id='image'
                    name='image'
                    accept=".jpg,.jpeg,.png,.gif"
                    onChange={handleFileChange}
                />
                {/* Enviar el formulario */}
                <input type="submit" value="Registrar emprendimiento" />
                {/* Enlaces */}
                <a href="/menu">Volver al menú</a>
            </form>
        </div>
    )
}

export default Register;
