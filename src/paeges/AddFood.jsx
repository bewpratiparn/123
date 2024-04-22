import React, { useState } from "react";
import "./AddFood.css";

function AddFood() {
  // สร้าง state variables สำหรับเก็บค่าของแต่ละฟิลด์
  const [uploadImage, setUploadImage] = useState("");
  const [foodName, setFoodName] = useState("");
  const [foodDetails, setFoodDetails] = useState("");
  const [cookingMethod, setCookingMethod] = useState("");
  const [foodPrices, setFoodPrices] = useState("");
  const [foodList, setFoodList] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      UploadImage: uploadImage,
      foodName: foodName,
      foodDatails: foodDetails,
      cookingMethod: cookingMethod,
      Foodprices: foodPrices,
      Foodlist: foodList,
      Foodcategory: foodCategory,
      Checkbox1: checkbox1,
      Checkbox2: checkbox2,
      Checkbox3: checkbox3,
      foodType: []
    };

    if (
      !formData.UploadImage ||
      !formData.foodName ||
      !formData.foodDatails ||
      !formData.cookingMethod ||
      !formData.Foodprices ||
      !formData.Foodlist ||
      !formData.Foodcategory ||
      (!formData.Checkbox1 && !formData.Checkbox2 && !formData.Checkbox3)
    ) {
      alert("กรุณากรอกข้อมูลให้ครบทุกฟิลด์");
      return;
    }

    const specialFoods = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    specialFoods.forEach((food) => {
      formData.foodType.push(food.nextSibling.textContent.trim());
    });

    try {
      const response = await fetch("your-backend-api-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("เกิดข้อผิดพลาดในการส่งข้อมูลไปยังเซิร์ฟเวอร์");
      }

      console.log("ส่งข้อมูลสำเร็จ");
    } catch (error) {
      console.error("เกิดข้อผิดพลาด:", error.message);
    }
  };

  return (
    <>
      <div className="white-background">
        <div className="flex flex-col justify-center items-center m-10">
          <form onSubmit={handleSubmit}>
            <div className="m-5 text-center">เพิ่มข้อมูลอาหาร</div>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <div className="button_outer">
                  <div className="btnupload">
                    <input
                      type="file"
                      name="Upload_Image"
                      onChange={(e) => setUploadImage(e.target.value)}
                    />
                    Upload Image
                  </div>
                  <div class="processing_bar"></div>
                  <div class="successbox"></div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 width">
                    ชื่อเมนู
                  </label>
                  <input
                    className="p-2 border rounded-md"
                    name="foodname"
                    type="text"
                    placeholder="ชื่อเมนู..."
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 width">
                    รายละเอียดอาหาร
                  </label>
                  <input
                    className="p-2 border rounded-md"
                    name="Fooddetails"
                    type="text"
                    placeholder="รายละเอียดอาหาร..."
                    value={foodDetails}
                    onChange={(e) => setFoodDetails(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 width">
                    วิธีการทำอาหาร
                  </label>
                  <input
                    className="p-2 border rounded-md"
                    name="cookingmethod"
                    type="text"
                    placeholder="วิธีการทำอาหาร..."
                    value={cookingMethod}
                    onChange={(e) => setCookingMethod(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 width">
                    ราคา
                  </label>
                  <input
                    className="p-2 border rounded-md"
                    name="Foodprices"
                    type="text"
                    placeholder="ราคา..."
                    value={foodPrices}
                    onChange={(e) => setFoodPrices(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                className="block mb-2 text-l font-medium text-gray-900 dark:text-back"
                name="Foodlist"
              >
                รายการอาหาร
              </label>
              <select
                className="mb-5 w-full max-w-xs"
                value={foodList}
                onChange={(e) => setFoodList(e.target.value)}
              >
                <option disabled selected>
                  รายการเมนู
                </option>
                <option>กระเพราไก่</option>
                <option>กระเพราหมูสับ</option>
                
              </select>
            </div>

            <div>
              <label
                className="block mb-2 text-l -medium text-gray-900 dark:text-back mb-2"
                name="Foodcategory"
              >
                หมวดหมู่
              </label>
              <select
                className=" w-full max-w-xs mb-4"
                value={foodCategory}
                onChange={(e) => setFoodCategory(e.target.value)}
              >
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
                  name="checbox1"
                  className="form-checkbox text-blue-600"
                  checked={checkbox1}
                  onChange={(e) => setCheckbox1(e.target.checked)}
                />
                <span className="ml-2 text-black">เพิ่มมังสวิรัติ</span>
                <img
                  src="https://media.istockphoto.com/id/1311125920/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%B4-100-%E0%B9%80%E0%B8%9B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B9%8C-%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%B4-%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C-eco-bio-%E0%B9%81%E0%B8%A5%E0%B8%B0-organic.jpg?s=612x612&w=0&k=20&c=FvYOIGvyyb941-1vz-_s2ZGgOUz-AZMEJ5zW8yFhU5g="
                  alt="มังสวิรัติ"
                  style={{ width: "70px", height: "auto" }} 
                />
                
              </label>
            </div>
            <div>
  <label className="inline-flex items-center mb-2">
    <input
      type="checkbox"
      name="checkbox2"
      className="form-checkbox text-blue-600"
      checked={checkbox2}
      onChange={(e) => setCheckbox2(e.target.checked)}
    />
    <span className="ml-2 text-black">เพิ่มอาหารเจ</span>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-b1-Nxx_cbgUySvFd2emKL8rQwR39810zYZp2U9PMgLXojLNnR8XlPJcUXEEs4ucfq0&usqp=CAU"
      alt="อาหารเจ"
      style={{ width: "70px", height: "auto" }}
    />
  </label>
</div>

<div>
  <label className="inline-flex items-center mb-4">
    <input
      type="checkbox"
      name="checkbox3"
      className="form-checkbox text-blue-600"
      checked={checkbox3}
      onChange={(e) => setCheckbox3(e.target.checked)}
    />
    <span className="ml-2 text-black">เพิ่มฮาลาล</span>
    <img
      src="https://assets.brandinside.asia/uploads/2017/09/HALAL.jpg"
      alt="ฮาลาล"
      style={{ width: "70px", height: "auto" }}
    />
  </label>
</div>

            
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
        </div>
      </div>
    </>
  );
}

export default AddFood;
