import React, { useState } from "react";
import "./UploadForm.css";

function UploadForm({ addProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: reader.result
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price) return;

    const newProduct = {
      ...formData,
      id: Date.now()
    };

    addProduct(newProduct);

    setFormData({
      name: "",
      price: "",
      image: ""
    });

    e.target.reset();
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h3>Upload Product</h3>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      {formData.image && (
        <img
          src={formData.image}
          alt="Preview"
          className="product-image"
        />
      )}

      <button type="submit">Add Product</button>
    </form>
  );
}

export default UploadForm;