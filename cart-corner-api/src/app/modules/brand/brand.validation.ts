import { z } from 'zod';

const createBrandZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
  }),
});


export const brandValidation = {
    createBrandZodSchema
  };