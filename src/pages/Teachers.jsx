import "../css/teachers.css"; // ✅ MUST be imported

import rajesh from "../assets/teachers/rajesh.jpg";
import anita from "../assets/teachers/anita.jpg";
import rahul from "../assets/teachers/rahul.jpg";
import neha from "../assets/teachers/neha.jpg";

export default function Teachers() {
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

  return (
    <div className="teachers-bg">
      <div className="container py-5 fade-in">
        {/* PAGE HEADER */}
        <h2 className="fw-bold text-white">Certified Teachers</h2>
        <p className="text-white-50 mb-5">
          Meet our experienced and certified faculty
        </p>

        {/* TEACHERS GRID */}
        <div className="row g-4">
          {teachers.map((t) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={t.id}>
              <div className="card text-center p-4 shadow hover-lift h-100">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-circle mx-auto mb-3"
                  style={{
                    width: "110px",
                    height: "110px",
                    objectFit: "cover",
                  }}
                />

                <h5 className="fw-bold mb-1">{t.name}</h5>
                <p className="text-muted mb-0">{t.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
