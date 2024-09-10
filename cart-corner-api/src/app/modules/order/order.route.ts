import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryValidation } from "./product.validation";
import auth from "../../middlewares/auth";
import { upload } from "../../../utils/storeImage";
import { OrderController } from "./order.controller";

const router = express.Router();
router.post(
  "/create",
  // validateRequest(CategoryValidation.createCategoryZodSchema),
  // auth("user"),
  OrderController.createOrder
);
// router.get(
//   "/list",
//   ProductController.getList
// );
// router.get(
//   "/:id",
//   ProductController.getProduct
// );
// router.delete(
//   "/:id",
//   auth("user"),
//   ProductController.deleteProduct
// );

export const OrderRoutes = router;
