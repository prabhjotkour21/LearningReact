import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("Applied");
  const [error, setError] = useState("");

  const [job, setJob] = useState(() => {
    const data = localStorage.getItem("jobs");

    if (!data) {
      return [];
    }

    const parsedData = JSON.parse(data);

    return parsedData;
  });

  const [editIndex, setEditIndex] = useState(-1);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const addJobBtn = () => {
    if (
      !company.trim() ||
      !role.trim() ||
      !location.trim() ||
      !salary.trim() ||
      !status.trim()
    ) {
      setError("Please fill all fields");
      return;
    }

    setError("");

    const newJob = {
      company: company,
      role: role,
      location: location,
      salary: salary,
      status: status,
    };

    if (editIndex == -1) {
      setJob((prev) => [...prev, newJob]);

      setCompany("");
      setLocation("");
      setRole("");
      setSalary("");
      setStatus("Applied");
    } else {
      setJob((prev) =>
        prev.map((prevjob, idx) => {
          return idx === editIndex ? newJob : prevjob;
        })
      );

      setEditIndex(-1);
      setCompany("");
      setLocation("");
      setRole("");
      setSalary("");
      setStatus("Applied");
    }
  };

  const deleteJobhandler = (id) => {
    setJob(job.filter((e, idx) => idx !== id));
  };

  const editJobHandler = (id) => {
    const a = job[id];

    setEditIndex(id);
    setCompany(a.company);
    setSalary(a.salary);
    setLocation(a.location);
    setStatus(a.status);
    setRole(a.role);
  };

  const filteredJobs = job
    .map((item, index) => {
      return {
        item: item,
        index: index,
      };
    })
    .filter((data) => {
      return (
        data.item.company
          .toLowerCase()
          .includes(search.toLowerCase()) &&
        (filterStatus === "" || data.item.status === filterStatus)
      );
    });

  const appliedJobs = job.filter((item) => item.status === "Applied");
  const interviewJobs = job.filter((item) => item.status === "Interview");
  const selectedJobs = job.filter((item) => item.status === "Selected");
  const rejectedJobs = job.filter((item) => item.status === "Rejected");

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(job));
  }, [job]);

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-400">
        Job Application Tracker
      </h1>

      <div className="max-w-6xl mx-auto bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-xl">
        
        {/* FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Company */}
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter Company name here.."
            className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

          {/* Role */}
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter your Role"
            className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

          {/* Location */}
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your Location....."
            className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

          {/* Salary */}
          <input
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter your Salary"
            className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

          {/* Status */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">Select status</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Selected">Selected</option>
            <option value="Rejected">Rejected</option>
          </select>

          {/* Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          >
            <option value="">All Jobs</option>
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Selected">Selected</option>
            <option value="Rejected">Rejected</option>
          </select>

          {/* Search */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Company....."
            className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

          {/* Add/Edit Button */}
          <button
            onClick={addJobBtn}
            className="w-full bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all duration-200 text-white font-semibold rounded-lg px-5 py-3"
          >
            {editIndex !== -1 ? "Edit Job" : "Add Job"}
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <p className="mt-4 text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
            {error}
          </p>
        )}

        {/* JOB CARDS */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredJobs.map((data) => (
            <div
              key={data.index}
              className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-200"
            >
              <p className="text-xl font-bold text-blue-400 mb-4">
                {data.item.company}
              </p>

              <p className="text-slate-300 mb-2">
                <span className="text-slate-500">Role:</span>{" "}
                {data.item.role}
              </p>

              <p className="text-slate-300 mb-2">
                <span className="text-slate-500">Location:</span>{" "}
                {data.item.location}
              </p>

              <p className="text-slate-300 mb-2">
                <span className="text-slate-500">Salary:</span>{" "}
                {data.item.salary}
              </p>

              <p className="text-slate-300 mb-4">
                <span className="text-slate-500">Status:</span>{" "}
                <span
                  className={
                    data.item.status === "Selected"
                      ? "text-emerald-400"
                      : data.item.status === "Rejected"
                      ? "text-red-400"
                      : data.item.status === "Interview"
                      ? "text-yellow-400"
                      : "text-blue-400"
                  }
                >
                  {data.item.status}
                </span>
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => deleteJobhandler(data.index)}
                  className="flex-1 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition"
                >
                  Delete
                </button>

                <button
                  onClick={() => editJobHandler(data.index)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg transition"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* NO JOB FOUND */}
        {filteredJobs.length === 0 && (
          <p className="text-center text-slate-500 mt-8">
            No jobs found
          </p>
        )}

        {/* STATISTICS */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
            <p className="text-slate-400">Total Jobs</p>
            <h4 className="text-2xl font-bold text-white mt-1">
              {job.length}
            </h4>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
            <p className="text-slate-400">Applied</p>
            <h4 className="text-2xl font-bold text-blue-400 mt-1">
              {appliedJobs.length}
            </h4>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
            <p className="text-slate-400">Interview</p>
            <h4 className="text-2xl font-bold text-yellow-400 mt-1">
              {interviewJobs.length}
            </h4>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
            <p className="text-slate-400">Selected</p>
            <h4 className="text-2xl font-bold text-emerald-400 mt-1">
              {selectedJobs.length}
            </h4>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-center">
            <p className="text-slate-400">Rejected</p>
            <h4 className="text-2xl font-bold text-red-400 mt-1">
              {rejectedJobs.length}
            </h4>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;