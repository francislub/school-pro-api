import { createSchoolFee, getSchoolFees, getSchoolFeesByClass } from "@/controllers/school-fees";
import express from "express";
const schoolFeeRouter = express.Router();

schoolFeeRouter.post("/school-fees", createSchoolFee);
schoolFeeRouter.get("/school-fees/:schoolId", getSchoolFees);
schoolFeeRouter.get("/school-fees/class/:schoolId", getSchoolFeesByClass);
// schoolFeeRouter.get("/periods/grouped/:schoolId", getSchoolFees);
// periodRouter.get("/departments/school/:schoolId", getDepartmentsBySchoolId);
// periodRouter.get("/departments/brief/:schoolId", getBriefDepartments);

export default schoolFeeRouter;
