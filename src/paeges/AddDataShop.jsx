import React from "react";
import "./AddDataShop.css";


function AddDataShop() {
  return (
    <>
      
      <form>
        <div className="flex flex-col justify-center items-center m-10 ">
          <div className="m-5 text-center ">เพิ่มข้อมูลอาหาร</div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 ">
              ชื่อร้าน
            </label>
            <input
              className=" p-2 border rounded-md"
              name="storename"
              type="text"
              placeholder="กรอกชื่อร้าน"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-3 width ">
              สถานที่
            </label>
            <input
              className=" p-2 border rounded-md"
              name="location"
              type="text"
              placeholder="กรอกสถานที่"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 width ">
              เบอร์โทรศัพท์
            </label>
            <input
              className=" p-2 border rounded-md"
              name=""
              type="text"
              placeholder="กรอกเบอร์โทรศัพท์"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 width ">
              Map-link
            </label>
            <input
              className=" p-2 border rounded-md"
              name="username"
              type="text"
              placeholder="กรอก map link"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 width ">
              เวลา เปิด-ปิด
            </label>
            <input
              className=" p-2 border rounded-md"
              name="username"
              type="text"
              placeholder="เวลา เปิด-ปิด"
            />
          </div>
          <div className="grid grid-rows-3 gap-2">
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
          </div>

          <div>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              ยืนยัน
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddDataShop;
