import React from "react";
import { useLocation } from "react-router-dom";
import "./Fooddetails.css";

function Fooddetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Foodname = searchParams.get("Food_name");
  const foodPrice = searchParams.get("Food_price");
  const foodPicture = searchParams.get("Food_picture");
  const foodElement = searchParams.get("Food_element");
  const foodElements = searchParams.get("food_elements");


  console.log(location.search);
  
  return (
    <div className="container">
      <div className="title">รายละเอียดเกี่ยวกับอาหาร</div>
      <div className="details">
        <div className="detail-food">ชื่ออาหาร : {Foodname}</div>
        <div className="detail-price">ราคา : {foodPrice} บาท</div>
      </div>
      <div className="image-container">
        <img
          src={foodPicture}
          alt="รูปภาพของอาหาร"
          className="food-image"
        />
        <div className="ingredients-container">
          <div className="ingredients-label">วัตถุดิบ</div>
          <p>{foodElements}</p>
        </div>
      </div>
      <div className="description-container">
        <div className="description-label">รายละเอียดอาหาร</div>
        <p>{foodElement}</p>
      </div>
    </div>
  );
}

export default Fooddetails;
