import React, { useState } from "react";

function UploadForm() {
  const [fileName, setFileName] = useState("");      // stores the selected file name
  const [uploaded, setUploaded] = useState(false);   // tracks if file is uploaded
  const [error, setError] = useState("");            // error message if no file selected

  // Handle file input change
  const handleFileChange = (event) => {
    setFileName(event.target.files[0]?.name || ""); // store file name
    setUploaded(false);                              // reset uploaded status
    setError("");                                    // clear errors
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();                         // prevent page reload
    if (!fileName) {
      setError("Please select a file first!");
      return;
    }
    // Simulate upload
    console.log("Uploading:", fileName);
    setUploaded(true);
    setFileName("");                                // reset input after upload
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", width: "300px" }}>
      <h2>Upload Your File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <br /><br />
        <button type="submit">Upload</button>
      </form>

      {/* Step 7 — Conditional Rendering */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {uploaded && <p style={{ color: "green" }}>File uploaded successfully!</p>}
    </div>
  );
}

export default UploadForm;