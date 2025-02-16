import { getDepartments } from "@/controllers/departments";
import { createPeriod, getPeriodsByYear, getPeriodsGroupedByYear } from "@/controllers/periods";
import express from "express";
const periodRouter = express.Router();

periodRouter.post("/periods", createPeriod);
periodRouter.get("/periods/:schoolId", getPeriodsByYear);
periodRouter.get("/periods/grouped/:schoolId", getPeriodsGroupedByYear);
// periodRouter.get("/departments/school/:schoolId", getDepartmentsBySchoolId);
// periodRouter.get("/departments/brief/:schoolId", getBriefDepartments);

export default periodRouter;
