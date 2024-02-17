import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Index() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/emprendimientos');
                setData(response.data);
            } catch (error) {
                console.error('Error accediendo a la data: ' + error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h1 className='text-center'>UTS Emprende</h1>
            <h2 className="text-center">Algunos de los proyectos más destacados:</h2>
            <div className="container">
                <Link to={'/register'} className='btn btn-primary w-100 mt-3'>
                    ¿Aún no has registrado tu emprendimiento? ¡Haz clic aquí para empezar!
                </Link>
                <div className="mt-3"> {/* Agrega un margen superior */}
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {data.map(item => (
                            <div className="col" key={item.id}>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.nombre}</h5>
                                        <p className="card-text">Número: {item.numero}</p>
                                        <p className="card-text">Creador: {item.creador}</p>
                                        <p className="card-text">Tipo: {item.tipo}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;
