import { useState, useRef } from 'react';
import './App.css';

function App() {
  // State for controlled input and error message
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  
  // Ref for uncontrolled input
  const inputRef = useRef();

  const getData = (e) => {
    e.preventDefault();
    if (!name) {
      setError('Name is required');
      inputRef.current.focus();
    } else {
      console.log('Controlled Component Value:', name);
      console.log('Uncontrolled Component Value:', inputRef.current.value);
      setError('');
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-400 to-gray-600 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Welcome!</h1>
        <form className="space-y-4" onSubmit={getData}>
          {/* Controlled Input */}
          <div>
            <label
              htmlFor="controlled"
              className="block text-gray-600 font-medium mb-2"
            >
              Controlled Input (State):
            </label>
            <input
              id="controlled"
              name="controlled"
              type="text"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Uncontrolled Input */}
          <div>
            <label
              htmlFor="uncontrolled"
              className="block text-gray-600 font-medium mb-2"
            >
              Uncontrolled Input (useRef):
            </label>
            <input
              id="uncontrolled"
              name="uncontrolled"
              type="text"
              ref={inputRef}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg shadow-lg transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
