import { Producto } from './components/Producto.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import '@/css/Layout.css'

function Layout() {

  return (
    <>
      <Header />

      <main className='Main'>
        <button>Product Details</button>
      </main>

      <Footer />

    </>
  )
}

export default Layout
