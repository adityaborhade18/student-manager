import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar.jsx";
import StudentList from "./pages/studentList.jsx";
import AddStudent from "./pages/addStudent.jsx";
import EditStudent from "./pages/editStudent.jsx";

function App() {
  return (
  
    <>
    
   
   <Toaster />
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/edit/:id" element={<EditStudent />} />
          </Routes>
        </div>
      </div>
    </Router>
    </>

  );
}

export default App;
