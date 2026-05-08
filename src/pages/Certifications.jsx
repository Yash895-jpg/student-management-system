import "../css/certifications.css";

const certificates = [
  {
    id: 1,
    title: "Web Development Certificate",
    category: "Technology",
    duration: "8 weeks",
  },
  {
    id: 2,
    title: "Data Science Certificate",
    category: "Analytics",
    duration: "10 weeks",
  },
  {
    id: 3,
    title: "Cloud Computing Certificate",
    category: "Infrastructure",
    duration: "6 weeks",
  },
  {
    id: 4,
    title: "Cyber Security Certificate",
    category: "Security",
    duration: "9 weeks",
  },
];

export default function Certifications() {
  return (
    <div className="container-fluid page certifications-bg">
      <div className="container py-4 fade-in">
        <div className="page-shell p-4 p-lg-5">
          <div className="page-header">
            <div>
              <span className="eyebrow mb-3">Credential Programs</span>
              <h2 className="fw-bold">Certifications</h2>
              <p className="text-muted">
                Present industry-facing certificate programs with stronger structure,
                measurable outcomes, and clear academic positioning.
              </p>
            </div>

            <div className="page-header-actions">
              <button type="button" className="btn btn-soft">
                Review syllabus
              </button>
              <button type="button" className="btn btn-primary">
                Launch new track
              </button>
            </div>
          </div>

          <div className="stat-grid">
            <div className="stat-card primary hover-lift">
              <small>Certification tracks</small>
              <h3>{certificates.length}</h3>
              <p>Industry-ready certificate options available</p>
            </div>
            <div className="stat-card teal hover-lift">
              <small>Completion rate</small>
              <h3>91%</h3>
              <p>Learners finishing certificate modules on schedule</p>
            </div>
            <div className="stat-card amber hover-lift">
              <small>Placement value</small>
              <h3>73%</h3>
              <p>Students using certificates in internships and interviews</p>
            </div>
            <div className="stat-card rose hover-lift">
              <small>Partner badges</small>
              <h3>12</h3>
              <p>External recognition pathways mapped to current tracks</p>
            </div>
          </div>

          <div className="certifications-grid">
            {certificates.map((certificate) => (
              <div className="certificate-card hover-lift" key={certificate.id}>
                <span className="badge bg-primary mb-3">{certificate.category}</span>
                <h3>{certificate.title}</h3>
                <p>
                  Industry-aligned recognition for measurable subject mastery and
                  portfolio-ready outcomes.
                </p>

                <div className="metric-inline mt-4">
                  <div className="metric-chip">
                    <strong>{certificate.duration}</strong>Duration
                  </div>
                  <div className="metric-chip">
                    <strong>Live</strong>Mentor support
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
