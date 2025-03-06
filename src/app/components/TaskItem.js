const TaskItem = ({ task, onUpdate, onDelete }) => {
    return (
      <div className="flex justify-between p-4 border-b">
        <span
          className={
            task.completed || task.status === "completed"
              ? "line-through text-gray-500"
              : ""
          }
        >
          {task.name} ({task.category})
        </span>
        <div className="flex gap-2">
          {
            <button
              disabled={task.completed || task.status === "completed"}
              onClick={() => onUpdate(task._id)}
              className={
                task.status === "completed" || task.completed
                  ? "bg-green-500 text-white p-2"
                  : task.status === "pending"
                  ? " bg-yellow-500 text-white p-2"
                  : ""
              }
            >
              {task.status === "completed" || task.completed
                ? " Completed"
                : " Complete"}
            </button>
          }
          <button
            onClick={() => onDelete(task._id)}
            className="bg-red-500 text-white p-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default TaskItem;
  