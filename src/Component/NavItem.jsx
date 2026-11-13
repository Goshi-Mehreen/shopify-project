
import React from 'react'
import { Link } from "react-router-dom";

const NavItem = ({ item }) => {
  
  return (
    <Link
      to={item.path}
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white cursor-pointer"
    >
      <img src={item.icon} alt="" className="w-4 h-4 object-contain" />

      <p className="text-sm text-gray-700">
        {item.name}
      </p>
    </Link>
  
    
  )
}

export default NavItem
