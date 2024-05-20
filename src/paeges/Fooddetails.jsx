import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Fooddetails.css";

function Fooddetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const foodId = searchParams.get("food_id");

  const [foodDetails, setFoodDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all food items and filter the specific item by food_id
    axios.get(`http://127.0.0.1:8000/show_all_food/`)
      .then(response => {
        const foodItem = response.data.find(item => item.food_id === parseInt(foodId));
        if (foodItem) {
          setFoodDetails(foodItem);
        } else {
          setError("Food item not found.");
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching food details:", error);
        setError("Error fetching food details.");
        setLoading(false);
      });
  }, [foodId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const { Food_name, Food_price, Food_picture, Food_element, food_elements } = foodDetails;

  return (
    <div className="bk">
      <div className="container">
        <div className="title">รายละเอียดเกี่ยวกับอาหาร</div>
        <div className="details">
          <div className="ingredients-container">
            <div className="ingredients-label">ชื่ออาหาร :</div>
            <div className="description-apiname">{Food_name}</div>
          </div>
          <div className="ingredients-container">
            <div className="ingredients-label">ราคา :</div>
            <div className="description-apiprice">{Food_price} บาท</div>
          </div>
        </div>
        <div className="image-container">
          <img
            src={Food_picture}
            alt={`รูปภาพของ ${Food_name}`}
            className="food-image"
          />
          <div className="ingredients-container">
            <div className="ingredients-label">วัตถุดิบ :</div>
            <div className="description-api">{food_elements}</div>
          </div>
        </div>
        <div className="description-container">
          <div className="description-label">รายละเอียดอาหาร :</div>
          <div className="description-api">{Food_element}</div>
        </div>
      </div>
    </div>
  );
}

export default Fooddetails;