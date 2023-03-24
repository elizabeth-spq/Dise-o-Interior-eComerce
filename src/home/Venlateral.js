import React, { useEffect, useState } from 'react';
import './VenLateral.css';

function Venlateral(props) {
    const [empleados, setEmpleados] = useState([]);
    useEffect(() => {
        leerEmpleados();
    }, []);

    const leerEmpleados = (e) => {
        const rutaServicio = "http://159.203.182.131/servicios/programacion/proyectosgaleria.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setEmpleados(data);
            })
    }
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel"></h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body" id='menu-desplegable'>
                <h1>A R K I •</h1>
                <p>Utilizamos las nuevas tecnologías aplicables a la arquitectura sostenible, cuidando y protegiendo
                    el medio ambiente para un desarrollo eco amigable, aprovechando eficientemente todos los
                    recursos que tenemos a nuestra disposición.
                </p>
                <div id='listaimg' className="row row-cols-1 row-cols-md-2 g-4">
                    {empleados.map(item =>

                        <div id='cont' className="col-card2 col" key={item.idproyecto} >

                            <div className="card">
                                <img src={"http://159.203.182.131/img/galeria/" + item.foto} className="card-img-top" alt="..." />
                                <div className="capa">
                                    <h5 ><i className="bi bi-arrow-up-right-circle"></i></h5>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <br />
                <p>2334 Peterson Street<br />
                    Kingston UK London</p>
                <p>T. +44 1123-2234-21
                    E. arki@arkicorp.co</p>
                    <div id="redes2">
                    <ul>
                        <li>
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                            <a href="#"><i className="bi bi-pinterest"></i></a>
                            <a href="#"><i className="bi bi-twitter"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Venlateral;