import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

function Home() {
  const [datasearch, setDatasearch] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [displayedShopIds, setDisplayedShopIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/shops/")
      .then((res) => res.json())
      .then((data) => {
        const uniqueShops = data.filter((shop, index, self) =>
          index === self.findIndex((s) => s.shop_id === shop.shop_id)
        );
        setfilterData(uniqueShops);
        setDatasearch(uniqueShops); // แสดงร้านทั้งหมดเมื่อโหลดคอมโพเนนต์
      })
      .catch((err) => console.log(err));

    fetch("http://127.0.0.1:8000/show_all_food/")
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (value) => {
    setSearchTerm(value);
    // กรองร้านค้าที่มีชื่อตรงกับคำค้นหา
    const filteredShops = filterData.filter((shop) =>
      shop.shop_name.toLowerCase().includes(value.toLowerCase())
    );
    
    // กรองอาหารที่มีชื่อหรือส่วนหนึ่งของชื่อตรงกับคำค้นหา
    const filteredFoods = foodData.filter((food) =>
      food.Food_name.toLowerCase().includes(value.toLowerCase())
    );
  
    // สร้างเซ็ตของ shop_id ที่เกี่ยวข้องกับอาหารที่ค้นหาได้
    const shopIds = new Set(filteredFoods.map((food) => food.shop_id));
  
    // กรองร้านค้าที่เกี่ยวข้องกับอาหารที่ค้นหาได้
    const filteredShopsWithFood = filterData.filter((shop) =>
      shopIds.has(shop.shop_id)
    );
  
    // เชื่อมร้านค้าที่ค้นหาได้และร้านค้าที่เกี่ยวข้องกับอาหารไว้ด้วยกัน
    const result = [...filteredShops, ...filteredShopsWithFood];
  
    // ลบร้านค้าที่ซ้ำออก
    const uniqueResult = result.filter((shop, index, self) =>
      index === self.findIndex((s) => s.shop_id === shop.shop_id)
    );
  
    // ตั้งค่าข้อมูลที่ค้นหาและแสดงผล
    setDatasearch(uniqueResult);
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
        <div className="boxsearch">
          <input
            type="textsearch"
            id="default-search"
            placeholder="ค้นหา"
            value={searchTerm}
            onChange={(e) => handleFilter(e.target.value)}
          />
        </div>
      </header>

      <div className="bg-gray-100 min-h-screen p-4">
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
                    <div className="storename">
                      ชื่อร้านค้า:{" "}
                      {searchTerm && d.shop_name.toLowerCase().includes(searchTerm.toLowerCase()) ? (
                        <span style={{backgroundColor: 'yellow'}}>
                          {d.shop_name}
                        </span>
                      ) : (
                        d.shop_name
                      )}
                    </div>
                    <div className="location-store">
                      สถานที่:{" "}
                      {searchTerm && d.shop_location.toLowerCase().includes(searchTerm.toLowerCase()) ? (
                        <span style={{backgroundColor: 'yellow'}}>
                          {d.shop_location}
                        </span>
                      ) : (
                        d.shop_location
                      )}
                    </div>
                    <div className="tel">
                      เบอร์โทร:{" "}
                      {searchTerm && d.shop_phone.toLowerCase().includes(searchTerm.toLowerCase()) ? (
                        <span style={{backgroundColor: 'yellow'}}>
                          {d.shop_phone}
                        </span>
                      ) : (
                        d.shop_phone
                      )}
                    </div>
                    <div className="time">
                      วันเวลาเปิด-ปิด:{" "}
                      {searchTerm && d.shop_time.toLowerCase().includes(searchTerm.toLowerCase()) ? (
                        <span style={{backgroundColor: 'yellow'}}>
                          {d.shop_time}
                        </span>
                      ) : (
                        d.shop_time
                      )}
                    </div>
                    <div className="symbol">
                      ตราสัญลักษณ์:{" "}
                      {searchTerm && d.shop_text.toLowerCase().includes(searchTerm.toLowerCase()) ? (
                        <span style={{backgroundColor: 'yellow'}}>
                          {d.shop_text}
                        </span>
                      ) : (
                        d.shop_text
                      )}
                    </div>

                    <div>
                      <h2>รายการอาหาร</h2>
                      <Slider {...settings}>
                        {foodData
                          .filter((food) => food.shop_id === d.shop_id)
                          .map((food, index) => (
                            <div key={index}>
                              <Link
                                to={{
                                  pathname: "/Fooddetails",
                                  search: `?food_id=${food.food_id}&Food_name=${food.Food_name}&Food_price=${food.Food_price}&Food_picture=${encodeURIComponent(food.Food_picture)}&Food_element=${food.Food_element}&food_elements=${food.food_elements}`
                                }}
                              >
                                <h3>
                                  {searchTerm && food.Food_name.toLowerCase().includes(searchTerm.toLowerCase()) ? (
                                    <span style={{backgroundColor: 'yellow'}}>
                                      {food.Food_name}
                                    </span>
                                  ) : (
                                    food.Food_name
                                  )}
                                </h3>
                                <img src={`${food.Food_picture}`} alt={food.Food_name} style={{ width: '100%' }} />
                              </Link>
                            </div>
                          ))}
                      </Slider>
                    </div>
                  </div>
                  <Link
                    to={{
                      pathname: `/Store_information`,
                      search: `?shop_id=${d.shop_id}&shop_name=${d.shop_name}&shop_picture=${encodeURIComponent(d.shop_picture)}&shop_location=${d.shop_location}&shop_phone=${d.shop_phone}&shop_time=${d.shop_time}&shop_text=${d.shop_text}`
                    }}
                    className="btn btn-primary"
                    onClick={() => handleShopClick(d.shop_id)}
                  >
                    ไปยังร้านค้า
                  </Link>
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
