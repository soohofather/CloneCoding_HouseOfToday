import React from "react";
import "./ItemCard.css";
import { ShoppingCart } from "lucide-react";

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <img
        className="item-image"
        src="https://placehold.co/200x200"
        alt="placeholder"
      />
      <div className="item-content">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-category">{item.category}</p>
        <div className="item-footer">
          <span className="item-price">{item.price.toLocaleString()} 원</span>
          <button className="add-to-cart-btn">
            <ShoppingCart style={{ width: "1rem", height: "1rem" }} />
            <span>담기</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
