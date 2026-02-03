import { useState } from "react";
export default function AddStudent({ onAdd }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !course) return;

    onAdd({ id: Date.now(), name, course });
    setName("");
    setCourse("");
  };

  return (
    <div className="add-student fade-in">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option>BCA</option>
          <option>BSc</option>
          <option>BCom</option>
        </select>

        <button>Add Student</button>
      </form>
    </div>
  );
}
