import prisma from "../../../shared/prisma";

import { ICategory } from "./category.interface";

const createCategory = async (payload: ICategory) => {
  const { name, description } = payload;

  const res = await prisma.category.create({
    data: {
      name: name,
      description: description,
    },
  });

  return res;
};
const getCategory = async () => {
  const res = await prisma.category.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return res;
};
const categoryDetails = async (id: number) => {
  const res = await prisma.category.findFirst({
    where: {
      id: id,
    },
  });

  return res;
};
const deleteCategory = async (id: number) => {
  const res = await prisma.category.delete({
    where: {
      id: id,
    },
  });

  return res;
};

export const CategoryService = {
  createCategory,
  getCategory,
  deleteCategory,
  categoryDetails
};
