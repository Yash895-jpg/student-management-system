import { NavLink } from "react-router-dom";

const primaryLinks = [
  { to: "/", label: "Overview", end: true },
  { to: "/dashboard", label: "Analytics" },
  { to: "/students", label: "Students" },
  { to: "/attendance", label: "Attendance" },
];

const secondaryLinks = [
  { to: "/courses", label: "Courses" },
  { to: "/library", label: "Library" },
  { to: "/teachers", label: "Teachers" },
  { to: "/certifications", label: "Certificates" },
];

function LinkGroup({ title, links }) {
  return (
    <div className="sidebar-group">
      <span className="sidebar-group-title">{title}</span>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              <span className="sidebar-link-dot" />
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <span>Workspace</span>
        <h3>Student Management</h3>
        <p>Operate admissions, academics, and engagement from one place.</p>
      </div>

      <LinkGroup title="Core" links={primaryLinks} />
      <LinkGroup title="Academic Ops" links={secondaryLinks} />

      <div className="sidebar-footer">
        <div className="sidebar-footer-copy">
          <strong>System health</strong>
          <span>All services running normally</span>
        </div>
        <div className="sidebar-progress">
          <span style={{ width: "82%" }} />
        </div>
      </div>
    </aside>
  );
}
