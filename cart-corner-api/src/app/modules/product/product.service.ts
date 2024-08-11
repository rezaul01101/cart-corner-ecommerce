import prisma from "../../../shared/prisma";
import { IProduct } from "./product.interface";

const createProduct = async (payload: IProduct) => {
  const { files, data } = payload;
  const res = await prisma.product.create({
    data:{
      name:data?.name,
      images:files,
      description:data?.description,
      price:Number(data?.price),
      discount:Number(data?.discount),
      categoryId:Number(data?.categoryId),
      brandId:Number(data?.brandId)
    }
  });

  return res;
};

export const ProductService = {
  createProduct
};
