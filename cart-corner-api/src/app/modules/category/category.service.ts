import {  Prisma,User } from "@prisma/client";
import prisma from "../../../shared/prisma";
import config from "../../../config";
import bcrypt from "bcrypt";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
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
const insertIntoDB = async (data: User): Promise<User> => {
  const { password, ...user } = data;

  //checking exists user by email
  if (user?.email) {
    const existUser = await prisma.user.findUnique({
      where: {
        email: user?.email,
      },
    });
    if (existUser) {
      throw new ApiError(
        httpStatus.BAD_REQUEST,
        "Already exists this user. Please try again other email"
      );
    }
  }

  //generate plan password to encrypt password
  const encodedPassword = await bcrypt.hash(
    password,
    Number(config.bycrypt_salt_rounds)
  );

  //user create
  const result = await prisma.user.create({
    data: {
      ...user,
      password: encodedPassword,
    },
  });
  return result;
};
export const CategoryService = {
  createCategory
};
