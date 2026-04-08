import React, { useEffect, useState } from "react";
import "./UploadForm.css";

function UploadForm({
  addProduct,
  editingProduct,
  updateProduct,
  setEditingProduct
}) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: ""
  });

  const [imageUrlInput, setImageUrlInput] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);

      if (
        editingProduct.image &&
        !editingProduct.image.startsWith("data:") &&
        !editingProduct.image.startsWith("blob:")
      ) {
        setImageUrlInput(editingProduct.image);
      } else {
        setImageUrlInput("");
      }
    } else {
      setFormData({
        name: "",
        price: "",
        image: ""
      });
      setImageUrlInput("");
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleImageUrlChange = (e) => {
    const value = e.target.value;
    setImageUrlInput(value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      image: value
    }));
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: reader.result
      }));
      setImageUrlInput("");
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price) return;

    if (editingProduct) {
      updateProduct(formData);
    } else {
      addProduct({
        ...formData,
        id: Date.now()
      });
    }

    setFormData({
      name: "",
      price: "",
      image: ""
    });
    setImageUrlInput("");
    e.target.reset();
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      price: "",
      image: ""
    });
    setImageUrlInput("");
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>

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
        type="text"
        placeholder="Paste image URL (optional)"
        value={imageUrlInput}
        onChange={handleImageUrlChange}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageFileChange}
      />

      {formData.image && (
        <img src={formData.image} alt="Preview" className="product-image" />
      )}

      <div className="form-buttons">
        <button type="submit">
          {editingProduct ? "Update Product" : "Add Product"}
        </button>

        {editingProduct && (
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default UploadForm;