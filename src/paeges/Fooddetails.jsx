import React from 'react';
import './Fooddetails.css';

function Fooddetails() {
  return (
    <div className="container">
      <div className="title">หน้าแสดงรายละเอียดอาหาร</div>
      <div className="details">
        <div className="detail-food">ชื่ออาหาร : </div>
        <div className="detail-price">ราคา : </div>
      </div>
      <div className="image-container">
        <img
          src="https://i.ytimg.com/vi/XyYMbh2uay4/maxresdefault.jpg"
          alt="Food Image"
          className="food-image"
        />
        <div className="ingredients-container">
          <div className="ingredients-label"> วัตถุดิบ </div>
              <input
                type="text"
                id="ingredients1"
                name="ingredients1"
                className="ingredients-input"
              />
        </div>
      </div>
      <div>
        <div className="description">รายละเอียดอาหาร</div>
        <input
          type="text"
          id="ingredients1"
          name="ingredients1"
          className="description-input"
        />
      </div>
    </div>
  );
}

export default Fooddetails;
