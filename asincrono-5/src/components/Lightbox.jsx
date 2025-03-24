import { useContext, useState } from "react";
import { ProductoContext } from "../../context/ProductoContext";

export const Lightbox = () => {
    const { lightbox, cerrarLightbox } = useContext(ProductoContext)
    const [submenuAbierto, setSubmenuAbierto] = useState(false)


    if (!lightbox) return null

    const toggleSubmenu = () => setSubmenuAbierto(!submenuAbierto)

    return (
        <>

            <div className="Lightbox">
                <header className="Lightbox-header">
                    <h1 style={{ color: "white" }}>mater</h1>
                    <button className="Lightbox-btn" onClick={cerrarLightbox}>X</button>
                </header>
                <div className="Lightbox-content">
                    <ul className="Lightbox-ul">
                        <li onClick={toggleSubmenu} className="Lightbox-li">
                            Collection

                            <ul className={`Submenu ${submenuAbierto ? "open" : ""}`} onClick={(e)=> e.stopPropagation()}>
                                <li className="Submenu-li">Furniture</li>
                                <li className="Submenu-li">Lighting</li>
                                <li className="Submenu-li">Accessories</li>
                            </ul>


                        </li>
                        <li className="Lightbox-li">Design</li>
                        <li className="Lightbox-li">Craftmanship</li>
                        <li className="Lightbox-li">Ethics</li>
                    </ul>
                </div>

                <footer className="Lightbox-footer">
                    <nav className="Lightbox-nav">
                        <a className="Lightbox-a" href="/">About</a>
                        <a className="Lightbox-a" href="/">Contact</a>
                        <a className="Lightbox-a" href="/">Dealers</a>
                        <a className="Lightbox-a" href="/">News</a>
                        <a className="Lightbox-a" href="/">Care</a>
                        <a className="Lightbox-a" href="/">Press</a>
                    </nav>
                </footer>

            </div>
        </>
    );
}

