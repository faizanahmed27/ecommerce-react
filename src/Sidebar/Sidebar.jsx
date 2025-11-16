import React, { useEffect, useState } from "react";
import './Sidebar.scss'
import { ListGroup, ListGroupItem } from "reactstrap";
import { loadCategory } from "../Components/Service/CategoryService";

//function Sidebar() {
function Sidebar({ onCategorySelect }) {

    const [category, setCategory] = useState([]);
    
    useEffect(() => {
        loadCategory().then(data => {
            setCategory(data);
            console.log(category);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (

        <div className="sidebar">

            <div className="top">
                <span className="logo">Ecom/Category</span>
            </div>

            <hr></hr>

            <div className="center"></div>

            <div className="title">
                 <ListGroup>

        {/* Option to show all products */}
          <ListGroupItem
            action
            onClick={() => onCategorySelect(null)}
            style={{ cursor: "pointer" }}
          >
            All Products
          </ListGroupItem>
                    
          {/* Dynamically list categories */}
          {category.map((item, index) => (
            <ListGroupItem
              key={index}
              action
              onClick={() => onCategorySelect(item.categoryId)}
              style={{ cursor: "pointer" }}
            >
              {item.categoryTitle && item.categoryTitle.trim() !== ""
                ? item.categoryTitle
                : "Category not available"}
            </ListGroupItem>
          ))}
        </ListGroup>

                {/* <ListGroup>
                    {
                        category.map((item, index) => (

                            <ListGroupItem key={index}>
                                {item.categoryTitle && item.categoryTitle.trim() !== ""
                                    ? item.categoryTitle
                                    : "Category not available"}
                            </ListGroupItem>
                        ))
                    }
                </ListGroup> */}
            </div>
        </div>
    )
}

export default Sidebar