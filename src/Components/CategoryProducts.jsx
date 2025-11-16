import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import Product from "./Product";
import { loadProductByCategory } from "./Service/ProductService";
import './CategogyProducts.scss'

function CategoryProducts({ categoryId }) {
  const [products, setProducts] = useState([]);
  
  const user = JSON.parse(localStorage.getItem("data"));
  const isNormalUser = user?.role === 'ADMIN'; // true if the user is admin

  useEffect(() => {
    if (categoryId) {
      fetchProducts(categoryId);
    }
  }, [categoryId]);

  const fetchProducts = async (categoryId) => {
    try {
      console.log("Response in Category: ", (await loadProductByCategory(categoryId)));
      setProducts((await loadProductByCategory(categoryId)));
    } catch (error) {
      //console.error("Error loading products:", error);
    }
  };

  if (!categoryId) {
    return <p style={{ margin: "20px" }}>Please select a category</p>;
  }

  return (
  <Row md={0}>
    {products.length > 0 ? (
      (() => {
        const liveProducts = products.filter((product) => product.live === true && ( isNormalUser || product.productImage && product.productImage.trim() !== ""));

        return liveProducts.length > 0 ? (
          liveProducts.map((each) => (
            <Col key={each.productId}>
              <Product product={each} />
            </Col>
          ))
        ) : (
         <p className="empty-message">No live products found</p>
        );
      })()
    ) : (
      <p style={{ margin: "20px" }}>No products found</p>
    )}
  </Row>
);
}

export default CategoryProducts;
