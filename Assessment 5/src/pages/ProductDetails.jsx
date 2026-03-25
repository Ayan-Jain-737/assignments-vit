import { useParams, Link } from 'react-router-dom'


function ProductDetails({ products }) {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="product-details-page">
        <div className="not-found">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">
            ← Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="product-details-page">
      <div className="details-card">
        <div className="details-badge">{product.category}</div>
        <h1 className="details-name">{product.name}</h1>
        <div className="details-price">${product.price.toFixed(2)}</div>
        <div className="details-info">
          <div className="info-row">
            <span className="info-label">Product ID</span>
            <span className="info-value">#{product.id}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Category</span>
            <span className="info-value">{product.category}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Price</span>
            <span className="info-value">${product.price.toFixed(2)}</span>
          </div>
        </div>
        <Link to="/" className="btn btn-primary details-back">
          ← Back to Products
        </Link>
      </div>
    </div>
  )
}

export default ProductDetails
