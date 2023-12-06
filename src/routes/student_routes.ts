import { Router } from "express";
import { StudentController } from "../controllers/student_controller";

export const studentRouter = Router();
const studentController = new StudentController();

studentRouter.get("/all/:schoolId", studentController.getAllStudents);
studentRouter.post("/create", studentController.createStudent);
studentRouter.get("/:id", studentController.getStudentById);
studentRouter.delete("/delete/:id", studentController.deleteStudentById);
studentRouter.put("/update", studentController.updateStudentById);
