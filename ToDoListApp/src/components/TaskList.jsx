import React from "react";
import { useGlobalState } from "../state/GlobalState";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useGlobalState();

  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-4">
        Geen taken gevonden. Voeg er een toe!
      </p>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
