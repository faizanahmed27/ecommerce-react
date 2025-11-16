import React, { useEffect } from "react";
import { Row, Col, Card, CardBody, CardText, Container, Button } from "reactstrap";

function Product({product}){
    const originalPrice = product.productPrice;
     const discount = 0.10; // 5%
     const discountedPrice = (originalPrice - originalPrice * discount).toFixed(2);
      // If your image is coming as base64 string (product.productImage)
     const image = `data:image/jpeg;base64,${product.productImage}`;
    // useEffect(()=>{
    //     console.log("In Product", product);
        
    // }, [])
    return (
        <div>
            <Row>
                <Col>
                <Card className="m-3">
                    <img src={image} alt="loading..." style={{ height: "150px", width: "100%", objectFit: "contain", margin: "2px 0" }}></img>
                    <CardBody>
                        <h5><span>{product.productId}</span> {product.productName}</h5>
                        
                        {product.productDescription}
                        <CardText><b>Category: {product.category.categoryTitle}</b></CardText>
                        
                            <span>
                                Price <del style={{fontSize:"16px", marginLeft:"3px", fontWeight:"bold"}}>{originalPrice}</del>
                            </span>
                            <span style={{fontSize:"15px", marginLeft:"3px", fontWeight:"bold"}}>{"Rs. "}</span>
                            <span style={{fontSize: "20px", fontWeight:"bold"}}>{discountedPrice}</span>
                        
                        <Container style={{display:"flex", textAlign:"center"}}>
                            <Button color="info" size="sm" className="m-2">View</Button>
                            <Button color="primary" size="sm" className="m-2">Buy</Button>
                        </Container>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Product