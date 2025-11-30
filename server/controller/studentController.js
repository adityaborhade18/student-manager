import Student from "../models/student.js";

// Create Student
export const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json({success: true, student});
  } catch (error) {
    res.json({ success:false, message: error.message });
  }
};

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 });
    res.json({success: true, students});
  } catch (error) {
   res.json({ success:false, message: error.message });
  }
};

// Get single student
export const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.json({success: true, student});
  } catch (error) {
    res.json({ success:false, message: error.message });
  }
};

// Update
export const updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({success:true, updated});
  } catch (error) {
    res.json({ success:false, message: error.message });
  }
};

// Delete
export const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({success:true, message: "Student deleted successfully" });
  } catch (error) {
    res.json({ success:false, message: error.message });
  }
};
