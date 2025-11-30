import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    branch: "",
    year: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch student data by ID
  useEffect(() => {
    axios.get(`http://localhost:5000/api/students/${id}`) // Replace with your backend URL
      .then(res => {
        setStudent(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Simple validation
    if (!student.name || !student.email || !student.age || !student.branch || !student.year) {
      toast.error("Please fill in all fields");
      return;
    }
    try{
    const {data}=await axios.put(`http://localhost:5000/api/students/update/${id}`, student);
    if(data.success){
      toast.success("Student updated successfully");
      navigate("/");
    }
  }catch(err){
    console.error(err);
    toast.error("Failed to update student " + err.message);
  }};

  if (loading) {
    return <p className="text-center mt-8">Loading student data...</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Student</h2>
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
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Update Student
        </button>
      </form>
    </div>
  );
}

export default EditStudent;
