import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import User from '../Components/User'
import About from '../Components/About'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/About" element={<About/>}/>
    </Routes>
  )
}

export default Routing