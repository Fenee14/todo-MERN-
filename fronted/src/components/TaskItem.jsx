function TaskItem({ task, deleteTask, updateTask }) {
    return (
      <div className="flex items-center justify-between p-4 mb-2 border rounded-lg shadow-md">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => updateTask(task._id)}
            className="mr-3 focus:ring-blue-500 h-5 w-3 text-blue-600 border-gray-300 rounded"
          />
          <span className={`${task.completed ? 'line-through text-gray-500' : 'text-gray-900'} text-lg`}>
            {task.name}
          </span>
        </div>
        <button
          onClick={() => deleteTask(task._id)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    );
  }
  
  export default TaskItem;
  