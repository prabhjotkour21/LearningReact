import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-950 border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-white"
        >
          Job<span className="text-blue-500">Portal</span>
        </NavLink>

        {/* Links */}
              <div className="flex items-center gap-8">
                  

          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-blue-500 font-semibold"
                  : "text-gray-400 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-blue-500 font-semibold"
                  : "text-gray-400 hover:text-white"
              }`
            }
          >
            Jobs
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "text-blue-500 font-semibold"
                  : "text-gray-400 hover:text-white"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Login
          </NavLink>

        </div>

      </div>
    </nav>
  )
}

export default Navbar