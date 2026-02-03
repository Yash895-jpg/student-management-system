import { useState } from "react";
import studentData from "../js/studentData";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

export default function Attendance() {
  const [students, setStudents] = useState(
    studentData.map((s) => ({
      ...s,
      status: "present",
    }))
  );

  const [courseFilter, setCourseFilter] = useState("All");

  const presentCount = students.filter(
    (s) => s.status === "present"
  ).length;

  const absentCount = students.filter(
    (s) => s.status === "absent"
  ).length;

  const chartData = [
    { name: "Present", value: presentCount },
    { name: "Absent", value: absentCount },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  const markStatus = (id, status) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, status } : s
      )
    );
  };

  return (
    <div className="container-fluid page">
      <div className="container py-4 fade-in">
        {/* PAGE HEADER */}
        <div className="mb-4">
          <h2 className="fw-bold">Attendance</h2>
          <p className="text-muted">
            Mark and analyze student attendance
          </p>
        </div>

        {/* TOP SECTION */}
        <div className="row g-4 mb-4">
          {/* PIE CHART */}
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5 className="mb-3">Attendance Overview</h5>

              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={85}
                    label
                    isAnimationActive
                    animationDuration={1200}
                    animationEasing="ease-out"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* FILTER */}
          <div className="col-md-8">
            <div className="card p-3 shadow-sm h-100">
              <h5 className="mb-3">Filter Students</h5>

              <select
                className="form-select w-50"
                value={courseFilter}
                onChange={(e) =>
                  setCourseFilter(e.target.value)
                }
              >
                <option value="All">All Courses</option>
                <option value="BCA">BCA</option>
                <option value="BSc">BSc</option>
                <option value="BCom">BCom</option>
                <option value="MBA">MBA</option>
              </select>
            </div>
          </div>
        </div>

        {/* ATTENDANCE LIST */}
        <div className="row g-4">
          {students
            .filter(
              (s) =>
                courseFilter === "All" ||
                s.course === courseFilter
            )
            .map((s) => (
              <div className="col-md-4" key={s.id}>
                <div
                  className={`card p-3 shadow-sm hover-lift ${
                    s.status === "present"
                      ? "border-start border-success border-4"
                      : "border-start border-danger border-4"
                  }`}
                >
                  <h5 className="mb-1">{s.name}</h5>
                  <span className="badge bg-secondary mb-2">
                    {s.course}
                  </span>

                  <p className="mb-3">
                    Status:{" "}
                    <strong
                      className={
                        s.status === "present"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {s.status}
                    </strong>
                  </p>

                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-success btn-animate"
                      onClick={() =>
                        markStatus(s.id, "present")
                      }
                    >
                      Present
                    </button>

                    <button
                      className="btn btn-sm btn-danger btn-animate"
                      onClick={() =>
                        markStatus(s.id, "absent")
                      }
                    >
                      Absent
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
