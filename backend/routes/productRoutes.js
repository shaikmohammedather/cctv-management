import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/seller", productController.getSellerProducts);
router.get("/", productController.getAllProducts);
router.delete("/:id", productController.deleteProduct);

export default router;
