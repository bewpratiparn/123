import React from 'react';
import './Fooddetails.css';


function Fooddetails() {
  return (
    <>



    
<div style={{ marginLeft: '40px', marginRight: '40px', backgroundColor: 'gray', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
<div style={{  marginLeft: '0px', marginRight: '40px',fontSize: '24px', fontWeight: 'bold', color: 'black', textAlign: 'left' }}>หน้าแสดงรายละเอียดอาหาร</div>

  <div style={{ marginTop: '10px' ,display: 'flex', justifyContent: 'flex-start', fontSize: '19px' }}>
  <div style={{ display: 'flex', alignItems: 'center', marginRight: '450px' }}>ชื่ออาหาร : </div>
  <div style={{ display: 'flex', alignItems: 'center', marginRight: '450px' }}>ราคา : </div>

</div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' , justifyContent: 'center', }}>
  <img src="https://i.ytimg.com/vi/XyYMbh2uay4/maxresdefault.jpg" alt="Food Image" style={{ width: '20%', marginTop: '10px' }} />
  <div style={{ marginLeft: '20px'  ,fontSize: '19px'}}>
    <div>
      <p>วัตถุดิบ 
        <input type="text" id="ingredients1" name="ingredients1" style={{ marginLeft: '31px', padding: '5px', width: '900px' }} />
        
        
      </p>
    </div>
    <div>
      <p>เครื่องปรุง 
      <input type="text" id="ingredients1" name="ingredients1" style={{ marginLeft: '10px', padding: '5px', width: '900px' }} />
      </p>
    </div>
    <div>
      <p>ผัก 
      <input type="text" id="ingredients1" name="ingredients1" style={{ marginLeft: '63px', padding: '5px', width: '900px' }} />
      </p>
    </div>
    <div>
      <p>รสชาติ 
      <input type="text" id="ingredients1" name="ingredients1" style={{ marginLeft: '34px', padding: '5px', width: '900px' }} />
      </p>
      
    </div>
  </div>
</div>





<div>
  <div style={{ marginTop: '30px', marginLeft: '30px', fontSize: '19px', marginRight: '6px', display: 'inline-block' }}>รายละเอียดอาหาร</div>
  <input type="text" id="ingredients1" name="ingredients1" style={{ marginLeft: '200px', marginTop: '20px', padding: '80px', width: '900px', }} />
  </div>
 




</div>

    </>
  );
}

export default Fooddetails;
