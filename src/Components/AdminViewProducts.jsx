import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import './AdminViewProducts.scss';

// const AdminViewProducts = ({ product }) => {
//   if (!product) {
//     return <p>No product data available.</p>;
//   }
// const product = 
//   { id: 1, name: "T-Shirt", category: "Cloth", price: 500, description: "Comfortable cotton T-shirt." };

 const initialProduct = {
  name: "Stylish Wireless Headphones",
  price: 129.99,
  description:
    "Experience high-quality sound with noise-canceling technology and 20 hours of battery life.",
  image: "", // Empty to test placeholder
};

const placeholderImage =
  "https://via.placeholder.com/500x500.png?text=No+Image+Available";
  

  const AdminViewProducts = () => {
    const { productId } = useParams();    // <-- FIX
    console.log("Product ID: ", productId);

   //const product = products.find((p) => p.id === Number(id));
   //console.log("product: ", product);
   //if (!product) return <h2>Product not found!</h2>;

    const [product, setProduct] = useState(initialProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

   return (
    <div className="max-w-4xl mx-auto p-6 md:flex md:gap-10">
      {/* Product Image */}
      <div className="md:w-1/2">
        <img
          src={product.image || placeholderImage}
          alt={product.name}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Product Edit Form */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

        <div className="flex flex-col gap-4">
          {/* Product Name */}
          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Product Price */}
          <div>
            <label className="block font-medium mb-1">Price ($)</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Product Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="4"
            />
          </div>

          {/* Product Image URL */}
          <div>
            <label className="block font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={() => alert("Product saved!")}
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Save Product
        </button>
      </div>
    </div>
  );
};



export default AdminViewProducts;
