import React from 'react';
import './Fooddetails.css';

function Fooddetails() {
  return (
    <>
<div style={{ marginLeft: '40px', marginRight: '40px', backgroundColor: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'black' }}>รายละเอียดอาหาร</div>
  <div>
    <label className="block mb-2 text-l font-medium text-gray-900 dark:text-back mb-2" htmlFor="first_name">
      หมวดหมู่
    </label>
    <select className="select select-bordered w-full max-w-xs mb-4">
      <option disabled selected>
        เพิ่มหมวดหมู่
      </option>
      <option>อาหาร</option>
      <option>ของว่าง</option>
      <option>เครื่องดื่ม</option>
      <option>ของหวาน</option>
    </select>
  </div>
 
  </div>






      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
  <img src="https://i.ytimg.com/vi/XyYMbh2uay4/maxresdefault.jpg" alt="Food Image" style={{ width: '20%' }} />
  <div style={{ marginLeft: '20px' }}>
    <div>
      <p>วัตถุดิบ 
        <input type="text" id="ingredients1" name="ingredients1" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="ingredients2" name="ingredients2" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="ingredients3" name="ingredients3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
      </p>
    </div>
    <div>
      <p>เครื่องปรุง 
        <input type="text" id="seasonings1" name="seasonings1" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="seasonings2" name="seasonings2" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="seasonings3" name="seasonings3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
      </p>
    </div>
    <div>
      <p>ผัก 
        <input type="text" id="vegetables1" name="vegetables1" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="vegetables2" name="vegetables2" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="vegetables3" name="vegetables3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
      </p>
    </div>
    <div>
      <p>รสชาติ 
        <input type="text" id="flavors1" name="flavors1" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="flavors2" name="flavors2" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="flavors3" name="flavors3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
      </p>
      
    </div>
  </div>
</div>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px', fontSize: '24px', fontWeight: 'bold', color: 'black' }}>
  <div>
    แกงเทโพ
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEc0mgPQFd2aU7fBXDhGnQxTLAHsPxPZ1n8MNVJUWwS0jcqsRu3uDM7QWzVJh_9odxNj4&usqp=CAU" alt="แกงเทโพ Image" style={{ width: '5%', marginTop: '10px', marginLeft: '20px' }} />
  </div>
  <div style={{ marginLeft: '120px', fontSize: '19px' }}>รายละเอียดอาหาร</div>
</div>


    </>
  );
}

export default Fooddetails;
