import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProductService } from "./product.service";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const { ...productData } = req.body;
  const images = req.files as Express.Multer.File[];

  const imagesList: any[] = [];
  if (images) {
    images.map((item: any) => {
      return imagesList.push(item?.path);
    });
  }

  const data={
      files:JSON.stringify(imagesList),
      data:productData
  }

  const result = await ProductService.createProduct(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product created successfully !",
    data: result,
  });
});
// const getCategory = catchAsync(async (req: Request, res: Response)=> {

//   const result = await CategoryService.getCategory();

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Category list !",
//     data: result,
//   });
// });
// const getCategoryDetails = catchAsync(async (req: Request, res: Response)=> {
//   const { id } = req.params;
//   const result = await CategoryService.categoryDetails(Number(id));

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Category Details",
//     data: result,
//   });
// });
// const deleteCategory = catchAsync(async (req: Request, res: Response)=> {
//   const { id } = req.params;
//   const result = await CategoryService.deleteCategory(Number(id));

//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: "Category deleted",
//     data: result,
//   });
// });

export const ProductController = {
  createProduct,
};
