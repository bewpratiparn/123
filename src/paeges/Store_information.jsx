import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import "./Store_information.css";

function Store_information() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const shopId = searchParams.get("shop_id");
  const shopName = searchParams.get("shop_name");
  const shop_picture = searchParams.get("shop_picture");
  const shopLocation = searchParams.get("shop_location");
  const shopPhone = searchParams.get("shop_phone");
  const shopTime = searchParams.get("shop_time");
  const shopText = searchParams.get("shop_text");

  const [foodItems, setFoodItems] = useState([]);
 

  useEffect(() => {
  

    // Fetch food items
    axios.get(`http://127.0.0.1:8000/show_all_food/?shop_id=${shopId}`)
      .then(response => {
        const filteredFoodItems = response.data.filter(item => item.shop_id === parseInt(shopId));
        setFoodItems(filteredFoodItems);
      })
      .catch(error => {
        console.error("Error fetching food items:", error);
      });
  }, [shopId]);

  return (
    <div className="bk">
      <div className="card2">
        <div className="store-information-container">
          <div className="store-details">
            <img src={shop_picture} className="image-store" alt={shop_picture} />
            <div className="containner-description">
              <div className="containner-box">
                <div className="colorinside">
                  <div className="store-name">ชื่อร้านค้า : {shopName}</div>
                  <div className="location">สถานที่ ชื่อสถานที่ : {shopLocation}</div>
                  <div className="phone">เบอร์ติดต่อ : {shopPhone}</div>
                  <div className="time">วันเวลาเปิด-ปิด : {shopTime}</div>
                  <div className="symbol">ตราสัญลักษณ์ : {shopText}</div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-container2">
          {foodItems.map((item, index) => (
            <div className="grid-item-wrapper" key={index}>
              <div className="grid-item">
                <img src={item.Food_picture} className="picture-menu" alt={`รูปภาพของ ${item.Food_picture}`} />
                <div>ชื่ออาหาร : {item.Food_name}</div>
                <div>ราคา : {item.Food_price} บาท</div>
                <Link
                  to={{
                    pathname: `/Fooddetails`,
                    search: `?food_id=${item.food_id}`,
                    state: { foodItem: item }
                  }}
                  className="btn btn-primary"
                >
                  ดูรายละเอียด
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store_information;