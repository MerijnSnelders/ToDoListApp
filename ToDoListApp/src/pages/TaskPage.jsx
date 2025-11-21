import React from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import UncompletedCount from "../components/UncompletedCount";

const TasksPage = () => {
  return (
    <div className="app-container tasks-page">
      <h1 className="text-3xl font-bold mb-6 text-center">Takenlijst</h1>



        {/* Input voor nieuwe taken */}
        <TaskInput />
        {/* text voor onvoltooide taken */}
        <UncompletedCount />
        {/* Lijst van taken */}
        <TaskList />
    </div>
  );
};

export default TasksPage;
