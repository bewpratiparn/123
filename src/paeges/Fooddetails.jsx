import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";
import "./Fooddetails.css";

function Fooddetails() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const foodId = searchParams.get("food_id");

  const [foodDetails, setFoodDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isThai, setIsThai] = useState(true); // state to track the current language

  useEffect(() => {
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

  const translate = async (text, targetLang) => {
    const apiUrl = targetLang === "en"
      ? "http://127.0.0.1:8000/translate/th-en/"
      : "http://127.0.0.1:8000/translate/en-th/";

    try {
      const response = await axios.post(apiUrl, { text });
      return response.data.translated_text;
    } catch (error) {
      console.error("Error translating text:", error);
      setError("Error translating text.");
      return text; // fallback to original text if translation fails
    }
  };

  const handleToggleLanguage = async () => {
    if (!foodDetails) return;
    setLoading(true);
    setError(null);
    try {
      const targetLang = isThai ? "en" : "th";
      const translatedFoodName = await translate(foodDetails.Food_name, targetLang);
      const translatedFoodElements = await translate(foodDetails.food_elements.join(", "), targetLang);
      const translatedFoodElement = await translate(foodDetails.Food_element, targetLang);

      setFoodDetails({
        ...foodDetails,
        Food_name: translatedFoodName,
        food_elements: translatedFoodElements.split(", "), // split back to array
        Food_element: translatedFoodElement,
      });
      setIsThai(!isThai);
    } catch (error) {
      console.error("Error during translation:", error);
    }
    setLoading(false);
  };

  if (loading) return (
    <div className="loading-container">
      <CircularProgress size={80} thickness={4} color="primary" /> 
    </div>
  );

  if (error) return <div>{error}</div>;

  const { Food_name, Food_price, Food_picture, Food_element, food_elements } = foodDetails;

  return (
    <div className="bk">
      <div className="container">
        <div className="translation-buttons">
          <Button
            variant="contained"
            size="large"
            color="primary"
            style={{ fontSize: "18px", padding: "15px 30px" }}
            onClick={handleToggleLanguage}
          >
            {isThai ? "Translate to English" : "แปลเป็นภาษาไทย"}
          </Button>
        </div>
        <div className="title">{isThai ? "รายละเอียดเกี่ยวกับอาหาร" : "Food Details"}</div>
        <div className="details">
          <div className="ingredients-container">
            <div className="ingredients-label">{isThai ? "ชื่ออาหาร :" : "Food Name:"}</div>
            <div className="description-apiname">{Food_name}</div>
          </div>
          <div className="ingredients-container">
            <div className="ingredients-label">{isThai ? "ราคา :" : "Price:"}</div>
            <div className="description-apiprice">{Food_price} {isThai ? "บาท" : "THB"}</div>
          </div>
        </div>
        <div className="image-container">
          <img
            src={Food_picture}
            alt={`${isThai ? "รูปภาพของ" : "Image of"} ${Food_name}`}
            className="food-image"
          />
          <div className="ingredients-container">
            <div className="ingredients-label">{isThai ? "วัตถุดิบ :" : "Ingredients :"}</div>
            <div className="description-api">{food_elements.join(", ")}</div>
          </div>
        </div>
        <div className="description-container">
          <div className="description-label">{isThai ? "รายละเอียดอาหาร :" : "Food Description :"}</div>
          <div className="description-api">{Food_element}</div>
        </div>
      </div>
    </div>
  );
}

export default Fooddetails;
