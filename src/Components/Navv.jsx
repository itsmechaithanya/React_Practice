import React from 'react'
import { NavLink } from 'react-router-dom'

function Navv() {
  return (
    <nav className="mt-10 flex justify-center gap-10">
        <NavLink className={(e)=>{
            return e.isActive ? "text-red-300 font-bold" : ""
        }} to="/">Home</NavLink>
        <NavLink className={(e)=>{
            return e.isActive ? "text-red-300 font-bold" : ""
        }} to="/User">User</NavLink>
        <NavLink className={(e)=>{
            return e.isActive ? "text-red-300 font-bold" : ""
        }} to="/About">About</NavLink>
    </nav>
  )
}

export default Navv