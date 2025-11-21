import React from "react";
import { GlobalStateProvider } from "./state/GlobalState.jsx";
import TasksPage from "./pages/TaskPage.jsx";
import MadeByPage from "./pages/MadeByPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <GlobalStateProvider>
        <div className="app-layout">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/madeby" element={<MadeByPage />} />
            </Routes>
          </div>
        </div>
    </GlobalStateProvider>
  );
}
