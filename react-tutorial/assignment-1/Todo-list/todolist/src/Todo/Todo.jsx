import React, { useState } from "react";
import { useEffect } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem('todo');
    return savedTasks ? JSON.parse(savedTasks) : []
  });


  const [task, setTask] = useState("");
  
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = ()=>{
    if(task.trim()==="") return ;
    const timestamp = new Date().toLocaleString()
    setTasks([
      ...tasks, {text : task, completed : false, time:timestamp}
    ])
    setTask("");
  }

  const toggleTask = (index)=>{
    const newTasks = [...tasks]
    newTasks[index].completed = ! newTasks[index].completed;
    setTasks(newTasks)
  }

  const deleteTask = (index)=>{
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">To-Do List</h1>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-2 border rounded-lg ${
                task.completed ? "bg-green-100" : "bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                  className="h-4 w-4 text-blue-500 rounded focus:ring-blue-400"
                />
                <span
                  className={`text-gray-800 ${
                    task.completed ? "line-through" : ""
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <span className="text-sm text-gray-500">Added: {task.time}</span>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
