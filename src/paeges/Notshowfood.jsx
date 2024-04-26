import React from "react";
import { useState, useEffect } from "react";
import "./Notshowfood.css";
import axios from "axios";

function Notshowfood() {
  const [fooddata, setFooddata] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/show_all_food/")
      .then((res) => setFooddata(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="background-notshow">
        <div className="notshowfood">ไม่เเสดงรายการอาหาร</div>

        {fooddata.length > 0
          ? fooddata.map((itemfood, i) => (
              <div className="box-container">
                  <img src={itemfood.image_url} className="picture-menu" alt="Food" />
                <div className="food-name">
                  ชื่ออาหาร {itemfood.Food_name}
                </div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
              </div>
            ))
          : ""}
        <div className="grid-button">
          <button className="success-button">success</button>
          <button className="cancel-button">cancel</button>
        </div>
      </div>
    </>
  );
}

export default Notshowfood;
