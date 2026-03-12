function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} width="150" />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}

export default ProductCard;