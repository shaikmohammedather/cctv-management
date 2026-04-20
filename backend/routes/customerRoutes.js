import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import customerController from "../controllers/customerController.js";

const router = express.Router();

router.post("/", customerController.customerCreation);
router.get("/", customerController.getCustomers);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

export default router;
