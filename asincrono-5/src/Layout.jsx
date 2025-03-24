
import { Producto } from './components/Producto.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import '@/css/Layout.css'

function Layout() {

  return (
    <>
      <Header />

      <Producto/>

      <Footer />

    </>
  )
}

export default Layout
