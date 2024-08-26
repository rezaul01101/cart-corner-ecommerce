import prisma from "../../../shared/prisma";
import { ISlider } from "./slider.interface";

const createSlider = async (payload: ISlider) => {
  const { title, sub_title, image } = payload;

  const res = await prisma.slider.create({
    data: {
      title: title,
      sub_title: sub_title,
      image: image,
    },
  });

  return res;
};
const getSlider = async () => {
  const res = await prisma.slider.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return res;
};

const deleteSlider = async (id: number) => {
  const res = await prisma.slider.delete({
    where: {
      id: id,
    },
  });

  return res;
};

export const SliderService = {
  createSlider,
  getSlider,
  deleteSlider
};
