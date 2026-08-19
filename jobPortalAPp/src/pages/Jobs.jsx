import React from 'react'
import jobs from '../data/jobs'
import { Link } from 'react-router-dom'

function Jobs() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-blue-500 font-semibold mb-2">
            JOB OPPORTUNITIES
          </p>

          <h1 className="text-4xl font-bold">
            Available Jobs
          </h1>

          <p className="text-gray-400 mt-3">
            Find the right opportunity and take the next step in your career.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-900 border border-gray-800
              rounded-2xl p-6
              hover:border-blue-500
              hover:-translate-y-1
              transition duration-300"
            >

              {/* Job Title */}
              <h2 className="text-xl font-semibold mb-3">
                {job.title}
              </h2>

              {/* Company */}
              <p className="text-blue-500 font-medium mb-4">
                {job.company}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <span>📍</span>
                <p>{job.location}</p>
              </div>

              {/* Salary */}
              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <span>💰</span>
                <p>{job.salary}</p>
              </div>

              {/* Details Button */}
              <Link
                to={`/jobs/${job.id}`}
                className="block text-center
                bg-blue-600 hover:bg-blue-700
                text-white font-medium
                py-2.5 rounded-lg
                transition duration-300"
              >
                View Details
              </Link>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Jobs