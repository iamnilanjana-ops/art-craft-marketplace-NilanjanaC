// src/components/UploadForm.js
import React, { useState } from 'react';
import Button from './Button';

function UploadForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !image) {
      alert('Please fill all fields and select an image.');
      return;
    }
    // For now, just log the data
    console.log({ name, price, image });
    alert('Product uploaded successfully!');
    // Clear the form
    setName('');
    setPrice('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Upload Your Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ margin: '10px 0', padding: '8px', width: '250px' }}
      />
      <br />

      <input
        type="number"
        placeholder="Price ($)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ margin: '10px 0', padding: '8px', width: '250px' }}
      />
      <br />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        style={{ margin: '10px 0' }}
      />
      <br />

      <Button text="Upload Product" styleType="primary" />
    </form>
  );
}

export default UploadForm;