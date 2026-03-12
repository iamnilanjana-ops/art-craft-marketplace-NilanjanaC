import ProductCard from "./ProductCard";

function ProductList({ products }) {

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;