import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // เพิ่ม import สำหรับ React Slick
import "slick-carousel/slick/slick.css"; // เพิ่ม import CSS สำหรับ React Slick
import "slick-carousel/slick/slick-theme.css"; // เพิ่ม import CSS สำหรับ React Slick
import "./Home.css";

function Home() {
  const [datasearch, setDatasearch] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [displayedShopIds, setDisplayedShopIds] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/shops/")
      .then((res) => res.json())
      .then((data) => {
        const uniqueShops = data.filter((shop, index, self) =>
          index === self.findIndex((s) => s.shop_id === shop.shop_id)
        );
        console.log(uniqueShops);
        setfilterData(uniqueShops);
      })
      .catch((err) => console.log(err));

    fetch("http://127.0.0.1:8000/show_all_food/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (value) => {
    const res = filterData.filter((f) =>
      f.shop_name.toLowerCase().includes(value)
    );
    setDatasearch(res);
  };

  const handleShopClick = (shopId) => {
    if (!displayedShopIds.includes(shopId)) {
      setDisplayedShopIds([...displayedShopIds, shopId]);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white light:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            onChange={(e) => handleFilter(e.target.value)}
          />
        </div>
      </header>

      <div className="bg-gray-100 min-h-screen p-4 ">
        <div className="text-3xl font-bold text-center mb-8">ร้านอาหาร</div>
        <div className="grid-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datasearch.map((d, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="container-store">
                <div className="card">
                  <img
                    src={d.shop_picture}
                    alt={d.shop_name}
                    className="picture-home"
                  />

                  <div className="data-storehome">
                    <div className="storename">ชื่อร้านค้า: {d.shop_name} </div>
                    <div className="location-store"> สถานที่: {d.shop_location} </div>
                    <div className="tel">เบอร์โทร: {d.shop_phone} </div>
                    <div className="time">วันเวลาเปิด-ปิด: {d.shop_time} </div>
                    <div className="symbol">ตราสัญลักษณ์: {d.shop_text} </div>
                    <br />
                    <div>
                      <h2>รายการอาหาร</h2>
                      <Slider {...settings}>
  {foodData
    .filter((food) => food.shop_id === d.shop_id)
    .map((food, index) => (
      <div key={index}>
        <h3>{food.Food_name}</h3>
        <img src={food.Food_picture} alt={food.Food_name} style={{ width: '100%' }} />
      </div>
    ))}
</Slider>

                    </div>
                  </div>

                  {!displayedShopIds.includes(d.shop_id) && (
                    <Link
                      to={{
                        pathname: `/Store_information`,
                        search: `?shop_id=${d.shop_id}&shop_name=${d.shop_name}&shop_picture=${d.shop_picture}&shop_location=${d.shop_location}&shop_phone=${d.shop_phone}&shop_time=${d.shop_time}&shop_text=${d.shop_text}`
                      }}
                      className="btn btn-primary"
                      onClick={() => handleShopClick(d.shop_id)}
                    >
                      ไปยังร้านค้า
                    </Link>
                  )}
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
