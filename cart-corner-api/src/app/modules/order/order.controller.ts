import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { OrderService } from "./order.service";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { ...orderData } = req.body;
  const { orderUserData, products, paymentMethod } = orderData;
  
  console.log("order data", orderUserData, products);

  // const result = await ProductService.createProduct(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Order created successfully !",
    data: orderData,
  });
});
// const getList = catchAsync(async (req: Request, res: Response)=> {

//   const result = await ProductService.list();

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Product list !",
//     data: result,
//   });
// });
// const getProduct = catchAsync(async (req: Request, res: Response)=> {
//   const { id } = req.params;
//   const result = await ProductService.details(Number(id));

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Product Details",
//     data: result,
//   });
// });
// const deleteProduct = catchAsync(async (req: Request, res: Response)=> {
//   const { id } = req.params;
//   const result = await ProductService.deleteProduct(Number(id));

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Product deleted",
//     data: result,
//   });
// });

export const OrderController = {
  createOrder,
};
