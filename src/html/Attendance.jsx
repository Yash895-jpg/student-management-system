import { useMemo, useState } from "react";
import studentData from "../js/studentData";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = ["#0f766e", "#d97706"];

function AttendanceTooltip({ active, payload }) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="chart-tooltip">
      {payload.map((entry) => (
        <p key={entry.name} className="chart-tooltip-value">
          <span
            className="chart-tooltip-dot"
            style={{ backgroundColor: entry.color }}
          />
          {entry.name}: <strong>{entry.value}</strong>
        </p>
      ))}
    </div>
  );
}

export default function Attendance() {
  const [students, setStudents] = useState(
    studentData.map((student) => ({
      ...student,
      status: "present",
    }))
  );
  const [courseFilter, setCourseFilter] = useState("All");

  const presentCount = students.filter((student) => student.status === "present").length;
  const absentCount = students.filter((student) => student.status === "absent").length;

  const chartData = [
    { name: "Present", value: presentCount },
    { name: "Absent", value: absentCount },
  ];

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      return courseFilter === "All" || student.course === courseFilter;
    });
  }, [students, courseFilter]);

  const markStatus = (id, status) => {
    setStudents((previous) =>
      previous.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  return (
    <div className="container-fluid page">
      <div className="container py-4 fade-in">
        <div className="page-shell p-4 p-lg-5">
          <div className="page-header">
            <div>
              <span className="eyebrow mb-3">Attendance Command Center</span>
              <h2 className="fw-bold">Attendance</h2>
              <p className="text-muted">
                Monitor today&apos;s attendance, filter by program, and update each
                student record in real time.
              </p>
            </div>

            <div className="page-header-actions">
              <button type="button" className="btn btn-soft">
                Sync reports
              </button>
              <button type="button" className="btn btn-primary">
                Generate summary
              </button>
            </div>
          </div>

          <div className="stat-grid">
            <div className="stat-card teal hover-lift">
              <small>Present</small>
              <h3>{presentCount}</h3>
              <p>Students currently marked present today</p>
            </div>
            <div className="stat-card rose hover-lift">
              <small>Absent</small>
              <h3>{absentCount}</h3>
              <p>Students needing attendance follow-up</p>
            </div>
            <div className="stat-card primary hover-lift">
              <small>Coverage</small>
              <h3>{Math.round((presentCount / students.length) * 100)}%</h3>
              <p>Daily attendance rate across all programs</p>
            </div>
            <div className="stat-card amber hover-lift">
              <small>Filtered view</small>
              <h3>{filteredStudents.length}</h3>
              <p>Students visible in the current roster</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-xl-4">
              <div className="card section-card h-100">
                <div className="section-title">
                  <div>
                    <h4>Attendance Snapshot</h4>
                    <p>Daily distribution for present and absent students.</p>
                  </div>
                </div>

                <div className="chart-frame">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Tooltip content={<AttendanceTooltip />} />
                      <Legend
                        verticalAlign="bottom"
                        iconType="circle"
                        wrapperStyle={{ paddingTop: 10, fontSize: "13px" }}
                      />
                      <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="46%"
                        innerRadius="48%"
                        outerRadius="78%"
                        paddingAngle={5}
                        labelLine={false}
                        label={({ name, percent }) =>
                          `${name} ${Math.round(percent * 100)}%`
                        }
                        isAnimationActive
                        animationDuration={1400}
                        animationEasing="ease-out"
                      >
                        {chartData.map((entry, index) => (
                          <Cell
                            key={entry.name}
                            fill={COLORS[index % COLORS.length]}
                            stroke="rgba(255,255,255,0.9)"
                            strokeWidth={3}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="card section-card h-100">
                <div className="section-title">
                  <div>
                    <h4>Attendance Roster</h4>
                    <p>Update attendance status program by program.</p>
                  </div>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-md-5">
                    <select
                      className="form-select"
                      value={courseFilter}
                      onChange={(event) => setCourseFilter(event.target.value)}
                    >
                      <option value="All">All courses</option>
                      <option value="BCA">BCA</option>
                      <option value="BSc">BSc</option>
                      <option value="BCom">BCom</option>
                      <option value="MBA">MBA</option>
                    </select>
                  </div>
                  <div className="col-md-7">
                    <div className="metric-inline">
                      <div className="metric-chip">
                        <strong>07</strong>Students need follow-up
                      </div>
                      <div className="metric-chip">
                        <strong>04</strong>Classes started early
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row g-3">
                  {filteredStudents.map((student) => (
                    <div className="col-md-6" key={student.id}>
                      <div className="data-row h-100 align-items-start flex-column">
                        <div className="w-100 d-flex justify-content-between gap-3">
                          <div>
                            <div className="data-row-title">{student.name}</div>
                            <div className="data-row-copy">{student.course}</div>
                          </div>
                          <span
                            className={`badge ${
                              student.status === "present"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {student.status}
                          </span>
                        </div>

                        <div className="d-flex gap-2 mt-3">
                          <button
                            type="button"
                            className="btn btn-sm btn-success"
                            onClick={() => markStatus(student.id, "present")}
                          >
                            Present
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() => markStatus(student.id, "absent")}
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
          </div>
        </div>
      </div>
    </div>
  );
}
