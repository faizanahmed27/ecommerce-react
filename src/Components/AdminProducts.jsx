import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import './AdminProducts.scss'
import { loadProduct } from "./Service/ProductService";
const AdminProducts = () => {
  const [products, setProductDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 5;

  useEffect(() => {
    loadProduct(currentPage, pageSize)
      .then(response => {
        setProductDetails(response.content);
        setTotalPages(response.totalPages);
      })
      .catch(error => console.error(error));
  }, [currentPage]);

  return (
    <div style={styles.container}>
      <h2 className="title">Product List</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Product Name</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.productId}>
              <td style={styles.td}>{p.productName}</td>
              <td style={styles.td}>{p.category.categoryTitle}</td>
              <td style={styles.td}>{p.productPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "20px" }}>
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage + 1} of {totalPages}
        </span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
          disabled={currentPage + 1 === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px"
  },
  th: {
    border: "1px solid #ccc",
    padding: "8px",
    background: "#f2f2f2",
    textAlign: "left"
  },
  td: {
    border: "1px solid #ccc",
    padding: "8px"
  }
};

export default AdminProducts;
