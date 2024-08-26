import express, { NextFunction, Request, Response } from "express";
import auth from "../../middlewares/auth";
import { SliderController } from "./slider.controller";

import ApiError from "../../../errors/ApiError";
import { upload } from "../../../utils/storeImage";

const router = express.Router();
router.post(
  "/create",
  // auth("user"),
  upload.single("image"),
  SliderController.createSlider
);
router.get("/list", SliderController.getSlider);
router.delete("/:id", auth("user"), SliderController.deleteSlider);

export const SliderRoutes = router;
