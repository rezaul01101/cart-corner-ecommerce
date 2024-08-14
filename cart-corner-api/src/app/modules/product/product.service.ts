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

const list= async ()=>{
  const res= await prisma.product.findMany({
    orderBy: {
      id: 'desc',
    },
    include:{
      category:true,
      brand:true
    }
  });
 

  return res ;
}

const deleteProduct = async (id: number) => {
  const res = await prisma.product.delete({
    where: {
      id: id,
    },
  });

  return res;
};

export const ProductService = {
  createProduct,
  list,
  deleteProduct
};
