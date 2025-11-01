import { useState } from "react"

const App = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copytask = [...notes];
    copytask.push({title,description});
    setNotes(copytask);    
    setTitle('');
    setDescription('');
  }

  const deleteNote = (index) => {
    const copynotes = [...notes];
    copynotes.splice(index, 1);
    setNotes(copynotes);
  }

  return (
    <div className="h-screen lg:flex gap-5 bg-black text-white">
      <form
        className="flex lg:w-1/2 flex-col gap-5  p-10"
        onSubmit={(e) => {
          submitHandler(e)
        }
        }
      >
        <h1 className="text-3xl text-white">Add Notes</h1>

        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter task heading"
          className="w-full px-5 py-2 border-2 rounded outline-none"
          value={title}
        />

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          name=""
          placeholder="Enter Details"
          id=""
          className="w-full px-5 py-2 border-2 rounded outline-none"
        >
        </textarea>

        <button
          className="w-full bg-white text-black border-2 rounded px-5 py-2 active:bg-gray-200 transition"
        >
          Add note
        </button>

      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">

        <h1 className="text-3xl text-white">Your Notes</h1>

        <div className="gap-3 flex flex-wrap overflow-y-scroll h-full pt-5">
          {notes.map((note, index) =>{
            return <div key={index} className="flex flex-col justify-between h-50 w-40 pt-9 p-6 rounded-xl bg-[url('https://static.vecteezy.com/system/resources/previews/068/772/549/non_2x/watercolor-spiral-notepad-free-png.png')] bg-cover">
              <div className="flex flex-col gap-1">
                <h1 className="text-black text-xl font-bold leading-tight">{note.title}</h1>
                <p className="leading-tight font-medium text-gray-500">{note.description}</p>
              </div>
              <button 
                onClick={() => {
                  deleteNote(index)
                }}
                className="bg-red-600 text-white rounded px-2 py-1"
              >
                Delete Note
              </button>
            </div>;
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App