import express from "express";
import {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} from "../controller/studentController.js";

const studentRouter = express.Router();

studentRouter.post("/create", createStudent);
studentRouter.get("/list", getStudents);
studentRouter.get("/:id", getStudent);
studentRouter.put("/update/:id", updateStudent);
studentRouter.delete("/remove/:id", deleteStudent);

export default studentRouter;
