import React from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const TasksPage = () => {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Takenlijst</h1>

      {/* Input voor nieuwe taken */}
      <TaskInput />

      {/* Lijst van taken */}
      <TaskList />
    </div>
  );
};

export default TasksPage;
