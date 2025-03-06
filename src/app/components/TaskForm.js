import { useState } from "react";
import { CATEGORIES } from "../utils/constants";

const TaskForm = ({ onAdd }) => {
  const [task, setTask] = useState({ name: "", category: CATEGORIES[0] });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.trim()) {
      onAdd(task);
      setTask({ name: "", category: CATEGORIES[0] });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-b">
      <input
        type="text"
        placeholder="Task Name"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        className="border p-2 flex-1"
        required
      />
      <select
        value={task.category}
        onChange={(e) => setTask({ ...task, category: e.target.value })}
        className="border p-2 bg-black"
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2">Add Task</button>
    </form>
  );
};

export default TaskForm;
