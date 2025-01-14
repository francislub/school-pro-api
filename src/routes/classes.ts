import { createClass, createStream, getBriefClasses, getClasses, getClassesBySchoolId, getStreams } from "@/controllers/classes";
import express from "express";
const classRouter = express.Router();

classRouter.post("/classes", createClass);
classRouter.get("/classes", getClasses);
classRouter.get("/classes/school/:schoolId", getClassesBySchoolId);
classRouter.get("/classes/brief/:schoolId", getBriefClasses);
classRouter.post("/streams", createStream);
classRouter.get("/streams", getStreams);
// schoolRouter.get("/customers/:id", getCustomerById);
// schoolRouter.get("/api/v2/customers", getV2Customers);

export default classRouter;
