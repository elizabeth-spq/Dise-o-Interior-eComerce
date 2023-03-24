
import React, { useEffect, useState } from 'react';
import Productos from './Productos';
import './Tienda.css';
import axios from 'axios';

function Tienda(props) {
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);

    useEffect(() => {
        leerCategorias();
    }, []);
    const leerCategorias = async (e) => {
        const rutaServicio = "http://159.203.182.131/servicios/programacion/categorias.php";

        await axios.get(rutaServicio)
            .then((result) => {
                setCategorias(result.data);
                //console.log(result)
            })
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCategorias(data);
                //console.log(data);
            })

    }

    const mostrarCategoria = () => {
        return (
            <div>
                <div >
                    <h3 className='cate mb-3'>Carrito</h3>
                    <h6 className='my-5 fw-normal'>No hay productos Seleccionados</h6>
                </div>
                <div >
                    <h3 className='cate mb-3'>Filtrar por Precio</h3>
                    <div className='my-5 fw-normal'>
                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option selected="">Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div className='row pt-5 w-100' >
                            <div className='col-4 '>
                                <button className='d-inline btnFiltrar'>Filtrar</button>
                            </div>
                            <div className='col-8 text-end align-bottom h-100'>
                                <h4 className='fw-bolder fs-6 text-end pt-3'>Precio $50 - $100</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cate'>
                    Artículos por Categoría
                </div>
                <ul className="list-group list-group-flush " id='lista-categorias'>
                    {categorias.map(item =>
                        <li key={item.idcategoria} className='list-group-item '
                            onClick={(event) => seleccionarCategoria(item, event)}>
                            <h5 className='articulo'><i class="bi bi-chevron-compact-right"></i> {item.nombre}</h5>
                            <small className='articulo2'>{item.descripcion}</small>
                        </li>
                    )}
                </ul>
                <div className='cate pt-5'>
                    Productos recientes
                </div>
            </div>

        )

    }

    const seleccionarCategoria = (item, event) => {
        event.preventDefault();//Para evitar que propaguen mas eventos
        setCategoriaSeleccionada(item);

        var itemLista = document.querySelectorAll("#lista-categorias li");
        itemLista.forEach((item) => {
            item.classList.remove("active");
        })

        event.currentTarget.classList.add("active");
        //event.currentTarget hace referencia al objeto que recibió el evento
    }

    return (
        <section id='tienda' className='padded'>
            <div >
                <h2 className='texto'>Tienda</h2>
            </div>
            <div className='fondo-blanco padded' >
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <h3 className='cate'>{categoriaSeleccionada.nombre}</h3>
                            <p>{categoriaSeleccionada.descripcion}</p>
                            <Productos categoriaProducto={categoriaSeleccionada.idcategoria != null
                                ? categoriaSeleccionada.idcategoria : 0} />

                        </div>
                        <div id='lista1' className='col-md-4 '>
                            {mostrarCategoria()}
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
}

export default Tienda;