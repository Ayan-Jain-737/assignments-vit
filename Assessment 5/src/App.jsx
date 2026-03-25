import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

const initialProducts = []

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [editingProduct, setEditingProduct] = useState(null)

  const addProduct = (product) => {
    const newProduct = { ...product, id: Date.now() }
    setProducts((prev) => [...prev, newProduct])
  }

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  const startEditing = (product) => {
    setEditingProduct(product)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    )
    setEditingProduct(null)
  }

  const cancelEditing = () => setEditingProduct(null)

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                addProduct={addProduct}
                deleteProduct={deleteProduct}
                startEditing={startEditing}
                updateProduct={updateProduct}
                cancelEditing={cancelEditing}
                editingProduct={editingProduct}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
