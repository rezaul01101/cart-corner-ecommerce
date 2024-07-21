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

export const CategoryRoutes = router;
