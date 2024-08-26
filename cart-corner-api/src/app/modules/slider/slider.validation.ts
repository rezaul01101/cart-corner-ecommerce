import { z } from 'zod';

const createSliderZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
  }),
});


export const sliderValidation = {
    createSliderZodSchema
  };