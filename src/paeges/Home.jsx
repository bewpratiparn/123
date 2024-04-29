import React, { useState, useEffect } from "react";
import "flowbite";

import "./Home.css";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/shops/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setfilterData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [datasearch, setDatasearch] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const handleFilter = (value) => {
    const res = filterData.filter((f) =>
      f.shop_name.toLowerCase().includes(value)
    );

    setDatasearch(res);
  };

  const handleGoToStore = (shopId) => {
    // Navigate to Store_information page with shop_id as parameter
    // Example URL: /Store_information?shop_id=67
    window.location.href = `/Store_information?shop_id=${shopId}`;
  };

  return (
    <>
      <header>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            onChange={(e) => handleFilter(e.target.value)}
          />
        </div>
      </header>

      <div className="bg-gray-100 min-h-screen p-4">
        <div className="text-2xl font-bold text-center mb-*">ร้านอาหาร</div>
        <div className="grid-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datasearch.map((d, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="containner-store-1" style={{}}>
                <div className="card" style={{ width: "70rem" }}>
                  <img
                    src={d.shop_picture} // ใช้ URL ที่ส่งมาจาก API
                    alt={d.shop_name}
                    style={{ width: "25rem", margin: "1rem", padding: "1rem" }}
                    className="picture-home"
                  />

                  <div className="data-storehome">
                    <div className="storename">ชื่อร้านค้า: {d.shop_name} </div>
                    <div className="tel">เบอร์โทร: {d.shop_phone} </div>
                    <div className="location-store">
                      สถานที่: {d.shop_location}
                    </div>
                  </div>

                  <button
                    className="btn btn-primary"
                    style={{ width: "10rem" }}
                    onClick={() => handleGoToStore(d.shop_id)}
                  >
                    ไปยังร้านค้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
