import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useGlobalState } from "../state/GlobalState";

const TaskInput = () => {
  const { tasks } = useGlobalState();
  const [inputText, setInputText] = useState("");

  // --- GlobalState action ---
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

  // --- UI handlers ---
  const handleAdd = () => {
    if (!inputText.trim()) return;
    addTask(inputText.trim());
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  // --- Render ---
  return (
    <div className="task-input-container">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Nieuwe taak toevoegen..."
        className="flex-grow p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
      />

      <button
        onClick={handleAdd}
        disabled={!inputText.trim()}
        className={`
          p-3 rounded-xl shadow-md transition duration-200 flex items-center justify-center
          ${
            inputText.trim()
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }
        `}
      >
        <Plus size={24} />
      </button>
    </div>
  );
};

export default TaskInput;
