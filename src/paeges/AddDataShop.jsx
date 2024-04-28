import React, { useState } from "react";
import "./AddDataShop.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddDataShop() {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [addShop, setAddShop] = useState({
    pictureshop: "",
    storename: "",
    location: "",
    phone: "",
    onclose: "",
  });

  const [addMangswirat, setMangswirat] = useState(false);
  const [addVegetarian, setVegetarian] = useState(false);
  const [addHalal, setHalal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const shopTypeArray = [];
  if (addMangswirat) shopTypeArray.push("Mangswirat");
  if (addVegetarian) shopTypeArray.push("Vegetarian");
  if (addHalal) shopTypeArray.push("Halal");
  const shopType = shopTypeArray.join(", ");

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    switch (name) {
      case "Mangswirat":
        setMangswirat(checked);
        break;
      case "Vegetarian":
        setVegetarian(checked);
        break;
      case "Halal":
        setHalal(checked);
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddShop((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userToken = localStorage.getItem("token");
  
    if (userToken) {
      const headers = {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      };
  
      const requestData = {
        shop_name: addShop.storename,
        shop_location: addShop.location,
        shop_phone: addShop.phone,
        shop_time: addShop.onclose,
        shop_picture: addShop.pictureshop,
        shop_type: shopType,
      };
  
      axios.post("http://127.0.0.1:8000/add_shop/", requestData, { headers })
        .then((response) => {
          if (response.data === "token") {
            MySwal.fire({
              html: <i>{response.data.message}</i>,
              icon: "success",
            }).then((value) => {
              navigate("/Home");
            });
          } else {
            MySwal.fire({
              html: <i>เพิ่มข้อมูลร้านค้าสำเร็จ</i>,
              icon: "success",
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
      <div className="form-center">
        {isLoggedIn && (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center items-center m-10 ">
              <div className="m-5 text-center ">เพิ่มข้อมูลร้านค้า</div>
              <div className="containeruploadfile">
                <input
                  className=""
                  name="pictureshop"
                  type="file"
                  id="upload_file"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 ">
                  ชื่อร้าน
                </label>
                <input
                  className="p-2 border rounded-md"
                  name="storename"
                  id="fstore"
                  type="text"
                  onChange={handleChange}
                  placeholder="กรอกชื่อร้าน"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-3 width ">
                  สถานที่
                </label>
                <input
                  className=" p-2 border rounded-md"
                  name="location"
                  type="text"
                  id="flocation"
                  onChange={handleChange}
                  placeholder="สถานที่"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 width ">
                  เบอร์โทรศัพท์
                </label>
                <input
                  className=" p-2 border rounded-md"
                  name="phone"
                  type="text"
                  id="ftel"
                  onChange={handleChange}
                  placeholder="กรอกเบอร์โทรศัพท์"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 width ">
                  เวลา เปิด-ปิด
                </label>
                <input
                  className=" p-2 border rounded-md"
                  name="onclose"
                  type="text"
                  id="onclose"
                  onChange={handleChange}
                  placeholder="เวลา เปิด-ปิด"
                />
              </div>
              <div className="grid grid-rows-3 gap-2">
                <div>
                  <label className="inline-flex items-center mb-2">
                    <input
                      type="checkbox"
                      name="Mangswirat"
                      className="form-checkbox text-blue-600"
                      checked={addMangswirat}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2 text-black">เพิ่มมังสวิรัติ</span>
                  </label>
                </div>

                <div>
                  <label className="inline-flex items-center mb-2">
                    <input
                      type="checkbox"
                      name="Vegetarian"
                      className="form-checkbox text-blue-600"
                      checked={addVegetarian}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2 text-black">เพิ่มอาหารเจ</span>
                  </label>
                </div>

                <div>
                  <label className="inline-flex items-center  mb-4 ">
                    <input
                      type="checkbox"
                      name="Halal"
                      className="form-checkbox text-blue-600"
                      checked={addHalal}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2 text-black ">เพิ่มฮาลาน</span>
                  </label>
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
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  ยกเลิก
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default AddDataShop;
