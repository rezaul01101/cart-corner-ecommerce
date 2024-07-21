import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { brandValidation } from "./brand.validation";
import auth from "../../middlewares/auth";
import { BranController } from "./brand.controller";

const router = express.Router();
router.post(
  "/create",
  // validateRequest(brandValidation.createBrandZodSchema),
  auth("user"),
  BranController.createBrand
);
router.get(
  "/list",
  BranController.getBrand
);

export const BrandRoutes = router;
