import express, { NextFunction, Request, Response } from "express";
import auth from "../../middlewares/auth";
import { BranController } from "./brand.controller";

import ApiError from "../../../errors/ApiError";
import { upload } from "../../../utils/storeImage";

const router = express.Router();
router.post(
  "/create",
  // validateRequest(brandValidation.createBrandZodSchema),
  // (req: Request, res: Response, next: NextFunction) => {
  //   req.body = JSON.parse(req.body.data);
  //   next();
  // },
  // auth("user"),
  upload.single("image"),
  BranController.createBrand
);
router.get("/list", BranController.getBrand);
router.get("/:id", BranController.getDetails);
router.delete("/:id", auth("user"), BranController.deleteBrand);

export const BrandRoutes = router;
