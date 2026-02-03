import "../css/certifications.css";

const certificates = [
  { id: 1, title: "Web Development Certificate" },
  { id: 2, title: "Data Science Certificate" },
  { id: 3, title: "Cloud Computing Certificate" },
  { id: 4, title: "Cyber Security Certificate" },
];

export default function Certifications() {
  return (
   <div className="container-fluid page certifications-bg">
  <div className="container py-4 fade-in"></div>
         {/* 1️⃣ PAGE HEADER */}
    <h2 className="fw-bold">SUBJECT CERTIFICATE</h2>
    <p className="text-muted mb-4">
      BEST FOR FUTURE..
    </p>
    
      <h1>📜 Certifications</h1>

      <div className="certifications-grid">
        {certificates.map((c) => (
          <div className="certificate-card" key={c.id}>
            {c.title}
          </div>
        ))}
      </div>
    </div>
  );
}
