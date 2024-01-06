import React from 'react';

function AddFood() {
  return (
    <>
      <div className="flex justify-center items-center-top bk-screen " style={{ backgroundImage: "url('https://ภาพวิว.com/wp-content/uploads/2017/12/THAI-124.jpg')" }}>
        <center>
<from>
  <div>
    <a href=''/>
  </div>
</from>
<div className='text-lg font-medium text-gray-900'>
เพิ่มข้อมูลอาหาร
</div>


        
            
            <form>
  <div className="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label className="block mb-2 text-l font-medium text-gray-900 dark:text-back" htmlFor="first_name">ชื่อเมนู</label>
      <textarea placeholder="ชื่อเมนู" className="textarea-white text-black textarea-bordered textarea-xs w-full max-w-xs dark:text-back"></textarea>

      <label className="block mb-2 text-l font-medium text-gray-900 dark:text-back" htmlFor="first_name">รายละเอียดอาหาร</label>
      <textarea placeholder="รายละเอียดอาหาร" className="textarea-white text-black textarea-bordered textarea-xs w-full max-w-xs dark:text-white"></textarea>

      <label className="block mb-2 text-l font-medium text-gray-900 dark:text-back" htmlFor="first_name">วิธีการทำ</label>
      <textarea placeholder="วิธีการทำ" className="textarea-white text-black textarea-bordered textarea-xs w-full max-w-xs dark:text-white"></textarea>

      <label className="block mb-2 text-l font-medium text-gray-900 dark:text-back" htmlFor="first_name">ราคา</label>
      <textarea placeholder="ราคา" className="textarea-white text-black textarea-bordered textarea-xs w-full max-w-xs dark:text-white"></textarea>

      
      
    </div>
  </div>
</form>

<fome>
  <div>
  <label className="block mb-2 text-l font-medium text-gray-900 dark:text-back" htmlFor="first_name">รายการอาหาร</label>
<select className="mb-5 select select-bordered w-full max-w-xs"><font></font>
  <option disabled selected>รายการเมนู</option><font></font>
  <option>กระเพราไก่</option><font></font>
  <option>กระเพราหมูสับ</option><font></font>
  <option>กระเพราหมูกรอบ</option><font></font>
  <option>กระเพราตับ</option><font></font>
  <option>ข้าวผัดต้มยำรวมมิตร</option><font></font>
  <option>ข้าวผัดต้มยำหมู</option><font></font>
  <option>คะน้าปลากระป๋อง</option><font></font>
  <option>ผัดผัก</option><font></font>
  <option>ก๋วยเตี๋ยวน้ำ</option><font></font>
  <option>ก๋วยเตี๋ยวแห้ง</option><font></font>
  <option>กระเพราไก่</option><font></font>
  <option>กระเพราหมูสับ</option><font></font>
  <option>กระเพราหมูกรอบ</option><font></font>
  <option>กระเพราตับ</option><font></font>
  <option>ข้าวผัดต้มยำรวมมิตร</option><font></font>
  <option>ข้าวผัดต้มยำหมู</option><font></font>
  <option>คะน้าปลากระป๋อง</option><font></font>
  <option>ผัดผัก</option><font></font>
  <option>ก๋วยเตี๋ยวน้ำ</option><font></font>
  <option>ก๋วยเตี๋ยวแห้ง</option><font></font>

</select>
</div>

<div>
<label className="block mb-2 text-l font-medium text-gray-900 dark:text-back mb-2" htmlFor="first_name">หมวดหมู่</label>
<select className="select select-bordered w-full max-w-xs mb-4"><font></font>
  <option disabled selected>เพิ่มหมวดหมู่</option><font></font>
  <option>อาหาร</option><font></font>
  <option>ของว่าง</option><font></font>
  <option>เครื่องดื่ม</option><font></font>
  <option>ของหวาน</option><font></font>



</select>
</div>
</fome>
              
              <form>
  <div>
    
    <div>
  <label className="inline-flex items-center mb-2">
    <input type="checkbox" className="form-checkbox text-blue-600" />
    <span className="ml-2 text-black">เพิ่มมังสวิรัติ</span>
    <img
      src="https://media.istockphoto.com/id/1311125920/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%B4-100-%E0%B9%80%E0%B8%9B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%8B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B9%8C-%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%B4%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%B4-%E0%B8%AA%E0%B8%B1%E0%B8%8D%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%93%E0%B9%8C-eco-bio-%E0%B9%81%E0%B8%A5%E0%B8%B0-organic.jpg?s=612x612&w=0&k=20&c=FvYOIGvyyb941-1vz-_s2ZGgOUz-AZMEJ5zW8yFhU5g="
      alt="มังสวิรัติ"
      style={{ width: '70px', height: 'auto' }} // กำหนดขนาดภาพเป็น 100px กว้างและปรับความสูงตามอัตราส่วน
    />
  </label>
</div>

<div>
  <label className="inline-flex items-center mb-2">
    <input type="checkbox" className="form-checkbox text-blue-600" />
    <span className="ml-2 text-black">เพิ่มอาหารเจ</span>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-b1-Nxx_cbgUySvFd2emKL8rQwR39810zYZp2U9PMgLXojLNnR8XlPJcUXEEs4ucfq0&usqp=CAU"
      alt="อาหารเจ"
      style={{ width: '70px', height: 'auto' }} // กำหนดขนาดภาพเป็น 100px กว้างและปรับความสูงตามอัตราส่วน
    />
  </label>
</div>

<div>
  <label className="inline-flex items-center  mb-4 ">
    <input type="checkbox" className="form-checkbox text-blue-600" />
    <span className="ml-2 text-black ">เพิ่มฮาลาน</span>
    <img
      src="https://assets.brandinside.asia/uploads/2017/09/HALAL.jpg"
      alt="ฮาลาน"
      style={{ width: '70px', height: 'auto' }} // กำหนดขนาดภาพเป็น 100px กว้างและปรับความสูงตามอัตราส่วน
    />
  </label>
</div>
    
  </div>
</form>

            
            
          

          
         
          <from>
            <div>
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ยืนยัน</button>
          <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">ยกเลิก</button>
          
          </div>
          </from>

        </center>
      </div>
    </>
  );
}

export default AddFood;
