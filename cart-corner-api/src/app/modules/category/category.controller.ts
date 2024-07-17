import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CategoryService } from "./category.service";

const createCategory = catchAsync(async (req: Request, res: Response)=> {
  const { ...categoryData } = req.body;
  const result = await CategoryService.createCategory(categoryData);
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Category created successfully !",
    data: result,
  });
});
const getCategory = catchAsync(async (req: Request, res: Response)=> {

  const result = await CategoryService.getCategory();
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Category list !",
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  getCategory
};
