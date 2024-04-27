import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./AddFood.css";
import axios from "axios";

function AddFood() {
  const [foodNames, setFoodNames] = useState([]);
  const [selectedFood, setSelectedFood] = useState({});
  const [foodDetails, setFoodDetails] = useState({});
  const [foodNamesWithElements, setFoodNamesWithElements] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/food_names")
      .then((res) => setFoodNamesWithElements(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleFoodSelection = (event) => {
    const selectedFoodName = event.target.value;
    const selectedFoodItem = foodNamesWithElements.find(
      (food) => food.food_name === selectedFoodName
    );
    setSelectedFood(selectedFoodItem);
    // เรียกใช้ API เพื่อโหลดข้อมูลเพิ่มเติมเกี่ยวกับอาหาร
    axios
      .get(`http://127.0.0.1:8000/food_names/`)
      .then((res) => {
        const selectedFoodDetails = res.data.find(
          (food) => food.food_name === selectedFoodName
        );
        setFoodDetails(selectedFoodDetails);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="background">
        <div className="flex flex-col justify-center items-center m-10">
          <div className="m-5 text-center ">เพิ่มข้อมูลอาหาร</div>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 width ">
                    ชื่อเมนู
                  </label>
                  <input
                    className="p-2 border rounded-md"
                    name="food_name"
                    type="text"
                    placeholder="ชื่อเมนู..."
                    htmlFor="ชื่อเมนู"
                    onChange={(e) => setSelectedFood(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-l font-medium text-gray-900 dark:text-back"
                    htmlFor="food_name"
                  >
                    รายการอาหาร
                  </label>
                  <select
                    className="mb-5 w-full max-w-xs"
                    onChange={handleFoodSelection}
                  >
                    {foodNamesWithElements.length > 0
                      ? foodNamesWithElements.map((food, i) => (
                          <option key={i}>{food.food_name}</option>
                        ))
                      : ""}
                  </select>
                </div>
                <textarea
                  name="food_details"
                  id="food_details"
                  cols="30"
                  rows="10"
                  value={foodDetails.food_element || ""}
                  readOnly
                />
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 width ">
                    ราคา
                  </label>
                  <input
                    className="p-2 border rounded-md"
                    name="food_price"
                    type="text"
                    placeholder="ราคา..."
                    value={foodDetails.price || ""}
                    htmlFor="ราคา"
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label className="inline-flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-black">เพิ่มมังสวิรัติ</span>
                  <img
                    src="https://media.istockphoto.com/id/1311125920/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%B4-100-%E0%B9%80%E0%B8%9B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B9%8C-%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%B4-%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C-eco-bio-%E0%B9%81%E0%B8%A5%E0%B8%B0-organic.jpg?s=612x612&w=0&k=20&c=FvYOIGvyyb941-1vz-_s2ZGgOUz-AZMEJ5zW8yFhU5g="
                    alt="มังสวิรัติ"
                    style={{ width: "70px", height: "auto" }} // กำหนดขนาดภาพเป็น 100px กว้างและปรับความสูงตามอัตราส่วน
                  />
                </label>
              </div>

              <div>
                <label className="inline-flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-black">เพิ่มอาหารเจ</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-b1-Nxx_cbgUySvFd2emKL8rQwR39810zYZp2U9PMgLXojLNnR8XlPJcUXEEs4ucfq0&usqp=CAU"
                    alt="อาหารเจ"
                    style={{ width: "70px", height: "auto" }} // กำหนดขนาดภาพเป็น 100px กว้างและปรับความสูงตามอัตราส่วน
                  />
                </label>
              </div>

              <div>
                <label className="inline-flex items-center  mb-4 ">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2 text-black ">เพิ่มฮาลาน</span>
                  <img
                    src="https://assets.brandinside.asia/uploads/2017/09/HALAL.jpg"
                    alt="ฮาลาน"
                    style={{ width: "70px", height: "auto" }} // กำหนดขนาดภาพเป็น 100px กว้างและปรับความสูงตามอัตราส่วน
                  />
                </label>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                ยืนยัน
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                ยกเลิก
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddFood;
