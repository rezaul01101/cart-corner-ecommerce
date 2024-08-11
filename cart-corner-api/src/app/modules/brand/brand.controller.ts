import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BrandService } from "./brand.service";
import { IBrand } from "./brand.interface";

const createBrand = catchAsync(async (req: Request, res: Response) => {
  const {name,description} = req.body;
  const file= req.file;
  const data:IBrand ={
    name:name,
    description:description,
    image:file?.path
  }
  
  const result = await BrandService.createBrand(data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Brand created successfully !",
    data: result,
  });
});
const getBrand = catchAsync(async (req: Request, res: Response) => {
  const result = await BrandService.getBrand();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Brand list !",
    data: result,
  });
});

const getDetails = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BrandService.getDetails(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Category Details",
    data: result,
  });
});
const deleteBrand = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BrandService.deleteBrand(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Category deleted",
    data: result,
  });
});

export const BranController = {
  createBrand,
  getBrand,
  getDetails,
  deleteBrand,
};
