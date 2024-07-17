
import { baseApi } from "./baseApi"
const CategoryUrl = "/category";


export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    categoryCreate: build.mutation({
        query: (categoryData) => (
          {
            url:`${CategoryUrl}/create`,
            method: "POST",
            data: categoryData
        }
      )
    }),
  }),
  
})

export const { useCategoryCreateMutation } = categoryApi