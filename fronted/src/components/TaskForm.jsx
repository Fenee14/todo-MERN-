import { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="flex justify-center items-start h-[40vh]">
      <form onSubmit={handleSubmit} className="w-96 p-4 border rounded-lg shadow-lg mt-10 mb-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a Task"
          className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
