import React, { useState } from "react";
import "./UploadForm.css";

function UploadForm({ addProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price,
      image
    };

    addProduct(newProduct);

    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h3>Upload Product</h3>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default UploadForm;