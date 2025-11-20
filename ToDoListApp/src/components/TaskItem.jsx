import React, { useState } from "react";
import { Check, Pencil, Trash2, Save } from "lucide-react";
import { useGlobalState } from "../state/GlobalState";

const TaskItem = ({ task }) => {
  const { tasks } = useGlobalState();

  // Local UI state
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  // ---- GlobalState Actions ----

  const updateTasks = (updated) => {
    window.GlobalState.set({ tasks: updated });
  };

  const toggleTask = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    updateTasks(updated);
  };

  const editTask = (id, newText) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, text: newText } : t
    );
    updateTasks(updated);
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    updateTasks(updated);
  };

  // ---- UI Handlers ----

  const handleSave = () => {
    if (!editText.trim()) return;
    editTask(task.id, editText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setIsEditing(false);
      setEditText(task.text); // Reset tekst
    }
  };

  return (
    <div
      className={`task-item ${task.completed ? "completed" : ""}`}
    >
      {/* Checkbox */}
      <button
        onClick={() => toggleTask(task.id)}
        className={`
          w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors duration-200 flex-shrink-0
          ${
            task.completed
              ? "bg-green-500 border-green-500 text-white shadow-md"
              : "border-gray-300 text-transparent hover:border-indigo-500"
          }
        `}
      >
        {task.completed && <Check size={18} strokeWidth={3} />}
      </button>

      {/* Tekst */}
      <div className="flex-grow mx-4 min-w-0">
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            autoFocus
            className="w-full p-2 border border-indigo-400 rounded-lg focus:ring-indigo-500"
          />
        ) : (
          <p
            className={`text-lg truncate ${
              task.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {task.text}
          </p>
        )}
      </div>

      {/* Acties */}
      <div className="flex items-center space-x-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            disabled={!editText.trim()}
            className="p-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 disabled:bg-gray-400"
          >
            <Save size={18} />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-indigo-500 hover:bg-indigo-100 rounded-lg"
          >
            <Pencil size={18} />
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="p-2 text-red-500 hover:bg-red-100 rounded-lg"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
