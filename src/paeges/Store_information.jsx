import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Editstore.css";

function Editstore() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/foods/')
            .then(res => setData(res.data))
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'เกิดข้อผิดพลาดในการโหลดข้อมูล!',
                });
                console.error(err);
            });
    }, []);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'white',
            width: '100vw',
            height: '250vh',
        }}>
            <div>
                <div>
                    <img
                        src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg"
                        className="picture"
                    />
                </div>
                <div style={{ marginTop: '160px' }}> </div>
                   
               
                <div style={{ marginLeft: '550px', marginTop: '-250px', fontSize: '16px' }}>
                <label className="dayoff" htmlFor="ชื่อร้านค้า">
                        ชื่อร้านค้า :
                    </label>
                    <br />
                    <label className="dayoff" htmlFor="ชื่อร้านค้า">
                        วันที่,เวลา เปิด-ปิด :
                    </label>
                    
                </div>
                <div style={{ marginLeft: '200px', marginTop: '200px', fontSize: '15px' }}>
                <div className="containner-box">
                        <div className="colorinside">
                            <label className="description" htmlFor="description">Description</label>
                            <div className="location">สถานที่ ชื่อสถานที่ :</div>
                            <div className="maplink">Map-link :</div>
                            <div className="phone">เบอร์ติดต่อ :</div>
                        </div>
                    </div>
                </div>
           

            
           
             <div className="grid-item" style={{ marginLeft: '-90px' , padding: 10 ,marginTop: '-120px',fontSize: '16px',display: 'grid', gridTemplateColumns: 'repeat(2, 20fr)', gap: '8rem' }}>
                {data.length > 0
                    ? data.map((item, i) => (
                        <div className="containner-store-1" key={item.id}>
                            <div className="card" style={{ width: "100%" }}>
                                <img
                                    src={item.Food_picture}
                                    alt={item.Food_name}
                                    style={{ width: "100%", margin: "1rem" }}
                                />
                                <div>ชื่ออาหาร: {item.Food_name}</div>
                                <div>ราคา: {item.Food_price}</div>
                            </div>
                        </div>
                    ))
                    : ""}
            </div>
          
            </div>



        </div>
    );
}

export default Editstore;
