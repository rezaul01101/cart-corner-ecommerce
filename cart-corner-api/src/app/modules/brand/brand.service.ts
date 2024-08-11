
import prisma from "../../../shared/prisma";
import { IBrand } from "./brand.interface";


const createBrand = async (payload: IBrand) => {
  const { name, description,image } = payload;

  const res= await prisma.brand.create({
    data:{
      name:name,
      description:description,
      image:image
    }
  });
 

  return res ;
};
const getBrand = async () => {
 
  const res= await prisma.brand.findMany({
    orderBy: {
      id: 'desc',
    },
  });
 

  return res ;
};

const getDetails = async (id: number) => {
  const res = await prisma.brand.findFirst({
    where: {
      id: id,
    },
  });

  return res;
};
const deleteBrand = async (id: number) => {
  const res = await prisma.brand.delete({
    where: {
      id: id,
    },
  });

  return res;
};


export const BrandService = {
  createBrand,
  getBrand,
  getDetails,
  deleteBrand
};
