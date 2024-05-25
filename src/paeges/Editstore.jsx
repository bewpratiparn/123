import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Editstore.css";

function Editstore() {
  const [store, setStore] = useState({});
  const [loading, setLoading] = useState(true);
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const userId = localStorage.getItem("user_id");

        if (!userId) {
          throw new Error("User ID not found in local storage");
        }

        const response = await axios.get(
          `http://127.0.0.1:8000/shops/?user_id=${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch shops data");
        }

        const data = await response.json();
        setShops(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      }
    };

    fetchShops();
  }, []);

  useEffect(() => {
    // เมื่อ component ถูก mount ให้ดึง user_id จาก localStorage
    const userId = localStorage.getItem("user_id");

    // ถ้าไม่มี user_id ใน localStorage ให้แสดงข้อความแจ้งเตือน
    if (!userId) {
      Swal.fire({
        title: "Error",
        text: "User ID not found in local storage",
        icon: "error",
      });
      setLoading(false);
      return;
    }

    const fetchStoreData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/edit_shop/${userId}`);
        setStore(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching store data:", error);
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
        setLoading(false);
      }
    };

    fetchStoreData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-container">
      {shops.map((shop, index) => (
        <div key={index} className="shop-container">
          <div>
            <img src={shop.shop_picture} className="picture" alt="Store" />
          </div>
          <div className="input-file-container">
            <label
              className="block mb-2 text-sm"
              style={{ fontWeight: "bold", color: "black" }}
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            />
            <p className="mt-1 text-sm" style={{ color: "black" }}>
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>
          <div className="shop-info" style={{ marginLeft: "220px", marginTop: "20px" }}>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "flex-start",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              <div style={{ maxWidth: "300px" }}>
                <label className="name-store" htmlFor="store_name">
                  ชื่อร้านค้า : {shop.shop_name}
                </label>
                <br />
                <label className="dayoff" htmlFor="store_time">
                  วัน เปิด-ปิด : {shop.shop_time}
                </label>
                <br />
                <label className="Location" htmlFor="Location">
                  สถานที่ : {shop.shop_location}
                </label>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "14px",
            }}
          >
            <div className="containner-box">
              <div className="colorinside">
                <label htmlFor="description">Description</label>
                <div className="location">
                  สถานที่ ชื่อสถานที่ : {shop.shop_location}
                </div>
                <div className="maplink">Map-link : {shop.maplink}</div>
                <div className="phone">เบอร์ติดต่อ : {shop.phone}</div>
              </div>
            </div>
          </div>
          <div className="grid-container">
            {shop.menu &&
              shop.menu.map((item, menuIndex) => (
                <div className="grid-item" key={menuIndex}>
                  <img src={item.image} className="picture-menu" alt={item.name} />
                  <div>ชื่ออาหาร: {item.name}</div>
                  <div>ราคา: {item.price}</div>
                </div>
              ))}
          </div>
        </div>
      ))}
      <div>
        <div className="grid-button">
          <button className="success-button">success</button>
          <button className="cancel-button">cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Editstore;
