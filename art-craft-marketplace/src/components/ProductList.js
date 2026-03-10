function ProductList() {

  const products = [
    { id: 1, name: "Handmade Necklace", price: 20 },
    { id: 2, name: "Landscape Photo", price: 35 }
  ];

  return (
    <div>

      <h2>Products</h2>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))
      )}

    </div>
  );
}