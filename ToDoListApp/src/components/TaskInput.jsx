import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useGlobalState } from "../state/GlobalState";
import "../Styles/taskInput.css";

const TaskInput = () => {
  const { tasks } = useGlobalState();
  const [inputText, setInputText] = useState("");

  const addTask = (text) => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    window.GlobalState.set({
      tasks: [...tasks, newTask],
    });
  };

  const handleAdd = () => {
    if (!inputText.trim()) return;
    addTask(inputText.trim());
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Nieuwe taak toevoegen..."
        
      />

      <button
        onClick={handleAdd}
        disabled={!inputText.trim()}
        className={inputText.trim() ? "enabled" : "disabled"}
      >
        <Plus size={24} />
      </button>
    </div>
  );
};

export default TaskInput;
