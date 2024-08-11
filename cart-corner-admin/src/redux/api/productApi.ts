
import { baseApi } from "./baseApi"
const url = "/product";


export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    productCreate: build.mutation({
        query: (data) => (
          {
            url:`${url}/create`,
            method: "POST",
            data,
            contentType: "multipart/form-data"
        }
      )
    }),
  }),
  
})

export const { useProductCreateMutation } = productApi