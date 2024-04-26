import React from 'react';
import './Detailfood.css';

function Detailfood() {
  return (
    <>



    
<div style={{ marginLeft: '40px', marginRight: '40px', backgroundColor: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
<div style={{  marginLeft: '0px', marginRight: '40px',fontSize: '24px', fontWeight: 'bold', color: 'black', textAlign: 'left' }}>หน้าแสดงรายละเอียดอาหาร</div>

  <div>
 



    
  <div className="text-left">
  <form className="max-w-sm mx-auto" style={{ alignItems: 'center', marginRight: '800px'  }}>
    <label htmlFor="countries_disabled" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">หมวดหมู่</label>
    <select disabled id="countries_disabled" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>ของคาว</option>
    </select>

   
  </form>
</div>



  </div>
 
  <div style={{ marginTop: '10px' ,display: 'flex', justifyContent: 'flex-start', fontSize: '24px', fontWeight: 'bold' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginRight: '450px' }}>แกงเทโพ
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEc0mgPQFd2aU7fBXDhGnQxTLAHsPxPZ1n8MNVJUWwS0jcqsRu3uDM7QWzVJh_9odxNj4&usqp=CAU" alt="แกงเทโพ Image" style={{ width: '20%', marginTop: '10px', marginLeft: '30px' }} />
  </div>
</div>






      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' , justifyContent: 'center', }}>
  <img src="https://i.ytimg.com/vi/XyYMbh2uay4/maxresdefault.jpg" alt="Food Image" style={{ width: '20%', marginTop: '10px' }} />
  <div style={{ marginLeft: '20px'  ,fontSize: '19px'}}>
    <div>
      <p>วัตถุดิบ 
        <input type="text" id="ingredients1" name="ingredients1" style={{ marginLeft: '30px', padding: '5px', width: '900px' }} />
        ,
        
      </p>
    </div>
    <div>
      <p>เครื่องปรุง 
        <input type="text" id="seasonings1" name="seasonings1" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="seasonings2" name="seasonings2" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="seasonings3" name="seasonings3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="vegetables3" name="vegetables3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="vegetables3" name="vegetables3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
      </p>
    </div>
    <div>
      <p>ผัก 
        <input type="text" id="vegetables1" name="vegetables1" style={{ marginLeft: '63px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="vegetables2" name="vegetables2" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="vegetables3" name="vegetables3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="vegetables3" name="vegetables3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="vegetables3" name="vegetables3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
      </p>
    </div>
    <div>
      <p>รสชาติ 
        <input type="text" id="flavors1" name="flavors1" style={{ marginLeft: '34px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="flavors2" name="flavors2" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="flavors3" name="flavors3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="vegetables3" name="vegetables3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
        ,
        <input type="text" id="vegetables3" name="vegetables3" style={{ marginLeft: '10px', padding: '5px', width: '80px' }} />
      </p>
      
    </div>
  </div>
</div>





<div>
  <div style={{ marginTop: '30px', marginLeft: '0px', fontSize: '19px', marginRight: '10px', display: 'inline-block' }}>รายละเอียดอาหาร</div>
  <input type="text" id="ingredients1" name="ingredients1" style={{ marginLeft: '10px', marginTop: '20px', padding: '80px', width: '500px', display: 'inline-block' }} />

  <div style={{ marginLeft: '20px', fontSize: '19px', marginRight: 'auto', display: 'inline-block' }}>วิธีการทำ</div>
  <input type="text" id="ingredients1" name="ingredients1" style={{ marginLeft: '10px', padding: '80px', width: '500px', display: 'inline-block' }} />
</div>



</div>

    </>
  );
}

export default Detailfood;


