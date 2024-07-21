
import prisma from "../../../shared/prisma";
import { IBrand } from "./brand.interface";


const createBrand = async (payload: IBrand) => {
  const { name, description } = payload;

  const res= await prisma.brand.create({
    data:{
      name:name,
      description:description
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


export const BrandService = {
  createBrand,
  getBrand
};
