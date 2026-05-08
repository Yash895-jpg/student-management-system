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
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

import studentData from "../js/studentData";
import "../css/dashboard.css";

const ATTENDANCE_COLORS = ["#0f766e", "#d97706"];
const BAR_COLOR = "#1d4ed8";
const performanceData = [
  { month: "Jan", enrollments: 48 },
  { month: "Feb", enrollments: 56 },
  { month: "Mar", enrollments: 61 },
  { month: "Apr", enrollments: 58 },
  { month: "May", enrollments: 74 },
  { month: "Jun", enrollments: 82 },
];

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="chart-tooltip">
      {label ? <p className="chart-tooltip-label">{label}</p> : null}
      {payload.map((entry) => (
        <p key={entry.dataKey} className="chart-tooltip-value">
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

function renderPieLabel({ name, percent }) {
  return `${name} ${Math.round(percent * 100)}%`;
}

export default function Dashboard() {
  const courseStats = Object.values(
    studentData.reduce((acc, student) => {
      acc[student.course] = acc[student.course]
        ? { course: student.course, count: acc[student.course].count + 1 }
        : { course: student.course, count: 1 };
      return acc;
    }, {})
  );

  const attendanceData = [
    { name: "Present", value: 7 },
    { name: "Absent", value: 3 },
  ];

  return (
    <div className="container-fluid page">
      <div className="container py-4 fade-in">
        <div className="page-shell p-4 p-lg-5">
          <div className="page-header">
            <div>
              <span className="eyebrow mb-3">Executive Overview</span>
              <h2 className="fw-bold">Dashboard</h2>
              <p className="text-muted">
                Track enrollment, attendance, academic performance, and delivery
                health from one operational dashboard.
              </p>
            </div>

            <div className="page-header-actions">
              <button type="button" className="btn btn-soft">
                Download report
              </button>
              <button type="button" className="btn btn-primary">
                Share summary
              </button>
            </div>
          </div>

          <div className="stat-grid">
            <div className="stat-card primary hover-lift">
              <small>Total students</small>
              <h3>{studentData.length}</h3>
              <p>Active learner profiles tracked this term</p>
            </div>
            <div className="stat-card teal hover-lift">
              <small>Attendance rate</small>
              <h3>70%</h3>
              <p>Students marked present in today&apos;s attendance</p>
            </div>
            <div className="stat-card amber hover-lift">
              <small>Course portfolio</small>
              <h3>{courseStats.length}</h3>
              <p>Programs currently running across the campus</p>
            </div>
            <div className="stat-card rose hover-lift">
              <small>Pending actions</small>
              <h3>14</h3>
              <p>Tasks waiting on operations or faculty approval</p>
            </div>
          </div>

          <div className="module-hero mb-4">
            <h3>Operations are trending upward this month.</h3>
            <p>
              Enrollment demand, classroom presence, and faculty utilization are
              all moving in the right direction with stable academic delivery.
            </p>
            <div className="module-hero-metrics">
              <div>
                <strong>+18%</strong>
                <span>Enrollment growth</span>
              </div>
              <div>
                <strong>96%</strong>
                <span>Schedule adherence</span>
              </div>
              <div>
                <strong>4.8/5</strong>
                <span>Student experience score</span>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-xl-7">
              <div className="card shadow-sm p-3 p-lg-4 chart-card">
                <div className="chart-header">
                  <div>
                    <h5 className="mb-1">Students per Course</h5>
                    <p className="text-muted mb-0">
                      Enrollment split across active programs
                    </p>
                  </div>
                </div>

                <div className="chart-frame">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={courseStats}
                      margin={{ top: 12, right: 12, left: -16, bottom: 8 }}
                      barSize={46}
                    >
                      <CartesianGrid
                        vertical={false}
                        stroke="rgba(19, 32, 51, 0.08)"
                      />
                      <XAxis
                        dataKey="course"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "#5f6b7c", fontSize: 13, fontWeight: 600 }}
                      />
                      <YAxis
                        allowDecimals={false}
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "#5f6b7c", fontSize: 13 }}
                        label={{
                          value: "Students",
                          angle: -90,
                          position: "insideLeft",
                          offset: 8,
                          fill: "#5f6b7c",
                          fontSize: 13,
                        }}
                      />
                      <Tooltip
                        cursor={{ fill: "rgba(15, 118, 110, 0.08)" }}
                        content={<ChartTooltip />}
                      />
                      <Legend
                        verticalAlign="top"
                        align="right"
                        iconType="circle"
                        wrapperStyle={{ paddingBottom: 12, fontSize: "13px" }}
                      />
                      <Bar
                        dataKey="count"
                        name="Students"
                        fill={BAR_COLOR}
                        radius={[14, 14, 6, 6]}
                        isAnimationActive
                        animationBegin={150}
                        animationDuration={1400}
                        animationEasing="ease-out"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="col-xl-5">
              <div className="card shadow-sm p-3 p-lg-4 chart-card">
                <div className="chart-header">
                  <div>
                    <h5 className="mb-1">Attendance Overview</h5>
                    <p className="text-muted mb-0">
                      Present versus absent students today
                    </p>
                  </div>
                </div>

                <div className="chart-frame">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Tooltip content={<ChartTooltip />} />
                      <Legend
                        verticalAlign="bottom"
                        iconType="circle"
                        wrapperStyle={{ paddingTop: 10, fontSize: "13px" }}
                      />
                      <Pie
                        data={attendanceData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="46%"
                        innerRadius="46%"
                        outerRadius="78%"
                        paddingAngle={4}
                        labelLine={false}
                        label={renderPieLabel}
                        isAnimationActive
                        animationBegin={100}
                        animationDuration={1500}
                        animationEasing="ease-out"
                      >
                        {attendanceData.map((entry, index) => (
                          <Cell
                            key={entry.name}
                            fill={ATTENDANCE_COLORS[index % ATTENDANCE_COLORS.length]}
                            stroke="rgba(255,255,255,0.92)"
                            strokeWidth={3}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-xl-7">
              <div className="card section-card">
                <div className="section-title">
                  <div>
                    <h4>Enrollment Momentum</h4>
                    <p>Monthly intake trend for the current cycle.</p>
                  </div>
                </div>

                <div className="chart-frame">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={performanceData}
                      margin={{ top: 10, right: 10, left: -16, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="enrollmentGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="rgba(15,118,110,0.8)"
                            stopOpacity={0.9}
                          />
                          <stop
                            offset="95%"
                            stopColor="rgba(15,118,110,0.05)"
                            stopOpacity={0.05}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        vertical={false}
                        stroke="rgba(19, 32, 51, 0.08)"
                      />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "#5f6b7c", fontSize: 13, fontWeight: 600 }}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "#5f6b7c", fontSize: 13 }}
                      />
                      <Tooltip content={<ChartTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="enrollments"
                        name="Enrollments"
                        stroke="#0f766e"
                        fill="url(#enrollmentGradient)"
                        strokeWidth={3}
                        isAnimationActive
                        animationDuration={1500}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="col-xl-5">
              <div className="card section-card h-100">
                <div className="section-title">
                  <div>
                    <h4>Operational Highlights</h4>
                    <p>Current priorities across academics and administration.</p>
                  </div>
                </div>

                <div className="data-list">
                  <div className="data-row">
                    <div>
                      <div className="data-row-title">Admissions review</div>
                      <div className="data-row-copy">
                        12 applications need document verification today.
                      </div>
                    </div>
                    <span className="badge bg-primary">Priority</span>
                  </div>
                  <div className="data-row">
                    <div>
                      <div className="data-row-title">Faculty scheduling</div>
                      <div className="data-row-copy">
                        Timetables are aligned for the next 3 class windows.
                      </div>
                    </div>
                    <span className="badge bg-success">Stable</span>
                  </div>
                  <div className="data-row">
                    <div>
                      <div className="data-row-title">Library activity</div>
                      <div className="data-row-copy">
                        Resource usage increased by 11% week over week.
                      </div>
                    </div>
                    <span className="badge bg-warning text-dark">Growth</span>
                  </div>
                </div>

                <div className="info-grid mt-4">
                  <div className="info-card">
                    <h5>Finance sync</h5>
                    <p>Fee collection data last updated 14 minutes ago.</p>
                  </div>
                  <div className="info-card">
                    <h5>Support queue</h5>
                    <p>5 student issues are waiting for staff response.</p>
                  </div>
                  <div className="info-card">
                    <h5>Placement office</h5>
                    <p>3 companies added new internship openings this week.</p>
                  </div>
                  <div className="info-card">
                    <h5>Platform uptime</h5>
                    <p>99.97% service availability during the current month.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
