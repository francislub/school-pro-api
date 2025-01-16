import { createStudent, getNextStudentSquence, getStudents, getStudentsByParentId, getStudentsBySchoolId } from "@/controllers/students";
import express from "express";
const studentRouter = express.Router();

studentRouter.post("/students", createStudent);
studentRouter.get("/students", getStudents);
studentRouter.get("/students/school/:schoolId", getStudentsBySchoolId);
studentRouter.get("/students/parent/:parentId", getStudentsByParentId);
studentRouter.get("/students/seq/:schoolId", getNextStudentSquence);
// studentRouter.get("/customers/:id", getCustomerById);
// studentRouter.get("/api/v2/customers", getV2Customers);

export default studentRouter;
