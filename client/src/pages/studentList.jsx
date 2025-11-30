import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // Fetch all students from backend
  useEffect(() => {
  const fetchStudents = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/students/list");

      if (data.success) {
        setStudents(data.students);
      }

      toast.success("Students loaded successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to load students " + err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchStudents();
}, []);


  // Delete student
  const handleDelete = async(id) => {
    try{
    const {data}=await axios.delete(`http://localhost:5000/api/students/remove/${id}`);
     if(data.success){
       setStudents(students.filter(student => student._id !== id));
       toast.success("Student deleted successfully");
     } 
    }
    catch(err){
        console.error(err); 
        toast.error("Failed to delete student " + err.message);
    }
  };

  if (loading) {
    return <p className="text-center mt-8">Loading students...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Students</h2>
      <table className="min-w-full bg-white shadow-md rounded overflow-hidden">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Age</th>
            <th className="py-2 px-4">Branch</th>
            <th className="py-2 px-4">Year</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4">No students found.</td>
            </tr>
          ) : (
            students.map(student => (
              <tr key={student.id} className="border-b text-center">
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">{student.email}</td>
                <td className="py-2 px-4">{student.age}</td>
                <td className="py-2 px-4">{student.branch}</td>
                <td className="py-2 px-4">{student.year}</td>
                <td className="py-2 px-4 space-x-2">
                  <Link to={`/edit/${student._id}`} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Edit</Link>
                  <button onClick={() => handleDelete(student._id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
