
import { baseApi } from "./baseApi"
const url = "/brand";


export const brandApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    brandCreate: build.mutation({
        query: (data) => (
          {
            url:`${url}/create`,
            method: "POST",
            data: data,
            // contentType: "multipart/form-data",
        }
      )
    }),
    brandList: build.query({
      query: () => ({
        url: `${url}/list`,
        method: "GET",
      }),
    }),
  }),
  
})

export const { useBrandCreateMutation,useBrandListQuery } = brandApi