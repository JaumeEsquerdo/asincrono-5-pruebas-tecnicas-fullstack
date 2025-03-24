import { createContext, useState } from "react";

export const ProductoContext = createContext();

export const ProductoProvider = ({ children }) => {
    const [productoActivo, setProductoActivo] = useState("silla");
    const [lightbox, setLightbox] =useState(false)


    const activarProducto = (producto)=>{
        if(productoActivo === producto) return
        setProductoActivo(producto)
    }

    const abrirLightbox = () => setLightbox(true)
    const cerrarLightbox = () => setLightbox(false)

    return (
        <ProductoContext.Provider value={{productoActivo, activarProducto, abrirLightbox, lightbox, cerrarLightbox}}>
            {children}
        </ProductoContext.Provider>

    );
}

