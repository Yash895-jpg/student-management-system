import "../css/courses.css";

export default function Courses() {
  const courses = [
    { id: 1, name: "BCA", duration: "3 Years" },
    { id: 2, name: "BSc", duration: "3 Years" },
    { id: 3, name: "BCom", duration: "3 Years" },
    { id: 4, name: "BTech", duration: "4 Years" },
    { id: 5, name: "MA", duration: "2 Years" },
    { id: 6, name: "MCA", duration: "2 Years" },
    { id: 7, name: "MBA", duration: "2 Years" },
  ];

  return (
    <div className="courses-bg">
      <div className="container py-5 fade-in">
        {/* PAGE HEADER */}
        <h2 className="fw-bold text-white">Courses</h2>
        <p className="text-white-50 mb-5">
          Available academic programs and durations
        </p>

        {/* COURSES GRID */}
        <div className="row g-4">
          {courses.map((course) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={course.id}>
              <div className="card p-4 text-center shadow hover-lift h-100">
                <h5 className="fw-bold mb-2">{course.name}</h5>
                <p className="text-muted mb-0">
                  {course.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
