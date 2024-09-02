// src/components/TaskList.jsx

import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
      ))}
    </div>
  );
}

export default TaskList;
