
import React from "react";
import "./Store_information.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

function Store_information() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const shopId = searchParams.get("shop_id");
  const foodName = searchParams.get("food_name");
  const foodPrice = searchParams.get("food_price");
  const shopName = searchParams.get("shop_name");
  const shopText = searchParams.get("shop_text");
  const shoplocation = searchParams.get("shop_location");
  const shopphone = searchParams.get("shop_phone");




  console.log(foodName);
  console.log(foodPrice);
  console.log(shopName);
  console.log(shopText);
  console.log(shoplocation);
  console.log(shopphone);

  
  
  return (
    <>
      <img
        src={shopText}
        className="picture"
      />
      
      <div className="containner-description">
      <div className="location">ชื่อร้านค้า : {shopName}</div>
    
        <div className="containner-box">
            
          <div className="colorinside">
            <label htmlFor="description">Description</label>

            <div className="location">สถานที่ ชื่อสถานที่ : {shoplocation} </div>
            <div className="phone">เบอร์ติดต่อ : {shopphone} </div>
          </div>
        </div>
      </div>

     <div className="grid-container">
        <div className="grid-item">
          <img
            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
            className="picture-menu"
          />
          <button href ="Detailfood">
          <div>ชื่ออาหาร : {foodName}</div>
          <div>ราคา : {foodPrice} บาท</div>
          </button>
        </div>
      
      </div>
      
    </>
  );
}
/*เหลือ ทำ ชื่ออาหาร เเละ ราคา ให้มาอยู่ด้านข้างขวาของรูป เเละ เอาสีดำเเถบด้านล่างออก*/
export default Store_information;