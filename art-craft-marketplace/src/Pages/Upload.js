import { useState } from "react";
import UploadForm from "../components/UploadForm";
import ProductList from "../components/ProductList";

function Upload() {

  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <h2>Upload Product</h2>

      <UploadForm addProduct={addProduct} />

      <ProductList products={products} />
    </div>
  );
}

export default Upload;