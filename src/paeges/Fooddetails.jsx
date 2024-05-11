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

  return (
    <div className="bk">
      <div className="container">
        <div className="title">รายละเอียดเกี่ยวกับอาหาร</div>
        <div className="details">
          <div className="ingredients-container">
            <div className="ingredients-label">ชื่ออาหาร : </div>
            <div className="description-apiname">{Foodname}</div>
          </div>
          <div className="ingredients-container">
            <div className="ingredients-label">ราคา : </div>
            <div className="description-apiprice">{foodPrice}</div>
          </div>  
        </div>
        <div className="image-container">
          <img
            src={foodPicture}
            alt="รูปภาพของอาหาร"
            className="food-image"
          />
          <div className="ingredients-container">
            <div className="ingredients-label">วัตถุดิบ</div>
            <div className="description-api">{foodElements}</div>
          </div>
        </div>
        <div className="description-container">
          <div className="description-label">รายละเอียดอาหาร</div>
          <div className="description-api">{foodElement}</div>
        </div>
      </div>
    </div>
  );
}

export default Fooddetails;
