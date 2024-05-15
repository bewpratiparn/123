import React from "react";
import "./Detailfood.css";
import { useLocation } from "react-router-dom";
function Detailfood() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const foodElements = searchParams.get("food_elements");
  const foodPicture = searchParams.get("Food_picture");
  const foodElement = searchParams.get("Food_element");
  const foodPrice = searchParams.get("food_price");
  console.log(foodPicture);
  console.log(location.search);
  return (
    <>
      <div
        style={{
          marginLeft: "0px",
          marginRight: "40px",
          fontSize: "24px",
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
        }}
      >
        หน้าแสดงรายละเอียดอาหาร
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "flex-end",
          fontSize: "19px",
        }}
      >
        <div className="namefood">ชื่ออาหาร :</div>
        <div className="price">ราคา : {foodPrice}</div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          justifyContent: "center",
        }}
      >
        <img
          className="picture_in_detailstore"
          src={foodPicture}
          alt="Food_picture"
        />
        <div className="titlebar">วัตถุดิบ</div>

        <div style={{ marginLeft: "10px", fontSize: "16px" }}>
          <div className="foodElements">
            <textarea
              value={foodElements}
              id="ingredients1"
              name="ingredients1"
              style={{ marginLeft: "100px", padding: "10px", width: "800px" }}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="detail_food">รายละเอียดอาหาร</div>
        <div className="textelement">
          <textarea
            value={foodElement}
            type="text"
            id="ingredients1"
            name="ingredients1"
            style={{ width: "750px", padding: "20px" }}
          />
        </div>
      </div>
    </>
  );
}

export default Detailfood;
