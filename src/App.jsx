import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Dashboard from "./html/Dashboard";
import Students from "./html/Students";
import Courses from "./html/Courses";
import Attendance from "./html/Attendance";
import Library from "./pages/Library";
import Teachers from "./pages/Teachers";
import Certifications from "./pages/Certifications";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [theme, setTheme] = useState("theme-blue");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar toggle={toggleSidebar} setTheme={setTheme} />
      <Sidebar isOpen={isOpen} />

      <main
        className={`main-content ${
          isOpen ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/library" element={<Library />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
