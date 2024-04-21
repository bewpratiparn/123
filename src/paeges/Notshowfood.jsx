import React from "react";
import "./Notshowfood.css";

function Notshowfood() {
  return (
    <>

<div className="white-background">

      <div className="notshowfood">ไม่เเสดงรายการอาหาร</div>

      <div className="box-container">
        <img
          src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
          className="picture-menu"
        />
        

        
        <div className="food-name" style={{ marginRight: '-100px', marginTop: '000px' }}>ชื่ออาหาร กระเพราหมูสับใส่ไข่</div>
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue
          id="flexCheckDefault"
        />
      </div>
      <div className="box-container">
        <img
          src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
          className="picture-menu"
        />
<div className="food-name" style={{ marginRight: '-100px', marginTop: '000px' }}>ชื่ออาหาร กระเพราหมูสับใส่ไข่ไม่ใส่กุ้ง</div>

        <input
          className="form-check-input"
          type="checkbox"
          defaultValue
          id="flexCheckDefault"
        />
      </div>

      <div className="box-container">
        <img
          src="https://www.southernliving.com/thmb/dvvxHbEnU5yOTSV1WKrvvyY7clY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205217071-2000-2a26022fe10b4ec8923b109197ea5a69.jpg "
          className="picture-menu"
        />
<div className="food-name" style={{ marginRight: '-100px', marginTop: '000px' }}>ชื่ออาหาร กระเพราหมูสับ</div>

        <input
          className="form-check-input"
          type="checkbox"
          defaultValue
          id="flexCheckDefault"
        />
      </div>

      
      <div className="grid-button">
        <button className="success-button">success</button>

        <button className="cancel-button">cancel</button>
      </div>
      
      </div>
    </>
  );
}

export default Notshowfood;