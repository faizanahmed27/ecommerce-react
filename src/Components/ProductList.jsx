import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { loadProductByCategory } from "./Service/ProductService";
import ProductDisplay from './ProductDisplay'
import Base from './Base';
import { Row, Col } from "reactstrap";

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams(); // Fetch ID from URL
    const [hoverStates, setHoverStates] = useState({});
    const [isHovered, setIsHovered] = useState({});

    useEffect(() =>{
    fetchProducts(categoryId);
    }, [])

    const fetchProducts = async (categoryId) => {
        try{
            //setProducts(values);
            const data = await loadProductByCategory(categoryId);
            setProducts(data);
        } catch (error){

        }
    }

    return (
        <Base>
       
        <div>
              <Row className="mt-3">
      {products && products.length > 0 ? (
        products.map((product) => {
         // const [isHovered, setIsHovered] = useState(false);
          return (
            <Col key={product.productId} lg="2" md="6" sm="12" className="d-flex">
              <ProductDisplay
                product={product}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
              />
            </Col>
          );
        })
      ) : (
        <p>No Products available for this category</p>
      )}
    </Row>
        </div>
       
        </Base>
    );
};

export default ProductList;
