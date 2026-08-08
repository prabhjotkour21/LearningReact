import { useState } from "react";
import "./App.css";

function App() {
  const [note, setNotes] = useState("");
  const [notesArr, setNotesArr] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChane = (e) => {
    setNotes(e.target.value);
  };

  const handleClick = () => {
    if (note.trim()) {
      if (editIndex === -1) {
        (setNotesArr([note, ...notesArr]), setNotes(""));
      } else {
        (setNotesArr(
          notesArr.map((i, index) => (index === editIndex ? note : i)),
        ),
          setNotes(""));
        setEditIndex(-1);
      }
    }
  };
  const handleDelete = (idx) => {
    setNotesArr(notesArr.filter((i, index) => index !== idx));
    if (idx === editIndex) {
      setEditIndex(-1)
    }
  };

  const handleEdit = (idx) => {
    console.log(idx);
    setNotes(notesArr[idx]);
    setEditIndex(idx);
  };
  const handleCancel = () => {
    setNotes("")
    setEditIndex(-1)
  }
 
  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-20">
     
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Mini Notes App </h2>
      <p>Total Notes : {notesArr.length}</p>

      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        {/* Input + Button */}
        <p>{editIndex!==-1 ? "Editing note..." : "Add a new note"}</p>
        <div className="flex gap-3">
          
          <input
            type="text"
            placeholder="Enter notes"
            value={note}
            onChange={handleChane}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick();
              }
            }}
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleClick}
            className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
          >
            {editIndex !== -1 ? "Edit" : "Add"}
          </button>
        </div>

        {/* Notes */}
        <div className="mt-6 space-y-3">
          {notesArr.map((i, idx) => (
            <div
              className="bg-gray-50 border border-gray-200 px-4 py-3 rounded-md shadow-sm flex items-center justify-between"
              key={idx}
            >
              {/* Note */}
              <p className="text-gray-700">{i}</p>

              {/* Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleDelete(idx)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
                >
                  Delete
                </button>

                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600 transition"
                  onClick={() => handleEdit(idx)}
                >
                  Edit
                </button>

                {editIndex !== -1 && (<button onClick={handleCancel}
                  className="bg-gray-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600 transition"
                >Cancel</button>)}
              </div>
            </div>
          ))}
        </div>
      </div>

        {notesArr.length === 0 && (
          <p>
            No notes yet. Add your first note!
          </p>
        )}
    </div>
  );
}

export default App;
