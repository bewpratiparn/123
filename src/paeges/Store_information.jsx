import React from "react";
import "./Editstore.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";


function Editstore() {
    const api = "https";
    const [store, setStore] = useState([]);

    useEffect(() => {
        fetData();
    }, []);

    const fetData = () => {
        try {
            axios
                .get("http:/localhost")
                .then((res) => {
                    setStore(res.data);
                })
                .catch((err) => {
                    throw err.response;
                });
        } catch (e) {
            Swal.fire({
                title: "error",
                text: e,
                icon: "error",
            });
        }
    };

    return (
        <>

            <div style={{
                marginLeft: '0px',
                marginRight: '0px',
                marginTop: '0px',
                backgroundColor: 'white',
                width: '300vw',
                height: '300vh',
            }}>

                <div>
                    <img
                        src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                        className="picture"
                    />
                </div>

                <div style={{ marginLeft: '220px', marginTop: '160px', display: 'flex', justifyContent: 'flex-start', fontSize: '24px', fontWeight: 'bold' }}>

                  

                </div>





<div>
                <div style={{ marginLeft: '580px', marginTop: '-250px', justifyContent: 'flex-start', fontSize: '14px' }}>
                    <label className="name-store" htmlFor="ชื่อร้านค้า">
                        ชื่อร้านค้า : {store.name}
                    </label>{" "}
                    <br />
                    <label className="dayoff" htmlFor="ชื่อร้านค้า">
                        วัน เปิด-ปิด : {store.time}
                    </label>
                    <br />
                    <label className="dayoff" htmlFor="ชื่อร้านค้า">
                        เวลา เปิด-ปิด :
                    </label>
                </div>
 </div>


                    <div style={{ marginLeft: '200px', marginTop: '200px', display: 'flex', justifyContent: 'flex-start', fontSize: '14px' }}>
                    <div className="containner-box">
                        <div className="colorinside">
                            <label htmlFor="description">Description</label>

                            <div className="location">สถานที่ ชื่อสถานที่ :</div>
                            <div className="maplink">Map-link :</div>
                            <div className="phone">เบอร์ติดต่อ :</div>
                        </div>
                    </div>
                </div>
                
                <div className="grid-container">
                    <div className="grid-item">
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร</div>
                        <div>ราคา</div>
                    </div>
                    <div className="grid-item">
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร</div>
                        <div>ราคา</div>
                    </div>
                    <div className="grid-item">
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร</div>
                        <div>ราคา</div>
                    </div>
                    <div className="grid-item">
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร</div>
                        <div>ราคา</div>
                    </div>
                </div>

<div>


      </div>

            </div>
        </>
    );
}

export default Editstore;