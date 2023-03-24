//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './common/Footer';
import Mainbar from './common/Mainbar';
import Colaboradores from './components/Colaboradores';
import ProductoDetalle from './components/ProductoDetalle';
import Proyectos from './components/Proyectos';
import Tienda from './components/Tienda';
import Inicio from './home/Inicio';
import Venlateral from './home/Venlateral';
import Categorias from './mantenimiento/Categorias';

function App() {
  return (
    <div >   
     
      <BrowserRouter>
        
        <Mainbar />
        <Venlateral/>

        <main id='main-content'>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/colaboradores' element={<Colaboradores />} />
            <Route path='/proyectos' element={<Proyectos />} />
            <Route path='/tienda' element={<Tienda />} />
            <Route path='/categorias' element={<Categorias/>} />
            <Route path='/detalle/:idproducto' element={<ProductoDetalle/>} />

          </Routes>

        </main>

        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
