'use client'
import { useEffect, useState } from "react";
import { fetchTasks, addTask, updateTask, deleteTask } from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTasks()
      .then(setTasks)
      .finally(() => setLoading(false));
  }, [tasks]);

  const handleAddTask = async (task) => {
    setLoading(true); 
    const newTask = await addTask({ ...task, completed: false });
    setTasks([...tasks, newTask]);
    setLoading(false)
  };

  const handleUpdateTask = async (id) => {
    setLoading(true); 
    await updateTask(id);
    setTasks(tasks.map((t) => (t._id === id ? { ...t, completed: true } : t)));
    setLoading(false)
  };

  const handleDeleteTask = async (id) => {
    setLoading(true); 
    await deleteTask(id);
    setTasks(tasks.filter((t) => t._id !== id));
    setLoading(false)
  };

  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : filter === "completed" ? task.status==='completed' : task.status==='pending'
  );

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-xl font-bold text-center mb-4">Task Manager</h1>
      <TaskForm onAdd={handleAddTask} />
      <FilterBar filter={filter} setFilter={setFilter} />
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
        </div>)
        :
      <TaskList tasks={filteredTasks} onUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
      }
    </div>
  );
}
