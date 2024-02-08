import { useState } from 'react'
import 'flowbite'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Navbar from './components/Navbar'
import Login from './paeges/Login'
import Register from './paeges/Register'
import Home from './paeges/Home'
import Search from './components/Search'
import Translate from './paeges/Translate'
import AddFood from './paeges/AddFood'
import AddDataShop from './paeges/AddDataShop'


function App() {
  

  return (
    
      <Router>
      <Navbar />
      <Search />
     
      <Routes> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Login" element ={<Login/>} />
        <Route path="/Login" element ={<Home/>} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/Translate" element={<Translate />} /> 
        <Route path="/AddFood" element={<AddFood />} /> 
        <Route path="/AddDataShop" element={<AddDataShop />} />
      </Routes>
    </Router>
 
  )
}

export default App
