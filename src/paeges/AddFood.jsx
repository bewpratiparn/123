import React, { useState } from 'react';
import './AddFood.css';
import Swal from 'sweetalert2'; // import Swal เข้ามา

function AddFood() {
  const [formData, setFormData] = useState({
    image: '',
    foodName: '',
    price: '',
    subject: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/add_food/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // ส่งข้อมูลสำเร็จ
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Food added successfully!'
        });
      } else {
        // ไม่สามารถส่งข้อมูลได้
        throw new Error('Failed to add food');
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to add food. Please try again later.'
      });
    }
  };

  return (
    <div>
      <h3>เพิ่มข้อมูลอาหาร</h3>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="image">เพิ่มรูปภาพ</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} />
          <br></br>
          <label htmlFor="foodName">ชื่ออาหาร</label>
          <input type="text" id="foodName" name="foodName" placeholder="Enter food name.." onChange={handleChange} />
          <br></br>
          <label htmlFor="price">ราคาอาหาร</label>
          <input type="text" id="price" name="price" placeholder="Enter price.." onChange={handleChange} />
          <br></br>
          <label htmlFor="subject">รายละเอียดอาหาร</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }} onChange={handleChange}></textarea>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default AddFood;
