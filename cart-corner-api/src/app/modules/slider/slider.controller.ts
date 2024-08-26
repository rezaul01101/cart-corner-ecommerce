import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { SliderService } from "./slider.service";
import { ISlider } from "./slider.interface";

const createSlider = catchAsync(async (req: Request, res: Response) => {
  const { title, sub_title } = req.body;
  const file = req.file;
  const data: ISlider = {
    title: title,
    sub_title: sub_title,
    image: file?.path,
  };

  console.log(title,sub_title);
  

  const result = await SliderService.createSlider(data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Slider created successfully !",
    data: result,
  });
});
const getSlider = catchAsync(async (req: Request, res: Response) => {
  const result = await SliderService.getSlider();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Slider list !",
    data: result,
  });
});

const deleteSlider = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SliderService.deleteSlider(Number(id));

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Slider deleted",
    data: result,
  });
});

export const SliderController = {
  createSlider,
  getSlider,
  deleteSlider,
};
