import React, { useState, useEffect } from "react";

/**
 * ImageUploadCard
 * - Shows file input and "Replace Image" button.
 * - When the user selects a new file, shows a temporary preview inside the uploader only.
 * - After "Upload" we call onUpload(url) — here we simulate by returning the local object URL.
 * - IMPORTANT: It does NOT re-render the existing uploaded image (main card displays the saved image).
 */

export default function ImageUploadCard({ product, onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [localPreview, setLocalPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Create object URL for preview when a file is selected
  useEffect(() => {
    if (!selectedFile) {
      setLocalPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setLocalPreview(objectUrl);

    // cleanup
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files && e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    setUploading(true);

    // Simulate an upload (in real app you would POST the file to server and get a URL back)
    // We'll simulate a small delay and then return the object URL (local preview) to the parent.
    await new Promise(res => setTimeout(res, 700));

    // Use the same object URL created earlier (or you could call an API and get a permanent URL)
    const uploadedUrl = localPreview;

    onUpload(uploadedUrl);

    // Clear selection after upload (keeps main card image)
    setSelectedFile(null);
    setLocalPreview(null);
    setUploading(false);
  };

  return (
    <div className="uploader">
      <label className="file-row">
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </label>

      {localPreview && (
        <div className="uploader-preview">
          <img src={localPreview} alt="new preview" />
          <div className="preview-note">Preview (new)</div>
        </div>
      )}

      <div className="uploader-actions">
        <button
          className="btn-primary"
          onClick={handleUpload}
          disabled={!selectedFile || uploading}
        >
          {uploading ? "Uploading..." : "Replace Image"}
        </button>
      </div>
    </div>
  );
}
