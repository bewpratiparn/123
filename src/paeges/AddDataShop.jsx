import React from 'react'
import "./AddDataShop.css"


function AddDataShop() {
  return (

    <div>
         <div className="text-center  h-screen bg-gray-100=">
      <div className="Addstore ">
        <h2>เพิ่มข้อมูลร้าน</h2>
      </div>

      <div id="image-container"> 
        <img  id="image-preview" src="https://cdn.icon-icons.com/icons2/564/PNG/512/Add_Image_icon-icons.com_54218.png" alt="รูปภาพ" width={50} />
        
      </div>
      <input type="file" id="image-input" accept="image/*" /> <br /> 
      <button id="add-image-button">เพิ่มรูปภาพ</button>

      <div className="store-name">
        <label for="fstorename">ชื่อร้าน : </label>
        <input type="text" id="fname" name="fname"></input>
        <br />
      </div>

      <div className="location">
        <label for="flocation">สถานที่ : </label>
        <input type="text" id="flocation" name="flocation"></input>
        <br />
      </div>

      <div className="tel">
        <label for="ftel"> เบอร์โทรศัพท์ : </label>
        <input type="number" id="ftel" name="ftel" maxLength={10}></input>
        <br />
      </div>

      <div className="map">
        <label for="fmap"> Map link : </label>
        <input type="url" id="fmap" name="fmap" link></input>
        <br />
      </div>

      <div className="closeopen">
        <label for="fcloseopen"> เวลาเปิด-ปิด : </label>
        <input type="text" id="fcloseopne" name="fclosepone"></input>
        <br />
      </div>

      <div className="button-submit">
        <input type="submit" value="เพิ่มข้อมูล" id="buttonadd"  />
      </div>
      <div className="button-reset">
        <input type="reset" value="ยกเลิก" />
      </div>
    </div>
    </div>
    
  )
}

export default AddDataShop