import React from 'react';
import './AddFood.css'; // นี่คือชื่อไฟล์ CSS ที่คุณต้องสร้าง

function AddFood() {
  return (
    <div>
      <h3>เพิ่มข้อมูลอาหาร</h3>
      <div className="container">
        <form action="addfood">
          <label htmlFor="image">เพิ่มรูปภาพ</label>
          <input type="file" id="image" name="image" accept="image/*" />
          <br></br>
          <label htmlFor="foodName">ชื่ออาหาร</label>
          <input type="text" id="foodName" name="foodName" placeholder="Enter food name.." />
          <br></br>
          <label htmlFor="price">ราคาอาหาร</label>
          <input type="text" id="price" name="price" placeholder="Enter price.." />
          <br></br>
          <label htmlFor="subject">รายละเอียดอาหาร</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default AddFood;
