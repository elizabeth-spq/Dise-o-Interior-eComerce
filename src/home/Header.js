import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header id="main-header" className='padded'>
            <div className="container">

                <div className="row">
                    <div className="col">
                    <h3 className='empresa'>Arki’s Masterpiece</h3>
                    </div>
                    <div className="col">
                        <h3 className='subtitulo'>Este es el porfolio con nuestros mejores proyectos</h3>
                        <p className='parrafo'>Arki’s Masterpiece es un estudio con sede en </p>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;