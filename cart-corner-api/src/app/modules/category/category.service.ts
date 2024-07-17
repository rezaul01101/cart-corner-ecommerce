
import prisma from "../../../shared/prisma";

import { ICategory } from "./category.interface";

const createCategory = async (payload: ICategory) => {
  const { name, description } = payload;

  const res= await prisma.category.create({
    data:{
      name:name,
      description:description
    }
  });
 

  return res ;
};
const getCategory = async () => {
 
  const res= await prisma.category.findMany();
 

  return res ;
};

export const CategoryService = {
  createCategory,
  getCategory
};
