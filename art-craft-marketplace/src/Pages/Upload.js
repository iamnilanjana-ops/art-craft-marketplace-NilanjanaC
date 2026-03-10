// src/pages/Upload.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UploadForm from '../components/UploadForm';

function Upload() {
  return (
    <div>
      <Header />

      <div style={{ padding: '20px', textAlign: 'center' }}>
        <UploadForm />
      </div>

      <Footer />
    </div>
  );
}

export default Upload;