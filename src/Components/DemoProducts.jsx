import React, { useState, useMemo } from "react";
import { Card } from "reactstrap";
import ImageUploadCard from "./ImageUploadCard";
import './DemoProduct.scss';

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
  const [products, setProducts] = useState(initialProducts);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    return isAdmin ? products : products.filter(p => !p.image);
  }, [isAdmin, products]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const updateProductImage = (id, newImageUrl) => {
    setProducts(prev =>
      prev.map(p => (p.id === id ? { ...p, image: newImageUrl } : p))
    );
    setCurrentPage(1);
  };

  const goNext = () => setCurrentPage(p => Math.min(totalPages, p + 1));
  const goPrev = () => setCurrentPage(p => Math.max(1, p - 1));

  return (
    <div className="container">
      <h2 className="page-title">Products {isAdmin ? "(Admin Panel)" : "(Missing Images)"}</h2>

      <div className="grid">
        {currentItems.map(product => (
          <Card key={product.id} className="card">

            {/* BIG RESPONSIVE IMAGE PREVIEW ON CARD ✅ */}
            <div className="card-media">
              {product.image ? (
                <img className="card-image" src={product.image} alt={product.name} />
              ) : (
                <div className="card-placeholder">No Image</div>
              )}
            </div>

            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>

              {/* Admin uploader (still no duplicate preview) ✅ */}
              {isAdmin && (
                <ImageUploadCard
                  product={product}
                  onUpload={(url) => updateProductImage(product.id, url)}
                />
              )}

              {!isAdmin && <p className="missing-note">Image unavailable</p>}
            </div>

          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button className="page-btn" onClick={goPrev} disabled={currentPage === 1}>← Prev</button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button className="page-btn" onClick={goNext} disabled={currentPage === totalPages}>Next →</button>
      </div>
    </div>
  );
}
