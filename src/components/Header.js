import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-betwen">
            <div className="container">
                <h1><Link to={'/zami'} className="text-light">Vigilancia Privada - Inicio</Link></h1>
            </div>

            <Link to={"/guarda/nuevo"}
                className="btn btn-danger nuevo-post d-blok d-md-inline-block">Agregar Guarda &#43;</Link>
        </nav>
     );
}
 
export default Header;