import { useContext } from "react";

import { ProductoContext } from "../../context/ProductoContext";


export const Producto = () => {

    const { productoActivo, activarProducto } = useContext(ProductoContext)


    return (
        <main className='Main'>
            <div className="Main-div">
                <div className={`Producto ${productoActivo == "silla" ? "activo" : "inactivo-arriba"}`}>
                    <img src="/ruta" alt="Img de la silla" />
                    <h2>Shell Dining Chair</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={`Producto ${productoActivo == "mesa" ? "activo" : "inactivo-abajo"}`}>
                    <img src="/ruta" alt="Img de la mesa" />
                    <h2>Dunes Anthrazite Black</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <button className='Btn-details'>Product Details</button>
            </div>

        </main>
    );
}

