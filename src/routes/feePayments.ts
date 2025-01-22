import { getDepartments } from "@/controllers/departments";
import { createFeePayment } from "@/controllers/payments";
import { createPeriod, getPeriodsByYear, getPeriodsGroupedByYear } from "@/controllers/periods";
import express from "express";
const paymentRouter = express.Router();

paymentRouter.post("/payments", createFeePayment);
paymentRouter.get("/periods/:schoolId", getPeriodsByYear);
paymentRouter.get("/periods/grouped/:schoolId", getPeriodsGroupedByYear);
// periodRouter.get("/departments/school/:schoolId", getDepartmentsBySchoolId);
// periodRouter.get("/departments/brief/:schoolId", getBriefDepartments);

export default paymentRouter;
