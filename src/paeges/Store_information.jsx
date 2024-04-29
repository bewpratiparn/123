import React from "react";
import "./Store_information.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { Navigate, useLocation } from "react-router-dom";

function Store_information() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const shopId = searchParams.get("shop_id");
  const foodName = searchParams.get("food_name");
  const foodPrice = searchParams.get("food_price");
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/show_all_food/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleGoToStore = () => {
    window.location.href = `/Detailfood`;
  };

  return (
    <>
      <img
        src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
        className="picture"
      />

      <div className="containner-description">
        <div className="containner-box">
          <div className="colorinside">
            <label htmlFor="description">Description</label>

            <div className="location">สถานที่ ชื่อสถานที่ :</div>
            <div className="maplink">Map-link :</div>
            <div className="phone">เบอร์ติดต่อ :</div>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <img onClick={() => handleGoToStore()}
            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg"
            className="picture-menu"
          />

          <div>ชื่ออาหาร : {foodName}</div>
          <div>ราคา : {foodPrice} บาท</div>
          
        </div>
      </div>
    </>
  );
}
/*เหลือ ทำ ชื่ออาหาร เเละ ราคา ให้มาอยู่ด้านข้างขวาของรูป เเละ เอาสีดำเเถบด้านล่างออก*/
export default Store_information;
