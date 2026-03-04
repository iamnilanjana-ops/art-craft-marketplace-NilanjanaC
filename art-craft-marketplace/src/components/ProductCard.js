function ProductCard({ product, deleteProduct }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => deleteProduct(product.id)}>
        Delete
      </button>
    </div>
  );
}

export default ProductCard;