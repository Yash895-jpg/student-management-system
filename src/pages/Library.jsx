const books = [
  {
    id: 1,
    title: "Introduction to Programming",
    author: "John Doe",
    category: "Programming",
  },
  {
    id: 2,
    title: "Data Structures",
    author: "Mark Smith",
    category: "Computer Science",
  },
  {
    id: 3,
    title: "Web Development",
    author: "Sarah Lee",
    category: "Web",
  },
  {
    id: 4,
    title: "Database Systems",
    author: "Alan Walker",
    category: "Database",
  },
  {
    id: 5,
    title: "Operating Systems",
    author: "James Brown",
    category: "Computer Science",
  },
  {
    id: 6,
    title: "Software Engineering",
    author: "Emily Clark",
    category: "Engineering",
  },
];

export default function Library() {
  return (
    <div className="container-fluid page">
      <div className="container py-4 fade-in">
        <div className="page-shell p-4 p-lg-5">
          <div className="page-header">
            <div>
              <span className="eyebrow mb-3">Resource Center</span>
              <h2 className="fw-bold">Library</h2>
              <p className="text-muted">
                Centralize physical and digital learning resources with a cleaner,
                searchable presentation for students and staff.
              </p>
            </div>

            <div className="page-header-actions">
              <button type="button" className="btn btn-soft">
                Inventory sync
              </button>
              <button type="button" className="btn btn-primary">
                Add resource
              </button>
            </div>
          </div>

          <div className="stat-grid">
            <div className="stat-card primary hover-lift">
              <small>Total resources</small>
              <h3>18k</h3>
              <p>Books, journals, and digital reference materials</p>
            </div>
            <div className="stat-card teal hover-lift">
              <small>Checked out today</small>
              <h3>126</h3>
              <p>Resources issued across all departments</p>
            </div>
            <div className="stat-card amber hover-lift">
              <small>Digital access</small>
              <h3>84%</h3>
              <p>Students using the online library catalog weekly</p>
            </div>
            <div className="stat-card rose hover-lift">
              <small>Pending returns</small>
              <h3>19</h3>
              <p>Items that need circulation follow-up</p>
            </div>
          </div>

          <div className="row g-4">
            {books.map((book) => (
              <div className="col-lg-4 col-md-6" key={book.id}>
                <div className="card section-card hover-lift h-100">
                  <div className="d-flex justify-content-between gap-3 mb-3">
                    <span className="badge bg-primary">{book.category}</span>
                    <span className="text-muted small">Shelf A-{book.id}</span>
                  </div>

                  <h4 className="mb-2">{book.title}</h4>
                  <p className="text-muted mb-4">By {book.author}</p>

                  <div className="data-list">
                    <div className="data-row">
                      <div>
                        <div className="data-row-title">Availability</div>
                        <div className="data-row-copy">12 copies ready to issue</div>
                      </div>
                    </div>
                    <div className="data-row">
                      <div>
                        <div className="data-row-title">Usage trend</div>
                        <div className="data-row-copy">High demand during this term</div>
                      </div>
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
