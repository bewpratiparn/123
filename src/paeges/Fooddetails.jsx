import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from "@iconify/react";
import { CircularProgress } from "@mui/material";
import "./Store_information.css";
import "./Fooddetails.css";

function Fooddetails() {
  const navigate = useNavigate(); // Use the useNavigate hook
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const foodId = searchParams.get("food_id");

  const [foodDetails, setFoodDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState("th");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/show_all_food/?food_id=${foodId}`)
      .then((response) => {
        const foodItem = response.data.find(
          (item) => item.food_id === parseInt(foodId)
        );
        if (foodItem) {
          setFoodDetails(foodItem);
        } else {
          setError("Food item not found.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching food details:", error);
        setError("Error fetching food details.");
        setLoading(false);
      });
  }, [foodId]);

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  if (loading)
    return (
      <div className="loading-container">
        <CircularProgress size={80} thickness={4} color="primary" />
      </div>
    );

  if (error) return <div>{error}</div>;

  const { Food_name, Food_price, Food_picture, Food_element, food_elements } =
    foodDetails;

  return (
    <div className="bk191">
      <div className="card2">
        <div className="Outline-inFooddetails" onClick={handleBackClick}>
          <Icon icon="mdi:arrow-back" className="back" />
        </div>
        <div className="custom-select191">
          <select
            className="TranslateHome666"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="th" className="thai191">
              ไทย
            </option>
            <option value="en" className="eng191">
              English
            </option>
          </select>
          {language === "en" && (
            <img
              src="https://www.tornok.com/wp-content/uploads/2015/03/uk-flag.png"
              alt="English Flag"
            />
          )}
          {language === "th" && (
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/17/58/thailand-152711_1280.png"
              alt="Thai Flag"
            />
          )}
        </div>
        <div className="customfooddetail">
          <div className="title ">
            {language === "th"
              ? "รายละเอียดเกี่ยวกับอาหาร"
              : "Food Details"}
          </div>
          <div className="details">
            <div className="food-container">
              <div className="ingredients-label">
                {language === "th" ? "ชื่ออาหาร : " : "Food Name: "}
                <div className="Food_name">{Food_name}</div>
              </div>
            </div>
            <div className="price-container">
              <div className="ingredients-label">
                {language === "th" ? "ราคา : " : "Price:"}
                <div className="Food_price">
                  {Food_price} {language === "th" ? "บาท" : "THB"}
                </div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img
              src={Food_picture}
              alt={`${language === "th" ? "รูปภาพของ" : "Image of"} ${
                Food_name
              }`}
              className="food-image"
            />
            <div className="watudip-container">
              <div className="watudip-label">
                {language === "th" ? "วัตถุดิบ :" : "Ingredients :"}
              </div>
              <div className="showingredient">{food_elements.join(", ")}</div>
            </div>
          </div>
          <div className="containner-detailfood">
            <div className="description-label">
              {language === "th" ? "รายละเอียดอาหาร :" : "Food Description :"}
            </div>
            <div className="detailfood">{Food_element}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fooddetails;
