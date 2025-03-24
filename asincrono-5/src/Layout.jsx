
import { Producto } from './components/Producto.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import '@/css/Layout.css'
import { Lightbox } from './components/Lightbox.jsx'

function Layout() {

  return (
    <>
      <Header />

      <Producto/>
      <Lightbox/>

      <Footer />

    </>
  )
}

export default Layout
