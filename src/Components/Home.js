import React, { useEffect, useState } from "react";
import Base from './Base';
import './Home.css';
//import React, { useEffect, useState } from "react";
import { loadCategory } from "../Components/Service/CategoryService";
import { loadProductByCategory } from "./Service/ProductService";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

function Home() {

    const [category, setCategory] = useState([]);
    const [products, setProducts] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        loadCategory()
            .then(data => {
                setCategory(data);
                console.log("Loaded categories:", data);
            })
            .catch(error => {
                console.error("Error loading categories", error);
            });
    }, []);

    const handleCategoryClick = (categoryId)=>{
        const requiredPath = `/products/${categoryId}`;
        navigate(requiredPath);
    }

    // const fetchProducts = async (categoryId) => {
    //     try {
            
    //         const data = await loadProductByCategory(categoryId);
    //         console.log("Response in Category:", data);
    //         const singleItem = data[0];
            
    //         setProducts(singleItem);
    //       console.log("Single object:", singleItem);
    //       navigate("/productsList", { state: singleItem });
           
    //     } catch (error) {
    //         //console.error("Error loading products:", error);
    //     }
    // };

    return (
        <Base>
            <div className="home-container">

                {/* Hero Section */}
                <section className="hero">
                    <h1>Welcome to the Economics Project</h1>
                    <p>Explore economic principles, real-world data, and key insights.</p>
                    <a href="#topics" className="cta-button">Explore Products</a>
                </section>

                {/* About Section */}
                <section className="about">
                    <h2>About the Project</h2>
                    <p>
                        This project explores foundational concepts of economics, including supply and demand,
                        inflation, market structures, and economic policies. It aims to help students and
                        enthusiasts understand how economic systems work in the real world.
                    </p>
                </section>

                {/* Topics Section */}
                <section className="topics" id="topics">
                    <h2>Product List</h2>
                    <div className="topics-grid">
                        {/* Show loading or message if empty */}
                        {category.length === 0 ? (
                            <div>Loading categories...</div>
                        ) : (
                            category.map((cat, index) => (
                                <div
                                    key={index}
                                    className="topic-card"
                                    onClick={() => handleCategoryClick(cat.categoryId)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {cat.categoryTitle && cat.categoryTitle.trim() !== ""
                                        ? cat.categoryTitle
                                        : "Unnamed Category"}
                                </div>
                            ))
                        )}
                    </div>
                </section>
            </div>
        </Base>
    );
}

export default Home;
