import { createContext, useState } from "react";

export const ProductoContext = createContext();

export const ProductoProvider = ({ children }) => {
    const [productoActivo, setProductoActivo] = useState("silla");

    const activarProducto = (producto)=>{
        if(productoActivo === producto) return
        setProductoActivo(producto)
    }
    return (
        <ProductoContext.Provider value={{productoActivo, activarProducto}}>
            {children}
        </ProductoContext.Provider>

    );
}

