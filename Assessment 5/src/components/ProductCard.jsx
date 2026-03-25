import { Link } from 'react-router-dom'


function ProductCard({ product, onDelete, onEdit }) {
  return (
    <div className="product-card">
      <div className="product-card-header">
        <span className="product-category">{product.category}</span>
        <span className="product-price">${product.price.toFixed(2)}</span>
      </div>
      <div className="product-card-body">
        <h3 className="product-name">{product.name}</h3>
      </div>
      <div className="product-card-actions">
        <Link to={`/product/${product.id}`} className="btn btn-view">
          View
        </Link>
        <button className="btn btn-edit" onClick={() => onEdit(product)}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default ProductCard
