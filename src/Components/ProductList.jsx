import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { loadProductByCategory } from "./Service/ProductService";
import Product from './Product'

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const {categoryId} = useParams(); // Fetch ID from URL

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
        <div>
            {products && products.length > 0 ? (
                products.map((item) => (

                    <Product key={item.productId} product={item} />
                ))
            ) : (
                <p>No Products available for this category</p>
            )}
        </div>
    );
};

export default ProductList;
