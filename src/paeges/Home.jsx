import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import "./Home.css";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/shops/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <header>
        <Search />
      </header>

      <div className="bg-gray-100 min-h-screen p-4">
        <div className="text-2xl font-bold text-center mb-8">ร้านอาหาร</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={item.shop_text}
                alt={item.shop_name}
                className="w-64 mx-auto"
              />

              <div className="text-center mt-4">
                <h2 className="text-xl font-bold">{item.shop_name}</h2>
                <p className="text-gray-600">เบอร์โทร: {item.shop_phone}</p>
                <p className="text-gray-600">สถานที่: {item.shop_location}</p>
                <Link to="/Storeinformation" className="block mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    ไปยังร้านค้า
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
