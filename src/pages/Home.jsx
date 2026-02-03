import { useNavigate } from "react-router-dom";
import "../css/home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid page">
      <div className="fade-in">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-overlay text-white">
            <div className="container py-5">
              <h1 className="display-5 fw-bold mb-3">
                Take the First Step to Knowledge
              </h1>

              <p className="lead mb-4">
                Learn smarter with modern education tools
              </p>

              <button
                className="btn btn-primary btn-lg px-4"
                onClick={() => navigate("/dashboard")}
              >
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="container py-5">
          <div className="row g-4">
            <div className="col-md-3">
              <div
                className="feature-card bg-success text-white hover-lift"
                onClick={() => navigate("/courses")}
              >
                <h5>Trending Courses</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="feature-card bg-warning text-dark hover-lift"
                onClick={() => navigate("/library")}
              >
                <h5>Books & Library</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="feature-card bg-primary text-white hover-lift"
                onClick={() => navigate("/teachers")}
              >
                <h5>Certified Teachers</h5>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="feature-card bg-danger text-white hover-lift"
                onClick={() => navigate("/certifications")}
              >
                <h5>Certification</h5>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
