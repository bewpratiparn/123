import { useState } from 'react'
import 'flowbite'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Search from './components/Search'
import Navbar from './components/Navbar'
import Login from './paeges/Login'
import Home from './paeges/Home'
import Home2 from './paeges/Home2'
import Translate from './paeges/Translate'
import AddFood from './paeges/AddFood'
import AddDataShop from './paeges/AddDataShop'
import Register from './paeges/Register'




function App() {


  return (
    
      <Router>
      <Navbar />
    
      <Routes> 
      
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Login" element ={<Login/>} />
        <Route path="/Login" element ={<Home/>} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/Translate" element={<Translate />} /> 
        <Route path="/AddFood" element={<AddFood />} /> 
        <Route path="/AddDataShop" element={<AddDataShop />} />
        <Route path="/RecipeDetail " element={<RecipeDetail />} />
        
        
        
      </Routes>
    </Router>

  )
}

export default App
