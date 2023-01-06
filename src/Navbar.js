import React from 'react'
import { useState } from "react";


function Navbar() {
    const [ isMenuVisible, setIsMenuVisible ] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }

  return (
    <nav className="bg-gray-800 py-3 px-5">
      <ul className="flex items-center justify-between">
        <li className="relative">
          <a href="#" className="text-gray-100 hover:text-gray-200 font-bold uppercase" onClick={toggleMenu}>Menu</a>
          <ul className="absolute bg-gray-800 rounded-md shadow-lg py-2 mt-2" style={{display: isMenuVisible ? "block" : "none"}}>
            <li className="py-2">
              <a href="#" className="block px-3 py-1 text-gray-100 font-semibold rounded-md hover:bg-gray-700">Help</a>
            </li>
            <li className="py-2">
              <a href="#" className="block px-3 py-1 text-gray-100 font-semibold rounded-md hover:bg-gray-700">Info</a>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="flex items-center justify-between">
        <li className="mr-3">
        </li>
        <li>
          <a href="#" className="text-gray-100 hover:text-gray-200 font-bold uppercase mr-4">Login</a>
          <a href="#" className="text-gray-100 hover:text-gray-200 font-bold uppercase">Register</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
