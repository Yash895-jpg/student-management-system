import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import studentData from "../js/studentData";
import "../css/dashboard.css";

export default function Dashboard() {
  const courseStats = Object.values(
    studentData.reduce((acc, s) => {
      acc[s.course] = acc[s.course]
        ? { course: s.course, count: acc[s.course].count + 1 }
        : { course: s.course, count: 1 };
      return acc;
    }, {})
  );

  const attendanceData = [
    { name: "Present", value: 7 },
    { name: "Absent", value: 3 },
  ];

  const COLORS = ["#22c55e", "#ef4444"];

  return (
    <div className="container-fluid page">
      <div className="container py-4 fade-in">
        {/* PAGE HEADER */}
        <div className="mb-4">
          <h2 className="fw-bold">Dashboard</h2>
          <p className="text-muted">
            Overview of students and attendance
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="card bg-primary text-white p-3 hover-lift">
              <h6>Total Students</h6>
              <h3>{studentData.length}</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-success text-white p-3 hover-lift">
              <h6>Present</h6>
              <h3>7</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-danger text-white p-3 hover-lift">
              <h6>Absent</h6>
              <h3>3</h3>
            </div>
          </div>
        </div>

        {/* CHARTS */}
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card shadow-sm p-3 chart-card">
              <h5 className="mb-3">Students per Course</h5>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={courseStats}>
                  <XAxis dataKey="course" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="count"
                    fill="#3b82f6"
                    isAnimationActive
                    animationDuration={1200}
                    animationEasing="ease-out"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card shadow-sm p-3 chart-card">
              <h5 className="mb-3">Attendance Overview</h5>
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={attendanceData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    label
                    isAnimationActive
                    animationDuration={1200}
                    animationEasing="ease-out"
                  >
                    {attendanceData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
