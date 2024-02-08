import React from "react";
import "flowbite";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Search from "../components/Search";

function Home() {
  return (
    <>
      <header>
        <Search />
      </header>

      <div className="bg-gray-100 min-h-screen p-4">
        <div className="text-2xl font-bold text-center mb-*">ร้านอาหาร</div>
        <div className="grid-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="containner-store-1" style={{}}>
              <div className="card" style={{ width: "50rem" }}>
                <img
                  src="https://img.wongnai.com/p/192x192/2023/08/10/017075cfb4714776bd5b1551069c81d3.jpg"
                  alt=""
                  style={{ width: "15rem", margin:"1rem", }}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="CardText">
                    Datail Store wait for pu1ll data from database !!!!!
                  </p>
                  <a
                    href="https://www.wongnai.com/restaurants/6583Iw-%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B9%89%E0%B8%B3"
                    className="btn btn-primary"
                    style={{ width: "10rem" }}
                  >
                    go to Store!!
                  </a>
                </div>
              </div>
            </div>
            <div className="containner-store-2" style={{}}>
              <div className="card" style={{ width: "50rem" }}>
                <img
                  src="https://img.wongnai.com/p/192x192/2022/11/19/11f8710d64cf44b4b8c04b8ded1b0f73.jpg"
                  alt=""
                  style={{ width: "15rem", margin:"15px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="CardText">
                    Datail Store wait for pu1ll data from database !!!!!
                  </p>
                  <a
                    href="https://www.wongnai.com/restaurants/536296QX-kad-cafe-%E0%B8%81%E0%B8%B2%E0%B8%94-%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%88?_st=cD0wO2I9NTM2Mjk2O2FkPXRydWU7dD0xNzA3NDI1MjUxOTYxO3JpPTFYN2F3M2lYY0RUcExhc0ZtY0pheFdlVXphSlFCbztpPTFYNzBQTlU4QXptTTQzd1hwNEdhQ09oVlRlMGZrdjt3cmVmPXNyOw%3D%3D"
                    className="btn btn-primary"
                    style={{ width: "10rem" }}
                  >
                    go to Store!!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
