import "../css/courses.css";

export default function PopularCourses() {
  return (
    <section className="courses">
      <h2>Popular Courses</h2>

      <div className="course-grid">
        <div className="course-card">Web Development</div>
        <div className="course-card">Data Science</div>
        <div className="course-card">UI / UX Design</div>
        <div className="course-card">Mobile Apps</div>
      </div>
    </section>
  );
}
