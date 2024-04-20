import React from "react";
import Navbar from "../components/Navbar";
import "./AddFood.css";

function AddFood() {

  const handleSubmit = async (event) => {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้าเว็บ
  
    // รวบรวมข้อมูลจากฟอร์ม
    const formData = {
      foodPrice: event.target.food_price.value,
      foodName: event.target.food_name.value,
      foodDescription: event.target.food_description.value,
      cookingMethod: event.target.cooking_method.value,
      foodCategory: event.target.food_category.value,
      foodType: []
    };
  
    // ตรวจสอบ checkbox และเพิ่มข้อมูลลงใน formData.foodType ตามความเหมาะสม
    const specialFoods = document.querySelectorAll('input[type="checkbox"]:checked');
    specialFoods.forEach(food => {
      formData.foodType.push(food.nextSibling.textContent.trim());
    });
  
    try {
      // เรียกใช้ API โดยการส่งข้อมูลไปยัง URL ของ API และใช้ข้อมูลที่ส่งผ่าน JSON.stringify เป็น body
      const response = await fetch('your-backend-api-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('เกิดข้อผิดพลาดในการส่งข้อมูลไปยังเซิร์ฟเวอร์');
      }
  
      // ดำเนินการเพิ่มข้อมูลเสร็จสิ้น
      console.log('ส่งข้อมูลสำเร็จ');
    } catch (error) {
      console.error('เกิดข้อผิดพลาด:', error.message);
    }
  };
  
  
  


  return (
    <>
      <div className="white-background">
        
        <div className="flex flex-col justify-center items-center m-10">
          <div className="m-5 text-center ">เพิ่มข้อมูลอาหาร</div>
          <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <div className="button_outer">
                <div className="btn_upload">
                  <input type="file"
                   id="food_price" name />
                  Upload Image
                </div>
                <div class="processing_bar"></div>
                <div class="success_box"></div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 width ">
                  ชื่อเมนู
                </label>
                <input
                  className=" p-2 border rounded-md"
                  name="food_name"
                  type="text"
                  placeholder="ชื่อเมนู..."
                  htmlFor="ชื่อเมนู"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 width ">
                  รายละเอียดอาหาร
                </label>
                <input
                  className=" p-2 border rounded-md"
                  name="username"
                  type="text"
                  placeholder="รายละเอียดอาหาร..."
                  htmlFor="รายละเอียดอาหาร"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 width ">
                  วิธีการทำ
                </label>
                <input
                  className=" p-2 border rounded-md"
                  name="username"
                  type="text"
                  placeholder="วิธีการทำ..."
                  htmlFor="วิธีการทำ"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2 width ">
                  ราคา
                </label>
                <input
                  className=" p-2 border rounded-md"
                  name="username"
                  type="text"
                  placeholder="ราคา..."
                  htmlFor="ราคา"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              className="block mb-2 text-l font-medium text-gray-900 dark:text-back"
              htmlFor="first_name"
            >
              รายการอาหาร
            </label>
            <select className="mb-5 w-full max-w-xs">
              <option disabled selected>
                รายการเมนู
              </option>

              <option>กระเพราไก่</option>
              <option>กระเพราหมูสับ</option>
              <option>กระเพราหมูกรอบ</option>
              <option>กระเพราตับ</option>
              <option>ข้าวผัดต้มยำรวมมิตร</option>
              <option>ข้าวผัดต้มยำหมู</option>
              <option>คะน้าปลากระป๋อง</option>
              <option>ผัดผัก</option>
              <option>ก๋วยเตี๋ยวน้ำ</option>
              <option>ก๋วยเตี๋ยวแห้ง</option>
              <option>กระเพราไก่</option>
              <option>กระเพราหมูสับ</option>
              <option>กระเพราหมูกรอบ</option>
              <option>กระเพราตับ</option>
              <option>ข้าวผัดต้มยำรวมมิตร</option>
              <option>ข้าวผัดต้มยำหมู</option>
              <option>คะน้าปลากระป๋อง</option>
              <option>ผัดผัก</option>
              <option>ก๋วยเตี๋ยวน้ำ</option>
              <option>ก๋วยเตี๋ยวแห้ง</option>
            </select>
          </div>

          <div>
            <label
              className="block mb-2 text-l -medium text-gray-900 dark:text-back mb-2"
              htmlFor="หมวดหมู่อาหาร"
            >
              หมวดหมู่
            </label>
            <select className=" w-full max-w-xs mb-4">
              <option disabled selected>
                เพิ่มหมวดหมู่
              </option>

              <option>อาหาร</option>
              <option>ของว่าง</option>
              <option>เครื่องดื่ม</option>
              <option>ของหวาน</option>
            </select>
          </div>

          
            <div>
              <label className="inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-black">เพิ่มมังสวิรัติ</span>
                <img
                  src="https://media.istockphoto.com/id/1311125920/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%B4-100-%E0%B9%80%E0%B8%9B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B9%8C-%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%B4-%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C-eco-bio-%E0%B9%81%E0%B8%A5%E0%B8%B0-organic.jpg?s=612x612&w=0&k=20&c=FvYOIGvyyb941-1vz-_s2ZGgOUz-AZMEJ5zW8yFhU5g="
                  alt="มังสวิรัติ"
                  style={{ width: "70px", height: "auto" }} // กำหนดขนาดภาพเป็น 100px กว้างและปรับความสูงตามอัตราส่วน
                />
              </label>
            </div>

            <div>
              <label className="inline-flex items-center mb-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-black">เพิ่มอาหารเจ</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-b1-Nxx_cbgUySvFd2emKL8rQwR39810zYZp2U9PMgLXojLNnR8XlPJcUXEEs4ucfq0&usqp=CAU"
                  alt="อาหารเจ"
                  style={{ width: "70px", height: "auto" }} // กำหนดขนาดภาพเป็น 100px กว้างและปรับความสูงตามอัตราส่วน
                />
              </label>
            </div>

            <div>
              <label className="inline-flex items-center  mb-4 ">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-black ">เพิ่มฮาลาน</span>
                <img
                  src="https://assets.brandinside.asia/uploads/2017/09/HALAL.jpg"
                  alt="ฮาลาน"
                  style={{ width: "70px", height: "auto" }} // กำหนดขนาดภาพเป็น 100px กว้างและปรับความสูงตามอัตราส่วน
                />
              </label>
            </div>
        

          <form onSubmit={handleSubmit}>
  {/* ฟอร์มและฟิลด์ข้อมูลอื่น ๆ ที่คุณมี */}
  <div>
    <button
      type="submit"
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      ยืนยัน
    </button>
    <button
      type="button"
      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      ยกเลิก
    </button>
  </div>
</form>

        </form>
        </div>
      </div>
    </>
  );
}

export default AddFood;
