import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Editstore.css";

function Editstore() {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [editShopId, setEditShopId] = useState(null);
  const [editShopData, setEditShopData] = useState({
    shop_name: "",
    shop_location: "",
    shop_phone: "",
    shop_time: "",
    shop_picture: "",
    shop_text: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("User not logged in");
        }

        // Fetch user data
        const userResponse = await axios.get(
          "http://127.0.0.1:8000/authorize/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserData(userResponse.data);

        // Fetch shops data
        const shopsResponse = await axios.get("http://127.0.0.1:8000/shops/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Filter shops to display only shops owned by the logged-in user
        const userShops = shopsResponse.data.filter(
          (shop) => shop.owner_id === userResponse.data.user_id
        );

        setShops(userShops);
      } catch (error) {
        setError(error);
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (shop) => {
    setEditShopId(shop.shop_id);
    setEditShopData({
      shop_name: shop.shop_name,
      shop_location: shop.shop_location,
      shop_phone: shop.shop_phone,
      shop_time: shop.shop_time,
      shop_picture: shop.shop_picture,
      shop_text: shop.shop_text,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditShopData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User not logged in");
      }

      const response = await axios.put(
        `http://127.0.0.1:8000/edit_shop/` + id,
        editShopData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      Swal.fire({
        title: "Success",
        text: response.data.message,
        icon: "success",
      });
      // Fetch updated shop data after editing
      const updatedShops = await axios.get("http://127.0.0.1:8000/shops/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShops(updatedShops.data);
      setEditShopId(null);
    } catch (error) {
      setError(error);
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
    <div className="main-container">
      {error && (
        <div className="error-message">
          <p>{error.message}</p>
        </div>
      )}
      {userData && (
        <div className="user-info">
          <h2>Welcome {userData.username}</h2>
          <p>{userData.email}</p>
        </div>
      )}

      <div className="flex items-center justify-center">
        <div className="w-1/2 rounded-lg bg-amber-500 text-white p-5 mt-5 ml-5">
          <form>
            <div className="mb-4 text-black ">
              <label htmlFor="" className="block">
                ชื่อร้านค้า
              </label>
              <input
                type="text"
                name="shop_name"
                className="w-full mt-3 p-3 rounded-lg"
                placeholder="โปรดใส่ชื่อร้าน ...."
              />
            </div>
            <div className="mb-4 text-black">
              <label htmlFor="" className="block">
                สถานที่
              </label>
              <input
                type="text"
                name="shop_location"
                className="w-full mt-3 p-3 rounded-lg"
                placeholder="โปรดใส่สถานที่ ...."
              />
            </div>
            <div className="mb-4 text-black">
              <label htmlFor="" className="block">
                เบอร์ติดต่อ
              </label>
              <input
                type="text"
                name="shop_phone"
                className="w-full mt-3 p-3 rounded-lg"
                placeholder="โปรดใส่เบอร์ติดต่อ ...."
              />
            </div>

            <div className="mb-4 text-black">
              <label htmlFor="" className="block">
                เวลาเปิดปิด
              </label>
              <input
                type="text"
                name="shop_time"
                className="w-full mt-3 p-3 rounded-lg"
                placeholder="โปรดใส่วัน-เวลา-เปิดปิด"
              />
            </div>
            <div className="mb-4 text-black">
              <label htmlFor="" className="block">
                ประเภทร้านของท่าน
              </label>
              <select className="mt-3 p-3 rounded-lg">
                <option>Halal</option>
                <option>Mangswirat</option>
                <option>Vegetarian</option>
                <option>Nothting</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="" className="block">
                รูปภาพร้านค้า
              </label>
              <input
                type="file"
                name="shop_picture"
                className="mt-3"
                placeholder="Enter ...."
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Update
            </button>
            <button className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded ml-6">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editstore;
