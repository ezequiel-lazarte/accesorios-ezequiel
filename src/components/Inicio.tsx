import React from 'react';
import './Inicio.css';
import imgFacebook from './../img/facebook.png';

const Inicio = () => {
    return (
        <div className='inicio'>
            <h1 className='nombreEmpresa'>EJ Accesorios</h1>
            <h2 className='titulo'>Contáctanos</h2>
            <p>En nuestro WhatsApp podrá ver el mismo catálogo, no dude en consultar.</p>
            <p>Tenemos los mejores precios de Santa Fe y Recreo.</p>
            <p className='texto'>Puede enviarnos por WhatsApp 3425259247 o por nuestra página de <a className='facebook' rel="stylesheet" href="https://m.facebook.com/profile.php?id=109351711629861&ref=content_filter" target={'_blank'}>Facebook</a>.</p>
            <a href="https://m.facebook.com/profile.php?id=109351711629861&ref=content_filter" target={'_blank'}><img className='imgFacebook' src={imgFacebook} alt="logo facebook" /></a>
            <h3 className='titulo3'>Horarios de Atención Via Facebook o WhatsApp</h3>
            <div className='horarios'>
                <table className='tabla'>
                    <tr className="fila">
                        <th className='datoTabla'>Dia</th>
                        <th className='datoTabla'>Horario</th>
                    </tr>
                    <tr className="fila">
                        <td className='datoTabla'>Lunes</td>
                        <td className='datoTabla'>08hs - 20hs</td>
                    </tr>
                    <tr className="fila">
                        <td className='datoTabla'>Martes</td>
                        <td className='datoTabla'>08hs - 20hs</td>
                    </tr>
                    <tr className="fila">
                        <td className='datoTabla'>Miércoles</td>
                        <td className='datoTabla'>08hs - 20hs</td>
                    </tr>
                    <tr className="fila">
                        <td className='datoTabla'>Jueves</td>
                        <td className='datoTabla'>08hs - 20hs</td>
                    </tr>
                    <tr className="fila">
                        <td className='datoTabla'>Viernes</td>
                        <td className='datoTabla'>08hs - 20hs</td>
                    </tr>
                    <tr className="fila">
                        <td className='datoTabla'>Sábado</td>
                        <td className='datoTabla'>12hs - 20hs</td>
                    </tr>
                    <tr className="fila">
                        <td className='datoTabla'>Domingo</td>
                        <td className='datoTabla'>12hs - 20hs</td>
                    </tr>
                </table>
            </div>
            <h3 className='titulo3'>Reparto de pedidos</h3>
            <p className='texto'>Todos los días se hacen repartos en ciudad de Recreo Norte.</p>
            <p className='texto-reparto'>En Recreo Sur se reparte solo los Lunes.</p>
            <p className='texto-reparto'>En Santa Fe se reparte solo los Lunes.</p>
            <p className='texto'>Siempre que allá algún cambio inesperado en los horarios de atención y/o repartos se comunicaran en los estados de WhatsApp y en la página de Facebook.</p>
        </div>
    );
}

export default Inicio;
