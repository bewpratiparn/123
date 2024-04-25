import { useState } from 'react'
import 'flowbite'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



import Search from './components/Search'
import Navbar from './components/Navbar'
import Login from './paeges/Login'
import Logout from './paeges/Logout'
import Home from './paeges/Home'
import Home2 from './paeges/Home2'
import Translate from './paeges/Translate'
import AddFood from './paeges/AddFood'
import AddDataShop from './paeges/AddDataShop'
import RecipeDetail from './paeges/RecipeDetail'
import Register from './paeges/Register'
import Fooddetails from './paeges/Fooddetails'
import Editstore from './paeges/Editstore'
import Storeinformation from './paeges/Storeinformation'
import Notshowfood from './paeges/Notshowfood'
import Navbarnew from './components/Navbarnew'
import Navbartest from './components/Navbartest'
import Sidebar from './components/Sidebar'



function App() {


  return (

    <Router>
      <Navbartest />
      <Sidebar/>
      <Home2/>


      
      <Routes>


        <Route path="/Notshowfood" element={<Notshowfood />} />
        <Route path="/Storeinformation" element={<Storeinformation />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/Home2" element={<Login />} />
        <Route path="/Fooddetails" element={<Fooddetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Login" element={<Logout />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Login" element={<Home />} />
        <Route path="/Login" element={<Home2 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<Login />} />
        <Route path="/Translate" element={<Translate />} />
        <Route path="/AddFood" element={<AddFood />} />
        <Route path="/AddDataShop" element={<AddDataShop />} />
        <Route path="/RecipeDetail " element={<RecipeDetail />} />
        <Route path="/Editstore" element={<Editstore />} />
        



      </Routes>
    </Router>

  )
}

export default App
