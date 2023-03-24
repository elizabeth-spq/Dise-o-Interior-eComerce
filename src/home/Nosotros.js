import React, { useEffect, useState } from 'react';
import './Nosotros.css';
function Nosotros(props) {
    const [proyecto, setProyecto] = useState([]);
    useEffect(() => {
        leerProyecto();
    }, []);

    const leerProyecto = (e) => {
        const rutaServicio = "http://159.203.182.131/servicios/programacion/proyectosgaleria.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data)
                setProyecto(data);
            })
    }
    return (
        <section id='nosotros' className='padded'>
            <div className='container'>
                <div id="opciones" >
                    <ul>
                        <li>
                            <a href="#">—</a>
                            <a href="#">TODO  /</a>
                            <a href="#">ARQUITECTURA  /</a>
                            <a href="#">EXTERIOR  /</a>
                            <a href="#">INTERIOR </a>
                        </li>
                    </ul>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {proyecto.map(item =>

                        <div id='cont' className="col-card col" key={item.idproyecto} >

                            <div className="card">
                                <img src={"http://159.203.182.131/img/galeria/" + item.foto} className="card-img-top" alt="..." />
                                <div className="capa">
                                    <h5 >{ item.descripcion}</h5>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div id="vertodo">
                    <p>Ver Más</p>
                </div>

            </div>
        </section >
    );
}

export default Nosotros;