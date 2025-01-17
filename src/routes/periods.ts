import { getDepartments } from "@/controllers/departments";
import { createPeriod } from "@/controllers/periods";
import express from "express";
const periodRouter = express.Router();

periodRouter.post("/periods", createPeriod);
// periodRouter.get("/periods", getDepartments);
// periodRouter.get("/departments/school/:schoolId", getDepartmentsBySchoolId);
// periodRouter.get("/departments/brief/:schoolId", getBriefDepartments);

export default periodRouter;
