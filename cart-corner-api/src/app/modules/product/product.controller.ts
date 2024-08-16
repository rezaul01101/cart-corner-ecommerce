import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProductService } from "./product.service";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const { ...productData } = req.body;
  const images = req.files as Express.Multer.File[];
  console.log(images);
  
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
const getList = catchAsync(async (req: Request, res: Response)=> {

  const result = await ProductService.list();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product list !",
    data: result,
  });
});
const getProduct = catchAsync(async (req: Request, res: Response)=> {
  const { id } = req.params;
  const result = await ProductService.details(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product Details",
    data: result,
  });
});
const deleteProduct = catchAsync(async (req: Request, res: Response)=> {
  const { id } = req.params;
  const result = await ProductService.deleteProduct(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product deleted",
    data: result,
  });
});

export const ProductController = {
  createProduct,
  getList,
  deleteProduct,
  getProduct
};
