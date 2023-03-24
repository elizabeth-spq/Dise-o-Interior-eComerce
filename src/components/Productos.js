import React, { useEffect, useState } from 'react';
import './Productos.css';
import noImagen from '../assets/no-imagen.jpg';
import { Link } from 'react-router-dom';

function Productos(props) {
    const [productos, setProductos] = useState([]);
    const [itemProducto, setItemProducto] = useState([]);

    useEffect(() => {
        //console.log(props.categoriaProducto.idcategoria);
        leerProductos(props.categoriaProducto);
    }, [props.categoriaProducto]);

    const leerProductos = (idcategoria) => {
        const rutaServicio = "http://159.203.182.131/servicios/programacion/servicioproductos.php";

        var formData = new FormData();
        formData.append("caty", idcategoria);
        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                setProductos(data);
            })
    }

    const mostrarProductosTabla = () => {
        return (
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Cod</th>
                        <th>Nombre</th>
                        <th className="text-end">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(item =>
                        <tr key={item.idproducto}>
                            <td>{item.idproducto}</td>
                            <td>{item.nombre}</td>
                            <td className="text-end">$ {parseFloat(item.precio).toFixed(2)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const mostrarCuadriculaTabla = () => {
        return (
            <div className="row row-cols-1 row-cols-xl-2 row-cols-lg-2 row-cols-2  g-4" id="cards-productos">
                {productos.map(item =>
                    <div className="col" key={item.idproducto}>
                        <div className="card h-100 produ">
                            <Link to={"/detalle/ " + item.idproducto} >
                                <div className='mini-produ '>
                                    <img src={item.imagengrande !== null ? "http://159.203.182.131/img/grande/" + item.imagengrande : noImagen} className="card-img-top imgProdu" alt="..." />
                                    <div  className="overlay2 ">
                                        <i className="bi bi-eye-fill btnQuickView " onClick={(event) => seleccionarItem(event, item)} data-bs-toggle="modal" data-bs-target="#quickViewModal"></i>
                                    </div>
                                </div>

                            </Link>
                            <div className={item.preciorebajado === "0" ? "sin-oferta" : "con-oferta"}>
                                {Math.round((1 - parseFloat(item.preciorebajado) / parseFloat(item.precio)) * 100)}%
                            </div>
                            <div className="card-body">
                                <h6 className="card-title titulo-producto">{item.nombre}</h6>
                                <p className="card-text precBajo">
                                    <span className="precio-lista">
                                        {item.preciorebajado !== "0" ? " ($" + parseFloat(item.precio).toFixed(2) + ")" : ""}

                                    </span>
                                    <span id='precio-oficial'>
                                        $
                                        {item.preciorebajado === "0" ? parseFloat(item.precio).toFixed(2)
                                            : parseFloat(item.preciorebajado).toFixed(2)}

                                    </span>

                                    <i className="bi bi-basket2 btnAgregarCarrito" title="Añadir al carrito"
                                    ></i>

                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    const seleccionarItem = (event, item) => {
        event.preventDefault();
        setItemProducto(item)
    }

    const mostrarModalQuickView = () => {
        return (
            <div className="modal fade" id="quickViewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{itemProducto.nombre}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col">
                                    <img src={"http://159.203.182.131/img/grande/" + itemProducto.imagengrande} className="img-fluid" alt="" />
                                </div>

                                <div className="col">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Stock</th>
                                                <td>{itemProducto.unidadesenexistencia}</td>
                                            </tr>
                                            <tr>
                                                <th>Detalle</th>
                                                <td>{itemProducto.detalle}</td>
                                            </tr>
                                            <tr>
                                                <th>Precio</th>
                                                <td>
                                                    $
                                                    {itemProducto.preciorebajado === "0" ? parseFloat(itemProducto.precio).toFixed(2)
                                                        : parseFloat(itemProducto.preciorebajado).toFixed(2)}
                                                    <span className="precio-lista">
                                                        {itemProducto.preciorebajado !== "0" ? " (S/." + parseFloat(itemProducto.precio).toFixed(2) + ")"
                                                            : ""}</span>
                                                </td>

                                            </tr>
                                            
                                            <tr>
                                                <th></th>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button id='btnBuscar2' type="button" className="btn btn-primary"><i className="bi bi-basket2"></i> Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                <li className="nav-item " role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i className="bi bi-table"></i></button>
                </li>
                <li className="nav-item " role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i className="bi bi-grid-3x3-gap-fill"></i></button>
                </li>
            </ul>
            <div className="tab-content " id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    {mostrarProductosTabla()}
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    {mostrarCuadriculaTabla()}
                </div>
            </div>
            {mostrarModalQuickView()}
        </div>
    );
}

export default Productos;