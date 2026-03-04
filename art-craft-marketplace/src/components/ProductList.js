import ProductCard from "./ProductCard";

function ProductList({ products, deleteProduct }) {

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;