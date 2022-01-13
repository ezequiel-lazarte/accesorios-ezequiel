import React, {useState, useEffect} from 'react';
import './Productos.css';

const Productos = () => {
    const [articulos, setArticulos] = useState([]);
    useEffect(() => {
        fetch('https://tienda-v.herokuapp.com/api/products/', {
            
        })
        .then(response => response.json())
        .then((articulos) => setArticulos(articulos))
        .catch((err) => {
            console.error(err);
            console.log('Fallo la peticion de productos');
        })
    })
    return (
        <div>
            <h1>Productos</h1>
            {
                articulos.map(articulo => {
                    return(
                        <div className='producto' key={articulo["_id"]}>
                            <p>Nombre del Producto: {articulo["nombre"]}</p>
                            <p>Precio: {articulo["precio"]}</p>
                            <p>Disponibilidad: {articulo["disponible"]}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Productos;