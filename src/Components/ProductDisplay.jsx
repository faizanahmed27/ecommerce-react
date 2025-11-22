import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function ProductDisplay({ product, isHovered, setIsHovered }) {
  const originalPrice = product.productPrice;
  const discount = 0.10;
  const discountedPrice = (originalPrice - originalPrice * discount).toFixed(2);
  const image = `data:image/jpeg;base64,${product.productImage}`;

  const styles = {
    card: {
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      transition: "transform .3s ease, box-shadow .3s ease",
      cursor: "pointer",
      transform: isHovered ? "scale(1.02)" : "scale(1)",
      boxShadow: isHovered
        ? "0 6px 18px rgba(0,0,0,0.15)"
        : "0 4px 12px rgba(0,0,0,0.1)",
    },
    img: {
      height: "180px",
      width: "100%",
      objectFit: "contain",
      background: "#fafafa",
      padding: "10px",
    },
    oldPrice: {
      textDecoration: "line-through",
      color: "#888",
      fontSize: "15px",
      marginRight: "8px",
    },
    newPrice: {
      fontSize: "15px",
      color: "#0d6efd",
      fontWeight: "bold",
    },
    category: {
      fontSize: "14px",
      color: "#6c757d",
      marginTop: "4px",
    },
    actionContainer: {
      marginTop: "18px",
      display: "flex",
      justifyContent: "space-between",
    },
  };

  return (
    <Card
      className="m-2 h-80"
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt="loading..." style={styles.img} />
      <CardBody>
        <CardTitle tag="h5" className="fw-bold">
          {product.productName}
        </CardTitle>
        <CardSubtitle style={styles.category}>
          Category: {product.category.categoryTitle}
        </CardSubtitle>
        <CardText className="mt-2">
          {product.productDescription}
        </CardText>
        <div style={{ marginTop: "10px" }}>
          <span style={styles.oldPrice}>Rs. {originalPrice}</span>
          <span style={styles.newPrice}>Rs. {discountedPrice}</span>
        </div>
        <div style={styles.actionContainer}>
          <Button color="secondary" size="sm">View</Button>
          <Button color="primary" size="sm">Buy Now</Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductDisplay;
