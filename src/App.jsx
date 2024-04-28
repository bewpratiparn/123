import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbartest from "./components/Navbartest";
import Sidebar from "./components/Sidebar";
import Home3 from "./paeges/Home3";
import Home from "./paeges/Home";
import Login from "./paeges/Login";
import Logout from "./paeges/Logout";
import Search from "./components/Search";
import Home2 from "./paeges/Home2";
import Register from "./paeges/Register";
import Translate from "./paeges/Translate";
import AddFood from "./paeges/AddFood";
import AddDataShop from "./paeges/AddDataShop";
import Editstore from "./paeges/Editstore";
import Store_information from "./paeges/Store_information";
import Notshowfood from "./paeges/Notshowfood";
import Detailfood from "./paeges/Detailfood";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // สถานะการล็อคอินเริ่มต้นเป็น false

  return (
    <Router>
      
      <Navbartest />
      <Sidebar />

      <Routes>
        <Route
          path="/Notshowfood"
          element={<Notshowfood isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/Store_information"
          element={<Store_information isLoggedIn={isLoggedIn} />}
        />
        
        <Route path="/Home" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/Search" element={<Search isLoggedIn={isLoggedIn} />} />
        <Route path="/Home2" element={<Home2 isLoggedIn={isLoggedIn} />} />
        <Route
          path="/Login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/Login"
          element={<Home3 setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/Logout"
          element={<Logout setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/Register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/Translate"
          element={<Translate isLoggedIn={isLoggedIn} />}
        />
        <Route path="/AddFood" element={<AddFood isLoggedIn={isLoggedIn} />} />
        <Route
          path="/AddDataShop"
          element={<AddDataShop isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/Detailfood"
          element={<Detailfood isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/Editstore"
          element={<Editstore isLoggedIn={isLoggedIn} />}
        />
      </Routes>
    </Router>
  );
}
export default App;
