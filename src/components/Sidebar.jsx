
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Students
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Courses
          </NavLink>
        </li>
          <li>
    <NavLink to="/attendance">Attendance</NavLink>
  </li>
      </ul>
    </aside>
  );
}

