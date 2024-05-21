import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Resizer from "react-image-file-resizer";
import "./AddFood.css";

function AddFood() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [input, setInputs] = useState({
    Food_name: "",
    Food_element: "",
    Food_price: "",
    Food_picture: "",
  });
  const [imageURL, setImageURL] = useState("");

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "file") {
      const file = event.target.files[0];

      // Resize image
      Resizer.imageFileResizer(
        file,
        300, // New width (pixels)
        300, // New height (pixels)
        "JPEG", // Format
        100, // Quality (0-100)
        0, // Rotation (0 = no rotation, 90 = clockwise, -90 = counter-clockwise)
        (uri) => {
          setImageURL(uri);
        },
        "base64", // Output type
        300, // Color depth
        100 // Image size (percentage)
      );
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userToken = localStorage.getItem("token");

    if (userToken) {
      const headers = {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      };

      const raw = JSON.stringify({
        Food_name: input.Food_name,
        Food_element: input.Food_element,
        Food_price: input.Food_price,
        Food_picture: imageURL, // Change from input.Food_picture to imageURL
      });

      axios
        .post("http://127.0.0.1:8000/add_food/", raw, { headers })
        .then((response) => {
          if (response.data.message === "Food data added successfully") {
            MySwal.fire({
              html: <i>{response.data.message}</i>,
              icon: "success",
            }).then(() => {
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
    <div className="background">
      <div className="flex flex-col justify-center items-center m-10">
        <div className="m-5 text-center text-2xl font-bold">เพิ่มข้อมูลอาหาร</div>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ชื่อเมนู
            </label>
            <input
              className="p-2 border rounded-md w-full"
              name="Food_name"
              type="text"
              placeholder="ชื่อเมนู..."
              value={input.Food_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              องค์ประกอบอาหาร
            </label>
            <textarea
              className="p-2 border rounded-md w-full h-48 resize-none"
              name="Food_element"
              placeholder="องค์ประกอบของอาหาร"
              value={input.Food_element}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ราคา
            </label>
            <input
              className="p-2 border rounded-md w-full"
              name="Food_price"
              type="text"
              placeholder="ราคา..."
              value={input.Food_price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              โปรดเพิ่มรูปอาหารของท่าน
            </label>
            <input
              className="p-2 border rounded-md w-full"
              name="Food_picture"
              type="file"
              placeholder="รูปภาพ..."
              onChange={handleChange}
            />
            {imageURL && (
              <img
                src={imageURL}
                alt="Food"
                className="mt-2 rounded-md shadow-md max-w-xs"
              />
            )}
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
  );
}

export default AddFood;
