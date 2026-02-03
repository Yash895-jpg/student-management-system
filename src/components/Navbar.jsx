import { NavLink } from "react-router-dom";
export default function Navbar({ toggle, setTheme }) {
  return (
    <nav className="navbar">
      <button onClick={toggle} className="menu-btn">☰</button>
      <h2>Student Management System</h2>
   {/* NAV LINKS */}
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/attendance">Attendance</NavLink>
      </div>

      <div className="theme-switcher">
        <button onClick={() => setTheme("theme-blue")}>🔵</button>
        <button onClick={() => setTheme("theme-green")}>🟢</button>
        <button onClick={() => setTheme("theme-purple")}>🟣</button>
        <button onClick={() => setTheme("theme-red")}>🔴</button>
      </div>
    </nav>
  );
}




