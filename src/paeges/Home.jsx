import { useState, useEffect } from "react";
import "flowbite";
import Search from "../components/Search";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import Swal from "sweetalert2";

function Home() {
const [data ,setdata] = useState([])

useEffect (() => {
  axios.get('https://www.melivecode.com/api/users')
  .then(res => setdata(res.data))
  .catch(err => console.log(err));
},[])
/*
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetchData;
  }, []);

  const fetchData = () => {
    try {
      axios
        .get('http://127.0.0.1:8000/shops/10')
       .then(res = setShops(res.data))
        .catch((err) => {
          throw err.response;
        });
    } catch (e) {
      Swal.fire({
        title: "error",
        text: e,
        icon: "error",
      });
    }
  };*/
  return (
    <>
      <header>
        <Search />
      </header>

      <div className="bg-gray-100 min-h-screen p-4">
        <div className="text-2xl font-bold text-center mb-*">ร้านอาหาร</div>
        <div className="grid-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
          {data.length > 0
                  ? data.map((item ,i) => (
            <div className="containner-store-1" style={{}}>
              <div className="card" style={{ width: "60rem" }}>
                <img
                  src={item.avatar}
                  alt=""
                  style={{ width: "15rem", margin: "1rem" }}
                  className="picture-home"
                />
               
                      <div className="data-storehome">
                        <div className="storename">ชื่อร้านค้า:{item.fname} </div> 
                        <div className="tel">เบอร์โทร:{item.lname} </div>
                        <div className="location-store">สถานที่:{item.username}</div>
                        
                      </div>
                    
                <Link to="/Store_information">
                  <button
                    className="btn btn-primary"
                    style={{ width: "10rem" }}
                  >
                    ไปยังร้านค้า
                  </button>
                </Link>
              </div>
            </div>
            ))
            : ""}
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
