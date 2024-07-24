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
router.get(
  "/:id",
  BranController.getDetails
);
router.get(
  "/delete/:id",
  auth("user"),
  BranController.deleteBrand
);

export const BrandRoutes = router;
