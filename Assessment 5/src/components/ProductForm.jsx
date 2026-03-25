import { useState, useEffect } from 'react'


function ProductForm({ onSubmit, editingProduct, onCancel }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [errors, setErrors] = useState({})


  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name)
      setPrice(editingProduct.price.toString())
      setCategory(editingProduct.category || '')
      setErrors({})
    }
  }, [editingProduct])


  const validate = () => {
    const newErrors = {}
    if (!name.trim()) newErrors.name = 'Product name is required'
    if (!price || isNaN(price) || Number(price) <= 0)
      newErrors.price = 'A valid price is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const productData = {
      name: name.trim(),
      price: parseFloat(Number(price).toFixed(2)),
      category: category.trim() || 'Uncategorized',
    }

    if (editingProduct) {
      onSubmit({ ...productData, id: editingProduct.id })
    } else {
      onSubmit(productData)
    }


    setName('')
    setPrice('')
    setCategory('')
    setErrors({})
  }

  const handleCancel = () => {
    setName('')
    setPrice('')
    setCategory('')
    setErrors({})
    onCancel()
  }

  return (
    <div className="product-form-container">
      <h2 className="form-title">
        {editingProduct ? 'Edit Product' : 'Add New Product'}
      </h2>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="product-name">Product Name *</label>
          <input
            id="product-name"
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="product-price">Price ($) *</label>
          <input
            id="product-price"
            type="number"
            step="0.01"
            min="0"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={errors.price ? 'input-error' : ''}
          />
          {errors.price && <span className="error-msg">{errors.price}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="product-category">Category</label>
          <input
            id="product-category"
            type="text"
            placeholder="e.g. Electronics, Home"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingProduct ? 'Update Product' : 'Add Product'}
          </button>
          {editingProduct && (
            <button
              type="button"
              className="btn btn-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default ProductForm
