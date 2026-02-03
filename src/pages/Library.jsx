export default function Library() {
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

  return (
    <div className="container-fluid page">
      <div className="container py-4 fade-in">
        {/* PAGE HEADER */}
        <h2 className="fw-bold">📚 Library</h2>
        <p className="text-muted mb-4">
          Browse books and learning resources
        </p>

        {/* BOOKS GRID */}
        <div className="row g-4">
          {books.map((book) => (
            <div className="col-md-4" key={book.id}>
              <div className="card p-4 shadow-sm hover-lift h-100">
                <h5 className="fw-bold mb-2">{book.title}</h5>

                <p className="mb-1 text-muted">
                  <strong>Author:</strong> {book.author}
                </p>

                <span className="badge bg-primary mt-2">
                  {book.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
