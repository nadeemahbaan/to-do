import React, { useState } from "react";
import "./TodoApp.css"
const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="todo-app">
      <h2>📝 My To-Do List</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={handleChange}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            {/* Delete / Complete buttons will be added later */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
