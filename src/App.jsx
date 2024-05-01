import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./paeges/Home";
import Login from "./paeges/Login";
import Logout from "./paeges/Logout";
import Home2 from "./paeges/Home2";
import Register from "./paeges/Register";
import Translate from "./paeges/Translate";
import AddFood from "./paeges/AddFood";
import AddDataShop from "./paeges/AddDataShop";
import Editstore from "./paeges/Editstore";
import Store_information from "./paeges/Store_information";
import Notshowfood from "./paeges/Notshowfood";
import Detailfood from "./paeges/Detailfood";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // สถานะการล็อคอินเริ่มต้นเป็น false

  const checkLogin = () => {
    // ถ้า isLoggedIn เป็น true ให้สามารถใช้งานทุกหน้าได้
    if (isLoggedIn) {
      return true;
    } else {
      // ถ้า isLoggedIn เป็น false ให้ redirect ไปยังหน้า Login
      window.location.href = "/Login"; // หรือใช้ history.push() ก็ได้
      return false;
    }
  };
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/Home" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route
          path="/Notshowfood"
          element={<Notshowfood isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/Store_information"
          element={<Store_information isLoggedIn={isLoggedIn} />}
        />

        <Route path="/Home2" element={<Home2 isLoggedIn={isLoggedIn} />} />
        <Route
          path="/Login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
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
        <Route
          path="/AddFood"
          element={<AddFood isLoggedIn={setIsLoggedIn} />}
        />
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
