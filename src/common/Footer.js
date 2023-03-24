import React from 'react';
import './Footer.css';

function Footer(props) {
    return (
        <footer id="main-footer" className='container'>
            <div id="contenedor-footer" >
                <div id="direccion">
                    <p>
                        2334 Miraflores,Lima
                        <br />
                        T. +44 1123-2234-21
                        <br />
                        arki@marterpiece.com
                    </p>
                    <div id='linea'></div>
                </div>
                
                <div id="derechos">
                    <p>
                        Copyright ©2022 GoodLayers.
                        <br />
                        Todos los derechos reservados
                    </p>
                </div>
                
                <div id="redes">
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
        </footer>
    );
}

export default Footer;