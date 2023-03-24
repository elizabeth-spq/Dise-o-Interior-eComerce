import React, { useEffect, useState } from 'react';
import './Proyectos.css';

function Proyectos(props) {
    const [proyectos, setProyectos] = useState([]);
    const [datosFiltrados, setDatosFiltrados] = useState([]);
    const [nombreProyecto, setNombreEmpresa] = useState("");

    useEffect(() => {
        leerProyectos();
        setTimeout(() => {
            document.getElementById("btnBuscar").click();
        }, 1000);

    }, []);

    const leerProyectos = (e) => {

        const rutaServicio = "http://159.203.182.131/servicios/programacion/proyectos.php";
        fetch(rutaServicio)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProyectos(data);
            })
    }
    const buscar = () => {
        let proyectosFiltrados = proyectos.filter((item) => {
            return nombreProyecto !== "" ? item["nombre"].indexOf(nombreProyecto) > 0 : true;
        }
        )
        setDatosFiltrados(proyectosFiltrados);
    }

    return (
        <section id='proyectos' className='padded'>
            <div className='container'>
                <div>
                    <h2 className='texto'>Nuestros Proyectos</h2>
                </div>
                <div id='cajaBuscador' className='container '>
                    <div className="mb-3 col">
                        <input id='ingresarTexto' type="text" className='form-control ' placeholder='Buscar por proyecto'
                            value={nombreProyecto}
                            onChange={(event) => setNombreEmpresa(event.target.value)} />
                    </div>
                    <div className="mb-3 col-lg-2">
                        <button className='' id="btnBuscar" onClick={() => buscar()}>Consultar</button>
                    </div>
                </div>

                <div className='fondo-blanco' >
                    <table className='table'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Nombre de Proyecto</th>
                                <th>Tipo</th>
                                <th>Proyectista</th>
                                <th>Año</th>
                                <th>Estado</th>
                                <th>Ubicación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datosFiltrados.map(item =>
                                <tr key={item.idproyect}>
                                    <td>{item.nombre}</td>
                                    <td>{item.tipo}</td>
                                    <td>{item.proyectista}</td>
                                    <td>{item.año}</td>
                                    <td>{item.estado}</td>
                                    <td>{item.ubicacion}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>


            </div>
        </section>
    );
}

export default Proyectos;