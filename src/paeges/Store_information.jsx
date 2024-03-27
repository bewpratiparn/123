import React from "react";

function Store_information() {
  return (
    <>
      <div className="m-10 text-center ">Store_information</div>
      <div className="text-center pt-2">
        <div className="putnamestore">
          <label htmlFor="ชื่อร้านค้า">ชื่อร้านค้า</label>
        </div>

        <div className="putnamestore  m-2 ">
          <label htmlFor="ชื่อร้านค้า">วัน เวลา เปิดปิด</label>
        </div>

        <div className="containner-description">
          <div className="location">สถานที่ ชื่อสถานที่ :</div>
          <div className="maplink">Map-link :</div>
          <div className="phone">เบอร์ติดต่อ :</div>


        </div>
      </div>
    </>
  );
}

export default Store_information;
