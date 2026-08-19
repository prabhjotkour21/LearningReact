import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  function handleLogin() {
    localStorage.setItem('isLoggedIn', true)
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold mb-3">
            Welcome Back
          </h1>

          <p className="text-gray-400">
            Login to access your dashboard
          </p>

        </div>

        {/* Login Card */}
        <div className="bg-gray-900 border border-gray-800
          rounded-2xl p-8 shadow-xl">

          {/* Email */}
          <div className="mb-5">

            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-950
              border border-gray-700
              text-white placeholder-gray-500
              px-4 py-3 rounded-lg
              outline-none
              focus:border-blue-500
              transition"
            />

          </div>

          {/* Password */}
          <div className="mb-6">

            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-950
              border border-gray-700
              text-white placeholder-gray-500
              px-4 py-3 rounded-lg
              outline-none
              focus:border-blue-500
              transition"
            />

          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full
            bg-blue-600 hover:bg-blue-700
            text-white font-semibold
            py-3 rounded-lg
            transition duration-300"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  )
}

export default Login