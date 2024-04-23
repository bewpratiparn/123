import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Editstore.css";

function Editstore() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/shops/')
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
                <div>
                    <img
                        src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                        className="picture"
                    />
                </div>

                <div style={{ marginLeft: '220px', marginTop: '160px', display: 'flex', justifyContent: 'flex-start', fontSize: '24px', fontWeight: 'bold' }}>
                </div>

                <div style={{ marginLeft: '580px', marginTop: '-250px', justifyContent: 'flex-start', fontSize: '14px' }}>

                    <label className="dayoff" htmlFor="ชื่อร้านค้า">
                        ชื่อร้านค้า :
                    </label>
                    <br />
                    <label className="dayoff" htmlFor="ชื่อร้านค้า">
                        วันที่,เวลา เปิด-ปิด
                    </label>
                    <br />

                </div>

                <div style={{ marginLeft: '200px', marginTop: '200px', display: 'flex', justifyContent: 'flex-start', fontSize: '14px' }}>
                    <div className="containner-box">
                        <div className="colorinside">
                            <label className="description" htmlFor="description">Description</label>
                            <div className="location">สถานที่ ชื่อสถานที่ :</div>
                            <div className="maplink">Map-link :</div>
                            <div className="phone">เบอร์ติดต่อ :</div>
                        </div>
                    </div>
                </div>
</div>




                <div className="grid-item">

                    <div>
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร :</div>
                        <div>ราคา : </div>
                    </div>
                    <div>
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร :</div>
                        <div>ราคา : </div>
                    </div>
                    <div>
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร :</div>
                        <div>ราคา : </div>
                    </div>
                    <div>
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร :</div>
                        <div>ราคา : </div>
                    </div>
                    <div>
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร :</div>
                        <div>ราคา : </div>
                    </div>
                    <div>
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร :</div>
                        <div>ราคา : </div>
                    </div>
                    <div>
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร :</div>
                        <div>ราคา : </div>
                    </div>
                    <div>
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร :</div>
                        <div>ราคา : </div>
                    </div>
                    <div>
                        <img
                            src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
                            className="picture-menu"
                        />
                        <div>ชื่ออาหาร :</div>
                        <div>ราคา : </div>
                    </div>




                </div>






            </div>

        </>
    );
}

export default Editstore;
