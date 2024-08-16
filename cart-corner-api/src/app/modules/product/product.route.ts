import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryValidation } from "./product.validation";
import auth from "../../middlewares/auth";
import { upload } from "../../../utils/storeImage";
import { ProductController } from "./product.controller";

const router = express.Router();
router.post(
  "/create",
  // validateRequest(CategoryValidation.createCategoryZodSchema),
  auth("user"),
  upload.array("images",10),
  ProductController.createProduct
);
router.get(
  "/list",
  ProductController.getList
);
router.get(
  "/:id",
  ProductController.getProduct
);
router.delete(
  "/:id",
  auth("user"),
  ProductController.deleteProduct
);

export const ProductRoutes = router;
