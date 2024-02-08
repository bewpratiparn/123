import React from "react";
import "flowbite";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
            <div className="text-2xl font-semibold mb-4">เมนู</div>
            <div className="show-Store">Showstorehere</div>
            
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Home;
