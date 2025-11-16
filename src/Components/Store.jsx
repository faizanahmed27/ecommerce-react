import React, { useEffect, useState } from "react";
import Base from './Base';
import Sidebar from "../Sidebar/Sidebar";
import Product from "./Product";
import Banner from "./Banner";     // Example extra component
import CartSummary from "./CartSummary"; // Another example
import './Store.scss'
import { Row, Col } from "reactstrap";
import { loadProduct } from "./Service/ProductService";
import CategoryProducts from "../Components/CategoryProducts";

function Store() {
    const [productDetails, setProductDetails] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const user = JSON.parse(localStorage.getItem("data"));
    const isNormalUser = user?.role === 'ADMIN'; // true if the user is admin
      
  // Load all products only when no category is selected
  useEffect(() => {
    if (!selectedCategory) {
      getProduct();
    }
  }, [selectedCategory]);

  const getProduct = () => {
    loadProduct()
      .then((data) => setProductDetails(data))
      .catch((error) => {
        console.log(error);
      });
  };

    return (
        <Base>
            <div className="store">
                {/* Pass handler to Sidebar */}
         <Sidebar onCategorySelect={setSelectedCategory} />

                <div className="storeContainer">
                   {selectedCategory ? (
            // Show category-specific products
            <CategoryProducts categoryId={selectedCategory} />
          ) : (
            // Default: show all products
            <Row md={0}>
              {productDetails &&
                productDetails.content
                  .filter((product) => product.live === true && (isNormalUser || product.productImage && product.productImage.trim() !== ""))
                  .map((each, index) => (
                    <Col key={index}>
                      <Product product={each} />
                    </Col>
                  ))}
            </Row>
          )}

                </div>
            </div>
        </Base>
    )
}

export default Store;