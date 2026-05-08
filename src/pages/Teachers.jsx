import "../css/teachers.css";

import rajesh from "../assets/teachers/rajesh.jpg";
import anita from "../assets/teachers/anita.jpg";
import rahul from "../assets/teachers/rahul.jpg";
import neha from "../assets/teachers/neha.jpg";

const teachers = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    subject: "Computer Science",
    image: rajesh,
  },
  {
    id: 2,
    name: "Ms. Anita Sharma",
    subject: "Mathematics",
    image: anita,
  },
  {
    id: 3,
    name: "Mr. Rahul Mehta",
    subject: "Web Development",
    image: rahul,
  },
  {
    id: 4,
    name: "Mrs. Neha Patel",
    subject: "Database Systems",
    image: neha,
  },
];

export default function Teachers() {
  return (
    <div className="teachers-bg">
      <div className="container py-5 fade-in">
        <div className="page-shell p-4 p-lg-5">
          <div className="page-header">
            <div>
              <span className="eyebrow mb-3">Faculty Network</span>
              <h2 className="fw-bold">Teachers</h2>
              <p className="text-muted">
                Showcase your faculty roster with professional profiles, subject
                specialization, and teaching operations context.
              </p>
            </div>

            <div className="page-header-actions">
              <button type="button" className="btn btn-soft">
                Workload review
              </button>
              <button type="button" className="btn btn-primary">
                Add faculty
              </button>
            </div>
          </div>

          <div className="stat-grid">
            <div className="stat-card primary hover-lift">
              <small>Faculty members</small>
              <h3>{teachers.length}</h3>
              <p>Active teachers in the current academic cycle</p>
            </div>
            <div className="stat-card teal hover-lift">
              <small>Certification rate</small>
              <h3>98%</h3>
              <p>Faculty with current certifications and training</p>
            </div>
            <div className="stat-card amber hover-lift">
              <small>Avg. satisfaction</small>
              <h3>4.9</h3>
              <p>Average learner rating for teaching quality</p>
            </div>
            <div className="stat-card rose hover-lift">
              <small>Open shifts</small>
              <h3>3</h3>
              <p>Classroom sessions pending final assignment</p>
            </div>
          </div>

          <div className="row g-4">
            {teachers.map((teacher) => (
              <div className="col-lg-3 col-md-6" key={teacher.id}>
                <div className="card section-card text-center hover-lift h-100">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="teacher-avatar rounded-circle mx-auto mb-3"
                  />

                  <span className="badge bg-primary mb-3">{teacher.subject}</span>
                  <h4 className="mb-1">{teacher.name}</h4>
                  <p className="text-muted mb-4">Lead faculty member</p>

                  <div className="info-grid text-start">
                    <div className="info-card">
                      <h5>Classes</h5>
                      <p>08 active weekly sessions</p>
                    </div>
                    <div className="info-card">
                      <h5>Rating</h5>
                      <p>4.8 learner satisfaction score</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
