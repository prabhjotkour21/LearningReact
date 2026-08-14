import { useState } from "react";

function App() {
  const [studentName, setStudentName] = useState("");

  const [marks, setMarks] = useState({
    maths: "",
    english: "",
    science: "",
  });

  const [students, setStudents] = useState([]);
  const [editIndex,setEditIndex]=useState(null)
 
  const AddStudentBtn = () => {
    const maths = Number(marks.maths)
    const science = Number(marks.science)
    const english=Number(marks.english)
    if (studentName.trim() === "" || marks.maths.trim() === "" || marks.science.trim() === "" ||marks.english.trim() === "" || english <0 || maths<0 || science <0 || maths >100 || english>100 || science >100) { 
      return
    }
    let newStudent = {
      name: studentName,
      marks: marks,
    };
    if (editIndex === null) {
       setStudents((prev) => [...prev, newStudent]);
      setMarks({
      maths: "",
      english: "",
      science: "",})
      setStudentName('')
      
    } else {
      setStudents((prev) =>
        prev.map((st, idx) => {
         return idx===editIndex ? newStudent :st
        })
      )
      setEditIndex(null)
      setMarks({
      maths: "",
      english: "",
      science: "",})
      setStudentName('')
    }
    
   
    
  };

  const deleteStudent = (index) => {
    setStudents((prev)=>prev.filter((std,idx)=>idx!==index))
  }

  const editStudent = (index) => {
    const std=students[index]
    setEditIndex(index)
    setStudentName(std.name)
    setMarks(std.marks)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-8 text-cyan-400">
          Student Result Manager
        </h1>

        {/* Input Section */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-xl mb-8">

          <h2 className="text-xl font-semibold mb-5 text-slate-200">
            ➕ Add Student
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              className="bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-500"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter Student name here..."
              
            />

            <input
              className="bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-500"
              value={marks.english}
              onChange={(e) =>
                setMarks({ ...marks, english: e.target.value })
              }
              placeholder="Enter English marks here..."
              min={0}
              max={100}
              type="number"
            />

            <input
              className="bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-500"
              value={marks.maths}
              onChange={(e) =>
                setMarks({ ...marks, maths: e.target.value })
              }
              placeholder="Enter Maths marks here..."
               min={0}
              max={100}
              type="number"
            />

            <input
              className="bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 placeholder:text-slate-500"
              value={marks.science}
              onChange={(e) =>
                setMarks({ ...marks, science: e.target.value })
              }
              placeholder="Enter Science marks here..."
               min={0}
              max={100}
              type="number"
            />

          </div>

          <button
            onClick={AddStudentBtn}
            className="mt-5 w-full md:w-auto bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-lg transition duration-200"
          >
            {editIndex===null ? "➕ Add Student" : "✏️ Update Student"}
          </button>
        </div>

        {/* Students */}
        <div className="space-y-4">

          {students.map
            ((i, idx) => {
            const total =
              Number(i.marks.maths) +
              Number(i.marks.science) +
              Number(i.marks.english);

            const percentage = (total / 300) * 100;

            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-lg"
              >
                {/* Student Name */}
                <h2 className="text-2xl font-bold text-cyan-400 mb-5">
                  {i.name}
                </h2>

                <button
                  onClick={() => deleteStudent(idx)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-lg transition duration-200 shadow-md hover:shadow-red-500/20"
                >

                  Delete
                </button>
                  <button
                  onClick={() => editStudent(idx)}
                  className="mt-4 bg-green-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-lg transition duration-200 shadow-md hover:shadow-red-500/20"
                >

                  Edit
                </button>


                {/* Marks */}
                <div className="grid grid-cols-3 gap-3 mb-5">

                  <div className="bg-slate-800 rounded-lg p-4 text-center">
                    <p className="text-slate-400 text-sm">
                      English
                    </p>
                    <p className="text-xl font-bold mt-1">
                      {i.marks.english}
                    </p>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4 text-center">
                    <p className="text-slate-400 text-sm">
                      Maths
                    </p>
                    <p className="text-xl font-bold mt-1">
                      {i.marks.maths}
                    </p>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4 text-center">
                    <p className="text-slate-400 text-sm">
                      Science
                    </p>
                    <p className="text-xl font-bold mt-1">
                      {i.marks.science}
                    </p>
                  </div>

                </div>

                {/* Result */}
                <div className="border-t border-slate-700 pt-4 flex flex-col md:flex-row md:justify-between gap-2">

                  <p className="text-slate-300">
                    Total:
                    <span className="text-cyan-400 font-bold ml-2">
                      {total}/300
                    </span>
                  </p>

                  <p className="text-slate-300">
                    Percentage:
                    <span className="text-green-400 font-bold ml-2">
                      {percentage.toFixed(2)}%
                    </span>
                  </p>

                  <p className="text-slate-300">
                    Result :
                    <span className="text-green-400 font-bold ml-2">
                      { percentage >=40 ? "Pass" :"Fail" }
       
                    </span>


                  </p>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}

export default App;