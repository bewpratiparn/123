import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Storeinformation.css";

function Storeinformation() {
    const [data, setData] = useState([]);
    const [dataShops, setDataShops] = useState([]);

    useEffect(() => {
    axios.get('http://127.0.0.1:8000/show_all_food/')
        .then(res => setData(res.data))
        .catch(err => handleError(err)); // จัดการข้อผิดพลาด

    axios.get('http://127.0.0.1:8000/shops/')
        .then(res => setDataShops(res.data))
        .catch(err => handleError(err)); // จัดการข้อผิดพลาด
}, []);

const handleError = (err) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'เกิดข้อผิดพลาดในการโหลดข้อมูล!',
    });
    console.error(err);
};


    return (
        <div className="container">
            {dataShops.length > 8 && (
                <div className="shop-container" key={dataShops[8].id}>
                    <div className="card">
                        <img
                            src={dataShops[8].shop_text}
                            alt={dataShops[8].shop_name}
                            className="shop-image"
                        />
                        <div className="shop-details">
                            <label className="shop-name">ชื่อร้านค้า : {dataShops[8].shop_name}</label>
                            <br />
                            <label className="shop-time">วัน-เวลา,เปิด-ปิด : {dataShops[8].shop_time}</label>
                        </div>
                        <div className="shop-description">
                            <label className="description">Description</label>
                            <div className="location">สถานที่ ชื่อสถานที่ : {dataShops[8].shop_location}</div>
                            <div className="map-link">Map-link : {dataShops[8].shop_map}</div>
                            <div className="phone">เบอร์ติดต่อ : {dataShops[8].shop_phone}</div>
                        </div>
                    </div>
                </div>
            )}
            
            <div>เมนูอาหาร</div>

            <div className="food-container">
                {data.length > 0 && data.map(item => (
                    <div className="food-card" key={item.id}>
      <a href="/Fooddetails" class="text-sm text-blue-600 dark:text-blue-500 ">            
                            <img src={item.Food_picture}
                            alt={item.Food_name}
                            className="food-image"
                        />
                        
                        <div className="food-details">
                            <div>ชื่ออาหาร: {item.Food_name}</div>
                            <div>ราคา: {item.Food_price}</div>
                        </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Storeinformation;
