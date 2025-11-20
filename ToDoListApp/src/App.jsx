import React from "react";
import { GlobalStateProvider } from "./state/GlobalState.jsx";
import TasksPage from "./pages/TaskPage.jsx";
export default function App() {
  return (
    <GlobalStateProvider>
      <TasksPage />
    </GlobalStateProvider>
  );
}
