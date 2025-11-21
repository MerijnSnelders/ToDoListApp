import React from "react";
import { useGlobalState } from "../state/GlobalState"; // pad aanpassen indien nodig

export default function UncompletedCount() {
  const { tasks = [] } = useGlobalState();

  const remaining = tasks.filter((t) => !t.completed).length;

  return (
    <div className="remaining-tasks" aria-live="polite">
      <strong>{remaining}</strong> onvoltooide {remaining === 1 ? "taak" : "taken"}
    </div>
  );
}
