import ProductCard from '../components/ProductCard.jsx'
import ProductForm from '../components/ProductForm.jsx'


function Home({
  products,
  addProduct,
  deleteProduct,
  startEditing,
  updateProduct,
  cancelEditing,
  editingProduct,
}) {
  const handleSubmit = editingProduct ? updateProduct : addProduct

  return (
    <div className="home-page">

      <section className="form-section">
        <ProductForm
          onSubmit={handleSubmit}
          editingProduct={editingProduct}
          onCancel={cancelEditing}
        />
      </section>


      <section className="product-list-section">
        <div className="section-header">
          <h2>Product Catalog</h2>
          <span className="product-count">{products.length} products</span>
        </div>
        {products.length === 0 ? (
          <div className="empty-state">
            <p>No products yet. Add your first product above!</p>
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onDelete={deleteProduct}
                onEdit={startEditing}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home
