import { useContext } from "react";
import { ProductoContext } from "../../context/ProductoContext";

export const Footer = () => {

    const { productoActivo, activarProducto } = useContext(ProductoContext)
    
    return (
        <footer className='Footer'>
            <div className="Footer-div">
                <div
                    className={`Footer-product ${productoActivo == "mesa" ? "gris" : ""}`}
                    onClick={() => activarProducto("silla")}
                >
                    <p>01</p>
                    <h3>Shell Dining Chair</h3>
                </div>
                <div
                    className={`Footer-product ${productoActivo == "silla" ? "gris" : ""}`}
                    onClick={() => activarProducto("mesa")}
                >
                    <p>02</p>
                    <h3>Dunes Anthrazite Black</h3>
                </div>
            </div>
        </footer>
    );
}

