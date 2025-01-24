import { getDepartments } from "@/controllers/departments";
import { createFeePayment, getPaymentsByYear } from "@/controllers/payments";
import { getPeriodsGroupedByYear } from "@/controllers/periods";
import express from "express";
const paymentRouter = express.Router();

paymentRouter.post("/payments", createFeePayment);
paymentRouter.get("/payments/:schoolId", getPaymentsByYear);

paymentRouter.get("/periods/grouped/:schoolId", getPeriodsGroupedByYear);
// periodRouter.get("/departments/school/:schoolId", getDepartmentsBySchoolId);
// periodRouter.get("/departments/brief/:schoolId", getBriefDepartments);

export default paymentRouter;
