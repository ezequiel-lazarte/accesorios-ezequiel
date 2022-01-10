import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <nav className='menu'>
            <Link className='link' to="/">Inicio</Link>
            <Link className='link' to="/Productos">Productos</Link>
            <Link className='link' to="/Promociones">Promociones</Link>
        </nav>
    );
}

export default Menu;
