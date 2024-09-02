// src/App.jsx

import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend (replace with your backend API endpoint)
  useEffect(() => {
    fetch('http://localhost:3000/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  // Add a new task
  const addTask = (taskName) => {
    const newTask = { name: taskName, completed: false };
    fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((task) => setTasks([...tasks, task]));
  };

  // Delete a task
  const deleteTask = (taskId) => {
    fetch(`http://localhost:3000/api/tasks/${taskId}`, {
      method: 'DELETE',
    }).then(() => setTasks(tasks.filter((task) => task._id !== taskId)));
  };

  // Update a task (mark as completed/uncompleted)
  const updateTask = (taskId) => {
    const taskToUpdate = tasks.find((task) => task._id === taskId);
    fetch(`http://localhost:3000/api/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...taskToUpdate, completed: !taskToUpdate.completed }),
    })
      .then((response) => response.json())
      .then((updatedTask) =>
        setTasks(tasks.map((task) => (task._id === taskId ? updatedTask : task)))
      );
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-4 py-6 text-center mt-18">
     To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
