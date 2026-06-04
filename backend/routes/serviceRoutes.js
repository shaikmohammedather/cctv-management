import express from "express";
// import createRequest from "../controllers/serviceController.js";
import submitServiceRequest from "../controllers/serviceController.js";
const router = express.Router();
router.post("/submit", submitServiceRequest);
export default router;
