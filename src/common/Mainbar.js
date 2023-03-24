import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/arki.png';
import './Mainbar.css';

function Mainbar(props) {
    return (

        <nav className="navbar navbar-custom navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img id='logo' src={logo} className="img-responsive" alt="..." />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" id='itemmenu'>Tabla</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#main-footer" id='itemmenu'>Ubicanos</a>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/colaboradores" id='itemmenu'>Colaboradores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/proyectos" id='itemmenu'>Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/tienda" id='itemmenu'>Tienda</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/tienda" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Administración
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/categorias">Categorías</Link></li>
                                
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" id='itembuscar'><i className="bi bi-search"></i></a>
                        </li>
                        

                    </ul>
                    <button id='menuderecha' className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-list" id='menu'></i></button>


                </div>



            </div>

        </nav>





    );
}

export default Mainbar;