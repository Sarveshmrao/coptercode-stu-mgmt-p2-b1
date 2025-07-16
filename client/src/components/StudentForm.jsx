import { useState } from "react";
function StudentForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    roll: "",
    department: "",
    email: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.roll) return alert("Name & Roll are required");
    onAdd({ ...form, id: Date.now() });
    setForm({ name: "", roll: "", department: "", email: "" });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-md rounded-xl max-w-md mx-auto"
    >
      {" "}
      <h2 className="text-xl font-semibold mb-4">Add New Student</h2>{" "}
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="roll"
        placeholder="Roll Number"
        value={form.roll}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />{" "}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        {" "}
        Add Student{" "}
      </button>{" "}
    </form>
  );
}
export default StudentForm;
