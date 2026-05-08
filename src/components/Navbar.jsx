import { NavLink } from "react-router-dom";

export default function Navbar({ toggle, isMobile, currentUser, onLogout }) {
  const today = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <button
          type="button"
          onClick={toggle}
          className="menu-btn"
          aria-label="Toggle sidebar"
        >
          <span />
          <span />
          <span />
        </button>

        <div className="brand-copy">
          <span className="brand-kicker">SaaS Education Suite</span>
          <h2>Campus OS</h2>
        </div>
      </div>

      {!isMobile ? (
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/students">Students</NavLink>
          <NavLink to="/attendance">Attendance</NavLink>
          <NavLink to="/library">Library</NavLink>
        </div>
      ) : null}

      <div className="topbar-utilities">
        <div className="topbar-status">
          <span className="status-dot" />
          Live operations
        </div>
        <div className="topbar-date">{today}</div>
        <div className="topbar-user">
          <span className="topbar-user-name">{currentUser?.name}</span>
          <span className="topbar-user-email">{currentUser?.email}</span>
        </div>
        <button type="button" className="topbar-logout" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
