import React, { useState, useEffect } from "react";
import { uploadImage } from "./Service/ProductService"; // ✅ Import your API function

export default function ImageUploadCard({ product, onUpload, onPreview }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [localPreview, setLocalPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Instant Preview when file is chosen
  useEffect(() => {
    if (!selectedFile) return;
    const url = URL.createObjectURL(selectedFile);
    setLocalPreview(url);
    onPreview?.(product.productId, url);
    return () => URL.revokeObjectURL(url);
  }, [selectedFile]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);

    try {
      // ✅ Call your API service function
      const data = await uploadImage(product.productId, selectedFile);

      // ✅ Backend returns updated ProductDTO which contains DB image bytes
      const imageBase64 = data.productImage;
      const permanentUrl = `data:image/jpeg;base64,${imageBase64}`;

      // ✅ Update UI parent + database already saved by backend
      onUpload(product.productId, permanentUrl);

      alert("Image uploaded successfully ✅");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Image upload failed ❌");
    }

    setUploading(false);
    setSelectedFile(null);
    setLocalPreview(null);
  };

  return (
    <>
      <style>{`
        .uploader-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        .btn-primary {
          width: 180px;
          padding: 10px;
          font-size: 15px;
          border-radius: 8px;
          background: #007bff;
          color: white;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }

        .btn-primary:hover {
          opacity: 0.9;
          transform: scale(1.02);
        }
      `}</style>

      <div className="uploader-actions">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button className="btn-primary" onClick={handleUpload} disabled={!selectedFile || uploading}>
          {uploading ? "Uploading..." : "Upload Image"}
        </button>
      </div>
    </>
  );
}
