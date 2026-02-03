import { useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", course: "BCA" },
    { id: 2, name: "Anita", course: "BSc" },
    { id: 3, name: "Yash", course: "BCA" },
    { id: 4, name: "Neha", course: "BCom" },
    { id: 5, name: "Amit", course: "MBA" },
  ]);

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const addStudent = () => {
    if (!name || !course) return;

    setStudents([...students, { id: Date.now(), name, course }]);
    setName("");
    setCourse("");
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="container-fluid page">
      <div className="container py-4 fade-in">
        {/* PAGE HEADER */}
        <h2 className="fw-bold">Students</h2>
        <p className="text-muted mb-4">
          Add, view and manage student records
        </p>

        <div className="row">
          {/* ADD STUDENT FORM */}
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h5 className="mb-3">Add Student</h5>

              <input
                className="form-control mb-3"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <select
                className="form-select mb-3"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="">Select Course</option>
                <option>BCA</option>
                <option>BSc</option>
                <option>BCom</option>
                <option>MBA</option>
              </select>

              <button
                className="btn btn-primary btn-animate w-100"
                onClick={addStudent}
                disabled={!name || !course}
              >
                Add Student
              </button>
            </div>
          </div>

          {/* STUDENT LIST */}
          <div className="col-md-8">
            <div className="card p-3 shadow-sm hover-lift">
              <h5 className="mb-3">Student List</h5>

              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {students.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center text-muted">
                        No students found
                      </td>
                    </tr>
                  ) : (
                    students.map((s, i) => (
                      <tr key={s.id}>
                        <td>{i + 1}</td>
                        <td>{s.name}</td>
                        <td>
                          <span className="badge bg-secondary">
                            {s.course}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger btn-animate"
                            onClick={() => deleteStudent(s.id)}
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
  );
}
