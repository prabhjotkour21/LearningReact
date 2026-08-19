import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">

      <div className="text-center max-w-lg">

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-bold text-blue-500 mb-6">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          The page you are looking for does not exist or may have
          been moved to another location.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block
          bg-blue-600 hover:bg-blue-700
          text-white font-semibold
          px-6 py-3 rounded-lg
          transition duration-300"
        >
          ← Go Home
        </Link>

      </div>

    </div>
  )
}

export default NotFound