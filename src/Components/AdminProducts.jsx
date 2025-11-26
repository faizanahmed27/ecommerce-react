// Reports.js
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import './AdminProducts.scss'

const AdminProducts = () => {

     const [products] = useState([
    { name: "Track", category: "Cloths", price: "500" },
    { name: "Full T-Shirt", category: "Cloths", price: "560" },
    { name: "Oppo", category: "Mobile", price: "22000" }
  ]);

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
            <tr key={p.id}>
              <td style={styles.td}>{p.name}</td>
              <td style={styles.td}>{p.category}</td>
              <td style={styles.td}>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
