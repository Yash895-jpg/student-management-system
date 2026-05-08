import { useMemo, useState } from "react";
import studentData from "../js/studentData";

const courseOptions = ["All", "BCA", "BSc", "BCom", "MBA"];

export default function Students() {
  const [students, setStudents] = useState(studentData);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All");

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesCourse =
        courseFilter === "All" || student.course === courseFilter;
      const matchesSearch = student.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCourse && matchesSearch;
    });
  }, [students, courseFilter, search]);

  const addStudent = () => {
    if (!name || !course) {
      return;
    }

    setStudents((previous) => [
      { id: Date.now(), name, course },
      ...previous,
    ]);
    setName("");
    setCourse("");
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents((previous) => previous.filter((student) => student.id !== id));
    }
  };

  const managedCourses = new Set(students.map((student) => student.course)).size;

  return (
    <div className="container-fluid page">
      <div className="container py-4 fade-in">
        <div className="page-shell p-4 p-lg-5">
          <div className="page-header">
            <div>
              <span className="eyebrow mb-3">Student Operations</span>
              <h2 className="fw-bold">Students</h2>
              <p className="text-muted">
                Manage enrollment, review active learners, and keep student records
                organized in one workflow.
              </p>
            </div>

            <div className="page-header-actions">
              <button type="button" className="btn btn-soft">
                Export records
              </button>
              <button type="button" className="btn btn-primary">
                New intake batch
              </button>
            </div>
          </div>

          <div className="stat-grid">
            <div className="stat-card primary hover-lift">
              <small>Total students</small>
              <h3>{students.length}</h3>
              <p>Active student profiles in the system</p>
            </div>
            <div className="stat-card teal hover-lift">
              <small>Visible records</small>
              <h3>{filteredStudents.length}</h3>
              <p>Students matching current search and filters</p>
            </div>
            <div className="stat-card amber hover-lift">
              <small>Courses managed</small>
              <h3>{managedCourses}</h3>
              <p>Programs currently represented in student records</p>
            </div>
            <div className="stat-card rose hover-lift">
              <small>New admissions</small>
              <h3>18</h3>
              <p>Applications cleared for onboarding this week</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-xl-4">
              <div className="card section-card">
                <div className="section-title">
                  <div>
                    <h4>Add Student</h4>
                    <p>Create a new student profile and assign a program.</p>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Student name</label>
                  <input
                    className="form-control"
                    placeholder="Enter full name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Course</label>
                  <select
                    className="form-select"
                    value={course}
                    onChange={(event) => setCourse(event.target.value)}
                  >
                    <option value="">Select course</option>
                    {courseOptions
                      .filter((option) => option !== "All")
                      .map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                  </select>
                </div>

                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={addStudent}
                  disabled={!name || !course}
                >
                  Add student
                </button>

                <div className="data-list mt-4">
                  <div className="data-row">
                    <div>
                      <div className="data-row-title">Fast onboarding</div>
                      <div className="data-row-copy">
                        Keep admissions data consistent across departments.
                      </div>
                    </div>
                  </div>
                  <div className="data-row">
                    <div>
                      <div className="data-row-title">Verified records</div>
                      <div className="data-row-copy">
                        Centralize student identity and program mapping.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="card section-card">
                <div className="section-title">
                  <div>
                    <h4>Student Directory</h4>
                    <p>Search, filter, and review enrollment activity.</p>
                  </div>
                  <div className="avatar-stack">
                    <span>RK</span>
                    <span>AS</span>
                    <span>NP</span>
                    <span>+7</span>
                  </div>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-md-7">
                    <input
                      className="form-control"
                      placeholder="Search students by name"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                    />
                  </div>
                  <div className="col-md-5">
                    <select
                      className="form-select"
                      value={courseFilter}
                      onChange={(event) => setCourseFilter(event.target.value)}
                    >
                      {courseOptions.map((option) => (
                        <option key={option} value={option}>
                          {option === "All" ? "All courses" : option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="metric-inline mb-4">
                  <div className="metric-chip">
                    <strong>92%</strong>Profile completion
                  </div>
                  <div className="metric-chip">
                    <strong>14</strong>Pending approvals
                  </div>
                  <div className="metric-chip">
                    <strong>6</strong>Recently updated records
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Program</th>
                        <th>Status</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredStudents.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center text-muted py-5">
                            No students match your current filters.
                          </td>
                        </tr>
                      ) : (
                        filteredStudents.map((student, index) => (
                          <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>
                              <div className="fw-semibold">{student.name}</div>
                              <div className="small text-muted">
                                ID #{String(student.id).slice(-5)}
                              </div>
                            </td>
                            <td>
                              <span className="badge bg-secondary">
                                {student.course}
                              </span>
                            </td>
                            <td>
                              <span className="badge bg-primary">Active</span>
                            </td>
                            <td className="text-end">
                              <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                onClick={() => deleteStudent(student.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
