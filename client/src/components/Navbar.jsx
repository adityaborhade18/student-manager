import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Student Manager</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Students</Link>
          <Link to="/add" className="hover:underline">Add Student</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
