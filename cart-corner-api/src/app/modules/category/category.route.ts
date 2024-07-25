import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryValidation } from "./category.validation";
import { CategoryController } from "./category.controller";
import auth from "../../middlewares/auth";

const router = express.Router();
router.post(
  "/create",
  validateRequest(CategoryValidation.createCategoryZodSchema),
  auth("user"),
  CategoryController.createCategory
);
router.get(
  "/list",
  CategoryController.getCategory
);
router.get(
  "/:id",
  CategoryController.getCategoryDetails
);
router.delete(
  "/:id",
  auth("user"),
  CategoryController.deleteCategory
);

export const CategoryRoutes = router;
