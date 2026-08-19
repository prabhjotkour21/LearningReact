import React from 'react'
import jobs from '../data/jobs'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="max-w-3xl">

          <p className="text-blue-500 font-semibold text-lg mb-4">
            FIND YOUR DREAM JOB
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Find a job that
            <span className="text-blue-500"> matches your skills</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Discover exciting career opportunities from top companies
            and take the next step in your career.
          </p>

          <Link
            to="/jobs"
            className="inline-block bg-blue-600 hover:bg-blue-700
            text-white font-semibold px-6 py-3 rounded-lg
            transition duration-300"
          >
            View Jobs →
          </Link>

        </div>

      </section>

      {/* Jobs Count */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-gray-900 border border-gray-800
          rounded-2xl p-8 max-w-sm">

          <p className="text-gray-400 mb-2">
            Available Jobs
          </p>

          <h2 className="text-4xl font-bold text-white">
            {jobs.length}
          </h2>

          <p className="text-gray-500 mt-2">
            Opportunities waiting for you
          </p>

        </div>

      </section>

    </div>
  )
}

export default Home