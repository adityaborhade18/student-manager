import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    branch: "",
    year: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!student.name || !student.email || !student.age || !student.branch || !student.year) {
      alert("Please fill all fields!");
      return;
    }

    axios.post("http://localhost:5000/api/students", student) // Replace with your backend URL
      .then(() => {
        alert("Student added successfully!");
        navigate("/"); // Redirect to student list
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="branch"
          placeholder="Branch"
          value={student.branch}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={student.year}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
