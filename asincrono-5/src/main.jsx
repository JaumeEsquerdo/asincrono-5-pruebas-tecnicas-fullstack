import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ProductoProvider } from '../context/ProductoContext.jsx'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductoProvider>
      <Layout />
    </ProductoProvider>
  </StrictMode>,
)
