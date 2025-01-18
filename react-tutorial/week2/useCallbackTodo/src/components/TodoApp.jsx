import React, { useState, useCallback } from 'react';

// Task Component (Child)
const Task = React.memo(({ task, onComplete, onDelete }) => {
  console.log(`Rendering Task: ${task.id}`);

  return (
    <div style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          flex: 1,
        }}
      >
        {task.text}
      </span>
      <button
        style={{ margin: '0 5px' }}
        onClick={() => onComplete(task.id)}
        disabled={task.completed}
      >
        Complete
      </button>
      <button style={{ margin: '0 5px' }} onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
});

// Main App Component (Parent)
const TodoApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Study useCallback', completed: false },
  ]);

  const [taskText, setTaskText] = useState('');

  // Add Task Callback
  const addTask = () => {
    if (taskText.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: taskText, completed: false },
      ]);
      setTaskText('');
    }
  };

  // Complete Task Callback (memoized)
  const handleComplete = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }, []);

  // Delete Task Callback (memoized)
  const handleDelete = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>To-Do List</h2>

      {/* Input and Add Task */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a task"
          style={{ padding: '5px', width: '70%' }}
        />
        <button onClick={addTask} style={{ padding: '5px', marginLeft: '10px' }}>
          Add
        </button>
      </div>

      {/* Task List */}
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
