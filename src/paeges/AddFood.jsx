import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddFood.css";
import Resizer from "react-image-file-resizer";

function AddFood() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [input, setInputs] = useState({
    Food_name: "",
    Food_element: "",
    Food_price: "",
  });
  const [imageURL, setImageURL] = useState("");
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "file") {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);

      // Handle image resizing if needed
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
      const formData = new FormData();
      formData.append("Food_name", input.Food_name);
      formData.append("Food_element", input.Food_element);
      formData.append("Food_price", input.Food_price);
      formData.append("Food_picture", file);

      const headers = {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "multipart/form-data",
      };

      axios
        .post("http://127.0.0.1:8000/add_food/", formData, { headers })
        .then((response) => {
          MySwal.fire({
            html: (
              <i>{response.data.message || "Food data added successfully"}</i>
            ),
            icon: "success",
          }).then(() => {
            navigate("/Home");
          });
        })
        .catch((error) => {
          console.error(error);
          MySwal.fire({
            html: (
              <i>
                เกิดข้อผิดพลาดในการเพิ่มข้อมูลร้านค้า:{" "}
                {error.response?.data?.detail || error.message}
              </i>
            ),
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
          <div className="m-5 text-center text-xl font-bold">
            เพิ่มข้อมูลอาหาร
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    ชื่อเมนู
                  </label>
                  <input
                    className="p-2 border rounded-md"
                    name="Food_name"
                    type="text"
                    placeholder="ชื่อเมนู..."
                    value={input.Food_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    องค์ประกอบอาหาร
                  </label>
                  <input
                    className="p-2 border rounded-md w-96"
                    name="Food_element"
                    type="text"
                    placeholder="องค์ประกอบของอาหาร"
                    value={input.Food_element}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    ราคา
                  </label>
                  <input
                    className="p-2 border rounded-md"
                    name="Food_price"
                    type="text"
                    placeholder="ราคา..."
                    value={input.Food_price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    โปรดเพิ่มรูปอาหารของท่าน
                  </label>
                  <input
                    className="p-2 border rounded-md"
                    name="food_picture" // Ensure this name matches the backend expectation
                    type="file"
                    placeholder="รูปภาพ..."
                    onChange={handleChange}
                    required
                  />
                  {imageURL && (
                    <img
                      src={imageURL}
                      alt="Food"
                      className="mt-2 rounded-md shadow-md"
                      style={{ maxWidth: "300px" }}
                    />
                  )}
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
