import { use, useContext, useEffect, useState } from "react";

import { ProductoContext } from "../../context/ProductoContext";


export const Producto = () => {

    const [producto1, setProducto1] = useState(null)
    const [producto2, setProducto2] = useState(null)

    const { productoActivo, activarProducto } = useContext(ProductoContext)

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"


    //fetch productos
    useEffect(() => {

        const fetchProductos = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/v1/productos`)
                const jsonData = await response.json()
                console.log(jsonData)
                setProducto1(jsonData.data[0]) //primer producto
                setProducto2(jsonData.data[1])

            } catch (e) {
                console.error("error al obtener los productos", e)
            }
        }
        fetchProductos()
    }, [])

    return (
        <main className='Main'>
            <div className="Main-div">
                <div className={`Producto ${productoActivo == "silla" ? "activo" : "inactivo-arriba"}`}>
                    <div style={{width: "500px"}}>
                        <h3>{producto1 ? producto1.diseñador : "Cargando..."}</h3>
                        <h2 style={{padding: "10px 0"}}>{producto1 ? producto1.name : "Cargando..."}</h2>
                        <p>{producto1 ? producto1.description : "Cargando descripción..."}</p>

                    </div>
                    <img src="/imgs/silla_negra.png" alt="Img de la silla" />

                </div>
                <div className={`Producto ${productoActivo == "mesa" ? "activo" : "inactivo-abajo"}`}>
                    <div style={{width: "500px"}}>
                        <h3>{producto2 ? producto2.diseñador : "Cargando..."}</h3>
                        <h2 style={{padding: "10px 0"}}>{producto2 ? producto2.name : "Cargando..."}</h2>
                        <p>{producto2 ? producto2.description : "Cargando descripción..."}</p>

                    </div>
                    <img src="/imgs/mesa_negra.png" alt="Img de la mesa" />

                </div>
                <button className='Btn-details'>Product Details</button>
            </div>

        </main>
    );
}

