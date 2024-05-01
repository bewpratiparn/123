import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Store_information.css";

function Store_information() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const shopId = searchParams.get("shop_id");
  const shopName = searchParams.get("shop_name");
  const shopPicture = searchParams.get("shop_picture");
  const shoplocation = searchParams.get("shop_location");
  const shopphone = searchParams.get("shop_phone");
  const shopTime = searchParams.get("shop_time");

  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Fetch food items data from an API endpoint
    axios.get(`http://127.0.0.1:8000/show_all_food/?shop_id=${shopId}`)
      .then(response => {
        setFoodItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching food items:", error);
      });
  }, [shopId]);

  return (
    <>
      <img src={shopPicture} className="image-store" />
      <div className="store-name">ชื่อร้านค้า : {shopName}</div>
      <div className="store-name">วันเวลาเปิด-ปิด : {shopTime}</div>

      <div className="containner-description">
        <div className="containner-box">
          <div className="colorinside">
            <label htmlFor="description">Description</label>

            <div className="location">
              สถานที่ ชื่อสถานที่ : {shoplocation}{" "}
            </div>
            <div className="phone">เบอร์ติดต่อ : {shopphone} </div>
          </div>
        </div>
      </div>

      {foodItems.map((item, index) => (
        <div className="grid-container" key={index}>
          <div className="grid-item">
            <img
              src={item.Food_picture}
              className="picture-menu"
              alt={`รูปภาพของ ${item.Food_picture}`}
            />
            <button href="Detailfood">
              <div>ชื่ออาหาร : {item.Food_name}</div>
              <div>ราคา : {item.food_Price} บาท</div>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
export default Store_information;
