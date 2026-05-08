import { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Sidebar from "./components/Sidebar";
import { clearCurrentUser, getCurrentUser } from "./lib/auth";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./html/Dashboard";
import Students from "./html/Students";
import Courses from "./html/Courses";
import Attendance from "./html/Attendance";
import Library from "./pages/Library";
import Teachers from "./pages/Teachers";
import Certifications from "./pages/Certifications";

function AppLayout({ isMobile, isOpen, onLogout, toggleSidebar, currentUser }) {
  return (
    <>
      <Navbar
        toggle={toggleSidebar}
        isMobile={isMobile}
        currentUser={currentUser}
        onLogout={onLogout}
      />
      <Sidebar isOpen={isOpen} />
      {isMobile && isOpen ? (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Close sidebar"
          onClick={toggleSidebar}
        />
      ) : null}

      <main
        className={`main-content ${
          isOpen && !isMobile ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <div className="content-wrap">
          <Outlet />
        </div>
      </main>
    </>
  );
}

function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(() => getCurrentUser());
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 992);
  const [isOpen, setIsOpen] = useState(() => window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      setIsOpen((previous) => {
        if (mobile) {
          return false;
        }
        return previous || true;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [location.pathname, isMobile]);

  const toggleSidebar = () => {
    setIsOpen((previous) => !previous);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    clearCurrentUser();
    closeSidebar();
    setCurrentUser(null);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          currentUser ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login onLogin={handleAuthSuccess} />
          )
        }
      />
      <Route
        path="/register"
        element={
          currentUser ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Register onRegister={handleAuthSuccess} />
          )
        }
      />
      <Route element={<ProtectedRoute currentUser={currentUser} />}>
        <Route
          element={
            <AppLayout
              isMobile={isMobile}
              isOpen={isOpen}
              onLogout={handleLogout}
              toggleSidebar={toggleSidebar}
              currentUser={currentUser}
            />
          }
        >
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/library" element={<Library />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/certifications" element={<Certifications />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={<Navigate to={currentUser ? "/dashboard" : "/login"} replace />}
      />
    </Routes>
  );
}

export default App;
