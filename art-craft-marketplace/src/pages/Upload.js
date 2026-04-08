import React, { useEffect, useState } from "react";
import UploadForm from "../components/UploadForm";
import ProductList from "../components/ProductList";

const defaultProducts = [
  {
    id: 1,
    name: "Handmade Clay Pot",
    price: 25,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61"
  },
  {
    id: 2,
    name: "Knitted Scarf",
    price: 15,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 3,
    name: "Wooden Wall Art",
    price: 40,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  }
];

function Upload() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : defaultProducts;
  });

  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("products", JSON.stringify(products));
    } catch (error) {
      console.log("Storage limit reached:", error);
    }
  }, [products]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );

    if (editingProduct && editingProduct.id === id) {
      setEditingProduct(null);
    }
  };

  const editProduct = (product) => {
    setEditingProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
  };

  return (
    <div className="page-container">
      <h2>Upload Page</h2>

      <UploadForm
        addProduct={addProduct}
        editingProduct={editingProduct}
        updateProduct={updateProduct}
        setEditingProduct={setEditingProduct}
      />

      <ProductList
        products={products}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
    </div>
  );
}

export default Upload;