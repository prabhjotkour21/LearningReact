import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import jobs from '../data/jobs'

function JobDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const job = jobs.find((job) => job.id === Number(id))

  // Job nahi mila
  if (!job) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">

        <div className="text-center">

          <div className="text-6xl mb-6">
            😕
          </div>

          <h1 className="text-3xl font-bold mb-3">
            Job Not Found
          </h1>

          <p className="text-gray-400 mb-6">
            Sorry, this job does not exist.
          </p>

          <Link
            to="/jobs"
            className="inline-block bg-blue-600 hover:bg-blue-700
            px-6 py-3 rounded-lg font-medium transition"
          >
            Back to Jobs
          </Link>

        </div>

      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">

      <div className="max-w-4xl mx-auto">

        {/* Job Card */}
        <div className="bg-gray-900 border border-gray-800
          rounded-2xl p-8 md:p-10">

          {/* Header */}
          <div className="mb-8">

            <p className="text-blue-500 font-semibold mb-3">
              JOB DETAILS
            </p>

            <h1 className="text-4xl font-bold mb-4">
              {job.title}
            </h1>

            <p className="text-xl text-gray-300">
              {job.company}
            </p>

          </div>

          {/* Job Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

            <div className="bg-gray-950 border border-gray-800
              rounded-xl p-5">
              <p className="text-gray-500 text-sm mb-2">
                Location
              </p>

              <p className="text-lg font-medium">
                📍 {job.location}
              </p>
            </div>

            <div className="bg-gray-950 border border-gray-800
              rounded-xl p-5">
              <p className="text-gray-500 text-sm mb-2">
                Salary
              </p>

              <p className="text-lg font-medium">
                💰 {job.salary}
              </p>
            </div>

          </div>

          {/* Description */}
          <div className="mb-10">

            <h2 className="text-2xl font-semibold mb-4">
              About this role
            </h2>

            <p className="text-gray-400 leading-relaxed">
              {job.description || 
                `We are looking for a talented ${job.title} to join ${job.company}.
                This is a great opportunity to work on exciting projects,
                improve your skills and grow your career.`
              }
            </p>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            <button
              className="bg-blue-600 hover:bg-blue-700
              text-white font-semibold
              px-6 py-3 rounded-lg
              transition duration-300"
            >
              Apply Now
            </button>

            <button
              onClick={() => navigate('/jobs')}
              className="border border-gray-700
              hover:bg-gray-800
              text-gray-300 hover:text-white
              font-semibold
              px-6 py-3 rounded-lg
              transition duration-300"
            >
              ← Back to Jobs
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default JobDetails