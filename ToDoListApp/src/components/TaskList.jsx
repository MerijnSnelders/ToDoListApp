import React from "react";
import { useGlobalState } from "../state/GlobalState";
import TaskItem from "./TaskItem";
import "../Styles/taskList.css";

const TaskList = () => {
  const { tasks } = useGlobalState();

  if (!tasks || tasks.length === 0) {
    return (
      <p className="empty-text">
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
