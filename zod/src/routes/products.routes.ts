import { Router } from "express";
import { createProduct } from "../controllers/products.controller";
import { schemaValidator } from "../middlewares/schemaValidator.middleware";
import { productSchema } from "../schemas/product.schema";

const router = Router();

router.post("/products", schemaValidator(productSchema), createProduct);

export default router;
