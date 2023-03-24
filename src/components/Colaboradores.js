import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Colaboradores.css';

function Colaboradores(props) {
    const [Colaboradores, setColaboradores] = useState([]);
    useEffect(() => {
        leerColaboradores();
    }, []);

    const leerColaboradores = (e) => {
        const rutaServicio = "http://159.203.182.131/servicios/programacion/colaboradores.php";

        axios.get(rutaServicio)
            .then((result) => {
                setColaboradores(result.data);
                //console.log(result)
            })

    }

    return (
        <div>
            <section id='colaboradores' className='padded'>
                <div >
                    <h2 className='texto'>Nuestro Equipo</h2>
                </div>
                <div className='fondo-blanco padded' >
                    <div className='container '>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {Colaboradores.map(item =>
                                <div className="col" key={item.idcolaborador} >
                                    <div className="card h-100">
                                        <div class="imgHover">
                                            <img id='colaborador' src={"http://159.203.182.131/img/colaboradores/" + item.foto} className="card-img-top image" alt="..." />
                                            <div class="overlay">
                                                <i class="bi bi-facebook"></i>
                                                <i class="bi bi-linkedin"></i>
                                                <i class="bi bi-twitter"></i>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-title">{item.nombrepersona}</h3>
                                            <h5 className="card-title">{item.cargopersona}</h5>
                                            <p className="card-text">{item.profesionpersona}</p>
                                            <div id='divi'></div>
                                            <p className="detalleCol">{item.descripcionpersona}</p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-dark"><i class="bi bi-telephone-fill"></i> {item.numeropersona}</small>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>

            </section >
        </div>
    );
}

export default Colaboradores;