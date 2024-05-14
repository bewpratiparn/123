import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import "./AddFood.css";
import axios from "axios";

// Import statements...

function AddFood() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [input, setInputs] = useState({
    Food_name: "",
    Food_element: "",
    Food_price: "",
    Food_picture: "",
  });
  const [selectedFood, setSelectedFood] = useState({});
  const [foodDetails, setFoodDetails] = useState({});
  const [foodNamesWithElements, setFoodNamesWithElements] = useState([]);
  const [addMangswirat, setMangswirat] = useState(false);
  const [addVegetarian, setVegetarian] = useState(false);
  const [addHalal, setHalal] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);
  const [showNoneOption, setShowNoneOption] = useState(true);

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userToken = localStorage.getItem("token");

    if (userToken) {
      const headers = {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      };
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
     /* const combinedFoodElement = `${foodDetails.food_element || ""} ${
        input.Food_element || ""
      }`;*/

      const raw = JSON.stringify({
        Food_name: input.Food_name,
        Food_element: input.Food_element,
        Food_price: input.Food_price,
        Food_picture: input.Food_picture,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      axios
        .post("http://127.0.0.1:8000/add_food/", raw, { headers })
        .then((response) => {
          if (response.message ==="Food data added successfully") {
            MySwal.fire({
              html: <i>{response.message}</i>,
              icon: "success",
            }).then((value) => {
              navigate("/Home");
            });
          } else {
            MySwal.fire({
              html: <i>เพิ่มข้อมูลร้านค้าสำเร็จ</i>,
              icon: "error",
            });
          }
        })
        .catch((error) => {
          console.error(error);
          MySwal.fire({
            html: <i>เกิดข้อผิดพลาดในการเพิ่มข้อมูลร้านค้า</i>,
            icon: "error",
          });
        });
    } else {
      MySwal.fire({
        html: <i>โปรดล็อกอิน</i>,
        icon: "warning",
      });
    }
  };

  return (
    <>
      <div className="background">
        <div className="flex flex-col justify-center items-center m-10">
          <div className="m-5 text-center ">เพิ่มข้อมูลอาหาร</div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 width ">
                    ชื่อเมนู
                  </label>
                  <input
                    className="p-2 border rounded-md"
                    name="Food_name"
                    type="text"
                    placeholder="ชื่อเมนู..."
                    htmlFor="ชื่อเมนู"
                    value={input.Food_name || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 width ">
                    องค์ประกอบอาหาร
                  </label>
                  <input
                    className="p-2 border rounded-md w-96 "
                    name="Food_element"
                    type="text"
                    placeholder="องค์ประกอบของอาหาร"
                    value={input.Food_element || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 width ">
                    ราคา
                  </label>
                  <input
                    className="p-2 border rounded-md"
                    name="Food_price"
                    type="text"
                    placeholder="ราคา..."
                    htmlFor="ราคา"
                    value={input.Food_price || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 width ">
                    โปรดเพิ่มรูปอาหารของท่าน
                  </label>
                  <input
                    className="p-2 border rounded-md"
                    name="Food_picture"
                    type="file"
                    placeholder="ราคา..."
                    htmlFor="รูปภาพ"
                    value={input.Food_picture || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                ยืนยัน
              </button>
              <button
                type="reset"
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
