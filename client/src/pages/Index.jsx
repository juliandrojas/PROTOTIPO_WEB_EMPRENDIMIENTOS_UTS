import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Index() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/emprendimientos');
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error accediendo a la data: ' + error);
                setLoading(false);
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
                {loading ? (
                    <div className="text-center mt-3">
                        <p>Obteniendo datos...</p>
                        {/* Aquí puedes agregar un spinner de carga si lo deseas */}
                    </div>
                ) : data.length ? (
                    <div className="mt-3">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {data.map(item => (
                                <div className="col" key={item.id}>
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.nombre}</h5>
                                            <p className="card-text">Creador: {item.creador}</p>
                                            <p className="card-text">Creador: {item.contacto}</p>
                                            <p className="card-text">Tipo: {item.tipo}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="card mt-5 h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center">No hay datos disponibles</h5>
                        </div>
                    </div>
                    // <div className="text-center mt-3">
                    //     <p>No hay datos disponibles.</p>
                    // </div>
                )}
            </div>
        </>
    )
}

export default Index;
