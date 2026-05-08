import { useNavigate } from "react-router-dom";
import "../css/home.css";

const featureCards = [
  {
    title: "Course Operations",
    copy: "Manage offerings, intake plans, and portfolio visibility from a cleaner academic layer.",
    stat: "24 live cohorts",
    tone: "emerald",
    path: "/courses",
  },
  {
    title: "Library & Resources",
    copy: "Present physical and digital learning assets in a modern, searchable experience.",
    stat: "18k resources",
    tone: "amber",
    path: "/library",
  },
  {
    title: "Faculty Management",
    copy: "Track faculty availability, teaching quality, and academic expertise in one place.",
    stat: "32 faculty experts",
    tone: "azure",
    path: "/teachers",
  },
  {
    title: "Certification Tracks",
    copy: "Structure career-aligned credentials with clear outcomes and student progression.",
    stat: "12 subject tracks",
    tone: "rose",
    path: "/certifications",
  },
];

const highlights = [
  {
    title: "Unified student operations",
    copy: "Admissions, records, attendance, and academic workflows now live in one dashboard.",
  },
  {
    title: "Executive visibility",
    copy: "Charts, KPIs, and management panels surface the signals teams actually need.",
  },
  {
    title: "Production-ready interface",
    copy: "Responsive layout, layered surfaces, motion, and clearer navigation elevate trust.",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home-page fade-in">
      <section className="home-hero page-shell">
        <div className="hero-copy">
          <span className="eyebrow">Modern Student SaaS Platform</span>
          <h1>Operate your campus with the clarity of a real admin product.</h1>
          <p>
            Bring student records, academic workflows, teaching operations, and
            reporting into one professional dashboard built for daily use.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4"
              onClick={() => navigate("/dashboard")}
            >
              Open Dashboard
            </button>

            <button
              type="button"
              className="btn hero-secondary-btn btn-lg px-4"
              onClick={() => navigate("/students")}
            >
              Manage Students
            </button>
          </div>

          <div className="hero-metrics">
            <div className="hero-metric">
              <strong>1.2k+</strong>
              <span>Students managed</span>
            </div>
            <div className="hero-metric">
              <strong>96%</strong>
              <span>Operational visibility</span>
            </div>
            <div className="hero-metric">
              <strong>4.9/5</strong>
              <span>Admin experience score</span>
            </div>
          </div>
        </div>

        <div className="hero-showcase">
          <div className="showcase-panel">
            <span className="showcase-label">Today</span>
            <h3>Campus pulse</h3>

            <div className="showcase-grid">
              <div>
                <strong>428</strong>
                <span>Present students</span>
              </div>
              <div>
                <strong>18</strong>
                <span>Live classes</span>
              </div>
              <div>
                <strong>09</strong>
                <span>Mentor reviews</span>
              </div>
              <div>
                <strong>87%</strong>
                <span>Course completion</span>
              </div>
            </div>

            <div className="showcase-footer">
              <span>Operational excellence</span>
              <span>Premium experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="page-header feature-header">
          <div>
            <span className="eyebrow mb-3">Platform Modules</span>
            <h2>Every workflow now feels aligned to one production-grade dashboard.</h2>
            <p>
              Navigate across academics, resources, faculty, and credentials
              without breaking the visual system or management flow.
            </p>
          </div>
        </div>

        <div className="feature-grid">
          {featureCards.map((card) => (
            <button
              key={card.title}
              type="button"
              className={`feature-card feature-${card.tone} hover-lift`}
              onClick={() => navigate(card.path)}
            >
              <span className="feature-stat">{card.stat}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <span className="feature-link">Open module</span>
            </button>
          ))}
        </div>
      </section>

      <section className="page-shell p-4 p-lg-5">
        <div className="page-header">
          <div>
            <span className="eyebrow mb-3">Why It Feels Better</span>
            <h2>Cleaner structure, stronger hierarchy, and faster day-to-day navigation.</h2>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-xl-7">
            <div className="module-hero h-100">
              <h3>Built to feel like a real campus operating system.</h3>
              <p>
                The redesign focuses on high-signal screens, premium visual surfaces,
                better spacing, and consistent modules so the app feels trustworthy
                in front of staff, leadership, and students.
              </p>
              <div className="module-hero-metrics">
                <div>
                  <strong>7 modules</strong>
                  <span>Unified inside one shell</span>
                </div>
                <div>
                  <strong>Responsive</strong>
                  <span>Ready for desktop and tablet</span>
                </div>
                <div>
                  <strong>Animated</strong>
                  <span>Motion used with restraint</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5">
            <div className="data-list h-100">
              {highlights.map((item) => (
                <div className="data-row" key={item.title}>
                  <div>
                    <div className="data-row-title">{item.title}</div>
                    <div className="data-row-copy">{item.copy}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
