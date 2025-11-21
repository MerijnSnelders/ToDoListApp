import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "../Styles/sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="mobile-header">
        <button className="menu-btn" onClick={() => setOpen(true)}>
          <Menu size={18} />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <X size={28} />
        </button>
        <nav>
          <Link to="/" className="nav-item" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/tasks" className="nav-item" onClick={() => setOpen(false)}>Taken</Link>
          <Link to="/madeby" className="nav-item" onClick={() => setOpen(false)}>Gemaakt door</Link>
        </nav>
      </aside>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Sidebar;
