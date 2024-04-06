import React from "react";
import "flowbite";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Search from "../components/Search";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

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
                  style={{ width: "15rem", margin: "1rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="CardText">
                    Datail Store wait for 
                  </p>
                  <Link to="/Translate">
                    <button
                      className="btn btn-primary"
                      style={{ width: "10rem" }}
                    >
                      go to recip
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="containner-store-2" style={{}}>
              <div className="card" style={{ width: "50rem" }}>
                <img
                  src="https://img.wongnai.com/p/192x192/2022/11/19/11f8710d64cf44b4b8c04b8ded1b0f73.jpg"
                  alt=""
                  style={{ width: "15rem", margin: "15px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="CardText">
                    Datail Store wait for pu1
                  </p>

                  <Link to="/Recipdetail">
                    <button
                      className="btn btn-primary"
                      style={{ width: "10rem" }}
                    >
                      go to recip
                    </button>
                  </Link>
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
