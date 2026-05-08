import "../css/courses.css";

const courses = [
  { id: 1, name: "BCA", duration: "3 Years", intake: "160 seats", level: "Undergraduate" },
  { id: 2, name: "BSc", duration: "3 Years", intake: "140 seats", level: "Undergraduate" },
  { id: 3, name: "BCom", duration: "3 Years", intake: "120 seats", level: "Undergraduate" },
  { id: 4, name: "BTech", duration: "4 Years", intake: "180 seats", level: "Undergraduate" },
  { id: 5, name: "MA", duration: "2 Years", intake: "90 seats", level: "Postgraduate" },
  { id: 6, name: "MCA", duration: "2 Years", intake: "110 seats", level: "Postgraduate" },
  { id: 7, name: "MBA", duration: "2 Years", intake: "100 seats", level: "Postgraduate" },
];

export default function Courses() {
  return (
    <div className="courses-bg">
      <div className="container py-5 fade-in">
        <div className="page-shell p-4 p-lg-5">
          <div className="page-header">
            <div>
              <span className="eyebrow mb-3">Academic Portfolio</span>
              <h2 className="fw-bold">Courses</h2>
              <p className="text-muted">
                Organize program offerings with clear duration, intake, and level
                visibility for admissions and academic operations.
              </p>
            </div>

            <div className="page-header-actions">
              <button type="button" className="btn btn-soft">
                Curriculum review
              </button>
              <button type="button" className="btn btn-primary">
                Add new program
              </button>
            </div>
          </div>

          <div className="stat-grid">
            <div className="stat-card primary hover-lift">
              <small>Programs</small>
              <h3>{courses.length}</h3>
              <p>Academic programs currently available</p>
            </div>
            <div className="stat-card teal hover-lift">
              <small>UG programs</small>
              <h3>4</h3>
              <p>Undergraduate offerings across core streams</p>
            </div>
            <div className="stat-card amber hover-lift">
              <small>PG programs</small>
              <h3>3</h3>
              <p>Advanced tracks for specialization and leadership</p>
            </div>
            <div className="stat-card rose hover-lift">
              <small>Planned launches</small>
              <h3>2</h3>
              <p>Programs under review for the next intake season</p>
            </div>
          </div>

          <div className="row g-4">
            {courses.map((course) => (
              <div className="col-lg-4 col-md-6" key={course.id}>
                <div className="card section-card hover-lift h-100 course-tile">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                    <div>
                      <span className="badge bg-primary mb-3">{course.level}</span>
                      <h4 className="mb-1">{course.name}</h4>
                      <p className="text-muted mb-0">{course.duration}</p>
                    </div>
                    <span className="course-tile-code">0{course.id}</span>
                  </div>

                  <div className="info-grid">
                    <div className="info-card">
                      <h5>Intake</h5>
                      <p>{course.intake}</p>
                    </div>
                    <div className="info-card">
                      <h5>Delivery</h5>
                      <p>Hybrid classroom model</p>
                    </div>
                  </div>

                  <div className="metric-inline mt-4">
                    <div className="metric-chip">
                      <strong>94%</strong>Completion
                    </div>
                    <div className="metric-chip">
                      <strong>4.7/5</strong>Course rating
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
