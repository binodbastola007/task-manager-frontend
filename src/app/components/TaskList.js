import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <div className="p-4">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task._id} task={task} onUpdate={onUpdate} onDelete={onDelete} />
        ))
      ) : (
        <p className="text-center text-gray-500">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
