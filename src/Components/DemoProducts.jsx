import React, { useState, useMemo, useEffect } from "react";
import { Card } from "reactstrap";
import ImageUploadCard from "./ImageUploadCard";
import './DemoProduct.scss';
import { loadProductWitoutImage } from "./Service/ProductService";

const initialProducts = [
  { id: 1, name: "Product A", image: null },
  { id: 2, name: "Product B", image: null },
  { id: 3, name: "Product C", image: "https://via.placeholder.com/300" },
  { id: 4, name: "Product D", image: null },
  { id: 5, name: "Product E", image: null },
  { id: 6, name: "Product F", image: null },
  { id: 7, name: "Product G", image: null },
  { id: 8, name: "Product H", image: null },
  { id: 9, name: "Product I", image: null },
  { id:10, name: "Product J", image: null }
];

export default function DemoProjects({ isAdmin }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  // NEW: Track temporary preview separately
  const [previewMap, setPreviewMap] = useState({});

  useEffect(() => {
    loadProductWitoutImage(currentPage, itemsPerPage)
      .then(response => {
        setProducts(response.content);
      })
      .catch(console.error);
  }, [currentPage]);

  // ✅ Update preview instantly
const updatePreview = (productId, previewUrl) => {
  setPreviewMap(prev => ({ ...prev, [productId]: previewUrl }));
};

  // ✅ Update permanent image after upload
const updateProductImage = (productId, imageUrl) => {
  setProducts(prev =>
    prev.map(p => (p.productId === productId ? { ...p, productImage: imageUrl } : p))
  );
};

  return (
    <div className="grid">
      {products.map(product => (
        <Card key={product.productId} className="card">

          {/* ✅ MAIN IMAGE OR PREVIEW */}
          <div className="card-media">
            {product.productImage ? (
              <img className="card-image" src={product.productImage} alt={product.productName} />
            ) : previewMap[product.productId] ? (
              <img className="card-image" src={previewMap[product.productId]} alt="preview" />
            ) : (
              <div className="card-placeholder">No Image</div>
            )}
          </div>

          <div className="card-body">
            <h3>{product.productName}</h3>

            {isAdmin && (
              <ImageUploadCard
                product={product}
                onPreview={updatePreview}  
                onUpload={updateProductImage}  
              />
            )}
          </div>

        </Card>
      ))}
    </div>
  );
}
