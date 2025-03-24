import {useContext} from 'react'
import { ProductoContext } from '../../context/ProductoContext';

export const Header = () => {
    const {abrirLightbox} = useContext(ProductoContext)

    return (
        <header className='Header'>
            <div className="Header-div">
                <h1>mater</h1>
            <button onClick={abrirLightbox} className="Header-btn">X</button>
            </div>
            
        </header>
    );
}


