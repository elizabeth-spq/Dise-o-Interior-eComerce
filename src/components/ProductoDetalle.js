import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiWebURL } from '../utils';
import './ProductoDetalle.css';

function ProductoDetalle(props) {
    const [data, setData] = useState([]);

    let params = useParams();
    //console.log(params);

    useEffect(() => {
        leerProducto();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const leerProducto = async () => {
        const rutaServicio = ApiWebURL + "detalleproducto.php?idproducto=" + params.idproducto;
        const response = await fetch(rutaServicio);
        const result = await response.json();
        setData(result);
    }

    return (
        <section id="producto-detalle" className='padded'>
            <div className="container">
                {data.map(item =>
                    <div key={item.idproducto}>

                        <div className="row">

                            <div className="col">
                                <img id='imgProcuctoDet' src={"http://159.203.182.131/img/grande/" + item.imagengrande} className="img-fluid" alt="" />
                            </div>
                            <div className="col ">
                                <h2 className='px-4 fs-3 fw-bolder mb-4'>{item.nombre}</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th className='align-top px-4' >Stock</th>
                                            <td>{item.unidadesenexistencia}</td>
                                        </tr>
                                        <tr>
                                            <th className='align-middle  px-4 '>Precio</th>
                                            <td >
                                                
                                                    
                                                    <p className="card-text precBajo text-start">
                                                        
                                                        <span id='precio-oficial' className=" fw-bold fs-2 ps-0">
                                                            $
                                                            {item.preciorebajado === "0" ? parseFloat(item.precio).toFixed(2)
                                                                : parseFloat(item.preciorebajado).toFixed(2)}

                                                        </span>
                                                        <span className="precio-lista  fw-bold fs-2">
                                                            {item.preciorebajado !== "0" ? " ($" + parseFloat(item.precio).toFixed(2) + ")" : ""}

                                                        </span>
                                                    </p>
                                                
                                            </td>

                                        </tr>
                                        <tr>
                                            <th className='align-top px-4'>Detalle</th>
                                            <td>{item.detalle}</td>
                                        </tr>

                                        <tr >
                                            <th className='align-top px-4  '>Descripción</th>
                                            <td><div dangerouslySetInnerHTML={{ __html: item.descripcion }}></div></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="modal-footer">
                                    <button id='btnBuscar3' type="button" className="btn btn-primary"><i className="bi bi-basket2"></i> Añadir al carrito</button>
                                </div>
                                <hr />
                                <div className='text-center text-uppercase fs-6'>Caregoría {item.categoria}</div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProductoDetalle;