import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="max-w-3xl mb-16">

          <p className="text-blue-500 font-semibold mb-3">
            ABOUT US
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Connecting talented people with
            <span className="text-blue-500"> great opportunities.</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Our Job Portal helps job seekers discover exciting career
            opportunities from leading companies. We make the job search
            simple, fast and accessible.
          </p>

        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Feature 1 */}
          <div
            className="bg-gray-900 border border-gray-800
            rounded-2xl p-6
            hover:border-blue-500
            transition duration-300"
          >

            <div className="text-3xl mb-5">
              🔎
            </div>

            <h2 className="text-xl font-semibold mb-3">
              Find Jobs
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Explore job opportunities from different companies
              and find roles that match your skills.
            </p>

          </div>

          {/* Feature 2 */}
          <div
            className="bg-gray-900 border border-gray-800
            rounded-2xl p-6
            hover:border-blue-500
            transition duration-300"
          >

            <div className="text-3xl mb-5">
              🚀
            </div>

            <h2 className="text-xl font-semibold mb-3">
              Grow Your Career
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Discover opportunities that can help you build
              your skills and grow professionally.
            </p>

          </div>

          {/* Feature 3 */}
          <div
            className="bg-gray-900 border border-gray-800
            rounded-2xl p-6
            hover:border-blue-500
            transition duration-300"
          >

            <div className="text-3xl mb-5">
              🤝
            </div>

            <h2 className="text-xl font-semibold mb-3">
              Top Companies
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Connect with opportunities from some of the
              world's leading companies.
            </p>

          </div>

        </div>

        {/* Bottom Section */}
        <div
          className="mt-12 bg-gray-900 border border-gray-800
          rounded-2xl p-8 md:p-10"
        >

          <h2 className="text-2xl font-bold mb-4">
            Why choose our Job Portal?
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-3xl">
            We believe finding a job should be simple. Our platform
            provides an easy way to explore jobs, view detailed job
            information and discover your next career opportunity.
          </p>

        </div>

      </div>

    </div>
  )
}

export default About