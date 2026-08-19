function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">

          <p className="text-blue-500 font-semibold mb-2">
            MY DASHBOARD
          </p>

          <h1 className="text-4xl font-bold mb-3">
            Dashboard
          </h1>

          <p className="text-gray-400">
            Welcome back! Manage your job search from here.
          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* Applied Jobs */}
          <div
            className="bg-gray-900 border border-gray-800
            rounded-2xl p-6
            hover:border-blue-500
            transition duration-300"
          >
            <p className="text-gray-400 mb-3">
              Applied Jobs
            </p>

            <h2 className="text-4xl font-bold">
              0
            </h2>

            <p className="text-gray-500 mt-2">
              Jobs you have applied for
            </p>
          </div>

          {/* Saved Jobs */}
          <div
            className="bg-gray-900 border border-gray-800
            rounded-2xl p-6
            hover:border-blue-500
            transition duration-300"
          >
            <p className="text-gray-400 mb-3">
              Saved Jobs
            </p>

            <h2 className="text-4xl font-bold">
              0
            </h2>

            <p className="text-gray-500 mt-2">
              Jobs saved for later
            </p>
          </div>

          {/* Profile */}
          <div
            className="bg-gray-900 border border-gray-800
            rounded-2xl p-6
            hover:border-blue-500
            transition duration-300"
          >
            <p className="text-gray-400 mb-3">
              Profile
            </p>

            <h2 className="text-4xl font-bold">
              80%
            </h2>

            <p className="text-gray-500 mt-2">
              Profile completion
            </p>
          </div>

        </div>

        {/* Quick Actions */}
        <div
          className="bg-gray-900 border border-gray-800
          rounded-2xl p-8"
        >

          <h2 className="text-2xl font-semibold mb-3">
            Quick Actions
          </h2>

          <p className="text-gray-400 mb-6">
            Continue exploring opportunities and find your next job.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="/jobs"
              className="bg-blue-600 hover:bg-blue-700
              text-white font-semibold
              px-6 py-3 rounded-lg
              text-center
              transition duration-300"
            >
              Browse Jobs
            </a>

            <button
              className="border border-gray-700
              hover:bg-gray-800
              text-gray-300 hover:text-white
              font-semibold
              px-6 py-3 rounded-lg
              transition duration-300"
            >
              Complete Profile
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard