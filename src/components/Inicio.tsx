import React from 'react';
import './Inicio.css';
import imgFacebook from './../img/facebook.png';

const Inicio = () => {
    return (
        <div className='inicio'>
            <h1 className='nombreEmpresa'>EJ Accesorios</h1>
            <h2 className='titulo'>Contáctanos</h2>
            <p className='descripcion'>Puede enviarnos por WhatsApp 3425259247 o por nuestra pagina de <a className='facebook' rel="stylesheet" href="https://m.facebook.com/profile.php?id=109351711629861&ref=content_filter" target={'_blank'}>Facebook</a>.</p>
            <a href="https://m.facebook.com/profile.php?id=109351711629861&ref=content_filter" target={'_blank'}><img className='imgFacebook' src={imgFacebook} alt="logo facebook" /></a>
        </div>
    );
}

export default Inicio;
