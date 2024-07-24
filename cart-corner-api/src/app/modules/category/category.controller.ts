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
const getCategoryDetails = catchAsync(async (req: Request, res: Response)=> {
  const { id } = req.params;
  const result = await CategoryService.categoryDetails(Number(id));
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Category Details",
    data: result,
  });
});
const deleteCategory = catchAsync(async (req: Request, res: Response)=> {
  const { id } = req.params;
  const result = await CategoryService.deleteCategory(Number(id));
  
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Category deleted",
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  getCategory,
  deleteCategory,
  getCategoryDetails
};
