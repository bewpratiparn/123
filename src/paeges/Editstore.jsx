import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Editstore.css";

function Editstore() {
  const [store, setStore] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStoreData();
  }, []);

  const fetchStoreData = async () => {
    try {
      const userId = localStorage.getItem("user_id");

      if (!userId) {
        throw new Error("User ID not found in local storage");
      }

      const response = await axios.get(`http://127.0.0.1:8000/shops/?user_id=${userId}`);
      setStore(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching store data:", error);
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ marginLeft: "0px", marginRight: "0px", marginTop: "0px", backgroundColor: "white", width: "100vw", height: "100vh" }}>
      <div>
        <img
          src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg"
          className="picture"
          alt="Store"
        />
      </div>
      <div style={{ marginLeft: "220px", marginTop: "80px", display: "flex", justifyContent: "flex-start", fontSize: "24px", fontWeight: "bold" }}>
        <div style={{ maxWidth: "300px" }}>
          <label className="block mb-2 text-sm" style={{ fontWeight: "bold", color: "black" }} htmlFor="file_input">
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
      </div>
      <div>
        <div style={{ marginLeft: "580px", marginTop: "-250px", justifyContent: "flex-start", fontSize: "14px" }}>
          <label className="name-store" htmlFor="store_name">
            ชื่อร้านค้า : {store.name}
          </label>
          <br />
          <label className="dayoff" htmlFor="store_time">
            วัน เปิด-ปิด : {store.time}
          </label>
          <br />
          <label className="dayoff" htmlFor="store_hours">
            เวลา เปิด-ปิด : {store.hours}
          </label>
        </div>
      </div>
      <div style={{ marginLeft: "200px", marginTop: "200px", display: "flex", justifyContent: "flex-start", fontSize: "14px" }}>
        <div className="containner-box">
          <div className="colorinside">
            <label htmlFor="description">Description</label>
            <div className="location">สถานที่ ชื่อสถานที่ : {store.location}</div>
            <div className="maplink">Map-link : {store.maplink}</div>
            <div className="phone">เบอร์ติดต่อ : {store.phone}</div>
          </div>
        </div>
      </div>
      <div className="grid-container">
        {store.menu && store.menu.map((item, index) => (
          <div className="grid-item" key={index}>
            <img src={item.image} className="picture-menu" alt={item.name} />
            <div>ชื่ออาหาร: {item.name}</div>
            <div>ราคา: {item.price}</div>
          </div>
        ))}
      </div>
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
